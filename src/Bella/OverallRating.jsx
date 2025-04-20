import React from 'react'

function OverallRating() {
  return (
    <div className='max-w-[1300px] w-full h-auto container  mx-auto   '>
              <hr className='border-1  border-[#DCDCDC] mb-12'/>

        <div className='flex lg:flex-row flex-col lg:gap-16 items-center lg:ml-28 px-4 gap-6'>
            {/* right */}
            <div className='flex items-center gap-4  w-full lg:w-1/2 mb-6 lg:mb-0'>
            <img src="/Bigstar.png" alt="" srcset="" />
            <div className='mt-5'>
            <h1 className='font-Roboto text-[#232323] text-[32px] font-bold'>Overall rating</h1>
            <p className='text-[#838383] text-[19px]'>834 Reviews</p>
          <div className='flex space-x-1'>
          {[...Array(5)].map((_,index)=>(
                <img src="/star.png" alt="" key={index} className='h-5 w-5 mt-3 flex '/>
            ))}
          </div>
            </div>
            </div>
            {/* left */}
            <div className='w-full space-y-3 text-[#484848] '>
            <div className='flex lg:items-center gap-4 '>
                <p>5 stars</p>
                <img src="/Group 126.png" alt="" className=''/>
            </div>

            <div className='flex items-center gap-4'>
                <p>0 stars</p>
                <img src="/Group 127.png" alt="" />
            </div>

            <div className='flex items-center gap-4'>
                <p>0 stars</p>
                <img src="/Group 128.png" alt="" />
            </div>

            <div className='flex items-center gap-4'>
                <p>0 stars</p>
                <img src="/Group 129.png" alt="" />
            </div>

            <div className='flex items-center gap-4'>
                <p>0 stars</p>
                <img src="/Group 130.png" alt="" />
            </div>
            </div>
        </div>
        <hr className='border-1  border-[#DCDCDC] mt-12'/>

    </div>
  )
}

export default OverallRating