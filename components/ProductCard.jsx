import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({
  productName,
  productLink,
  currentPrice,
  previousPrice,
  imgSrc,
}) {
  const handleClick = () => {
    localStorage.setItem("productName", productName);
    localStorage.setItem("currentPrice", currentPrice);
    localStorage.setItem("imgSrc", imgSrc);
  };
  return (
    <Link href={productLink} onClick={handleClick}>
      <div className="flex items-center justify-center border-[3px] border-[#D9D9D980]">
        <div className="flex items-center justify-center size-full min-h-[290px] md:size-[290px] overflow-hidden py-2">
          <Image src={imgSrc} width={400} height={400} alt="" />
        </div>
      </div>
      <p className="text-center font-black text-sm mt-3">${productName}</p>
      <p className="text-[#C16C4F] text-center font-extrabold text-sm">
        ${currentPrice}{" "}
        <span
          className="text-[#D0D0D0]"
          style={{ textDecorationLine: "line-through" }}
        >
          {previousPrice}
        </span>
      </p>
    </Link>
  );
}
