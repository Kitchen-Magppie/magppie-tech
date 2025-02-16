import { ReactNode } from 'react';
import { Icon } from '@iconify/react';
// =========================================================
import { Button } from '~/components/ui/button';

export function MobileNavBar() {
  return (
    <nav className='fixed bottom-4 left-1/2 -translate-x-1/2 h-14 bg-white/80 backdrop-blur-md rounded-full px-6 shadow-lg z-50'>
      <div className='flex items-center h-full gap-8'>
        <NavItem
          icon={<Icon icon='mynaui:home' className='h-5 w-5' />}
          isActive
        />
        <NavItem icon={<Icon icon='lucide:droplets' className='h-5 w-5' />} />
        <NavItem
          icon={<Icon icon='line-md:account-small' className='h-5 w-5' />}
        />
        <NavItem
          icon={
            <Icon icon='fluent:more-horizontal-16-filled' className='h-5 w-5' />
          }
        />
      </div>
    </nav>
  );
}

function NavItem({ icon, isActive }: TProps) {
  return (
    <Button
      variant='ghost'
      size='icon'
      className={`hover:bg-transparent ${
        isActive ? 'text-emerald-600' : 'text-neutral-600'
      }`}
    >
      {icon}
    </Button>
  );
}
interface TProps {
  icon: ReactNode;
  isActive?: boolean;
}
