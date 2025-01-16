import { Button } from '@modules/shared/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router'

interface FontProject {
  fontName: string
  version: string
  scripts: string
  license: string
  designers: Array<{
    id: string
    name: string
    email: string | null
    url: string | null
  }>
}

interface FontInformationProps {
  readonly selectedFont?: FontProject
}

export function FontInformation({ selectedFont }: FontInformationProps) {
  const buttonClass = 'w-[135px] h-[37px] border bg-white hover:bg-black hover:text-white p-2 rounded-full'
  const navigate = useNavigate()

  return (
    <div className="h-32 mt-4">
      <div className="h-full flex flex-col gap-12">
        <div className="flex justify-between">
          <div
            onClick={() => {
              navigate('/')
            }}
            className="flex items-center font-semibold gap-2 text-sm cursor-pointer transform transition-transform ease-out hover:scale-110 duration-700"
          >
            <ArrowLeft size={20} />
            All Projects
          </div>
          <div>
            <div className="md:hidden flex items-center gap-2">
              <p className="font-semibold text-sm">font family:</p>
              <span className="font-semibold text-xl">{selectedFont?.fontName}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center h-full border-b w-full">
          <div className="md:flex-1 hidden md:block">
            <p className="font-semibold text-sm">font family</p>
            <span className="font-semibold text-3xl">{selectedFont?.fontName}</span>
          </div>
          <div className="flex gap-20  xl:flex-[0.8]">
            <div className="flex flex-col w-fit">
              <p className="font-semibold text-sm">Scripts</p>
              <span className="font-semibold text-sm ">{selectedFont?.scripts}</span>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-sm">License</p>
              <span className="font-semibold">{selectedFont?.license}</span>
            </div>
            <div className="flex flex-col ">
              <p className="font-semibold text-sm">Designer(s)</p>
              <span className="font-semibold">
                {selectedFont?.designers.map(d => d.name).join(', ')}
              </span>
            </div>
          </div>
          <div className=" flex-none hidden md:block ">
            <Button className={`${buttonClass} ml-8`} variant="ghost">
              Get the Font
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
