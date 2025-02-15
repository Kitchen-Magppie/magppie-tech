import { Icon } from '@iconify/react';

import { TCategoryItem } from '~/types';

export function CategoryCardItem(props: TProps) {
  const { data } = props;
  return (
    <div key={data.id} className='flex flex-col'>
      {/* Video Section with Rounded Borders */}
      <div className='relative rounded-2xl overflow-hidden'>
        <video
          className='w-full h-[400px] object-cover'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={data.videoUrl} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        {/* Logo */}
        <div className='absolute top-3 left-3 text-white px-3 py-1 text-md font-bold rounded'>
          MAGPPIE
        </div>
        {/* Overlay with Text */}
        <div className='absolute bottom-0 left-0 w-full bg-black/40 text-white p-3 flex justify-between items-center'>
          <span className='text-lg'>{data.title}</span>
          <Icon icon='uil:arrow-right' className='w-5 h-5' />
        </div>
      </div>
      {/* Icon Actions - Aligned to Start */}
      <div className='flex justify-start px-3 py-4 w-full text-gray-600 gap-6'>
        <div className='flex flex-col items-center gap-1'>
          <Icon icon='mynaui:chat' className='w-5 h-5' />

          <span className='text-xs'>chat</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Icon icon='line-md:phone' className='w-5 h-5' />

          <span className='text-xs'>call us</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Icon icon='tabler:share' className='w-5 h-5' />

          <span className='text-xs'>share</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Icon
            icon='material-symbols:bookmark-outline-rounded'
            className='w-5 h-5'
          />
          <span className='text-xs'>save</span>
        </div>
      </div>
      {/* Content Section */}
      <div className='px-3 pb-6'>
        <h3 className='text-lg font-semibold'>{data.subTitle}</h3>
        <p className='text-sm text-gray-700 mt-1'>{data.desc}</p>
        <a
          href='/'
          className='text-blue-600 font-medium text-sm mt-2 inline-block'
        >
          READ MORE
        </a>
      </div>
    </div>
  );
}

type TProps = { data: TCategoryItem };
