import { type FontWeightsType } from "@modules/shared/type";
import { Separator } from "@modules/shared/components/ui/separator";

type WeightsAndStylesProps = {
  readonly fontWeights: FontWeightsType[];
};

export function WeightsAndStyles({ fontWeights }: WeightsAndStylesProps) {
  return (
    <div className="pt-10 xl2:container">
      <span className="font-bold">Weights & Styles </span>
      {fontWeights?.map((font) => (
        <div key={font.size} className="pt-10">
          <span
            className="hidden sm2:block"
            style={{
              fontSize: 40,
              fontFamily: '"Yaldevi", sans-serif',
              fontWeight: font.size,
            }}
          >
            Jazzed foxes quickly vexed my big brown dog
          </span>
          <span className="md2:hidden block font-bold text-sm2 ">
            {font.size}
          </span>

          <span
            className="sm2:hidden block"
            style={{
              fontSize: 40,
              fontFamily: '"Yaldevi", sans-serif',
              fontWeight: font.size,
            }}
          >
            {font.name}
          </span>
          <br />
          <div className="flex items-center gap-8 font-bold text-sm2 pb-8 pt-5 hidden md2:block">
            <span>{font.size}</span>
            <span>{font.className}</span>
          </div>
          <Separator className="bg-border" />
        </div>
      ))}
    </div>
  );
}
