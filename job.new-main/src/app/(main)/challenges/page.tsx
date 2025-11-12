import Link from 'next/link'
import { CheckCircle, Pencil, Circle } from 'lucide-react'
import { challenges } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

function StatusBadge({ status }: { status: string }) {
  if (status === 'Solved') {
    return (
      <span className="flex items-center gap-2 text-green-600">
        <CheckCircle className="h-4 w-4" /> {status}
      </span>
    )
  }
  if (status === 'Attempted') {
    return (
      <span className="flex items-center gap-2 text-yellow-600">
        <Pencil className="h-4 w-4" /> {status}
      </span>
    )
  }
  return (
    <span className="flex items-center gap-2 text-muted-foreground">
      <Circle className="h-4 w-4" /> {status}
    </span>
  )
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
    return (
        <Badge variant="outline" className={cn(
            difficulty === 'Easy' && 'border-green-500 text-green-500',
            difficulty === 'Medium' && 'border-yellow-500 text-yellow-500',
            difficulty === 'Hard' && 'border-red-500 text-red-500',
        )}>
            {difficulty}
        </Badge>
    )
}

export default function ChallengesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Coding Challenges</h1>
        <p className="text-muted-foreground">Practice problems to sharpen your skills for technical interviews.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Problem Set</CardTitle>
          <CardDescription>Select a problem to start coding.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Status</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {challenges.map((challenge) => (
                <TableRow key={challenge.title} className="hover:bg-accent">
                  <TableCell className="font-medium">{challenge.title}</TableCell>
                  <TableCell><DifficultyBadge difficulty={challenge.difficulty} /></TableCell>
                  <TableCell><StatusBadge status={challenge.status} /></TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/challenges/${challenge.slug}`}>Solve</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
