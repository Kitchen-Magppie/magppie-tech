import { Link } from '@remix-run/react';
import { teams } from './data';

export function Team() {
  return (
    <section className="flex flex-col items-center text-center p-6 my-10">
      <h2 className="text-lg font-medium mb-4">team</h2>
      <div className="w-full overflow-x-auto flex scrollbar-hide">
        <div className="flex space-x-4">
          {teams.map((team, index) => (
            <img key={index} src={team.src} alt={`Team member ${index + 1}`} className="w-[186px] h-[330px] object-cover rounded-full" />
          ))}
        </div>
      </div>
      <Link to="/team" className="mt-6 text-sm font-medium text-gray-600 underline">
        see more team members
      </Link>
    </section>
  );
}
