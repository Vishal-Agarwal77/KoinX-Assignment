import React from 'react'
import brand_logo from '../Assests/brand_logo.svg';

export default function Navbar() {
    return (
        <div className='w-full flex justify-between items-center px-14 py-4'>
            <div>
                <img src={brand_logo} className='w-[100px] cursor-pointer' alt="KoinX"/>
            </div>
            <div className='flex items-center gap-x-5 font-semibold text-xl'>
                <p className='cursor-pointer '>Crypto Taxes</p>
                <p className='cursor-pointer '>Free Tools</p>
                <p className='cursor-pointer '>Resource Center</p>
                <div className='cursor-pointer px-4 py-2 rounded-xl bg-[#0052FE] text-white'>
                    <p>Get Started</p>
                </div>
            </div>
        </div>
    )
}
