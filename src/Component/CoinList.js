import React from 'react'
import useTrendingCoinList from '../CustomHooks/TrendingCoinList';


export default function CoinList({ RowNo }) {
    const { Data, error } = useTrendingCoinList(`https://api.coingecko.com/api/v3/search/trending`);
    if (error) {
        console.log(error);
        return;
    }
    return (Data &&
        <div className='flex flex-col gap-y-6 px-14 py-2 my-6 max-[768px]:px-2'>
            {RowNo === 1
                ?
                <p className='text-3xl font-semibold'>You May Also Like</p>
                :
                <p className='text-3xl font-semibold'>Trending Coins</p>
            }
            <div className='flex gap-x-4 overflow-scroll w-full no-scrollbar'>
                {Data.map((item) =>
                    <div className='flex flex-col gap-y-3 min-w-[300px] border-2 p-4 rounded-xl' key={item?.item?.name}>
                        <div className='flex gap-x-2 items-center'>
                            <img src={item?.item?.small} alt={item?.item?.name} />
                            <p className='font-semibold w-[50%] overflow-hidden'>{item?.item?.name}</p>
                            <p className={`px-2 py-1 text-sm ${item?.item?.data?.price_change_percentage_24h?.usd > 0 ? "text-green-800 bg-green-200" : "text-red-800 bg-red-200"}`}>{item?.item?.data?.price_change_percentage_24h?.usd?.toFixed(2)}%</p>
                        </div>
                        <p className='text-xl font-semibold'>{item?.item?.data?.price}</p>
                        <div className='flex justify-center items-center'>
                            <img src={item?.item?.data?.sparkline} alt="Sparkline" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
