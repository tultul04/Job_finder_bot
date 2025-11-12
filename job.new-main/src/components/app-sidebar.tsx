'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Award,
  Briefcase,
  Code,
  FileText,
  LayoutDashboard,
  Map,
  Mic,
  Trophy,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarFooter,
} from '@/components/ui/sidebar'
import { userBadges, badgeIcons } from '@/lib/data'

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/jobs', label: 'Jobs', icon: Briefcase },
  { href: '/interview', label: 'Interview Prep', icon: Mic },
  { href: '/roadmap', label: 'Roadmap', icon: Map },
  { href: '/challenges', label: 'Challenges', icon: Code },
  { href: '/resume', label: 'Resume Analyzer', icon: FileText },
  { href: '/achievements', label: 'Achievements', icon: Trophy },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar
      className="border-r"
      collapsible="icon"
      variant="sidebar"
    >
      <SidebarHeader>
        <Icons.logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                href={item.href}
                isActive={pathname === item.href}
                tooltip={item.label}
                className={cn(
                  'flex items-center gap-2',
                )}
              >
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span className="flex-1 group-data-[state=collapsed]:hidden">{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarGroup>
          <SidebarGroupLabel>Achievements</SidebarGroupLabel>
          <div className="flex flex-wrap gap-2 pt-2">
            {userBadges.map((badge) => {
              const Icon = badgeIcons[badge.icon] || Award
              return (
                <Badge
                  key={badge.name}
                  variant="secondary"
                  className="flex items-center gap-1.5"
                >
                  <Icon className="h-3 w-3" />
                  {badge.name}
                </Badge>
              )
            })}
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-col gap-3 p-2">
          <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="user avatar" />
              <AvatarFallback>AT</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Alex Turner</span>
              <span className="text-xs text-muted-foreground">Level 5</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>XP: 1,250 / 2,000</span>
              <span>Level 6</span>
            </div>
            <Progress value={(1250 / 2000) * 100} className="h-2" />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
