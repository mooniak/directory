import { Footer } from '@modules/app/Footer'
import { FontRowView } from '@modules/home/FontRowView'
import { HomeHeader } from '@modules/home/HomeHeader'
import { HomeSvg } from '@modules/home/HomeSvg'
import { Separator } from '@modules/shared/components/ui/separator'
import { ArrowRight, MoveDown } from 'lucide-react'
import { Link, useNavigate } from 'react-router'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="max-xl2:container xl:pl-[5%] xl:pr-[5%]">
      <div className="text-center ">
        <h1
          className="font-bold leading-none font-SpaceGrotesk text-center overflow-hidden sm:ml-[-20px] ml-[-5px] text-13vw cursor-pointer"
          style={{ fontSize: 'clamp(14px, 20.5vw, 330px)' }}
          onClick={() => {
            navigate(`/`)
          }}
        >
          mooniak
        </h1>

        <Separator className="xl:bg-border sm:bg-black" />

        <div className="grid md:grid-cols-2 gap-5 pt-10 pb-10 justify-center items-center xl:container">
          <div className="hidden md:block w-full">
            <HomeSvg className="w-auto h-auto mr-[30px]" />
          </div>

          <div className="text-left w-full h-fit ">
            <span className=" text-[20px] lg:text-28px">
              We are the global leader in Sinhala typography, advancing Lankan
              visual identity with multilingual fonts and design that respect
              culture and freedom.
            </span>

            <br />

            <div className=" hidden sm:block">
              <span className=" text-[20px] lg:text-[28px ]cursor-pointer hover:underline  hidden xl:block">
                <Link className="flex items-center" to="/about/">
                  About us &nbsp;
                  <ArrowRight />
                </Link>
              </span>
            </div>
          </div>
        </div>
        <Separator className="xl:bg-border sm:bg-black" />
        <HomeHeader />
        <Separator className="xl:bg-border sm:bg-black" />
        <div className="flex pt-10 pb-10 items-center xl:container">
          <div className="sm:block flex-1 font-bold text-left text-[18px]  ">
            <span className="flex sm:justify-center text-start sm:text-[36px] text-[18px] leading-[2.723rem]">
              Discover
              {' '}
              <br className="hidden sm:block" />
              {' '}
              Fonts
            </span>
          </div>
          <div className="flex items-center justify-center w-10 ">
            <MoveDown size={30} strokeWidth={3} />
          </div>
          <div className="flex-1 text-left leading-38 w-full pl-5">
            <div className="hidden sm:block">
              <HomeSvg className="w-auto h-auto ml-[30px]" />
            </div>
          </div>
        </div>
        <Separator className="xl:bg-border sm:bg-black" id="ontRowView" />
        <FontRowView />
        <Footer />
      </div>
    </div>
  )
}
