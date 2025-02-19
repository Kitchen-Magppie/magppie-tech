export function Card({ img, title }: TProps) {
  return (
    <div className='flex flex-col items-center text-center p-4'>
      {/* Circular Image */}
      <div className='w-32 h-32 rounded-full overflow-hidden'>
        <img src={img} alt={title} className='w-[175px] h-[175px] object-cover' />
      </div>

      {/* Title */}
      <h3 className='mt-2 text-lg font-medium text-gray-900'>{title}</h3>

      {/* Disabled Buy Now Button */}
      <button
        className='mt-2 bg-gray-300 text-white text-sm font-medium px-4 py-1 rounded-lg cursor-not-allowed'
        disabled
      >
        BUY NOW
      </button>
    </div>
  );
}

interface TProps {
  img: string;
  title: string;
}
