type Maybe<T> = T;
type InputMaybe<T> = T;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
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
  JsonField: any;
  MetaTagAttributes: any;
  UploadId: any;
};

/** Record of type About us (about) */
type AboutRecord = RecordInterface & {
  __typename?: 'AboutRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  sections: Array<AboutSectionRecord>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  video?: Maybe<FileField>;
};


/** Record of type About us (about) */
type AboutRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type About us (about) */
type AboutRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type About us (about) */
type AboutRecordtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type About section (about_section) */
type AboutSectionRecord = RecordInterface & {
  __typename?: 'AboutSectionRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  video?: Maybe<FileField>;
};


/** Block of type About section (about_section) */
type AboutSectionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type About section (about_section) */
type AboutSectionRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type Accessory (accessory) */
type AccessoryRecord = RecordInterface & {
  __typename?: 'AccessoryRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  accessory?: Maybe<ProductAccessoryRecord>;
  articleNo?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  price?: Maybe<Scalars['FloatType']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Accessory (accessory) */
type AccessoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Bespoke project (bespoke_project) */
type BespokeProjectRecord = RecordInterface & {
  __typename?: 'BespokeProjectRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  project?: Maybe<ProjectRecord>;
  summary?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Bespoke project (bespoke_project) */
type BespokeProjectRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Bespoke project (bespoke_project) */
type BespokeProjectRecordsummaryArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Record of type Bespoke (bespoke) */
type BespokeRecord = RecordInterface & {
  __typename?: 'BespokeRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  examples: Array<BespokeProjectRecord>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  intro?: Maybe<Scalars['String']>;
  outro?: Maybe<Scalars['String']>;
  secondaryThumbnail?: Maybe<FileField>;
  thumbnail?: Maybe<FileField>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Bespoke (bespoke) */
type BespokeRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bespoke (bespoke) */
type BespokeRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Bespoke (bespoke) */
type BespokeRecordoutroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies how to filter Boolean fields */
type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']>;
};

type CatalogueModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<CatalogueModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  pdf?: InputMaybe<FileFilter>;
  thumbnail?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum CatalogueModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Catalogue (catalogue) */
type CatalogueRecord = RecordInterface & {
  __typename?: 'CatalogueRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  pdf?: Maybe<FileField>;
  thumbnail?: Maybe<FileField>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Catalogue (catalogue) */
type CatalogueRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
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

/** Record of type Color & material intro (color_material_intro) */
type ColorMaterialIntroRecord = RecordInterface & {
  __typename?: 'ColorMaterialIntroRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Color & material intro (color_material_intro) */
type ColorMaterialIntroRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Color & material intro (color_material_intro) */
type ColorMaterialIntroRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type ColorMaterialModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ColorMaterialModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  category?: InputMaybe<LinkFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  position?: InputMaybe<PositionFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ColorMaterialModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Color & material (color_material) */
type ColorMaterialRecord = RecordInterface & {
  __typename?: 'ColorMaterialRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  category?: Maybe<ColorMaterialTypeRecord>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  position?: Maybe<Scalars['IntType']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Color & material (color_material) */
type ColorMaterialRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ColorMaterialTypeModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ColorMaterialTypeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  category?: InputMaybe<StringFilter>;
  categoryPlural?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ColorMaterialTypeModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  categoryPlural_ASC = 'categoryPlural_ASC',
  categoryPlural_DESC = 'categoryPlural_DESC',
  category_ASC = 'category_ASC',
  category_DESC = 'category_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Color & material type (color_material_type) */
type ColorMaterialTypeRecord = RecordInterface & {
  __typename?: 'ColorMaterialTypeRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  category?: Maybe<Scalars['String']>;
  categoryPlural?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  position?: Maybe<Scalars['IntType']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Color & material type (color_material_type) */
type ColorMaterialTypeRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Contact (contact) */
type ContactRecord = RecordInterface & {
  __typename?: 'ContactRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  address?: Maybe<Scalars['String']>;
  contactFormMessage?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  intro?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showroomIntro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Contact (contact) */
type ContactRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Contact (contact) */
type ContactRecordaddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Contact (contact) */
type ContactRecordcontactFormMessageArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Contact (contact) */
type ContactRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Contact (contact) */
type ContactRecordshowroomIntroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type CountryModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<CountryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum CountryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Country (country) */
type CountryRecord = RecordInterface & {
  __typename?: 'CountryRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Country (country) */
type CountryRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Country (country) */
type CountryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Country (country) */
type CountryRecordnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by creation datetime */
type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

type DesignerModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<DesignerModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum DesignerModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Designer (designer) */
type DesignerRecord = RecordInterface & {
  __typename?: 'DesignerRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Designer (designer) */
type DesignerRecord_allDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Designer (designer) */
type DesignerRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Designer (designer) */
type DesignerRecorddescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type DistributorModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<DistributorModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
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
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
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

/** Record of type Distributor (distributor) */
type DistributorRecord = RecordInterface & {
  __typename?: 'DistributorRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
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


/** Record of type Distributor (distributor) */
type DistributorRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Distributor (distributor) */
type DistributorRecordaddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Record of type Download (download) */
type DownloadRecord = RecordInterface & {
  __typename?: 'DownloadRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Download (download) */
type DownloadRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Factory visit (factory_visit) */
type FactoryVisitRecord = RecordInterface & {
  __typename?: 'FactoryVisitRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Factory visit (factory_visit) */
type FactoryVisitRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Factory visit (factory_visit) */
type FactoryVisitRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type FaqCategoryModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<FaqCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum FaqCategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type FAQ Category (faq_category) */
type FaqCategoryRecord = RecordInterface & {
  __typename?: 'FaqCategoryRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type FAQ Category (faq_category) */
type FaqCategoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FaqModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<FaqModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  answer?: InputMaybe<TextFilter>;
  category?: InputMaybe<LinkFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  question?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum FaqModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  question_ASC = 'question_ASC',
  question_DESC = 'question_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type FAQ (faq) */
type FaqRecord = RecordInterface & {
  __typename?: 'FaqRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  answer?: Maybe<Scalars['String']>;
  category?: Maybe<FaqCategoryRecord>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  question?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type FAQ (faq) */
type FaqRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type FAQ (faq) */
type FaqRecordanswerArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Record of type FAQ start (faq_start) */
type FaqStartRecord = RecordInterface & {
  __typename?: 'FaqStartRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type FAQ start (faq_start) */
type FaqStartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type FAQ start (faq_start) */
type FaqStartRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication'
}

type FeaturedModelItemsField = DesignerRecord | ProductRecord | ProjectRecord;

/** Block of type Featured (featured) */
type FeaturedRecord = RecordInterface & {
  __typename?: 'FeaturedRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  items: Array<FeaturedModelItemsField>;
  showMarkAsNew?: Maybe<Scalars['BooleanType']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Featured (featured) */
type FeaturedRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FeaturedStartModelItemsField = DesignerRecord | ProductRecord | ProjectRecord;

/** Block of type Featured start (featured_start) */
type FeaturedStartRecord = RecordInterface & {
  __typename?: 'FeaturedStartRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  items: Array<FeaturedStartModelItemsField>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Featured start (featured_start) */
type FeaturedStartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
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
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
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

/** Specifies how to filter Single-file/image fields */
type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

/** Specifies how to filter Floating-point fields */
type FloatFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['FloatType']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['FloatType']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['FloatType']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['FloatType']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['FloatType']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['FloatType']>;
};

type FullscreenMediaBlockModelLinkRecordField = DesignerRecord | ProductRecord;

/** Block of type Fullscreen media (fullscreen_media_block) */
type FullscreenMediaBlockRecord = RecordInterface & {
  __typename?: 'FullscreenMediaBlockRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  linkRecord?: Maybe<FullscreenMediaBlockModelLinkRecordField>;
  media?: Maybe<FileField>;
  subHeadline?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Fullscreen media (fullscreen_media_block) */
type FullscreenMediaBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Fullscreen video (fullscreen_video) */
type FullscreenVideoRecord = RecordInterface & {
  __typename?: 'FullscreenVideoRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  link?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  video?: Maybe<FileField>;
};


/** Block of type Fullscreen video (fullscreen_video) */
type FullscreenVideoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Fullscreen video (fullscreen_video) */
type FullscreenVideoRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type Fullwidth image (fullwidth_image) */
type FullwidthImageRecord = RecordInterface & {
  __typename?: 'FullwidthImageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Fullwidth image (fullwidth_image) */
type FullwidthImageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Multiple files/images field */
type GalleryFilter = {
  /** Filter records that have all of the specified uploads. The specified values must be Upload IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Filter records that have one of the specified uploads. The specified values must be Upload IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Search for records with an exact match. The specified values must be Upload IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that do not have any of the specified uploads. The specified values must be Upload IDs */
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

/** Block of type Image gallery (image_gallery) */
type ImageGalleryRecord = RecordInterface & {
  __typename?: 'ImageGalleryRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  gallery: Array<FileField>;
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


/** Block of type Image gallery (image_gallery) */
type ImageGalleryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Image links (image_link) */
type ImageLinkRecord = RecordInterface & {
  __typename?: 'ImageLinkRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
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


/** Block of type Image links (image_link) */
type ImageLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
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

/** Specifies how to filter by usage */
type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by ID */
type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated'
}

type JobModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<JobModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  summary?: InputMaybe<TextFilter>;
  text?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum JobModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Jobs (job) */
type JobRecord = RecordInterface & {
  __typename?: 'JobRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Jobs (job) */
type JobRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Jobs (job) */
type JobRecordsummaryArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Jobs (job) */
type JobRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies how to filter JSON fields */
type JsonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
};

/** Block of type Lightsource (lightsource) */
type LightsourceRecord = RecordInterface & {
  __typename?: 'LightsourceRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  amount?: Maybe<Scalars['IntType']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  included?: Maybe<Scalars['BooleanType']>;
  lightsource?: Maybe<ProductLightsourceRecord>;
  optional?: Maybe<Scalars['BooleanType']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Lightsource (lightsource) */
type LightsourceRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-link fields */
type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

/** Specifies how to filter Multiple-links fields */
type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

/** Specifies how to filter by locale */
type LocalesFilter = {
  /** Filter records that are localized in all the specified locales */
  allIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are localized in at least one of the specified locales */
  anyIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are not localized in any of the specified locales */
  notIn?: InputMaybe<Array<SiteLocale>>;
};

/** Record of type Manuals (manual) */
type ManualRecord = RecordInterface & {
  __typename?: 'ManualRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Manuals (manual) */
type ManualRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Manuals (manual) */
type ManualRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png'
}

/** Block of type News item (news_item) */
type NewsItemRecord = RecordInterface & {
  __typename?: 'NewsItemRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  news?: Maybe<NewsRecord>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type News item (news_item) */
type NewsItemRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type NewsModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<NewsModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  link?: InputMaybe<StringFilter>;
  linkText?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  text?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum NewsModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
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

/** Record of type News (news) */
type NewsRecord = RecordInterface & {
  __typename?: 'NewsRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  link?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type News (news) */
type NewsRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
type NewsRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies how to filter by image orientation */
type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']>;
};

type PressModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<PressModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
};

enum PressModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

/** Record of type Press (press) */
type PressRecord = RecordInterface & {
  __typename?: 'PressRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};


/** Record of type Press (press) */
type PressRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductAccessoryModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductAccessoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductAccessoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Product accessory (product_accessory) */
type ProductAccessoryRecord = RecordInterface & {
  __typename?: 'ProductAccessoryRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product accessory (product_accessory) */
type ProductAccessoryRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product accessory (product_accessory) */
type ProductAccessoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product accessory (product_accessory) */
type ProductAccessoryRecordnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductCategoryModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  namePlural?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductCategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  namePlural_ASC = 'namePlural_ASC',
  namePlural_DESC = 'namePlural_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Product category (product_category) */
type ProductCategoryRecord = RecordInterface & {
  __typename?: 'ProductCategoryRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allNamePluralLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  namePlural?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['IntType']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product category (product_category) */
type ProductCategoryRecord_allDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Product category (product_category) */
type ProductCategoryRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product category (product_category) */
type ProductCategoryRecord_allNamePluralLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product category (product_category) */
type ProductCategoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product category (product_category) */
type ProductCategoryRecorddescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Product category (product_category) */
type ProductCategoryRecordnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product category (product_category) */
type ProductCategoryRecordnamePluralArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductColorModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductColorModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductColorModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Product color (product_color) */
type ProductColorRecord = RecordInterface & {
  __typename?: 'ProductColorRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product color (product_color) */
type ProductColorRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product color (product_color) */
type ProductColorRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product color (product_color) */
type ProductColorRecordnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductConnectionModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductConnectionModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductConnectionModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Product connection (product_connection) */
type ProductConnectionRecord = RecordInterface & {
  __typename?: 'ProductConnectionRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product connection (product_connection) */
type ProductConnectionRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product connection (product_connection) */
type ProductConnectionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product connection (product_connection) */
type ProductConnectionRecordnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductDimmableModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductDimmableModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductDimmableModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Product dimmable (product_dimmable) */
type ProductDimmableRecord = RecordInterface & {
  __typename?: 'ProductDimmableRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product dimmable (product_dimmable) */
type ProductDimmableRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product dimmable (product_dimmable) */
type ProductDimmableRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product dimmable (product_dimmable) */
type ProductDimmableRecordnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductElectricalModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductElectricalModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductElectricalModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Product Electrical Data (product_electrical) */
type ProductElectricalRecord = RecordInterface & {
  __typename?: 'ProductElectricalRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product Electrical Data (product_electrical) */
type ProductElectricalRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product Electrical Data (product_electrical) */
type ProductElectricalRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product Electrical Data (product_electrical) */
type ProductElectricalRecordnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductFamilyModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductFamilyModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductFamilyModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Product family (product_family) */
type ProductFamilyRecord = RecordInterface & {
  __typename?: 'ProductFamilyRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product family (product_family) */
type ProductFamilyRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductFeatureModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductFeatureModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductFeatureModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Product feature (product_feature) */
type ProductFeatureRecord = RecordInterface & {
  __typename?: 'ProductFeatureRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product feature (product_feature) */
type ProductFeatureRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product feature (product_feature) */
type ProductFeatureRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product feature (product_feature) */
type ProductFeatureRecordnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductLightsourceModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductLightsourceModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  articleNo?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductLightsourceModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
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

/** Record of type Product lightsource (product_lightsource) */
type ProductLightsourceRecord = RecordInterface & {
  __typename?: 'ProductLightsourceRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  articleNo?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['FloatType']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product lightsource (product_lightsource) */
type ProductLightsourceRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product lightsource (product_lightsource) */
type ProductLightsourceRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product lightsource (product_lightsource) */
type ProductLightsourceRecordnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductMaterialModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductMaterialModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductMaterialModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Product material (product_material) */
type ProductMaterialRecord = RecordInterface & {
  __typename?: 'ProductMaterialRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product material (product_material) */
type ProductMaterialRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product material (product_material) */
type ProductMaterialRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product material (product_material) */
type ProductMaterialRecordnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  additionalInformation?: InputMaybe<StringFilter>;
  bimFile?: InputMaybe<FileFilter>;
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
  markAsNew?: InputMaybe<BooleanFilter>;
  mounting?: InputMaybe<LinkFilter>;
  mountingInstructions?: InputMaybe<FileFilter>;
  pdfFile?: InputMaybe<FileFilter>;
  shopifyData?: InputMaybe<JsonFilter>;
  shopifyId?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  sockets?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

type ProductModelNameModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductModelNameModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductModelNameModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Product model name (product_model_name) */
type ProductModelNameRecord = RecordInterface & {
  __typename?: 'ProductModelNameRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product model name (product_model_name) */
type ProductModelNameRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product model name (product_model_name) */
type ProductModelNameRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product model name (product_model_name) */
type ProductModelNameRecordnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

enum ProductModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  additionalInformation_ASC = 'additionalInformation_ASC',
  additionalInformation_DESC = 'additionalInformation_DESC',
  bimLink_ASC = 'bimLink_ASC',
  bimLink_DESC = 'bimLink_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  markAsNew_ASC = 'markAsNew_ASC',
  markAsNew_DESC = 'markAsNew_DESC',
  shopifyId_ASC = 'shopifyId_ASC',
  shopifyId_DESC = 'shopifyId_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductModelProductGalleryField = FullwidthImageRecord | ImageGalleryRecord | TextRecord | TwoColumnImageRecord | VideoRecord;

/** Block of type Model (product_model) */
type ProductModelRecord = RecordInterface & {
  __typename?: 'ProductModelRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  accessories: Array<AccessoryRecord>;
  createdAt: Scalars['DateTime'];
  drawing?: Maybe<FileField>;
  id: Scalars['ItemId'];
  lightsources: Array<LightsourceRecord>;
  name?: Maybe<ProductModelNameRecord>;
  updatedAt: Scalars['DateTime'];
  variants: Array<VariantRecord>;
};


/** Block of type Model (product_model) */
type ProductModelRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductMountingModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductMountingModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductMountingModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Product mounting (product_mounting) */
type ProductMountingRecord = RecordInterface & {
  __typename?: 'ProductMountingRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product mounting (product_mounting) */
type ProductMountingRecord_allNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product mounting (product_mounting) */
type ProductMountingRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product mounting (product_mounting) */
type ProductMountingRecordnameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Product (product) */
type ProductRecord = RecordInterface & {
  __typename?: 'ProductRecord';
  _allAdditionalInformationLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allPdfFileLocales?: Maybe<Array<FileFieldMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  additionalInformation?: Maybe<Scalars['String']>;
  bimFile?: Maybe<FileField>;
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
  markAsNew?: Maybe<Scalars['BooleanType']>;
  models: Array<ProductModelRecord>;
  mounting?: Maybe<ProductMountingRecord>;
  mountingInstructions?: Maybe<FileField>;
  pdfFile?: Maybe<FileField>;
  productGallery: Array<ProductModelProductGalleryField>;
  shopifyData?: Maybe<Scalars['JsonField']>;
  shopifyId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sockets: Array<ProductSocketRecord>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product (product) */
type ProductRecord_allAdditionalInformationLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product (product) */
type ProductRecord_allDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Product (product) */
type ProductRecord_allPdfFileLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product (product) */
type ProductRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product (product) */
type ProductRecordadditionalInformationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product (product) */
type ProductRecorddescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Product (product) */
type ProductRecordpdfFileArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductSocketModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductSocketModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProductSocketModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Product socket (product_socket) */
type ProductSocketRecord = RecordInterface & {
  __typename?: 'ProductSocketRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product socket (product_socket) */
type ProductSocketRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Product start (product_start) */
type ProductStartRecord = RecordInterface & {
  __typename?: 'ProductStartRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  featured: Array<FeaturedRecord>;
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product start (product_start) */
type ProductStartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProjectModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  bespoke?: InputMaybe<BooleanFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  location?: InputMaybe<StringFilter>;
  projectType?: InputMaybe<LinkFilter>;
  relatedProducts?: InputMaybe<LinksFilter>;
  secondaryImage?: InputMaybe<FileFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

type ProjectModelGalleryField = FullwidthImageRecord | ImageGalleryRecord | TextRecord | TwoColumnImageRecord | VideoRecord;

enum ProjectModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  bespoke_ASC = 'bespoke_ASC',
  bespoke_DESC = 'bespoke_DESC',
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

/** Record of type Project (project) */
type ProjectRecord = RecordInterface & {
  __typename?: 'ProjectRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  bespoke?: Maybe<Scalars['BooleanType']>;
  createdAt: Scalars['DateTime'];
  gallery: Array<ProjectModelGalleryField>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  location?: Maybe<Scalars['String']>;
  projectType?: Maybe<ProjectTypeRecord>;
  relatedProducts: Array<ProductRecord>;
  secondaryImage?: Maybe<FileField>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Project (project) */
type ProjectRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Project start (project_start) */
type ProjectStartRecord = RecordInterface & {
  __typename?: 'ProjectStartRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Project start (project_start) */
type ProjectStartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Project start (project_start) */
type ProjectStartRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type ProjectTypeModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProjectTypeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  title?: InputMaybe<StringFilter>;
  titlePlural?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ProjectTypeModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  titlePlural_ASC = 'titlePlural_ASC',
  titlePlural_DESC = 'titlePlural_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Project type (project_type) */
type ProjectTypeRecord = RecordInterface & {
  __typename?: 'ProjectTypeRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  position?: Maybe<Scalars['IntType']>;
  title?: Maybe<Scalars['String']>;
  titlePlural?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Project type (project_type) */
type ProjectTypeRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** The query root for this schema */
type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allCataloguesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allColorMaterialTypesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allColorMaterialsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCountriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allDesignersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allDistributorsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFaqCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFaqsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allJobsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allNewsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPressesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductAccessoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductColorsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductConnectionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductDimmablesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductElectricalsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductFamiliesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductFeaturesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductLightsourcesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductMaterialsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductModelNamesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductMountingsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductSocketsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProjectTypesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProjectsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allResellersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allShowroomsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStaffsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTranslationsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta?: Maybe<CollectionMetadata>;
  /** Returns the single instance record */
  _site: Site;
  /** Returns the single instance record */
  about?: Maybe<AboutRecord>;
  /** Returns a collection of records */
  allCatalogues: Array<CatalogueRecord>;
  /** Returns a collection of records */
  allColorMaterialTypes: Array<ColorMaterialTypeRecord>;
  /** Returns a collection of records */
  allColorMaterials: Array<ColorMaterialRecord>;
  /** Returns a collection of records */
  allCountries: Array<CountryRecord>;
  /** Returns a collection of records */
  allDesigners: Array<DesignerRecord>;
  /** Returns a collection of records */
  allDistributors: Array<DistributorRecord>;
  /** Returns a collection of records */
  allFaqCategories: Array<FaqCategoryRecord>;
  /** Returns a collection of records */
  allFaqs: Array<FaqRecord>;
  /** Returns a collection of records */
  allJobs: Array<JobRecord>;
  /** Returns a collection of records */
  allNews: Array<NewsRecord>;
  /** Returns a collection of records */
  allPresses: Array<PressRecord>;
  /** Returns a collection of records */
  allProductAccessories: Array<ProductAccessoryRecord>;
  /** Returns a collection of records */
  allProductCategories: Array<ProductCategoryRecord>;
  /** Returns a collection of records */
  allProductColors: Array<ProductColorRecord>;
  /** Returns a collection of records */
  allProductConnections: Array<ProductConnectionRecord>;
  /** Returns a collection of records */
  allProductDimmables: Array<ProductDimmableRecord>;
  /** Returns a collection of records */
  allProductElectricals: Array<ProductElectricalRecord>;
  /** Returns a collection of records */
  allProductFamilies: Array<ProductFamilyRecord>;
  /** Returns a collection of records */
  allProductFeatures: Array<ProductFeatureRecord>;
  /** Returns a collection of records */
  allProductLightsources: Array<ProductLightsourceRecord>;
  /** Returns a collection of records */
  allProductMaterials: Array<ProductMaterialRecord>;
  /** Returns a collection of records */
  allProductModelNames: Array<ProductModelNameRecord>;
  /** Returns a collection of records */
  allProductMountings: Array<ProductMountingRecord>;
  /** Returns a collection of records */
  allProductSockets: Array<ProductSocketRecord>;
  /** Returns a collection of records */
  allProducts: Array<ProductRecord>;
  /** Returns a collection of records */
  allProjectTypes: Array<ProjectTypeRecord>;
  /** Returns a collection of records */
  allProjects: Array<ProjectRecord>;
  /** Returns a collection of records */
  allResellers: Array<ResellerRecord>;
  /** Returns a collection of records */
  allShowrooms: Array<ShowroomRecord>;
  /** Returns a collection of records */
  allStaffs: Array<StaffRecord>;
  /** Returns a collection of records */
  allTranslations: Array<TranslationRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns the single instance record */
  bespoke?: Maybe<BespokeRecord>;
  /** Returns a specific record */
  catalogue?: Maybe<CatalogueRecord>;
  /** Returns a specific record */
  colorMaterial?: Maybe<ColorMaterialRecord>;
  /** Returns the single instance record */
  colorMaterialIntro?: Maybe<ColorMaterialIntroRecord>;
  /** Returns a specific record */
  colorMaterialType?: Maybe<ColorMaterialTypeRecord>;
  /** Returns the single instance record */
  contact?: Maybe<ContactRecord>;
  /** Returns a specific record */
  country?: Maybe<CountryRecord>;
  /** Returns a specific record */
  designer?: Maybe<DesignerRecord>;
  /** Returns a specific record */
  distributor?: Maybe<DistributorRecord>;
  /** Returns the single instance record */
  download?: Maybe<DownloadRecord>;
  /** Returns the single instance record */
  factoryVisit?: Maybe<FactoryVisitRecord>;
  /** Returns a specific record */
  faq?: Maybe<FaqRecord>;
  /** Returns a specific record */
  faqCategory?: Maybe<FaqCategoryRecord>;
  /** Returns the single instance record */
  faqStart?: Maybe<FaqStartRecord>;
  /** Returns a specific record */
  job?: Maybe<JobRecord>;
  /** Returns the single instance record */
  manual?: Maybe<ManualRecord>;
  /** Returns a specific record */
  news?: Maybe<NewsRecord>;
  /** Returns a specific record */
  press?: Maybe<PressRecord>;
  /** Returns a specific record */
  product?: Maybe<ProductRecord>;
  /** Returns a specific record */
  productAccessory?: Maybe<ProductAccessoryRecord>;
  /** Returns a specific record */
  productCategory?: Maybe<ProductCategoryRecord>;
  /** Returns a specific record */
  productColor?: Maybe<ProductColorRecord>;
  /** Returns a specific record */
  productConnection?: Maybe<ProductConnectionRecord>;
  /** Returns a specific record */
  productDimmable?: Maybe<ProductDimmableRecord>;
  /** Returns a specific record */
  productElectrical?: Maybe<ProductElectricalRecord>;
  /** Returns a specific record */
  productFamily?: Maybe<ProductFamilyRecord>;
  /** Returns a specific record */
  productFeature?: Maybe<ProductFeatureRecord>;
  /** Returns a specific record */
  productLightsource?: Maybe<ProductLightsourceRecord>;
  /** Returns a specific record */
  productMaterial?: Maybe<ProductMaterialRecord>;
  /** Returns a specific record */
  productModelName?: Maybe<ProductModelNameRecord>;
  /** Returns a specific record */
  productMounting?: Maybe<ProductMountingRecord>;
  /** Returns a specific record */
  productSocket?: Maybe<ProductSocketRecord>;
  /** Returns the single instance record */
  productStart?: Maybe<ProductStartRecord>;
  /** Returns a specific record */
  project?: Maybe<ProjectRecord>;
  /** Returns the single instance record */
  projectStart?: Maybe<ProjectStartRecord>;
  /** Returns a specific record */
  projectType?: Maybe<ProjectTypeRecord>;
  /** Returns a specific record */
  reseller?: Maybe<ResellerRecord>;
  /** Returns a specific record */
  showroom?: Maybe<ShowroomRecord>;
  /** Returns a specific record */
  staff?: Maybe<StaffRecord>;
  /** Returns the single instance record */
  start?: Maybe<StartRecord>;
  /** Returns the single instance record */
  sustainability?: Maybe<SustainabilityRecord>;
  /** Returns a specific record */
  translation?: Maybe<TranslationRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
};


/** The query root for this schema */
type Query_allCataloguesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CatalogueModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allColorMaterialTypesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorMaterialTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allColorMaterialsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorMaterialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allCountriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allDesignersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DesignerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allDistributorsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistributorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allFaqCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allFaqsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allJobsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<JobModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allNewsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allPressesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PressModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductAccessoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductAccessoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductColorsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductColorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductConnectionsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductConnectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductDimmablesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductDimmableModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductElectricalsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductElectricalModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductFamiliesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFamilyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductFeaturesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFeatureModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductLightsourcesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductLightsourceModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductMaterialsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMaterialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductModelNamesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelNameModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductMountingsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMountingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductSocketsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductSocketModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProjectTypesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProjectsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allResellersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ResellerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allShowroomsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShowroomModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allStaffsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StaffModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allTranslationsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TranslationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_siteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryaboutArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryallCataloguesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CatalogueModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CatalogueModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallColorMaterialTypesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorMaterialTypeModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ColorMaterialTypeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallColorMaterialsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorMaterialModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ColorMaterialModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallCountriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CountryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallDesignersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DesignerModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DesignerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallDistributorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistributorModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DistributorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallFaqCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallFaqsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallJobsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<JobModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<JobModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallPressesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PressModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PressModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProductAccessoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductAccessoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductAccessoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProductCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProductColorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductColorModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductColorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProductConnectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductConnectionModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductConnectionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProductDimmablesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductDimmableModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductDimmableModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProductElectricalsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductElectricalModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductElectricalModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProductFamiliesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFamilyModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFamilyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProductFeaturesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFeatureModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFeatureModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProductLightsourcesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductLightsourceModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductLightsourceModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProductMaterialsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMaterialModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMaterialModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProductModelNamesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelNameModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelNameModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProductMountingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMountingModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMountingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProductSocketsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductSocketModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductSocketModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProductsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProjectTypesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectTypeModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectTypeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallResellersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ResellerModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ResellerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallShowroomsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShowroomModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShowroomModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallStaffsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StaffModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StaffModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallTranslationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TranslationModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TranslationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QuerybespokeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerycatalogueArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CatalogueModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CatalogueModelOrderBy>>>;
};


/** The query root for this schema */
type QuerycolorMaterialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorMaterialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ColorMaterialModelOrderBy>>>;
};


/** The query root for this schema */
type QuerycolorMaterialIntroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerycolorMaterialTypeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorMaterialTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ColorMaterialTypeModelOrderBy>>>;
};


/** The query root for this schema */
type QuerycontactArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerycountryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CountryModelOrderBy>>>;
};


/** The query root for this schema */
type QuerydesignerArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DesignerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DesignerModelOrderBy>>>;
};


/** The query root for this schema */
type QuerydistributorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistributorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DistributorModelOrderBy>>>;
};


/** The query root for this schema */
type QuerydownloadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryfactoryVisitArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryfaqArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
};


/** The query root for this schema */
type QueryfaqCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqCategoryModelOrderBy>>>;
};


/** The query root for this schema */
type QueryfaqStartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryjobArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<JobModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<JobModelOrderBy>>>;
};


/** The query root for this schema */
type QuerymanualArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerynewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
};


/** The query root for this schema */
type QuerypressArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PressModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PressModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductAccessoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductAccessoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductAccessoryModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductCategoryModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductColorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductColorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductColorModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductConnectionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductConnectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductConnectionModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductDimmableArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductDimmableModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductDimmableModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductElectricalArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductElectricalModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductElectricalModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductFamilyArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFamilyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFamilyModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductFeatureArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFeatureModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFeatureModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductLightsourceArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductLightsourceModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductLightsourceModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductMaterialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMaterialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMaterialModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductModelNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelNameModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelNameModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductMountingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMountingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMountingModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductSocketArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductSocketModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductSocketModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductStartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryprojectArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
};


/** The query root for this schema */
type QueryprojectStartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryprojectTypeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectTypeModelOrderBy>>>;
};


/** The query root for this schema */
type QueryresellerArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ResellerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ResellerModelOrderBy>>>;
};


/** The query root for this schema */
type QueryshowroomArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShowroomModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShowroomModelOrderBy>>>;
};


/** The query root for this schema */
type QuerystaffArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StaffModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StaffModelOrderBy>>>;
};


/** The query root for this schema */
type QuerystartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerysustainabilityArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerytranslationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TranslationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TranslationModelOrderBy>>>;
};


/** The query root for this schema */
type QueryuploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

type RecordInterface = {
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
};


type RecordInterface_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ResellerModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ResellerModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
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
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
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

/** Record of type Reseller (reseller) */
type ResellerRecord = RecordInterface & {
  __typename?: 'ResellerRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
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


/** Record of type Reseller (reseller) */
type ResellerRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Reseller (reseller) */
type ResellerRecordaddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies how to filter by upload type */
type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
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
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  additional?: InputMaybe<TextFilter>;
  address?: InputMaybe<TextFilter>;
  city?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  position?: InputMaybe<PositionFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ShowroomModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  city_ASC = 'city_ASC',
  city_DESC = 'city_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Showroom (showroom) */
type ShowroomRecord = RecordInterface & {
  __typename?: 'ShowroomRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  additional?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  position?: Maybe<Scalars['IntType']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Showroom (showroom) */
type ShowroomRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Showroom (showroom) */
type ShowroomRecordadditionalArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Showroom (showroom) */
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

/** Specifies how to filter Slug fields */
type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type StaffModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<StaffModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  role?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum StaffModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
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
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  role_ASC = 'role_ASC',
  role_DESC = 'role_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Staff (staff) */
type StaffRecord = RecordInterface & {
  __typename?: 'StaffRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['IntType']>;
  role?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Staff (staff) */
type StaffRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type StartModelContentField = FeaturedStartRecord | FullscreenMediaBlockRecord | FullscreenVideoRecord | ImageLinkRecord | NewsItemRecord;

/** Record of type Start (start) */
type StartRecord = RecordInterface & {
  __typename?: 'StartRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content: Array<StartModelContentField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Start (start) */
type StartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by status */
type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records based on a regular expression */
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

/** Record of type Sustainability (sustainability) */
type SustainabilityRecord = RecordInterface & {
  __typename?: 'SustainabilityRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  intro?: Maybe<Scalars['String']>;
  steps: Array<SustainabilityStepRecord>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Sustainability (sustainability) */
type SustainabilityRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sustainability (sustainability) */
type SustainabilityRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type Sustainability step (sustainability_step) */
type SustainabilityStepRecord = RecordInterface & {
  __typename?: 'SustainabilityStepRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  fullWidthImage?: Maybe<Scalars['BooleanType']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Sustainability step (sustainability_step) */
type SustainabilityStepRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Sustainability step (sustainability_step) */
type SustainabilityStepRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']>;
  content?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

/** Specifies how to filter text fields */
type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type TextModelTextField = {
  __typename?: 'TextModelTextField';
  blocks: Array<Scalars['String']>;
  links: Array<TextModelTextLinksField>;
  value: Scalars['JsonField'];
};

type TextModelTextLinksField = DesignerRecord | ProductRecord | ProjectRecord;

/** Block of type Text (text) */
type TextRecord = RecordInterface & {
  __typename?: 'TextRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  text?: Maybe<TextModelTextField>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Text (text) */
type TextRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type TranslationModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<TranslationModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  key?: InputMaybe<StringFilter>;
  page?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  value?: InputMaybe<StringFilter>;
};

enum TranslationModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
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

/** Record of type Translation (translation) */
type TranslationRecord = RecordInterface & {
  __typename?: 'TranslationRecord';
  _allValueLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  key?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
};


/** Record of type Translation (translation) */
type TranslationRecord_allValueLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Translation (translation) */
type TranslationRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Translation (translation) */
type TranslationRecordvalueArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Two column images (two_column_image) */
type TwoColumnImageRecord = RecordInterface & {
  __typename?: 'TwoColumnImageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  firstImage?: Maybe<FileField>;
  id: Scalars['ItemId'];
  lastImage?: Maybe<FileField>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Two column images (two_column_image) */
type TwoColumnImageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter by default alt */
type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter by filename */
type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadFilter = {
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
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

/** Specifies how to filter by format */
type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Specifies how to filter by height */
type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']>;
};

/** Specifies how to filter by ID */
type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

/** Specifies how to filter by MD5 */
type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Specifies how to filter by mime type */
type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
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

/** Specifies how to filter by size */
type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']>;
};

/** Specifies how to filter by tags */
type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Specifies how to filter by default title */
type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
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

/** Specifies how to filter by update datetime */
type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
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

/** Specifies how to filter by width */
type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']>;
};

/** Block of type Variant (variant) */
type VariantRecord = RecordInterface & {
  __typename?: 'VariantRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
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


/** Block of type Variant (variant) */
type VariantRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium'
}

/** Block of type Video (video) */
type VideoRecord = RecordInterface & {
  __typename?: 'VideoRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
  video?: Maybe<FileField>;
};


/** Block of type Video (video) */
type VideoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type focalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType'];
  y: Scalars['FloatType'];
};

type SustainabilityQueryVariables = Exact<{ [key: string]: never; }>;


type SustainabilityQuery = { __typename?: 'Query', sustainability?: { __typename?: 'SustainabilityRecord', id: any, title?: string, intro?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, steps: Array<{ __typename?: 'SustainabilityStepRecord', title?: string, text?: string, fullWidthImage?: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }> } };

type AboutQueryVariables = Exact<{ [key: string]: never; }>;


type AboutQuery = { __typename?: 'Query', about?: { __typename?: 'AboutRecord', id: any, intro?: string, title?: string, video?: { __typename?: 'FileField', id: any, alt?: string, basename: string, format: string, mimeType: string, title?: string, url: string, width?: any, height?: any, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number, duration?: number, mp4high?: string, mp4med?: string, mp4low?: string } }, sections: Array<{ __typename?: 'AboutSectionRecord', id: any, text?: string, video?: { __typename?: 'FileField', id: any, alt?: string, basename: string, format: string, mimeType: string, title?: string, url: string, width?: any, height?: any, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number, duration?: number, mp4high?: string, mp4med?: string, mp4low?: string } } }> } };

type NewsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


type NewsQuery = { __typename?: 'Query', news?: { __typename: 'NewsRecord', id: any, link?: string, linkText?: string, text?: string, title?: string, slug?: string, createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> } };

type LastNewsQueryVariables = Exact<{ [key: string]: never; }>;


type LastNewsQuery = { __typename?: 'Query', lastNews: Array<{ __typename: 'NewsRecord', id: any, link?: string, linkText?: string, text?: string, title?: string, slug?: string, createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> }> };

type AllNewsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type AllNewsQuery = { __typename?: 'Query', news: Array<{ __typename: 'NewsRecord', id: any, link?: string, linkText?: string, text?: string, title?: string, slug?: string, createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type JobQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
}>;


type JobQuery = { __typename?: 'Query', job?: { __typename?: 'JobRecord', id: any, summary?: string, text?: string, title?: string } };

type AllJobsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
}>;


type AllJobsQuery = { __typename?: 'Query', jobs: Array<{ __typename?: 'JobRecord', id: any, summary?: string, text?: string, title?: string }> };

type PressQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
}>;


type PressQuery = { __typename?: 'Query', press?: { __typename?: 'PressRecord', id: any, title?: string, url?: string } };

type AllPressQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
}>;


type AllPressQuery = { __typename?: 'Query', presses: Array<{ __typename?: 'PressRecord', id: any, title?: string, url?: string }> };

type ShowroomQueryVariables = Exact<{ [key: string]: never; }>;


type ShowroomQuery = { __typename?: 'Query', showroom?: { __typename?: 'ShowroomRecord', additional?: string, address?: string, city?: string, id: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } };

type AllShowroomsQueryVariables = Exact<{ [key: string]: never; }>;


type AllShowroomsQuery = { __typename?: 'Query', showrooms: Array<{ __typename?: 'ShowroomRecord', additional?: string, address?: string, city?: string, id: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }> };

type DistributorQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type DistributorQuery = { __typename?: 'Query', distributor?: { __typename?: 'DistributorRecord', name?: string, address?: string, postalCode?: string, city?: string, contactName?: string, phone?: string, email?: string, url?: string, country?: { __typename?: 'CountryRecord', name?: string } } };

type AllDistributorsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type AllDistributorsQuery = { __typename?: 'Query', distributors: Array<{ __typename?: 'DistributorRecord', name?: string, address?: string, postalCode?: string, city?: string, contactName?: string, phone?: string, email?: string, url?: string, country?: { __typename?: 'CountryRecord', name?: string } }> };

type ResellerQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type ResellerQuery = { __typename?: 'Query', reseller?: { __typename?: 'ResellerRecord', id: any, name?: string, address?: string, postalCode?: string, city?: string, url?: string, country?: { __typename?: 'CountryRecord', id: any, name?: string } } };

type AllResellersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type AllResellersQuery = { __typename?: 'Query', resellers: Array<{ __typename?: 'ResellerRecord', id: any, name?: string, address?: string, postalCode?: string, city?: string, url?: string, country?: { __typename?: 'CountryRecord', id: any, name?: string } }> };

type StaffQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type StaffQuery = { __typename?: 'Query', staff?: { __typename?: 'StaffRecord', id: any, name?: string, role?: string, phone?: string, email?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } };

type AllStaffsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
  locale?: InputMaybe<SiteLocale>;
  first?: InputMaybe<Scalars['IntType']>;
}>;


type AllStaffsQuery = { __typename?: 'Query', staffs: Array<{ __typename?: 'StaffRecord', id: any, name?: string, role?: string, phone?: string, email?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }> };

type ContactQueryVariables = Exact<{ [key: string]: never; }>;


type ContactQuery = { __typename?: 'Query', contact?: { __typename?: 'ContactRecord', id: any, email?: string, intro?: string, phone?: string, showroomIntro?: string, contactFormMessage?: string, title?: string, address?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } };

type DesignerQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type DesignerQuery = { __typename?: 'Query', designer?: { __typename?: 'DesignerRecord', id: any, name?: string, description?: string, slug?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> } };

type AllDesignersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type AllDesignersQuery = { __typename?: 'Query', designers: Array<{ __typename?: 'DesignerRecord', id: any, name?: string, description?: string, slug?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }> };

type ContactFragment = { __typename?: 'ContactRecord', address?: string, email?: string, id: any, intro?: string, phone?: string, showroomIntro?: string, title?: string };

type DesignerFragment = { __typename?: 'DesignerRecord', id: any, name?: string, description?: string, slug?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> };

type DesignerLightFragment = { __typename?: 'DesignerRecord', id: any, name?: string, description?: string, slug?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } };

type DistributorFragment = { __typename?: 'DistributorRecord', name?: string, address?: string, postalCode?: string, city?: string, contactName?: string, phone?: string, email?: string, url?: string, country?: { __typename?: 'CountryRecord', name?: string } };

type FaqFragment = { __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer?: string, id: any, question?: string, category?: { __typename?: 'FaqCategoryRecord', id: any, title?: string } };

type FileFragment = { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string };

type ImageFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } };

type ImageMediumFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } };

type ImageThumbnailFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } };

type NewsFragment = { __typename: 'NewsRecord', id: any, link?: string, linkText?: string, text?: string, title?: string, slug?: string, createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> };

type ProductFragment = { __typename?: 'ProductRecord', id: any, title?: string, description?: string, slug?: string, additionalInformation?: string, markAsNew?: any, bimLink?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string, slug?: string } | { __typename: 'ProductRecord', id: any, title?: string, slug?: string } | { __typename: 'ProjectRecord', id: any, title?: string, slug?: string }> } } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lastImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, alt?: string, basename: string, format: string, mimeType: string, title?: string, url: string, width?: any, height?: any, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number, duration?: number, mp4high?: string, mp4med?: string, mp4low?: string } } }>, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, colorImages: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }>, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string, position?: any }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string }, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string }, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string }>, lightFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string }, drawing?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any, amount?: any, optional?: any, lightsource?: { __typename?: 'ProductLightsourceRecord', id: any, name?: string, price?: any, articleNo?: string } }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any, volume?: any, weight?: any, articleNo?: string, color?: { __typename?: 'ProductColorRecord', id: any, name?: string }, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string }, feature?: { __typename?: 'ProductFeatureRecord', name?: string } }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string, price?: any, accessory?: { __typename?: 'ProductAccessoryRecord', name?: string } }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string }, mountingInstructions?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale, value?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string } }>, bimFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> };

