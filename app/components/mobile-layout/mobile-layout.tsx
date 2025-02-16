import { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
// =========================================================

import { MobileNavBar } from '~/components';

export function MobileLayout({ children }: TProps) {
  return (
    <div className='min-h-screen bg-background'>
      {/* <div className='fixed top-0 left-0 right-0 h-8 bg-white flex items-center justify-center text-sm text-neutral-900 z-50'>
        magppie.com
      </div> */}
      {children}
      <MobileNavBar />
    </div>
  );
}

interface TProps {
  children: ReactNode;
}
