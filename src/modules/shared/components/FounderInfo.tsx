"use client";
import { Separator } from "@modules/shared/components/ui/separator";
import Link from "next/link";
import { ArrowDown, ArrowUp, Facebook, Github, Instagram } from "lucide-react";
import { useState } from "react";
import { Button } from "@modules/shared/components/ui/button";

export function FounderInfo() {
  const [descriptionShow, setDescriptionShow] = useState(Array(3).fill(false));
  const iconClassName = "w-[19.81px] h-[19.81px]";

  const toggleDescription = (index: number) => {
    setDescriptionShow((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const founders = [
    {
      name: "Pathum Egodawatta",
      img: "/founder_pathum.png",
      description:
        "Pathum is a typeface designer, font engineer and a researcher of typography. He specializes in type and typography of South Asian scripts with a focus on Sinhala and Tamil scripts and multilingual communications. Pathum received his MA in Typeface Design from the University of Reading with a distinction in 2016 and a BA in Graphic Design from the Academy of Design (AOD), Colombo with a distinction in 2013. He is currently based in Colombo, Sri Lanka leading Mooniak – a multidisciplinary design, art direction and technology practice with an emphasis on type. Pathum and the team provides consulting on South Indian script related localisation, type design, typography and multilingual communication. He is also the co-founder of Akuru Collective and Curator at W.A. Silva Museum & Printing Press.",
    },
    {
      name: "Kosala Senevirathna",
      img: "/founder_pathum.png",
      description:
        "Kosala is a self-taught Graphic & Type Designer who studied Interior Architecture prior to shifting his professional practice into the field of communication design. Ever since, he gained experience as a Type Designer, Graphic Designer, Illustration Artist, Editorial and Layout Designer and as an Art Director for 3 years and has extended his services as a freelance designer for more than 7 years. Kosala has a keen interest in multilingual / multiscript type and typographic design and has designed two original typefaces for Sinhala and Tamil while contributing to many more projects related to type and typographic design in Sri Lanka.",
    },
    {
      name: "Rajitha Manamperi",
      img: "/founder_pathum.png",
      description:
        "Self taught Graphic and Typeface Designer who is interested in Photography, Videography and other visual arts. Now working with Mooniak with the belief in design as a powerful tool of changing the world. and find Mooniak as a socially effective design collaboration. Involves in Concept Development, Branding and Visual Development aspects with Product Design. Worked as the Branding Manager for the Scribble and in the good market.",
    },
  ];

  return (
    <div>
      {founders.map((founder, index) => (
        <div key={founder.name} className="xl2:container">
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
              <span className="text-[20px] ">{founder.name}</span>
              <div className="pt-5 pb-5">
                <Separator className="space-y-5" />
              </div>
              <div className="hidden sm2:block">
                <Link href="/" className="text-[14px]">
                  LinkedIn
                </Link>
                <br />
                <Link href="/" className="text-[14px] ">
                  Instagram
                </Link>
              </div>

              <div className="sm2:hidden block">
                <div className="flex items-center gap-1 md:justify-end">
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
