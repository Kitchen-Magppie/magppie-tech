// =========================================================
import { NAVIGATION_OPTIONS } from '~/mocks';

export function MobileNavBar() {
  return (
    <div className='fixed bottom-4 left-16 right-16  '>
      <nav className=' h-14 bg-white/80 backdrop-blur-md rounded-full px-6 shadow-lg z-50  '>
        <div className='flex items-center h-full gap-8 justify-center'>
          {NAVIGATION_OPTIONS?.map((item, i) => {
            return (
              <img
                alt={item.label}
                src={item.icon}
                style={{
                  marginTop:
                    item.label?.toLowerCase() === 'drop' ? '5px' : 'inherit',
                }}
                className={`hover:bg-transparent  ${
                  !i ? 'text-neutral-600' : 'text-neutral-400'
                }`}
                key={i}
              />
            );
          })}
        </div>
      </nav>
    </div>
  );
}
