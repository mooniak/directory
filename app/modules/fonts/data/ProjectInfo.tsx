import { Button } from '@modules/shared/components/ui/button'
import { Separator } from '@modules/shared/components/ui/separator'
import { ArrowUpRight, Asterisk, Github, User } from 'lucide-react'

interface FontProject {
  fontName: string
  version: string
  scripts: string
  repoURL: string
  issuesURL: string
  status: string
  maintenanceStatus: string
  githubStats: {
    issueCount: number
    contributorCount: number
  }
  development: {
    status: string
    hasDevVersion: boolean
  }
}

interface Props {
  readonly selectedFont?: FontProject
}

export function ProjectInfo({ selectedFont }: Props) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 py-10">
      <div>
        <div className="flex items-center gap-9 py-4">
          <span>Version &nbsp;&nbsp;</span>
          <span className="font-bold ">{selectedFont?.version}</span>
        </div>

        <Separator />

        <div className="flex items-center gap-9 py-4">
          <span>Scripts &nbsp;&nbsp;</span>
          <span className="font-bold ">{selectedFont?.scripts}</span>
        </div>

        <Separator />

        <div className="flex items-center gap-9 py-4">
          <span>Repository &nbsp;&nbsp;</span>
          <span className="font-bold ">
            <a href={selectedFont?.repoURL} target="_blank" rel="noopener noreferrer">
              Visit Github Repository
            </a>
          </span>
        </div>

        <Separator />

        <Button className="rounded-full mt-6 border-black" variant="outline">Get the Font</Button>

      </div>

      <div className="bg-black text-white rounded-xl p-14">
        <p className="text-xl font-semibold">{selectedFont?.development.status}</p>
        <div className="my-6 text-sm space-y-1">
          <p>{selectedFont?.maintenanceStatus}</p>
        </div>

        <div className="text-sm gap-2 font-light text-gray-300 flex items-center">
          {' '}
          <User className="text-white" size={15} absoluteStrokeWidth />
          {' '}
          <p>
            {selectedFont?.githubStats.contributorCount}
            {' '}
            Contributors
          </p>
        </div>

        <div className=" px-2 border-t border-b flex gap-4 items-center my-6 py-3">
          <Github absoluteStrokeWidth className="text-white" />
          <p className="text-gray-300 font-light text-sm">
            {selectedFont?.githubStats.issueCount}
            {' '}
            issues
          </p>
          <Button
            className=" rounded-full bg-transparent border border-gray-300 text-gray-300 font-light"
            onClick={() => window.open(selectedFont?.issuesURL, '_blank')}
          >
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
