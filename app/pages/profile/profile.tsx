import { MobileLayout } from '~/components';
import { UserCard } from './components';
import { useState } from 'react';
import mLogo from '~/assets/images/m-logo.png';
import savedItems from '~/assets/images/saved-items.png';
import plus from '~/assets/images/plus.png';
import sort from '~/assets/images/sort.png';
import { savedItemsGrid, wellnessHomeGrid } from './data';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('saved');

  const gridData = activeTab === 'saved' ? savedItemsGrid : wellnessHomeGrid;

  return (
    <MobileLayout>
      <UserCard />
      <div className='p-4 w-full max-w-md mx-auto'>
        <div className='flex justify-center space-x-4 mt-6 mb-2'>
          <button
            className={`px-4 py-2 rounded-full flex flex-col items-center relative ${
              activeTab === 'wellness'
                ? 'font-normal underline'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('wellness')}
          >
            <img src={mLogo} alt='' />
            <span className='absolute top-3 text-[12px]'>M</span>
            <span className='text-[15px] mt-2'>wellness home</span>
          </button>
          <button
            className={`px-4 py-2 rounded-full flex flex-col items-center ${
              activeTab === 'saved' ? 'font-normal underline' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('saved')}
          >
            <img src={savedItems} alt='' />
            <span className='text-[15px] mt-2'>your saved items</span>
          </button>
        </div>

        {activeTab === 'saved' ? (
          <div className='flex space-x-2 mb-4'>
            <button className='w-[220px] h-[50px] text-[12px] py-2 bg-[#D9D9D9] rounded-full flex items-center justify-between'>
              <img src={plus} alt='' className='ml-4' />
              <span className='mr-8'>Create new Project</span>
            </button>
            <button className='w-[130px] h-[50px] text-[12px] py-2 bg-[#D9D9D9] rounded-full flex items-center justify-between'>
              <img src={sort} alt='' className='ml-4' />
              <span className='mr-8'>Sort</span>
            </button>
          </div>
        ) : null}

        <div className='grid grid-cols-3 gap-4 mt-5 mb-10'>
          {gridData.map((item, index) => (
            <div key={index} className='text-center'>
              <img
                src={item.image}
                alt={item.name}
                className='rounded-full w-[100px] h-[150px] object-cover'
              />
              <p className='text-[12px] mt-1'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
}
