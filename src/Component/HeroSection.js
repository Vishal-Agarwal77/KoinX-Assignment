import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CoinChart from './CoinChart';
import Overview from './Overview';
import Sentiment from './Sentiment';
import About from './About';
import Tokenomics from './Tokenomics';
import Team from './Team';
import GetStarted from './GetStarted';
import Trending from './Trending';
import CoinList from './CoinList';

export default function HeroSection() {
    const [Coin, setCoin] = useState();
    const [CoinInfo, setCoinInfo] = useState([]);
    const [CurrentTab, setCurrentTab] = useState("overview");
    useEffect(() => {
        setCoin("bitcoin");
        (async () => {
            try {
                const response1 = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=2`);
                const response2 = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=true&developer_data=true&sparkline=true`);
                if (response1.status === 200 && response2.status === 200) {
                    setCoinInfo({ ...response1.data, ...response2.data });
                    // console.log({ ...response1.data, ...response2.data });
                }
                else {
                    throw new Error("Some Error Ocuured Try after some time");
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])
    return (CoinInfo &&
        <>
            <div className='px-14 py-2 bg-gray-200 flex flex-col gap-y-3'>
                <div className='flex gap-x-1'>
                    <p className='text-gray-600'>Cryptocurrencies {">>"} </p>
                    <p>{Coin}</p>
                </div>
                <div className='flex justify-between'>
                    <div className='basis-[65%] flex flex-col gap-y-10'>
                        <div className='px-5 py-5  flex flex-col gap-y-8 rounded-xl bg-white'>
                            <div className='w-full flex items-center gap-x-5'>
                                <div className='flex items-center gap-x-3'>
                                    <img src={CoinInfo?.image?.small} alt={CoinInfo?.name} />
                                    <p className='text-2xl font-semibold'>{CoinInfo?.name}</p>
                                    <p className='text-base font-semibold text-gray-600'>{CoinInfo?.symbol?.toUpperCase()}</p>
                                </div>
                                <div>
                                    <p className='text-base font-medium text-gray-600 px-2 py-2 rounded-xl text-white bg-gray-500'>Rank #{CoinInfo?.market_cap_rank}</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col gap-y-2'>
                                    <div className='flex gap-x-5 items-center'>
                                        <p className='text-3xl font-semibold'>${CoinInfo?.market_data?.current_price?.usd}</p>
                                        <p className={`flex px-2 py-1 rounded-lg ${CoinInfo[Coin]?.usd_24h_change > 0 ? 'bg-[#d9ffdb] text-[#29e637]' : 'bg-red-200 text-red-600'}`}>{CoinInfo[Coin]?.usd_24h_change > 0 ? <i className="fa-solid fa-sort-up" style={{ color: '#29e637' }}></i> : <i className="fa-solid fa-sort-down" style={{ color: '#e22c2c' }}></i>}   {CoinInfo[Coin]?.usd_24h_change.toFixed(2)}%</p>
                                        <p className='text-gray-500'>24(H)</p>
                                    </div>
                                    <p>₹ {CoinInfo?.market_data?.current_price?.inr}</p>
                                </div>
                            </div>
                            <div className='w-full h-[3px] bg-gray-200 rounded-lg'>
                            </div>
                            <div className='h-[400px] w-full'>
                                <CoinChart />
                            </div>
                        </div>
                        <div className='flex gap-x-6 border-b-2 border-gray-400 px-2'>
                            <p className={`py-2 cursor-pointer ${CurrentTab === "overview" ? "border-b-4 border-blue-600 text-blue-600" : ""}`} onClick={() => setCurrentTab("overview")}>Overview</p>
                            <p className={`py-2 cursor-pointer ${CurrentTab === "fundamentals" ? "border-b-4 border-blue-600 text-blue-600" : ""} `} onClick={() => setCurrentTab("fundamentals")}>Fundamentals</p>
                            <p className={`py-2 cursor-pointer ${CurrentTab === "newsInsights" ? "border-b-4 border-blue-600 text-blue-600" : ""} `} onClick={() => setCurrentTab("newsInsights")}>News Insights</p>
                            <p className={`py-2 cursor-pointer ${CurrentTab === "sentiments" ? "border-b-4 border-blue-600 text-blue-600" : ""} `} onClick={() => setCurrentTab("sentiments")}>Sentiments</p>
                            <p className={`py-2 cursor-pointer ${CurrentTab === "team" ? "border-b-4 border-blue-600 text-blue-600" : ""} `} onClick={() => setCurrentTab("team")}>Team</p>
                            <p className={`py-2 cursor-pointer ${CurrentTab === "technicals" ? "border-b-4 border-blue-600 text-blue-600" : ""} `} onClick={() => setCurrentTab("technicals")}>Techicals</p>
                            <p className={`py-2 cursor-pointer ${CurrentTab === "tokenomics" ? "border-b-4 border-blue-600 text-blue-600" : ""} `} onClick={() => setCurrentTab("tokenomics")}>Tokenomics</p>
                        </div>
                        {CoinInfo &&
                            <>
                                <Overview CoinInfo={CoinInfo} />
                                <Sentiment />
                                <About CoinInfo={CoinInfo} />
                                <Tokenomics />
                                <Team />
                            </>
                        }
                    </div>
                    <div className='basis-[32%] flex flex-col gap-y-4'>
                        <GetStarted />
                        <Trending />
                    </div>
                </div>
            </div>
            <CoinList RowNo={1}/>
            <CoinList RowNo={2}/>
        </>
    )
}
