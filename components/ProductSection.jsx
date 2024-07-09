"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import ProductCard from "./ProductCard";
import {
  latestProductData,
  popularProductData,
} from "@/public/data/productData";

export default function ProductSection() {
  const searchParam = useSearchParams();
  const productType = searchParam.get("productType");

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ block: "nearest" });
    }
    window.history.pushState({}, "", event.target.href);
  };

  return (
    <div id="product-section" className="pt-8">
      <ul className="flex gap-6 font-bold">
        <li>
          <Link
            href={"?productType=latest"}
            onClick={(e) => handleLinkClick(e, "product-section")}
          >
            LATEST
          </Link>
          {productType === "latest" || !productType ? (
            <div className="w-full">
              <Image
                src={"/assets/icons/active-tab.svg"}
                width={55}
                height={19}
                alt=""
              />
            </div>
          ) : null}
        </li>
        <li>
          <Link
            href={"?productType=popular"}
            onClick={(e) => handleLinkClick(e, "product-section")}
          >
            POPULAR
          </Link>
          {productType === "popular" && (
            <div className="w-full">
              <Image
                src={"/assets/icons/active-tab.svg"}
                width={74}
                height={19}
                alt=""
              />
            </div>
          )}
        </li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-7 mt-7">
        {productType === "latest" || !productType ? (
          <>
            {latestProductData?.map((item) => {
              return (
                <>
                  <ProductCard
                    key={item.id}
                    productLink={`/cart/${item.id}`}
                    imgSrc={item.imgSrc}
                    productName={item.productName}
                    currentPrice={item.currentPrice}
                    previousPrice={item.previousPrice}
                  />
                </>
              );
            })}
          </>
        ) : (
          <>
            {popularProductData?.map((item) => {
              return (
                <>
                  <ProductCard
                    key={item.id}
                    productLink={`/cart/${item.id}`}
                    imgSrc={item.imgSrc}
                    productName={item.productName}
                    currentPrice={item.currentPrice}
                    previousPrice={item.previousPrice}
                  />
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
