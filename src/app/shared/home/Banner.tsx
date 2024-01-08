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
            link: 'https://th.bing.com/th/id/R.7af50c605c253277149e5cfeb2a04fe7?rik=xV3L4%2bb%2b9Mk78Q&pid=ImgRaw&r=0'
        },
        {
            id: 2,
            link: 'https://i2.wp.com/techbeasts.com/wp-content/uploads/2016/01/green_mountain_nature_wallpaper_hd.jpg'
        },
        {
            id: 3,
            link: 'https://th.bing.com/th/id/OIP.Z3iF66QpQVHe8HkLPj-RggHaEo?rs=1&pid=ImgDetMain'
        },
        {
            id: 4,
            link: 'https://th.bing.com/th/id/OIP.E4IJcali_762Oo_vNhhbFgHaEK?rs=1&pid=ImgDetMain'
        },
    ]


    return (
        <div className='container mx-auto -500 h-[500px] my-10 px-3 sm:px-0'>
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
                        <SwiperSlide>
                            <img
                                key={photo.id}
                                className='h-full w-full'
                                src={photo.link}
                                alt="image"
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Banner