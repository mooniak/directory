"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "@modules/shared/components/ui/button";
import { SocialMediaIcon } from "@modules/shared/components/SocialMediaIcon";
import Link from "next/link";

export function Header() {
  const navButtonClassName = "cursor-pointer hover:underline ";

  return (
    <div className="w-full border-b border-black h-[60px]">
      <div className="grid grid-cols-12 gap-4  h-[42px] items-center">
        <Link
          href="/"
          className="col-start-1 col-end-2 w-[137px] h-[42px] text-start text-3xl pt-4 font-bold cursor-pointer"
        >
          Mooniak
        </Link>

        <div className="col-start-12 col-end-13  col-span-1 bg-white h-[42px] text-center justify-end pt-3 flex items-center sm2:hidden">
          <Button
            variant="ghost"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none"
          >
            <ArrowLeft color="#000000" />
          </Button>
        </div>
        <div className="lg2:col-start-4 lg2:col-end-10 col-end-13 col-span-1 bg-white h-[42px] text-center hidden w-full sm2:block sm2:w-auto">
          <div className="lg2:gap-[40px] gap-[10px] flex items-center  justify-end pt-4 font-bold ">
            <Link className={navButtonClassName} href="/">
              Fonts
            </Link>
            <Link className={navButtonClassName} href="/about/">
              About
            </Link>
            <Link className={navButtonClassName} href="/">
              Tools
            </Link>
            <Link className={navButtonClassName} href="/community">
              Community
            </Link>
            <Link href="/contact/" className={navButtonClassName}>
              Contact
            </Link>
          </div>
        </div>
        <div className="col-start-12 col-end-13  col-span-1 bg-white h-[42px] text-center hidden w-full lg2:block sm2:w-auto">
          <div className="flex items-center gap-1 justify-end pt-3">
            <SocialMediaIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
