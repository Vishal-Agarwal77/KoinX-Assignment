import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

const data = {
    labels: ['Crowdsale investors', 'Foundation'],
    datasets: [
        {
            labels: ['Crowdsale investors', 'Foundation'],
            data: [80, 20],
            backgroundColor: ['#5c9dff', '#f5ef4e'],
        },
    ],
};

const options = {
    responsive: true,
    title: {
        display: true,
        text: "Doughnut Chart",
    },
};

export default function Tokenomics() {

    return (
        <div className='w-full px-7 py-8 flex flex-col gap-y-8 rounded-xl bg-white'>
            <p className='text-3xl font-semibold'>Tokenomics</p>
            <div className='flex flex-col gap-y-4 w-full'>
                <p className='text-black text-xl'>Initial Distribution</p>
                <div className='flex gap-x-10 items-center'>
                    <div className='w-[200px]'>
                        <Doughnut
                            data={data}
                            options={options}
                        />
                    </div>
                    <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-2'>
                            <p className='px-3 py-1 rounded-full bg-[#f5ef4e]'></p>
                            <p>Foundation</p>
                        </div>
                        <div className='flex gap-x-2'>
                            <p className='px-3 py-1 rounded-full bg-[#5c9dff]'></p>
                            <p>Crowdsale Investor</p>
                        </div>
                    </div>
                </div>
                <p>Tincidunt vehicula convallis, egestas conubia sapien tristique vestibulum. Dictumst donec, aliquet est luctus a. Mattis porttitor ultricies aliquam, laoreet purus interdum, aptent bibendum elementum ullamcorper vel iaculis enim. Augue habitasse cras amet, vitae imperdiet viverra, tellus porta pharetra tortor aptent diam commodo justo. Eros nec, ipsum ultricies nulla. Orci aliquam, est curae conubia. Euismod interdum aenean hendrerit, risus convallis morbi, placerat diam faucibus nulla sociosqu at habitasse curae. Fringilla metus etiam, platea luctus quam ultrices. Ac eu, orci consequat etiam.
                    Tellus etiam nostra sodales
                </p>
            </div>
        </div>
    )
}
