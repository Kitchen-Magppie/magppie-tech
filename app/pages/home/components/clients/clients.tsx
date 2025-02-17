import { Link } from '@remix-run/react';
import { clients } from './data';

export function Clients() {
  return (
    <section className='px-4 py-8'>
      <h2 className='text-center text-4xl font-semibold italic mb-6'>
        Our Clients
      </h2>
      <div className='grid grid-cols-2 gap-4'>
        {clients.map((client, index) => (
          <div
            key={index}
            className='w-full bg-white rounded-lg overflow-hidden'
          >
            <img
              src={client.src}
              alt={client.title}
              className='w-full object-cover rounded-lg filter grayscale'
              style={{ height: client.height }} // Dynamic height from data
            />
            <div className='p-2'>
              <h3 className='font-semibold text-md'>{client.title}</h3>
              <p className='text-sm text-gray-600'>{client.subTitle}</p>
            </div>
          </div>
        ))}
      </div>

      <Link
        to='/team'
        className='mt-6 text-sm font-medium flex justify-center text-gray-600 underline'
      >
        see more clients
      </Link>
    </section>
  );
}
