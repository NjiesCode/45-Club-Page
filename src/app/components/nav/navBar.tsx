import Image from "next/image";
// import Button from "./Button";
import Link from "next/link";
import React from "react";
import logo from "../images/jonny-gios--hXDYIq5WAQ-unsplash.jpg"; // Specify the image source

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-emerald-800 sticky top-0">
      <nav className="nav">
        <ul className="hidden md:flex gap-x-6 text-white">
          <Image
            src={logo} // Use the imported image source
            alt="Logo" // Provide an alt attribute for accessibility
            width={100} // Specify the width (adjust as needed)
            height={50} // Specify the height (adjust as needed)
            className="logo" // Add any CSS classes here
          />
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Events/Services</Link>
          </li>
          <li>
            <Link href="/">Contacts</Link>
          </li>
        </ul>
        <button>Click</button>
      </nav>
    </div>
  );
};

export default Navbar;
