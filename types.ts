export interface Product {
  __typename:       string;
  id:               string;
  title:            string;
  description:      string;
  slug:             string;
  bimLink:          string;
  presentation:     string;
  image:            EnvironmentImage;
  environmentImage: EnvironmentImage;
  colorImages:      EnvironmentImage[];
  family:           Connection;
  categories:       Connection[];
  connection:       Connection;
  designer:         Connection;
  dimmable:         Connection;
  electricalData:   Connection[];
  gallery:          EnvironmentImage[];
  lightFile:        null;
  models:           Model[];
  mounting:         null;
  pdfFile:          PDFFile;
  sockets:          Connection[];
  seo:              SEO[];
}

export interface Connection {
  __typename: string;
  id:         string;
  name:       string;
  position?:  number;
}

export interface EnvironmentImage {
  __typename:      string;
  alt:             null | string;
  basename:        string;
  format:          string;
  height:          number;
  id:              string;
  mimeType:        string;
  size:            number;
  title:           null | string;
  url:             string;
  width:           number;
  responsiveImage: ResponsiveImage | null;
}

export interface ResponsiveImage {
  __typename:  string;
  alt:         null | string;
  aspectRatio: number;
  base64:      string;
  bgColor:     string;
  height:      number;
  sizes:       string;
  src:         string;
  srcSet:      string;
  webpSrcSet:  string;
  title:       null | string;
  width:       number;
}

export interface Model {
  __typename:   string;
  id:           string;
  name:         null;
  drawing:      EnvironmentImage;
  lightsources: LightsourceElement[];
  variants:     Variant[];
  accessories:  any[];
}

export interface LightsourceElement {
  __typename:  string;
  id:          string;
  included:    boolean;
  amount:      number;
  optional:    boolean;
  lightsource: Lightsource;
}

export interface Lightsource {
  __typename: string;
  id:         string;
  name:       string;
  price:      number;
  articleNo:  string;
}

export interface Variant {
  __typename: string;
  color:      Connection | null;
  id:         string;
  material:   Connection | null;
  price:      number;
  volume:     number | null;
  weight:     number | null;
  feature:    Feature;
  articleNo:  string;
}

export interface Feature {
  __typename: string;
  name:       string;
}

export interface PDFFile {
  __typename: string;
  alt:        string;
  basename:   string;
  filename:   string;
  format:     string;
  id:         string;
  size:       number;
  tags:       string[];
  title:      string;
  url:        string;
}

export interface SEO {
  __typename: Typename;
  attributes: Attributes | null;
  content:    null | string;
  tag:        Tag;
}

export enum Typename {
  Tag = "Tag",
}

export interface Attributes {
  property?: string;
  content:   string;
  name?:     string;
}

export enum Tag {
  Meta = "meta",
  Title = "title",
}

export interface IntlMessage { 
  key:string, 
  value:string 
}
export type Locale = 'en' | 'sv' | 'no'
