
import { Menu, ShoppingCart, X } from 'lucide-react';
import React, { useState } from 'react';
import NavName from './NavName';
const navigationData = [
  { id: 1, name: 'Products'},
  { id: 2, name: 'Features'},
  { id: 3, name: 'Pricing' },
  { id: 4, name: 'Testimonials' },
  { id: 5, name: 'FAQ' }
];
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links =  navigationData.map(nav => <NavName nav={nav} key={nav.id} ></NavName>)
    return (
        <nav className='mt-5 container mx-auto flex items-center justify-between '>
           <div className='flex items-center gap-1' onClick={() => setIsMenuOpen(!isMenuOpen)}>
             {isMenuOpen ? <X className='lg:hidden'></X> : <Menu className='lg:hidden' />}

             <ul className={`md:hidden absolute duration-700
                 ${isMenuOpen ? 'top-16' : '-top-80'} `}>
                {links}
             </ul>
            
            <h1 className="text-[1.75rem] font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent shrink-0">
                DigiTools
            </h1>
           </div>

            
            <ul className=' hidden md:flex items-center space-x-8'>
                {
                 links
                }
            </ul>

            
            <div className='flex items-center gap-2 shrink-0'>
                <div className="cursor-pointer">
                    <ShoppingCart className='hidden sm:block'/>
                </div>
                <p className="font-semibold text-[#101727] cursor-pointer hidden sm:block ">Login</p>
                <button className='rounded-full py-2.5 px-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium hover:opacity-90  '>
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default NavBar;