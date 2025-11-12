
'use client'

import { useState } from 'react'
import { Newspaper, Search, Loader2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { news } from '@/lib/data'
import { JobCard } from '@/components/job-card'
import { scrapeJobs } from '@/ai/flows/job-scraper'
import type { ScrapeJobsOutput } from '@/ai/flows/job-scraper'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [jobs, setJobs] = useState<ScrapeJobsOutput['jobs']>([])
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast()

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!query.trim()) {
      setJobs([])
      setHasSearched(false)
      return
    }

    setIsLoading(true)
    setJobs([])
    setHasSearched(true)
    try {
      const result = await scrapeJobs({ query })
      setJobs(result.jobs)
    } catch (error) {
      console.error(error)
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to fetch jobs. Please try again.',
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  const showNews = !hasSearched && !isLoading;

  return (
    <div className="space-y-8 flex-1 flex flex-col">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Find Your Dream Job
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Our platform gamifies your job search, helping you land your perfect role in tech.
        </p>

        <form onSubmit={handleSearch} className="relative my-8 max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for jobs, e.g., 'React developer in New York'"
            className="h-14 pl-12 pr-28 rounded-full border-border focus:ring-primary/50 text-base"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading}
          />
          <Button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 h-10 rounded-full px-6" disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin" /> : 'Search'}
          </Button>
        </form>
      </div>

      <div className="w-full">
        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {hasSearched && !isLoading && jobs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        )}

        {hasSearched && !isLoading && jobs.length === 0 && (
           <div className="flex flex-col items-center justify-center text-center py-10 rounded-lg border border-dashed bg-card">
            <p className="text-lg font-medium text-muted-foreground">No jobs found</p>
            <p className="text-sm text-muted-foreground">Try adjusting your search criteria.</p>
          </div>
        )}

        {showNews && (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-lg w-10 h-10 flex items-center justify-center">
                  <Newspaper className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-semibold leading-none tracking-tight font-headline">Live News Updates</h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {news.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-2 rounded-lg hover:bg-accent transition-colors">
                    <div className="text-2xl">{item.emoji}</div>
                    <div className='flex-1'>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">{item.source} · {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
