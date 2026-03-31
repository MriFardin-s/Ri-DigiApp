
import { Menu, ShoppingCart, X } from 'lucide-react';
import React, { useState } from 'react';
import NavName from './NavName';
const navigationData = [
    { id: 1, name: 'Products' },
    { id: 2, name: 'Features' },
    { id: 3, name: 'Pricing' },
    { id: 4, name: 'Testimonials' },
    { id: 5, name: 'FAQ' }
];
const NavBar = ({ cartCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = navigationData.map(nav => <NavName nav={nav} key={nav.id} ></NavName>)
    return (

        <nav className='container mx-auto flex items-center justify-between py-4 px-2 sm:px-10 lg:px-0'>


            <div className='flex items-center gap-4 shrink-0'>

                <div className='md:hidden cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </div>

                <h1 className="text-[1.5rem] sm:text-[1.75rem] font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent shrink-0">
                    DigiTools
                </h1>
            </div>


            <ul className='hidden md:flex items-center space-x-10'>
                {links}
            </ul>


            <div className='flex items-center gap-6 shrink-0'>
                <div className="flex items-center gap-4 cursor-pointer group">

                    <div className="relative p-1">
                        <ShoppingCart className='text-gray-700 w-6 h-6' />


                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] flex items-center justify-center border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </div>

                    <p className="font-semibold text-[#101727] hidden sm:block hover:text-[#4F39F6] transition-colors">
                        Login
                    </p>
                </div>


                <button className='rounded-full py-2.5 px-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium hover:opacity-90 transition-all shadow-md active:scale-95'>
                    Get Started
                </button>
            </div>


            <ul className={`md:hidden absolute left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 space-y-4 transition-all duration-500 z-50
                    ${isMenuOpen ? 'top-16' : '-top-96'}`}>
                {links}
            </ul>
        </nav>


    );
};

export default NavBar;