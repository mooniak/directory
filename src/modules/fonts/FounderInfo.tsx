"use client";
import { Separator } from "@modules/shared/components/ui/separator";
import Link from "next/link";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@modules/shared/components/ui/button";
import { founders } from "@modules/about/data/foundersData";
import { SocialMediaIcon } from "@modules/shared/components/SocialMediaIcon";

export function FounderInfo() {
  const [descriptionShow, setDescriptionShow] = useState(Array(3).fill(false));
  // Const iconClassName = "w-[19.81px] h-[19.81px]";

  const toggleDescription = (index: number) => {
    setDescriptionShow((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      {founders.map((founder, index) => (
        <div key={founder.firstName} className="xl2:container">
          <Separator className="bg-border" />
          <div className="grid sm2:grid-cols-2 lg2:grid-cols-4  grid-cols-2 pt-10 sm2:pb-10 gap-5 ">
            <div className="hidden sm2:block">
              <img
                src={founder.img}
                alt="about_book"
                className="sm2:w-auto sm2:h-auto w-[193px] h-[193px]"
              />
            </div>
            <div className="font-bold sm2:pr-10 pb-10 sm2:w-[80%]">
              <span className="text-[20px] ">{founder.firstName}</span>
              <br />
              <span className="text-[20px] ">{founder.lastName}</span>
              <div className="pt-5 pb-5">
                <Separator className="space-y-5" />
              </div>
              <div className="hidden sm2:block">
                <Link href="/public" className="text-[14px]">
                  LinkedIn
                </Link>
                <br />
                <Link href="/public" className="text-[14px] ">
                  Instagram
                </Link>
              </div>

              <div className="sm2:hidden block">
                <SocialMediaIcon />
              </div>
            </div>
            <div className="sm2:hidden block">
              <img
                src={founder.img}
                alt="about_book"
                className="w-auto h-auto"
              />
              <div
                className="block sm2:hidden text-[14px] gap-3 pt-2"
                onClick={() => {
                  toggleDescription(index);
                }}
              >
                {!descriptionShow[index] && (
                  <div className="flex items-center">
                    <ArrowDown className="w-4 h-4" />
                    <Button variant="link" className="font-bold">
                      Tap to See More
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div
              className={`col-span-2 ${
                descriptionShow[index] ? "" : "sm2:block hidden"
              } text-[20px] w-[90%]`}
            >
              <p>{founder.description}</p>
            </div>
            <div />
            <div
              className="block sm2:hidden text-[14px] gap-3 pt-2 pb-5"
              onClick={() => {
                toggleDescription(index);
              }}
            >
              {descriptionShow[index] && (
                <div className="flex items-center  col-start-1">
                  <ArrowUp className="w-4 h-4" />
                  <Button variant="link" className="font-bold">
                    Tap to collapse
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
