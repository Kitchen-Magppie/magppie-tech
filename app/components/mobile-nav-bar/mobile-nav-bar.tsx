import { Icon } from '@iconify/react';
// =========================================================
import { NAVIGATION_OPTIONS } from '~/mocks';

export function MobileNavBar() {
  return (
    <nav className='fixed bottom-4 left-1/2 -translate-x-1/2 h-14 bg-white/80 backdrop-blur-md rounded-full px-6 shadow-lg z-50'>
      <div className='flex items-center h-full gap-8'>
        {NAVIGATION_OPTIONS?.map((item, i) => {
          return (
            <Icon
              icon={item.icon}
              className={`hover:bg-transparent w-8 h-8  ${
                !i ? 'text-neutral-600' : 'text-neutral-400'
              }`}
              key={i}
            />
          );
        })}
      </div>
    </nav>
  );
}
