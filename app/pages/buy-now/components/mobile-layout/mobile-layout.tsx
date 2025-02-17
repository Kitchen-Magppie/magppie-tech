import { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
// =========================================================

export function MobileLayout({ children }: TProps) {
  return <div className='min-h-screen bg-background'>{children}</div>;
}

interface TProps {
  children: ReactNode;
}
