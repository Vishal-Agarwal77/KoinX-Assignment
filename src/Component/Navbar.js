import React, { useState } from 'react'
import brand_logo from '../Assests/brand_logo.svg';
import Drawer from '@mui/material/Drawer';

export default function Navbar() {
    const [DrawerStatus, setDrawerStatus] = useState(false);
    const toggleDrawer=()=>{
        setDrawerStatus(!DrawerStatus);
    }
    return (
        <>
            <div className='w-full flex justify-between items-center px-14 py-4 max-[768px]:px-4'>
                <div>
                    <img src={brand_logo} className='w-[100px] cursor-pointer' alt="KoinX" />
                </div>
                <div className='flex items-center gap-x-5 font-semibold text-xl max-lg:hidden'>
                    <p className='cursor-pointer '>Crypto Taxes</p>
                    <p className='cursor-pointer '>Free Tools</p>
                    <p className='cursor-pointer '>Resource Center</p>
                    <div className='cursor-pointer px-4 py-2 rounded-xl bg-[#0052FE] text-white'>
                        <p>Get Started</p>
                    </div>
                </div>
                <div className='hidden px-2 py-1 rounded-md max-lg:flex' onClick={() => setDrawerStatus(true)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
            {DrawerStatus &&
                <Drawer
                    anchor={'right'}
                    open={DrawerStatus}
                    onClose={toggleDrawer}
                >
                    <div className='w-[230px] max-[425px]:w-[180px] h-full'>
                        <div className='py-4 px-4 flex flex-col items-end gap-y-4'>
                            <p className='cursor-pointer '>Crypto Taxes</p>
                            <p className='cursor-pointer '>Free Tools</p>
                            <p className='cursor-pointer '>Resource Center</p>
                            <div className='cursor-pointer px-4 py-2 rounded-xl bg-[#0052FE] text-white'>
                                <p>Get Started</p>
                            </div>
                        </div>
                    </div>
                </Drawer>
            }
        </>
    )
}
