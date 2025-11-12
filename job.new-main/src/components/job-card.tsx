import Image from 'next/image'
import { MapPin, DollarSign } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type JobCardProps = {
  job: {
    title: string
    company: string
    location: string
    salary: string
    source: string
    logo: string
    dataAiHint: string
  }
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="transform-gpu transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="flex flex-row items-start gap-4">
        <Image
          src={job.logo}
          alt={`${job.company} logo`}
          width={50}
          height={50}
          className="rounded-lg"
          data-ai-hint={job.dataAiHint}
        />
        <div>
          <CardTitle className="text-lg">{job.title}</CardTitle>
          <CardDescription>{job.company}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <DollarSign className="h-4 w-4" />
          <span>{job.salary}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge variant={job.source === 'LinkedIn' ? 'default' : 'secondary'}>
          {job.source}
        </Badge>
        <Button>Apply Now</Button>
      </CardFooter>
    </Card>
  )
}
