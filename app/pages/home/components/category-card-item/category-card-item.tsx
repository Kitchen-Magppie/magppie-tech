import { Icon } from '@iconify/react';
import { ChatComingSoonDialog } from '~/components';
import { CARD_ACTION_OPTIONS } from '~/mocks';

import { TCategoryItem } from '~/types';

export function CategoryCardItem(props: TProps) {
  const { data } = props;
  return (
    <div className='flex flex-col'>
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
        <div className='absolute bottom-0 left-0 w-full bg-black/40 text-white border-t-[1px] p-3 flex justify-between items-center'>
          <span className='text-lg x-font-barlow-semi-condensed-400'>
            {data.title}
          </span>
          <Icon icon='iconamoon:arrow-right-2-thin' className='h-10 w-10' />
        </div>
      </div>
      {/* Icon Actions - Aligned to Start */}
      <div className='flex justify-start px-3 py-4 w-full text-gray-500 gap-6'>
        {CARD_ACTION_OPTIONS?.map((item, i) => {
          const getAction = () => {
            switch (item.label) {
              case 'chat':
                return (
                  <ChatComingSoonDialog>
                    {/* <Icon
                      icon={item.value}
                      className='w-8 h-8 cursor-pointer'
                    /> */}
                    <div>
                      <img src={item.value} alt='' />
                    </div>
                  </ChatComingSoonDialog>
                );

              case 'call us':
                return (
                  <div
                  // onClick={() => {
                  //   const phoneNumber = '+911234567890';
                  //   window.location.href = `tel:${phoneNumber}`;
                  // }}
                  >
                    <img src={item.value} alt='' />
                  </div>
                  // <Icon
                  //   icon={item.value}
                  //   onClick={() => {
                  //     const phoneNumber = '+911234567890';
                  //     window.location.href = `tel:${phoneNumber}`;
                  //   }}
                  //   className='w-8 h-8 cursor-pointer'
                  // />
                );

              default:
                return (
                  <div>
                    <img src={item.value} alt='' />
                  </div>
                  // <Icon icon={item.value} className='w-8 h-8 cursor-pointer' />
                );
            }
          };
          return (
            <div className='flex flex-col items-center gap-1' key={i}>
              {getAction()}
              <span className='text-sm x-font-barlow-semi-condensed-400'>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
      {/* Content Section */}
      <div className='px-3 pb-10'>
        <h3 className='text-lg  x-font-barlow-semi-condensed-500'>
          {data.subTitle}
        </h3>
        <p className='text-sm text-gray-700 mt-1'>{data.desc}</p>
        <div className='x-font-barlow-semi-condensed-400 underline font-medium text-lg mt-2 inline-block text-gray-700'>
          READ MORE
        </div>
      </div>
    </div>
  );
}

type TProps = { data: TCategoryItem };
