// import { Icon } from '@iconify/react';
import { ChatComingSoonDialog } from '~/components';
import { CARD_ACTION_OPTIONS } from '~/mocks';
import { TOnGoingItem } from '~/types';

export function OnGoing(props: TProps) {
  const { data } = props;
  return (
    <div className='flex flex-col'>
      <h2 className='text-[36px] font-normal x-font-noto-serif-display-600-italic mt-8 mb-4 ml-6'>
        Ongoing Projects
      </h2>
      <div className='flex items-center gap-2 p-4'>
        <div className='w-14 h-14 px-1 bg-[#354755] text-white text-[10px] font-bold flex items-center justify-center rounded-full'>
          MAGPPIE
        </div>
        <span className='text-gray-900 text-medium x-font-barlow-semi-condensed-400'>
          wellness kitchen
        </span>
      </div>
      {/* Video Section with Rounded Borders */}
      <div className='relative rounded-3xl overflow-hidden'>
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
        {/* Overlay Text */}
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center'>
          <span className='text-[15px] mb-1'>wellness kitchen</span>
          <h2 className='text-[50px] font-normal italic leading-tight x-font-noto-serif-display-600-italic mb-1'>
            ongoing <br /> project
          </h2>
          <span className='text-[20px]'>@dubai</span>
        </div>

        <div className='absolute inset-0 bg-black bg-opacity-10 rounded-3xl'></div>
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
      <div className='px-3 pb-6 mb-16'>
        <h3 className='text-lg x-font-barlow-semi-condensed-500'>
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
