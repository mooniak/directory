import { Facebook, Github, Instagram } from "lucide-react";

const navButtonClassName = "cursor-pointer hover:underline ";
const iconClassName = "w-[19.81px] h-[19.81px] ";
export function HomeHeader() {
  return (
    <div className="grid lg2:grid-cols-12 lg:grid-cols-12 sm2:grid-cols-2 pt-2 pb-2 ">
      <div className="font-bold sm2:gap-[20px] sm2:flex text-left sm2:items-center p-2 space-y-2  sm2:space-y-0 sm2:p-0 sm2:col-start-1 sm2:col-end-6 col-start-2 col-end-3 row-span-3 text-lg sm2:text-sm2 text-xl">
        <div className={navButtonClassName}>About</div>
        <div className={navButtonClassName}>Tools</div>
        <div className={navButtonClassName}>Community</div>
        <div className={navButtonClassName}>Contact</div>
      </div>

      <div className="sm2:col-start-7 sm2:col-end-8 col-start-1 col-end-2 row-span-3">
        <div className="flex items-center gap-1 justify-start ">
          <div className="rounded-full p-2 hover:bg-muted cursor-pointer">
            <Instagram color="#000000" className={iconClassName} />
          </div>
          <div className="rounded-full p-2 hover:bg-muted cursor-pointer">
            <Github color="#000000" className={iconClassName} />
          </div>
          <div className="rounded-full p-2 hover:bg-muted cursor-pointer">
            <Facebook color="#000000" className={iconClassName} />
          </div>
        </div>
      </div>
    </div>
  );
}
