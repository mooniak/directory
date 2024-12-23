import { Facebook, Github, Instagram } from 'lucide-react'

export function SocialMediaIcon() {
  const iconClassName = 'w-[19.81px] h-[19.81px]'

  return (
    <div>
      <div className="flex items-center gap-1 md:justify-end">
        <div className="rounded-full p-2 hover:bg-muted cursor-pointer">
          <Facebook color="#000000" className={iconClassName} />
        </div>
        <div className="rounded-full p-2 hover:bg-muted cursor-pointer">
          <Instagram color="#000000" className={iconClassName} />
        </div>
        <div className="rounded-full p-2 hover:bg-muted cursor-pointer">
          <Github color="#000000" className={iconClassName} />
        </div>
      </div>
    </div>
  )
}
