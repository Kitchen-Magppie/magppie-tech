import { clientStory } from './data';
import clientImage from '../../assets/client-story-image.png';
import dash from '../../assets/dash.svg';
import { Cards } from '../cards';

export function Content() {
  return (
    <div className='flex flex-col justify-start w-full mx-auto mt-6 h-screen'>
      <span className='text-[16px] text-[#313E48] font-semibold x-fontbarlow-semi-condense-700 px-8'>
        THE
      </span>
      <div className='px-8'>
        <span className='text-[40px] text-[#313E48] font-light x-fontbarlow-semi-condense-700'>
          {clientStory.name}
        </span>
        <br />
        <span className='text-[40px] text-[#313E48] font-light x-fontbarlow-semi-condense-700'>
          Wellness Story
        </span>
      </div>
      <div className='pb-6 px-8'>
        <p className='x-fontbarlow-semi-condense-300 text-[20px] font-light mt-4'>
          {clientStory.contentOne}
        </p>
        <p className='x-fontbarlow-semi-condense-300 text-[20px] font-light mt-8'>
          {clientStory.contentTwo}
        </p>
        <p className='x-fontbarlow-semi-condense-300 text-[20px] font-light mt-8'>
          {clientStory.contentThree}
        </p>
        <p className='x-fontbarlow-semi-condense-300 text-[20px] font-light mt-8'>
          {clientStory.contentFour}
        </p>
      </div>

      <div>
        <img src={clientImage} alt='' />
      </div>

      <p className='x-fontbarlow-semi-condense-300 text-[20px] font-light mt-8 px-8'>
        {clientStory.contentFive}
      </p>

      <div className='mt-8 flex flex-col px-8'>
        <span className='italic text-[45px] font-light'>
          {clientStory.headingTwo}
        </span>
        <br />
        <span className='text-[15px] text-[#313E48] x-fontbarlow-semi-condense-700'>
          {clientStory.nameTwo}
        </span>
      </div>

      <div className='pb-6 px-8'>
        <p className='x-fontbarlow-semi-condense-300 text-[20px] font-light mt-4'>
          {clientStory.contentSix}
        </p>
        <p className='x-fontbarlow-semi-condense-300 text-[20px] font-light mt-8'>
          {clientStory.contentSeven}
        </p>
        <p className='x-fontbarlow-semi-condense-300 text-[20px] font-light mt-8'>
          {clientStory.contentEight}
        </p>
        <img
          className='h-[400px] object-cover rounded-xl mt-8'
          src={clientImage}
          alt=''
        />
        <p className='x-fontbarlow-semi-condense-300 text-[20px] font-light mt-8'>
          {clientStory.contentNine}
        </p>
      </div>

      <div className='flex justify-center items-center'>
        <img className='w-[25px]' src={dash} alt='' />
      </div>

      <Cards />

      <div className='flex justify-center items-center pb-32 mt-10'>
        <img className='w-[25px]' src={dash} alt='' />
      </div>
    </div>
  );
}
