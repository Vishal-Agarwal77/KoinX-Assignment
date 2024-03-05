import React from 'react'
import img_src from '../Assests/Capture.JPG'

export default function GetStarted() {
  return (
    <div className='h-fit flex flex-col gap-y-4 bg-[#0052FE] items-center text-white px-6 py-12 rounded-xl'>
        <p className='font-semibold text-xl'>Get Started with KoinX for FREE</p>
        <p className='text-center font-light'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports</p>
        <img src={img_src} alt="Get Started"/>
        <p className='px-4 py-2 rounded-lg bg-white w-fit text-black cursor-pointer font-semibold'>Get Started for FREE </p>
    </div>
  )
}
