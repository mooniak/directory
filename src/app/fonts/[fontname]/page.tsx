"use client";

import { Header } from "@modules/shared/components/Header";
import { Separator } from "@modules/shared/components/ui/separator";
import { SingleFontInfo } from "@modules/shared/components/SingleFontInfo";
import { Slider } from "@modules/shared/components/ui/slider";
import { useState } from "react";
import { Button } from "@modules/shared/components/ui/button";
import { useParams } from "next/navigation";
import { WeightsAndStyles } from "@modules/shared/components/WeightsAndStyles";
import { Footer } from "@modules/shared/components/Footer";
import { Input } from "@app/modules/shared/components/ui/input";

const data = [
  {
    fontName: "Abhaya Libre",
    version: "v1.600 ",
    lang: "Latin, Sinhala",
    owner: "Pushpananda Ekanayak",
    site: "Libre Font",
    fontFamily: "AbhayaLibre",
  },
  {
    fontName: "යාල්දේවි",
    version: "v1.600 ",
    lang: "Latin, Sinhala",
    owner: "Pushpananda Ekanayak",
    site: "Libre Font",
    fontFamily: '"Yaldevi", sans-serif;',
  },
  {
    fontName: "Stick No Bills",
    version: "v1.600 ",
    lang: "Latin, Sinhala",
    owner: "Pushpananda Ekanayak",
    site: "Libre Font",
    fontFamily: '"Stick No Bills", "sans-serif"',
  },
  {
    fontName: "Whisper",
    version: "v1.600 ",
    lang: "Latin, Sinhala",
    owner: "Pushpananda Ekanayak",
    site: "Libre Font",
    fontFamily: '"Whisper", cursive',
  },
  {
    fontName: "සයලම",
    version: "v1.600 ",
    lang: "Latin, Sinhala",
    owner: "Pushpananda Ekanayak",
    site: "Libre Font",
    fontFamily: '"Noto Serif Sinhala", serif;',
  },
  {
    fontName: "Madimi One",
    version: "v1.600 ",
    lang: "Latin, Sinhala",
    owner: "Pushpananda Ekanayak",
    site: "Libre Font",
    fontFamily: '"Madimi One", sans-serif;',
  },
  {
    fontName: "Caveat",
    version: "v1.600 ",
    lang: "Latin, Sinhala",
    owner: "Pushpananda Ekanayak",
    site: "Libre Font",
    fontFamily: '"Caveat", cursive;',
  },
  {
    fontName: "Mansalva",
    version: "v1.600 ",
    lang: "Latin, Sinhala",
    owner: "Pushpananda Ekanayak",
    site: "Libre Font",
    fontFamily: '"Mansalva", sans-serif;',
  },
];

