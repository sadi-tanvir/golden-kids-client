'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from "next/link";

const TabMenu = () => {
    const pathname = usePathname();

    return (
        <>
            <div className={`border ${pathname == '/facilities' ? 'rounded-l-xl' : 'rounded-r-xl'} border-[#08539a] inline-flex mt-14 font-bold text-gray-700`}>
                <Link href="/facilities" className={`flex items-center px-7 py-3  ${pathname == '/facilities' ? 'bg-[#08539a] rounded-l-lg text-white' : ''}  active`} aria-current="page">
                    Facilities
                </Link>
                <Link href="/facilities/gallery" className={`flex items-center px-4 py-3  ${pathname == '/facilities/gallery' ? 'bg-[#08539a] rounded-r-lg text-white' : ''}  active`} aria-current="page">
                    Captured Moments
                </Link>
            </div>
        </>
    );
};

export default TabMenu;