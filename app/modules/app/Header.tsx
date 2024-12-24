import { Sidebar } from '@modules/app/Sidebar'
import { SocialMediaIcon } from '@modules/shared/components/SocialMediaIcon'
import { Button } from '@modules/shared/components/ui/button'
import { ArrowLeft, X } from 'lucide-react'

import { useState } from 'react'
import { Link } from 'react-router'

export function Header() {
  const navButtonClassName = 'cursor-pointer hover:underline '
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="w-full border-b border-black h-[60px] flex items-center">
      <div className="grid grid-cols-12 items-center w-full">
        {/* Logo */}
        <Link
          to="/"
          className="col-start-1 col-end-2 text-start text-3xl font-bold font-SpaceGrotesk"
        >
          <img src="/app/logo.svg" alt="Logo" />
        </Link>

        {/* Navigation Links */}
        <div
          className="lg:col-start-4 lg:col-end-11 xl:col-end-12 col-end-13 col-span-1 text-center hidden w-full sm:block sm:w-auto"
        >
          <div className="lg:gap-[32px] gap-[10px] flex items-center justify-end font-bold">
            <Link className={navButtonClassName} to="#">
              Licenses
            </Link>
            <Link className={navButtonClassName} to="/community">
              Community
            </Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="col-start-12 col-end-13 col-span-1 bg-white text-center hidden lg:block sm:w-auto">
          <div className="flex items-center gap-2 justify-end">
            <SocialMediaIcon />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="col-start-12 col-end-13 col-span-1 bg-white h-[42px] text-center justify-end flex items-center sm:hidden"
        >
          <Button
            variant="ghost"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
            onClick={() => {
              setIsSidebarOpen(prevState => !prevState)
            }}
          >
            {isSidebarOpen ? <X color="#000000" /> : <ArrowLeft color="#000000" />}
          </Button>
        </div>

        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          className={`${!isSidebarOpen ? '' : ''} block sm:hidden`}
        />
      </div>
    </div>

  )
}
