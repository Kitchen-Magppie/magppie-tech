import { Icon } from '@iconify/react';

export function ButtonsMenu() {
  return (
    <div className='fixed bottom-4 left-1/2 w-full -translate-x-1/2 flex items-center justify-center gap-3'>
      <button className='w-12 h-12 flex items-center justify-center bg-[#313E48] text-white rounded-full shadow-lg'>
        <Icon icon='mdi:arrow-left' width='24' height='24' />
      </button>

      <button className='w-12 h-12 flex items-center justify-center bg-[#313E48] text-white rounded-full shadow-lg'>
        <Icon icon='mdi:phone' width='24' height='24' />
      </button>

      <button className='bg-[#313E48] text-white px-4 py-3 rounded-full shadow-lg text-xl x-font-barlow-semi-condensed-400'>
        Get price estimate
      </button>
    </div>
  );
}
