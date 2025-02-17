import { Link } from '@remix-run/react';
import newOne from '~/assets/images/new-one.png';
import newTwo from '~/assets/images/new-two.png';
import newThree from '~/assets/images/new-three.png';
import { Icon } from '@iconify/react';

export function AiMagppie() {
  const images = [
    { id: 1, src: newThree },
    { id: 2, src: newTwo },
    { id: 3, src: newOne },
  ];

  return (
    <div className='flex flex-col items-center p-4 space-y-6 text-center mt-6'>
      <h2 className='text-[36px] x-font-noto-serif-display-600-italic font-normal'>
        Whats new!
      </h2>

      <div className='flex flex-col items-center space-y-2'>
        <div className='w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full text-[32px] mb-2 x-font-barlow-semi-condensed-400'>
          aiM
        </div>
        <h3 className='text-[32px] font-bold mb-2'>
          ai<span className='text-gray-800'>MAGPPIE</span>
        </h3>
        <p className='text-gray-600 text-[16px]'>
          Kitchen inspirations curated by Magppie Ai Labs
        </p>
      </div>

      <Link
        to='#'
        className='flex flex-col items-center space-x-2 text-gray-800 hover:underline'
      >
        <div className='font-light'>
          <Icon icon='iwwa:arrow-right' width='100' height='80' />
        </div>
        <span className='text-[18px]'>Explore</span>
      </Link>

      <div className='space-y-4'>
        {images.map((image, index) => (
          <div className='relative rounded-lg overflow-hidden' key={index}>
            <img
              src={image.src}
              alt='Outdoor Kitchen 1'
              className='w-full h-auto'
            />
            <div className='absolute bottom-2 right-2 bg-white rounded-full px-2.5 py-3 text-gray-700 text-xs font-semibold'>
              aiM
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col items-center gap-2 p-4'>
        <h2 className='text-[42px] font-normal x-font-noto-serif-display-600-italic mt-2 mb-4'>
          get inspired
        </h2>
        <span className='text-gray-900  text-[18px] x-font-barlow-semi-condensed-400'>
          and request us to create
        </span>
      </div>
    </div>
  );
}
