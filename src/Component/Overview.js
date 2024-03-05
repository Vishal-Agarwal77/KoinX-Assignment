import React, { useEffect, useState } from 'react'
import { GetPosition } from '../CommonFn/Commonfn'

export default function Overview({ CoinInfo }) {
    const [Pos, setPos] = useState({});
    useEffect(() => {
        let pos1;
        pos1 = GetPosition(CoinInfo?.market_data?.low_24h?.usd, CoinInfo?.market_data?.high_24h?.usd, CoinInfo?.market_data?.current_price?.usd);
        setPos({
            pos1
        });
    }, [CoinInfo]);
    return (CoinInfo && Pos &&
        <div className='w-full px-7 py-8 flex flex-col gap-y-8 rounded-xl bg-white'>
            <div className='flex flex-col gap-y-8'>
                <p className='text-3xl font-semibold'>Performance</p>
                <div className='flex flex-col gap-y-4 justify-center'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col items-start'>
                            <p className='text-sm'>Today's Low</p>
                            <p className='text-lg font-semibold'>{CoinInfo?.market_data?.low_24h?.usd}</p>
                        </div>
                        <div>
                            <div className='bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 w-[500px] h-[5px] flex flex-col gap-y-2'>
                                <div className={`relative mt-1 flex flex-col items-center w-fit top-[5px] left-[${Pos?.pos1-6}%]`}>
                                    <i className="fa-solid fa-sort-up" style={{ color: 'black' }}></i>
                                    <p className='text-lg font-semibold'>${CoinInfo?.market_data?.current_price?.usd}</p>
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <p className='text-sm'>Today's High</p>
                            <p className='text-lg font-semibold'>{CoinInfo?.market_data?.high_24h?.usd}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col items-start'>
                            <p className='text-sm'>52W's Low</p>
                            <p className='text-lg font-semibold'>{CoinInfo?.market_data?.low_24h?.usd}</p>
                        </div>
                        <div>
                            <div className='bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 w-[500px] h-[5px] flex flex-col gap-y-2'>
                                {Pos.pos1 &&
                                    <div className={`relative mt-1 flex flex-col items-center w-fit top-[5px] left-[${Pos.pos1}]`}>
                                        <i className="fa-solid fa-sort-up" style={{ color: 'black' }}></i>
                                        <p className='text-lg font-semibold'>${CoinInfo?.market_data?.current_price?.usd}</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <p className='text-sm'>52W's High</p>
                            <p className='text-lg font-semibold'>{CoinInfo?.market_data?.high_24h?.usd}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-8'>
                <p className='text-3xl font-semibold'>Fundamentals</p>
                <div className='flex justify-between font-medium'>
                    <div className='basis-[45%]'>
                        <div className='flex justify-between py-3 border-b-2 border-gray-300'>
                            <p className='text-gray-500 text-base'>{CoinInfo?.name} Price</p>
                            <p className='text-base text-black'>${CoinInfo?.market_data?.current_price?.usd}</p>
                        </div>
                        <div className='flex justify-between py-3 border-b-2 border-gray-300'>
                            <p className='text-gray-500 text-base'>24h Low / 24h High</p>
                            <p className='text-base text-black'>${CoinInfo?.market_data?.low_24h?.usd} / ${CoinInfo?.market_data?.high_24h?.usd}</p>
                        </div>
                        <div className='flex justify-between py-3 border-b-2 border-gray-300'>
                            <p className='text-gray-500 text-base'>7D Low / 7D High</p>
                            <p className='text-base text-black'>Not Available</p>
                        </div>
                        <div className='flex justify-between py-3 border-b-2 border-gray-300'>
                            <p className='text-gray-500 text-base'>Trading Volume</p>
                            <p className='text-base text-black'>${CoinInfo?.market_data?.total_volume?.usd}</p>
                        </div>
                        <div className='flex justify-between py-3 border-b-2 border-gray-300'>
                            <p className='text-gray-500 text-base'>Market Cap Rank</p>
                            <p className='text-base text-black'>{CoinInfo?.market_cap_rank}</p>
                        </div>
                    </div>
                    <div className='basis-[45%]'>
                        <div className='flex justify-between py-3 border-b-2 border-gray-300'>
                            <p className='text-gray-500 text-base'>Market Cap</p>
                            <p className='text-base text-black'>${CoinInfo?.market_data?.market_cap?.usd}</p>
                        </div>
                        <div className='flex justify-between py-3 border-b-2 border-gray-300'>
                            <p className='text-gray-500 text-base'>Market Cap Dominance</p>
                            <p className='text-base text-black'>{CoinInfo?.market_data?.market_cap_change_percentage_24h.toFixed(3)}%</p>
                        </div>
                        <div className='flex justify-between py-3 border-b-2 border-gray-300'>
                            <p className='text-gray-500 text-base'>Volume / Market Cap</p>
                            <p className='text-base text-black'>{(CoinInfo?.market_data?.total_volume?.usd / CoinInfo?.market_data?.market_cap?.usd).toFixed(4)}</p>
                        </div>
                        <div className='flex justify-between py-3 border-b-2 border-gray-300'>
                            <p className='text-gray-500 text-base'>All-Time High</p>
                            <p className='text-base text-black'>Not Available</p>
                        </div>
                        <div className='flex justify-between py-3 border-b-2 border-gray-300'>
                            <p className='text-gray-500 text-base'>All-Time Low</p>
                            <p className='text-base text-black'>Not Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
