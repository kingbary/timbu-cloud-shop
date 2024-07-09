import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function NewProductBanner() {
  return (
    <div className="bg-[#F0F0F0] flex flex-col-reverse md:flex-row items-center py-8 px-4 md:px-24 mt-14">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="size-56 md:size-[400px] flex items-center">
          <Image
            src={"/assets/images/new-product-img.png"}
            width={1230}
            height={1060}
            alt="new product img"
          />
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="dark" className="font-bold">
            SHOP NOW
          </Button>
        </div>
      </div>
      <div className="px-1 md:px-6">
        <p className="text-[#222] font-extrabold text-sm text-center md:text-left md:text-xl">
          NEW PRODUCT
        </p>
        <p className="text-[#222] font-extrabold text-[35px] text-center md:text-left md:text-[60px]">
          AXEL - STOOL
        </p>
        <p className="text-center md:text-left">
          A sleek and versatile addition to contemporary interiors. Crafted from
          sustainably sourced ash wood, its minimalist design exudes elegance
          and functionality. The AXEL Stool features a gently machined seat for
          optimal comfort, supported by sturdy yet slim tapered legs that
          provide stability without compromising on style.
        </p>
        <div className="mt-8 md:flex hidden">
          <Button variant="dark" className="font-bold">
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
