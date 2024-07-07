"use client";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function NavMenu() {
  const [searchInput, setSearchInput] = useState(false);
  const handleClickSearchBtn = () => {
    if (searchInput) {
      setSearchInput(false);
    } else {
      setSearchInput(true);
    }
  };
  console.log(searchInput);
  return (
    <div className="px-8 py-7 text-sleekGray">
      <div className="">
        <div className="flex justify-between">
          <Image
            src={"/assets/icons/logo.svg"}
            width={160}
            height={50}
            alt="logo"
          />
          <div className="flex w-[50%] justify-between">
            <div className="flex items-center gap-4 font-bold">
              <Image
                src={"/assets/icons/truck.svg"}
                width={32}
                height={32}
                alt="truck-logo"
              />
              <div>
                <p className="2xl:text-[22px]">LEVERAGE</p>
                <p className="text-xs 2xl:text-base">Fast Delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-4 font-bold">
              <Image
                src={"/assets/icons/gift.svg"}
                width={32}
                height={32}
                alt="truck-logo"
              />
              <div>
                <p className="2xl:text-[22px]">BUILDING HOMES</p>
                <p className="text-xs 2xl:text-base">Best Gift Items</p>
              </div>
            </div>
            <div className="flex items-center gap-4 font-bold">
              <Image
                src={"/assets/icons/call-icon.svg"}
                width={32}
                height={32}
                alt="call-logo"
              />
              <div>
                <p className="2xl:text-[22px]">ORDER NOW</p>
                <p className="text-xs 2xl:text-base">Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9] w-full h-[2px] blur-[3px] mt-7"></div>
      </div>
      <div className="flex justify-between">
        <ul className="flex gap-8 text-black text-sm 2xl:text-[22px] font-bold py-5">
          <li>
            <Link href={"#home"}>HOME</Link>
          </li>
          <li>
            <Link href={"#join-us"}>JOIN US</Link>
          </li>
          <li>
            <Link href={"#contact-us"}>CONTACT US</Link>
          </li>
        </ul>
        <div className="relative flex items-center gap-5">
          <input
            className={`${
              searchInput
                ? "w-[238px border-2 outline-none !border-black]"
                : "w-0"
            } pl-8 animate-out py-2`}
            type="text"
            style={{ border: `${searchInput ? "1px solid black" : "none"}` }}
          />
          <Search
            className="absolute left-1 cursor-pointer animate-out"
            color="black"
            size={25}
            onClick={handleClickSearchBtn}
          />
          <div className="flex items-center gap-1">
            <ShoppingCart color="black" size={25} />
            <p className="text-xl text-black">0</p>
          </div>
        </div>
      </div>
      <div className="bg-[#D9D9D9] w-full h-[2px] blur-[3px] mb-7"></div>
    </div>
  );
}
