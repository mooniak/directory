interface FontStyle {
  id: string
  name: string
  weight: number
  style: string
  fontUrl: string
  version: string
}

interface WeightsAndStylesProps {
  readonly fontWeights: FontStyle[]
  readonly isInputName?: string
  readonly fontName?: string
  readonly fontFamily?: string
}

export function WeightAndStyle({
  fontWeights,
  isInputName,
  fontName,
}: WeightsAndStylesProps) {
  return (
    <div className="pt-10 xl:container">
      <div className=" sm:pb-0 pb-10">
        <span className="font-bold ">Weights & Styles </span>
      </div>
      {fontWeights?.map((style, index) => (
        <div key={style.id} className={`sm:pt-10 pt-1 ${index !== fontWeights.length - 1 ? 'border-b' : ''}`}>
          <span
            className="hidden sm:block"
            style={{
              fontSize: 70,
              fontFamily: style.name,
              fontWeight: style.weight,
              fontStyle: style.style,
            }}
          >
            {isInputName !== fontName
              ? isInputName
              : 'Jazzed foxes quickly vexed my big brown dog'}
          </span>
          <span className="md:hidden block font-bold text-[15px] ">
            {style.weight}
            {' '}
          </span>

          <span
            className="sm:hidden block"
            style={{
              fontSize: 40,
              fontFamily: style.name,
              fontWeight: style.weight,
              fontStyle: style.style,
            }}
          >
            {style.name}
          </span>
          <br />
          <div className="items-center gap-8 font-bold text-[15px] pb-8 pt-5 hidden md:block">
            <span>{style.weight}</span>
            {' '}
              &nbsp;&nbsp;&nbsp;
            <span>{style.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
