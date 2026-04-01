import React from 'react';

const FooterSection = ({section}) => {
    return (
       <div  className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">{section.title}</h3>
            <ul className="space-y-4">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
    );
};

export default FooterSection;