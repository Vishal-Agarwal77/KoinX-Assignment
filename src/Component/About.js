import React from 'react'
import img from '../Assests/sample.jpg'

export default function About({ CoinInfo }) {
    return (
        <div className='w-full px-7 py-8 flex flex-col gap-y-8 rounded-xl bg-white h-fit'>
            <p className='text-3xl font-semibold'>About {CoinInfo?.name}</p>
            <div className='flex flex-col gap-y-4'>
                <p className='text-lg font-semibold'>What is {CoinInfo?.name}</p>
                <div className='flex'>
                    <p>{CoinInfo?.name}'s price today is US${CoinInfo?.market_data?.current_price?.usd} with a 24-hour trading volume of ${CoinInfo?.market_data?.total_volume?.usd} .
                        {CoinInfo?.symbol?.toUpperCase()} is {CoinInfo?.market_data?.price_change_percentage_24h}% in the last 24 hours.It is currently {CoinInfo?.market_data?.price_change_percentage_7d}
                        from its 7-day all-time high and 0% from its 7-day all-time low.{CoinInfo?.symbol?.toUpperCase()} has a circulating supply of {CoinInfo?.market_data?.circulating_supply} {CoinInfo?.symbol?.toUpperCase()}
                        and a max supply of {CoinInfo?.market_data?.max_supply} {CoinInfo?.symbol?.toUpperCase()}.
                    </p>
                </div>
            </div>
            <div className='w-full h-[4px] bg-gray-200 rounded-full'>
            </div>
            <div className='flex flex-col gap-y-4'>
                <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet</p>
                <div className='flex'>
                    <p>Tincidunt vehicula convallis, egestas conubia sapien tristique vestibulum. Dictumst donec, aliquet est luctus a. Mattis porttitor ultricies aliquam, laoreet purus interdum, aptent bibendum elementum ullamcorper vel iaculis enim. Augue habitasse cras amet, vitae imperdiet viverra, tellus porta pharetra tortor aptent diam commodo justo. Eros nec, ipsum ultricies nulla. Orci aliquam, est curae conubia. Euismod interdum aenean hendrerit, risus convallis morbi, placerat diam faucibus nulla sociosqu at habitasse curae. Fringilla metus etiam, platea luctus quam ultrices. Ac eu, orci consequat etiam.
                        Tellus etiam nostra sodales,fames <br />gravida luctus, urna neque lacinia habitasse placerat purus metus pretium. In ipsum eleifend fermentum, aenean habitant venenatis, iaculis tempus auctor varius magna risus. Diam pulvinar dictum sem, bibendum nostra ut, elementum himenaeos turpis suspendisse blandit pellentesque massa. At condimentum, habitasse est tortor. Vivamus consectetur egestas sociosqu, convallis dui pulvinar, fringilla nisl nibh etiam lorem ut nostra. Inceptos ultricies sodales, felis enim, luctus class iaculis imperdiet curae. Curae mollis tincidunt, habitasse ut, curabitur ac turpis leo taciti. Justo arcu, luctus enim erat. Fermentum libero, vestibulum laoreet lectus.
                        Habitasse elit quam primis, <br />morbi imperdiet eget, augue et sem ullamcorper magna turpis. Quisque vitae, etiam sagittis nibh mattis. Per integer placerat, justo bibendum, leo pharetra ullamcorper interdum vehicula. Felis leo urna, id nisi nulla ut eleifend. Varius suspendisse elit, augue non taciti in faucibus.
                    </p>
                </div>
            </div>
            <div className='w-full h-[4px] bg-gray-200 rounded-full'>
            </div>
            <div className='flex flex-col gap-y-4'>
                <p className='text-3xl font-semibold'>Already Holding {CoinInfo?.name}?</p>
                <div className='flex gap-x-4'>
                    <div className='p-2 flex gap-x-4 rounded-xl bg-gradient-to-br from-green-400 to-blue-400'>
                        <img src={img} className='w-[100px] h-[100px] rounded-xl' alt="Calculate your Profits"/>
                        <div className='flex flex-col justify-between py-2'>
                            <p className='font-semibold text-xl text-white'>Calculate your Profits</p>
                            <p className='cursor-pointer text-sm flex items-center w-fit gap-x-2 px-3 py-px rounded-md bg-white'>Check Now  <i className="fa-solid fa-arrow-right"></i></p>
                        </div>
                    </div>
                    <div className='p-2 flex gap-x-4 rounded-xl bg-gradient-to-br from-orange-400 to-red-400'>
                        <img src={img} className='w-[100px] h-[100px] rounded-xl' alt="Calculate your tax liability"/>
                        <div className='flex flex-col justify-between py-2'>
                            <p className='font-semibold text-xl text-white'>Calculate your tax liability</p>
                            <p className='cursor-pointer text-sm flex items-center w-fit gap-x-2 px-3 py-px rounded-md bg-white'>Check Now  <i className="fa-solid fa-arrow-right"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[4px] bg-gray-200 rounded-full'>
            </div>
            <div>
                <p>morbi imperdiet eget, augue et sem ullamcorper magna turpis. Quisque vitae, etiam sagittis nibh mattis. Per integer placerat, justo bibendum, leo pharetra ullamcorper interdum vehicula. Felis leo urna, id nisi nulla ut eleifend. Varius suspendisse elit, augue non taciti in faucibus.</p>
            </div>
        </div>
    )
}
