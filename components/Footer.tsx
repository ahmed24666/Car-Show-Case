import Image from "next/image";
import React from "react";
import { footerLinks } from "@/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex flec-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex w-full max-md:flex-col flex-wrap sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6 mr-9">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Car hub <br />
            All rights reserved &copy; 2024
          </p>
        </div>
        <div className="footer__links justify-between">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="text-lg font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 w-full">
          <p>@2024 CarHub . All Rights Reseved</p>
          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-500">
              Terms of Service
            </Link>
            <Link href="/" className="text-gray-500">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
