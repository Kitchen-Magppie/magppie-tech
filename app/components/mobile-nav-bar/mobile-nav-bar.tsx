import { Icon } from '@iconify/react';
// =========================================================
import { NAVIGATION_OPTIONS } from '~/mocks';
import { MobileNavItem } from './mobile-nav-item';

export function MobileNavBar() {
  return (
    <nav className='fixed bottom-4 left-1/2 -translate-x-1/2 h-14 bg-white/80 backdrop-blur-md rounded-full px-6 shadow-lg z-50'>
      <div className='flex items-center h-full gap-8'>
        {NAVIGATION_OPTIONS?.map((item, i) => {
          return (
            <MobileNavItem
              key={i}
              icon={<Icon icon={item.icon} className='h-5 w-5' />}
              isActive={!i} // NOTE: To active first item only;
            />
          );
        })}
      </div>
    </nav>
  );
}
