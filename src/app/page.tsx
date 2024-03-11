import { Separator } from "@app/modules/shared/components/ui/separator";
import { HomeHeader } from "@modules/shared/components/HomeHeader";
import { ArrowRight, MoveDown } from "lucide-react";
import { FontRowView } from "@modules/shared/components/FontRowView";
import { Footer } from "@modules/shared/components/Footer";
import { HomeSvg } from "@modules/shared/components/HomeSvg";
export default function Home() {
  return (
    <div>
      <div className="text-center ">
        <span className="font-bold text-13vw xxl:text-321px">mooniak</span>
        <Separator />
        <div className="grid sm2:grid-cols-2 gap-16 pt-10 pb-10 justify-center items-center">
          <div className="hidden sm2:block w-full">
            <HomeSvg className="w-suto h-auto" />
          </div>
          <div className="text-left w-full h-fit">
            <span className=" text-xl1 ">
              We are the global leader in Sinhala typography, advancing Lankan
              visual identity with multilingual fonts and design that respect
              culture and freedom
            </span>
            <br />
            <div className=" hidden sm2:block">
              <span className="flex items-center xl2:text-xl1  hover:underline">
                About us &nbsp;
                <ArrowRight />
              </span>
            </div>
          </div>
        </div>
        <Separator />
        <HomeHeader />
        <Separator />
        <div className="flex pt-10 pb-10 items-center ">
          <div className="sm2:block flex-1 font-bold text-left text-base2  ">
            <span className="flex justify-center text-start">
              Discover <br className="hide sm2:block" /> Fonts
            </span>
          </div>
          <div className="flex items-center justify-center w-10 ">
            <MoveDown size={30} strokeWidth={3} />
          </div>
          <div className="flex-1 text-left leading-38 w-full pl-5">
            <div className="hidden sm2:block">
              <HomeSvg className="w-suto h-auto" />
            </div>
          </div>
        </div>
        <Separator />
        <FontRowView />
        <Footer />
      </div>
    </div>
  );
}
