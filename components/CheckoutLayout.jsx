import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CheckoutLayout({ children }) {
  return (
    <div className="w-full bg-[#FBFBFB] p-4 md:p-8 md:min-h-screen flex justify-between">
      <div className="w-full">
        <Image src={"/assets/icons/logo.svg"} width={144} height={50} alt="" />
        <div className="w-full flex justify-start md:justify-end pr-10">
          <Link
            href={"/"}
            className="flex items-center gap-3 mt-6 md:mt-0 tracking-[3.24px] text-[#909090] text-xs font-bold hover:text-black"
          >
            <ChevronLeft />
            <p className="hidde md:block">BACK TO STORE</p>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
