import type { FontInfo } from '@modules/shared/types'
import { Button } from '@modules/shared/components/ui/button'
import { Separator } from '@modules/shared/components/ui/separator'
import { ArrowUpRight, Asterisk, Github, User } from 'lucide-react'

interface Props {
  readonly selectedFont?: FontInfo
}
export function ProjectInfo({ selectedFont }: Props) {
  // this is the project info function

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 pt-2 pb-16 xl:container ">
      <div>
        <div className="sm:py-12 pb-2">
          <span className="font-bold text-2xl ">Project Info</span>
        </div>

        <div className="flex items-center gap-9 py-4">
          <span>Font Family &nbsp;&nbsp;</span>
          <span className="font-bold">{selectedFont?.fontName}</span>
        </div>

        <Separator />

        <div className="flex items-center gap-9 py-4">
          <span>Version &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="font-bold">{selectedFont?.version}</span>
        </div>

        <Separator />

        <div className="flex items-center gap-9 py-4">
          <span>Designer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="font-bold">{selectedFont?.owner}</span>
        </div>

        <Separator />

        <Separator />

        <div className="flex items-center gap-9 py-4">
          <span>
            Scripts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
          </span>
          <span className="font-bold">{selectedFont?.lang}</span>
        </div>

        <Separator />

        <div className="flex items-center gap-9 py-4">
          <span>
            License &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="font-bold">OFL</span>
        </div>

        <Separator />

        <div className="flex items-center gap-9 py-4">
          <span>Repository &nbsp;&nbsp;</span>
          <span className="font-bold ">Visit Github Repository</span>
        </div>

        <Separator />

        <Button className="rounded-full mt-6 border-black" variant="outline">Get the Font</Button>

      </div>

      <div className="bg-black text-white rounded-xl p-14">
        <p className="text-xl font-semibold">Active Development</p>
        <div className="my-6 text-sm space-y-1">
          <p>Tamil Script</p>
          <p>Sinhala Glyph Extension</p>
        </div>

        <div className="text-sm gap-2 font-light text-gray-300 flex items-center">
          {' '}
          <User className="text-white" size={15} absoluteStrokeWidth />
          {' '}
          <p>43 Contribution</p>
        </div>

        <div className=" px-2 border-t border-b flex gap-4 items-center my-6 py-3">
          <Github absoluteStrokeWidth className="text-white" />
          <p className="text-gray-300 font-light text-sm">32 issues</p>
          <Button className=" rounded-full bg-transparent border border-gray-300 text-gray-300 font-light ">
            Visit repository
            {' '}
            <ArrowUpRight absoluteStrokeWidth />
          </Button>
        </div>

        <div className="space-y-10">
          <div className="flex gap-4">
            <Asterisk />
            <p>Akuru members only</p>
          </div>

          <p className="text-gray-300 text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu efficitur lacus. Nunc dapibus aliquam odio, lacinia tempor arcu. Mauris vel venenatis metus.</p>
          <Button className="rounded-full bg-white text-black hover:bg-white">Get akuru membership</Button>
        </div>

      </div>
    </div>
  )
}
