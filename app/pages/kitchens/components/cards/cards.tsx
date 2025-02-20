import { AllKitchenCardItem } from './card';
import { ALL_KITCHENS_MOCK_DATA } from './data';

export function Cards() {
  return (
    <div className='max-w-sm mx-auto rounded-lg overflow-hidden px-2'>
      {ALL_KITCHENS_MOCK_DATA.map((data, i) => (
        <AllKitchenCardItem key={i} data={data} />
      ))}
    </div>
  );
}
