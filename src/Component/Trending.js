import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Trending() {
    const [Data, setData] = useState();
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/search/trending`);
                if (response.status === 200) {
                    setData(response?.data?.coins.slice(0, 3));
                    // console.log(response.data);
                }
                else {
                    throw new Error("Some error ocuured");
                }
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);
    return (Data &&
        <div className='w-full px-7 py-8 flex flex-col gap-y-8 rounded-xl bg-white'>
            <p className='text-3xl font-semibold'>Trending Coins (24H)</p>
            <div className='flex flex-col gap-y-4 w-full'>
                {Data.map((item) => {
                    return (
                        <div className='flex justify-between items-center' key={item?.item?.name}>
                            <div className='flex gap-x-2 items-center w-[60%]'>
                                <img src={item?.item?.small} className='w-[30px]' alt={item?.item?.name}/>
                                <p className='font-semibold text-base overflow-hidden'>{item?.item?.name}</p>
                            </div>
                            <div className={`px-4 py-1 w-[27%] text-center rounded-md ${item?.item?.data?.price_change_percentage_24h?.usd?.toFixed(2) > 0 ? "bg-green-200" : "bg-red-200"}`}>
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
