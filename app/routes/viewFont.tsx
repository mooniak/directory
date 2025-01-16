import { FONT_SIZES } from '@app/config'
import { Footer } from '@modules/app/Footer'
import { Header } from '@modules/app/Header'
import { data, fontWeights } from '@modules/fonts/data/fontData'
import { ProjectInfo } from '@modules/fonts/data/ProjectInfo'
import { FontInformation } from '@modules/fonts/FontInformation'
import { WeightAndStyle } from '@modules/fonts/WeightAndStyle'
import { Button } from '@modules/shared/components/ui/button'
import { Input } from '@modules/shared/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@modules/shared/components/ui/select'
import { Separator } from '@modules/shared/components/ui/separator'
import { Slider } from '@modules/shared/components/ui/slider'
import { useState } from 'react'

export default function ViewFont({ params }: { params: { fontName: string } }) {
  const [fontSize, setFontSize] = useState(200)
  const [fontWeight, setFontWeight] = useState('100')
  const selectedFont = data.find(font => font.fontName === decodeURIComponent(String(params.fontName)))
  const [isInputName, setIsInputName] = useState<string | undefined>(selectedFont?.fontName)

  const buttonClass
      = 'w-[135px] h-[37px] border bg-white hover:bg-black hover:text-white p-2 rounded-full'

  return (
    <div className="max-xl:container xl:pl-[5%] xl:pr-[5%]">
      <Header />
      <div className="flex flex-col gap-6">
        <FontInformation selectedFont={selectedFont} />
      </div>

      <div className=" hidden md:flex my-8 gap-4 items-center">
        <div>
          <Select
            onValueChange={(value) => {
              setFontWeight(value)
            }}
          >
            <SelectTrigger className=" rounded-lg flex focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring-offset-0  focus:ring-0 border-black justify-center items-center w-36 [&>span]:text-sm [&>svg]:hidden">
              <span className="">
                <span className="text-neutral-600">Style</span>
                {' '}
                <span>:</span>
                {' '}
                <SelectValue defaultValue={400} placeholder="Reguler" />
              </span>
            </SelectTrigger>
            <SelectContent>
              {FONT_SIZES.map(font => (
                <SelectItem key={font.value} value={String(font.value)}>
                  {font.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-[290px]">
          <Slider
            className="focus:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring-offset-0 focus-visible:ring-0"
            defaultValue={[fontSize ?? 200]}
            max={200}
            min={40}
            step={1}
            onValueChange={(size) => {
              setFontSize(Number(size))
            }}
          />
        </div>
        <div>
          {fontSize}
        </div>
      </div>

      <div className="h-full xl:container">

        <span
          className="font-normal pt-10 hidden md:block"
          style={{
            fontWeight,
            fontSize,
            fontFamily: selectedFont?.fontFamily,
          }}
        >
          <Input
            value={isInputName ?? selectedFont?.fontName}
            className="bg-transparent h-auto border-0 t focus-visible:ring-0 focus-visible:ring-offset-0 "
            style={{
              outlineColor: 'transparent',
              outline: 'none',
              fontSize,
              fontFamily: selectedFont?.fontFamily,
            }}
            onChange={(event: {
              target: { value: React.SetStateAction<string> }
            }) => {
              setIsInputName(event.target.value as string)
            }}
            onBlur={() => {
              if (isInputName === '') {
                setIsInputName(selectedFont?.fontName)
              }
            }}
          />
        </span>

        <span
          className="md:hidden block font-normal  pt-10"
          style={{
            fontSize: 'clamp(40px, 15vw, 330px)',
            fontFamily: selectedFont?.fontFamily,
          }}
        >
          {selectedFont?.fontName}
          {' '}
        </span>
      </div>

      <div className="lg:hidden block pb-10 ">
        <Button className={`${buttonClass} `} variant="ghost">
          Get the Font
        </Button>
      </div>

      <Separator className="bg-black" />

      <WeightAndStyle
        fontWeights={fontWeights}
        fontFamily={selectedFont?.fontFamily || 'inherit'}
        isInputName={isInputName}
        fontName={selectedFont?.fontName}
      />

      <Separator className="max-xl:container bg-black" />

      <ProjectInfo selectedFont={selectedFont} />

      <Footer />
    </div>
  )
}
