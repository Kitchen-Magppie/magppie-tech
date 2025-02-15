import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { TBuyOnlineItem } from '~/types';
import { Icon } from '@iconify/react';

export function BuyOnlineCardItem(props: TProps) {
  const { data } = props;
  return (
    <div key={data.id} className='border rounded-lg overflow-hidden'>
      {/* Header */}
      <div className='flex items-center gap-2 p-4'>
        <div className='w-8 h-8 bg-black text-white text-xs font-bold flex items-center justify-center rounded-full'>
          MAGPIE
        </div>
        <span className='text-gray-900 font-medium text-sm'>
          wellness kitchen
        </span>
      </div>

      {/* Swiper Image Slider */}
      <div className='relative'>
        <Swiper
          navigation
          modules={[Navigation]}
          className='w-full h-[400px] rounded-t-lg'
        >
          {data.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${data.title} ${index + 1}`}
                className='w-full h-full object-cover rounded-t-lg'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Price and Buy Button */}
      <div className='p-4 flex justify-between items-center'>
        <div className='text-gray-900'>
          <span className='text-xl font-bold'>{data.amount}</span>
        </div>
        <button className='bg-black text-white px-6 py-2 rounded-full text-sm font-medium'>
          buy now
        </button>
      </div>

      {/* Action Icons */}
      <div className='flex justify-start gap-6 px-4 py-3 text-gray-600'>
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

      {/* Product Description */}
      <div className='p-4 flex flex-col justify-start items-start'>
        <h3 className='text-lg font-semibold'>{data.title}</h3>
        <p className='text-sm text-gray-700 mt-1'>{data.desc}</p>
        <a
          href='/wardrobes'
          className='text-blue-600 font-medium text-sm mt-2 inline-block underline'
        >
          see all wellness kitchens
        </a>
      </div>
    </div>
  );
}

type TProps = { data: TBuyOnlineItem };
