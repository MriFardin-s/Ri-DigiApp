import React from 'react';
import dotImg from '../assets/Group 5.png'
import playImg from '../assets/Play.png'
import HeroImg from '../assets/banner.png'

const HeroSection = () => {
  return (
    
    <section className="container mx-auto flex items-center py-10 md:py-20 overflow-x-hidden">
      <div className=" px-6 sm:px-10 lg:px-0">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">


          <div className="space-y-2 sm:space-y-8 max-w-xl md:max-w-3xl lg:max-w-none">


            <div className="inline-flex items-center gap-2.5 bg-[#E1E7FF] px-4 py-2 rounded-full border border-purple-100 shadow-sm whitespace-nowrap">

              <img src={dotImg} alt="" />
              <p className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                New: AI-Powered Tools Available
              </p>
            </div>


            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#101727]">
              Supercharge Your <br className="hidden sm:block lg:hidden" /> Digital Workflow
            </h1>


            <p className="text-base sm:text-lg lg:text-xl text-[#627382] leading-relaxed max-w-lg">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>




            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button className="rounded-full py-3 px-8 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium text-base hover:opacity-90 transition-all shadow-md">
                Explore Products
              </button>

             
             <div className=''>
              
               <button className="flex items-center gap-2.5 rounded-full py-3 px-8 border border-[#4F39F6] text-[#4F39F6] font-medium text-base hover:bg-gray-50 transition-all">
                <img src={playImg} alt="" />
                Watch Demo
              </button>
             </div>
      
            </div>
          </div>

          
          <div className="relative group rounded-3xl overflow-hidden">
            <img
              src={HeroImg}
              alt=""
              className="w-full h-auto object-cover rounded-3xl"
            />
            
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;