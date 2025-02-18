import { Link } from '@remix-run/react';
import { teams } from './data';

export function Team() {
  return (
    <section className='flex flex-col items-center text-center p-6 my-10'>
      <h2 className='text-[18px] mb-4 x-font-barlow-semi-condensed-500'>team</h2>
      <div className='w-full overflow-x-auto flex scrollbar-hide'>
        <div className='flex space-x-4'>
          {teams.map((team, index) => (
            <div
              key={index}
              className='w-[186px] h-[330px] rounded-full overflow-hidden'
            >
              {team.src.endsWith('.mp4') ? (
                <video
                  src={team.src}
                  className='w-full h-full object-cover'
                  autoPlay
                  loop
                  muted
                  playsInline // Prevents fullscreen on iOS
                  // webkit-playsinline="true" // For older Safari versions
                />
              ) : (
                <img
                  src={team.src}
                  alt={`Team member ${index + 1}`}
                  className='w-full h-full object-cover'
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <Link
        to='/team'
        className='mt-6 text-[18px] text-gray-600 underline x-font-barlow-semi-condensed-500'
      >
        see more team members
      </Link>
    </section>
  );
}
