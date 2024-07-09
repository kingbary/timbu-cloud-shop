import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function Offers() {
  return (
    <div className="mt-14">
      <p className="font-black text-[#222222] mb-8 text-xl">OFFERS</p>
      <div className="flex flex-col md:flex-row justify-between gap-8 overflow-hidden">
        <div className="w-full bg-[url('/assets/images/offer-img-1.png')] bg-cover bg-no-repeat bg-center h-[292px] min-w-[260px] py-4">
          <div className="w-full h-full">
            <div className="bg-[#D8474C] text-[#F0F0F0] p-4 w-fit">
              <div className="flex gap-2 items-center">
                <p className="text-[40px] font-extrabold">-20%</p>
                <div className="text-xs font-semibold">
                  <p>FREE SHIPPING 100KM</p>
                  <p>12 MONTH WARRANTY</p>
                  <p>3 DAY TRIAL</p>
                </div>
              </div>
              <p className="font-bold text-xl tracking-widest text-center">
                FOR HNG PREMIUM{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-full w-full flex flex-col md:flex-row justify-between gap-4">
            <div className="bg-[url('/assets/images/offer-img-2.png')] bg-cover bg-no-repeat h-[292px] min-w-[260px] p-4">
              <p className="font-normal text-white">LIVING ROOM</p>
              <p className="font-extrabold text-white text-[30px]">FURNITURE</p>
              <p className="text-style">-40%</p>
              <Button variant="dark" className="text-white gap-2">
                SHOP NOW{" "}
                <Image
                  src={"/assets/icons/smile.svg"}
                  width={20}
                  height={20}
                  alt=""
                />
              </Button>
            </div>
            <div className="flex flex-col justify-center items-center bg-[url('/assets/images/offer-img-3.png')] bg-cover bg-no-repeat h-[292px] min-w-[260px] p-">
              <p className="font-normal text-white">OUTDOOR</p>
              <p className="font-extrabold text-white text-[30px]">FURNITURE</p>
              <p className="font-normal text-white">
                Free delivery on weekends
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
