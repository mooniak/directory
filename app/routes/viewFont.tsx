import { ProjectInfo } from '@app/modules/fonts/data/ProjectInfo'
import { Footer } from '@modules/app/Footer'
import { Header } from '@modules/app/Header'
import { FontInformation } from '@modules/fonts/FontInformation'
import { WeightAndStyle } from '@modules/fonts/WeightAndStyle'
import { Button } from '@modules/shared/components/ui/button'
import { Input } from '@modules/shared/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@modules/shared/components/ui/select'
import { Separator } from '@modules/shared/components/ui/separator'
import { Slider } from '@modules/shared/components/ui/slider'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

interface Designer {
  id: string
  name: string
  email: string | null
  url: string | null
}

interface FontStyle {
  id: string
  name: string
  weight: number
  style: string
  fontUrl: string
  version: string
}

interface Channel {
  id: string
  branchName: string
  isDefault: boolean
  channel: {
    id: string
    name: string
  }
}

interface FontProject {
  id: string
  fontName: string
  fontFamily: string
  version: string
  scripts: string
  license: string
  repoURL: string
  issuesURL: string
  status: string
  maintenanceStatus: string
  slug: string
  designers: Designer[]
  styles: FontStyle[]
  channels: Channel[]
  githubStats: {
    issueCount: number
    contributorCount: number
  }
  development: {
    status: string
    hasDevVersion: boolean
  }
}

export default function ViewFont({ params }: { params: { slug: string } }) {
  const [fontSize, setFontSize] = useState(200)
  const [fontWeight, setFontWeight] = useState('100')
  const [loadedFonts, setLoadedFonts] = useState<Set<string>>(new Set())
  const [isInputName, setIsInputName] = useState<string>('')

  const { data: fontProject, isLoading } = useQuery<FontProject>({
    queryKey: ['font-project', params.slug],
    queryFn: async () => {
      const response = await fetch(
        `${window.ENV.API_BASE_URL}/v1/font-projects/public/${params.slug}`,
        {
          headers: {
            'x-organization-id': window.ENV.ORGANIZATION_ID,
          },
        },
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
  })

  // Load fonts when data is available
  useEffect(() => {
    if (fontProject?.styles) {
      fontProject.styles.forEach(async (style) => {
        if (style.fontUrl && !loadedFonts.has(style.name)) {
          try {
            const fontFace = new FontFace(style.name, `url(${window.ENV.API_BASE_URL}${style.fontUrl})`, {
              style: style.style,
              weight: String(style.weight),
              display: 'swap',
            })

            const loadedFont = await fontFace.load()
            document.fonts.add(loadedFont)
            setLoadedFonts(prev => new Set(prev).add(style.name))
          }
          catch (err) {
            console.error(`Failed to load font ${style.name}:`, err)
          }
        }
      })
    }
  }, [fontProject?.styles, loadedFonts])

  useEffect(() => {
    if (fontProject) {
      setIsInputName(fontProject.fontName)
    }
  }, [fontProject])

  if (isLoading || !fontProject) {
    return <div>Loading...</div>
  }

  const buttonClass = 'w-[135px] h-[37px] border bg-white hover:bg-black hover:text-white p-2 rounded-full'

  return (
    <div className="max-xl:container xl:pl-[5%] xl:pr-[5%]">
      <Header />
      <div className="flex flex-col gap-6">
        <FontInformation selectedFont={fontProject} />
      </div>

      <div className=" hidden md:flex my-8 gap-4 items-center">
        <div>
          <Select
            onValueChange={(value) => {
              setFontWeight(value)
            }}
          >
            <SelectTrigger className=" rounded-lg flex focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring-offset-0  focus:ring-0 border-black justify-center items-center w-36 [&>span]:text-sm [&>svg]:hidden">
              <span className="">
                <span className="text-neutral-600">Style</span>
                {' '}
                <span>:</span>
                {' '}
                <SelectValue defaultValue={400} placeholder="Regular" />
              </span>
            </SelectTrigger>
            <SelectContent>
              {fontProject.styles.map(style => (
                <SelectItem key={style.id} value={String(style.weight)}>
                  {style.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-[290px]">
          <Slider
            className="focus:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus:ring-offset-0 focus-visible:ring-0"
            defaultValue={[fontSize ?? 200]}
            max={200}
            min={40}
            step={1}
            onValueChange={(size) => {
              setFontSize(Number(size))
            }}
          />
        </div>
        <div>
          {fontSize}
        </div>
      </div>

      <div className="h-full xl:container">
        <span
          className="font-normal pt-10 hidden md:block"
          style={{
            fontWeight,
            fontSize,
            fontFamily: fontProject.fontFamily,
          }}
        >
          <Input
            value={isInputName}
            className="bg-transparent h-auto border-0 t focus-visible:ring-0 focus-visible:ring-offset-0 "
            style={{
              outlineColor: 'transparent',
              outline: 'none',
              fontSize,
              fontFamily: fontProject.fontFamily,
            }}
            onChange={(event: {
              target: { value: React.SetStateAction<string> }
            }) => {
              setIsInputName(event.target.value as string)
            }}
            onBlur={() => {
              if (isInputName === '') {
                setIsInputName(fontProject.fontName)
              }
            }}
          />
        </span>

        <span
          className="md:hidden block font-normal pt-10"
          style={{
            fontSize: 'clamp(40px, 15vw, 330px)',
            fontFamily: fontProject.fontFamily,
          }}
        >
          {fontProject.fontName}
          {' '}
        </span>
      </div>

      <div className="lg:hidden block pb-10 ">
        <a href={`${fontProject.repoURL}/releases`} target="_blank" rel="noopener noreferrer">
          <Button className={`${buttonClass} `} variant="ghost">
            Get the Font
          </Button>
        </a>
      </div>

      <Separator className="bg-black" />

      <WeightAndStyle
        fontWeights={fontProject.styles}
        fontFamily={fontProject.fontFamily}
        isInputName={isInputName}
        fontName={fontProject.fontName}
      />

      <Separator className="max-xl:container bg-black" />

      <ProjectInfo selectedFont={fontProject} />

      <Footer />
    </div>
  )
}
