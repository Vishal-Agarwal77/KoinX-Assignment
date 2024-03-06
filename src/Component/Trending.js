import React from 'react'
import useTrendingCoinList from '../CustomHooks/TrendingCoinList';

export default function Trending() {
    let { Data, error } = useTrendingCoinList(`https://api.coingecko.com/api/v3/search/trending`);
    if (error) {
        console.log(error);
        return;
    }
    if(Data){
        Data=Data.slice(0,3);
    }
    return (Data &&
        <div className='w-full px-7 py-8 flex flex-col gap-y-8 rounded-xl bg-white max-[768px]:px-2'>
            <p className='text-3xl font-semibold'>Trending Coins (24H)</p>
            <div className='flex flex-col gap-y-4 w-full'>
                {Data.map((item) => {
                    return (
                        <div className='flex justify-between items-center' key={item?.item?.name}>
                            <div className='flex gap-x-2 items-center w-[60%]'>
                                <img src={item?.item?.small} className='w-[30px]' alt={item?.item?.name} />
                                <p className='font-semibold text-base overflow-hidden'>{item?.item?.name}</p>
                            </div>
                            <div className={`px-4 py-1 w-fit text-center rounded-md ${item?.item?.data?.price_change_percentage_24h?.usd?.toFixed(2) > 0 ? "bg-green-200" : "bg-red-200"}`}>
                                <div className={`flex items-center gap-x-2 ${item?.item?.data?.price_change_percentage_24h?.usd?.toFixed(2) > 0 ? "text-green-800" : "text-red-800"}`}>
                                    {item?.item?.data?.price_change_percentage_24h?.usd > 0
                                        ?
                                        <i className="fa-solid fa-sort-up"></i>
                                        :
                                        <i className="fa-solid fa-sort-down"></i>
                                    }
                                    {item?.item?.data?.price_change_percentage_24h?.usd?.toFixed(2)}%
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}
