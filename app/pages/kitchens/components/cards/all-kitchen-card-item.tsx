// import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
// =================================================
import classes from './buy-online-card-item.module.css';
import { TBuyOnlineItem } from '~/types';
import { CARD_ACTION_OPTIONS } from '~/mocks';
import { ChatComingSoonDialog } from '~/components';
import { useNavigate } from '@remix-run/react';

export function AllKitchenCardItem(props: TProps) {
  const { data } = props;

  const navigate = useNavigate();
  return (
    <div>
      {/* Header */}
      <div className='flex items-center gap-2 p-4'>
        <div className='w-14 h-14 bg-[#354755] text-white text-[10px] font-bold flex items-center justify-center rounded-full'>
          MAGPPIE
        </div>
        <span className='text-gray-900  text-[21px] x-font-barlow-semi-condensed-400'>
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
          className={`w-full h-[384px]  ${classes.BuyOnlineCardSwiper}`}
        >
          {data.images.map((image, i) => (
            <SwiperSlide key={i}>
              <div
                style={{
                  background: `url(${image})`,
                  backgroundSize: 'cover', // Ensure image covers the slide without stretching
                  backgroundPosition: 'center', // Center the background image
                  width: '100%',
                  height: '100%',
                }}
                className='w-full h-full  x-font-barlow-semi-condensed-100 overflow-hidden relative rounded-2xl'
              >
                {/* <img
                  src={image}
                  alt={`${data.title} ${i + 1}`}
                  className='w-full h-full object-cover rounded-t-lg'
                /> */}
                <div className=''>
                  <div className='bg-transparent absolute bottom-0 left-0 right-0'>
                    <div className='absolute bottom-0 left-0 w-full bg-black/40 text-white border-t-[1px] p-3 flex justify-between items-center'>
                      <div className='flex justify-center'>
                        <div className=' text-[30px] pr-1'>$ </div>
                        <div className='flex items-start flex-col'>
                          <div className='text-[30px] font-light'>
                            {data.amount}
                          </div>
                          <div className='text-[14px] font-semibold'>
                            onwards
                          </div>
                        </div>
                      </div>

                      <button
                        className='bg-white text-black font-normal  px-6 py-2 rounded-full text-[14px] '
                        onClick={() => {
                          navigate('/buy-now');
                        }}
                      >
                        buy now
                      </button>
                    </div>
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
            const icon = (
              <img
                src={item.value}
                alt={item.value}
                className='cursor-pointer'
              />
            );
            switch (item.label) {
              case 'chat':
                return <ChatComingSoonDialog>{icon}</ChatComingSoonDialog>;

              default:
                return icon;
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
        <h3 className='text-[20px] x-font-barlow-semi-condensed-500'>
          {data.title}
        </h3>
        <p className='text-[16px] text-left text-gray-700 mt-1 x-font-barlow-semi-condensed-300'>
          {data.desc}
        </p>
        {/* <div
          // href='/wardrobes'
          className=' text-gray-500 font-medium text-sm mt-2 inline-block underline cursor-pointer'
        >
          {data.more}
        </div> */}
      </div>
    </div>
  );
}

type TProps = { data: TBuyOnlineItem };
