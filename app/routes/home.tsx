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
            <h1 className=" w-4/5 font-space-grotesk text-[6rem] md:text-[10rem] lg:text-[13rem] xl:text-[15rem]  text-start leading-none font-bold md:font-bold xl:tracking-wider xl:leading-[15rem]">
              Exciting
              <br />
              Font
              <br />
              Projects
            </h1>
            <div className=" hidden lg:flex self-end">
              <div>
                <MoveDown size={50} />
              </div>
            </div>
          </div>

          <div className="my-20 flex ">
            <h2 className=" w-4/5 text-start font-sm md:text-xl lg:text-2xl ">
              We are the global leader in Sinhala
              <br />
              typography, advancing Lankan visual identity
              <br />
              with multilingual fonts and design that
              <br />
              respect culture and freedom
            </h2>
            <div className=" hidden lg:flex self-end ">
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
