import { GetTheFontDialog } from '@modules/home/GetTheFontDialog'
import { Button } from '@modules/shared/components/ui/button'
import { Separator } from '@modules/shared/components/ui/separator'
import { useQuery } from '@tanstack/react-query'
import { Github, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

declare global {
  interface Window {
    ENV: {
      API_BASE_URL: string
      ORGANIZATION_ID: string
    }
  }
}

// Types for the API response
interface FontStyle {
  name: string
  weight: number
}

interface GithubStats {
  issueCount: number
  contributorCount: number
}

interface Development {
  status: string | null
  hasDevVersion: boolean
}

interface FontProject {
  fontName: string
  version: string | null
  scripts: string | null
  designerNames: string[]
  repoURL: string
  fontFamily: string
  regularFontUrl: string | null
  slug: string
  githubStats: GithubStats
  development: Development
  styles: {
    count: number
    supported: FontStyle[]
  }
}

interface FontProjectsResponse {
  data: FontProject[]
  metadata: {
    total: number
    page: string
    perPage: string
  }
}

export function FontRowView() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showSeparators, setShowSeparators] = useState<boolean[]>([])
  const [loadedFonts, setLoadedFonts] = useState<Set<string>>(new Set())
  const navigate = useNavigate()

  const { data: fontProjects, isLoading, error } = useQuery<FontProjectsResponse>({
    queryKey: ['font-projects'],
    queryFn: async () => {
      const response = await fetch(
        `${window.ENV.API_BASE_URL}/v1/font-projects/public?page=1&perPage=100`,
        {
          headers: {
            organisationid: window.ENV.ORGANIZATION_ID,
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
    if (fontProjects?.data) {
      fontProjects.data.forEach(async (font) => {
        if (font.regularFontUrl && !loadedFonts.has(font.fontName)) {
          try {
            // Create a new FontFace instance with proper descriptors
            const fontFace = new FontFace(font.fontName, `url(${window.ENV.API_BASE_URL}${font.regularFontUrl})`, {
              style: 'normal',
              weight: '400',
              display: 'swap',
            })

            // Wait for the font to load
            const loadedFont = await fontFace.load()

            // Add the loaded font to the document fonts
            document.fonts.add(loadedFont)

            // Update state to reflect the loaded font
            setLoadedFonts(prev => new Set(prev).add(font.fontName))
          }
          catch (err) {
            // Keep error logging for debugging purposes
            console.error(`Failed to load font ${font.fontName}:`, err)
          }
        }
      })
    }
  }, [fontProjects?.data, loadedFonts])

  if (isLoading) {
    return <div>Loading fonts...</div>
  }

  if (error) {
    return <div>Error loading fonts</div>
  }

  if (!fontProjects?.data) {
    return <div>No fonts available</div>
  }

  return (
    <div>
      {fontProjects.data.map((font: FontProject, index: number) => (
        <div
          key={font.fontName}
          onMouseEnter={() => {
            setShowSeparators((prevState) => {
              const newState = [...prevState]
              newState[index] = true
              return newState
            })
          }}
          onMouseLeave={() => {
            setShowSeparators((prevState) => {
              const newState = [...prevState]
              newState[index] = false
              return newState
            })
          }}
        >
          <div className="max-xl:container">
            <div className="grid lg:grid-cols-6 grid-cols-2 items-center w-fulll lg:pt-10 pt-5">
              <div
                className={`lg:col-start-1 lg:col-span-1 text-left  items-center hidden lg:block ${showSeparators[index] ? '-translate-y-2  duration-500' : 'translate-y-2  duration-500'} `}
              >
                <div className="grid grid-cols-2 lg:w-[270px] xl:w-[366px]">
                  <div className="col-span-2 border-b py-2">
                    <span className="font-bold sm:text-[18px] text-[50px] ">
                      {font.fontName}
                    </span>
                    <br />
                    <span className="text-gray-500 text-sm ">
                      {font.version || 'Version not available'}
                    </span>
                  </div>

                  <div className=" border-b py-2">
                    {font.scripts || 'Scripts not specified'}
                  </div>
                  <div className=" border-b py-2">
                    {font.styles.count}
                    {' '}
                    Styles
                  </div>
                  <div className="col-span-2 border-b py-2">
                    {font.designerNames.length > 0
                      ? font.designerNames.join(', ')
                      : 'Designer not specified'}
                    , Mooniak
                  </div>
                  <div className="col-span-2 py-2">{font.repoURL}</div>
                  <div className="col-span-2 ">
                    <p className="bg-black text-white rounded-md px-4 py-1 font-light">
                      {font.development.status || 'Status not available'}
                    </p>
                    <div className={`flex py-3 ${showSeparators[index] ? 'border-b' : ''}`}>
                      <p className="basis-1/2 flex gap-4">
                        <Github absoluteStrokeWidth className="text-black" />
                        <span>
                          {font.githubStats.issueCount}
                          {' '}
                          Issues
                        </span>
                      </p>
                      <p className="basis-1/2 flex gap-4">
                        <User className="text-black" absoluteStrokeWidth />
                        <span className="">
                          {font.githubStats.contributorCount}
                          {' '}
                          contributors
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`lg:col-start-3  lg:col-end-7 l col-start-1 text-start col-span-2 ${showSeparators[index] ? 'lg:-translate-y-2 duration-500' : 'lg:translate-y-2 duration-500'}`}
                style={{
                  fontFamily: loadedFonts.has(font.fontName) ? font.fontName : 'inherit',
                  fontSize: 'clamp(50px, 9vw, 160px)',
                }}
              >
                {font.fontName}
              </div>
            </div>
            <div className=" lg:hidden grid grid-cols-2 text-start items-center pt-2">
              <div className="text-start flex items-center gap-4">
                <span>අ &nbsp; A</span>
                <Separator orientation="vertical" className="h-4" />
                <span>
                  {font.styles.count}
                  {' '}
                  Styles
                  {' '}
                </span>
              </div>
              <Button
                variant="link"
                onClick={() => {
                  navigate(`/fonts/${font.slug}/`)
                }}
              >
                tap to see more
              </Button>
            </div>
          </div>

          <div
            className={` max-xl:container hidden lg:block ${showSeparators[index] ? ' lg:transition-opacity duration-700 ease-out opacity-100 ' : 'lg:transition-opacity duration-700 ease-out opacity-0'}`}
          >
            <div>
              <div className="flex mt-[20px] pb-[30px]">
                <div className="gap-5 flex">
                  <Button
                    className="border-black rounded-full hover:bg-black hover:text-white"
                    variant="outline"
                    onClick={() => {
                      navigate(`/view_font/${font.slug}`)
                    }}
                  >
                    Test and Download
                  </Button>
                  {font.development.hasDevVersion && (
                    <Button
                      variant="outline"
                      className="border-black rounded-full hover:bg-black hover:text-white"
                    >
                      Dev Version
                    </Button>
                  )}
                </div>

                <GetTheFontDialog
                  isDialogOpen={isDialogOpen}
                  setIsDialogOpen={setIsDialogOpen}
                />
              </div>
            </div>
          </div>
          <Separator
            className={`${showSeparators[index] ? 'lg:translate-y-5 duration-500' : 'lg:-translate-y-5  duration-500'} xl:bg-border sm:bg-black`}
          />
        </div>
      ))}
    </div>
  )
}