type ProductLightFragment = { __typename?: 'ProductRecord', id: any, title?: string, slug?: string, markAsNew?: any, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string }>, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string } };

type ProjectFragment = { __typename?: 'ProjectRecord', id: any, location?: string, title?: string, slug?: string, bespoke?: any, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string, titlePlural?: string }, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, relatedProducts: Array<{ __typename?: 'ProductRecord', id: any, title?: string, description?: string, slug?: string, additionalInformation?: string, markAsNew?: any, bimLink?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string, slug?: string } | { __typename: 'ProductRecord', id: any, title?: string, slug?: string } | { __typename: 'ProjectRecord', id: any, title?: string, slug?: string }> } } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lastImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, alt?: string, basename: string, format: string, mimeType: string, title?: string, url: string, width?: any, height?: any, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number, duration?: number, mp4high?: string, mp4med?: string, mp4low?: string } } }>, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, colorImages: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }>, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string, position?: any }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string }, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string }, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string }>, lightFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string }, drawing?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any, amount?: any, optional?: any, lightsource?: { __typename?: 'ProductLightsourceRecord', id: any, name?: string, price?: any, articleNo?: string } }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any, volume?: any, weight?: any, articleNo?: string, color?: { __typename?: 'ProductColorRecord', id: any, name?: string }, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string }, feature?: { __typename?: 'ProductFeatureRecord', name?: string } }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string, price?: any, accessory?: { __typename?: 'ProductAccessoryRecord', name?: string } }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string }, mountingInstructions?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale, value?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string } }>, bimFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> }>, gallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string, slug?: string } | { __typename: 'ProductRecord', id: any, title?: string, slug?: string } | { __typename: 'ProjectRecord', id: any, title?: string, slug?: string }> } } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lastImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> };

