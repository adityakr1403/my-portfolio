import Link from "next/link";
import React from "react";
import { TbZodiacCapricorn } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className=" px-4 py-4 lg:px-16 md:px-8 flex align-middle justify-between">
      {/* <style jsx></style> */}

      <Link href="/" className=" flex justify-center cursor-pointer">
        <TbZodiacCapricorn className=" text-3xl text-teal-700" />
        <h1 className=" text-xl font-medium text-teal-500">Aditya</h1>
      </Link>

      <ul className="flex ">
        <li className=" mx-4 cursor-pointer font-medium hover:text-teal-700">
          <Link href="/blog">Blog</Link>
        </li>
        <li className=" mx-4 cursor-pointer font-medium hover:text-teal-700">
          <Link href="/resume">Resume</Link>
        </li>
        <li className=" mx-4 cursor-pointer font-medium hover:text-teal-700">
          <Link href="/project">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
