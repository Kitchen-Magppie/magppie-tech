import { useState } from 'react';

export function ProductVariant() {
  const [selectedStyle, setSelectedStyle] = useState<string>(
    VARIANT_OPTIONS[0].id
  );

  return (
    <div className='flex items-center justify-center'>
      <div className='flex gap-4 overflow-x-auto  max-w-full p-4'>
        {VARIANT_OPTIONS.map((style) => (
          <button
            key={style.id}
            onClick={() => setSelectedStyle(style.id)}
            className={`flex border-2 flex-col items-center min-w-[100px] rounded-[32px] p-6 transition-all duration-300 ${
              selectedStyle === style.id ? 'bg-[#313E48]' : 'bg-white'
            } ${
              selectedStyle === style.id
                ? ''
                : // 'shadow-lg scale-105'
                  '  hover:shadow-md'
            }`}
          >
            <div className='relative'>
              <div
                className={`w-20 h-20 rounded-full ${style.color} shadow-inner relative overflow-hidden`}
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1603665409265-bdc95b1e4d98?auto=format&fit=crop&q=80&w=200&h=200")',
                  //   backgroundBlend: 'overlay',
                  backgroundSize: 'cover',
                }}
              >
                {/* {selectedStyle === style.id && (
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-20'>
                    <input className='text-white w-8 h-8' />
                  </div>
                )} */}
              </div>
            </div>
            <span
              className={`mt-4 text-sm text-center x-font-barlow-semi-condensed-300 font-medium  ${
                selectedStyle === style.id
                  ? 'text-white'
                  : 'opacity-40 text-gray-700'
              }`}
            >
              {style.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
interface TVariantItem {
  id: string;
  name: string;
  color: string;
}

const VARIANT_OPTIONS: TVariantItem[] = [
  {
    id: 'onyx-gold',
    name: 'Onyx Gold & Taj',
    color: 'bg-[#e8d7c3]',
  },
  {
    id: 'lasa',
    name: 'Lasa',
    color: 'bg-[#f5f5f5]',
  },
  {
    id: 'veronica',
    name: 'Veronica',
    color: 'bg-[#e3eae3]',
  },
  {
    id: 'machia',
    name: 'Machia & Mystic',
    color: 'bg-[#f3e6f3]',
  },
  {
    id: 'onyx-pearl',
    name: 'Onyx Pearl',
    color: 'bg-[#e8f5e8]',
  },
];
