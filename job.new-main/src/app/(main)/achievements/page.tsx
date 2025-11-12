import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { badges, badgeIcons } from '@/lib/data'
import { cn } from '@/lib/utils'
import { Check, Star } from 'lucide-react'

export default function AchievementsPage() {
  const completedBadges = badges.filter(badge => badge.completed).length
  const totalBadges = badges.length
  const progress = (completedBadges / totalBadges) * 100

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Your Achievements</h1>
        <p className="text-muted-foreground">
          Track your progress and unlock new badges as you grow your career.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
          <CardDescription>You've earned {completedBadges} out of {totalBadges} available badges.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full bg-muted rounded-full h-2.5">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge) => {
          const Icon = badgeIcons[badge.icon] || Star
          return (
            <Card key={badge.name} className={cn("flex flex-col", badge.completed ? 'border-primary/50' : '')}>
              <CardHeader className="flex-row items-center gap-4 space-y-0">
                  <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center",
                      badge.completed ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{badge.name}</CardTitle>
                  <CardDescription>{badge.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex items-end justify-between">
                {badge.completed ? (
                  <Badge variant="default" className="gap-1.5 pl-2 pr-3">
                    <Check className="w-4 h-4" />
                    <span>Completed</span>
                  </Badge>
                ) : (
                  <Badge variant="secondary">Locked</Badge>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
