// =================================================
import AssetVideoIntroduction from '~/assets/videos/home-intro.mp4';
import {
  AboutUs,
  AiMagppie,
  BuyOnline,
  Categories,
  CategoryCardItem,
  OnGoing,
  Team,
} from '~/pages/home/components';
import { MobileLayout } from '~/components';
import { CATEGORY_MOCK_DATA, ONGOING_MOCK_DAtA } from '~/mocks';
import { Clients } from './components/clients';

export default function Home() {
  return (
    <div>
      <MobileLayout>
        <div className='relative min-h-screen'>
          {/* Background Video */}
          <div className='absolute inset-0 w-full h-full overflow-hidden rounded-bl-3xl rounded-br-3xl'>
            <video
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={AssetVideoIntroduction} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Dark Overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-50 rounded-bl-3xl rounded-br-3xl'></div>

          {/* Content Overlay */}
          <div className='relative flex flex-col items-center px-6 text-center h-screen'>
            {/* Logo and Title */}
            <div className='flex flex-col items-center pt-16 absolute top-0 w-full'>
              <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4'>
                <span className='text-emerald-900 font-bold text-lg'>
                  MAGPPIE
                </span>
              </div>
              <h1 className='text-2xl text-white mb-2 x-font-exo-300'>
                Wellness Kitchen
              </h1>
            </div>

            {/* Subtitle */}
            <div className='text-white/90 text-lg x-font-barlow-semi-condensed-400 flex items-center justify-center h-full'>
              Welcome to the wellness movement
            </div>
          </div>
        </div>

        <section className='max-w-lg mx-auto text-center px-6 py-12'>
          {/* Title */}
          <h2 className='text-[32px]  leading-tight text-black x-font-dalglish-400'>
            our wellness kitchen <br />
            takes care of your <br />
            family’s health
          </h2>

          {/* Description */}
          <div className='x-font-barlow-semi-condensed-300'>
            <p className='mt-6 text-gray-700 text-[20px] leading-relaxed '>
              Our planet faces unseen threats every day – our food, water, air,
              and even our homes are filled with toxins. Harmful formaldehyde
              emissions from kitchens and furniture are putting our cellular
              health at risk.
            </p>

            <p className='mt-6 text-gray-700 text-[20px] leading-relaxed'>
              At Magppie, we’re more than a brand; we’re a wellness movement.
              With deep-tech innovations, we create health-conscious solutions
              to transform your home – particularly kitchen, wardrobes and
              lighting that nurtures a longer, healthier life.
            </p>
          </div>
        </section>
        <hr className='bg-black' />
      </MobileLayout>
      <Categories />
      <div className='max-w-sm mx-auto overflow-hidden'>
        {CATEGORY_MOCK_DATA.map((data, i) => (
          <CategoryCardItem data={data} key={i} />
        ))}
      </div>
      <hr className='bg-black' />

      <BuyOnline />

      <hr className='bg-black' />

      <Clients />

      <hr className='bg-black' />

      <AboutUs />

      <Team />

      <hr className='bg-black' />

      <AiMagppie />

      <hr className='bg-black' />

      <div className='max-w-sm mx-auto overflow-hidden'>
        {ONGOING_MOCK_DAtA.map((data, i) => (
          <OnGoing data={data} key={i} />
        ))}
      </div>
    </div>
  );
}
