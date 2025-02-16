import { clients } from './data';

export function Clients() {
  return (
    <section className='px-4 py-8'>
      <h2 className='text-center text-2xl font-semibold italic mb-6'>
        Our Clients
      </h2>
      <div className='grid grid-cols-2 gap-4 columns-2'>
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
              <h3 className='font-semibold text-sm'>{client.title}</h3>
              <p className='text-xs text-gray-600'>{client.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
