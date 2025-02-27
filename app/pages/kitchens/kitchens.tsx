import { MobileLayout } from '~/components';
import { KitchenHeader, KitchenCardItem } from './components';
import { KITCHEN_DATA } from '~/mocks';

export default function KitchenPage() {
  return (
    <MobileLayout>
      <KitchenHeader />
      <div className='max-w-sm mx-auto rounded-lg overflow-hidden px-2'>
        {KITCHEN_DATA.map((data, i) => (
          <KitchenCardItem key={i} data={data} />
        ))}
      </div>
    </MobileLayout>
  );
}
