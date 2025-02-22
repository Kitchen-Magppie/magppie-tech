import { useState } from 'react';
export function ProductVariant() {
  const [selection, setSelection] = useState(INIT_SELECTION);

  return (
    <div className='flex items-center justify-center'>
      <div className='flex gap-4 overflow-x-auto  max-w-full p-4 no-scrollbar '>
        {VARIANT_OPTIONS.map((style) => (
          <button
            key={style.id}
            onClick={() => setSelection(style.id)}
            className={`flex border-2 flex-col items-center min-w-[100px] rounded-full p-6 transition-all duration-300 ${
              selection === style.id
                ? 'bg-[#313E48] border-[#313E48]'
                : 'bg-white'
            } ${
              selection === style.id
                ? ''
                : // 'shadow-lg scale-105'
                  '  hover:shadow-md'
            }`}
          >
            <div
              className={`w-20 h-20 rounded-full ${style.color} shadow-inner overflow-hidden `}
              style={{ marginBlock: -12 }}
            />

            <span
              className={`mt-4 text-sm text-center x-font-barlow-semi-condensed-300 font-medium  ${
                selection === style.id
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
const INIT_SELECTION = VARIANT_OPTIONS[0].id;
