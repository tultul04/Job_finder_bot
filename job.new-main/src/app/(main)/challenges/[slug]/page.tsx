
// @/app/(main)/challenges/[slug]/page.tsx
'use client'

import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { challenges } from '@/lib/data'

export default function ChallengeDetailPage({ params }: { params: { slug: string } }) {
  const challenge = challenges.find(c => c.slug === params.slug)

  if (!challenge) {
    notFound()
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 items-stretch">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold font-headline">{challenge.title}</h1>
        <p className="text-muted-foreground">
          {challenge.description}
        </p>
        <Card className="flex-grow">
          <CardHeader>
            <CardTitle>Problem Description</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="prose prose-sm dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: challenge.details || '' }}
            />
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col space-y-4">
        <Card className="flex-grow flex flex-col">
          <CardHeader>
            <CardTitle>Solution</CardTitle>
            <CardDescription>Write your code here. (Editor is for demonstration)</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <div className="flex-grow bg-muted/50 rounded-md p-4 font-code text-sm overflow-auto">
              <pre><code>{challenge.boilerplate}</code></pre>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-end gap-2">
            <Button variant="secondary">Run Code</Button>
            <Button>Submit Solution</Button>
        </div>
      </div>
    </div>
  )
}
