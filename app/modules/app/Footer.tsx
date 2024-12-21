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
      <Separator />
      <div className="grid lg2:grid-rows-3 grid-rows-4 lg2:grid-cols-12  grid-cols-8 max-lg2:pt-5">
        <Link
          to="/"
          className="lg2:col-start-1 lg2:col-end-5 row-start-1 lg2:row-start-2 text-3xl  font-bold text-start col-start-1 col-end-2 font-SpaceGrotesk"
        >
          Mooniak
        </Link>

        <div className="pt-0 lg2:pt-6 row-span-3 grid grid-rows-3 md:grid-cols-6  h-20 md:col-start-7 md:col-end-9 xl2:col-start-7 xl2:col-end-7 lg2:col-start-7 gap-4 lg2:gap-8 lg2:col-end-9 sm2:col-start-5 sm2:col-end-7  grid-cols-6 col-start-6 col-end-9 text-start font-bold text-sm">
          <div
            className="col-span-1 md:col-start-1  col-start-1 col-end-3  cursor-pointer hover:underline mt-2"
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

        <div className="md:col-start-10 md:col-end-13 md:row-start-2 sm2:col-start-5 lg2:col-start-12 lg2:col-end-13 lg2:row-start-2 sm2:col-end-7 md:row-end-3 text-end  col-start-6 col-end-9 ">
          <Separator className="lg2:hidden block" />
          <div className="flex items-center gap-1 md2:justify-end">
            <SocialMediaIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
