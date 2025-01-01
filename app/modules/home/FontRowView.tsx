import { data } from '@modules/fonts/data/fontData'
import { GetTheFontDialog } from '@modules/home/GetTheFontDialog'
import { Button } from '@modules/shared/components/ui/button'

import { Separator } from '@modules/shared/components/ui/separator'
import { Github, User } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export function FontRowView() {
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
          <div className="max-xl:container">
            <div className="grid lg:grid-cols-6 grid-cols-2 items-center w-fulll lg:pt-10 pt-5">
              <div
                className={`lg:col-start-1 lg:col-span-1 text-left  items-center hidden lg:block ${showSeparators[index] ? '-translate-y-2  duration-500' : 'translate-y-2  duration-500'} `}
              >
                <div className="grid grid-cols-2 lg:w-[270px] xl:w-[366px]">
                  <div className="col-span-2 border-b py-2">
                    <span className="font-bold sm:text-[18px] text-[50px] ">
                      {font.fontName}
                    </span>
                    <br />
                    <span className="text-gray-500 text-sm ">
                      {font.version}
                    </span>
                  </div>

                  <div className=" border-b py-2">
                    {font.lang}
                  </div>
                  <div className=" border-b py-2">
                    2 Styles
                  </div>
                  <div className="col-span-2 border-b py-2">
                    {font.owner}
                    , Mooniak
                  </div>
                  <div className="col-span-2 py-2">{font.site}</div>
                  <div className="col-span-2 ">
                    <p className="bg-black text-white rounded-md px-4 py-1 font-light">Active development</p>
                    <div className={`flex py-3 ${showSeparators[index] ? 'border-b' : ''}`}>
                      <p className="basis-1/2 flex gap-4">
                        <Github absoluteStrokeWidth className="text-black" />
                        <span>
                          32 Issues
                        </span>
                      </p>
                      <p className="basis-1/2 flex gap-4">
                        <User className="text-black" absoluteStrokeWidth />
                        <span className="">
                          43 contributors
                        </span>
                      </p>
                    </div>
                  </div>
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
                  navigate(`/fonts/${font.fontName}/`)
                }}
              >
                tap to see more
              </Button>
            </div>
          </div>

          <div
            className={` max-xl:container hidden lg:block ${showSeparators[index] ? ' lg:transition-opacity duration-700 ease-out opacity-100 ' : 'lg:transition-opacity duration-700 ease-out opacity-0'}`}
          >
            <div>

              <div className="flex mt-[20px] pb-[30px]">
                <div className="gap-5 flex">
                  <Button
                    className="border-black rounded-full hover:bg-black hover:text-white"
                    variant="outline"
                    onClick={() => {
                      navigate(`/view_font/${font.fontName}`)
                    }}
                  >
                    Test and Download
                  </Button>
                  <Button variant="outline" className="border-black rounded-full hover:bg-black hover:text-white">
                    Dev Version
                  </Button>
                </div>

                <GetTheFontDialog
                  isDialogOpen={isDialogOpen}
                  setIsDialogOpen={setIsDialogOpen}
                />
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
