
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, Wand2, History } from 'lucide-react'

import { getInterviewQuestion } from '@/ai/flows/ai-interview-simulator'
import type { InterviewSimulatorOutput } from '@/ai/flows/ai-interview-simulator'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const formSchema = z.object({
  careerGoal: z.string().min(5, 'Please describe your career goal.'),
  technicalSkills: z.string().min(5, 'Please list your technical skills.'),
})

export default function InterviewPage() {
  const [interviewState, setInterviewState] = useState<{
    history: InterviewSimulatorOutput[]
    isLoading: boolean
  }>({
    history: [],
    isLoading: false,
  })

  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      careerGoal: '',
      technicalSkills: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setInterviewState(prevState => ({ ...prevState, isLoading: true }))
    try {
      const question = await getInterviewQuestion(values)
      setInterviewState(prevState => ({
        history: [...prevState.history, question],
        isLoading: false
      }))
    } catch (error) {
      console.error(error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate interview question. Please try again.",
      })
      setInterviewState(prevState => ({ ...prevState, isLoading: false }))
    }
  }

  const currentQuestion = interviewState.history.length > 0 ? interviewState.history[interviewState.history.length - 1] : null;
  const previousQuestions = interviewState.history.slice(0, -1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 items-stretch">
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl font-bold font-headline">AI Interview Simulator</h1>
          <p className="text-muted-foreground">Practice makes perfect. Let's get you ready for your next interview.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>Provide some context for the AI to generate tailored questions.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="careerGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Career Goal</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Senior Frontend Engineer at a FAANG company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="technicalSkills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Technical Skills</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., React, TypeScript, Node.js, AWS" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={interviewState.isLoading} className="w-full">
                  {interviewState.isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" /> Generate Question
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col space-y-8">
        <Card className="flex-1 flex flex-col">
          <CardHeader>
            <CardTitle>Your Question</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            {interviewState.isLoading && interviewState.history.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p>Generating your personalized question...</p>
              </div>
            )}
            {currentQuestion && (
              <div className="space-y-4">
                <p className="text-lg font-semibold">{currentQuestion.question}</p>
                <Card className="bg-accent/50">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Why this question?</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">{currentQuestion.justification}</p>
                  </CardContent>
                </Card>
                <Textarea placeholder="Type your answer here..." rows={6} />
                 <Button className="w-full">Submit Answer (Coming Soon)</Button>
              </div>
            )}
            {!interviewState.isLoading && !currentQuestion && (
              <div className="flex flex-col items-center justify-center h-full gap-2 text-center text-muted-foreground min-h-[200px]">
                <p>Your interview question will appear here.</p>
                <p className="text-sm">Fill out your profile and click "Generate Question" to begin.</p>
              </div>
            )}
            {interviewState.isLoading && interviewState.history.length > 0 && (
                 <div className="flex items-center justify-center text-muted-foreground pt-4 gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <p>Generating next question...</p>
                </div>
            )}
          </CardContent>
        </Card>
        
        {previousQuestions.length > 0 && (
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <History className="h-5 w-5"/>
                        Question History
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[200px] pr-4">
                        <div className="space-y-4">
                        {previousQuestions.slice().reverse().map((item, index) => (
                            <div key={index}>
                                <p className="font-semibold text-sm">{item.question}</p>
                                <p className="text-xs text-muted-foreground mt-1">{item.justification}</p>
                                {index < previousQuestions.length - 1 && <Separator className="my-4"/>}
                            </div>
                        ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        )}
      </div>
    </div>
  )
}
