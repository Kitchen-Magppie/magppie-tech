import { MobileLayout } from '~/components';
import { ClientsGrid } from './components';

export default function Clients() {
  return (
    <MobileLayout>
      <div className='px-4 pt-2 w-[280px]'>
        <h1 className='text-[40px] x-font-dalglish-400 '>
          where wellness meets trust
        </h1>
        <h2 className='text-[15px] x-fontbarlow-semi-condense-400 pt-6'>
          Read stories of connection with our clients
        </h2>
      </div>
      <div className='mb-10'>
        <ClientsGrid />
      </div>
    </MobileLayout>
  );
}
