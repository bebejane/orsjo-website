type Maybe<T> = T;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BooleanType: any;
  CustomData: any;
  DateTime: any;
  FloatType: any;
  IntType: any;
  ItemId: any;
  MetaTagAttributes: any;
  UploadId: any;
};

type About = Interface & {
  __typename?: 'About';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  sections: Array<AboutSection>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type About_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type AboutintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type AboutSection = Interface & {
  __typename?: 'AboutSection';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  video?: Maybe<FileField>;
};


type AboutSection_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type AboutSectiontextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type Accessory = Interface & {
  __typename?: 'Accessory';
  _modelApiKey: Scalars['String'];
  accessory?: Maybe<ProductAccessory>;
  articleNo?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  price?: Maybe<Scalars['FloatType']>;
  updatedAt: Scalars['DateTime'];
};


type Accessory_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type BespokeProject = Interface & {
  __typename?: 'BespokeProject';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  project?: Maybe<Project>;
  summary?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type BespokeProject_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type BespokeProjectsummaryArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type Bespoke = Interface & {
  __typename?: 'Bespoke';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  examples: Array<BespokeProject>;
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  outro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type Bespoke_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type BespokeintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type BespokeoutroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type BooleanFilter = {
  eq?: InputMaybe<Scalars['BooleanType']>;
};

type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType'];
};

enum ColorBucketType {
  black = 'black',
  blue = 'blue',
  brown = 'brown',
  cyan = 'cyan',
  green = 'green',
  grey = 'grey',
  orange = 'orange',
  pink = 'pink',
  purple = 'purple',
  red = 'red',
  white = 'white',
  yellow = 'yellow'
}

type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType'];
  blue: Scalars['IntType'];
  green: Scalars['IntType'];
  hex: Scalars['String'];
  red: Scalars['IntType'];
};

type ContactModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ContactModelFilter>>>;
  address?: InputMaybe<TextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  intro?: InputMaybe<TextFilter>;
  phone?: InputMaybe<StringFilter>;
  showroomIntro?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ContactModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  phone_ASC = 'phone_ASC',
  phone_DESC = 'phone_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type Contact = Interface & {
  __typename?: 'Contact';
  _modelApiKey: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showroomIntro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type Contact_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ContactaddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type ContactintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type ContactshowroomIntroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type CountryModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<CountryModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum CountryModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type Country = Interface & {
  __typename?: 'Country';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type Country_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type Country_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type CountrynameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type CreatedAtFilter = {
  eq?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
};

type DesignerModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<DesignerModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum DesignerModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type Designer = Interface & {
  __typename?: 'Designer';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type Designer_allDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type Designer_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type DesignerdescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type DistributorModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<DistributorModelFilter>>>;
  address?: InputMaybe<TextFilter>;
  city?: InputMaybe<StringFilter>;
  contactName?: InputMaybe<StringFilter>;
  country?: InputMaybe<LinkFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  postalCode?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
};

enum DistributorModelOrderBy {
  city_ASC = 'city_ASC',
  city_DESC = 'city_DESC',
  contactName_ASC = 'contactName_ASC',
  contactName_DESC = 'contactName_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  phone_ASC = 'phone_ASC',
  phone_DESC = 'phone_DESC',
  postalCode_ASC = 'postalCode_ASC',
  postalCode_DESC = 'postalCode_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

type Distributor = Interface & {
  __typename?: 'Distributor';
  _modelApiKey: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};


type Distributor_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type DistributoraddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type Download = Interface & {
  __typename?: 'Download';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type Download_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type EmployeeModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<EmployeeModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum EmployeeModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  phone_ASC = 'phone_ASC',
  phone_DESC = 'phone_DESC',
  role_ASC = 'role_ASC',
  role_DESC = 'role_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type Employee = Interface & {
  __typename?: 'Employee';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type Employee_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FactoryVisit = Interface & {
  __typename?: 'FactoryVisit';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type FactoryVisit_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type FactoryVisitintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type FaqCategoryModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<FaqCategoryModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum FaqCategoryModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type FaqCategory = Interface & {
  __typename?: 'FaqCategory';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type FaqCategory_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FaqModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<FaqModelFilter>>>;
  answer?: InputMaybe<TextFilter>;
  category?: InputMaybe<LinkFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  question?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum FaqModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  question_ASC = 'question_ASC',
  question_DESC = 'question_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type Faq = Interface & {
  __typename?: 'Faq';
  _modelApiKey: Scalars['String'];
  answer?: Maybe<Scalars['String']>;
  category?: Maybe<FaqCategory>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  question?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type Faq_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type FaqanswerArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type FaqStart = Interface & {
  __typename?: 'FaqStart';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type FaqStart_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type FaqStartintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication'
}

type Featured = Interface & {
  __typename?: 'Featured';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  items: Array<Product>;
  updatedAt: Scalars['DateTime'];
};


type Featured_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
};


type FileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: InputMaybe<Scalars['Float']>;
  quality?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


type FileFieldcustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldfocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
};


type FileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

type FileFieldInterface = {
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
};


type FileFieldInterfacealtArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: InputMaybe<Scalars['Float']>;
  quality?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


type FileFieldInterfacecustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfacefocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
};


type FileFieldInterfacetitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

type FileFieldMultiLocaleField = {
  __typename?: 'FileFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<FileField>;
};

type FileFilter = {
  eq?: InputMaybe<Scalars['UploadId']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  neq?: InputMaybe<Scalars['UploadId']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

type FloatFilter = {
  eq?: InputMaybe<Scalars['FloatType']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  gt?: InputMaybe<Scalars['FloatType']>;
  gte?: InputMaybe<Scalars['FloatType']>;
  lt?: InputMaybe<Scalars['FloatType']>;
  lte?: InputMaybe<Scalars['FloatType']>;
  neq?: InputMaybe<Scalars['FloatType']>;
};

type FullscreenImageModelLinkField = Designer | Product;

type FullscreenImage = Interface & {
  __typename?: 'FullscreenImage';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  link?: Maybe<FullscreenImageModelLinkField>;
  subHeadline?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type FullscreenImage_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FullscreenVideo = Interface & {
  __typename?: 'FullscreenVideo';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  link?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  video?: Maybe<FileField>;
};


type FullscreenVideo_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type FullscreenVideotextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type FullwidthImage = Interface & {
  __typename?: 'FullwidthImage';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  updatedAt: Scalars['DateTime'];
};


type FullwidthImage_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type GalleryFilter = {
  allIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  eq?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
};

type ImageGallery = Interface & {
  __typename?: 'ImageGallery';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  gallery: Array<FileField>;
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


type ImageGallery_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ImageLink = Interface & {
  __typename?: 'ImageLink';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  firstHeadline?: Maybe<Scalars['String']>;
  firstImage?: Maybe<FileField>;
  firstLink?: Maybe<Scalars['String']>;
  firstLinkText?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  secondHeadline?: Maybe<Scalars['String']>;
  secondImage?: Maybe<FileField>;
  secondLink?: Maybe<Scalars['String']>;
  secondLinkText?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ImageLink_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ImgixParams = {
  ar?: InputMaybe<Scalars['String']>;
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  bg?: InputMaybe<Scalars['String']>;
  blend?: InputMaybe<Scalars['String']>;
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  blendAlpha?: InputMaybe<Scalars['IntType']>;
  blendColor?: InputMaybe<Scalars['String']>;
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  blendH?: InputMaybe<Scalars['FloatType']>;
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  blendPad?: InputMaybe<Scalars['IntType']>;
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  blendW?: InputMaybe<Scalars['FloatType']>;
  blendX?: InputMaybe<Scalars['IntType']>;
  blendY?: InputMaybe<Scalars['IntType']>;
  blur?: InputMaybe<Scalars['IntType']>;
  border?: InputMaybe<Scalars['String']>;
  borderBottom?: InputMaybe<Scalars['IntType']>;
  borderLeft?: InputMaybe<Scalars['IntType']>;
  borderRadius?: InputMaybe<Scalars['String']>;
  borderRadiusInner?: InputMaybe<Scalars['String']>;
  borderRight?: InputMaybe<Scalars['IntType']>;
  borderTop?: InputMaybe<Scalars['IntType']>;
  bri?: InputMaybe<Scalars['IntType']>;
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  chromasub?: InputMaybe<Scalars['IntType']>;
  colorquant?: InputMaybe<Scalars['IntType']>;
  colors?: InputMaybe<Scalars['IntType']>;
  con?: InputMaybe<Scalars['IntType']>;
  cornerRadius?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  cs?: InputMaybe<ImgixParamsCs>;
  dl?: InputMaybe<Scalars['String']>;
  dpi?: InputMaybe<Scalars['IntType']>;
  dpr?: InputMaybe<Scalars['FloatType']>;
  duotone?: InputMaybe<Scalars['String']>;
  duotoneAlpha?: InputMaybe<Scalars['IntType']>;
  exp?: InputMaybe<Scalars['IntType']>;
  expires?: InputMaybe<Scalars['IntType']>;
  faceindex?: InputMaybe<Scalars['IntType']>;
  facepad?: InputMaybe<Scalars['FloatType']>;
  faces?: InputMaybe<Scalars['IntType']>;
  fill?: InputMaybe<ImgixParamsFill>;
  fillColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<ImgixParamsFit>;
  flip?: InputMaybe<ImgixParamsFlip>;
  fm?: InputMaybe<ImgixParamsFm>;
  fpDebug?: InputMaybe<Scalars['BooleanType']>;
  fpX?: InputMaybe<Scalars['FloatType']>;
  fpY?: InputMaybe<Scalars['FloatType']>;
  fpZ?: InputMaybe<Scalars['FloatType']>;
  gam?: InputMaybe<Scalars['IntType']>;
  gridColors?: InputMaybe<Scalars['String']>;
  gridSize?: InputMaybe<Scalars['IntType']>;
  h?: InputMaybe<Scalars['FloatType']>;
  high?: InputMaybe<Scalars['IntType']>;
  htn?: InputMaybe<Scalars['IntType']>;
  hue?: InputMaybe<Scalars['IntType']>;
  invert?: InputMaybe<Scalars['BooleanType']>;
  iptc?: InputMaybe<ImgixParamsIptc>;
  lossless?: InputMaybe<Scalars['BooleanType']>;
  mark?: InputMaybe<Scalars['String']>;
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  markAlpha?: InputMaybe<Scalars['IntType']>;
  markBase?: InputMaybe<Scalars['String']>;
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  markH?: InputMaybe<Scalars['FloatType']>;
  markPad?: InputMaybe<Scalars['IntType']>;
  markRot?: InputMaybe<Scalars['FloatType']>;
  markScale?: InputMaybe<Scalars['IntType']>;
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  markW?: InputMaybe<Scalars['FloatType']>;
  markX?: InputMaybe<Scalars['IntType']>;
  markY?: InputMaybe<Scalars['IntType']>;
  mask?: InputMaybe<Scalars['String']>;
  maskBg?: InputMaybe<Scalars['String']>;
  maxH?: InputMaybe<Scalars['IntType']>;
  maxW?: InputMaybe<Scalars['IntType']>;
  minH?: InputMaybe<Scalars['IntType']>;
  minW?: InputMaybe<Scalars['IntType']>;
  monochrome?: InputMaybe<Scalars['String']>;
  nr?: InputMaybe<Scalars['IntType']>;
  nrs?: InputMaybe<Scalars['IntType']>;
  orient?: InputMaybe<Scalars['IntType']>;
  pad?: InputMaybe<Scalars['IntType']>;
  padBottom?: InputMaybe<Scalars['IntType']>;
  padLeft?: InputMaybe<Scalars['IntType']>;
  padRight?: InputMaybe<Scalars['IntType']>;
  padTop?: InputMaybe<Scalars['IntType']>;
  page?: InputMaybe<Scalars['IntType']>;
  palette?: InputMaybe<ImgixParamsPalette>;
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']>;
  prefix?: InputMaybe<Scalars['String']>;
  px?: InputMaybe<Scalars['IntType']>;
  q?: InputMaybe<Scalars['IntType']>;
  rect?: InputMaybe<Scalars['String']>;
  rot?: InputMaybe<Scalars['FloatType']>;
  sat?: InputMaybe<Scalars['IntType']>;
  sepia?: InputMaybe<Scalars['IntType']>;
  shad?: InputMaybe<Scalars['FloatType']>;
  sharp?: InputMaybe<Scalars['FloatType']>;
  transparency?: InputMaybe<ImgixParamsTransparency>;
  trim?: InputMaybe<ImgixParamsTrim>;
  trimColor?: InputMaybe<Scalars['String']>;
  trimMd?: InputMaybe<Scalars['FloatType']>;
  trimPad?: InputMaybe<Scalars['IntType']>;
  trimSd?: InputMaybe<Scalars['FloatType']>;
  trimTol?: InputMaybe<Scalars['FloatType']>;
  txt?: InputMaybe<Scalars['String']>;
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  txtColor?: InputMaybe<Scalars['String']>;
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  txtFont?: InputMaybe<Scalars['String']>;
  txtLead?: InputMaybe<Scalars['IntType']>;
  txtLig?: InputMaybe<Scalars['IntType']>;
  txtLine?: InputMaybe<Scalars['IntType']>;
  txtLineColor?: InputMaybe<Scalars['String']>;
  txtPad?: InputMaybe<Scalars['IntType']>;
  txtShad?: InputMaybe<Scalars['FloatType']>;
  txtSize?: InputMaybe<Scalars['IntType']>;
  txtTrack?: InputMaybe<Scalars['IntType']>;
  txtWidth?: InputMaybe<Scalars['IntType']>;
  txtX?: InputMaybe<Scalars['IntType']>;
  txtY?: InputMaybe<Scalars['IntType']>;
  usm?: InputMaybe<Scalars['IntType']>;
  usmrad?: InputMaybe<Scalars['FloatType']>;
  vib?: InputMaybe<Scalars['IntType']>;
  w?: InputMaybe<Scalars['FloatType']>;
};

enum ImgixParamsAuto {
  compress = 'compress',
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye'
}

enum ImgixParamsBlendAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendCrop {
  bottom = 'bottom',
  faces = 'faces',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsBlendMode {
  burn = 'burn',
  color = 'color',
  darken = 'darken',
  difference = 'difference',
  dodge = 'dodge',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  normal = 'normal',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight'
}

enum ImgixParamsBlendSize {
  inherit = 'inherit'
}

enum ImgixParamsCh {
  dpr = 'dpr',
  saveData = 'saveData',
  width = 'width'
}

enum ImgixParamsCrop {
  bottom = 'bottom',
  edges = 'edges',
  entropy = 'entropy',
  faces = 'faces',
  focalpoint = 'focalpoint',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsCs {
  adobergb1998 = 'adobergb1998',
  srgb = 'srgb',
  strip = 'strip',
  tinysrgb = 'tinysrgb'
}

enum ImgixParamsFill {
  blur = 'blur',
  solid = 'solid'
}

enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale'
}

enum ImgixParamsFlip {
  h = 'h',
  hv = 'hv',
  v = 'v'
}

enum ImgixParamsFm {
  avif = 'avif',
  blurhash = 'blurhash',
  gif = 'gif',
  jp2 = 'jp2',
  jpg = 'jpg',
  json = 'json',
  jxr = 'jxr',
  mp4 = 'mp4',
  pjpg = 'pjpg',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webm = 'webm',
  webp = 'webp'
}

enum ImgixParamsIptc {
  allow = 'allow',
  block = 'block'
}

enum ImgixParamsMarkAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsMarkTile {
  grid = 'grid'
}

enum ImgixParamsPalette {
  css = 'css',
  json = 'json'
}

enum ImgixParamsTransparency {
  grid = 'grid'
}

enum ImgixParamsTrim {
  auto = 'auto',
  color = 'color'
}

enum ImgixParamsTxtAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsTxtClip {
  ellipsis = 'ellipsis',
  end = 'end',
  middle = 'middle',
  start = 'start'
}

enum ImgixParamsTxtFit {
  max = 'max'
}

type InUseFilter = {
  eq?: InputMaybe<Scalars['BooleanType']>;
};

type ItemIdFilter = {
  eq?: InputMaybe<Scalars['ItemId']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  neq?: InputMaybe<Scalars['ItemId']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated'
}

type JobModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<JobModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  summary?: InputMaybe<TextFilter>;
  text?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum JobModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type Job = Interface & {
  __typename?: 'Job';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  summary?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type Job_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type JobsummaryArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type JobtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type Lightsource = Interface & {
  __typename?: 'Lightsource';
  _modelApiKey: Scalars['String'];
  amount?: Maybe<Scalars['IntType']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  included?: Maybe<Scalars['BooleanType']>;
  lightsource?: Maybe<ProductLightsource>;
  optional?: Maybe<Scalars['BooleanType']>;
  updatedAt: Scalars['DateTime'];
};


type Lightsource_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type LinkFilter = {
  eq?: InputMaybe<Scalars['ItemId']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  neq?: InputMaybe<Scalars['ItemId']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

type LinksFilter = {
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

type Manual = Interface & {
  __typename?: 'Manual';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type Manual_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ManualintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png'
}

type NewsModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<NewsModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  link?: InputMaybe<StringFilter>;
  linkText?: InputMaybe<StringFilter>;
  text?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum NewsModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  linkText_ASC = 'linkText_ASC',
  linkText_DESC = 'linkText_DESC',
  link_ASC = 'link_ASC',
  link_DESC = 'link_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type News = Interface & {
  __typename?: 'News';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  link?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type News_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type NewstextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type OrientationFilter = {
  eq?: InputMaybe<UploadOrientation>;
  neq?: InputMaybe<UploadOrientation>;
};

type PositionFilter = {
  eq?: InputMaybe<Scalars['IntType']>;
  gt?: InputMaybe<Scalars['IntType']>;
  gte?: InputMaybe<Scalars['IntType']>;
  lt?: InputMaybe<Scalars['IntType']>;
  lte?: InputMaybe<Scalars['IntType']>;
  neq?: InputMaybe<Scalars['IntType']>;
};

type Pricelist = Interface & {
  __typename?: 'Pricelist';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  pdfFile?: Maybe<FileField>;
  updatedAt: Scalars['DateTime'];
};


type Pricelist_allPdfFileLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type Pricelist_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type PricelistpdfFileArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductAccessoryModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductAccessoryModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductAccessoryModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductAccessory = Interface & {
  __typename?: 'ProductAccessory';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductAccessory_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductAccessory_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductAccessorynameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductCategoryModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductCategoryModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductCategoryModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductCategory = Interface & {
  __typename?: 'ProductCategory';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['IntType']>;
  updatedAt: Scalars['DateTime'];
};


type ProductCategory_allDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type ProductCategory_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductCategory_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductCategorydescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type ProductCategorynameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductColorModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductColorModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductColorModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductColor = Interface & {
  __typename?: 'ProductColor';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductColor_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductColor_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductColornameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductConnectionModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductConnectionModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductConnectionModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductConnection = Interface & {
  __typename?: 'ProductConnection';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductConnection_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductConnection_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductConnectionnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductDimmableModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductDimmableModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductDimmableModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductDimmable = Interface & {
  __typename?: 'ProductDimmable';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductDimmable_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductDimmable_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductDimmablenameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductElectricalModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductElectricalModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductElectricalModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductElectrical = Interface & {
  __typename?: 'ProductElectrical';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductElectrical_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductElectrical_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductElectricalnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductFamilyModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductFamilyModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductFamilyModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductFamily = Interface & {
  __typename?: 'ProductFamily';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductFamily_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductFeatureModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductFeatureModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductFeatureModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductFeature = Interface & {
  __typename?: 'ProductFeature';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductFeature_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductFeature_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductFeaturenameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductLightsourceModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductLightsourceModelFilter>>>;
  articleNo?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductLightsourceModelOrderBy {
  articleNo_ASC = 'articleNo_ASC',
  articleNo_DESC = 'articleNo_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  price_ASC = 'price_ASC',
  price_DESC = 'price_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductLightsource = Interface & {
  __typename?: 'ProductLightsource';
  _modelApiKey: Scalars['String'];
  articleNo?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['FloatType']>;
  updatedAt: Scalars['DateTime'];
};


type ProductLightsource_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductLightsource_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductLightsourcenameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductMaterialModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductMaterialModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductMaterialModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductMaterial = Interface & {
  __typename?: 'ProductMaterial';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductMaterial_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductMaterial_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductMaterialnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductModelFilter>>>;
  bimLink?: InputMaybe<StringFilter>;
  categories?: InputMaybe<LinksFilter>;
  colorImages?: InputMaybe<GalleryFilter>;
  connection?: InputMaybe<LinkFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  designer?: InputMaybe<LinkFilter>;
  dimmable?: InputMaybe<LinkFilter>;
  electricalData?: InputMaybe<LinksFilter>;
  environmentImage?: InputMaybe<FileFilter>;
  family?: InputMaybe<LinkFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  lightFile?: InputMaybe<FileFilter>;
  mounting?: InputMaybe<LinkFilter>;
  mountingInstructions?: InputMaybe<FileFilter>;
  pdfFile?: InputMaybe<FileFilter>;
  presentation?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  sockets?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

type ProductModelNameModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductModelNameModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductModelNameModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductModelName = Interface & {
  __typename?: 'ProductModelName';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductModelName_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductModelName_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductModelNamenameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

enum ProductModelOrderBy {
  bimLink_ASC = 'bimLink_ASC',
  bimLink_DESC = 'bimLink_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  presentation_ASC = 'presentation_ASC',
  presentation_DESC = 'presentation_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductModelProductGalleryField = FullwidthImage | ImageGallery | Text | TwoColumnImage | Video;

type ProductModel = Interface & {
  __typename?: 'ProductModel';
  _modelApiKey: Scalars['String'];
  accessories: Array<Accessory>;
  createdAt: Scalars['DateTime'];
  drawing?: Maybe<FileField>;
  id: Scalars['ItemId'];
  lightsources: Array<Lightsource>;
  name?: Maybe<ProductModelName>;
  updatedAt: Scalars['DateTime'];
  variants: Array<Variant>;
};


type ProductModel_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductMountingModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductMountingModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductMountingModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductMounting = Interface & {
  __typename?: 'ProductMounting';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductMounting_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductMounting_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductMountingnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type Product = Interface & {
  __typename?: 'Product';
  _modelApiKey: Scalars['String'];
  bimLink?: Maybe<Scalars['String']>;
  categories: Array<ProductCategory>;
  colorImages: Array<FileField>;
  connection?: Maybe<ProductConnection>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  designer?: Maybe<Designer>;
  dimmable?: Maybe<ProductDimmable>;
  electricalData: Array<ProductElectrical>;
  environmentImage?: Maybe<FileField>;
  family?: Maybe<ProductFamily>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  lightFile?: Maybe<FileField>;
  models: Array<ProductModel>;
  mounting?: Maybe<ProductMounting>;
  mountingInstructions?: Maybe<FileField>;
  pdfFile?: Maybe<FileField>;
  presentation?: Maybe<Scalars['String']>;
  productGallery: Array<ProductModelProductGalleryField>;
  slug?: Maybe<Scalars['String']>;
  sockets: Array<ProductSocket>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type Product_allDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type Product_allPdfFileLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type Product_allPresentationLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type Product_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductdescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type ProductpdfFileArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductpresentationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductSocketModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductSocketModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductSocketModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductSocket = Interface & {
  __typename?: 'ProductSocket';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductSocket_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductStart = Interface & {
  __typename?: 'ProductStart';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  featured: Array<Featured>;
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


type ProductStart_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProjectModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  location?: InputMaybe<StringFilter>;
  projectType?: InputMaybe<LinkFilter>;
  secondaryImage?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

type ProjectModelGalleryField = FullwidthImage | ImageGallery | Text | TwoColumnImage | Video;

enum ProjectModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  location_ASC = 'location_ASC',
  location_DESC = 'location_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type Project = Interface & {
  __typename?: 'Project';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  gallery: Array<ProjectModelGalleryField>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  location?: Maybe<Scalars['String']>;
  projectType?: Maybe<ProjectType>;
  secondaryImage?: Maybe<FileField>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type Project_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProjectStart = Interface & {
  __typename?: 'ProjectStart';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProjectStart_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProjectStartintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type ProjectTypeModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProjectTypeModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProjectTypeModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProjectType = Interface & {
  __typename?: 'ProjectType';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProjectType_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type PublishedAtFilter = {
  eq?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
};

type Query = {
  __typename?: 'Query';
  about?: Maybe<About>;
  allContacts: Array<Contact>;
  allCountries: Array<Country>;
  allDesigners: Array<Designer>;
  allDistributors: Array<Distributor>;
  allEmployees: Array<Employee>;
  allFaqCategories: Array<FaqCategory>;
  allFaqs: Array<Faq>;
  allJobs: Array<Job>;
  allNews: Array<News>;
  allProductAccessories: Array<ProductAccessory>;
  allProductCategories: Array<ProductCategory>;
  allProductColors: Array<ProductColor>;
  allProductConnections: Array<ProductConnection>;
  allProductDimmables: Array<ProductDimmable>;
  allProductElectricals: Array<ProductElectrical>;
  allProductFamilies: Array<ProductFamily>;
  allProductFeatures: Array<ProductFeature>;
  allProductLightsources: Array<ProductLightsource>;
  allProductMaterials: Array<ProductMaterial>;
  allProductModelNames: Array<ProductModelName>;
  allProductMountings: Array<ProductMounting>;
  allProductSockets: Array<ProductSocket>;
  allProducts: Array<Product>;
  allProjectTypes: Array<ProjectType>;
  allProjects: Array<Project>;
  allResellers: Array<Reseller>;
  allShowrooms: Array<Showroom>;
  allTranslations: Array<Translation>;
  allUploads: Array<FileField>;
  bespoke?: Maybe<Bespoke>;
  contact?: Maybe<Contact>;
  country?: Maybe<Country>;
  designer?: Maybe<Designer>;
  distributor?: Maybe<Distributor>;
  download?: Maybe<Download>;
  employee?: Maybe<Employee>;
  factoryVisit?: Maybe<FactoryVisit>;
  faq?: Maybe<Faq>;
  faqCategory?: Maybe<FaqCategory>;
  faqStart?: Maybe<FaqStart>;
  job?: Maybe<Job>;
  manual?: Maybe<Manual>;
  news?: Maybe<News>;
  pricelist?: Maybe<Pricelist>;
  product?: Maybe<Product>;
  productAccessory?: Maybe<ProductAccessory>;
  productCategory?: Maybe<ProductCategory>;
  productColor?: Maybe<ProductColor>;
  productConnection?: Maybe<ProductConnection>;
  productDimmable?: Maybe<ProductDimmable>;
  productElectrical?: Maybe<ProductElectrical>;
  productFamily?: Maybe<ProductFamily>;
  productFeature?: Maybe<ProductFeature>;
  productLightsource?: Maybe<ProductLightsource>;
  productMaterial?: Maybe<ProductMaterial>;
  productModelName?: Maybe<ProductModelName>;
  productMounting?: Maybe<ProductMounting>;
  productSocket?: Maybe<ProductSocket>;
  productStart?: Maybe<ProductStart>;
  project?: Maybe<Project>;
  projectStart?: Maybe<ProjectStart>;
  projectType?: Maybe<ProjectType>;
  reseller?: Maybe<Reseller>;
  showroom?: Maybe<Showroom>;
  start?: Maybe<Start>;
  sustainability?: Maybe<Sustainability>;
  translation?: Maybe<Translation>;
  upload?: Maybe<FileField>;
};


type Query_allContactsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ContactModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allCountriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allDesignersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DesignerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allDistributorsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistributorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allEmployeesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EmployeeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allFaqCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allFaqsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allJobsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<JobModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allNewsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProductAccessoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductAccessoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProductCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProductColorsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductColorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProductConnectionsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductConnectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProductDimmablesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductDimmableModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProductElectricalsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductElectricalModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProductFamiliesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFamilyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProductFeaturesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFeatureModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProductLightsourcesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductLightsourceModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProductMaterialsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMaterialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProductModelNamesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelNameModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProductMountingsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMountingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProductSocketsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductSocketModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProductsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProjectTypesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allProjectsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allResellersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ResellerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allShowroomsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShowroomModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allTranslationsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TranslationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_allUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


type Query_siteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type QueryaboutArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type QueryallContactsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ContactModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ContactModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallCountriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CountryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallDesignersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DesignerModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DesignerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallDistributorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistributorModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DistributorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallEmployeesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EmployeeModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EmployeeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallFaqCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallFaqsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallJobsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<JobModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<JobModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProductAccessoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductAccessoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductAccessoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProductCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProductColorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductColorModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductColorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProductConnectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductConnectionModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductConnectionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProductDimmablesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductDimmableModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductDimmableModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProductElectricalsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductElectricalModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductElectricalModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProductFamiliesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFamilyModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFamilyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProductFeaturesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFeatureModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFeatureModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProductLightsourcesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductLightsourceModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductLightsourceModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProductMaterialsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMaterialModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMaterialModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProductModelNamesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelNameModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelNameModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProductMountingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMountingModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMountingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProductSocketsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductSocketModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductSocketModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProductsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProjectTypesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectTypeModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectTypeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallResellersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ResellerModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ResellerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallShowroomsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShowroomModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShowroomModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallTranslationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TranslationModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TranslationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QueryallUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


type QuerybespokeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type QuerycontactArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ContactModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ContactModelOrderBy>>>;
};


type QuerycountryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CountryModelOrderBy>>>;
};


type QuerydesignerArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DesignerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DesignerModelOrderBy>>>;
};


type QuerydistributorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistributorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DistributorModelOrderBy>>>;
};


type QuerydownloadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type QueryemployeeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EmployeeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EmployeeModelOrderBy>>>;
};


type QueryfactoryVisitArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type QueryfaqArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
};


type QueryfaqCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqCategoryModelOrderBy>>>;
};


type QueryfaqStartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type QueryjobArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<JobModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<JobModelOrderBy>>>;
};


type QuerymanualArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type QuerynewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
};


type QuerypricelistArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type QueryproductArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
};


type QueryproductAccessoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductAccessoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductAccessoryModelOrderBy>>>;
};


type QueryproductCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductCategoryModelOrderBy>>>;
};


type QueryproductColorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductColorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductColorModelOrderBy>>>;
};


type QueryproductConnectionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductConnectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductConnectionModelOrderBy>>>;
};


type QueryproductDimmableArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductDimmableModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductDimmableModelOrderBy>>>;
};


type QueryproductElectricalArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductElectricalModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductElectricalModelOrderBy>>>;
};


type QueryproductFamilyArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFamilyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFamilyModelOrderBy>>>;
};


type QueryproductFeatureArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFeatureModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFeatureModelOrderBy>>>;
};


type QueryproductLightsourceArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductLightsourceModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductLightsourceModelOrderBy>>>;
};


type QueryproductMaterialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMaterialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMaterialModelOrderBy>>>;
};


type QueryproductModelNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelNameModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelNameModelOrderBy>>>;
};


type QueryproductMountingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMountingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMountingModelOrderBy>>>;
};


type QueryproductSocketArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductSocketModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductSocketModelOrderBy>>>;
};


type QueryproductStartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type QueryprojectArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
};


type QueryprojectStartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type QueryprojectTypeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectTypeModelOrderBy>>>;
};


type QueryresellerArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ResellerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ResellerModelOrderBy>>>;
};


type QueryshowroomArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShowroomModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShowroomModelOrderBy>>>;
};


type QuerystartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type QuerysustainabilityArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type QuerytranslationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TranslationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TranslationModelOrderBy>>>;
};


type QueryuploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

type Interface = {
  _modelApiKey: Scalars['String'];
  id: Scalars['ItemId'];
};


type Interface_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ResellerModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ResellerModelFilter>>>;
  address?: InputMaybe<TextFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<LinkFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  postalCode?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
};

enum ResellerModelOrderBy {
  city_ASC = 'city_ASC',
  city_DESC = 'city_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  postalCode_ASC = 'postalCode_ASC',
  postalCode_DESC = 'postalCode_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

type Reseller = Interface & {
  __typename?: 'Reseller';
  _modelApiKey: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};


type Reseller_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ReselleraddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type ResolutionFilter = {
  eq?: InputMaybe<ResolutionType>;
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  neq?: InputMaybe<ResolutionType>;
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

enum ResolutionType {
  icon = 'icon',
  large = 'large',
  medium = 'medium',
  small = 'small'
}

type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['FloatType'];
  base64?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  height: Scalars['IntType'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  webpSrcSet: Scalars['String'];
  width: Scalars['IntType'];
};

type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileField>;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
};

type ShowroomModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ShowroomModelFilter>>>;
  additional?: InputMaybe<TextFilter>;
  address?: InputMaybe<TextFilter>;
  city?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ShowroomModelOrderBy {
  city_ASC = 'city_ASC',
  city_DESC = 'city_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type Showroom = Interface & {
  __typename?: 'Showroom';
  _modelApiKey: Scalars['String'];
  additional?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  updatedAt: Scalars['DateTime'];
};


type Showroom_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ShowroomadditionalArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type ShowroomaddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
};


type SitefaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


type SiteglobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

enum SiteLocale {
  en = 'en',
  no = 'no',
  sv = 'sv'
}

type SlugFilter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type StartModelContentField = Featured | FullscreenImage | FullscreenVideo | ImageLink;

type Start = Interface & {
  __typename?: 'Start';
  _modelApiKey: Scalars['String'];
  content: Array<StartModelContentField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


type Start_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type StatusFilter = {
  eq?: InputMaybe<ItemStatus>;
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  neq?: InputMaybe<ItemStatus>;
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<StringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']>;
  pattern: Scalars['String'];
  regexp?: InputMaybe<Scalars['BooleanType']>;
};

type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Scalars['String']>;
};

type Sustainability = Interface & {
  __typename?: 'Sustainability';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type Sustainability_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']>;
  content?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

type TextFilter = {
  exists?: InputMaybe<Scalars['BooleanType']>;
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type Text = Interface & {
  __typename?: 'Text';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type Text_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type TexttextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type TranslationModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<TranslationModelFilter>>>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  key?: InputMaybe<StringFilter>;
  page?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  value?: InputMaybe<StringFilter>;
};

enum TranslationModelOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  key_ASC = 'key_ASC',
  key_DESC = 'key_DESC',
  page_ASC = 'page_ASC',
  page_DESC = 'page_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  value_ASC = 'value_ASC',
  value_DESC = 'value_DESC'
}

type Translation = Interface & {
  __typename?: 'Translation';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  key?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
};


type Translation_allValueLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type Translation_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type TranslationvalueArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type TwoColumnImage = Interface & {
  __typename?: 'TwoColumnImage';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  firstImage?: Maybe<FileField>;
  id: Scalars['ItemId'];
  lastImage?: Maybe<FileField>;
  marginFirst?: Maybe<Scalars['BooleanType']>;
  marginOnLastImage?: Maybe<Scalars['BooleanType']>;
  updatedAt: Scalars['DateTime'];
};


type TwoColumnImage_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type TypeFilter = {
  eq?: InputMaybe<UploadType>;
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  neq?: InputMaybe<UploadType>;
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

type UpdatedAtFilter = {
  eq?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
};

type UploadAltFilter = {
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matches?: InputMaybe<StringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadAuthorFilter = {
  exists?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadBasenameFilter = {
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadColorsFilter = {
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  contains?: InputMaybe<ColorBucketType>;
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

type UploadCopyrightFilter = {
  exists?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadCreatedAtFilter = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
};

type UploadFilenameFilter = {
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadFilter = {
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

type UploadFormatFilter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type UploadHeightFilter = {
  eq?: InputMaybe<Scalars['IntType']>;
  gt?: InputMaybe<Scalars['IntType']>;
  gte?: InputMaybe<Scalars['IntType']>;
  lt?: InputMaybe<Scalars['IntType']>;
  lte?: InputMaybe<Scalars['IntType']>;
  neq?: InputMaybe<Scalars['IntType']>;
};

type UploadIdFilter = {
  eq?: InputMaybe<Scalars['UploadId']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  neq?: InputMaybe<Scalars['UploadId']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

type UploadMd5Filter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type UploadMimeTypeFilter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matches?: InputMaybe<StringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadNotesFilter = {
  exists?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadOrderBy {
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC'
}

enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square'
}

type UploadSizeFilter = {
  eq?: InputMaybe<Scalars['IntType']>;
  gt?: InputMaybe<Scalars['IntType']>;
  gte?: InputMaybe<Scalars['IntType']>;
  lt?: InputMaybe<Scalars['IntType']>;
  lte?: InputMaybe<Scalars['IntType']>;
  neq?: InputMaybe<Scalars['IntType']>;
};

type UploadTagsFilter = {
  allIn?: InputMaybe<Array<Scalars['String']>>;
  anyIn?: InputMaybe<Array<Scalars['String']>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

type UploadTitleFilter = {
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matches?: InputMaybe<StringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadType {
  archive = 'archive',
  audio = 'audio',
  image = 'image',
  pdfdocument = 'pdfdocument',
  presentation = 'presentation',
  richtext = 'richtext',
  spreadsheet = 'spreadsheet',
  video = 'video'
}

type UploadUpdatedAtFilter = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
};

type UploadVideoField = {
  __typename?: 'UploadVideoField';
  duration?: Maybe<Scalars['Int']>;
  framerate?: Maybe<Scalars['Int']>;
  mp4Url?: Maybe<Scalars['String']>;
  muxAssetId: Scalars['String'];
  muxPlaybackId: Scalars['String'];
  streamingUrl: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};


type UploadVideoFieldmp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


type UploadVideoFieldthumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};

type UploadWidthFilter = {
  eq?: InputMaybe<Scalars['IntType']>;
  gt?: InputMaybe<Scalars['IntType']>;
  gte?: InputMaybe<Scalars['IntType']>;
  lt?: InputMaybe<Scalars['IntType']>;
  lte?: InputMaybe<Scalars['IntType']>;
  neq?: InputMaybe<Scalars['IntType']>;
};

type Variant = Interface & {
  __typename?: 'Variant';
  _modelApiKey: Scalars['String'];
  articleNo?: Maybe<Scalars['String']>;
  color?: Maybe<ProductColor>;
  createdAt: Scalars['DateTime'];
  feature?: Maybe<ProductFeature>;
  id: Scalars['ItemId'];
  material?: Maybe<ProductMaterial>;
  price?: Maybe<Scalars['FloatType']>;
  updatedAt: Scalars['DateTime'];
  volume?: Maybe<Scalars['FloatType']>;
  weight?: Maybe<Scalars['FloatType']>;
};


type Variant_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium'
}

type Video = Interface & {
  __typename?: 'Video';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
  video?: Maybe<FileField>;
};


type Video_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type focalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType'];
  y: Scalars['FloatType'];
};
