import type { MetaFunction } from '@remix-run/node';
// =========================================================
import { TableExample, MobileLayout } from '~/components';
import { Button } from '~/components/ui/button';

// =========================================================
import HomeVideo from '../assets/videos/home-intro.mp4';
import ProductCategories from '~/components/product-categories/product.categories';
import { ProductsCard } from '~/components/products-card';
import { BuyOnline } from '~/components/buy-online';

export default function Index() {
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
              <source src={HomeVideo} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Dark Overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-50 rounded-bl-3xl rounded-br-3xl'></div>

          {/* Content Overlay */}
          <div className='relative flex flex-col items-center pt-8 px-6 text-center'>
            {/* Logo */}
            <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4'>
              <span className='text-emerald-900 font-bold text-lg'>
                MAGPPIE
              </span>
            </div>

            {/* Title */}
            <h1 className='text-3xl font-semibold text-white mb-2'>
              Wellness Kitchen
            </h1>

            {/* Subtitle */}
            <p className='text-white/90 mt-60 text-lg'>
              Welcome to the wellness movement
            </p>
          </div>
        </div>

        <section className='max-w-lg mx-auto text-center px-6 py-12'>
          {/* Title */}
          <h2 className='text-3xl font-semibold leading-tight text-black'>
            Our wellness kitchen <br />
            takes care of your <br />
            family’s health
          </h2>

          {/* Description */}
          <p className='mt-6 text-gray-700 text-lg leading-relaxed'>
            Our planet faces unseen threats every day – our food, water, air,
            and even our homes are filled with toxins. Harmful formaldehyde
            emissions from kitchens and furniture are putting our cellular
            health at risk.
          </p>

          <p className='mt-6 text-gray-700 text-lg leading-relaxed'>
            At Magppie, we’re more than a brand; we’re a wellness movement. With
            deep-tech innovations, we create health-conscious solutions to
            transform your home – particularly kitchen, wardrobes and lighting
            that nurtures a longer, healthier life.
          </p>
        </section>
        <hr className='bg-black' />
      </MobileLayout>
      <ProductCategories />
      <ProductsCard />
      <hr className='bg-black' />
      <BuyOnline />
      <TableExample />
      <Button>Submit</Button>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: 'MAGPPIE' },
    { name: 'description', content: 'Welcome to MAGPPIE!' },
  ];
};
