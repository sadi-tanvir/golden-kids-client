import React from "react";
import {
  FaAngleRight,
  FaBug,
  FaChevronRight,
  FaGreaterThan,
  FaHome,
} from "react-icons/fa";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { TbCameraHeart } from "react-icons/tb";
import { LuFileJson } from "react-icons/lu";
const ContactPage = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 ps-3 md:ps-20 md:pt-20 md:pb-12 py-3">
        <h1 className="text-2xl md:text-5xl font-sans font-semibold  text-white">
          Contact
        </h1>
        <div className="flex gap-2 md:gap-4 pt-4">
          <div>
            <FaHome
              className="w-5 h-5 md:w-8 md:h-8"
              style={{ color: "white" }}
            ></FaHome>
          </div>
          <h4 className="text-white  md:text-2xl font-bold">Home</h4>
          <div>
            <FaChevronRight
              className="w-4 h-4 md:w-6 md:h-6"
              style={{ color: "white" }}
            ></FaChevronRight>
          </div>
          <h5 className="text-primary underline font-bold md:text-2xl">
            Contact
          </h5>
        </div>
      </div>
      {/* 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4 md:gap-20 mt-12 mx-12 ">
        <div className="text-center py-8 px-5 border-2 rounded-3xl  hover:bg-gray-100">
          <h3 className="text-2xl font-bold">Address</h3>
          <p>Alba Tower, 6th Floor, </p>
          <p>2/6 Pallabi, Dhaka</p>
        </div>
        <div className="text-center py-8 px-5 border-2 rounded-3xl  hover:bg-gray-100">
          <h3 className="text-2xl font-bold">Email</h3>
          <p>info.bprofile@gmail.com</p>
          <p>info.iitab@gmail.com</p>
        </div>
        <div className="text-center py-8 px-5 border-2 rounded-3xl  hover:bg-gray-100">
          <h3 className="text-2xl font-bold">Web</h3>
          <p>businesseprofile.com</p>
          <p>iitab.com</p>
        </div>
      </div>
      {/* contact us */}
      <div className="mt-20">
        <h1 className="text-2xl font-bold text-center mb-5">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <form className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered bg-blue-100"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered bg-blue-100"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Message"
                  className="input input-bordered bg-blue-100 md:h-36"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-400 text-white hover:bg-blue-600 hover:rounded-xl shadow-xl">
                  Send
                </button>
              </div>
            </form>
          </div>
          {/* 4 logo+ address */}
          <div className="ms-20 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Technical support */}
              <div className="flex gap-5">
                <div className="my-7">
                <MdOutlinePhoneCallback className="w-8 h-8" style={{color:"blue"}} />
                </div>
                <div>
                    <h1 className="font-bold py-2">Technical Support</h1>
                    <p className="text-gray-400">support@example.com</p>
                    <p  className="text-gray-400">+1 234-567-89</p>
                </div>
              </div>
              {/*Sales questions  */}
              <div className="flex gap-5">
                <div className="my-7">
                <TbCameraHeart className="w-8 h-8" style={{color:"blue"}} />
                </div>
                <div>
                    <h1 className="font-bold py-2">Sales questions</h1>
                    <p className="text-gray-400">sales@example.com</p>
                    <p  className="text-gray-400">+1 234-567-89</p>
                </div>
              </div>
              {/* Press */}
              <div className="flex gap-5">
                <div className="my-7">
                <LuFileJson  className="w-8 h-8" style={{color:"blue"}} />
                </div>
                <div>
                    <h1 className="font-bold py-2">Press</h1>
                    <p className="text-gray-400">press@example.com</p>
                    <p  className="text-gray-400">+1 234-567-89</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="my-7">
                <FaBug className="w-8 h-8" style={{color:"blue"}} />
                </div>
                {/* Bug report */}
                <div>
                    <h1 className="font-bold py-2">Bug report</h1>
                    <p className="text-gray-400">bugs@example.com</p>
                    <p  className="text-gray-400">+1 234-567-89</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* map  */}
      <div>
        <div className="mt-10 mb-10">
            <h1 className="font-bold text-3xl text-center font-serif pb-5">Find Our <span className="text-secondary ">Location</span></h1>
            <p className="text-center text-gray-400 pb-5">Discover us at our prime location to explore the perfect solution for your business.</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.736114493185!2d90.36484007028851!3d23.756787841405366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf514d1469cf%3A0xdd853a290eab7237!2s4%2C%201%20Block%23B%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1704877240959!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
