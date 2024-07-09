import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import ReactInputMask from "react-input-mask";
import { useRouter } from "next/navigation";

export default function PaymentInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const router = useRouter();

  const submitForm = (data) => {
    console.log(data);
    router.push("?step=paymentSuccessful");
  };
  return (
    <div className="flex gap-20 mt-14">
      <p className="font-medium text-lg text-[#909090]">Checkout</p>
      <div className="w-1/2">
        <p className="text-2xl font-medium">How would you like to pay?</p>
        <form onSubmit={handleSubmit(submitForm)} className="mt-8">
          <div className="flex flex-col">
            <label htmlFor="cardName" className="text-sm text-[#909090]">
              Name on Card*
            </label>
            <input
              className={`border-b ${
                errors?.cardName ? "border-red-600" : "border-[#909090]"
              } outline-none py-2 bg-transparent`}
              {...register("cardName", {
                required: "Name on card is required",
              })}
              type="cardName"
              id="cardName"
              placeholder="John Doe"
            />
            {errors.cardName && (
              <span className="text-red-600 text-xs">
                {errors.cardName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="cardNumber" className="text-sm text-[#909090]">
              Card number*
            </label>
            <ReactInputMask
              mask="9999 9999 9999 9999"
              className={`border-b ${
                errors?.cardNumber ? "border-red-600" : "border-[#909090]"
              } outline-none py-2 bg-transparent`}
              {...register("cardNumber", {
                required: "Card Number is required",
              })}
              id="cardNumber"
              placeholder="0000 0000 0000 0000"
            />
            {errors.cardNumber && (
              <span className="text-red-600 text-xs">
                {errors.cardNumber.message}
              </span>
            )}
          </div>
          <div className="flex justify-between gap-4 mt-6">
            <div className="flex flex-col">
              <label
                htmlFor="expirationDate"
                className="text-sm text-[#909090]"
              >
                Expiration date
              </label>
              <ReactInputMask
                mask="99/99"
                className={`border-b ${
                  errors?.expirationDate ? "border-red-600" : "border-[#909090]"
                } outline-none py-2 bg-transparent`}
                {...register("expirationDate", {
                  required: "Expiration date is required",
                })}
                id="expirationDate"
                placeholder="MM/YY"
              />
              {errors.expirationDate && (
                <span className="text-red-600 text-xs">
                  {errors.expirationDate.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="cvv" className="text-sm text-[#909090]">
                CVV
              </label>
              <input
                className={`border-b ${
                  errors?.cvv ? "border-red-600" : "border-[#909090]"
                } outline-none py-2 bg-transparent`}
                {...register("cvv", {
                  required: "CVV is required",
                  pattern: {
                    value: /^\d+$/,
                    message: "CVV must be numeric",
                  },
                })}
                type="text"
                id="cvv"
                placeholder="00000"
                inputMode="numeric"
                maxLength={3}
                minLength={3}
              />
              {errors.cvv && (
                <span className="text-red-600 text-xs">
                  {errors.cvv.message}
                </span>
              )}
            </div>
          </div>
          <div className="mt-5">
            <Button variant="dark" type="submit" className="w-[200px]">
              PAY
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
