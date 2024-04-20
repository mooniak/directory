"use client";
import { Separator } from "@modules/shared/components/ui/separator";
import { useState } from "react";
import { Button } from "@modules/shared/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { data } from "@modules/fonts/data/fontData";

export function FontRowView() {
  const buttonClass =
    "w-[135px] h-[37px] border bg-white hover:bg-black hover:text-white p-2 rounded-full";

  const [showSeparators, setShowSeparators] = useState(
    Array(data.length).fill(false),
  );

  const router = useRouter();

  return (
    <div>
      {data.map((font, index) => (
        <div
          key={font.fontName}
          onMouseEnter={() => {
            setShowSeparators((prevState) => {
              const newState = [...prevState];
              newState[index] = true;
              return newState;
            });
          }}
          onMouseLeave={() => {
            setShowSeparators((prevState) => {
              const newState = [...prevState];
              newState[index] = false;
              return newState;
            });
          }}
        >
          <div className="xl2:container">
            <div className="grid lg2:grid-cols-6 grid-cols-2 items-center w-fulll lg2:pt-10 pt-5">
              <div
                className={`lg2:col-start-1 lg2:col-span-1 text-left  items-center hidden lg2:block ${showSeparators[index] ? "-translate-y-2  duration-500" : "translate-y-2  duration-500"} `}
              >
                <div className="grid grid-cols-2  grid-rows-4 lg2:w-[270px] xl2:w-[366px]">
                  <div className="col-span-2  h-10 ">
                    <span className="font-bold sm2:text-18px text-50px ">
                      {font.fontName}
                    </span>
                    <br />
                    <span className="text-gray-500 text-sm ">
                      {font.version}
                      <Separator />
                    </span>
                  </div>

                  <div className="col-span-1 mt-3">
                    {font.lang}
                    <Separator />
                  </div>
                  <div className="col-span-1 h-6 mt-3">
                    2 Styles
                    <Separator />
                  </div>
                  <div className="col-span-2 mt-0.5">
                    {font.owner}, Mooniak <Separator />
                  </div>
                  <div className="col-span-2 mt-[-5px]">{font.site}</div>
                </div>
              </div>

              <div
                className={`lg2:col-start-3  lg2:col-end-7 l col-start-1 text-start col-span-2 ${showSeparators[index] ? "lg2:-translate-y-2 duration-500" : "lg2:translate-y-2 duration-500"}`}
                style={{
                  fontFamily: font.fontFamily || "inherit",
                  fontSize: "clamp(50px, 6.763vw, 125px)",
                }}
              >
                {font.fontName}
              </div>
            </div>
            <div className=" lg2:hidden grid grid-cols-2 text-start items-center pt-2">
              <div className="text-start flex items-center gap-4">
                <span>අ &nbsp; A</span>
                <Separator orientation="vertical" className="h-4" />
                <span>2 Styles </span>
              </div>
              <Button
                variant="link"
                onClick={() => {
                  router.push(`/fonts/${font.fontName}/`);
                }}
              >
                tap to see more
              </Button>
            </div>
          </div>

          <div
            className={` xl2:container hidden lg2:block ${showSeparators[index] ? " lg2:transition-opacity duration-700 ease-out opacity-100 " : "lg2:transition-opacity duration-700 ease-out opacity-0"}`}
          >
            <div>
              <Separator />

              <div className="flex mt-[20px] pb-[30px] gap-5">
                <div className="gap-5 flex">
                  <Button className={`${buttonClass} `} variant="ghost">
                    Get the Font
                  </Button>
                  <Button className={`${buttonClass} `} variant="ghost">
                    Dev Version
                  </Button>
                </div>

                <div className="flex  items-center gap-2 ml-[150px] ">
                  <ArrowRight />
                  <Button
                    className={`${buttonClass}  `}
                    variant="ghost"
                    onClick={() => {
                      router.push(`/fonts/${font.fontName}/`);
                    }}
                  >
                    Test & See More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Separator
            className={`${showSeparators[index] ? "lg2:translate-y-5 duration-500" : "lg2:-translate-y-5  duration-500"} xl2:bg-border sm2:bg-black`}
          />
        </div>
      ))}
    </div>
  );
}
