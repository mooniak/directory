import { Facebook, Github, Instagram } from "lucide-react";
import { Separator } from "@modules/shared/components/ui/separator";

export function Footer() {
  const iconClassName = "w-[19.81px] h-[19.81px]";
  return (
    <div>
      <div className="text-hd3 pb-10">෴</div>
      <Separator />
      <div className="grid lg2:grid-rows-3 grid-rows-4 lg2:grid-cols-12 pt-5 grid-cols-8">
        <div className="lg2:col-start-1 lg2:col-end-5 row-start-1 lg2:row-start-2 text-3xl font-bold text-start col-start-1 col-end-2 text-30px">
          Mooniak
        </div>

        <div className="row-span-3 grid grid-rows-3 md:grid-cols-6 md:col-start-7 md:col-end-9 lg2:col-start-8 gap-4 lg2:col-end-10 sm2:col-start-5 sm2:col-end-7  grid-cols-6 col-start-6 col-end-9 text-start font-bold text-sm">
          <div className="col-span-1 md:col-start-1  col-start-1 col-end-3  cursor-pointer hover:text-blue-700 mt-2">
            Fonts
          </div>
          <div className="col-span-1 cursor-pointer hover:text-blue-700 mt-2">
            Community
          </div>
          <div className="col-span-1 md:col-start-1 col-start-1 col-end-3  cursor-pointer hover:text-blue-700 mt-2">
            About
          </div>
          <div className="col-span-1 cursor-pointer hover:text-blue-700 mt-2">
            Contact
          </div>
          <div className="col-span-1 md:col-start-1 col-start-1 col-end-3  cursor-pointer hover:text-blue-700 mt-2">
            Tools
          </div>
        </div>

        <div className="md:col-start-10 md:col-end-13 md:row-start-2 sm2:col-start-5 lg2:col-start-12 lg2:col-end-13 lg2:row-start-2 sm2:col-end-7 md:row-end-3 text-end  col-start-6 col-end-9 ">
          <div className="border border-black h-0  lg2:hidden block" />
          <div className="flex items-center gap-1 md:justify-end">
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
