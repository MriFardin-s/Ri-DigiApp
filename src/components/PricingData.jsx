import React from 'react';

import PricingFeature from './PricingFeature';
const PricingData = ({ plan }) => {
    return (
        <div

            className={`relative rounded-[2.5rem] p-10 transition-all duration-500 h-full flex flex-col ${plan.isPopular
                    ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-2xl scale-105 z-10"
                    : "bg-[#F9FAFC] text-[#101727] border border-gray-100 shadow-sm hover:shadow-xl"
                }`}
        >
            
            {plan.isPopular ?  (
                <div className="absolute -top-4  right-34 bg-[#FEF3C6] text-[#BB4D00] px-4 py-1 rounded-full text-sm font-medium shadow-sm">
                    Most Popular
                </div>
            ) : null}

           
            <div className="text-left mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.isPopular ? "text-[#FFFFFF]" : "text-[#627382]"}`}>
                    {plan.tagline}
                </p>
            </div>

            
            <div className="text-left mb-8 flex items-baseline">
                <span className="text-4xl font-extrabold">${plan.price}</span>
                <span className={`ml-1 text-lg ${plan.isPopular ? "text-[#FFFFFF]" : "text-[#627382]"}`}>/Month</span>
            </div>

            
            <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                    <PricingFeature key={idx} plan={plan} feature={feature} />
                ))}
            </ul>

            
            <button className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${plan.isPopular
                    ? "bg-[#FFFFFF] text-[#6517ec] hover:bg-gray-100"
                    : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:bg-[#6D28D9]"
                }`}>
                {plan.buttonText}
            </button>
        </div>
    );
};

export default PricingData;