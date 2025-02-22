// import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { useNavigate } from '@remix-run/react';
// =================================================
import classes from './buy-online-card-item.module.css';
import { TBuyOnlineItem } from '~/types';
import { CARD_ACTION_OPTIONS } from '~/mocks';
import { ChatComingSoonDialog } from '~/components';

export function BuyOnlineCardItem(props: TProps) {
  const { data } = props;

  const navigate = useNavigate();
  return (
    <div>
      {/* Header */}
      <div className='flex items-center gap-2 p-4'>
        <div className='w-14 h-14 bg-[#354755] text-white text-[10px] font-bold flex items-center justify-center rounded-full'>
          MAGPPIE
        </div>
        <span className='text-gray-900  text-medium x-font-barlow-semi-condensed-400'>
          {data.heading}
        </span>
      </div>

      {/* Swiper Image Slider */}
      <div className='relative'>
        <Swiper
          navigation
          modules={[Navigation, Pagination]}
          pagination
          // pagination={{
          //   dynamicBullets: false,
          // }}

          className={`w-full h-[500px]  ${classes.BuyOnlineCardSwiper}`}
        >
          {data.images.map((image, i) => (
            <SwiperSlide key={i} className='pb-[2.5rem]'>
              <div
                style={{
                  background: `url(${image})`,
                  backgroundSize: 'cover', // Ensure image covers the slide without stretching
                  backgroundPosition: 'center', // Center the background image
                }}
                className='w-full h-full  x-font-barlow-semi-condensed-100 overflow-hidden relative  rounded-2xl'
              >
                {/* <img
                  src={image}
                  alt={`${data.title} ${i + 1}`}
                  className='w-full h-full object-cover rounded-t-lg'
                /> */}
                <div className='bg-transparent absolute bottom-0 left-0 right-0'>
                  <div className='absolute bottom-0 left-0 w-full bg-black/40 text-white border-t-[1px] p-3 flex justify-between items-center'>
                    <div className='flex justify-center gap-1'>
                      <div className=' text-2xl leading-[normal]'>$</div>
                      <div className='flex flex-col justify-start'>
                        <div className='text-xl font-light leading-[normal]'>
                          {data.amount}
                        </div>
                        <div className='text-xs font-semibold leading-[0.5]'>
                          onwards
                        </div>
                      </div>
                    </div>

                    <button
                      className='bg-white text-black font-semibold px-6 py-2 rounded-full text-sm '
                      onClick={() => {
                        navigate('/kitchens');
                      }}
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Price and Buy Button */}
      {/* <div className='p-4 flex justify-between items-center'>
        <div className='text-gray-900'>
          <span className='text-xl font-bold'>{data.amount}</span>
        </div>
        <button className='bg-black text-white px-6 py-2 rounded-full text-sm font-medium'>
          buy now
        </button>
      </div> */}

      {/* Action Icons */}
      <div className='flex justify-start gap-6 px-4 py-3 text-gray-500'>
        {CARD_ACTION_OPTIONS?.map((item, i) => {
          const getAction = () => {
            switch (item.label) {
              case 'chat':
                return (
                  <ChatComingSoonDialog>
                    {/* <Icon
                      icon={item.value}
                      inline={true}
                      className='w-32 h-32 cursor-pointer'
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
                  //   inline={true}
                  //   onClick={() => {
                  //     const phoneNumber = '+911234567890';
                  //     window.location.href = `tel:${phoneNumber}`;
                  //   }}
                  //   className='w-32 h-32 cursor-pointer'
                  // />
                );

              default:
                return (
                  <div>
                    <img src={item.value} alt='' />
                  </div>
                  // <Icon
                  //   icon={item.value}
                  //   inline={true}
                  //   className='w-32 h-32 cursor-pointer'
                  // />
                );
            }
          };
          return (
            <div className='flex flex-col items-center gap-1' key={i}>
              {getAction()}

              <span className='text-sm'>{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Product Description */}
      <div className='p-4 flex flex-col justify-start items-start'>
        <h3 className='text-lg x-font-barlow-semi-condensed-500'>
          {data.title}
        </h3>
        <p className='text-sm text-left text-gray-700 mt-1 x-font-barlow-semi-condensed-300'>
          {data.desc}
        </p>
        <div
          // href='/wardrobes'
          className=' text-gray-500 font-medium text-sm mt-2 inline-block underline cursor-pointer'
        >
          {data.more}
        </div>
      </div>
    </div>
  );
}

type TProps = { data: TBuyOnlineItem };
