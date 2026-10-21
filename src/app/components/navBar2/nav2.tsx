"use client" ;

import '../navBar2/navBar2.css';

import Image from 'next/image';
import React from 'react';
import logo from "../images/jonny-gios--hXDYIq5WAQ-unsplash.jpg"; // Specify the image source

const Nav2 = () => {
  return (
    
    <div className='main-header'>
        <nav>
          <Image
        src={logo} // Use the imported image source
        alt="Logo" // Provide an alt attribute for accessibility
        width={100} // Specify the width (adjust as needed)
        height={50} // Specify the height (adjust as needed)
        className='logo' // Add any CSS classes here
      />
            
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
        </nav>
        {/* <div>
     1
      </div>
        <div>
     2
      </div>
        <div>
     3
      </div> */}
    </div>
  );
};

export default Nav2;
