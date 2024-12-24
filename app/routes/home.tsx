import { Footer } from '@modules/app/Footer'
import { Header } from '@modules/app/Header'
import { FontRowView } from '@modules/home/FontRowView'
import { MoveDown } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-xl:container xl:pl-[5%] xl:pr-[5%]">
      <div className="text-center ">
        <Header />
        <div className="">
          <div className="flex my-20">
            <h1 className=" w-3/5 xl:w-1/2 text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[12rem] text-start leading-none font-bold md:font-semibold xl:leading-[13rem]">
              Existing
              <br />
              Font
              <br />
              Projects
            </h1>
            <div className=" w-1/2 hidden lg:flex self-end">
              <div>
                <MoveDown size={50} />
              </div>
            </div>
          </div>

          <div className="my-20 flex ">
            <h2 className="w-3/5 xl:w-1/2 text-start font-sm md:text-xl lg:text-2xl ">
              We are the global leader in Sinhala
              <br />
              typography, advancing Lankan visual identity
              <br />
              with multilingual fonts and design that
              <br />
              respect culture and freedom
            </h2>
            <div className="w-1/2 hidden lg:flex self-end ">
              <MoveDown size={50} />
            </div>
          </div>
        </div>
        <FontRowView />
        <Footer />
      </div>
    </div>
  )
}
