import { useState } from 'react';
import { ButtonsMenu } from './components/buttons-menu';
import lShape from './assets/l-shape.svg';
import uShape from './assets/u-shape.svg';
import parallelShape from './assets/parallel-shape.svg';
import tick from './assets/tick.svg';
import { Icon } from '@iconify/react';

// =========================================================
export default function Form() {
  const [kitchenShape, setKitchenShape] = useState('L Shape');
  return (
    <>
      <div className='flex items-start justify-start min-h-screen bg-gray-100 p-4 pt-14'>
        <div className='bg-white p-4 rounded-2xl shadow-lg w-full max-w-md'>
          <h2 className='text-center text-[36px] font-light text-gray-700 x-fontbarlow-semi-condense-300 pb-6'>
            Mention your kitchen & personal details
          </h2>

          {/* Kitchen Area Size */}
          <div className='mt-4 bg-[#000000] p-6 rounded-2xl'>
            <p className='text-[16px] text-center font-medium mb-6 text-white x-fontbarlow-semi-condense-400'>
              Your Kitchen Area Size
            </p>
            <div className='flex gap-10 mt-2'>
              {/* Length Select */}
              <div className='relative w-1/2'>
                <select className='w-full p-2 border rounded-full text-black bg-[#FFFFFF] appearance-none pr-10'>
                  <option>Length (Ft)</option>
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
                <select className='w-full p-2 border rounded-full text-black bg-[#FFFFFF] appearance-none pr-10'>
                  <option>Width (Ft)</option>
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
            <div className='flex flex-col justify-center bg-[#000000] p-3 rounded-lg mt-2'>
              <p className='text-[16px] font-medium text-white x-fontbarlow-semi-condense-400 text-center'>
                Your Kitchen Shape
              </p>
              <div className='flex justify-between bg-[#000000] rounded-lg mt-2 w-full h-[200px]'>
                {['L Shape', 'U Shape', 'Parallel'].map((shape) => {
                  const shapeImages = {
                    'L Shape': lShape,
                    'U Shape': uShape,
                    Parallel: parallelShape,
                  };
                  return (
                    <div
                      key={shape}
                      className='flex flex-col items-center relative rounded-2xl cursor-pointer w-full'
                      onClick={() => setKitchenShape(shape)}
                    >
                      <div
                        className={`w-[100px] flex flex-col items-center h-[155px] ${
                          kitchenShape === shape
                            ? 'bg-[#BFD2C1]'
                            : 'bg-[#FFFFFF]'
                        } rounded-2xl mb-1 p-2`}
                      >
                        <img
                          src={shapeImages[shape]}
                          alt={`${shape} icon`}
                          className='w-full h-full object-contain rounded-md'
                        />
                        <p className='absolute bottom-12 text-[12px] text-black'>
                          {shape}
                        </p>
                      </div>
                      {kitchenShape === shape ? (
                          <img className='mt-2' src={tick} alt='' />
                        ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <div className='mt-4 bg-[#000000] p-4 rounded-lg'>
            <p className='text-[16px] font-medium text-white x-fontbarlow-semi-condense-400 text-center mb-8'>
              Personal Details
            </p>
            <input
              type='text'
              placeholder='Name'
              className='w-full p-2 border rounded-full mb-6 bg-white text-black text-center'
            />
            <input
              type='text'
              placeholder='City'
              className='w-full p-2 border rounded-full mb-6 bg-white text-black text-center'
            />
            <input
              type='text'
              placeholder='Mobile Number'
              className='w-full p-2 border rounded-full mb-6 bg-white text-black text-center'
            />
            <input
              type='email'
              placeholder='Email id'
              className='w-full p-2 border rounded-full mb-6 bg-white text-black text-center'
            />
            <button className='w-[220px] p-2 bg-[#BFD2C1] text-black rounded-full mt-2 flex justify-center mx-auto'>
              Click here to Get OTP
            </button>
            <p className='text-[12px] text-center text-white mt-6 underline cursor-pointer'>
              Privacy Policy
            </p>
          </div>

          <p className='text-center text-[12px] text-gray-500 my-8'>
            Insert OTP above to get your estimate instantly.
          </p>
        </div>
      </div>
      <ButtonsMenu />
    </>
  );
}
