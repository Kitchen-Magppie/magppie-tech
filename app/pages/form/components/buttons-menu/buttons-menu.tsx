import { useNavigate } from '@remix-run/react';

export function ButtonsMenu() {
  const navigate = useNavigate();

  return (
    <div className='fixed bottom-4 left-1/2 w-full -translate-x-1/2 flex items-start justify-start gap-3 ml-5'>
      <button
        className='bg-[#9CA5AB] text-white px-4 py-3 rounded-full shadow-lg text-xl x-font-barlow-semi-condensed-400'
        onClick={() => {
          navigate('/', { replace: true });
        }}
      >
        go back
      </button>
    </div>
  );
}
