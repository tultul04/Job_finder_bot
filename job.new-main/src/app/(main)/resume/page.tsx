
'use client'

import { useState } from 'react'
import { Loader2, UploadCloud, Wand2 } from 'lucide-react'
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
} from 'recharts'

import type { AnalyzeResumeOutput } from '@/ai/flows/resume-analyzer'
import { analyzeResume } from '@/ai/flows/resume-analyzer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { ChartContainer } from '@/components/ui/chart'

export default function ResumePage() {
  const [file, setFile] = useState<globalThis.File | null>(null)
  const [jobDescription, setJobDescription] = useState('')
  const [analysis, setAnalysis] = useState<AnalyzeResumeOutput | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const fileToDataUri = (file: globalThis.File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  const handleSubmit = async () => {
    if (!file) {
      toast({
        variant: 'destructive',
        title: 'No resume selected',
        description: 'Please upload your resume to be analyzed.',
      })
      return
    }
    if (!jobDescription.trim()) {
        toast({
            variant: 'destructive',
            title: 'No job description',
            description: 'Please provide a job description for analysis.',
        })
        return
    }

    setIsLoading(true)
    setAnalysis(null)
    try {
        const resumeDataUri = await fileToDataUri(file)
        const result = await analyzeResume({ resumeDataUri, jobDescription })
        setAnalysis(result)
    } catch (error) {
      console.error(error)
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: 'Something went wrong. Please try again.',
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  const chartData = analysis ? [{ subject: 'Score', value: analysis.score, fullMark: 100 }] : [];
  const chartConfig = {
    value: {
      label: 'Score',
      color: 'hsl(var(--chart-1))',
    },
  } satisfies Parameters<typeof ChartContainer>[0]['config'];


  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 flex-1 items-stretch">
      <div className="space-y-8 flex flex-col">
        <div>
          <h1 className="text-3xl font-bold font-headline">Resume Analyzer</h1>
          <p className="text-muted-foreground">Get AI-powered feedback to make your resume stand out.</p>
        </div>

        <Card className="flex-1 flex flex-col">
            <CardHeader>
                <CardTitle>Upload Your Resume</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
                 <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-accent">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <UploadCloud className="w-8 h-8 mb-4 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">PDF (MAX. 5MB)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept=".pdf" />
                    </label>
                </div> 
                {file && <p className="text-sm text-center text-muted-foreground">Selected file: {file.name}</p>}

                <Textarea
                    placeholder="Paste the job description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    rows={8}
                    className="flex-1"
                />
                <Button onClick={handleSubmit} disabled={isLoading} className="w-full">
                    {isLoading ? (
                        <Loader2 className="animate-spin" />
                    ) : (
                        <>
                        <Wand2 className="mr-2 h-4 w-4" /> Analyze Resume
                        </>
                    )}
                </Button>
            </CardContent>
        </Card>
      </div>
      <div className="space-y-8 flex flex-col">
        <Card className="flex-1 flex flex-col">
          <CardHeader>
            <CardTitle>Analysis Results</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col items-center justify-center">
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p>Analyzing your resume against the job description...</p>
              </div>
            )}
            {analysis && (
                <div className="space-y-6 w-full">
                    <div>
                        <h3 className="font-semibold mb-2 text-center">Resume Score</h3>
                         <div className="h-[250px] w-full">
                            <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
                                <RadarChart data={chartData}>
                                <PolarGrid gridType="circle" />
                                <PolarAngleAxis dataKey="subject" tick={false} />
                                <Radar
                                    dataKey="value"
                                    fill="var(--color-value)"
                                    fillOpacity={0.6}
                                    dot
                                />
                                </RadarChart>
                            </ChartContainer>
                        </div>
                         <p className="text-2xl font-bold text-center -mt-8">{analysis.score} / 100</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Overall Feedback</h3>
                        <p className="text-sm text-muted-foreground">{analysis.overallFeedback}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Suggestions for Improvement</h3>
                        <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                            {analysis.suggestions.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                    </div>
                </div>
            )}
            {!isLoading && !analysis && (
              <div className="flex flex-col items-center justify-center text-center h-full gap-2 text-muted-foreground">
                <p>Your resume analysis will appear here.</p>
                <p className="text-sm">Upload your resume and the job description to get started.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
