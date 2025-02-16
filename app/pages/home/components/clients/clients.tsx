import { clients } from './data';

export function Clients() {
  return (
    <section className='px-4 py-8 min-h-screen'>
      <h2 className='text-center text-2xl font-semibold italic mb-6'>
        Our Clients
      </h2>
      <div className='columns-2 gap-4 space-y-4'>
        {clients.map((client, index) => (
          <div
            key={index}
            className='w-full break-inside-avoid rounded-lg overflow-hidden shadow-lg bg-white'
          >
            <img
              src={client.src}
              alt={client.title}
              className='w-full h-auto object-cover rounded-t-lg'
            />
            <div className='p-3'>
              <h3 className='font-semibold text-sm'>{client.title}</h3>
              <p className='text-xs text-gray-600'>{client.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
