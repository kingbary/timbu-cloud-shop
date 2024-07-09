import Image from "next/image";
import React from "react";

export default function ProductCard({
  productName,
  currentPrice,
  previousPrice,
  imgSrc,
}) {
  return (
    <div>
      <div className="flex items-center justify-center border-[3px] border-[#D9D9D980]">
        <div className="flex items-center justify-center size-full min-h-[290px] md:size-[290px] overflow-hidden py-2">
          <Image src={imgSrc} width={400} height={400} alt="" />
        </div>
      </div>
      <p className="text-center font-black text-sm mt-3">{productName}</p>
      <p className="text-[#C16C4F] text-center font-extrabold text-sm">
        {currentPrice}{" "}
        <span
          className="text-[#D0D0D0]"
          style={{ textDecorationLine: "line-through" }}
        >
          {previousPrice}
        </span>
      </p>
    </div>
  );
}
