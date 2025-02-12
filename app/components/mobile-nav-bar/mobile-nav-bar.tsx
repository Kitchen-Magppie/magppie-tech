import type React from "react"
import { Home, Droplets, User, MoreHorizontal } from "lucide-react"
import { Button } from "~/components/ui/button"

export function MobileNavBar() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 h-14 bg-white/80 backdrop-blur-md rounded-full px-6 shadow-lg">
      <div className="flex items-center h-full gap-8">
        <NavItem icon={<Home className="h-5 w-5" />} isActive />
        <NavItem icon={<Droplets className="h-5 w-5" />} />
        <NavItem icon={<User className="h-5 w-5" />} />
        <NavItem icon={<MoreHorizontal className="h-5 w-5" />} />
      </div>
    </nav>
  )
}

interface NavItemProps {
  icon: React.ReactNode
  isActive?: boolean
}

function NavItem({ icon, isActive }: NavItemProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`hover:bg-transparent ${isActive ? "text-emerald-600" : "text-neutral-600"}`}
    >
      {icon}
    </Button>
  )
}

