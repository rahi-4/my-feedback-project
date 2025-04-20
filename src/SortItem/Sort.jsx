import React from 'react';
import { FaTimes } from 'react-icons/fa'; // FaTimes ইনপোর্ট

function Sort({ onClose }) {
  return (
    <div className='w-[276px] h-[173px] rounded-[15px] border-1'>
      <div className='flex justify-between items-center p-2'>
     <span> </span>
        <FaTimes 
          className="cursor-pointer text-[#5D5D5D] hover:text-slate-900" 
          onClick={onClose} 
        />
      </div>
      <div className='font-Roboto space-y-2 text-[#5D5D5D] text-[17px] ml-2 cursor-pointer'>
        <p className='hover:text-[#2146C7]'>All feedbacks</p>
        <p className='hover:text-[#2146C7]'>Highest rated</p>
        <p className='hover:text-[#2146C7]'>Oldest rated</p>
      </div>
    </div>
  );
}

export default Sort;
