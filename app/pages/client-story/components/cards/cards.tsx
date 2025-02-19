import { Card } from './card';
import { cardsData } from './data';

export function Cards() {
  return (
    <div className='flex items-center flex-col mt-8'>
      <h1 className='x-fontbarlow-semi-condense-500 text-[24px] text-[#313E48] text-center px-8'>
        Recommended looks based on client personality
      </h1>
      <div className='grid grid-cols-2 gap-10'>
        {cardsData.map((data) => (
          <div key={data.id}>
            <Card img={data.img} title={data.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