type ProjectLightFragment = { __typename?: 'ProjectRecord', id: any, location?: string, title?: string, slug?: string, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string, titlePlural?: string }, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } };

type ResellerFragment = { __typename?: 'ResellerRecord', id: any, name?: string, address?: string, postalCode?: string, city?: string, url?: string, country?: { __typename?: 'CountryRecord', id: any, name?: string } };

type SEOFragment = { __typename?: 'Tag', attributes?: any, content?: string, tag: string };

type ShowroomFragment = { __typename?: 'ShowroomRecord', additional?: string, address?: string, city?: string, id: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } };

type SiteFragment = { __typename?: 'Site', favicon: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string, siteName?: string, titleSuffix?: string, twitterAccount?: string, fallbackSeo?: { __typename?: 'SeoField', description?: string, title?: string, twitterCard?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } } };

type StaffFragment = { __typename?: 'StaffRecord', id: any, name?: string, role?: string, phone?: string, email?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } };

type VideoFragment = { __typename?: 'FileField', id: any, alt?: string, basename: string, format: string, mimeType: string, title?: string, url: string, width?: any, height?: any, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number, duration?: number, mp4high?: string, mp4med?: string, mp4low?: string } };

type GlobalQueryVariables = Exact<{ [key: string]: never; }>;


type GlobalQuery = { __typename?: 'Query', site: { __typename?: 'Site', favicon: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string, siteName?: string, titleSuffix?: string, twitterAccount?: string, fallbackSeo?: { __typename?: 'SeoField', description?: string, title?: string, twitterCard?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } } } };

type IntlQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocales?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type IntlQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'TranslationRecord', key?: string, value?: string }> };

type MenuQueryVariables = Exact<{ [key: string]: never; }>;


type MenuQuery = { __typename?: 'Query', allDesigners: Array<{ __typename?: 'DesignerRecord', id: any, slug?: string, name?: string }>, allProducts: Array<{ __typename?: 'ProductRecord', id: any, designer?: { __typename?: 'DesignerRecord', id: any } }>, allProductCategories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string }> };

type ProductStartQueryVariables = Exact<{ [key: string]: never; }>;


type ProductStartQuery = { __typename?: 'Query', productStart?: { __typename?: 'ProductStartRecord', id: any, featured: Array<{ __typename?: 'FeaturedRecord', id: any, headline?: string, showMarkAsNew?: any, items: Array<{ __typename?: 'DesignerRecord' } | { __typename?: 'ProductRecord', id: any, title?: string, slug?: string, markAsNew?: any, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string }>, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string } } | { __typename?: 'ProjectRecord' }> }> } };

type ProductQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'ProductRecord', id: any, title?: string, description?: string, slug?: string, additionalInformation?: string, markAsNew?: any, bimLink?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string, slug?: string } | { __typename: 'ProductRecord', id: any, title?: string, slug?: string } | { __typename: 'ProjectRecord', id: any, title?: string, slug?: string }> } } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lastImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, alt?: string, basename: string, format: string, mimeType: string, title?: string, url: string, width?: any, height?: any, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number, duration?: number, mp4high?: string, mp4med?: string, mp4low?: string } } }>, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, colorImages: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }>, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string, position?: any }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string }, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string }, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string }>, lightFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string }, drawing?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any, amount?: any, optional?: any, lightsource?: { __typename?: 'ProductLightsourceRecord', id: any, name?: string, price?: any, articleNo?: string } }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any, volume?: any, weight?: any, articleNo?: string, color?: { __typename?: 'ProductColorRecord', id: any, name?: string }, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string }, feature?: { __typename?: 'ProductFeatureRecord', name?: string } }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string, price?: any, accessory?: { __typename?: 'ProductAccessoryRecord', name?: string } }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string }, mountingInstructions?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale, value?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string } }>, bimFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> } };

type AllProductsQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type AllProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductRecord', id: any, title?: string, description?: string, slug?: string, additionalInformation?: string, markAsNew?: any, bimLink?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string, slug?: string } | { __typename: 'ProductRecord', id: any, title?: string, slug?: string } | { __typename: 'ProjectRecord', id: any, title?: string, slug?: string }> } } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lastImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, alt?: string, basename: string, format: string, mimeType: string, title?: string, url: string, width?: any, height?: any, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number, duration?: number, mp4high?: string, mp4med?: string, mp4low?: string } } }>, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, colorImages: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }>, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string, position?: any }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string }, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string }, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string }>, lightFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string }, drawing?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any, amount?: any, optional?: any, lightsource?: { __typename?: 'ProductLightsourceRecord', id: any, name?: string, price?: any, articleNo?: string } }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any, volume?: any, weight?: any, articleNo?: string, color?: { __typename?: 'ProductColorRecord', id: any, name?: string }, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string }, feature?: { __typename?: 'ProductFeatureRecord', name?: string } }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string, price?: any, accessory?: { __typename?: 'ProductAccessoryRecord', name?: string } }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string }, mountingInstructions?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale, value?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string } }>, bimFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> }> };

type AllProductsLightQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type AllProductsLightQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductRecord', id: any, title?: string, slug?: string, markAsNew?: any, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string }>, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string } }> };

type AllProductManualsQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type AllProductManualsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductRecord', id: any, title?: string, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, position?: any }>, mountingInstructions?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string } }> };

type AllProductDownloadsQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type AllProductDownloadsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductRecord', title?: string, bimLink?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, categories: Array<{ __typename?: 'ProductCategoryRecord', name?: string }>, mountingInstructions?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale, value?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string } }>, lightFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, bimFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string } }> };

type ProductCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


type ProductCategoriesQuery = { __typename?: 'Query', productCategories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, position?: any }> };

type AllProductsByDesignerQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
  first?: InputMaybe<Scalars['IntType']>;
}>;


type AllProductsByDesignerQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductRecord', id: any, title?: string, slug?: string, markAsNew?: any, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string }>, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string } }> };

type RelatedProductsQueryVariables = Exact<{
  designerId?: InputMaybe<Scalars['ItemId']>;
  familyId?: InputMaybe<Scalars['ItemId']>;
  first?: InputMaybe<Scalars['IntType']>;
}>;


type RelatedProductsQuery = { __typename?: 'Query', relatedProducts: Array<{ __typename?: 'ProductRecord', id: any, title?: string, slug?: string, markAsNew?: any, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string }>, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string } }> };

type RelatedProjectsForProductQueryVariables = Exact<{
  productId?: InputMaybe<Scalars['ItemId']>;
  first?: InputMaybe<Scalars['IntType']>;
}>;


