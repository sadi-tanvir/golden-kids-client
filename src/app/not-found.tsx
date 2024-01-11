/* eslint-disable @next/next/no-img-element */

import Link from "next/link";



const NotfoundPage = () => {
    return (
        <div>
            <div className="flex justify-center mt-32">
            <img src="/image/error.png" alt="error" />
            </div>
            <div className="flex justify-center">
                <h1 className="text-3xl">404- Page Not Found</h1>
            </div>
            <p className="text-center my-5">The page you are looking for might have been removed <br /> had it's name changed or is temporarily unavailable</p>
            <div className="text-center text-white"><Link href="/"><button className="bg-[#4512b6] p-2 rounded">Go To HomePage</button></Link></div>
        </div>
        
    );
};

export default NotfoundPage;