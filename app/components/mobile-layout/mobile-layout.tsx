import type React from "react"
import { MobileNavBar } from "~/components"

interface MobileLayoutProps {
  children: React.ReactNode
}

export function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 h-7 bg-white flex items-center justify-center text-xs text-neutral-900 z-50">
        magppie.com
      </div>
      <div className="pt-7">{children}</div>
      <MobileNavBar />
    </div>
  )
}