type RelatedProjectsForProductQuery = { __typename?: 'Query', relatedProjects: Array<{ __typename?: 'ProjectRecord', id: any, location?: string, title?: string, slug?: string, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string, titlePlural?: string }, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }> };

type AllProductsByCategoryQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['ItemId']>;
  first?: InputMaybe<Scalars['IntType']>;
}>;


type AllProductsByCategoryQuery = { __typename?: 'Query', productsByCategory: Array<{ __typename?: 'ProductRecord', id: any, title?: string, slug?: string, markAsNew?: any, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string }>, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string } }> };

type ProjectQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


type ProjectQuery = { __typename?: 'Query', project?: { __typename?: 'ProjectRecord', id: any, location?: string, title?: string, slug?: string, bespoke?: any, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string, titlePlural?: string }, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, relatedProducts: Array<{ __typename?: 'ProductRecord', id: any, title?: string, description?: string, slug?: string, additionalInformation?: string, markAsNew?: any, bimLink?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string, slug?: string } | { __typename: 'ProductRecord', id: any, title?: string, slug?: string } | { __typename: 'ProjectRecord', id: any, title?: string, slug?: string }> } } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lastImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, alt?: string, basename: string, format: string, mimeType: string, title?: string, url: string, width?: any, height?: any, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number, duration?: number, mp4high?: string, mp4med?: string, mp4low?: string } } }>, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, colorImages: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }>, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string, position?: any }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string }, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string }, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string }>, lightFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string }, drawing?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any, amount?: any, optional?: any, lightsource?: { __typename?: 'ProductLightsourceRecord', id: any, name?: string, price?: any, articleNo?: string } }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any, volume?: any, weight?: any, articleNo?: string, color?: { __typename?: 'ProductColorRecord', id: any, name?: string }, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string }, feature?: { __typename?: 'ProductFeatureRecord', name?: string } }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string, price?: any, accessory?: { __typename?: 'ProductAccessoryRecord', name?: string } }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string }, mountingInstructions?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale, value?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string } }>, bimFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> }>, gallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string, slug?: string } | { __typename: 'ProductRecord', id: any, title?: string, slug?: string } | { __typename: 'ProjectRecord', id: any, title?: string, slug?: string }> } } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lastImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> } };

type AllProjectsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
}>;


type AllProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'ProjectRecord', id: any, location?: string, title?: string, slug?: string, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string, titlePlural?: string }, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }> };

type AllRelatedProjectsQueryVariables = Exact<{
  projectType?: InputMaybe<Scalars['ItemId']>;
  first?: InputMaybe<Scalars['IntType']>;
}>;


type AllRelatedProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'ProjectRecord', id: any, location?: string, title?: string, slug?: string, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string, titlePlural?: string }, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }> };

type ProjectStartQueryVariables = Exact<{ [key: string]: never; }>;


type ProjectStartQuery = { __typename?: 'Query', projectStart?: { __typename?: 'ProjectStartRecord', id: any, intro?: string, title?: string } };

type AllProjectTypesQueryVariables = Exact<{ [key: string]: never; }>;


type AllProjectTypesQuery = { __typename?: 'Query', projectTypes: Array<{ __typename?: 'ProjectTypeRecord', id: any, title?: string, titlePlural?: string }> };

type BespokeQueryVariables = Exact<{ [key: string]: never; }>;


type BespokeQuery = { __typename?: 'Query', bespoke?: { __typename?: 'BespokeRecord', id: any, intro?: string, outro?: string, title?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, examples: Array<{ __typename?: 'BespokeProjectRecord', id: any, summary?: string, project?: { __typename?: 'ProjectRecord', id: any, location?: string, title?: string, slug?: string, bespoke?: any, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string, titlePlural?: string }, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, relatedProducts: Array<{ __typename?: 'ProductRecord', id: any, title?: string, description?: string, slug?: string, additionalInformation?: string, markAsNew?: any, bimLink?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string, slug?: string } | { __typename: 'ProductRecord', id: any, title?: string, slug?: string } | { __typename: 'ProjectRecord', id: any, title?: string, slug?: string }> } } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lastImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, alt?: string, basename: string, format: string, mimeType: string, title?: string, url: string, width?: any, height?: any, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number, duration?: number, mp4high?: string, mp4med?: string, mp4low?: string } } }>, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, colorImages: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }>, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string, position?: any }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string }, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string }, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string }>, lightFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string }, drawing?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any, amount?: any, optional?: any, lightsource?: { __typename?: 'ProductLightsourceRecord', id: any, name?: string, price?: any, articleNo?: string } }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any, volume?: any, weight?: any, articleNo?: string, color?: { __typename?: 'ProductColorRecord', id: any, name?: string }, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string }, feature?: { __typename?: 'ProductFeatureRecord', name?: string } }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string, price?: any, accessory?: { __typename?: 'ProductAccessoryRecord', name?: string } }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string }, mountingInstructions?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale, value?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string } }>, bimFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> }>, gallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string, slug?: string } | { __typename: 'ProductRecord', id: any, title?: string, slug?: string } | { __typename: 'ProjectRecord', id: any, title?: string, slug?: string }> } } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lastImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> } }> } };

