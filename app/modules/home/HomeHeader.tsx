import { SocialMediaIcon } from '@modules/shared/components/SocialMediaIcon'
import { Link } from 'react-router'

const navButtonClassName = 'cursor-pointer hover:underline '
export function HomeHeader() {
  return (
    <div className="grid lg:grid-cols-12  sm:grid-cols-2 pt-2 pb-2 xl:container">
      <div className="font-bold sm:gap-[20px] sm:flex text-left sm:items-center p-2 space-y-2  sm:space-y-0 sm:p-0 sm:col-start-1 sm:col-end-6 col-start-2 col-end-3 row-span-3 text-lg sm:text-[15px] text-[20px]">
        <div>
          <Link className={navButtonClassName} to="/about/">
            About
          </Link>
        </div>

        <div>
          <Link className={navButtonClassName} to="/public">
            Tools
          </Link>
        </div>

        <div>
          <Link className={navButtonClassName} to="/community">
            Community
          </Link>
        </div>

        <div>
          <Link to="/contact/" className={navButtonClassName}>
            Contact
          </Link>
        </div>
      </div>

      <div className="sm:col-start-7 sm:col-end-8 col-start-1 col-end-2 row-span-3">
        <div className="flex items-center gap-1 justify-start ">
          <SocialMediaIcon />
        </div>
      </div>
    </div>
  )
}
