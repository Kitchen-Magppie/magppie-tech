import type { MetaFunction } from '@remix-run/node';
// =========================================================
import { TableExample, MobileLayout } from '~/components';
import { Button } from '~/components/ui/button';

// =========================================================
import HomeVideo from '../assets/home-intro.mp4';

export default function Index() {
  return (
    <div>
      <MobileLayout>
        <div className='relative min-h-screen'>
          {/* Background Video */}
          <div className='absolute inset-0 w-full h-full overflow-hidden'>
            <video
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={HomeVideo} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Dark Overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-50'></div>

          {/* Content Overlay */}
          <div className='relative flex flex-col items-center pt-8 px-6 text-center'>
            {/* Logo */}
            <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4'>
              <span className='text-emerald-900 font-bold text-lg'>
                MAGPPIE
              </span>
            </div>

            {/* Title */}
            <h1 className='text-3xl font-semibold text-white mb-2'>
              Wellness Kitchen
            </h1>

            {/* Subtitle */}
            <p className='text-white/90 mt-60 text-lg'>
              Welcome to the wellness movement
            </p>
          </div>
        </div>
      </MobileLayout>
      <TableExample />
      <Button>Submit</Button>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: 'MAGPPIE' },
    { name: 'description', content: 'Welcome to MAGPPIE!' },
  ];
};
