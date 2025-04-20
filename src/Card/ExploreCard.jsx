import React from 'react'
import {Button} from "@heroui/button";
function ExploreCard() {
  return (
    <section className="bg-[#F2F2F2] mt-10">
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      
      {/* Right - Text & Button */}
      <div className="lg:max-w-[50%] text-start">
        <h1 className="font-Lexend text-[22px] md:text-[26px] font-bold mb-4">
          MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business
        </h1>
        <p className="text-[#5e5e5e] font-Roboto mb-6">
          The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
        </p>
        <Button className="bg-black text-white rounded-[26px] px-6 py-3 font-Roboto">
          Explore MyFeedback business
        </Button>
      </div>

      
      <div className="w-full lg:w-[50%]">
        <img src="/island.png" alt="Island" className="w-full h-auto object-contain" />
      </div>

    </div>
  </div>
</section>

  )
}

export default ExploreCard