import { Icon } from '@iconify/react';
import theChef from '~/assets/videos/the-chef.mp4';
import theChefOne from '~/assets/images/the-chef/the-chef-1.png';
import theChefTwo from '~/assets/images/the-chef/the-chef-2.png';
import theChefThree from '~/assets/images/the-chef/the-chef-3.png';

import { MobileLayout } from '~/components';
import { Link } from '@remix-run/react';
import { ButtonsMenu } from './components/buttons-menu'; // Import FloatingMenu component

export default function BuyNow() {
  return (
    <>
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

        <div className='flex justify-evenly px-3 py-4 w-full text-gray-600 gap-6 conatiner mx-auto max-w-80 mt-5'>
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

        <div className='bg-white p-6 rounded-lg text-center max-w-sm mx-auto mt-20'>
          <p className='text-gray-600 text-lg'>
            Balinese-inspired outdoor kitchen designs featuring Silverstone body
            and countertops. These serene settings include lush greenery,
            adjoining water features, and spaces for families to enjoy cooking
            and dining together.
          </p>
          <p className='text-gray-700 font-semibold text-xl mt-4'>
            $ 15000 onwards
          </p>
          <Link
            to='#'
            className='bg-[#313E48] mt-4 inline-block w-full py-4 rounded-full text-base font-medium text-white'
          >
            Get price estimate for your requirement
          </Link>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-6 px-2'>
          <div>
            <img src={theChefOne} alt='' className='w-full rounded-lg' />
          </div>
          <div>
            <img
              src={theChefTwo}
              alt=''
              className='w-full rounded-lg h-[500px] object-cover'
            />
          </div>
          <video
            className='w-full h-[500px] object-cover rounded-lg'
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={theChef} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <img
            src={theChefThree}
            alt=''
            className='w-full rounded-lg shadow-md'
          />
        </div>
      </MobileLayout>

      {/* Floating Menu - Placed outside MobileLayout so it stays fixed */}
      <ButtonsMenu />
    </>
  );
}
