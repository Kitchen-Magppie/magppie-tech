import intro from '~/assets/videos/intro.mp4';

export function AboutUs() {
  return (
    <div className='flex flex-col items-center px-4 py-6 mt-6'>
      <h2 className='text-[36px] x-font-noto-serif-display-600-italic text-center mb-5 font-normal'>
        About us
      </h2>
      <p className='text-[18px] text-center text-gray-600 mb-4  x-font-barlow-semi-condensed-500'>
        the wellness vision
      </p>

      <div className='w-full max-w-md mt-4 overflow-hidden rounded-xl'>
        <div className='relative'>
          <video
            className='w-full h-[500px] object-cover'
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={intro} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white px-4 text-center'>
            <h3 className='text-[40px] font-normal mb-1 x-font-noto-serif-display-200-italic'>
              your health is your power
            </h3>
            <p className='text-[18px] mt-5 x-font-barlow-semi-condensed-300'>
              our kitchens would keep it safe
            </p>
          </div>
        </div>
        <div className='bg-[#7C8562] text-white text-[18px] p-4 x-font-barlow-semi-condensed-300-italic'>
          Transform your kitchen into a hub of wellness. Discover the future of
          healthy, sustainable living through innovative and mindful solutions.
        </div>
      </div>
    </div>
  );
}
