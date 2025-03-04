import { Link } from '@remix-run/react';
import { clients } from './data';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const getSpanForMasonGrid = (height: string) => {
  const pixelHeight = Math.ceil(parseInt(height) / 10);
  if (pixelHeight <= 40) return pixelHeight;
  if (pixelHeight <= 45) return 38;
  return pixelHeight;
};

export function ClientsGrid() {
  const onStoryClick = () => {};

  return (
    <section className='px-4 py-8'>
      <div className='grid grid-cols-2 gap-2 grid-auto-flow-dense'>
        {clients
          .sort((a, b) => a.id - b.id) // Maintain order based on ID
          .map((client, index) => {
            const spanGridNo = getSpanForMasonGrid(client.height);
            return (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: client.id * 0.1 }}
                style={{
                  gridRow: `span ${spanGridNo}`,
                }}
                className='relative mb-2 break-inside-avoid overflow-hidden rounded-lg bg-white'
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
                        onClick={() => onStoryClick(client)}
                        className='flex items-center bg-white text-black text-xs px-3 py-1 rounded-full shadow-md hover:bg-gray-200'
                      >
                        <Link to='/client-story' className='flex'>
                          <span className='mr-0.5'>Story</span>{' '}
                          <Icon
                            icon='weui:arrow-outlined'
                            width='12'
                            height='18'
                          />
                        </Link>
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
    </section>
  );
}
