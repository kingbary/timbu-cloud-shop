"use client";
import BasicInfo from "@/components/BasicInfo";
import CheckoutLayout from "@/components/CheckoutLayout";
import Confirmation from "@/components/Confirmation";
import PaymentInfo from "@/components/PaymentInfo";
import ShippingInfo from "@/components/ShippingInfo";
import { useSearchParams } from "next/navigation";
import { set } from "react-hook-form";

export default function Checkout() {
  const searchParam = useSearchParams();
  const step = searchParam.get("step");
  const productName = localStorage.getItem("productName");
  const totalPrice = localStorage.getItem("totalPrice");
  const currentPrice = localStorage.getItem("currentPrice");

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <CheckoutLayout>
        {!step && <BasicInfo />}
        {step === "basicInfoSubmitted" && <ShippingInfo />}
        {step === "shippingInfoSubmitted" && <PaymentInfo />}
        {step === "paymentSuccessful" && <Confirmation />}
      </CheckoutLayout>
      <div className="relative hidden md:block w-full md:w-2/5 md:h-screen bg-[#F7F7F7] pt-20 px-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-lg text-[#353638]">Items</p>
          <p className="text-xs text-[#909090]">Edit cart</p>
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-[#353638]">{productName}</p>
            <p className="text-[#353638] text-sm">${currentPrice}</p>
          </div>
        </div>
        <div className="absolute flex justify-between bottom-10 w-[85%]">
          <p className="text-[#353638] text-lg font-bold">Total</p>
          <p className="text-[#D8474C] text-lg font-bold">${totalPrice}</p>
        </div>
      </div>
    </div>
  );
}
