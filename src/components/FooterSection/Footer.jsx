import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import FooterSection from './FooterSection';

const Footer = () => {
    const footerSections = [
        {
            title: "Product",
            links: ["Features", "Pricing", "Templates", "Integrations"]
        },
        {
            title: "Company",
            links: ["About", "Blog", "Careers", "Press"]
        },
        {
            title: "Resources",
            links: ["Documentation", "Help Center", "Community", "Contact"]
        }
    ];


    const socialLinks = [
        { icon: <AiFillInstagram size={22} />, href: "#" },
        { icon: <FaFacebookF size={18} />, href: "#" },
        { icon: <FaTwitter size={18} />, href: "#" }
    ];

    return (
        <footer className="bg-[#0B0F19] text-white pt-20 pb-10 px-6">
            <div className="container mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">


                    <div className="lg:col-span-5">
                        <h2 className="text-3xl text-[#FFFFFF] font-extrabold mb-6">DigiTools</h2>
                        <p className="text-[#FFFFFF]  text-lg max-w-sm leading-relaxed">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>


                    {footerSections.map((section, index) => (
                        <FooterSection key={index} section={section} />
                    )
                    )}


                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold text-[#FFFFFF]  mb-6">Social Links</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}

                                    className="w-10 h-10 shrink-0 bg-white text-[#0B0F19] rounded-full flex items-center justify-center hover:bg-gray-200 transition-all shadow-md"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2026 Digi tools. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;