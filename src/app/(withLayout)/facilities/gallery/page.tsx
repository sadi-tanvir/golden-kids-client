import React from 'react';
import Image from 'next/image';
import p1 from "@/../public/images/Gallery-Images/c1.jpg";
import p2 from "@/../public/images/Gallery-Images/c2.jpg";
import p3 from "@/../public/images/Gallery-Images/c3.jpg";
import p4 from "@/../public/images/Gallery-Images/c4.jpg";
import p5 from "@/../public/images/Gallery-Images/g4.jpg";
import p6 from "@/../public/images/Gallery-Images/t6.jpeg";
import p7 from "@/../public/images/Gallery-Images/cl2.jpg";
import p8 from "@/../public/images/Gallery-Images/cl3.jpg";
import p9 from "@/../public/images/Gallery-Images/cl4.jpg";

const page = () => {
    const photos = [p1, p2, p3, p4, p5, p6, p7, p8, p9]

    return (
        <div className='container mx-auto mt-5'>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    photos.map((photo, index) => (
                        <div key={index} className='h-52 w-full'>
                            <Image
                                src={photo}
                                className='h-full w-full rounded-xl'
                                alt='image'
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default page;