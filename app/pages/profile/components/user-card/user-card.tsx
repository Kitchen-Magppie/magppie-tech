// import { useState } from 'react';
import userVideo from '~/assets/videos/user.mp4';
import threeDots from '~/assets/images/three-dots.png';

export function UserCard() {
  //   const [showNotification, setShowNotification] = useState(true);

  return (
    <div className='flex items-center p-2 h-[110px] bg-white rounded-full shadow-md w-[90%] mx-auto max-w-sm relative mt-10'>
      <div className='w-[100px] h-[100px] overflow-hidden rounded-full border-2 border-gray-300'>
        <video
          className='w-full h-full object-cover object-top scale-150'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={userVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='ml-3 flex-1'>
        <h2 className='text-[10px] font-bold text-gray-800'>Bhavna Oberoi</h2>
        <p className='text-[10px] text-gray-600'>Wellness Architect, Mumbai</p>
        <p className='text-[10px] text-gray-500 mt-2'>
          <span className='font-semibold'>1.2k</span> lifetime wellness credit
        </p>
      </div>
      <div className='relative'>
        {/* {showNotification && ( */}
        <span className='absolute top-[-36px] right-[-5px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
          1
        </span>
        {/* // )} */}
        <button className='text-gray-500 mr-3'>
          <img src={threeDots} alt="" />
        </button>
      </div>
    </div>
  );
}
