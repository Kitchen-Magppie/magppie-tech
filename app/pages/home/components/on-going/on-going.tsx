import { Icon } from '@iconify/react';
import { CARD_ACTION_OPTIONS } from '~/mocks';
import { TOnGoingItem } from '~/types';

export function OnGoing(props: TProps) {
  const { data } = props;
  return (
    <div className='flex flex-col'>
      <h2 className='text-4xl font-semibold x-font-noto-serif-display-600-italic mt-8 mb-4'>
        Ongoing Projects
      </h2>
      <div className='flex items-center gap-2 p-4'>
        <div className='w-14 h-14 px-1 bg-[#354755] text-white text-[10px] font-bold flex items-center justify-center rounded-full'>
          MAGPPIE
        </div>
        <span className='text-gray-900  text-medium x-font-barlow-semi-condensed-400'>
          wellness kitchen
        </span>
      </div>
      {/* Video Section with Rounded Borders */}
      <div className='relative rounded-2xl overflow-hidden'>
        <video
          className='w-full h-[600px] object-cover'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={data.videoUrl} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Icon Actions - Aligned to Start */}
      <div className='flex justify-start px-3 py-4 w-full text-gray-500 gap-6'>
        {CARD_ACTION_OPTIONS?.map((item, i) => {
          return (
            <div className='flex flex-col items-center gap-1' key={i}>
              <Icon icon={item.value} className='w-5 h-5' />

              <span className='text-xs x-font-barlow-semi-condensed-400'>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
      {/* Content Section */}
      <div className='px-3 pb-6'>
        <h3 className='text-lg  x-font-barlow-semi-condensed-500'>
          {data.subTitle}
        </h3>
        <p className='text-sm text-gray-700 mt-1'>{data.desc}</p>
        <div className='x-font-barlow-semi-condensed-400 underline font-medium text-md mt-2 inline-block text-gray-700'>
          see all ongoing projects
        </div>
      </div>
    </div>
  );
}

type TProps = { data: TOnGoingItem };
