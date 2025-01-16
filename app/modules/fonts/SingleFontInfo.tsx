import type { FontInfo } from '@modules/shared/types'
import { Button } from '@modules/shared/components/ui/button'
import { Separator } from '@modules/shared/components/ui/separator'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router'

interface singleFontInfoProps {
  readonly singleFontData?: FontInfo
}
export function SingleFontInfo({ singleFontData }: singleFontInfoProps) {
  const buttonClass
    = 'w-[135px] h-[37px] border bg-white hover:bg-black hover:text-white p-2 rounded-full'
  const navigate = useNavigate()

  return (
    <div className="border-b border-black">
      <div className="xl:container">
        <div className="sm:h-[124px] h-[66px] grid sm:grid-cols-6  transition-transform ">
          <div className="col-start-1 flex items-center ">
            <div className="flex-1" />
            <div className="justify-center hidden lg:block">
              <Button
                className={`${buttonClass}  `}
                variant="ghost"
                onClick={() => {
                  navigate(`/`)
                }}
              >
                Back to All Fonts
              </Button>
            </div>
            {' '}
            <div className=" text-center justify-end  lg:hidden block">
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
              className="sm:h-[124px] h-[66px] bg-black"
            />
          </div>

          <div className="flex sm:items-center col-start-2 col-end-4 sm:justify-center ">
            <div className="pl-2 pt-2 sm:pt-0">
              <span className="font-bold text-[15px] ">Typeface :</span>
              <br />
              <span className="font-bold text-[15px]">
                {singleFontData?.fontName}
              </span>
            </div>
            <div className="hidden lg:block">
              <a href={`${singleFontData?.repoURL}/releases`} target="_blank" rel="noopener noreferrer">
                <Button className={`${buttonClass} ml-8`} variant="ghost">
                  Get the Font
                </Button>
              </a>
            </div>
          </div>
          <div className="lg:col-start-4 lg:col-end-5 sm:col-start-4 sm:col-end-6 col-start-6 col-end-7 hidden sm:block pt-8">
            <span className="font-bold text-[15px] ">Designers</span>
            <br />
            <span>{singleFontData?.owner}</span>
          </div>
          <div className="lg:col-start-5 sm:col-start-6 col-start-4 col-end-7 sm:pt-8 pt-2">
            <span className="font-bold text-[15px]">Scripts</span>
            <br />
            <span>{singleFontData?.lang}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
