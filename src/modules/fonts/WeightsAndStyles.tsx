import { type FontWeightsType } from "@modules/shared/type";
import { Separator } from "@modules/shared/components/ui/separator";

type WeightsAndStylesProps = {
  readonly fontWeights: FontWeightsType[];
  readonly fontFamily?: String;
  readonly isInputName?: String;
  readonly fontName?: String;
};

export function WeightsAndStyles({
  fontWeights,
  fontFamily,
  isInputName,
  fontName,
}: WeightsAndStylesProps) {
  return (
    <div className="pt-10 xl2:container">
      <div className=" sm2:pb-0 pb-10">
        <span className="font-bold ">Weights & Styles </span>
      </div>
      {fontWeights?.map((font) => (
        <div key={font.size} className="sm2:pt-10 pt-1">
          <span
            className="hidden sm2:block"
            style={{
              fontSize: 40,
              fontFamily: String(fontFamily),
              fontWeight: font.size,
            }}
          >
            {isInputName !== fontName
              ? isInputName
              : "Jazzed foxes quickly vexed my big brown dog"}
          </span>
          <span className="md2:hidden block font-bold text-[15px] ">
            {font.size}
          </span>

          <span
            className="sm2:hidden block"
            style={{
              fontSize: 40,
              fontFamily: String(fontFamily),
              fontWeight: font.size,
            }}
          >
            {font.name}
          </span>
          <br />
          <div className="flex items-center gap-8 font-bold text-[15px] pb-8 pt-5 hidden md2:block">
            <span>{font.size}</span> &nbsp;&nbsp;&nbsp;
            <span>{font.className}</span>
          </div>
          <Separator className="bg-border" />
        </div>
      ))}
    </div>
  );
}
