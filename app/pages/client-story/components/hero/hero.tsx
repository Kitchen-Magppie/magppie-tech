import dhoniStory from '../../assets/dhoni-story.png';
import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import cross from '../../assets/cross.svg';

export function Hero() {
  return (
    <div className='relative w-full h-[700px] flex'>
      <div className='relative overflow-hidden'>
        <img
          src={dhoniStory}
          alt=''
          className='w-full h-[700px] object-cover object-right'
        />
        <div className='top-4 right-4 fixed z-10 bg-[#354755] py-6 px-2 text-white rounded-full text-[10px] font-bold'>
          MAGPPIE
        </div>

        <div className='flex justify-between items-center w-full absolute bottom-4'>
          <button className='text-white p-2 rounded-full'>
            <img
              src={arrowLeft}
              alt=''
              className='w-full object-cover object-right pl-5'
            />
          </button>
          <div className='text-white p-2 rounded-full'>
            <img
              src={cross}
              alt=''
              className='w-full object-cover object-right'
            />
          </div>
          <button className='text-white p-2 rounded-full'>
            <img
              src={arrowRight}
              alt=''
              className='w-full object-cover object-right pr-5'
            />
          </button>
        </div>
        {/* Dark Overlay */}
        <div className='absolute inset-0 h-[700px] bg-black bg-opacity-20' />
      </div>
    </div>
  );
}
