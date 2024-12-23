import { cn } from '@modules/lib/utils'
import { SocialMediaIcon } from '@modules/shared/components/SocialMediaIcon'
import { Separator } from '@modules/shared/components/ui/separator'
import { useEffect } from 'react'
import { Link } from 'react-router'

interface sidebarProps {
  readonly isSidebarOpen: boolean
  readonly className: string
}
export function Sidebar({ isSidebarOpen, className }: sidebarProps) {
  const navButtonClassName = 'cursor-pointer hover:underline  '

  const toggleBodyOverflow = (isOpen: boolean) => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto'
  }

  useEffect(() => {
    toggleBodyOverflow(isSidebarOpen)
  }, [isSidebarOpen])

  return (
    <div
      className={`${isSidebarOpen ? ' translate-x-0 duration-500 ' : '-translate-x-full duration-500'} z-10 w-screen pr-16 block sm2:hidden  `}
    >
      {isSidebarOpen && (
        <div>
          <Separator />
          <div
            className={cn(
              `bg-white h-screen pt-10 grid grid-rows-8 space-y-3 text-[30px] hidden`,
              isSidebarOpen ? 'w-full' : '-translate-x-full duration-500',
              className,
            )}
          >
            <div>
              <Link className={navButtonClassName} to="/public">
                Fonts
              </Link>
            </div>
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
            <div className="pt-10">
              <Separator />
            </div>
            <SocialMediaIcon />
          </div>
        </div>
      )}
    </div>
  )
}
