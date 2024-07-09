import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function BasicInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const router = useRouter();

  const submitForm = (data) => {
    console.log(data);
    localStorage.setItem("email", data.email);
    localStorage.setItem("firstName", data.firstName);
    router.push("?step=basicInfoSubmitted");
  };
  return (
    <div className="flex gap-20 mt-14">
      <p className="font-medium text-lg text-[#909090]">Checkout</p>
      <div className="w-1/2">
        <p className="text-2xl font-medium">Who is placing this order?</p>
        <form onSubmit={handleSubmit(submitForm)} className="mt-8">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-[#909090]">
              Email
            </label>
            <input
              className={`border-b ${
                errors?.email ? "border-red-600" : "border-[#909090]"
              } outline-none py-2 bg-transparent`}
              {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
              placeholder="johndoe@example.com"
            />
            {errors.email && (
              <span className="text-red-600 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex justify-between gap-4 mt-6">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-sm text-[#909090]">
                First Name
              </label>
              <input
                className={`border-b ${
                  errors?.firstName ? "border-red-600" : "border-[#909090]"
                } outline-none py-2 bg-transparent`}
                {...register("firstName", {
                  required: "First name is required",
                })}
                type="text"
                id="firstName"
                placeholder="John"
              />
              {errors.firstName && (
                <span className="text-red-600 text-xs">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-sm text-[#909090]">
                Last Name
              </label>
              <input
                className={`border-b ${
                  errors?.lastName ? "border-red-600" : "border-[#909090]"
                } outline-none py-2 bg-transparent`}
                {...register("lastName", {
                  required: "Last name is required",
                })}
                type="text"
                id="lastName"
                placeholder="Doe"
              />
              {errors.lastName && (
                <span className="text-red-600 text-xs">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>
          <div className="mt-5">
            <Button variant="dark" type="submit">
              PROCEED TO SHIPPING
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
