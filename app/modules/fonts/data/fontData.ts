interface FontData {
  fontName: string
  version: string
  scripts: string
  designerNames: string
  repoURL: string
  fontFamily: string
}

export const data: FontData[] = [
  {
    fontName: 'Abhaya Libre',
    version: 'v1.600 ',
    scripts: 'Latin, Sinhala',
    designerNames: 'Pushpananda Ekanayak',
    repoURL: 'Libre Font',
    fontFamily: 'AbhayaLibre',
  },
  {
    fontName: 'යාල්දේවි',
    version: 'v1.600 ',
    scripts: 'Latin, Sinhala',
    designerNames: 'Pushpananda Ekanayak',
    repoURL: 'Libre Font',
    fontFamily: 'Yaldevi',
  },
  {
    fontName: 'Stick No Bills',
    version: 'v1.600 ',
    scripts: 'Latin, Sinhala',
    designerNames: 'Pushpananda Ekanayak',
    repoURL: 'Libre Font',
    fontFamily: 'Stick No Bills',
  },
  {
    fontName: 'Whisper',
    version: 'v1.600 ',
    scripts: 'Latin, Sinhala',
    designerNames: 'Pushpananda Ekanayak',
    repoURL: 'Libre Font',
    fontFamily: 'Whisper',
  },
  {
    fontName: 'සයලම',
    version: 'v1.600 ',
    scripts: 'Latin, Sinhala',
    designerNames: 'Pushpananda Ekanayak',
    repoURL: 'Libre Font',
    fontFamily: 'Noto Serif Sinhala',
  },
  {
    fontName: 'Madimi One',
    version: 'v1.600 ',
    scripts: 'Latin, Sinhala',
    designerNames: 'Pushpananda Ekanayak',
    repoURL: 'Libre Font',
    fontFamily: 'Madimi One',
  },
  {
    fontName: 'Caveat',
    version: 'v1.600 ',
    scripts: 'Latin, Sinhala',
    designerNames: 'Pushpananda Ekanayak',
    repoURL: 'Libre Font',
    fontFamily: 'Caveat',
  },
  {
    fontName: 'Mansalva',
    version: 'v1.600 ',
    scripts: 'Latin, Sinhala',
    designerNames: 'Pushpananda Ekanayak',
    repoURL: 'Libre Font',
    fontFamily: 'Mansalva',
  },
]

interface FontStyle {
  className: string
  fontWeight: string
  fontWeightName: string
}

export const fontStyles: FontStyle[] = [
  {
    className: 'extralight',
    fontWeight: '200',
    fontWeightName: 'Extra light',
  },
  {
    className: 'light',
    fontWeight: '300',
    fontWeightName: 'light',
  },
  {
    className: 'normal',
    fontWeight: '400',
    fontWeightName: 'Normal',
  },
  {
    className: 'font-medium',
    fontWeight: '500',
    fontWeightName: 'Medium',
  },
  {
    className: 'semibold',
    fontWeight: '600',
    fontWeightName: 'Semibold',
  },
  {
    className: 'bold',
    fontWeight: '700',
    fontWeightName: 'Bold',
  },
]
