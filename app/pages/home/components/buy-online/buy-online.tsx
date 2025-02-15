import { BUY_ONLINE_MOCK_DATA } from '~/mocks';
import { BuyOnlineCardItem } from './buy-online-card-item';

export function BuyOnline() {
  return (
    <section className='text-center py-12'>
      <h2 className='text-3xl font-semibold italic'>Buy Online</h2>
      <div className='max-w-sm mx-auto rounded-lg overflow-hidden'>
        {BUY_ONLINE_MOCK_DATA.map((product, i) => (
          <BuyOnlineCardItem key={i} data={product} />
        ))}
      </div>
    </section>
  );
}
