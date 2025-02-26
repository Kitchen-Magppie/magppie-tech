import { useState } from 'react';
import { Icon } from '@iconify/react';
// =========================================================
import { ButtonsMenu } from './components/buttons-menu';
import lShape from './assets/l-shape.svg';
import uShape from './assets/u-shape.svg';
import tick from './assets/tick.svg';
import parallelShape from './assets/parallel-shape.svg';
import { _ } from '~/types';

export default function Form() {
  const [kitchenShape, setKitchenShape] = useState('L Shape');
  return (
    <>
      <div className='flex items-start justify-center min-h-screen bg-gray-100 p-4 pt-14 '>
        <div
          className='bg-white p-4 rounded-2xl w-full max-w-md'
          style={{
            boxShadow: '0px 0px 20px 10px #d0d0d0',
          }}
        >
          <h2 className='text-center text-[36px] font-light text-gray-700 x-font-barlow-semi-condensed-300 pb-6'>
            Mention your kitchen & personal details
          </h2>

          {/* Kitchen Area Size */}
          <div className='mt-4 bg-[#000000] opacity-80 p-6 rounded-2xl'>
            <p className='text-[20px]  text-white x-font-barlow-semi-condensed-400 text-center mb-8'>
              Your Kitchen Area Size
            </p>
            <div className='flex gap-2 mt-2'>
              {/* Length Select */}
              <div className='relative w-1/2'>
                <select className='w-full px-2 py-3 text-xs border rounded-full text-black bg-[#FFFFFF] appearance-none pr-10 '>
                  <option className='x-font-barlow-semi-condensed-400'>
                    Length (Ft)
                  </option>
                </select>
                <div className='absolute inset-y-0 right-3 flex items-center pointer-events-none'>
                  <Icon
                    icon='mdi:chevron-down'
                    className='w-5 h-5 text-gray-500'
                  />
                </div>
              </div>

              {/* Width Select */}
              <div className='relative w-1/2'>
                <select className='w-full px-2 py-3 text-xs border rounded-full text-black bg-[#FFFFFF] appearance-none pr-10'>
                  <option className='x-font-barlow-semi-condensed-400'>
                    Width (Ft)
                  </option>
                </select>
                <div className='absolute inset-y-0 right-3 flex items-center pointer-events-none'>
                  <Icon
                    icon='mdi:chevron-down'
                    className='w-5 h-5 text-gray-500'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Kitchen Shape */}
          <div className='mt-4'>
            <div className='flex flex-col justify-center bg-[#000000] opacity-80 p-3 rounded-2xl mt-2'>
              <p className='text-[20px] text-white x-font-barlow-semi-condensed-400 text-center mb-8'>
                Your Kitchen Shape
              </p>
              <div className='flex bg-[#000000] rounded-lg mt-2 gap-2 w-full h-[200px]'>
                {SHAPE_OPTIONS.map((shape, i) => {
                  return (
                    <button
                      key={i}
                      className='flex flex-col items-center relative rounded-2xl cursor-pointer w-full'
                      onClick={() => {
                        setKitchenShape(shape);
                      }}
                    >
                      <div
                        className={`h-[150px] flex flex-col items-center ${
                          kitchenShape === shape
                            ? 'bg-[#BFD2C1]'
                            : 'bg-[#FFFFFF]'
                        } rounded-2xl mb-1 p-2`}
                      >
                        <img
                          src={_.get(SHAPE_IMAGE, shape, '')}
                          alt={`${shape} icon`}
                          className='w-full h-full object-contain rounded-md'
                        />
                        <p className='absolute bottom-14 text-[12px] text-black '>
                          {shape}
                        </p>
                      </div>
                      {kitchenShape === shape ? (
                        <img className='mt-2' src={tick} alt='' />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <div className='mt-4 bg-[#000000] opacity-80 p-4 rounded-2xl'>
            <p className='text-[20px]  text-white x-font-barlow-semi-condensed-400 text-center mb-8'>
              Personal Details
            </p>
            {FORM_FIELD_OPTIONS?.map((item, i) => {
              return (
                <input
                  key={i}
                  type={item.type || 'text'}
                  name={item.value}
                  placeholder={item.label}
                  className='w-full px-2 py-3 border rounded-full mb-6 bg-white text-black text-center x-font-barlow-semi-condensed-400 placeholder-black'
                />
              );
            })}

            <button className='w-[220px] px-2 py-3 bg-[#BFD2C1] text-[#313E48] rounded-full mt-2 flex justify-center mx-auto x-font-barlow-semi-condensed-400'>
              Click here to Get OTP
            </button>
            <p className='text-[20px] text-center text-white mt-6 underline cursor-pointer x-font-barlow-semi-condensed-400'>
              Privacy Policy
            </p>
          </div>

          <p className='text-center text-[12px] my-8 x-font-barlow-semi-condensed-500'>
            Insert OTP above to get your estimate instantly.
          </p>
        </div>
      </div>
      <ButtonsMenu />
    </>
  );
}
const FORM_FIELD_OPTIONS = [
  { label: 'Name', value: 'name' },
  { label: 'City', value: 'city' },
  { label: 'Mobile Number', value: 'mobileNumber' },
  { label: 'Email id', value: 'emailId', type: 'email' },
];
const SHAPE_IMAGE = {
  'L Shape': lShape,
  'U Shape': uShape,
  Parallel: parallelShape,
};
const SHAPE_OPTIONS = ['L Shape', 'U Shape', 'Parallel'];
