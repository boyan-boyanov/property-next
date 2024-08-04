import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";

const Footer = () => {
  const currenYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 py-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Image src={logo} alt="Logo" className="h-8 w-auto" priority={true} />
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; {currenYear} BGProperty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
