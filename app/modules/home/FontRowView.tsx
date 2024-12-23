import { data } from '@modules/fonts/data/fontData'
import { GetTheFontDialog } from '@modules/home/GetTheFontDialog'
import { Button } from '@modules/shared/components/ui/button'

import { Separator } from '@modules/shared/components/ui/separator'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export function FontRowView() {
  const buttonClass
    = 'w-[135px] h-[37px] border bg-white hover:bg-black hover:text-white p-2 rounded-full'
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showSeparators, setShowSeparators] = useState(
    Array.from({ length: data.length }).fill(false),
  )

  const navigate = useNavigate()

  return (
    <div>
      {data.map((font, index) => (
        <div
          key={font.fontName}
          onMouseEnter={() => {
            setShowSeparators((prevState) => {
              const newState = [...prevState]
              newState[index] = true
              return newState
            })
          }}
          onMouseLeave={() => {
            setShowSeparators((prevState) => {
              const newState = [...prevState]
              newState[index] = false
              return newState
            })
          }}
        >
          <div className="xl:container">
            <div className="grid lg:grid-cols-6 grid-cols-2 items-center w-fulll lg:pt-10 pt-5">
              <div
                className={`lg:col-start-1 lg:col-span-1 text-left  items-center hidden lg:block ${showSeparators[index] ? '-translate-y-2  duration-500' : 'translate-y-2  duration-500'} `}
              >
                <div className="grid grid-cols-2  grid-rows-4 lg:w-[270px] xl:w-[366px]">
                  <div className="col-span-2  h-10 ">
                    <span className="font-bold sm:text-[18px] text-[50px] ">
                      {font.fontName}
                    </span>
                    <br />
                    <span className="text-gray-500 text-sm ">
                      {font.version}
                      <Separator />
                    </span>
                  </div>

                  <div className="col-span-1 mt-3">
                    {font.lang}
                    <Separator />
                  </div>
                  <div className="col-span-1 h-6 mt-3">
                    2 Styles
                    <Separator />
                  </div>
                  <div className="col-span-2 mt-0.5">
                    {font.owner}
                    , Mooniak
                    <Separator />
                  </div>
                  <div className="col-span-2 mt-[-5px]">{font.site}</div>
                </div>
              </div>

              <div
                className={`lg:col-start-3  lg:col-end-7 l col-start-1 text-start col-span-2 ${showSeparators[index] ? 'lg:-translate-y-2 duration-500' : 'lg:translate-y-2 duration-500'}`}
                style={{
                  fontFamily: font.fontFamily || 'inherit',
                  fontSize: 'clamp(50px, 6.763vw, 125px)',
                }}
              >
                {font.fontName}
              </div>
            </div>
            <div className=" lg:hidden grid grid-cols-2 text-start items-center pt-2">
              <div className="text-start flex items-center gap-4">
                <span>අ &nbsp; A</span>
                <Separator orientation="vertical" className="h-4" />
                <span>2 Styles </span>
              </div>
              <Button
                variant="link"
                onClick={() => {
                  navigate(`/view_font/${font.fontName}`)
                }}
              >
                tap to see more
              </Button>
            </div>
          </div>

          <div
            className={` xl:container hidden lg:block ${showSeparators[index] ? ' lg:transition-opacity duration-700 ease-out opacity-100 ' : 'lg:transition-opacity duration-700 ease-out opacity-0'}`}
          >
            <div>
              <Separator />

              <div className="flex mt-[20px] pb-[30px] gap-5">
                <div className="gap-5 flex">
                  <Button
                    className={`${buttonClass} `}
                    variant="ghost"
                    onClick={() => {
                      setIsDialogOpen(true)
                    }}
                  >
                    Get the Font
                  </Button>
                  <Button className={`${buttonClass} `} variant="ghost">
                    Dev Version
                  </Button>
                </div>

                <GetTheFontDialog
                  isDialogOpen={isDialogOpen}
                  setIsDialogOpen={setIsDialogOpen}
                />

                <div className="flex items-center gap-2 ml-[150px] ">
                  <ArrowRight />
                  <Button
                    className={`${buttonClass}  `}
                    variant="ghost"
                    onClick={() => {
                      navigate(`/view_font/${font.fontName}`)
                    }}
                  >
                    Test & See More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Separator
            className={`${showSeparators[index] ? 'lg:translate-y-5 duration-500' : 'lg:-translate-y-5  duration-500'} xl:bg-border sm:bg-black`}
          />
        </div>
      ))}
    </div>
  )
}
