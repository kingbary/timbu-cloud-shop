import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CheckoutLayout({ children }) {
  return (
    <div className="w-full bg-[#FBFBFB] pt-8 px-8 min-h-screen flex justify-between">
      <div className="w-full">
        <Image src={"/assets/icons/logo.svg"} width={144} height={50} alt="" />
        <div className="w-full flex justify-end pr-10">
          <Link
            href={"/"}
            className="flex items-center gap-3 tracking-[3.24px] text-[#909090] text-xs font-bold hover:text-black"
          >
            <ChevronLeft />
            BACK TO STORE
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
