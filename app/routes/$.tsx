import { useNavigate } from '@remix-run/react';
// =================================================
import { Button } from '~/components/ui/button';
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
      <div className='w-full space-y-6 text-center'>
        <div className='text-4xl ' style={{ fontWeight: 700 }}>
          MAGPPIE
        </div>
        <div className='space-y-3 mb-2'>
          <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl animate-bounce'>
            404
          </h1>
          <p className='text-gray-500'>Page not found!</p>
        </div>
        <Button
          className='x-font-exo-500'
          onClick={() => {
            navigate('/', { replace: true });
          }}
        >
          Return to website
        </Button>
      </div>
    </div>
  );
}
