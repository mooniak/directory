import { cn } from "@app/lib/utils";
import { Separator } from "@modules/shared/components/ui/separator";
import Link from "next/link";
import { SocialMediaIcon } from "@modules/shared/components/SocialMediaIcon";

type sidebarProps = {
  readonly isSidebarOpen: boolean;
  readonly className: string;
};
export function Sidebar({ isSidebarOpen, className }: sidebarProps) {
  const navButtonClassName = "cursor-pointer hover:underline  ";

  return (
    <div
      className={`${isSidebarOpen ? " translate-x-0 duration-500 " : "-translate-x-full duration-500"}  w-screen pr-16 block sm2:hidden  `}
    >
      {isSidebarOpen && (
        <div>
          <Separator />
          <div
            className={cn(
              `bg-white h-screen pt-10 grid grid-rows-8 space-y-3 text-[30px] hidden`,
              isSidebarOpen ? "w-full" : "-translate-x-full duration-500",
              className,
            )}
          >
            <div>
              <Link className={navButtonClassName} href="/public">
                Fonts
              </Link>
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
            <div className="pt-10">
              <Separator />
            </div>
            <SocialMediaIcon />
          </div>
        </div>
      )}
    </div>
  );
}
