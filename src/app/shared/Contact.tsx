import Link from "next/link";
import { FaPhoneAlt,FaFacebookF, FaTwitter,FaGooglePlusG,FaUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const Contact = () => {
    const user = null;
    return (
        <div className="px-3 md:px-6 lg:px-12 py-2 lg:mx-auto flex justify-between bg-secondary text-white">
            {/* phone number and email part */}
           <div className="md:flex gap-5">
            <div className="flex gap-2">
                <div className="w-8 h-8 p-2  bg-white rounded-full">
                <FaPhoneAlt style={{color: "blue"}}/>
                </div>
                <h4>Phone: +880 1234567890 </h4>
            </div>
            <div className="flex gap-2">
                <div className="w-8 h-8 p-2  bg-white rounded-full">
                <MdOutlineMail style={{color: "blue"}}/>
                </div>
                <h4>Email: information@domai.com </h4>
            </div>
            
           </div>
            
            {/* facebook, Twitter and Google logo part */}
            <div className="md:flex gap-2">
            <div className="flex gap-1">
            <div className="w-8 h-8 p-2  bg-black rounded-full">
               <Link href={""}><FaFacebookF  style={{color: "white"}}/></Link> 
                </div>
                <div className="w-8 h-8 p-2  bg-black rounded-full">
                <FaTwitter  style={{color: "white"}}/>
                </div>
                <div className="w-8 h-8 p-2  bg-black rounded-full">
                <FaGooglePlusG style={{color: "white"}}/>
                </div> 
            </div>
            {/* login ,registration button part */}
            <div className="flex">
            <div className="divider lg:divider-horizontal"></div>
                {
                    user? <> <div className="avatar">
                    <div className="w-12">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div></>:  <div className="px-2 py-1">
                    <FaUser style={{}} />
                    </div>
                }
               
           <div>
            <Link className="font-sans font-semibold" href={"/login"}>Login or Registration</Link>
           </div>
            </div>
            </div>
            
        </div>
    );
};

export default Contact;