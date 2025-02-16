import { Icon } from '@iconify/react';
import theChef from '~/assets/videos/the-chef.mp4';
import { MobileLayout } from '~/components';

export default function BuyNow() {
  return (
    <MobileLayout>
      <div className='relative h-[700px]'>
        {/* Background Video */}
        <div className='absolute inset-0 w-full h-full overflow-hidden rounded-bl-3xl rounded-br-3xl'>
          <video
            className='w-full h-[700px] object-cover'
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={theChef} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-35 rounded-bl-3xl rounded-br-3xl'></div>

        {/* Content Overlay */}
        <div className='relative flex flex-col items-center pt-80 px-6 text-center'>
          {/* Title */}
          <h1 className='text-5xl text-white mb-2'>the chef</h1>

          {/* Subtitle */}
          <p className='text-white/90 text-lg'>wellnes kitchen</p>
        </div>
      </div>

      <div className='flex justify-evenly px-3 py-4 w-full text-gray-600 gap-6 conatiner mx-auto max-w-80'>
        <div className='flex flex-col items-center gap-1'>
          <Icon icon='mynaui:chat' className='w-8 h-8' />

          <span className='text-xs'>chat</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Icon icon='line-md:phone' className='w-8 h-8' />

          <span className='text-xs'>call us</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Icon icon='tabler:share' className='w-8 h-8' />

          <span className='text-xs'>share</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Icon
            icon='material-symbols:bookmark-outline-rounded'
            className='w-8 h-8'
          />
          <span className='text-xs'>save</span>
        </div>
      </div>
    </MobileLayout>
  );
}
