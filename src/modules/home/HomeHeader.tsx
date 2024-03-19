"use client";
import { SocialMediaIcon } from "@modules/shared/components/SocialMediaIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navButtonClassName = "cursor-pointer hover:underline ";
export function HomeHeader() {
  const router = useRouter();

  return (
    <div className="grid lg2:grid-cols-12 lg:grid-cols-12 sm2:grid-cols-2 pt-2 pb-2 xl2:container">
      <div className="font-bold sm2:gap-[20px] sm2:flex text-left sm2:items-center p-2 space-y-2  sm2:space-y-0 sm2:p-0 sm2:col-start-1 sm2:col-end-6 col-start-2 col-end-3 row-span-3 text-lg sm2:text-sm2 text-xl">
        <div>
          <div
            className={navButtonClassName}
            onClick={() => {
              router.replace(`/#ontRowView`);
            }}
          >
            Fonts
          </div>
        </div>
        <div>
          <Link className={navButtonClassName} href="/about/">
            About
          </Link>
        </div>

        <div>
          <Link className={navButtonClassName} href="/public">
            Tools
          </Link>
        </div>

        <div>
          <Link className={navButtonClassName} href="/community">
            Community
          </Link>
        </div>

        <div>
          <Link href="/contact/" className={navButtonClassName}>
            Contact
          </Link>
        </div>
      </div>

      <div className="sm2:col-start-7 sm2:col-end-8 col-start-1 col-end-2 row-span-3">
        <div className="flex items-center gap-1 justify-start ">
          <SocialMediaIcon />
        </div>
      </div>
    </div>
  );
}
