'use client'
import React, { useEffect, useRef } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Curriculum = () => {
    const data = {
        labels: [
            'Functional Communicational Training',
            'Brushing and Feeding Training',
            'Sleep Disturbance Management',
            'Managing Difficult Behavior',
            'Toilet Training',
            'Adiel Activities in General',
            'ADHD management',
            'Speech Therapy',
            'Occupational Therapy',
        ],

        datasets: [
            {
                label: ' Our Curriculum',
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)',
                    'rgba(52, 73, 94,1.0)',
                    'rgba(231, 76, 60,1.0)',
                    'rgba(22, 160, 133,1.0)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(52, 73, 94,1.0)',
                    'rgba(231, 76, 60,1.0)',
                    'rgba(22, 160, 133,1.0)',
                ],
                hoverOffset: 100,
                borderWidth: 5,
            },
        ],
    };

    return (
        <div className='container mx-auto mt-10 mb-14'>
            <h1 className='text-4xl font-bold text-center mb-7'>Our Curriculum</h1>

            <div className='h-[500px] container flex justify-center items-center'>
                <Pie
                    className=''
                    width={"100%"}
                    height={"100%"}
                    data={data}
                />;
            </div>
        </div>
    )
}

export default Curriculum