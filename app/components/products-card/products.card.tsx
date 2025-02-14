import {
  MessageCircle,
  Phone,
  Share2,
  Bookmark,
  ArrowRight,
} from 'lucide-react';
import { productCardsData } from './data';

export function ProductsCard() {
  return (
    <div className='max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden'>
      {productCardsData.map((card) => {
        return (
          <>
            {/* Image Section */}
            <div className='relative' key={card.id}>
              <video
                className='w-full h-full object-cover'
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={card.videoUrl} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              {/* Logo */}
              <div className='absolute top-3 left-3 bg-black/60 text-white px-3 py-1 text-sm font-bold rounded'>
                MAGPPIE
              </div>
              {/* Overlay with Text */}
              <div className='absolute bottom-0 left-0 w-full bg-black/40 text-white p-3 flex justify-between items-center'>
                <span className='text-lg'>{card.title}</span>
                <ArrowRight className='w-5 h-5' />
              </div>
            </div>
            {/* Icon Actions */}
            <div className='flex justify-between px-6 py-4 text-gray-600'>
              <div className='flex flex-col items-center gap-1'>
                <MessageCircle className='w-5 h-5' />
                <span className='text-xs'>chat</span>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <Phone className='w-5 h-5' />
                <span className='text-xs'>call us</span>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <Share2 className='w-5 h-5' />
                <span className='text-xs'>share</span>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <Bookmark className='w-5 h-5' />
                <span className='text-xs'>save</span>
              </div>
            </div>
            {/* Content Section */}
            <div className='px-6 pb-6'>
              <h3 className='text-lg font-semibold'>{card.subTitle}</h3>
              <p className='text-sm text-gray-700 mt-1'>{card.desc}</p>
              <a
                href='/'
                className='text-blue-600 font-medium text-sm mt-2 inline-block'
              >
                READ MORE
              </a>
            </div>
          </>
        );
      })}
    </div>
  );
}
