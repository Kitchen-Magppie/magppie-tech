import { BUY_ONLINE_MOCK_DATA } from '~/mocks';
import { BuyOnlineCardItem } from './buy-online-card-item';

export function BuyOnline() {
  return (
    <section className='text-center py-12 flex flex-col gap-5'>
      <h2 className='text-3xl font-semibold x-font-noto-serif-display-600-italic'>
        Buy Online
      </h2>
      <hr className='bg-black' />

      <div className='max-w-sm mx-auto rounded-lg overflow-hidden'>
        {BUY_ONLINE_MOCK_DATA.map((data, i) => (
          <BuyOnlineCardItem key={i} data={data} />
        ))}
      </div>
    </section>
  );
}
