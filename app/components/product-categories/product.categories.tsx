import ProductCategoriesTwo from '../../assets/videos/product-categories-2.mp4';
import ProductCategoriesOne from '../../assets/videos/product-categories1.mp4';

export default function ProductCategories() {
  return (
    <section className='text-center py-12'>
      {/* Title */}
      <h2 className='text-3xl font-semibold italic'>Product Categories</h2>

      {/* Categories */}
      <div className='mt-6 flex justify-center gap-8'>
        {/* Category 1 */}
        <div className='flex flex-col items-center'>
          <div className='w-40 h-20 rounded-[50px] overflow-hidden'>
            <video
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={ProductCategoriesOne} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className='mt-2 text-gray-700'>Wellness Kitchens</p>
        </div>

        {/* Category 2 */}
        <div className='flex flex-col items-center'>
          <div className='w-40 h-20 rounded-[50px] overflow-hidden'>
            <video
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={ProductCategoriesTwo} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className='mt-2 text-gray-700'>Wellness Wardrobes</p>
        </div>
      </div>
    </section>
  );
}
