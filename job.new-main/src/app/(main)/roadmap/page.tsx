
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, Rocket, Wand2, CheckCircle, CircleDashed } from 'lucide-react'

import { generateRoadmap } from '@/ai/flows/roadmap-generator'
import type { GenerateRoadmapOutput } from '@/ai/flows/roadmap-generator'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  careerGoal: z.string().min(5, 'Please describe your career goal.'),
})

export default function RoadmapPage() {
  const [roadmapState, setRoadmapState] = useState<{
    steps: GenerateRoadmapOutput['steps'] | null
    isLoading: boolean
  }>({
    steps: null,
    isLoading: false,
  })

  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      careerGoal: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setRoadmapState({ steps: null, isLoading: true })
    try {
      const result = await generateRoadmap(values)
      setRoadmapState({ steps: result.steps, isLoading: false })
    } catch (error) {
      console.error(error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate roadmap. Please try again.",
      })
      setRoadmapState({ steps: null, isLoading: false })
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 flex-1 items-stretch">
      <div className="space-y-8 flex flex-col">
        <div>
          <h1 className="text-3xl font-bold font-headline">AI Developer Roadmap</h1>
          <p className="text-muted-foreground">Get a personalized guide to achieving your career goals.</p>
        </div>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Your Goal</CardTitle>
            <CardDescription>Tell the AI what you want to achieve.</CardDescription>
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
                        <Input placeholder="e.g., Become a self-driving car engineer at Tesla" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={roadmapState.isLoading} className="w-full">
                  {roadmapState.isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" /> Generate Roadmap
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8 flex flex-col">
        <Card className="flex-1 flex flex-col">
          <CardHeader>
            <CardTitle>Your Roadmap</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col items-center justify-center">
            {roadmapState.isLoading && (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p>Generating your personalized roadmap...</p>
              </div>
            )}
            {roadmapState.steps && (
              <div className="relative w-full">
                <div className="absolute left-6 top-6 h-full w-0.5 bg-border -z-10" />
                <div className="space-y-12">
                  {roadmapState.steps.map((step, index) => {
                    const isCompleted = step.status === 'completed'
                    const isInProgress = step.status === 'in_progress'

                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div
                          className={cn(
                            'mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2',
                            isCompleted
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border bg-card',
                            isInProgress && 'border-primary'
                          )}
                        >
                          {isCompleted ? (
                            <CheckCircle className="h-6 w-6" />
                          ) : isInProgress ? (
                            <Rocket className="h-6 w-6 animate-pulse text-primary" />
                          ) : (
                            <CircleDashed className="h-6 w-6 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-xl font-semibold font-headline">{step.title}</h3>
                          <p className="mt-1 text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
            {!roadmapState.isLoading && !roadmapState.steps && (
              <div className="flex flex-col items-center justify-center h-full gap-2 text-center text-muted-foreground">
                <p>Your personalized roadmap will appear here.</p>
                <p className="text-sm">Enter your career goal to begin.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
