import React,{useState} from 'react'
import { UserIcon } from '@heroicons/react/24/outline';
import { FunnelIcon, BarsArrowDownIcon } from '@heroicons/react/24/outline'
import {Button} from "@heroui/button";
import Sort from '../SortItem/Sort';
function BellaCard() {
    const [showSort, setShowSort] = useState(false);
    const handleClick=()=>{
      setShowSort(!showSort)
    }
    const handleCloseSort = () => {
      setShowSort(false); 
    };
    const data=[
        {
            icon:<UserIcon/>,
            h1:"Wei Jie",
            p:"Singapore, Little india",
            star:"/star.png",
            date:"29/11/2023",
            text:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            icon:<UserIcon/>,
            h1:"Mei Ling",
            p:"Singapore, Orchad boulevard",
            star:"/star.png",
            date:"09/05/2023",
            text:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },  {
            icon:<UserIcon/>,
            h1:"Wei Jie",
            p:"Singapore, Little india",
            star:"/star.png",
            date:"29/11/2023",
            text:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },  {
            icon:<UserIcon/>,
            h1:"Wei Xiong",
            p:"Singapore, Takashimaya",
            star:"/star.png",
            date:"01/05/2023",
            text:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },  {
            icon:<UserIcon/>,
            h1:"Ming Wei",
            p:"Singapore, Little india",
            star:"/star.png",
            date:"31/04/2023",
            text:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },  {
            icon:<UserIcon/>,
            h1:"Xin Yi",
            p:"Singapore, Zen rooms",
            star:"/star.png",
            date:"30/04/2023",
            text:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },  {
            icon:<UserIcon/>,
            h1:"Zhi Hao",
            p:"Singapore, Boon Keng",
            star:"/star.png",
            date:"27/03/2023",
            text:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },  {
            icon:<UserIcon/>,
            h1:"Li Hua",
            p:"Singapore, DLLM loklok",
            star:"/star.png",
            date:"24/03/2023",
            text:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },  {
            icon:<UserIcon/>,
            h1:"Si Ying",
            p:"Singapore, Bedemeer",
            star:"/star.png",
            date:"11/03/2023",
            text:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },

        
    ]

  return (
    <div className='max-w-[1300px] w-full h-auto container px-4 mx-auto font-Roboto'>
      <div className='flex flex-wrap gap-4 mt-4 mb-5 px-4 lg:ml-28'>
        <Button className='flex items-center gap-2 border border-[#5E5E5E] px-4 py-2 rounded-full text-sm bg-white sm:justify-start'>
         
            <div className='flex flex-col items-center gap-1'>
            <div className='w-5 h-0.5 text-[#5E5E5E] border-1.5'/>  
           <div className='w-3.5 h-0.5 text-[#5E5E5E] border-1.5'/>
           <div className='w-2.5 h-0.5 text-[#5E5E5E] border-1.5'/>
            </div>
        Filter
        </Button>

<div className='relative'>
<Button onClick={handleClick} className='flex items-center gap-2 border border-[#5E5E5E] px-4 py-2 rounded-full text-sm bg-white'>
            <BarsArrowDownIcon className='h-4 w-4'/>
            Sort
        </Button>

        {showSort && (
      <div className='absolute mt-2 p-2 bg-white top-full'>
          <Sort onClose={handleCloseSort}/>
      </div>
    )}
</div>

      </div>

      <div className='space-y-10 '>
        {data.map((item,i)=>(
            <div key={i} className='w-full lg:w-[1055px] hover:bg-[#c4b3b3] bg-[#F8F8F8] mx-auto rounded-[20px] p-5 hover:translate-y-2 transition-all '>
               <div className='flex items-center gap-3'>
                <div className='max-w-[50px] w-full h-auto text-gray-600 bg-white p-2 rounded-full'>{item.icon}</div>
                <div>
                <h1 className='text-sm sm:text-base  text-[#232323]'>{item.h1}</h1>
                <p className='lg:text-[16.5px] text-base text-[#8A8A8A]'>{item.p}</p>
                </div>
               </div>
               <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 ml-12 mt-2'>
               <div>
               <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <img key={index} src={item.star} alt="star" className="w-5 h-5" />
                ))}
              </div>
               </div>
                <p className='text-sm sm:text-base  text-[#343434]'>{item.date}</p>
               </div>

               <p className='lg:w-[511px] lg:h-[57px] w-full container mt-5 text-[16px] text-[#5E5E5E]'>{item.text}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default BellaCard
