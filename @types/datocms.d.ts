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

type AboutRecord = RecordInterface & {
  __typename?: 'AboutRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  sections: Array<AboutSectionRecord>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type AboutRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type AboutRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type AboutSectionRecord = RecordInterface & {
  __typename?: 'AboutSectionRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  video?: Maybe<FileField>;
};


type AboutSectionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type AboutSectionRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type AccessoryRecord = RecordInterface & {
  __typename?: 'AccessoryRecord';
  _modelApiKey: Scalars['String'];
  accessory?: Maybe<ProductAccessoryRecord>;
  articleNo?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  price?: Maybe<Scalars['FloatType']>;
  updatedAt: Scalars['DateTime'];
};


type AccessoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type BespokeProjectRecord = RecordInterface & {
  __typename?: 'BespokeProjectRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  project?: Maybe<ProjectRecord>;
  summary?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type BespokeProjectRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type BespokeProjectRecordsummaryArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type BespokeRecord = RecordInterface & {
  __typename?: 'BespokeRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  examples: Array<BespokeProjectRecord>;
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  outro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type BespokeRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type BespokeRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type BespokeRecordoutroArgs = {
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

type ContactRecord = RecordInterface & {
  __typename?: 'ContactRecord';
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


type ContactRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ContactRecordaddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type ContactRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type ContactRecordshowroomIntroArgs = {
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

type CountryRecord = RecordInterface & {
  __typename?: 'CountryRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type CountryRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type CountryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type CountryRecordnameArgs = {
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

type DesignerRecord = RecordInterface & {
  __typename?: 'DesignerRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type DesignerRecord_allDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type DesignerRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type DesignerRecorddescriptionArgs = {
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

type DistributorRecord = RecordInterface & {
  __typename?: 'DistributorRecord';
  _modelApiKey: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  country?: Maybe<CountryRecord>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};


type DistributorRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type DistributorRecordaddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type DownloadRecord = RecordInterface & {
  __typename?: 'DownloadRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type DownloadRecord_seoMetaTagsArgs = {
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

type EmployeeRecord = RecordInterface & {
  __typename?: 'EmployeeRecord';
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


type EmployeeRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FactoryVisitRecord = RecordInterface & {
  __typename?: 'FactoryVisitRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type FactoryVisitRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type FactoryVisitRecordintroArgs = {
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

type FaqCategoryRecord = RecordInterface & {
  __typename?: 'FaqCategoryRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type FaqCategoryRecord_seoMetaTagsArgs = {
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

type FaqRecord = RecordInterface & {
  __typename?: 'FaqRecord';
  _modelApiKey: Scalars['String'];
  answer?: Maybe<Scalars['String']>;
  category?: Maybe<FaqCategoryRecord>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  question?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type FaqRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type FaqRecordanswerArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type FaqStartRecord = RecordInterface & {
  __typename?: 'FaqStartRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type FaqStartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type FaqStartRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication'
}

type FeaturedRecord = RecordInterface & {
  __typename?: 'FeaturedRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  items: Array<ProductRecord>;
  updatedAt: Scalars['DateTime'];
};


type FeaturedRecord_seoMetaTagsArgs = {
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

type FullscreenImageModelLinkField = DesignerRecord | ProductRecord;

type FullscreenImageRecord = RecordInterface & {
  __typename?: 'FullscreenImageRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  link?: Maybe<FullscreenImageModelLinkField>;
  subHeadline?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type FullscreenImageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FullscreenVideoRecord = RecordInterface & {
  __typename?: 'FullscreenVideoRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  link?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  video?: Maybe<FileField>;
};


type FullscreenVideoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type FullscreenVideoRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type FullwidthImageRecord = RecordInterface & {
  __typename?: 'FullwidthImageRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  updatedAt: Scalars['DateTime'];
};


type FullwidthImageRecord_seoMetaTagsArgs = {
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

type ImageGalleryRecord = RecordInterface & {
  __typename?: 'ImageGalleryRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  gallery: Array<FileField>;
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


type ImageGalleryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ImageLinkRecord = RecordInterface & {
  __typename?: 'ImageLinkRecord';
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


type ImageLinkRecord_seoMetaTagsArgs = {
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

type JobRecord = RecordInterface & {
  __typename?: 'JobRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  summary?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type JobRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type JobRecordsummaryArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type JobRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type LightsourceRecord = RecordInterface & {
  __typename?: 'LightsourceRecord';
  _modelApiKey: Scalars['String'];
  amount?: Maybe<Scalars['IntType']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  included?: Maybe<Scalars['BooleanType']>;
  lightsource?: Maybe<ProductLightsourceRecord>;
  optional?: Maybe<Scalars['BooleanType']>;
  updatedAt: Scalars['DateTime'];
};


type LightsourceRecord_seoMetaTagsArgs = {
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

type ManualRecord = RecordInterface & {
  __typename?: 'ManualRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ManualRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ManualRecordintroArgs = {
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

type NewsRecord = RecordInterface & {
  __typename?: 'NewsRecord';
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


type NewsRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type NewsRecordtextArgs = {
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

type PricelistRecord = RecordInterface & {
  __typename?: 'PricelistRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  pdfFile?: Maybe<FileField>;
  updatedAt: Scalars['DateTime'];
};


type PricelistRecord_allPdfFileLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type PricelistRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type PricelistRecordpdfFileArgs = {
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

type ProductAccessoryRecord = RecordInterface & {
  __typename?: 'ProductAccessoryRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductAccessoryRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductAccessoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductAccessoryRecordnameArgs = {
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

type ProductCategoryRecord = RecordInterface & {
  __typename?: 'ProductCategoryRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['IntType']>;
  updatedAt: Scalars['DateTime'];
};


type ProductCategoryRecord_allDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type ProductCategoryRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductCategoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductCategoryRecorddescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type ProductCategoryRecordnameArgs = {
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

type ProductColorRecord = RecordInterface & {
  __typename?: 'ProductColorRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductColorRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductColorRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductColorRecordnameArgs = {
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

type ProductConnectionRecord = RecordInterface & {
  __typename?: 'ProductConnectionRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductConnectionRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductConnectionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductConnectionRecordnameArgs = {
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

type ProductDimmableRecord = RecordInterface & {
  __typename?: 'ProductDimmableRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductDimmableRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductDimmableRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductDimmableRecordnameArgs = {
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

type ProductElectricalRecord = RecordInterface & {
  __typename?: 'ProductElectricalRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductElectricalRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductElectricalRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductElectricalRecordnameArgs = {
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

type ProductFamilyRecord = RecordInterface & {
  __typename?: 'ProductFamilyRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductFamilyRecord_seoMetaTagsArgs = {
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

type ProductFeatureRecord = RecordInterface & {
  __typename?: 'ProductFeatureRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductFeatureRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductFeatureRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductFeatureRecordnameArgs = {
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

type ProductLightsourceRecord = RecordInterface & {
  __typename?: 'ProductLightsourceRecord';
  _modelApiKey: Scalars['String'];
  articleNo?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['FloatType']>;
  updatedAt: Scalars['DateTime'];
};


type ProductLightsourceRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductLightsourceRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductLightsourceRecordnameArgs = {
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

type ProductMaterialRecord = RecordInterface & {
  __typename?: 'ProductMaterialRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductMaterialRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductMaterialRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductMaterialRecordnameArgs = {
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

type ProductModelNameRecord = RecordInterface & {
  __typename?: 'ProductModelNameRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductModelNameRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductModelNameRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductModelNameRecordnameArgs = {
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

type ProductModelProductGalleryField = FullwidthImageRecord | ImageGalleryRecord | TextRecord | TwoColumnImageRecord | VideoRecord;

type ProductModelRecord = RecordInterface & {
  __typename?: 'ProductModelRecord';
  _modelApiKey: Scalars['String'];
  accessories: Array<AccessoryRecord>;
  createdAt: Scalars['DateTime'];
  drawing?: Maybe<FileField>;
  id: Scalars['ItemId'];
  lightsources: Array<LightsourceRecord>;
  name?: Maybe<ProductModelNameRecord>;
  updatedAt: Scalars['DateTime'];
  variants: Array<VariantRecord>;
};


type ProductModelRecord_seoMetaTagsArgs = {
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

type ProductMountingRecord = RecordInterface & {
  __typename?: 'ProductMountingRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductMountingRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductMountingRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductMountingRecordnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductRecord = RecordInterface & {
  __typename?: 'ProductRecord';
  _modelApiKey: Scalars['String'];
  bimLink?: Maybe<Scalars['String']>;
  categories: Array<ProductCategoryRecord>;
  colorImages: Array<FileField>;
  connection?: Maybe<ProductConnectionRecord>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  designer?: Maybe<DesignerRecord>;
  dimmable?: Maybe<ProductDimmableRecord>;
  electricalData: Array<ProductElectricalRecord>;
  environmentImage?: Maybe<FileField>;
  family?: Maybe<ProductFamilyRecord>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  lightFile?: Maybe<FileField>;
  models: Array<ProductModelRecord>;
  mounting?: Maybe<ProductMountingRecord>;
  mountingInstructions?: Maybe<FileField>;
  pdfFile?: Maybe<FileField>;
  presentation?: Maybe<Scalars['String']>;
  productGallery: Array<ProductModelProductGalleryField>;
  slug?: Maybe<Scalars['String']>;
  sockets: Array<ProductSocketRecord>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductRecord_allDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type ProductRecord_allPdfFileLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductRecord_allPresentationLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProductRecorddescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type ProductRecordpdfFileArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ProductRecordpresentationArgs = {
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

type ProductSocketRecord = RecordInterface & {
  __typename?: 'ProductSocketRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProductSocketRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductStartRecord = RecordInterface & {
  __typename?: 'ProductStartRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  featured: Array<FeaturedRecord>;
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


type ProductStartRecord_seoMetaTagsArgs = {
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

type ProjectModelGalleryField = FullwidthImageRecord | ImageGalleryRecord | TextRecord | TwoColumnImageRecord | VideoRecord;

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

type ProjectRecord = RecordInterface & {
  __typename?: 'ProjectRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  gallery: Array<ProjectModelGalleryField>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  location?: Maybe<Scalars['String']>;
  projectType?: Maybe<ProjectTypeRecord>;
  secondaryImage?: Maybe<FileField>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProjectRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProjectStartRecord = RecordInterface & {
  __typename?: 'ProjectStartRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProjectStartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ProjectStartRecordintroArgs = {
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

type ProjectTypeRecord = RecordInterface & {
  __typename?: 'ProjectTypeRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type ProjectTypeRecord_seoMetaTagsArgs = {
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
  about?: Maybe<AboutRecord>;
  allContacts: Array<ContactRecord>;
  allCountries: Array<CountryRecord>;
  allDesigners: Array<DesignerRecord>;
  allDistributors: Array<DistributorRecord>;
  allEmployees: Array<EmployeeRecord>;
  allFaqCategories: Array<FaqCategoryRecord>;
  allFaqs: Array<FaqRecord>;
  allJobs: Array<JobRecord>;
  allNews: Array<NewsRecord>;
  allProductAccessories: Array<ProductAccessoryRecord>;
  allProductCategories: Array<ProductCategoryRecord>;
  allProductColors: Array<ProductColorRecord>;
  allProductConnections: Array<ProductConnectionRecord>;
  allProductDimmables: Array<ProductDimmableRecord>;
  allProductElectricals: Array<ProductElectricalRecord>;
  allProductFamilies: Array<ProductFamilyRecord>;
  allProductFeatures: Array<ProductFeatureRecord>;
  allProductLightsources: Array<ProductLightsourceRecord>;
  allProductMaterials: Array<ProductMaterialRecord>;
  allProductModelNames: Array<ProductModelNameRecord>;
  allProductMountings: Array<ProductMountingRecord>;
  allProductSockets: Array<ProductSocketRecord>;
  allProducts: Array<ProductRecord>;
  allProjectTypes: Array<ProjectTypeRecord>;
  allProjects: Array<ProjectRecord>;
  allResellers: Array<ResellerRecord>;
  allShowrooms: Array<ShowroomRecord>;
  allTranslations: Array<TranslationRecord>;
  allUploads: Array<FileField>;
  bespoke?: Maybe<BespokeRecord>;
  contact?: Maybe<ContactRecord>;
  country?: Maybe<CountryRecord>;
  designer?: Maybe<DesignerRecord>;
  distributor?: Maybe<DistributorRecord>;
  download?: Maybe<DownloadRecord>;
  employee?: Maybe<EmployeeRecord>;
  factoryVisit?: Maybe<FactoryVisitRecord>;
  faq?: Maybe<FaqRecord>;
  faqCategory?: Maybe<FaqCategoryRecord>;
  faqStart?: Maybe<FaqStartRecord>;
  job?: Maybe<JobRecord>;
  manual?: Maybe<ManualRecord>;
  news?: Maybe<NewsRecord>;
  pricelist?: Maybe<PricelistRecord>;
  product?: Maybe<ProductRecord>;
  productAccessory?: Maybe<ProductAccessoryRecord>;
  productCategory?: Maybe<ProductCategoryRecord>;
  productColor?: Maybe<ProductColorRecord>;
  productConnection?: Maybe<ProductConnectionRecord>;
  productDimmable?: Maybe<ProductDimmableRecord>;
  productElectrical?: Maybe<ProductElectricalRecord>;
  productFamily?: Maybe<ProductFamilyRecord>;
  productFeature?: Maybe<ProductFeatureRecord>;
  productLightsource?: Maybe<ProductLightsourceRecord>;
  productMaterial?: Maybe<ProductMaterialRecord>;
  productModelName?: Maybe<ProductModelNameRecord>;
  productMounting?: Maybe<ProductMountingRecord>;
  productSocket?: Maybe<ProductSocketRecord>;
  productStart?: Maybe<ProductStartRecord>;
  project?: Maybe<ProjectRecord>;
  projectStart?: Maybe<ProjectStartRecord>;
  projectType?: Maybe<ProjectTypeRecord>;
  reseller?: Maybe<ResellerRecord>;
  showroom?: Maybe<ShowroomRecord>;
  start?: Maybe<StartRecord>;
  sustainability?: Maybe<SustainabilityRecord>;
  translation?: Maybe<TranslationRecord>;
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

type RecordInterface = {
  _modelApiKey: Scalars['String'];
  id: Scalars['ItemId'];
};


type RecordInterface_seoMetaTagsArgs = {
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

type ResellerRecord = RecordInterface & {
  __typename?: 'ResellerRecord';
  _modelApiKey: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<CountryRecord>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};


type ResellerRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ResellerRecordaddressArgs = {
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

type ShowroomRecord = RecordInterface & {
  __typename?: 'ShowroomRecord';
  _modelApiKey: Scalars['String'];
  additional?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  updatedAt: Scalars['DateTime'];
};


type ShowroomRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type ShowroomRecordadditionalArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


type ShowroomRecordaddressArgs = {
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

type StartModelContentField = FeaturedRecord | FullscreenImageRecord | FullscreenVideoRecord | ImageLinkRecord;

type StartRecord = RecordInterface & {
  __typename?: 'StartRecord';
  _modelApiKey: Scalars['String'];
  content: Array<StartModelContentField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


type StartRecord_seoMetaTagsArgs = {
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

type SustainabilityRecord = RecordInterface & {
  __typename?: 'SustainabilityRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type SustainabilityRecord_seoMetaTagsArgs = {
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

type TextRecord = RecordInterface & {
  __typename?: 'TextRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


type TextRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type TextRecordtextArgs = {
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

type TranslationRecord = RecordInterface & {
  __typename?: 'TranslationRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  key?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
};


type TranslationRecord_allValueLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type TranslationRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


type TranslationRecordvalueArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type TwoColumnImageRecord = RecordInterface & {
  __typename?: 'TwoColumnImageRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  firstImage?: Maybe<FileField>;
  id: Scalars['ItemId'];
  lastImage?: Maybe<FileField>;
  marginFirst?: Maybe<Scalars['BooleanType']>;
  marginOnLastImage?: Maybe<Scalars['BooleanType']>;
  updatedAt: Scalars['DateTime'];
};


type TwoColumnImageRecord_seoMetaTagsArgs = {
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

type VariantRecord = RecordInterface & {
  __typename?: 'VariantRecord';
  _modelApiKey: Scalars['String'];
  articleNo?: Maybe<Scalars['String']>;
  color?: Maybe<ProductColorRecord>;
  createdAt: Scalars['DateTime'];
  feature?: Maybe<ProductFeatureRecord>;
  id: Scalars['ItemId'];
  material?: Maybe<ProductMaterialRecord>;
  price?: Maybe<Scalars['FloatType']>;
  updatedAt: Scalars['DateTime'];
  volume?: Maybe<Scalars['FloatType']>;
  weight?: Maybe<Scalars['FloatType']>;
};


type VariantRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium'
}

type VideoRecord = RecordInterface & {
  __typename?: 'VideoRecord';
  _modelApiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
  video?: Maybe<FileField>;
};


type VideoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type focalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType'];
  y: Scalars['FloatType'];
};
