"use client";
import React from "react";
import { Button } from "./ui/button";
import CheckoutLayout from "./CheckoutLayout";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function ShoppingCart() {
  const productName = localStorage.getItem("productName");
  const id = localStorage.getItem("productName");
  const currentPrice = localStorage.getItem("currentPrice");
  const shipingFee = (currentPrice * 0.3).toFixed(2);
  const tax = (currentPrice * 0.07).toFixed(2);
  const totalPrice = (
    parseFloat(currentPrice) +
    parseFloat(shipingFee) +
    parseFloat(tax)
  ).toFixed(2);
  const param = useParams();
  const idParam = param.id;
  const router = useRouter();
  const handleCheckout = () => {
    router.push(`/checkout/${idParam}`);
    localStorage.setItem("totalPrice", totalPrice);
  };
  return (
    <div className="flex justify-between">
      <CheckoutLayout>
        <div className="mt-8 px-8">
          <div className="flex justify-between mb-8">
            <p className="text-[35px] text-[#353638]">Shopping Cart</p>
            <p className="text-xs font-medium uppercase">1 items</p>
          </div>
          <div>
            <div className="grid grid-cols-[2fr_1fr_1fr] w-full text-s text-[#909090] font-medium mb-6">
              <p>Item</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            <div className="grid grid-cols-[2fr_1fr_1fr] items-center w-full text-s text-[#909090] font-medium">
              <div className="flex gap-4 items-center">
                <Image
                  src={"/assets/images/product-img/latest/1.png"}
                  width={200}
                  height={200}
                />
                <div>
                  <p className="text-[#353638] font-bold">{productName}</p>
                  <p className="text-[#353638] font-bold text-xs">Chair</p>
                </div>
              </div>
              <p className="text-[#353638] font-bold">1</p>
              <p className="text-[#353638] font-bold">${currentPrice}</p>
            </div>
          </div>
        </div>
      </CheckoutLayout>
      <div className="w-2/5 bg-[#F7F7F7] pt-20 px-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-lg text-[#353638]">Summary</p>
          <p className="text-xs text-[#909090]">Edit cart</p>
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-[#353638]">Subtotal</p>
            <p className="text-[#353638] text-sm">${currentPrice}</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-[#353638]">Shipping</p>
            <p className="text-[#353638] text-sm">${shipingFee}</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className=" text-[#353638]">Tax</p>
            <p className="text-[#353638] text-sm">${tax}</p>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex justify-between items-end">
            <p className=" text-[#353638] text-lg font-bold">Total</p>
            <p className="text-[#D8474C] text-lg font-bold">${totalPrice}</p>
          </div>
          <div className="flex justify-center">
            <Button
              variant="dark"
              className="mt-5 w-full"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
