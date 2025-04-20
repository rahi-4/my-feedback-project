import React from 'react'
import { UserIcon } from '@heroicons/react/24/outline';
function Card() {

  const Items=[
    {icon:<UserIcon/>,
      h1:"Leslie sakho",
      country:"Canada, toronto",
      star:"/star.png",
      date:"09/11/2023",
      p1:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      p2:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      img:[
        "/Rectangle 24.png",
        "/Rectangle 25 (1).png",
        "/Rectangle 26.png"
      ]
      ,a:"Discover"
    },
    {icon:<UserIcon/>,
      h1:"Chris macari",
      country:"Singapour",
      star:"/star.png",
      date:"14/09/2023",
      p1:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      p2:"The lorem ipsum is, in printing.",
      img:[
        "/Rectangle 25 (1).png",
        "/Rectangle 25 (2).png",
        "/Rectangle 26 (2).png"
      ]
      ,a:"Discover"
    } 
    ,  {icon:<UserIcon/>,
      h1:"Jojo alba",
      country:"Kuala lumpur",
      star:"/star.png",
      date:"28/09/2023",
      p1:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      p2:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      img:[
        "/Rectangle 24.png",
        "/Rectangle 25 (1).png",
        "/Rectangle 26.png"
      ]
      ,a:"Discover"
    }
  ]


  return (

  <div className='bg-[#F8F8F8]'>
  
      <div className='flex flex-wrap justify-center gap-4 p-3 '>
      <h1 className='container mx-auto ml-12 font-Lexend text-[32px] font-bold text-[#1E1E1E]'>Recents avtivities</h1>
    {Items.map((card, i) => (
      <div
        key={i}
        className='w-full sm:w-[90%] md:w-[47%] lg:w-[30%] xl:w-[30%] h-auto p-4 bg-[] shadow rounded flex flex-col hover:translate-y-2 '
      >
        <div className='flex items-center gap-3'>
          <UserIcon className="w-[50px] h-[50px] text-gray-600 bg-white p-2 rounded-full" />
          <div>
            <h1 className='font-Roboto text-[21px] text-[#232323]'>{card.h1}</h1>
            <p className='font-Roboto text-[16.5px]'>{card.country}</p>
  
            <div className='flex items-center gap-4 mt-2'>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <img key={index} src={card.star} alt="star" className="w-6 h-6" />
                ))}
              </div>
              <p className='font-Roboto text-[14.5px] text-[#343434]'>{card.date}</p>
            </div>
          </div>
        </div>
  
        <div className='text-[#5E5E5E] mt-6 font-Roboto'>
          <p>{card.p1}</p>
          <p className='mt-4'>{card.p2}</p>
        </div>
  
        <div className='mt-6 flex gap-4'>
          {card.img && card.img.map((src, idx) => (
            <img key={idx} src={src} alt="" className='w-20 h-20 object-cover rounded' />
          ))}
        </div>
  
        {card.a && (
          <div className='mt-2 font-Lexend font-bold'>
            <a href="#" className='border-b-2 border-[#232323] hover:text-[#1677BD]'>{card.a}</a>
          </div>
        )}
      </div>
    ))}
  </div>
  </div>
  
  )
}


export default Card