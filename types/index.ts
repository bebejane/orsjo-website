export interface Product {
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

export interface Image {
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

export interface ResponsiveImage {
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

export interface Image {
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

export interface Family {
  __typename: string
  id: string
  name: string
}

export interface Category {
  __typename: string
  id: string
  name: string
  position: number
}

export interface Connection {
  __typename: string
  id: string
  name: string
}

export interface Designer {
  __typename: string
  id: string
  name: string
}

export interface Dimmable {
  __typename: string
  id: string
  name: string
}

export interface ElectricalDaum {
  __typename: string
  id: string
  name: string
}

export interface Gallery {
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

export interface LightFile {
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

export interface Model {
  __typename: string
  id: string
  name?: Name
  drawing?: Drawing
  lightsources: Lightsource[]
  variants: Variant[]
  accessories: Accessory[]
}

export interface Name {
  __typename: string
  id: string
  name: string
}

export interface Drawing {
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

export interface LightsourceElement {
  __typename: string
  id: string
  included: boolean
  amount?: number
  optional: boolean
  lightsource: Lightsource
}

export interface Lightsource {
  __typename: string
  id: string
  name: string
  price: number
  articleNo: string
}

export interface Variant {
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

export interface Color {
  __typename: string
  id: string
  name: string
}

export interface Material {
  __typename: string
  id: string
  name: string
}

export interface Feature {
  __typename: string
  name: string
}

export interface AccessoryElement {
  __typename: string
  articleNo: string
  price: number
  accessory: Accessory
}

export interface Accessory {
  __typename: string
  name: string
}

export interface Mounting {
  __typename: string
  id: string
  name: string
}

export interface PdfFile {
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

export interface Socket {
  __typename: string
  id: string
  name: string
}

export interface Seo {
  __typename: string
  attributes?: Attributes
  content?: string
  tag: string
}

export interface Attributes {
  name?: string
  content: string
  property?: string
}

export interface IntlMessage { 
  key:string, 
  value:string 
}

export type Locale = 'en' | 'sv' | 'no'
