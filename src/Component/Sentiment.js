import React from 'react'

export default function Sentiment() {
    return (
        <div className='w-full px-7 py-8 flex flex-col gap-y-8 rounded-xl bg-white'>
            <p className='text-3xl font-semibold'>Sentiments</p>
            <div className='flex flex-col gap-y-4 w-full'>
                <p className='text-gray-500 text-xl'>key Events</p>
                <div className='flex w-[700px] h-fit overflow-x-scroll gap-x-3 no-scrollbar'>
                    <div className='p-6 bg-[#c4e7f5] min-w-[600px] h-fit flex gap-x-3 rounded-xl'>
                        <div className='bg-blue-500 px-3 py-2 h-fit rounded-full'>
                            <i className="fa-solid fa-newspaper" style={{ color: '#ffffff' }}></i>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <p className='text-black text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                            <p className='text-gray-500 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                        </div>
                    </div>
                    <div className='p-6 bg-[#c4e7f5] min-w-[610px] h-fit flex gap-x-3 rounded-xl'>
                        <div className='bg-green-500 px-3 py-2 h-fit rounded-full'>
                            <i className="fa-solid fa-arrow-up-right-dots" style={{ color: "#ffffff" }}></i>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <p className='text-black text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                            <p className='text-gray-500 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-12 w-full'>
                <p className='text-gray-500 text-xl'>Analyst Estimates</p>
                <div className='flex gap-x-8'>
                    <div className='p-5 rounded-full bg-[#c4e7f5] flex items-center justify-center'>
                        <p className='text-3xl text-green-600'>76%</p>
                    </div>
                    <div className='flex flex-col gap-y-3 w-full'>
                        <div className='flex items-center gap-x-2'>   
                            <p className='w-[40px]'>Buy</p>
                            <p className='w-[76%] h-[5px] bg-green-600 rounded-full'>
                            </p>
                            <p>76%</p>
                        </div>
                        <div className='flex items-center gap-x-2'>   
                            <p className='w-[40px]'>Hold</p>
                            <p className='w-[8%] h-[5px] bg-gray-600 rounded-full'>
                            </p>
                            <p>8%</p>
                        </div>
                        <div className='flex items-center gap-x-2'>   
                            <p className='w-[40px]'>Sell</p>
                            <p className='w-[16%] h-[5px] bg-red-600 rounded-full'>
                            </p>
                            <p>16%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
