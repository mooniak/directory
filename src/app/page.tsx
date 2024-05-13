"use client";
import { Separator } from "@modules/shared/components/ui/separator";
import { HomeHeader } from "@modules/home/HomeHeader";
import { ArrowRight, MoveDown } from "lucide-react";
import { FontRowView } from "@modules/home/FontRowView";
import { Footer } from "@modules/app/Footer";
import { HomeSvg } from "@modules/home/HomeSvg";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="max-xl2:container xl2:pl-[5%] xl2:pr-[5%]">
      <div className="text-center ">
        <h1
          className="font-bold leading-none font-SpaceGrotesk  text-center overflow-hidden sm2:ml-[-20px] ml-[-5px] text-13vw cursor-pointer"
          style={{ fontSize: "clamp(14px, 20.5vw, 330px)" }}
          onClick={() => {
            router.replace(`/`);
          }}
        >
          mooniak
        </h1>

        <Separator className="xl2:bg-border sm2:bg-black" />

        <div className="grid md2:grid-cols-2 gap-5 pt-10 pb-10 justify-center items-center xl2:container">
          <div className="hidden md2:block w-full">
            <HomeSvg className="w-suto h-auto mr-[30px]" />
          </div>

          <div className="text-left w-[100%] h-fit ">
            <span className=" text-[20px] lg2:text-28px">
              We are the global leader in Sinhala typography, advancing Lankan
              visual identity with multilingual fonts and design that respect
              culture and freedom.
            </span>

            <br />

            <div className=" hidden sm2:block">
              <span className=" text-[20px] lg2:text-[28px ]cursor-pointer hover:underline  hidden xl2:block">
                <Link className="flex items-center" href="/about/">
                  About us &nbsp;
                  <ArrowRight />
                </Link>
              </span>
            </div>
          </div>
        </div>
        <Separator className="xl2:bg-border sm2:bg-black" />
        <HomeHeader />
        <Separator className="xl2:bg-border sm2:bg-black" />
        <div className="flex pt-10 pb-10 items-center xl2:container">
          <div className="sm2:block flex-1 font-bold text-left text-[18px]  ">
            <span className="flex sm2:justify-center text-start sm2:text-[36px] text-[18px] leading-[2.723rem]">
              Discover <br className="hide sm2:block" /> Fonts
            </span>
          </div>
          <div className="flex items-center justify-center w-10 ">
            <MoveDown size={30} strokeWidth={3} />
          </div>
          <div className="flex-1 text-left leading-38 w-full pl-5">
            <div className="hidden sm2:block">
              <HomeSvg className="w-suto h-auto ml-[30px]" />
            </div>
          </div>
        </div>
        <Separator className="xl2:bg-border sm2:bg-black" id="ontRowView" />
        <FontRowView />
        <Footer />
      </div>
    </div>
  );
}
