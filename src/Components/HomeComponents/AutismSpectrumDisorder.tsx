'use client'
import { useState } from "react";
const AutismSpectrumDisorder = () => {
    const [isOpen, setIsOpen] = useState(null);
    const accordions = [
        {
            title: "How do you know whether your child have Autism Spectrum Disorder (ASD)?",
            description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
        },
        {
            title: "Where to go to improve the standard and quality of Autism?",
            description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
        },
        {
            title: "What Golden Kids can do?",
            description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
        },
    ];
    const toggle = (idx: any) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div className="container mx-auto my-14">
            <h1 className='text-4xl font-bold text-center mb-7'>Autism Spectrum Disorder</h1>
            <div className="border rounded-lg font-sans mx-4">
                {accordions.map((PerAccordion, idx) => (
                    <div key={idx} className="p-4 border-b">
                        <button onClick={() => toggle(idx)} className="flex justify-between items-center py-4 w-full h-full">
                            <span className="text-xl font-semibold">{PerAccordion.title}</span>
                            <svg className="fill-[#00A2FF] shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${isOpen === idx && "!rotate-180"}`} /><rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen === idx && "!rotate-180"}`} /></svg>
                        </button>
                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${isOpen === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden">{PerAccordion.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AutismSpectrumDisorder;