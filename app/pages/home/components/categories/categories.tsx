import ProductCategoriesTwo from '~/assets/videos/product-categories-2.mp4';
import ProductCategoriesOne from '~/assets/videos/product-categories1.mp4';

export function Categories() {
  return (
    <section className='text-center py-12'>
      {/* Title */}
      <h2 className='text-3xl  x-font-noto-serif-display-400-italic'>
        Product Categories
      </h2>

      {/* Categories */}
      <div className='mt-6 grid grid-cols-2 gap-8 px-2'>
        {/* Category 1 */}
        {CATEGORY_OPTIONS?.map((data, i) => {
          return (
            <div className='flex flex-col items-center' key={i}>
              <div className='w-full h-20 rounded-[50px] overflow-hidden'>
                <video
                  className='w-full h-full object-cover'
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={data.url} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className='mt-2 text-gray-700 x-font-barlow-semi-condensed-400'>
                {data.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const CATEGORY_OPTIONS = [
  { url: ProductCategoriesOne, label: 'wellness kitchens' },
  { url: ProductCategoriesTwo, label: 'wellness wardrobes' },
];
