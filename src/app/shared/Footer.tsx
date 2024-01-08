import { FaAdjust, FaAlgolia,FaFacebookF  ,FaInstagram  } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { IoLogoYoutube } from "react-icons/io";

import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="bg-[#4512b6] ">
            <div className="pt-2 md:flex justify-center mx-10  text-white">
                <div className="md:mr-20 mb-10 mt-5">
                    <h3 className="mt-32">© All rights reserved Golden Kids 2021 <br />
                        Design & Developed By: Md. Shafiqul Islam</h3>
                </div>
                <div className="mb-10">
                    <h2 className="mt-14 text-xl">CAMPUS ADDRESS</h2>
                    <div className="flex mt-10">
                        <p className="text-2xl"><IoLocation></IoLocation></p>
                        <div >
                            <p className="ml-2"> House 🏘️ 4, Road 🛣️ 01, Block-B, Section-06,</p>
                            <p className="ml-5">(Proshika Mor),Mirpur, Dhaka-1216</p>
                        </div>
                    </div>
                    <div className="flex">
                        <p className="text-2xl "> <IoMdCall></IoMdCall></p>
                        <p className="ml-5">+880 1323578802-3</p>
                    </div>
                    <div className="flex">
                        <p className="text-2xl "> <CgMail></CgMail></p>
                        <p className="ml-5"> goldenkidsbd2016@gmail.com</p>
                    </div>
                    
                    
                </div>
            </div>
            <div className="md:mx-52 text-white">
                <hr />
                <div className="flex justify-center my-5">
                    <p className="mr-5 text-6xl"><FaFacebookF></FaFacebookF></p>
                    <p className="mr-5 text-6xl"><IoLogoYoutube></IoLogoYoutube></p>
                    <p className="mr-5 text-6xl"><AiFillInstagram></AiFillInstagram></p>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Footer;