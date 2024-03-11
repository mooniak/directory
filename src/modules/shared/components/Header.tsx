import { ArrowLeft, Facebook, Github, Instagram } from "lucide-react";
import { Button } from "@modules/shared/components/ui/button";

export function Header() {
  const navButtonClassName = "cursor-pointer hover:text-blue-700 ";
  const iconClassName = "w-[19.81px] h-[19.81px]";

  return (
    <div className="w-full border-b border-black h-[60px]">
      <div className="grid grid-cols-12 gap-4  h-[42px] items-center">
        <div className="col-start-1 col-end-2 w-[137px] h-[42px] text-center text-3xl pt-2 font-bold">
          Mooniak
        </div>

        <div className="col-start-12 col-end-13  col-span-1 bg-white h-[42px] text-center justify-end pt-3 flex items-center md:hidden">
          <Button
            variant="ghost"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none"
          >
            <ArrowLeft color="#000000" />
          </Button>
        </div>
        <div className="col-start-4 col-end-10 col-span-1 bg-white h-[42px] text-center hidden w-full md:block md:w-auto">
          <div className="gap-[40px] flex items-center  justify-end pt-4 font-bold ">
            <span className={navButtonClassName}>Fonts</span>
            <span className={navButtonClassName}>About</span>
            <span className={navButtonClassName}>Tools</span>
            <span className={navButtonClassName}>Community</span>
            <span className={navButtonClassName}>Contact</span>
          </div>
        </div>
        <div className="col-start-12 col-end-13  col-span-1 bg-white h-[42px] text-center hidden w-full md:block md:w-auto">
          <div className="flex items-center gap-1 justify-end pt-3">
            <div className="rounded-full p-2 hover:bg-muted">
              <Instagram color="#000000" className={iconClassName} />
            </div>
            <div className="rounded-full p-2 hover:bg-muted">
              <Github color="#000000" className={iconClassName} />
            </div>
            <div className="rounded-full p-2 hover:bg-muted">
              <Facebook color="#000000" className={iconClassName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
