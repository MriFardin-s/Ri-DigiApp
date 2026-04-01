import { Circle } from 'lucide-react';
import React from 'react';

const PosterSection = () => {
    return (
        <section className=" mt-20">

            <div className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA]  py-30 px-10 text-center shadow-2xl">


                <h2 className="text-3xl  text-[#FFFFFF] md:text-4xl font-extrabold mb-6">
                    Ready To Transform Your Workflow?
                </h2>


                <p className="text-[#FFFFFF] text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    Start your free trial today.
                </p>


                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                    <button className="bg-[#FFFFFF] text-[#5d0ce9] px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-300 transition-all duration-300 shadow-lg">
                        Explore Products
                    </button>
                    <button className="border-2 border-white bg-transparent  text-[#FFFFFF] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-300 transition-all duration-300">
                        View Pricing
                    </button>
                </div>


                <div className="flex flex-wrap items-center justify-center gap-6 text-[#FFFFFF] text-sm md:text-base opacity-80">
                    <span className="flex items-center gap-2">
                        14-day free trial
                    </span>
                    <span className="hidden md:inline"><Circle /></span>
                    <span className="flex items-center gap-2">
                        No credit card required
                    </span>
                    <span className="hidden md:inline"><Circle /></span>
                    <span className="flex items-center gap-2">
                        Cancel anytime
                    </span>
                </div>
            </div>
        </section>
    );
};

export default PosterSection;