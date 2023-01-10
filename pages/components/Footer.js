import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" flex justify-center text-3xl py-8">
      <Link href="https://github.com/adityakr1403" target="_blank">
        <AiFillGithub className=" mx-4 text-gray-500 cursor-pointer hover:text-gray-800" />
      </Link>
      <Link href="https://leetcode.com" target="_blank">
        <SiLeetcode className=" mx-4 text-gray-500 cursor-pointer hover:text-gray-800" />
      </Link>
      <Link href="https://instagram.com" target="_blank">
        <AiFillInstagram className=" mx-4 text-gray-500 cursor-pointer hover:text-gray-800" />
      </Link>
      <Link href="https://facebook.com" target="_blank">
        <BsFacebook className=" mx-4 text-gray-500 cursor-pointer hover:text-gray-800" />
      </Link>
    </footer>
  );
};

export default Footer;
