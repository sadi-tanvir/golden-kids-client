/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar, EffectFade } from 'swiper/modules';

const Banner = () => {
    const photos = [
        {
            id: 1,
            link: 'https://th.bing.com/th/id/R.7af50c605c253277149e5cfeb2a04fe7?rik=xV3L4%2bb%2b9Mk78Q&pid=ImgRaw&r=0',
            title: 'About This Organization',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad debitis enim odio beatae! Expedita aliquid repudiandae ullam optio unde accusamus saepe eligendi, hic vitae qui facilis tempora explicabo est illum.',
            externalLink: '#'
        },
        {
            id: 2,
            link: 'https://i2.wp.com/techbeasts.com/wp-content/uploads/2016/01/green_mountain_nature_wallpaper_hd.jpg',
            title: 'About This Organization',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad debitis enim odio beatae! Expedita aliquid repudiandae ullam optio unde accusamus saepe eligendi, hic vitae qui facilis tempora explicabo est illum.',
            externalLink: '#'
        },
        {
            id: 3,
            link: 'https://th.bing.com/th/id/OIP.Z3iF66QpQVHe8HkLPj-RggHaEo?rs=1&pid=ImgDetMain',
            title: 'About This Organization',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad debitis enim odio beatae! Expedita aliquid repudiandae ullam optio unde accusamus saepe eligendi, hic vitae qui facilis tempora explicabo est illum.',
            externalLink: '#'
        },
        {
            id: 4,
            link: 'https://th.bing.com/th/id/OIP.E4IJcali_762Oo_vNhhbFgHaEK?rs=1&pid=ImgDetMain',
            title: 'About This Organization',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad debitis enim odio beatae! Expedita aliquid repudiandae ullam optio unde accusamus saepe eligendi, hic vitae qui facilis tempora explicabo est illum.',
            externalLink: '#'
        },
    ]


    return (
        <div className='container mx-auto -500 h-[600px] my-10 px-3 sm:px-0'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, EffectFade, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                // effect='fade'
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className='h-full'
            >
                {
                    photos.map((photo) => (
                        <SwiperSlide key={photo?.id}>
                            <div className='h-full grid grid-cols-1 sm:grid-cols-3'>
                                <img
                                    key={photo.id}
                                    className='w-full h-full rounded-xl opacity-85 sm:col-span-2'
                                    src={photo.link}
                                    alt="image"
                                />
                                <div className='flex flex-col pt-5 sm:pt-36 px-3'>
                                    <h1 className='text-2xl font-bold text-slate-600 mb-2'>{photo.title}</h1>
                                    <p className='text-slate-600'>{photo.description}</p>

                                    <a href={photo.externalLink} className='text-start mt-3 text-blue-600'>read more</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Banner