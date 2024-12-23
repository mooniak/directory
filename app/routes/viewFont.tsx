import { FONT_SIZES } from '@app/config'
import { Footer } from '@modules/app/Footer'
import { Header } from '@modules/app/Header'
import { data, fontWeights } from '@modules/fonts/data/fontData'
import { FontInformation } from '@modules/fonts/FontInformation'
import { WeightAndStyle } from '@modules/fonts/WeightAndStyle'
import { Button } from '@modules/shared/components/ui/button'
import { Input } from '@modules/shared/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@modules/shared/components/ui/select'
import { Separator } from '@modules/shared/components/ui/separator'
import { Slider } from '@modules/shared/components/ui/slider'
import { useState } from 'react'

export default function ViewFont({ params }: { params: { fontName: string } }) {
  const [isFontSize, setIsFontSize] = useState(200)
  const [isShowSlider, setIsShowSlider] = useState(false)
  const [value, setValue] = useState('400')
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
              setValue(value)
            }}
          >
            <SelectTrigger className=" rounded-lg flex focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring-offset-0  focus:ring-0 border-black justify-center items-center w-36 [&>span]:text-sm [&>svg]:hidden">
              <span className="">
                <span className="text-neutral-600">Style</span>
                {' '}
                <span>:</span>
                {' '}
                <SelectValue placeholder="Font Weight" />
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
        <div>
          <Button
            className="w-36 border-black rounded-lg"
            variant="outline"
            onClick={() => {
              setIsShowSlider(prevState => !prevState)
            }}
          >
            {' '}
            Size :
            {' '}
            {isFontSize}
            px
          </Button>
        </div>
        <div className="w-[290px] pl-5">
          {isShowSlider && (
            <Slider
              defaultValue={[isFontSize ?? 200]}
              max={200}
              min={40}
              step={1}
              onValueChange={(size) => {
                setIsFontSize(Number(size))
              }}
              onBlur={() => {
                setIsShowSlider(false)
              }}
            />
          )}
        </div>
      </div>

      <div className="h-full xl:container">

        <span
          className="font-normal pt-10 hidden md:block"
          style={{
            fontWeight: value,
            fontSize: isFontSize,
            fontFamily: selectedFont?.fontFamily,
          }}
        >
          <Input
            value={isInputName ?? selectedFont?.fontName}
            className="bg-transparent h-auto border-0 t focus-visible:ring-0 focus-visible:ring-offset-0 "
            style={{
              outlineColor: 'transparent',
              outline: 'none',
              fontSize: isFontSize,
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

      <div className="grid lg:grid-cols-2 lg:gap-20 pt-16 pb-16 xl:container ">
        <div>
          <div className="sm:pb-16 pb-2">
            <span className="font-bold text-[22px] ">Details </span>
          </div>

          <Separator className="sm:block hidden" />

          <div className="flex items-center gap-9 pt-8 pb-8">
            <span className="font-bold">Font Name &nbsp;&nbsp;</span>
            <span>{selectedFont?.fontName}</span>
          </div>

          <Separator />

          <div className="flex items-center gap-9 pt-8 pb-8">
            <span className="font-bold">Designers &nbsp;&nbsp;&nbsp;</span>
            <span>
              Mooniak
              {' '}
              <br />
              {selectedFont?.owner}
            </span>
          </div>

          <Separator />

          <div className="flex items-center gap-9 pt-8 pb-8">
            <span className="font-bold">
              Scripts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
            </span>
            <span>{selectedFont?.lang}</span>
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
          <div className="pb-14 lg:pt-0 pt-10">
            <span className="font-bold text-[22px] "> About</span>
          </div>

          <p className="w-[90%] text-[20px]">
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

      <Separator className="bg-black" />

      <div className="pt-16 xl:container">
        <span className="font-bold text-[20px]">Glyphs</span>

        <div
          className="w-auto pt-16  lg:w-[50%]"
          style={{
            fontFamily: selectedFont?.fontFamily,
          }}
        >
          <span
            style={{
              fontSize: 'clamp(40px, 3vw, 60px)',
            }}
          >
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
          </span>
          <br />
          <span
            style={{
              fontSize: 'clamp(40px, 3vw, 60px)',
            }}
          >
            a b c d e f g h i j k l m n o p q r s t u v w x y z
          </span>
          <br />
          <span
            style={{
              fontSize: 'clamp(40px, 3vw, 60px)',
            }}
          >
            0 1 2 3 4 5 6 7 8 9
          </span>
        </div>
      </div>

      <Footer />
    </div>
  )
}
