
'use client'

import { useState } from 'react'
import { Loader2, Search } from 'lucide-react'

import { scrapeJobs } from '@/ai/flows/job-scraper'
import type { ScrapeJobsOutput } from '@/ai/flows/job-scraper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { JobCard } from '@/components/job-card'
import { jobs as initialJobs } from '@/lib/data'

export default function JobsPage() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [source, setSource] = useState('all')
  const [isLoading, setIsLoading] = useState(false)
  const [jobs, setJobs] = useState<ScrapeJobsOutput['jobs']>(initialJobs)
  const { toast } = useToast()

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!query.trim()) {
      toast({
        variant: 'destructive',
        title: 'Empty Search',
        description: 'Please enter a job title, keywords, or company.',
      })
      return
    }

    setIsLoading(true)
    setJobs([])
    try {
      const fullQuery = `${query} ${location ? `in ${location}` : ''} ${source !== 'all' ? `on ${source}` : ''}`.trim()
      const result = await scrapeJobs({ query: fullQuery })
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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Find Your Next Opportunity</h1>
        <p className="text-muted-foreground">
          Search for jobs from LinkedIn, Internshala, and more.
        </p>
      </div>

      <form onSubmit={handleSearch} className="flex flex-col gap-4 rounded-lg border bg-card p-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Job title, keywords, or company"
            className="pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <Input
          placeholder="Location"
          className="flex-1"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          disabled={isLoading}
        />
        <Select value={source} onValueChange={setSource} disabled={isLoading}>
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Platforms</SelectItem>
            <SelectItem value="linkedin">LinkedIn</SelectItem>
            <SelectItem value="internshala">Internshala</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
          {isLoading ? <Loader2 className="animate-spin" /> : 'Search'}
        </Button>
      </form>

      {isLoading && (
        <div className="flex justify-center py-10">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      {!isLoading && jobs.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      )}

      {!isLoading && jobs.length === 0 && (
         <div className="flex flex-col items-center justify-center text-center py-10 rounded-lg border border-dashed bg-card">
          <p className="text-lg font-medium text-muted-foreground">No jobs found</p>
          <p className="text-sm text-muted-foreground">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  )
}
