import type { MetaFunction } from '@remix-run/node';
// =========================================================
import { TableExample, MobileLayout } from '~/components';
import { Button } from '~/components/ui/button';

export default function Index() {
  // useExampleListener();
  return (
    <div>
      <MobileLayout>
        <div className='relative min-h-screen'>
          {/* Background Image */}
          <div className='absolute inset-0 bg-cover bg-center bg-slate-400' />

          {/* Content Overlay */}
          <div className='relative flex flex-col items-center pt-8 px-6 text-center'>
            {/* Logo */}
            <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4'>
              <span className='text-emerald-800 font-semibold text-lg'>
                MAGPPIE
              </span>
            </div>

            {/* Title */}
            <h1 className='text-3xl font-semibold text-white mb-2'>
              Wellness Kitchen
            </h1>

            {/* Subtitle */}
            <p className='text-white/90 text-lg'>
              welcome to the wellness movement
            </p>
          </div>
        </div>
      </MobileLayout>
      Hello, world!
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
