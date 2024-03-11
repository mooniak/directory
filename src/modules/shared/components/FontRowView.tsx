"use client";
import { Separator } from "@modules/shared/components/ui/separator";
import { useState } from "react";
import { Button } from "@modules/shared/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FontRowView() {
  const buttonClass =
    "w-[135px] h-[37px] border bg-white hover:bg-black hover:text-white p-2 rounded-full";

  const data = [
    {
      fontName: "Abhaya Libre",
      version: "v1.600 ",
      lang: "Latin, Sinhala",
      owner: "Pushpananda Ekanayak",
      site: "Libre Font",
      fontFamily: "Abhaya Libre",
    },
    {
      fontName: "යාල්දේවි",
      version: "v1.600 ",
      lang: "Latin, Sinhala",
      owner: "Pushpananda Ekanayak",
      site: "Libre Font",
      fontFamily: '"Stick No Bills", sans-serif',
    },
    {
      fontName: "Stick No Bills",
      version: "v1.600 ",
      lang: "Latin, Sinhala",
      owner: "Pushpananda Ekanayak",
      site: "Libre Font",
      fontFamily: '"Stick No Bills", sans-serif',
    },
    {
      fontName: "යාල්දේවි",
      version: "v1.600 ",
      lang: "Latin, Sinhala",
      owner: "Pushpananda Ekanayak",
      site: "Libre Font",
      fontFamily: '"Stick No Bills", sans-serif',
    },
    {
      fontName: "Stick No Bills",
      version: "v1.600 ",
      lang: "Latin, Sinhala",
      owner: "Pushpananda Ekanayak",
      site: "Libre Font",
      fontFamily: '"Stick No Bills", sans-serif',
    },
  ];

  const [showSeparators, setShowSeparators] = useState(
    Array(data.length).fill(false),
  );

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
          <div>
            <div className="grid lg2:grid-cols-4 grid-cols-2 items-center lg2:gap-x-40  lg2:pt-20 pt-5">
              <div
                className={`lg2:col-start-1 lg2:col-span-1 text-left  items-center hidden lg2:block ${showSeparators[index] ? "-translate-y-3  duration-500" : "translate-y-3  duration-500"} `}
              >
                <div className="grid grid-cols-2  grid-rows-4 ">
                  <div className="col-span-2 h-10">
                    <span className="font-bold sm2:text-base2 text-50px">
                      {" "}
                      {font.fontName}
                    </span>{" "}
                    <br />
                    <span className="text-muted"> {font.version}</span>
                  </div>
                  <div className="col-span-1 h-10">
                    {font.lang}
                    <Separator />
                  </div>
                  <div className="col-span-1 h-10">
                    2 Styles <Separator />
                  </div>
                  <div className="col-span-2 h-10 ">
                    {font.owner} <Separator />
                  </div>
                  <div className="col-span-2 h-10">{font.site}</div>
                </div>
              </div>

              <div
                className={`lg2:col-start-2 lg2:col-end-5 l col-start-1 text-start col-span-2  ${showSeparators[index] ? "lg2:-translate-y-2  duration-500" : "lg2:translate-y-2  duration-500"}`}
                style={{
                  fontSize: "2vw",
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
              <Button variant="link">tap to see more</Button>
            </div>
          </div>

          <div
            className={`  hidden lg2:block ${showSeparators[index] ? " lg2:transition-opacity duration-700 ease-out opacity-100 " : "lg2:transition-opacity duration-700 ease-out opacity-0"}`}
          >
            <div>
              <Separator />

              <div className="grid grid-cols-8 mt-[20px] pb-[50px] gap-5">
                <Button
                  className={`${buttonClass} col-start-1`}
                  variant="ghost"
                >
                  Get the Font
                </Button>
                <Button
                  className={`${buttonClass} col-start-2`}
                  variant="ghost"
                >
                  Get the Font
                </Button>
                <div className="col-start-4 flex items-center gap-4">
                  <ArrowRight />
                  <Button className={`${buttonClass}  `} variant="ghost">
                    Test & See More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Separator
            className={`${showSeparators[index] ? "lg2:translate-y-5 duration-500" : "lg2:-translate-y-5  duration-500"}`}
          />
        </div>
      ))}
    </div>
  );
}
