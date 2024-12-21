import { Sidebar } from '@modules/app/Sidebar'
import { SocialMediaIcon } from '@modules/shared/components/SocialMediaIcon'
import { Button } from '@modules/shared/components/ui/button'
import { ArrowLeft, X } from 'lucide-react'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

export function Header() {
  const navButtonClassName = 'cursor-pointer hover:underline '
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="w-full border-b border-black h-[60px] flex items-center ">
      <div className="grid grid-cols-12 gap-4   items-center">
        <Link
          to="/"
          className="col-start-1 col-end-2  text-start text-3xl font-bold font-SpaceGrotesk"
        >
          Mooniak
        </Link>

        <div className="col-start-12 col-end-13  col-span-1 bg-white h-[42px] text-center justify-end  flex items-center sm:hidden">
          <Button
            variant="ghost"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none"
            onClick={() => {
              setIsSidebarOpen(prevState => !prevState)
            }}
          >
            {isSidebarOpen
              ? (
                  <X color="#000000" />
                )
              : (
                  <ArrowLeft color="#000000" />
                )}
          </Button>
        </div>

        <div className="lg:col-start-4 lg:col-end-10 col-end-13 col-span-1  text-center hidden w-full sm:block sm:w-auto ">
          <div className="lg:gap-[32px] gap-[10px] flex items-center  justify-end  font-bold ">
            <div
              className={navButtonClassName}
              onClick={() => {
                navigate(`/#ontRowView`)
              }}
            >
              Fonts
            </div>
            <Link className={navButtonClassName} to="/about/">
              About
            </Link>
            <Link className={navButtonClassName} to="/public">
              Tools
            </Link>
            <Link className={navButtonClassName} to="/community">
              Community
            </Link>
            <Link to="/contact/" className={navButtonClassName}>
              Contact
            </Link>
          </div>
        </div>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          className={`${!isSidebarOpen ? '' : ''} block sm:hidden `}
        />
        <div className="col-start-12 col-end-13  col-span-1 bg-white text-center hidden w-full lg:block sm:w-auto">
          <div className="flex items-center gap-1 justify-end ">
            <SocialMediaIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
