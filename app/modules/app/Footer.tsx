import { SocialMediaIcon } from '@modules/shared/components/SocialMediaIcon'
import { Separator } from '@modules/shared/components/ui/separator'
import { Link, useNavigate } from 'react-router'

interface footerProps {
  readonly isPage?: boolean
}
export function Footer({ isPage }: footerProps) {
  const navigate = useNavigate()

  return (
    <div>
      {!isPage && (
        <div className="text-[60px] pb-10 text-center font-AbhayaLibre">෴</div>
      )}
      <Separator className="bg-black" />
      <div className="grid lg:grid-rows-3 grid-rows-4 lg:grid-cols-12 grid-cols-8 max-lg:pt-5">
        <Link
          to="/"
          className="lg:col-start-1 lg:col-end-5 row-start-1 lg:row-start-2 text-3xl font-bold text-start col-start-1 col-end-2 font-space-grotesk"
        >
          Mooniak
        </Link>

        <div className="pt-0 lg:pt-6 row-span-3 grid grid-rows-3 md:grid-cols-6 h-20 md:col-start-7 md:col-end-9 xl:col-start-7 xl:col-end-7 lg:col-start-7 gap-4 lg:gap-8 lg:col-end-9 sm:col-start-5 sm:col-end-7 grid-cols-6 col-start-6 col-end-9 text-start font-bold text-sm">
          <div
            className="col-span-1 md:col-start-1 col-start-1 col-end-3 cursor-pointer hover:underline mt-2"
            onClick={() => {
              navigate(`/#ontRowView`)
            }}
          >
            Fonts
          </div>
          <Link
            className="col-span-1 cursor-pointer hover:underline mt-2"
            to="/community"
          >
            Community
          </Link>
          <Link
            className="col-span-1 md:col-start-1 col-start-1 col-end-3  cursor-pointer hover:underline mt-2"
            to="/about/"
          >
            About
          </Link>
          <Link
            className="col-span-1 cursor-pointer hover:underline mt-2"
            to="/contact/"
          >
            Contact
          </Link>
          <Link
            className="col-span-1 md:col-start-1 col-start-1 col-end-3  cursor-pointer hover:underline mt-2"
            to="/tools/"
          >
            Tools
          </Link>
        </div>

        <div className="md:col-start-10 md:col-end-13 md:row-start-2 sm:col-start-5 lg:col-start-12 lg:col-end-13 lg:row-start-2 sm:col-end-7 md:row-end-3 text-end col-start-6 col-end-9">
          <Separator className="lg:hidden block " />
          <div className="flex items-center gap-1 md:justify-end">
            <SocialMediaIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
