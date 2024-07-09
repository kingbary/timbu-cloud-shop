import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Confirmation() {
  const email = localStorage.getItem("email");
  const firstName = localStorage.getItem("firstName");
  return (
    <div className="flex flex-col gap-20 mt-14">
      <div className="w-[70%]">
        <p className="text-2xl font-medium text-[#353638]">
          Thank you for shopping with Timbu Store. You’ve made a great choice
        </p>
        <p className="text-[#909090] text-xl font-medium mt-8">
          Confirmation alert has been sent to{" "}
          <span className="italic">{email}</span>
        </p>
      </div>
      <div className="text-[#909090]">
        <p>Hello, {firstName}</p>
        <p className="max-w-[400px]">
          Your order has been successfully completed and will be delivered to
          you in the coming days. You can track the delivery status in the
          Personal Account. You should also receive a notification with a link
          to track the parcel from our partner DHL.
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-[#6C6C6C]">TIMBU CLOUD SHOP</p>
            {/* <Link href={"/"} className="flex items-center justify-center text-[#6C6C6C] px-4 py-2 border-[2px] border-[#353638]">BACK TO STORE</Link> */}
      </div>
    </div>
  );
}
