import React from 'react'
import { BiBookReader } from "react-icons/bi";
import { FaStethoscope } from "react-icons/fa6";
import { BsHeartFill } from "react-icons/bs";
import { MdOutlineSecurity, MdOutlineSportsSoccer } from "react-icons/md";
import { FaSmile } from "react-icons/fa";


interface ListOfFacilitiesType {
    id: number;
    name: string;
    description: string;
    icon: React.ReactNode;
};

const Facilities = () => {
    const listOfFacilities: ListOfFacilitiesType[] = [
        {
            id: 1,
            name: 'Education',
            description: 'Provide mainstream education to orphan children in Afghanistan so they can sustain themselves and their families in the long term.',
            icon: <BiBookReader className="h-8 w-8 text-white" />
        },
        {
            id: 2,
            name: 'Health',
            description: 'Provide medical care, food and clothing to orphans.',
            icon: <FaStethoscope className="h-8 w-8 text-white" />
        },
        {
            id: 3,
            name: 'Ethics',
            description: 'Promote good ethics that supports tolerance, justice, fairness, and humanity.',
            icon: <BsHeartFill className="h-8 w-8 text-white" />
        },
        {
            id: 4,
            name: 'Protection',
            description: 'Protect the vulnerable orphan children from extremism and exploitation.',
            icon: <MdOutlineSecurity className="h-8 w-8 text-white" />
        },
        {
            id: 4,
            name: 'Safe Environment',
            description: 'Where they can learn and grow, have security of food, healthcare, and where they are respected, listened to, and their needs are met.',
            icon: <FaSmile className="h-8 w-8 text-white" />
        },
        {
            id: 5,
            name: 'Sports',
            description: 'Facilitate sport activities such as football, cricket, cycling and much more.',
            icon: <MdOutlineSportsSoccer className="h-8 w-8 text-white" />
        },
    ];


    return (
        <section className="w-full  flex justify-center flex-col  bg-gradient-to-b from-#52C2FF to-white">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 my-10'>
                {
                    listOfFacilities.map((elem) => (
                        <div key={elem.id} className='flex justify-start items-start flex-row'>
                            <div className='bg-[#08539a] rounded-full p-5'>
                                {elem.icon}
                            </div>
                            <div className='flex flex-col ml-4 text-gray-700'>
                                <h3 className='text-3xl font-bold'>
                                    {elem.name}
                                </h3>
                                <p className='text-md'>
                                    {elem.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Facilities;