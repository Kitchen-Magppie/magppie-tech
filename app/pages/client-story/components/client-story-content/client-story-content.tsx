import clientImage from '~/assets/pages/client-story/client-story-image.png';
import dash from '~/assets/pages/client-story/dash.svg';
import { ClientStoryCardItem } from '..';
import { CLIENT_STORY_CONTENT_DATA, CLIENT_STORY_ROWS } from '~/mocks';
export function ClientStoryContent() {
  return (
    <div className='flex flex-col justify-start w-full mx-auto mt-6 h-screen'>
      <span className='text-[16px] text-[#313E48] opacity-50 font-semibold x-font-barlow-semi-condensed-700 px-8'>
        THE
      </span>
      <div className='px-8 leading-[1]'>
        <span className='text-[40px] text-[#313E48] font-light x-font-barlow-semi-condensed-700'>
          {CLIENT_STORY_CONTENT_DATA.name}
        </span>
        <br />
        <span className='text-[40px] text-[#313E48] font-light x-font-barlow-semi-condensed-700'>
          Wellness Story
        </span>
      </div>
      <div className={`pb-6 px-8`}>
        <p className='client-story-p mt-4'>
          {CLIENT_STORY_CONTENT_DATA.contentOne}
        </p>
        <p className='client-story-p mt-8'>
          {CLIENT_STORY_CONTENT_DATA.contentTwo}
        </p>
        <p className='client-story-p mt-8'>
          {CLIENT_STORY_CONTENT_DATA.contentThree}
        </p>
        <p className='client-story-p mt-8'>
          {CLIENT_STORY_CONTENT_DATA.contentFour}
        </p>
      </div>

      <div>
        <img src={clientImage} alt='' />
      </div>

      <p className='client-story-p mt-8 px-8'>
        {CLIENT_STORY_CONTENT_DATA.contentFive}
      </p>

      <div className='mt-8 flex flex-col px-8'>
        <span className='client-story-quote'>
          {CLIENT_STORY_CONTENT_DATA.headingTwo}
        </span>
        <br />
        <span className='text-[15px] text-[#313E48] x-font-barlow-semi-condensed-700 opacity-50'>
          {CLIENT_STORY_CONTENT_DATA.nameTwo}
        </span>
      </div>

      <div className='pb-6 px-8'>
        <p className='client-story-p mt-4'>
          {CLIENT_STORY_CONTENT_DATA.contentSix}
        </p>
        <p className='client-story-p mt-8'>
          {CLIENT_STORY_CONTENT_DATA.contentSeven}
        </p>
        <p className='client-story-p mt-8'>
          {CLIENT_STORY_CONTENT_DATA.contentEight}
        </p>
        <img
          className='h-[400px] object-cover rounded-xl mt-8'
          src={clientImage}
          alt=''
        />
        <p className='client-story-p mt-8'>
          {CLIENT_STORY_CONTENT_DATA.contentNine}
        </p>
      </div>

      <div className='flex justify-center items-center'>
        <img className='w-[25px]' src={dash} alt='' />
      </div>

      <div className='flex items-center flex-col mt-8'>
        <h1 className='x-font-barlow-semi-condensed-500 text-[24px] text-[#313E48] text-center px-8 opacity-50'>
          Recommended looks based on client personality
        </h1>
        <div className='grid grid-cols-2 gap-10'>
          {CLIENT_STORY_ROWS.map((data) => (
            <div key={data.id}>
              <ClientStoryCardItem img={data.img} title={data.name} />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center pb-32 mt-10'>
        <img className='w-[25px]' src={dash} alt='' />
      </div>
    </div>
  );
}
