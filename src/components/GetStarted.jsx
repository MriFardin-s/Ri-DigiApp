import React from 'react';

const steps = [
    {
        id: "01",
        title: "Create Account",
        description: "Sign up for free in seconds. No credit card required to get started.",
        icon: "/user.png",
    },
    {
        id: "02",
        title: "Choose Products",
        description: "Browse our catalog and select the tools that fit your needs.",
        icon: "/package.png",
    },
    {
        id: "03",
        title: "Start Creating",
        description: "Download and start using your premium tools immediately.",
        icon: "/rocket.png",
    }
];

const GetStarted = () => {
    return (
        <section className="py-20 bg-gray-50">

            <div className="container mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-5xl font-extrabold text-[#101727] mb-4">
                    Get Started In 3 Steps
                </h2>
                <p className="text-[#627382] leading-relaxed mb-16 max-w-2xl mx-auto">
                    Start using premium digital tools in minutes, not hours.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                    {steps.map(step => (

                        <div key={step.id} className="relative group w-full h-full ">

                            <div className="absolute top-4 right-4 w-11 h-11 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full flex items-center  justify-center font-bold text-base z-10 shadow-lg">
                                {step.id}
                            </div>

                            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 pt-20 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center min-h-95  h-full">

                                <div className="w-24 h-24 bg-[#F3E8FF] rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        className='w-14 h-14 object-contain'
                                        src={step.icon}
                                        alt={step.title}
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-[#101727] mb-4 text-center">
                                    {step.title}
                                </h3>

                                <p className="text-[#627382] leading-relaxed text-center">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetStarted;