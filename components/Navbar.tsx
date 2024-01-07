"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomBtn } from ".";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomBtn
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full py-3 bg-white min-w-[130px]"
          handleClick={() => console.log("clicked")}
        />
      </nav>
    </header>
  );
};

export default Navbar;
