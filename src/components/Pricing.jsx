import React from 'react';

import PricingData from './PricingData';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            tagline: "Perfect for getting started",
            price: "0",
            features: [
                "Access to 10 free tools",
                "Basic templates",
                "Community support",
                "1 project per month"
            ],
            buttonText: "Get Started Free",
            isPopular: false
        },
        {
            name: "Pro",
            tagline: "Best for professionals",
            price: "29",
            features: [
                "Access to all premium tools",
                "Unlimited templates",
                "Priority support",
                "Unlimited projects",
                "Cloud sync",
                "Advanced analytics"
            ],
            buttonText: "Start Pro Trial",
            isPopular: true
        },
        {
            name: "Enterprise",
            tagline: "For teams and businesses",
            price: "99",
            features: [
                "Everything in Pro",
                "Team collaboration",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantee",
                "Custom branding"
            ],
            buttonText: "Contact Sales",
            isPopular: false
        }
    ];

    return (
        <section className="py-30 bg-white">
            <div className="container mx-auto px-6 text-center">
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#101727] mb-4">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-[#627382] mb-16 max-w-2xl mx-auto">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <PricingData key={index}  plan = {plan} index ={index}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;