import React, { useState } from 'react';

function MoreInformationCard() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='max-w-[1300px] w-full h-auto container px-4 mx-auto font-Roboto flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:px-28'>

      {/* Right Side */}
      <div className='w-1/2 font-Roboto space-y-8'>
        <h1 className='mt-4 mb-4 text-[#1E1E1E] text-[34px] font-Lexend font-bold'>More informations</h1>

        <div className='flex items-center gap-4'>
          <img src="/nife.png" alt="" />
          <button
            onClick={() => setShowMenu(true)}
            className='underline text-[#232323]'
          >
            See The Menu
          </button>
        </div>

        <div className='flex items-center gap-4'>
          <img src="/phone.png" alt="" />
          <p className='text-[#232323] text-[20px]'>+847 87 37 29 01</p>
        </div>

        <div className='flex items-center gap-4'>
          <img src="/location.png" alt="" />
          <p className='text-[#232323] text-[20px]'>Singapour, Bishan</p>
        </div>

        <div className='flex items-center gap-4'>
          <img src="/clock.png" alt="" />
          <p className='text-[#232323] text-[20px]'>7j/7, 08:00 - 22:00</p>
        </div>

        <div className='flex items-center gap-4'>
          <img src="/Mask group.png" alt="" />
          <a href="https://www.bellaitalia.com" target="" rel="" className='underline text-[#232323]'>
            www.bellaitalia.com
          </a>
        </div>

        <div className='flex gap-5 cursor-pointer mt-10'>
          <img src="/fb.png" alt="" />
          <img src="/camera.png" alt="" />
          <img src="/tiktok.png" alt="" />
          <img src="/whatsapp.png" alt="" />
        </div>
      </div>

      {/* Left Side */}
      <div className='w-1/2'>
        <img src="/mao.png" alt="" className='lg:mt-10 mt-2 rounded-[9px]' />
      </div>

      {/* Modal for Menu Image */}
      {showMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-[50%]">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-gray-700 hover:text-black"
              onClick={() => setShowMenu(false)}
            >
              &times;
            </button>

            {/* Menu Image */}
            <img
              src="/menu.png"
              alt="Menu Bella Italia"
              className="w-full h-auto rounded"
            />

            {/* Download Button */}
            <div className='text-center mt-4'>
              <p className='font-semibold mb-2 text-lg'>Menu Bella Italia</p>
              <a
                href="/Screenshot 2025-04-20 122123.png"
                download="BellaItaliaMenu.png"
                className='inline-block bg-white hover:bg-blue-500 text-black border-1 rounded-full font-semibold md:py-2 md:px-4 px-1 py-1 transition duration-200 w-full'
              >
                ⬇️ Download this menu
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoreInformationCard;
