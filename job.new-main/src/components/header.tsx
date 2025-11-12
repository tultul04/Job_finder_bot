"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-14 w-full items-center justify-between border-b bg-transparent px-4 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="flex items-center gap-2 lg:hidden">
        <SidebarTrigger />
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <ThemeToggle />
      </div>
    </header>
  )
}
