import { Briefcase } from 'lucide-react'

export const Icons = {
  logo: () => (
    <div className="flex items-center gap-2">
      <Briefcase className="h-6 w-6 text-primary" />
      <span className="text-lg font-bold font-headline text-foreground">
        Job Finder
      </span>
    </div>
  ),
}
