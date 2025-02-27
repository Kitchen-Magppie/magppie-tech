export function KitchenHeader() {
  return (
    <div className='mb-[350px]'>
      <div className='flex flex-col items-center pt-10 absolute top-0 w-full'>
        <div className='w-24 h-24 bg-[#313E48] rounded-full flex items-center justify-center mb-4'>
          <span className='text-white font-bold text-[14px]'>MAGPPIE</span>
        </div>
        <h1 className='text-2xl text-black mb-2 x-font-exo-300'>
          Wellness Kitchen
        </h1>
      </div>
      <div className='flex flex-col items-center pt-48 absolute top-0 w-full px-4'>
        <h1 className='text-[36px] text-black text-center x-font-dalglish-400 mb-2 x-font-exo-300'>
          select the kitchen style you prefer
        </h1>
      </div>
    </div>
  );
}
