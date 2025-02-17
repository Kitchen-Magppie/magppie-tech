import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
// =================================================
import classes from './buy-online-card-item.module.css';
import { TBuyOnlineItem } from '~/types';
import { CARD_ACTION_OPTIONS } from '~/mocks';
export function BuyOnlineCardItem(props: TProps) {
  const { data } = props;

  return (
    <div>
      {/* Header */}
      <div className='flex items-center gap-2 p-4'>
        <div className='w-12 h-12 bg-[#354755] text-white text-[10px] font-bold flex items-center justify-center rounded-full'>
          MAGPIE
        </div>
        <span className='text-gray-900  text-medium x-font-barlow-semi-condensed-400'>
          wellness kitchen
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
            <SwiperSlide key={i}>
              <div className='h-[600px]'>
                <div className='h-[450px]'>
                  <div
                    style={{
                      background: `url(${image})`,
                      objectFit: 'cover', // Temp code
                      backgroundSize: '700px', // temp code;
                    }}
                    className='w-full h-full  x-font-barlow-semi-condensed-100 overflow-hidden relative  rounded-2xl'
                  >
                    {/* <img
                  src={image}
                  alt={`${data.title} ${i + 1}`}
                  className='w-full h-full object-cover rounded-t-lg'
                /> */}
                    <div className=''>
                      <div className='bg-transparent absolute bottom-0 left-0 right-0 '>
                        <div className='absolute bottom-0 left-0 w-full bg-black/40 text-white p-3 flex justify-between items-center'>
                          <div className='flex justify-center gap-1'>
                            <div className=' text-2xl'>$</div>
                            <div className='flex flex-col justify-start'>
                              <div className='text-xl font-light'>
                                {data.amount}
                              </div>
                              <div className='text-xs font-semibold'>
                                onwards
                              </div>
                            </div>
                          </div>

                          <button className='bg-white text-black font-semibold  px-6 py-2 rounded-full text-sm '>
                            buy now
                          </button>
                        </div>
                      </div>
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
          return (
            <div className='flex flex-col items-center gap-1' key={i}>
              <Icon icon={item.value} className='w-5 h-5' />
              <span className='text-xs'>{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Product Description */}
      <div className='p-4 flex flex-col justify-start items-start'>
        <h3 className='text-lg x-font-barlow-semi-condensed-5s00'>
          {data.title}
        </h3>
        <p className='text-sm text-left text-gray-700 mt-1 x-font-barlow-semi-condensed-300'>
          {data.desc}
        </p>
        <a
          href='/wardrobes'
          className=' text-gray-500 font-medium text-sm mt-2 inline-block underline'
        >
          see all wellness kitchens
        </a>
      </div>
    </div>
  );
}

type TProps = { data: TBuyOnlineItem };
