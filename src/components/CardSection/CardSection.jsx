import React from 'react';

const CardSection = () => {
    return (
        <section className='container mx-auto py-20 px-6'>
            <div className='space-y-4 text-center flex flex-col items-center justify-center'>


                <h2 className='font-extrabold text-4xl md:text-6xl text-[#101727] tracking-tight'>
                    Premium Digital Tools
                </h2>


                <p className='font-normal text-lg md:text-xl text-[#627382] max-w-2xl'>
                    Choose from our curated collection of premium digital products designed
                    <br className="hidden md:block" /> to boost your productivity and creativity.
                </p>


                <div className="flex justify-center mt-10">

                    <div className="flex items-center bg-white border border-gray-100 rounded-full p-1.5 shadow-sm">


                        <button className="px-10 py-3 rounded-full font-bold text-base bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md">
                            Products
                        </button>


                        <button className="px-10 py-3 rounded-full font-bold text-base text-[#64748B] hover:text-[#4F39F6] transition-colors">
                            Cart (2)
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardSection;