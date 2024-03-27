"use client";

import { Header } from "@modules/app/Header";
import { Separator } from "@modules/shared/components/ui/separator";
import { SingleFontInfo } from "@modules/fonts/SingleFontInfo";
import { Slider } from "@modules/shared/components/ui/slider";
import { useState } from "react";
import { Button } from "@modules/shared/components/ui/button";
import { useParams } from "next/navigation";
import { WeightsAndStyles } from "@modules/fonts/WeightsAndStyles";
import { Footer } from "@modules/app/Footer";
import { Input } from "@app/modules/shared/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@modules/shared/components/ui/select";
import { data, fontWeights } from "@modules/fonts/data/fontData";

export default function Page() {
  const { fontname } = useParams();
  const decodedFontName = decodeURIComponent(String(fontname));
  const [isShowSlider, setIsShowSlider] = useState(false);
  const [value, setValue] = useState("400");
  const [isFontSize, setIsFontSize] = useState(200);
  const singleFontData = data.find((font) => font.fontName === decodedFontName);
  const [isInputName, setIsInputName] = useState<string | undefined>(
    singleFontData?.fontName,
  );
  const buttonClass =
    "w-[135px] h-[37px] border bg-white hover:bg-black hover:text-white p-2 rounded-full";

  return (
    <div className="max-xl2:container xl2:pl-[5%] xl2:pr-[5%]">
      <Header />
      <SingleFontInfo singleFontData={singleFontData} />
      <Separator />
      <div className="h-full xl2:container">
        <div className=" pt-10 pb-10 hidden md2:block">
          <div className="flex items-center">
            <span className="pr-[170px] flex items-center">
              Style :
              <div className="pl-2">
                <Select
                  onValueChange={(value) => {
                    setValue(value);
                  }}
                >
                  <SelectTrigger className="w-[170px]">
                    <SelectValue placeholder="Font Weight" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="300">Light</SelectItem>
                    <SelectItem value="400">Regular</SelectItem>
                    <SelectItem value="500"> Medium</SelectItem>
                    <SelectItem value="600"> SemiBold</SelectItem>
                    <SelectItem value="700"> Bold </SelectItem>
                    <SelectItem value="800"> ExtraBold</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </span>

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
                  defaultValue={[isFontSize ?? 200]}
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
            fontWeight: value,
            fontSize: isFontSize,
            fontFamily: singleFontData?.fontFamily,
          }}
        >
          <Input
            value={isInputName ?? singleFontData?.fontName}
            className="bg-transparent h-auto border-0 t focus-visible:ring-0 focus-visible:ring-offset-0 "
            style={{
              outlineColor: "transparent",
              outline: "none",
              fontSize: isFontSize,
              fontFamily: singleFontData?.fontFamily,
            }}
            onChange={(event: {
              target: { value: React.SetStateAction<string> };
            }) => {
              setIsInputName(event.target.value as string);
            }}
            onBlur={() => {
              if (isInputName === "") {
                setIsInputName(singleFontData?.fontName);
              }
            }}
          />
        </span>

        <span
          className="md2:hidden block font-normal  pt-10"
          style={{
            fontSize: "clamp(40px, 15vw, 330px)",
            fontFamily: singleFontData?.fontFamily,
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
      <WeightsAndStyles
        fontWeights={fontWeights}
        fontFamily={singleFontData?.fontFamily || "inherit"}
        isInputName={isInputName}
        fontName={singleFontData?.fontName}
      />
      <Separator className="max-xl2:container" />{" "}
      <div className="grid lg2:grid-cols-2 lg2:gap-20 pt-16 pb-16 xl2:container ">
        <div>
          <div className="sm2:pb-16 pb-2">
            <span className="font-bold text-22px ">Details </span>
          </div>

          <Separator className="sm2:block hidden" />

          <div className="flex items-center gap-9 pt-8 pb-8">
            <span className="font-bold">Font Name &nbsp;&nbsp;</span>
            <span>{singleFontData?.fontName}</span>
          </div>

          <Separator />

          <div className="flex items-center gap-9 pt-8 pb-8">
            <span className="font-bold">Designers &nbsp;&nbsp;&nbsp;</span>
            <span>{singleFontData?.owner}</span>
          </div>

          <Separator />

          <div className="flex items-center gap-9 pt-8 pb-8">
            <span className="font-bold">
              Scripts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
            </span>
            <span>{singleFontData?.lang}</span>
          </div>

          <Separator />

          <div className="flex items-center gap-9 pt-8 pb-8">
            <span className="font-bold">
              License &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>OFL</span>
          </div>

          <Separator />
        </div>

        <div>
          <div className="pb-16 lg2:pt-0 pt-10">
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
      <div className="pt-16 xl2:container">
        <span className="font-bold text-[20px]">Glyphs</span>

        <div
          className="w-auto pt-16  lg2:w-[50%]"
          style={{
            fontFamily: singleFontData?.fontFamily,
          }}
        >
          <span
            style={{
              fontSize: "clamp(40px, 3vw, 60px)",
            }}
          >
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
          </span>
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
