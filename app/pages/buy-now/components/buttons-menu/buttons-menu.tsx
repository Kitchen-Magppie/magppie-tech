import { Icon } from '@iconify/react';

export function ButtonsMenu() {
  return (
    <div className='fixed bottom-4 left-1/2 w-full -translate-x-1/2 flex items-center justify-center gap-3'>
      {/* Back Button */}
      <button className='w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full shadow-lg'>
        <Icon icon='mdi:arrow-left' width='24' height='24' />
      </button>

      {/* Phone Button */}
      <button className='w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full shadow-lg'>
        <Icon icon='mdi:phone' width='24' height='24' />
      </button>

      {/* Get Price Button */}
      <button className='bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg'>
        Get price estimate
      </button>
    </div>
  );
}
