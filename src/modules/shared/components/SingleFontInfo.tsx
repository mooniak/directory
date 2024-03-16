import { Button } from "@modules/shared/components/ui/button";
import { Separator } from "@modules/shared/components/ui/separator";
import { useRouter } from "next/navigation";
import { type FontDatatype } from "@modules/shared/type";
import { ArrowLeft } from "lucide-react";

type singleFontInfoProps = {
  readonly singleFontData?: FontDatatype;
};
export function SingleFontInfo({ singleFontData }: singleFontInfoProps) {
  const buttonClass =
    "w-[135px] h-[37px] border bg-white hover:bg-black hover:text-white p-2 rounded-full";
  const router = useRouter();

  return (
    <div className="xl2:container">
      <div className="sm2:h-[124px] h-[66px] grid sm2:grid-cols-6  transition-transform ">
        <div className="col-start-1 flex items-center ">
          <div className="flex-1" />
          <div className="justify-center hidden lg2:block">
            <Button
              className={`${buttonClass}  `}
              variant="ghost"
              onClick={() => {
                router.push(`/`);
                router.refresh();
              }}
            >
              Back to All Fonts
            </Button>
          </div>{" "}
          <div className=" text-center justify-end  lg2:hidden block">
            <Button
              variant="ghost"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none"
            >
              <ArrowLeft color="#000000" />
            </Button>
          </div>
          <div className="flex-1" />
          <Separator
            orientation="vertical"
            className="sm2:h-[124px] h-[66px]"
          />
        </div>

        <div className="flex sm2:items-center col-start-2 col-end-4 sm2:justify-center ">
          <div className="pl-2">
            <span className="font-bold text-sm2 ">Typeface :</span>
            <br />
            <span className="font-bold text-sm2">
              {singleFontData?.fontName}
            </span>
          </div>
          <div className="hidden lg2:block">
            <Button className={`${buttonClass} ml-8`} variant="ghost">
              Get the Font
            </Button>
          </div>
        </div>
        <div className="lg2:col-start-4 lg2:col-end-5 sm2:col-start-4 sm2:col-end-6 col-start-6 col-end-7 hidden sm2:block pt-8">
          <span className="font-bold text-sm2 ">Designers</span>
          <br />
          <span>Mooniak</span>
          <br />
          <span>{singleFontData?.owner}</span>
        </div>
        <div className="lg2:col-start-5 sm2:col-start-6 col-start-4 col-end-7 sm2:pt-8">
          <span className="font-bold text-sm2">Scripts</span>
          <br />
          <span>{singleFontData?.lang}</span>
        </div>
      </div>
    </div>
  );
}
