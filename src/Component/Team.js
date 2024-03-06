import React from 'react'
import Profile from '../Assests/Profile.jpg'

export default function Team() {
    return (
        <div className='w-full px-7 py-8 flex flex-col gap-y-8 rounded-xl bg-white max-[768px]:px-2'>
            <p className='text-3xl font-semibold'>Team</p>
            <p>Tincidunt vehicula convallis, egestas conubia sapien tristique vestibulum. Dictumst donec, aliquet est luctus a. Mattis porttitor ultricies aliquam, laoreet purus interdum, aptent bibendum elementum ullamcorper vel iaculis enim. Augue habitasse </p>
            <div className='flex flex-col gap-y-4'>
                <div className='flex gap-x-2 px-4 py-2 bg-[#c9e5f0] rounded-xl items-center max-[768px]:flex-col'>
                    <div className='flex flex-col gap-x-2 items-center basis-[25%]'>
                        <img src={Profile} alt={Profile} className='w-[100px] h-[120px] rounded-xl'/>
                        <p className='text-base font-semibold'>John Smith</p>
                        <p className='text-sm font-medium text-gray-600'>Designation</p>
                    </div>
                    <div className='basis-[75%] max-[768px]:text-left'>
                        <p>Tincidunt vehicula convallis, egestas conubia sapien tristique vestibulum. Dictumst donec, aliquet est luctus a. Mattis porttitor ultricies aliquam, laoreet purus interdum, aptent bibendum elementum ullamcorper vel iaculis enim. Augue habitasse cras amet, vitae imperdiet viverra, tellus porta pharetra</p>
                    </div>
                </div>
                <div className='flex gap-x-2 px-4 py-2 bg-[#c9e5f0] rounded-xl items-center max-[768px]:flex-col'>
                    <div className='flex flex-col gap-x-2 items-center basis-[25%]'>
                        <img src={Profile} alt={Profile} className='w-[100px] h-[120px] rounded-xl'/>
                        <p className='text-base font-semibold'>John Smith</p>
                        <p className='text-sm font-medium text-gray-600'>Designation</p>
                    </div>
                    <div className='basis-[75%] max-[768px]:text-left'>
                        <p>Tincidunt vehicula convallis, egestas conubia sapien tristique vestibulum. Dictumst donec, aliquet est luctus a. Mattis porttitor ultricies aliquam, laoreet purus interdum, aptent bibendum elementum ullamcorper vel iaculis enim. Augue habitasse cras amet, vitae imperdiet viverra, tellus porta pharetra</p>
                    </div>
                </div>
                <div className='flex gap-x-2 px-4 py-2 bg-[#c9e5f0] rounded-xl items-center max-[768px]:flex-col'>
                    <div className='flex flex-col gap-x-2 items-center basis-[25%]'>
                        <img src={Profile} alt={Profile} className='w-[100px] h-[120px] rounded-xl'/>
                        <p className='text-base font-semibold'>John Smith</p>
                        <p className='text-sm font-medium text-gray-600'>Designation</p>
                    </div>
                    <div className='basis-[75%] max-[768px]:text-left'>
                        <p>Tincidunt vehicula convallis, egestas conubia sapien tristique vestibulum. Dictumst donec, aliquet est luctus a. Mattis porttitor ultricies aliquam, laoreet purus interdum, aptent bibendum elementum ullamcorper vel iaculis enim. Augue habitasse cras amet, vitae imperdiet viverra, tellus porta pharetra</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
