import { Link, useNavigate } from '@remix-run/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
// =========================================================
import { clients } from './data';
import { _ } from '~/types';
export function Clients() {
  const navigate = useNavigate();
  return (
    <section className='px-4 py-8'>
      <h2 className='text-center text-[36px] x-font-noto-serif-display-600-italic mb-6 font-normal'>
        Our Clients
      </h2>
      <div className='grid grid-cols-2 gap-2 grid-auto-flow-dense'>
        {_.sortBy(clients, 'id').map((client, index) => {
          const spanGridNo = getSpanForMasonGrid(client.height);
          return (
            <motion.div
              onClick={() => {
                navigate('/client-story');
              }}
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: client.id * 0.1 }}
              style={{
                gridRow: `span ${spanGridNo}`,
              }}
              className='relative mb-2 break-inside-avoid overflow-hidden rounded-lg bg-white cursor-pointer'
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className='relative'
              >
                <motion.img
                  src={client.src}
                  alt={client.title}
                  className='w-full object-cover rounded-lg grayscale transition-all duration-300 hover:grayscale-0'
                  style={{
                    height: client.height || 'h-full', // Fallback to auto if height is missing
                    objectPosition: client?.objectPosition || 'center', // Fallback for objectPosition
                  }}
                  loading='lazy'
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
                {/* Conditional rendering for the "Story" button for the first client */}
                {index === 0 && (
                  <div className='absolute bottom-2 right-2'>
                    <button
                      onClick={() => {
                        navigate('/client-story');
                      }}
                      className='flex items-center bg-white text-black text-xs px-3 py-1 rounded-full shadow-md hover:bg-gray-200'
                    >
                      {/* <Link to='/client-story' className='flex'> */}
                      <span className='mr-0.5'>Story</span>
                      <Icon icon='weui:arrow-outlined' width='12' height='18' />
                      {/* </Link> */}
                    </button>
                  </div>
                )}
              </motion.div>
              <motion.div
                className='p-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: client.id * 0.2 }}
              >
                <h3 className='text-sm x-font-barlow-semi-condensed-700 text-[#313E48]'>
                  {client.title}
                </h3>
                <p className='text-sm x-font-barlow-semi-condensed-500 text-[#313E48]'>
                  {client.subTitle}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <Link
        to='/clients'
        className='mt-6 text-lg x-font-barlow-semi-condensed-500 flex justify-center underline'
      >
        see more clients
      </Link>
    </section>
  );
}

const getSpanForMasonGrid = (height: string) => {
  const pixelHeight = Math.ceil(parseInt(height) / 10);
  if (pixelHeight <= 40) return pixelHeight;
  if (pixelHeight <= 45) return 38;
  return pixelHeight;
};
