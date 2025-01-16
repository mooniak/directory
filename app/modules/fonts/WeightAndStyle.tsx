import type { FontWeights } from '@modules/shared/types'

interface WeightsAndStylesProps {
  readonly fontWeights: FontWeights[]
  readonly fontFamily?: string
  readonly isInputName?: string
  readonly fontName?: string
}

export function WeightAndStyle({
  fontWeights,
  fontFamily,
  isInputName,
  fontName,
}: WeightsAndStylesProps) {
  return (
    <div className="pt-10 xl:container">
      <div className=" sm:pb-0 pb-10">
        <span className="font-bold ">Weights & Styles </span>
      </div>
      {fontWeights?.map((font, index) => (
        <div key={font.size} className={`sm:pt-10 pt-1 ${index !== fontWeights.length - 1 ? 'border-b' : ''}`}>
          <span
            className="hidden sm:block"
            style={{
              fontSize: 70,
              fontFamily: String(fontFamily),
              fontWeight: font.size,
            }}
          >
            {isInputName !== fontName
              ? isInputName
              : 'Jazzed foxes quickly vexed my big brown dog'}
          </span>
          <span className="md:hidden block font-bold text-[15px] ">
            {font.size}
            {' '}
          </span>

          <span
            className="sm:hidden block"
            style={{
              fontSize: 40,
              fontFamily: String(fontFamily),
              fontWeight: font.size,
            }}
          >
            {font.name}
          </span>
          <br />
          <div className="items-center gap-8 font-bold text-[15px] pb-8 pt-5 hidden md:block">
            <span>{font.size}</span>
            {' '}
              &nbsp;&nbsp;&nbsp;
            <span>{font.className}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
