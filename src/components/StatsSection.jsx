import React from 'react';

const StatsSection = () => {
    const stats = [
        { id: 1, value: '50K+', label: 'Active Users' },
        { id: 2, value: '200+', label: 'Premium Tools' },
        { id: 3, value: '4.9', label: 'Rating' },
    ];

    return (
        <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-around gap-12 md:gap-0">
                    {stats.map(stat => (
                        <div key={stat.id} className="flex items-center gap-10">
                            <div className="text-center text-[#FFFFFF]">
                                <h2 className="text-5xl font-extrabold">{stat.value}</h2>
                                <p className="font-medium text-[24px]">{stat.label}</p>
                            </div>

                           
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;