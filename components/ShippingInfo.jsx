import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function ShippingInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const router = useRouter();

  const submitForm = (data) => {
    console.log(data);
    router.push("?step=shippingInfoSubmitted");
  };
  return (
    <div className="flex gap-20 mt-14">
      <p className="hidden md:block font-medium text-lg text-[#909090]">Checkout</p>
      <div className="w-full md:w-1/2">
        <p className="text-2xl font-medium">
          Where would you like your order sent?
        </p>
        <form onSubmit={handleSubmit(submitForm)} className="mt-8">
          <div className="flex flex-col">
            <label htmlFor="country" className="text-sm text-[#909090]">
              Country*
            </label>
            <input
              className={`border-b ${
                errors?.country ? "border-red-600" : "border-[#909090]"
              } outline-none py-2 bg-transparent`}
              {...register("country", { required: "Country is required" })}
              type="country"
              id="country"
              placeholder="Nigeria"
            />
            {errors.country && (
              <span className="text-red-600 text-xs">
                {errors.country.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="address" className="text-sm text-[#909090]">
              Address*
            </label>
            <input
              className={`border-b ${
                errors?.address ? "border-red-600" : "border-[#909090]"
              } outline-none py-2 bg-transparent`}
              {...register("address", { required: "Address is required" })}
              type="address"
              id="address"
              placeholder="123 Gentle Street"
            />
            {errors.address && (
              <span className="text-red-600 text-xs">
                {errors.address.message}
              </span>
            )}
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
            <div className="flex flex-col">
              <label htmlFor="city" className="text-sm text-[#909090]">
                City
              </label>
              <input
                className={`border-b ${
                  errors?.city ? "border-red-600" : "border-[#909090]"
                } outline-none py-2 bg-transparent`}
                {...register("city", {
                  required: "City is required",
                })}
                type="text"
                id="city"
                placeholder="Lagos"
              />
              {errors.city && (
                <span className="text-red-600 text-xs">
                  {errors.city.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="zipcode" className="text-sm text-[#909090]">
                Zipcode
              </label>
              <input
                className={`border-b ${
                  errors?.zipcode ? "border-red-600" : "border-[#909090]"
                } outline-none py-2 bg-transparent`}
                {...register("zipcode", {
                  required: "Zipcode is required",
                  pattern: {
                    value: /^\d+$/,
                    message: "Zipcode must be numeric",
                  },
                })}
                type="text"
                id="zipcode"
                placeholder="00000"
                inputMode="numeric"
                maxLength={5}
                minLength={5}
              />
              {errors.zipcode && (
                <span className="text-red-600 text-xs">
                  {errors.zipcode.message}
                </span>
              )}
            </div>
          </div>
          <div className="mt-5">
            <Button variant="dark" type="submit">
              PROCEED TO PAYMENT
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