type BespokeThumbnailQueryVariables = Exact<{ [key: string]: never; }>;


type BespokeThumbnailQuery = { __typename?: 'Query', bespokeThumbnail?: { __typename?: 'BespokeRecord', thumbnail?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, secondaryThumbnail?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } };

type FactoryVisitQueryVariables = Exact<{ [key: string]: never; }>;


type FactoryVisitQuery = { __typename?: 'Query', factoryVisit?: { __typename?: 'FactoryVisitRecord', id: any, title?: string, intro?: string } };

type AllCataloguesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
}>;


type AllCataloguesQuery = { __typename?: 'Query', catalogues: Array<{ __typename?: 'CatalogueRecord', id: any, title?: string, pdf?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, thumbnail?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }> };

type AllColorsAndMaterialsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
}>;


type AllColorsAndMaterialsQuery = { __typename?: 'Query', colorMaterials: Array<{ __typename?: 'ColorMaterialRecord', id: any, description?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, category?: { __typename?: 'ColorMaterialTypeRecord', id: any, category?: string, categoryPlural?: string } }>, colorMaterialTypes: Array<{ __typename?: 'ColorMaterialTypeRecord', id: any, category?: string, categoryPlural?: string }>, colorMaterialIntro?: { __typename?: 'ColorMaterialIntroRecord', id: any, intro?: string } };

type SiteSearchQueryVariables = Exact<{
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  designerIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  faqIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  newsIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  projectIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  staffIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  first?: InputMaybe<Scalars['IntType']>;
}>;


type SiteSearchQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductRecord', id: any, title?: string, slug?: string, markAsNew?: any, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string }>, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string } }>, designers: Array<{ __typename?: 'DesignerRecord', id: any, name?: string, description?: string, slug?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }>, projects: Array<{ __typename?: 'ProjectRecord', id: any, location?: string, title?: string, slug?: string, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string, titlePlural?: string }, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }>, faqs: Array<{ __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer?: string, id: any, question?: string, category?: { __typename?: 'FaqCategoryRecord', id: any, title?: string } }>, news: Array<{ __typename: 'NewsRecord', id: any, link?: string, linkText?: string, text?: string, title?: string, slug?: string, createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> }>, people: Array<{ __typename?: 'StaffRecord', id: any, name?: string, role?: string, phone?: string, email?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }> };

type SiteSEOQueryVariables = Exact<{ [key: string]: never; }>;


type SiteSEOQuery = { __typename?: 'Query', site: { __typename?: 'Site', favicon: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string, siteName?: string, titleSuffix?: string, twitterAccount?: string, fallbackSeo?: { __typename?: 'SeoField', description?: string, title?: string, twitterCard?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } } } };

type StartQueryVariables = Exact<{ [key: string]: never; }>;


type StartQuery = { __typename?: 'Query', start?: { __typename?: 'StartRecord', content: Array<{ __typename: 'FeaturedStartRecord', id: any, headline?: string, items: Array<{ __typename?: 'DesignerRecord' } | { __typename?: 'ProductRecord', id: any, title?: string, slug?: string, markAsNew?: any, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string }>, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string } } | { __typename?: 'ProjectRecord', id: any, location?: string, title?: string, slug?: string, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string, titlePlural?: string }, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } }> } | { __typename: 'FullscreenMediaBlockRecord', id: any, headline?: string, subHeadline?: string, media?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, linkRecord?: { __typename?: 'DesignerRecord', id: any, name?: string, description?: string, slug?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> } | { __typename?: 'ProductRecord', id: any, title?: string, description?: string, slug?: string, additionalInformation?: string, markAsNew?: any, bimLink?: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string, slug?: string } | { __typename: 'ProductRecord', id: any, title?: string, slug?: string } | { __typename: 'ProjectRecord', id: any, title?: string, slug?: string }> } } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lastImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, alt?: string, basename: string, format: string, mimeType: string, title?: string, url: string, width?: any, height?: any, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number, duration?: number, mp4high?: string, mp4med?: string, mp4low?: string } } }>, environmentImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, colorImages: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }>, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string, namePlural?: string, position?: any }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string, slug?: string }, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string }, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string }>, lightFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string }, drawing?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any, amount?: any, optional?: any, lightsource?: { __typename?: 'ProductLightsourceRecord', id: any, name?: string, price?: any, articleNo?: string } }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any, volume?: any, weight?: any, articleNo?: string, color?: { __typename?: 'ProductColorRecord', id: any, name?: string }, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string }, feature?: { __typename?: 'ProductFeatureRecord', name?: string } }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string, price?: any, accessory?: { __typename?: 'ProductAccessoryRecord', name?: string } }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string }, mountingInstructions?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale, value?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string } }>, bimFile?: { __typename?: 'FileField', alt?: string, basename: string, filename: string, format: string, id: any, title?: string, url: string }, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any, content?: string, tag: string }> } } | { __typename: 'FullscreenVideoRecord', id: any, link?: string, linkText?: string, text?: string, video?: { __typename?: 'FileField', id: any, alt?: string, basename: string, format: string, mimeType: string, title?: string, url: string, width?: any, height?: any, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number, duration?: number, mp4high?: string, mp4med?: string, mp4low?: string } } } | { __typename: 'ImageLinkRecord', id: any, firstLink?: string, firstLinkText?: string, firstHeadline?: string, secondLink?: string, secondLinkText?: string, secondHeadline?: string, firstImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } }, secondImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string, base64?: string, sizes: string } } } | { __typename: 'NewsItemRecord', news?: { __typename?: 'NewsRecord', id: any, title?: string, text?: string, link?: string, linkText?: string, slug?: string } }> } };

type FaqQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
}>;


type FaqQuery = { __typename?: 'Query', faq?: { __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer?: string, id: any, question?: string, category?: { __typename?: 'FaqCategoryRecord', id: any, title?: string } } };

type AllFaqsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
}>;


type AllFaqsQuery = { __typename?: 'Query', faqs: Array<{ __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer?: string, id: any, question?: string, category?: { __typename?: 'FaqCategoryRecord', id: any, title?: string } }> };

type AllFaqCategoriesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
}>;


type AllFaqCategoriesQuery = { __typename?: 'Query', faqCategories: Array<{ __typename?: 'FaqCategoryRecord', id: any, title?: string }> };

type FaqStartQueryVariables = Exact<{ [key: string]: never; }>;


type FaqStartQuery = { __typename?: 'Query', faqStart?: { __typename?: 'FaqStartRecord', intro?: string, id: any, title?: string }, faqs: Array<{ __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer?: string, id: any, question?: string, category?: { __typename?: 'FaqCategoryRecord', id: any, title?: string } }> };

type TaxonomyQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
}>;


type TaxonomyQuery = { __typename?: 'Query', designer: Array<{ __typename?: 'DesignerRecord', name?: string, id: any, slug?: string }>, category: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string }>, color: Array<{ __typename?: 'ProductColorRecord', id: any, name?: string }>, connection: Array<{ __typename?: 'ProductConnectionRecord', id: any, name?: string }>, dimmable: Array<{ __typename?: 'ProductDimmableRecord', id: any, name?: string }>, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string }>, family: Array<{ __typename?: 'ProductFamilyRecord', id: any, name?: string }>, lightsource: Array<{ __typename?: 'ProductLightsourceRecord', id: any, name?: string, price?: any, articleNo?: string }>, material: Array<{ __typename?: 'ProductMaterialRecord', id: any, name?: string }>, mounting: Array<{ __typename?: 'ProductMountingRecord', id: any, name?: string }>, socket: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string }> };
