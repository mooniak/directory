import { Footer } from '@modules/app/Footer'
import { Header } from '@modules/app/Header'
import { FontRowView } from '@modules/home/FontRowView'

export default function FontFoundry() {
  return (
    <div className="max-xl:container xl:pl-[5%] xl:pr-[5%]">
      <Header />
      <div className="max-w-[500px] my-20">
        <p className="font-semibold text-sm my-2">Designer</p>
        <h1 className="font-semibold text-3xl ">Pushpananda Ekanayake</h1>
        <p className="text-sm md:text-base my-14">
          We are the global leader in Sinhala typography,
          advancing Lankan visual identity with multilingual
          fonts and design that respect culture and freedom
        </p>
      </div>
      <FontRowView />
      <Footer />
    </div>
  )
}
