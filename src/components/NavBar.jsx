import { Linter } from 'eslint';
import React from 'react';
const navigationData = [
  { id: 1, name: 'Products'},
  { id: 2, name: 'Features'},
  { id: 3, name: 'Pricing' },
  { id: 4, name: 'Testimonials' },
  { id: 5, name: 'FAQ' }
];
const NavBar = () => {
    return (
        <nav>
            <ul>
                {
                    navigationData.map(nav => <li className='mr-10' >{nav.name}</li>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;