import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants/index";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t broder-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col gap-5 justify-start items-start">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-sm text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((itm) => (
            <div key={itm.title} className="footer__link">
              <h3 className="font-bold">{itm.title}</h3>

              {itm.links.map((link) => (
                <Link
                  href={link.url}
                  key={link.title}
                  className="text-gray-700 hover:text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 carHub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
