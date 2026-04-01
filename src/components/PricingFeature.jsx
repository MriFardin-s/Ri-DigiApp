import React from 'react';
import { Check } from 'lucide-react';
const PricingFeature = ({ feature, plan }) => {
    return (
        <li className="flex items-start text-left gap-3">
            <Check className={`w-5 h-5 mt-0.5 ${plan.isPopular ? "text-[#FFFFFF]" : "text-[#30B868]"}`} />
            <span className={plan.isPopular ? "text-[#FFFFFF]" : "text-[#627382]"}>{feature}</span>
        </li>
    );
};

export default PricingFeature;