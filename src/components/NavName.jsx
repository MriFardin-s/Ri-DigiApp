import React from 'react';

const NavName = ({nav}) => {
    return (
        <li  className='mr-10 leading-[1.2] font-semibold text-[#101727] whitespace-nowrap cursor-pointer hover:text-[#4F39F6] '>
                            {nav.name}
                        </li>
    );
};

export default NavName;