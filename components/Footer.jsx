import { House, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-black text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 md:px-[32px] py-6">
      <div>
        <p className="mb-4 mt-4 font-bold">CONTACT US</p>
        <div className="flex gap-2 items-center mb-3">
          <div className="size-6 bg-white rounded-[30px] flex items-center justify-center">
            <House color="#909090" size={18} />
          </div>
          <p className="text-sm">7 Washington street, Ikate, Lagos</p>
        </div>
        <div className="flex gap-2 items-center mb-3">
          <div className="size-6 bg-white rounded-[30px] flex items-center justify-center">
            <Phone color="#909090" size={18} />
          </div>
          <Link className="text-sm" href={"tel:+2347084121936"}>
            +2347084121936
          </Link>
        </div>
        <div className="flex gap-2 items-center mb-3">
          <div className="size-6 bg-white rounded-[30px] flex items-center justify-center">
            <Mail color="#909090" size={18} />
          </div>
          <Link className="text-sm" href={"mailto:info@timbucloudshop.com"}>
            info@timbucloudshop.com
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <p className="font-bold">SERVICES</p>
        <Link className="text-sm" href={"#"}>
          Home Furnishing
        </Link>
        <Link className="text-sm" href={"#"}>
          Secure Payments
        </Link>
        <Link className="text-sm" href={"#"}>
          Delivery Times & Costs
        </Link>
        <Link className="text-sm" href={"#"}>
          Returns & Exchanges
        </Link>
        <Link className="text-sm" href={"#"}>
          FAQ’s
        </Link>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <p className="font-bold">ACCOUNT</p>
        <Link className="text-sm" href={"#"}>
          My account
        </Link>
        <Link className="text-sm" href={"#"}>
          Wishlist
        </Link>
        <Link className="text-sm" href={"#"}>
          Order History
        </Link>
        <Link className="text-sm" href={"#"}>
          Specials
        </Link>
        <Link className="text-sm" href={"#"}>
          Gift Vouchers
        </Link>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <p className="font-bold">INFORMATION</p>
        <Link className="text-sm" href={"#"}>
          Privacy Policy
        </Link>
        <Link className="text-sm" href={"#"}>
          Client Portal
        </Link>
        <Link className="text-sm" href={"#"}>
          Product Catalogue
        </Link>
        <Link className="text-sm" href={"#"}>
          Quality Process
        </Link>
        <Link className="text-sm" href={"#"}>
          Travel Tips
        </Link>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <p className="font-bold">NEWSLETTER</p>
        <p className="text-sm">
          By subscribing to our mailing list, you will always be up to date
          about the latest news.
        </p>
        <form>
          <input
            type="email"
            className="mb-2 py-2 px-2 w-full text-black"
            placeholder="Enter your email"
            required
          />
          <Button variant="dark">Subscribe</Button>
        </form>
      </div>
    </footer>
  );
}
