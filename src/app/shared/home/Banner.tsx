'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Banner1 from "../../../../public/images/banner/banner1.jpeg";
import Banner2 from "../../../../public/images/banner/banner2.jpeg";
import Banner3 from "../../../../public/images/banner/banner3.jpeg";
import Banner4 from "../../../../public/images/banner/banner4.jpeg";

const Banner = () => {
    const photos = [
        {
            id: 1,
            link: Banner1,
            title: 'About This Organization',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad debitis enim odio beatae! Expedita aliquid repudiandae ullam optio unde accusamus saepe eligendi, hic vitae qui facilis tempora explicabo est illum.',
            externalLink: '#'
        },
        {
            id: 2,
            link: Banner2,
            title: 'About This Organization',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad debitis enim odio beatae! Expedita aliquid repudiandae ullam optio unde accusamus saepe eligendi, hic vitae qui facilis tempora explicabo est illum.',
            externalLink: '#'
        },
        {
            id: 3,
            link: Banner3,
            title: 'About This Organization',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad debitis enim odio beatae! Expedita aliquid repudiandae ullam optio unde accusamus saepe eligendi, hic vitae qui facilis tempora explicabo est illum.',
            externalLink: '#'
        },
        {
            id: 4,
            link: Banner4,
            title: 'About This Organization',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad debitis enim odio beatae! Expedita aliquid repudiandae ullam optio unde accusamus saepe eligendi, hic vitae qui facilis tempora explicabo est illum.',
            externalLink: '#'
        }
    ];


    return (
        <div className='container mx-auto h-auto my-10 px-3 sm:px-0'>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className='rounded-xl'
                grabCursor={true}
            >
                {
                    photos.map((photo) => (
                        <SwiperSlide key={photo?.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-3 rounded-lg'>
                                <Image
                                    src={photo.link}
                                    className='h-full w-full rounded-xl opacity-85 sm:col-span-2'
                                    layout='responsive'
                                    placeholder='blur'
                                    alt='image'
                                />
                                <div className='flex flex-col pt-3 lg:pt-16 px-3'>
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