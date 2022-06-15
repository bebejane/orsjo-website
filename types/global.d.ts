interface Product {
  __typename: string
  id: string
  title: string
  description: string
  slug: string
  bimLink: string
  presentation: string
  image: Image
  environmentImage: Image
  colorImages: Image[]
  family: Family
  categories: Category[]
  connection?: Connection
  designer: Designer
  dimmable?: Dimmable
  electricalData: ElectricalDaum[]
  gallery: Gallery[]
  lightFile?: LightFile
  models: Model[]
  mounting?: Mounting
  pdfFile: PdfFile
  sockets: Socket[]
  seo: Seo[]
}

interface Image {
  __typename: string
  alt?: string
  basename: string
  format: string
  height: number
  id: string
  mimeType: string
  size: number
  title?: string
  url: string
  width: number
  responsiveImage: ResponsiveImage
}

interface ResponsiveImage {
  __typename: string
  alt?: string
  aspectRatio: number
  base64: string
  bgColor: string
  height: number
  sizes: string
  src: string
  srcSet: string
  webpSrcSet: string
  title?: string
  width: number
}

interface Image {
  __typename: string
  alt?: string
  basename: string
  format: string
  height: number
  id: string
  mimeType: string
  size: number
  title?: string
  url: string
  width: number
  responsiveImage: ResponsiveImage
}

interface Family {
  __typename: string
  id: string
  name: string
}

interface Category {
  __typename: string
  id: string
  name: string
  position: number
}

interface Connection {
  __typename: string
  id: string
  name: string
}

interface Designer {
  __typename: string
  id: string
  name: string
}

interface Dimmable {
  __typename: string
  id: string
  name: string
}

interface ElectricalDaum {
  __typename: string
  id: string
  name: string
}

interface Gallery {
  __typename: string
  alt?: string
  basename: string
  format: string
  height: number
  id: string
  mimeType: string
  size: number
  title?: string
  url: string
  width: number
  responsiveImage: ResponsiveImage
}

interface LightFile {
  __typename: string
  alt: any
  basename: string
  filename: string
  format: string
  id: string
  size: number
  tags: string[]
  title: any
  url: string
}

interface Model {
  __typename: string
  id: string
  name?: Name
  drawing?: Drawing
  lightsources: LightsourceElement[]
  variants: Variant[]
  accessories: AccessoryElement[]
}

interface Name {
  __typename: string
  id: string
  name: string
}

interface Drawing {
  __typename: string
  alt: any
  basename: string
  format: string
  height: number
  id: string
  mimeType: string
  size: number
  title: any
  url: string
  width: number
  responsiveImage: any
}

interface LightsourceElement {
  __typename: string
  id: string
  included: boolean
  amount?: number
  optional: boolean
  lightsource: Lightsource
}

interface Lightsource {
  __typename: string
  id: string
  name: string
  price: number
  articleNo: string
}

interface Variant {
  __typename: string
  color?: Color
  id: string
  material?: Material
  price: number
  volume?: number
  weight?: number
  feature?: Feature
  articleNo: string
}

interface Color {
  __typename: string
  id: string
  name: string
}

interface Material {
  __typename: string
  id: string
  name: string
}

interface Feature {
  __typename: string
  name: string
}

interface AccessoryElement {
  __typename: string
  articleNo: string
  price: number
  accessory: Accessory
}

interface Accessory {
  __typename: string
  name: string
}

interface Mounting {
  __typename: string
  id: string
  name: string
}

interface PdfFile {
  __typename: string
  alt: string
  basename: string
  filename: string
  format: string
  id: string
  size: number
  tags: string[]
  title: string
  url: string
}

interface Socket {
  __typename: string
  id: string
  name: string
}

interface Seo {
  __typename: string
  attributes?: Attributes
  content?: string
  tag: string
}

interface Attributes {
  name?: string
  content: string
  property?: string
}

interface IntlMessage { 
  key:string, 
  value:string 
}

type Locale = 'en' | 'sv' | 'no'
