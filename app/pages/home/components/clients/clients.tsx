import { Link } from '@remix-run/react';
import { clients } from './data';
import { motion } from "framer-motion";
import { Icon } from '@iconify/react';

export function Clients() {
  const onStoryClick = () => {

  };

  return (
    <section className='px-4 py-8'>
      <h2 className='text-center text-[36px] x-font-noto-serif-display-600-italic mb-6 font-normal'>
        Our Clients
      </h2>
      <div className="columns-2 md:columns-3 gap-2 [column-fill:_balance]">
        {clients
          .sort((a, b) => a.id - b.id) // Maintain order based on ID
          .map((client) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: client.id * 0.1 }}
              className="relative mb-4 break-inside-avoid overflow-hidden rounded-lg bg-white" // shadow-md for shadow-effect
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <motion.img
                  src={client.src}
                  alt={client.title}
                  className="w-full object-cover rounded-lg grayscale transition-all duration-300 hover:grayscale-0"
                  style={{ height: client.height, objectPosition: client?.objectPosition }}
                  loading="lazy"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <div className="absolute bottom-2 right-2">
                  <button onClick={() => onStoryClick(client)} className="flex items-center bg-white text-black text-xs px-3 py-1 rounded-full shadow-md hover:bg-gray-200">
                    <span className="mr-2">Story</span> <Icon icon="weui:arrow-outlined" width="12" height="18" />
                  </button>
                </div>
              </motion.div>
              <motion.div
                className="p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: client.id * 0.2 }}
              >
                <h3 className="text-sm x-font-barlow-semi-condensed-700 text-[#313E48]">{client.title}</h3>
                <p className="text-sm x-font-barlow-semi-condensed-500 text-[#313E48]">{client.subTitle}</p>
              </motion.div>
            </motion.div>
          ))}
      </div>

      <Link
        to='/team'
        className='mt-6 text-lg x-font-barlow-semi-condensed-500 flex justify-center underline'
      >
        see more clients
      </Link>
    </section>
  );
}
