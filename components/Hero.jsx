import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row min-w-full min-h-[481px] justify-between gap-3 2xl:gap-7 font-black text-2xl">
      <div className="flex flex-col w-full items-center justify-center bg-[#F1F1F1] py-10">
        <div className="w-full flex items-center justify-center">
          <Image
            src={"/assets/images/sofa-1.png"}
            width={1500}
            height={378}
            alt="sofa img"
          />
        </div>
        <p className="text-[#A71E1D] font-normal mb-[15px] text-[30px] md:text-[40px] 2xl:text-[45px]">
          FURNITURE
        </p>
        <p className="font-black text-[50px] md:text:[70px] 2xl:text-[80px] mb-8">
          WOOD STYLE
        </p>
        <Button variant="whiteBg" className="font-bold">
          SHOP NOW
        </Button>
      </div>
      <div className="w-full flex flex-col gap-3 2xl:gap-7">
        <div>
          <div className="w-full h-full">
            <Image
              src={"/assets/images/sofa-2.png"}
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-between gap-3 2xl:gap-7">
          <div className="w-full flex flex-col items-center justify-center bg-[#F1F1F1] px-4">
            <p className="font-normal text-center">
              SOFA <span className="text-[#00DAFF] font-black">ITALIA</span>
            </p>
            <Image
              src={"/assets/images/sofa-3.png"}
              width={434}
              height={209}
              alt=""
            />
          </div>
          <div className="bg-[#F1F1F1] w-full flex flex-col items-center justify-center">
            <Image
              src={"/assets/images/sofa-4.png"}
              width={434}
              height={209}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