const fontWeights = [
  {
    className: "extralight",
    size: "200",
    name: "extralight",
  },
  {
    className: "light",
    size: "300",
    name: "light",
  },
  {
    className: "normal",
    size: "400",
    name: "normal",
  },
  {
    className: "font-medium",
    size: "500",
    name: "medium",
  },
  {
    className: "semibold",
    size: "600",
    name: "semibold",
  },
  {
    className: "bold",
    size: "700",
    name: "bold",
  },
];
export default function page() {
  const { fontname } = useParams();
  const decodedFontName = decodeURIComponent(String(fontname));
  const [isShowSlider, setIsShowSlider] = useState(false);
  const [isFontSize, setIsFontSize] = useState(200);
  const singleFontData = data.find((font) => font.fontName === decodedFontName);
  const [isInputName, setIsInputName] = useState<string | undefined>(
    singleFontData?.fontName,
  );
  const buttonClass =
    "w-[135px] h-[37px] border bg-white hover:bg-black hover:text-white p-2 rounded-full";

  return (
    <div>
      <Header />
      <SingleFontInfo singleFontData={singleFontData} />
      <Separator />
      <div className="h-full ">
        <div className=" pt-10 pb-10 hidden md2:block">
          <div className="flex items-center">
            <span className="pr-[170px]">Style : Regular</span>
            <Button
              variant="ghost"
              onClick={() => {
                setIsShowSlider((prevState) => !prevState);
              }}
            >
              Size : {isFontSize}px
            </Button>
            <div className="w-[290px] pl-5">
              {isShowSlider && (
                <Slider
                  defaultValue={[190]}
                  max={200}
                  min={40}
                  step={1}
                  onValueChange={(size) => {
                    setIsFontSize(Number(size));
                  }}
                  onBlur={() => {
                    setIsShowSlider(false);
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <span
          className="font-normal pt-10 hidden md2:block"
          style={{
            fontSize: isFontSize,
            fontFamily: singleFontData?.fontFamily || "inherit",
          }}
        >
          <Input
            value={isInputName ?? singleFontData?.fontName}
            className="bg-transparent h-auto border-0 t focus-visible:ring-0 focus-visible:ring-offset-0 "
            style={{
              outlineColor: "transparent",
              outline: "none",
              fontSize: isFontSize,
              fontFamily: singleFontData?.fontFamily || "inherit",
            }}
            onChange={(event: {
              target: { value: React.SetStateAction<string> };
            }) => {
              setIsInputName(event.target.value as string);
            }}
            onBlur={() => {
              setIsInputName(singleFontData?.fontName);
            }}
          />
        </span>
        <span
          className="md2:hidden block font-normal  pt-10"
          style={{
            fontSize: "clamp(40px, 15vw, 330px)",
            fontFamily: singleFontData?.fontFamily || "inherit",
          }}
        >
          {singleFontData?.fontName}{" "}
        </span>
      </div>
      <div className="lg2:hidden block pb-10 ">
        <Button className={`${buttonClass} `} variant="ghost">
          Get the Font
        </Button>
      </div>
      <Separator />
      <WeightsAndStyles fontWeights={fontWeights} />
      <div className="grid lg2:grid-cols-2 lg2:gap-20 pt-16 pb-16 ">
        <div>
          <div className="pb-16">
            <span className="font-bold text-22px "> Details</span>
          </div>
          <Separator />
          <div className="flex items-center gap-9 pt-8 pb-8">
            <span className="font-bold">Font Name</span>
            <span>{singleFontData?.fontName}</span>
          </div>
          <Separator />

          <div className="flex items-center gap-9 pt-8 pb-8">
            <span className="font-bold">Designers</span>
            <span>{singleFontData?.owner}</span>
          </div>
          <Separator />

          <div className="flex items-center gap-9 pt-8 pb-8">
            <span className="font-bold">Scripts</span>
            <span>{singleFontData?.lang}</span>
          </div>
          <Separator />

          <div className="flex items-center gap-9 pt-8 pb-8">
            <span className="font-bold">License</span>
            <span>OFL</span>
          </div>
          <Separator />
        </div>
        <div>
          <div className="pb-16">
            <span className="font-bold text-22px "> About</span>
          </div>
          <p className="w-[90%] text-20px">
            With a global view and local roots, Mooniak specializes in producing
            multi-script fonts and typography for Lankan audiences in Sinhala,
            Tamil, and English languages. In addition to incubating and
            releasing open-source fonts, we also provide custom typeface design,
            logotype design, lettering, and editorial design services for select
            clients. Almost all of Mooniak&apos;s work is published under
            Libre/Open source licenses. We take pride in building a thriving
            community of letter form lovers in Sri Lanka, and with a small team
            of full-timers and collaborators from all around the world, we are
            advancing the Lankan visual identity.
          </p>
        </div>
      </div>
      <Separator />
      <div className="pt-16">
        <span className="font-bold text-22px">Glyphs</span>
        <div className="w-auto pt-16 font-AbhayaLibre lg2:w-[50%]">
          <span
            style={{
              fontSize: "clamp(40px, 3vw, 60px)",
            }}
          >
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
          </span>{" "}
          <br />
          <span
            style={{
              fontSize: "clamp(40px, 3vw, 60px)",
            }}
          >
            a b c d e f g h i j k l m n o p q r s t u v w x y z
          </span>
          <br />
          <span
            style={{
              fontSize: "clamp(40px, 3vw, 60px)",
            }}
          >
            0 1 2 3 4 5 6 7 8 9
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
