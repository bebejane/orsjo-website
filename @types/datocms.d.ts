export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
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
export type AboutRecord = RecordInterface & {
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
export type AboutRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type About us (about) */
export type AboutRecordIntroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type About section (about_section) */
export type AboutSectionRecord = RecordInterface & {
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
export type AboutSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type About section (about_section) */
export type AboutSectionRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type Accessory (accessory) */
export type AccessoryRecord = RecordInterface & {
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
export type AccessoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Bespoke project (bespoke_project) */
export type BespokeProjectRecord = RecordInterface & {
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
export type BespokeProjectRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Bespoke project (bespoke_project) */
export type BespokeProjectRecordSummaryArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Record of type Bespoke (bespoke) */
export type BespokeRecord = RecordInterface & {
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
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Bespoke (bespoke) */
export type BespokeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bespoke (bespoke) */
export type BespokeRecordIntroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Bespoke (bespoke) */
export type BespokeRecordOutroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']>;
};

export type CatalogueModelFilter = {
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

export enum CatalogueModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Catalogue (catalogue) */
export type CatalogueRecord = RecordInterface & {
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
export type CatalogueRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType'];
};

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow'
}

export type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType'];
  blue: Scalars['IntType'];
  green: Scalars['IntType'];
  hex: Scalars['String'];
  red: Scalars['IntType'];
};

/** Record of type Color & material intro (color_material_intro) */
export type ColorMaterialIntroRecord = RecordInterface & {
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
export type ColorMaterialIntroRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Color & material intro (color_material_intro) */
export type ColorMaterialIntroRecordIntroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

export type ColorMaterialModelFilter = {
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

export enum ColorMaterialModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Color & material (color_material) */
export type ColorMaterialRecord = RecordInterface & {
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
export type ColorMaterialRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ColorMaterialTypeModelFilter = {
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

export enum ColorMaterialTypeModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CategoryPluralAsc = 'categoryPlural_ASC',
  CategoryPluralDesc = 'categoryPlural_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Color & material type (color_material_type) */
export type ColorMaterialTypeRecord = RecordInterface & {
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
  category: Scalars['String'];
  categoryPlural: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  position?: Maybe<Scalars['IntType']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Color & material type (color_material_type) */
export type ColorMaterialTypeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Contact (contact) */
export type ContactRecord = RecordInterface & {
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
export type ContactRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Contact (contact) */
export type ContactRecordAddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Contact (contact) */
export type ContactRecordIntroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Contact (contact) */
export type ContactRecordShowroomIntroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

export type CountryModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<CountryModelFilter>>>;
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

export enum CountryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Country (country) */
export type CountryRecord = RecordInterface & {
  __typename?: 'CountryRecord';
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


/** Record of type Country (country) */
export type CountryRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Country (country) */
export type CountryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Country (country) */
export type CountryRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
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

export type DesignerModelFilter = {
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

export enum DesignerModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Designer (designer) */
export type DesignerRecord = RecordInterface & {
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
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Designer (designer) */
export type DesignerRecord_AllDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Designer (designer) */
export type DesignerRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Designer (designer) */
export type DesignerRecordDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};

export type DistributorModelFilter = {
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

export enum DistributorModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  ContactNameAsc = 'contactName_ASC',
  ContactNameDesc = 'contactName_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  PostalCodeAsc = 'postalCode_ASC',
  PostalCodeDesc = 'postalCode_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** Record of type Distributor (distributor) */
export type DistributorRecord = RecordInterface & {
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
export type DistributorRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Distributor (distributor) */
export type DistributorRecordAddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Record of type Download (download) */
export type DownloadRecord = RecordInterface & {
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
export type DownloadRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Factory visit (factory_visit) */
export type FactoryVisitRecord = RecordInterface & {
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
export type FactoryVisitRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Factory visit (factory_visit) */
export type FactoryVisitRecordIntroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

export type FaqCategoryModelFilter = {
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

export enum FaqCategoryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type FAQ Category (faq_category) */
export type FaqCategoryRecord = RecordInterface & {
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
export type FaqCategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FaqModelFilter = {
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

export enum FaqModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type FAQ (faq) */
export type FaqRecord = RecordInterface & {
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
export type FaqRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type FAQ (faq) */
export type FaqRecordAnswerArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Record of type FAQ start (faq_start) */
export type FaqStartRecord = RecordInterface & {
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
export type FaqStartRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type FAQ start (faq_start) */
export type FaqStartRecordIntroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication'
}

export type FeaturedModelItemsField = DesignerRecord | ProductRecord | ProjectRecord;

/** Block of type Featured (featured) */
export type FeaturedRecord = RecordInterface & {
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
  updatedAt: Scalars['DateTime'];
};


/** Block of type Featured (featured) */
export type FeaturedRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FeaturedStartModelItemsField = DesignerRecord | ProductRecord | ProjectRecord;

/** Block of type Featured start (featured_start) */
export type FeaturedStartRecord = RecordInterface & {
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
export type FeaturedStartRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FileField = FileFieldInterface & {
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
  focalPoint?: Maybe<FocalPoint>;
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


export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: InputMaybe<Scalars['Float']>;
  quality?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
};


export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
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
  focalPoint?: Maybe<FocalPoint>;
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


export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: InputMaybe<Scalars['Float']>;
  quality?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
};


export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldMultiLocaleField = {
  __typename?: 'FileFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<FileField>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
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
export type FloatFilter = {
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

export type FullscreenMediaBlockModelLinkRecordField = DesignerRecord | ProductRecord;

/** Block of type Fullscreen media (fullscreen_media_block) */
export type FullscreenMediaBlockRecord = RecordInterface & {
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
export type FullscreenMediaBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Fullscreen video (fullscreen_video) */
export type FullscreenVideoRecord = RecordInterface & {
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
export type FullscreenVideoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Fullscreen video (fullscreen_video) */
export type FullscreenVideoRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type Fullwidth image (fullwidth_image) */
export type FullwidthImageRecord = RecordInterface & {
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
export type FullwidthImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Multiple files/images field */
export type GalleryFilter = {
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

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
};

/** Block of type Image gallery (image_gallery) */
export type ImageGalleryRecord = RecordInterface & {
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
export type ImageGalleryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Image links (image_link) */
export type ImageLinkRecord = RecordInterface & {
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
export type ImageLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ImgixParams = {
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

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye'
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight'
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit'
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width'
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid'
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale'
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v'
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp'
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block'
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsMarkTile {
  Grid = 'grid'
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json'
}

export enum ImgixParamsTransparency {
  Grid = 'grid'
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color'
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start'
}

export enum ImgixParamsTxtFit {
  Max = 'max'
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated'
}

export type JobModelFilter = {
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

export enum JobModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Jobs (job) */
export type JobRecord = RecordInterface & {
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
  slug: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Jobs (job) */
export type JobRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Jobs (job) */
export type JobRecordSummaryArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Jobs (job) */
export type JobRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type Lightsource (lightsource) */
export type LightsourceRecord = RecordInterface & {
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
export type LightsourceRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
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
export type LinksFilter = {
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

/** Record of type Manuals (manual) */
export type ManualRecord = RecordInterface & {
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
export type ManualRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Manuals (manual) */
export type ManualRecordIntroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png'
}

/** Block of type News item (news_item) */
export type NewsItemRecord = RecordInterface & {
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
  news: NewsRecord;
  updatedAt: Scalars['DateTime'];
};


/** Block of type News item (news_item) */
export type NewsItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type NewsModelFilter = {
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

export enum NewsModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type News (news) */
export type NewsRecord = RecordInterface & {
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
  slug: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type News (news) */
export type NewsRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
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

export type PressModelFilter = {
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

export enum PressModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** Record of type Press (press) */
export type PressRecord = RecordInterface & {
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
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};


/** Record of type Press (press) */
export type PressRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ProductAccessoryModelFilter = {
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

export enum ProductAccessoryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Product accessory (product_accessory) */
export type ProductAccessoryRecord = RecordInterface & {
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
export type ProductAccessoryRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product accessory (product_accessory) */
export type ProductAccessoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product accessory (product_accessory) */
export type ProductAccessoryRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ProductCategoryModelFilter = {
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

export enum ProductCategoryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NamePluralAsc = 'namePlural_ASC',
  NamePluralDesc = 'namePlural_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Product category (product_category) */
export type ProductCategoryRecord = RecordInterface & {
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
export type ProductCategoryRecord_AllDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Product category (product_category) */
export type ProductCategoryRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product category (product_category) */
export type ProductCategoryRecord_AllNamePluralLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product category (product_category) */
export type ProductCategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product category (product_category) */
export type ProductCategoryRecordDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Product category (product_category) */
export type ProductCategoryRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product category (product_category) */
export type ProductCategoryRecordNamePluralArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ProductColorModelFilter = {
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

export enum ProductColorModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Product color (product_color) */
export type ProductColorRecord = RecordInterface & {
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
export type ProductColorRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product color (product_color) */
export type ProductColorRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product color (product_color) */
export type ProductColorRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ProductConnectionModelFilter = {
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

export enum ProductConnectionModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Product connection (product_connection) */
export type ProductConnectionRecord = RecordInterface & {
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
export type ProductConnectionRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product connection (product_connection) */
export type ProductConnectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product connection (product_connection) */
export type ProductConnectionRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ProductDimmableModelFilter = {
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

export enum ProductDimmableModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Product dimmable (product_dimmable) */
export type ProductDimmableRecord = RecordInterface & {
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
export type ProductDimmableRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product dimmable (product_dimmable) */
export type ProductDimmableRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product dimmable (product_dimmable) */
export type ProductDimmableRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ProductElectricalModelFilter = {
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

export enum ProductElectricalModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Product Electrical Data (product_electrical) */
export type ProductElectricalRecord = RecordInterface & {
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
export type ProductElectricalRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product Electrical Data (product_electrical) */
export type ProductElectricalRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product Electrical Data (product_electrical) */
export type ProductElectricalRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ProductFamilyModelFilter = {
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

export enum ProductFamilyModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Product family (product_family) */
export type ProductFamilyRecord = RecordInterface & {
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
export type ProductFamilyRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ProductFeatureModelFilter = {
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

export enum ProductFeatureModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Product feature (product_feature) */
export type ProductFeatureRecord = RecordInterface & {
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
export type ProductFeatureRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product feature (product_feature) */
export type ProductFeatureRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product feature (product_feature) */
export type ProductFeatureRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ProductLightsourceModelFilter = {
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

export enum ProductLightsourceModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  ArticleNoAsc = 'articleNo_ASC',
  ArticleNoDesc = 'articleNo_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Product lightsource (product_lightsource) */
export type ProductLightsourceRecord = RecordInterface & {
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
  articleNo: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  price: Scalars['FloatType'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product lightsource (product_lightsource) */
export type ProductLightsourceRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product lightsource (product_lightsource) */
export type ProductLightsourceRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product lightsource (product_lightsource) */
export type ProductLightsourceRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ProductMaterialModelFilter = {
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

export enum ProductMaterialModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Product material (product_material) */
export type ProductMaterialRecord = RecordInterface & {
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
export type ProductMaterialRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product material (product_material) */
export type ProductMaterialRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product material (product_material) */
export type ProductMaterialRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ProductModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProductModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
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
  presentation?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  sockets?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export type ProductModelNameModelFilter = {
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

export enum ProductModelNameModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Product model name (product_model_name) */
export type ProductModelNameRecord = RecordInterface & {
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
export type ProductModelNameRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product model name (product_model_name) */
export type ProductModelNameRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product model name (product_model_name) */
export type ProductModelNameRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum ProductModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BimLinkAsc = 'bimLink_ASC',
  BimLinkDesc = 'bimLink_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MarkAsNewAsc = 'markAsNew_ASC',
  MarkAsNewDesc = 'markAsNew_DESC',
  PresentationAsc = 'presentation_ASC',
  PresentationDesc = 'presentation_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProductModelProductGalleryField = FullwidthImageRecord | ImageGalleryRecord | TextRecord | TwoColumnImageRecord | VideoRecord;

/** Block of type Model (product_model) */
export type ProductModelRecord = RecordInterface & {
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
export type ProductModelRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ProductMountingModelFilter = {
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

export enum ProductMountingModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Product mounting (product_mounting) */
export type ProductMountingRecord = RecordInterface & {
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
export type ProductMountingRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product mounting (product_mounting) */
export type ProductMountingRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product mounting (product_mounting) */
export type ProductMountingRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Product (product) */
export type ProductRecord = RecordInterface & {
  __typename?: 'ProductRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allPdfFileLocales?: Maybe<Array<FileFieldMultiLocaleField>>;
  _allPresentationLocales?: Maybe<Array<StringMultiLocaleField>>;
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
  presentation?: Maybe<Scalars['String']>;
  productGallery: Array<ProductModelProductGalleryField>;
  slug: Scalars['String'];
  sockets: Array<ProductSocketRecord>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Product (product) */
export type ProductRecord_AllDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Product (product) */
export type ProductRecord_AllPdfFileLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product (product) */
export type ProductRecord_AllPresentationLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product (product) */
export type ProductRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product (product) */
export type ProductRecordDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Product (product) */
export type ProductRecordPdfFileArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product (product) */
export type ProductRecordPresentationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ProductSocketModelFilter = {
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

export enum ProductSocketModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Product socket (product_socket) */
export type ProductSocketRecord = RecordInterface & {
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
export type ProductSocketRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Product start (product_start) */
export type ProductStartRecord = RecordInterface & {
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
export type ProductStartRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ProjectModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
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
  location?: InputMaybe<StringFilter>;
  projectType?: InputMaybe<LinkFilter>;
  relatedProducts?: InputMaybe<LinksFilter>;
  secondaryImage?: InputMaybe<FileFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export type ProjectModelGalleryField = FullwidthImageRecord | ImageGalleryRecord | TextRecord | TwoColumnImageRecord | VideoRecord;

export enum ProjectModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Project (project) */
export type ProjectRecord = RecordInterface & {
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
  createdAt: Scalars['DateTime'];
  gallery: Array<ProjectModelGalleryField>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  location?: Maybe<Scalars['String']>;
  projectType?: Maybe<ProjectTypeRecord>;
  relatedProducts: Array<ProductRecord>;
  secondaryImage?: Maybe<FileField>;
  slug: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Project (project) */
export type ProjectRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Project start (project_start) */
export type ProjectStartRecord = RecordInterface & {
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
export type ProjectStartRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Project start (project_start) */
export type ProjectStartRecordIntroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectTypeModelFilter = {
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
  title?: InputMaybe<StringFilter>;
  titlePlural?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum ProjectTypeModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitlePluralAsc = 'titlePlural_ASC',
  TitlePluralDesc = 'titlePlural_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Project type (project_type) */
export type ProjectTypeRecord = RecordInterface & {
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
  title?: Maybe<Scalars['String']>;
  titlePlural: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Project type (project_type) */
export type ProjectTypeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
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
export type Query = {
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
export type Query_AllCataloguesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CatalogueModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllColorMaterialTypesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorMaterialTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllColorMaterialsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorMaterialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCountriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllDesignersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DesignerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllDistributorsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistributorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllFaqCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllFaqsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllJobsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<JobModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllNewsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPressesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PressModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductAccessoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductAccessoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductColorsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductColorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductConnectionsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductConnectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductDimmablesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductDimmableModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductElectricalsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductElectricalModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductFamiliesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFamilyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductFeaturesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFeatureModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductLightsourcesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductLightsourceModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductMaterialsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMaterialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductModelNamesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelNameModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductMountingsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMountingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductSocketsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductSocketModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProjectTypesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProjectsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllResellersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ResellerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllShowroomsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShowroomModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllStaffsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StaffModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTranslationsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TranslationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAboutArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAllCataloguesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CatalogueModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CatalogueModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllColorMaterialTypesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorMaterialTypeModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ColorMaterialTypeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllColorMaterialsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorMaterialModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ColorMaterialModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllCountriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CountryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllDesignersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DesignerModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DesignerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllDistributorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistributorModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DistributorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllFaqCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllFaqsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllJobsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<JobModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<JobModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllPressesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PressModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PressModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProductAccessoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductAccessoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductAccessoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProductCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProductColorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductColorModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductColorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProductConnectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductConnectionModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductConnectionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProductDimmablesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductDimmableModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductDimmableModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProductElectricalsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductElectricalModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductElectricalModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProductFamiliesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFamilyModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFamilyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProductFeaturesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFeatureModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFeatureModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProductLightsourcesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductLightsourceModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductLightsourceModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProductMaterialsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMaterialModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMaterialModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProductModelNamesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelNameModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelNameModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProductMountingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMountingModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMountingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProductSocketsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductSocketModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductSocketModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProductsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProjectTypesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectTypeModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectTypeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllResellersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ResellerModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ResellerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllShowroomsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShowroomModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShowroomModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllStaffsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StaffModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StaffModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllTranslationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TranslationModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TranslationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
export type QueryBespokeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryCatalogueArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CatalogueModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CatalogueModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryColorMaterialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorMaterialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ColorMaterialModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryColorMaterialIntroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryColorMaterialTypeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorMaterialTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ColorMaterialTypeModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryContactArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryCountryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CountryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryDesignerArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DesignerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DesignerModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryDistributorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistributorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DistributorModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryDownloadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryFactoryVisitArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryFaqArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryFaqCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqCategoryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryFaqStartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryJobArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<JobModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<JobModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryManualArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPressArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PressModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PressModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductAccessoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductAccessoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductAccessoryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductCategoryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductColorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductColorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductColorModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductConnectionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductConnectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductConnectionModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductDimmableArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductDimmableModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductDimmableModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductElectricalArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductElectricalModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductElectricalModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductFamilyArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFamilyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFamilyModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductFeatureArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFeatureModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFeatureModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductLightsourceArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductLightsourceModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductLightsourceModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductMaterialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMaterialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMaterialModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductModelNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelNameModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelNameModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductMountingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMountingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMountingModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductSocketArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductSocketModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductSocketModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductStartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryProjectArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProjectStartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryProjectTypeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectTypeModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryResellerArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ResellerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ResellerModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryShowroomArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShowroomModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShowroomModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryStaffArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StaffModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StaffModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryStartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QuerySustainabilityArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryTranslationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TranslationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TranslationModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

export type RecordInterface = {
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


export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ResellerModelFilter = {
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

export enum ResellerModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PostalCodeAsc = 'postalCode_ASC',
  PostalCodeDesc = 'postalCode_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** Record of type Reseller (reseller) */
export type ResellerRecord = RecordInterface & {
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
export type ResellerRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Reseller (reseller) */
export type ResellerRecordAddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export type ResponsiveImage = {
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

export type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileField>;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
};

export type ShowroomModelFilter = {
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
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum ShowroomModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Showroom (showroom) */
export type ShowroomRecord = RecordInterface & {
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
  updatedAt: Scalars['DateTime'];
};


/** Record of type Showroom (showroom) */
export type ShowroomRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Showroom (showroom) */
export type ShowroomRecordAdditionalArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Showroom (showroom) */
export type ShowroomRecordAddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

export type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
};


export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
  En = 'en',
  No = 'no',
  Sv = 'sv'
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StaffModelFilter = {
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

export enum StaffModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Staff (staff) */
export type StaffRecord = RecordInterface & {
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
export type StaffRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type StartModelContentField = FeaturedStartRecord | FullscreenMediaBlockRecord | FullscreenVideoRecord | ImageLinkRecord | NewsItemRecord;

/** Record of type Start (start) */
export type StartRecord = RecordInterface & {
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
export type StartRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
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
export type StringFilter = {
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

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']>;
  pattern: Scalars['String'];
  regexp?: InputMaybe<Scalars['BooleanType']>;
};

export type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Scalars['String']>;
};

/** Record of type Sustainability (sustainability) */
export type SustainabilityRecord = RecordInterface & {
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
export type SustainabilityRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sustainability (sustainability) */
export type SustainabilityRecordIntroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type Sustainability step (sustainability_step) */
export type SustainabilityStepRecord = RecordInterface & {
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
  image: FileField;
  text: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Block of type Sustainability step (sustainability_step) */
export type SustainabilityStepRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Sustainability step (sustainability_step) */
export type SustainabilityStepRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

export type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']>;
  content?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type TextModelTextField = {
  __typename?: 'TextModelTextField';
  blocks: Array<Scalars['String']>;
  links: Array<TextModelTextLinksField>;
  value: Scalars['JsonField'];
};

export type TextModelTextLinksField = DesignerRecord | ProductRecord | ProjectRecord;

/** Block of type Text (text) */
export type TextRecord = RecordInterface & {
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
export type TextRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TranslationModelFilter = {
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

export enum TranslationModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  PageAsc = 'page_ASC',
  PageDesc = 'page_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

/** Record of type Translation (translation) */
export type TranslationRecord = RecordInterface & {
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
  key: Scalars['String'];
  page: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
};


/** Record of type Translation (translation) */
export type TranslationRecord_AllValueLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Translation (translation) */
export type TranslationRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Translation (translation) */
export type TranslationRecordValueArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Two column images (two_column_image) */
export type TwoColumnImageRecord = RecordInterface & {
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
  marginFirst?: Maybe<Scalars['BooleanType']>;
  marginOnLastImage?: Maybe<Scalars['BooleanType']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Two column images (two_column_image) */
export type TwoColumnImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
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
export type UpdatedAtFilter = {
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
export type UploadAltFilter = {
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
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
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
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
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
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
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
export type UploadFormatFilter = {
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
export type UploadHeightFilter = {
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
export type UploadIdFilter = {
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
export type UploadMd5Filter = {
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
export type UploadMimeTypeFilter = {
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
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC'
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square'
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
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
export type UploadTagsFilter = {
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
export type UploadTitleFilter = {
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

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video'
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
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

export type UploadVideoField = {
  __typename?: 'UploadVideoField';
  duration?: Maybe<Scalars['Int']>;
  framerate?: Maybe<Scalars['Int']>;
  mp4Url?: Maybe<Scalars['String']>;
  muxAssetId: Scalars['String'];
  muxPlaybackId: Scalars['String'];
  streamingUrl: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};


export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
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
export type VariantRecord = RecordInterface & {
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
export type VariantRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

/** Block of type Video (video) */
export type VideoRecord = RecordInterface & {
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
export type VideoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FocalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType'];
  y: Scalars['FloatType'];
};

export type SustainabilityQueryVariables = Exact<{ [key: string]: never; }>;


export type SustainabilityQuery = { __typename?: 'Query', sustainability?: { __typename?: 'SustainabilityRecord', id: any, title?: string | null, intro?: string | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, steps: Array<{ __typename?: 'SustainabilityStepRecord', title: string, text: string, fullWidthImage?: any | null, image: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } }> } | null };

export type AboutQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutQuery = { __typename?: 'Query', about?: { __typename?: 'AboutRecord', id: any, intro?: string | null, title?: string | null, video?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, title?: string | null, url: string, width?: any | null, height?: any | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null, sections: Array<{ __typename?: 'AboutSectionRecord', id: any, text?: string | null, video?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, title?: string | null, url: string, width?: any | null, height?: any | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null }> } | null };

export type NewsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type NewsQuery = { __typename?: 'Query', news?: { __typename: 'NewsRecord', id: any, link?: string | null, linkText?: string | null, text?: string | null, title?: string | null, slug: string, createdAt: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | null };

export type LastNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type LastNewsQuery = { __typename?: 'Query', lastNews: Array<{ __typename: 'NewsRecord', id: any, link?: string | null, linkText?: string | null, text?: string | null, title?: string | null, slug: string, createdAt: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> };

export type AllNewsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


export type AllNewsQuery = { __typename?: 'Query', news: Array<{ __typename: 'NewsRecord', id: any, link?: string | null, linkText?: string | null, text?: string | null, title?: string | null, slug: string, createdAt: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

export type JobQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
}>;


export type JobQuery = { __typename?: 'Query', job?: { __typename?: 'JobRecord', id: any, summary?: string | null, text?: string | null, title?: string | null } | null };

export type AllJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllJobsQuery = { __typename?: 'Query', jobs: Array<{ __typename?: 'JobRecord', id: any, summary?: string | null, text?: string | null, title?: string | null }> };

export type PressQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
}>;


export type PressQuery = { __typename?: 'Query', press?: { __typename?: 'PressRecord', id: any, title: string, url: string } | null };

export type AllPressQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPressQuery = { __typename?: 'Query', presses: Array<{ __typename?: 'PressRecord', id: any, title: string, url: string }> };

export type ShowroomQueryVariables = Exact<{ [key: string]: never; }>;


export type ShowroomQuery = { __typename?: 'Query', showroom?: { __typename?: 'ShowroomRecord', additional?: string | null, address?: string | null, city?: string | null, id: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | null };

export type AllShowroomsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllShowroomsQuery = { __typename?: 'Query', showrooms: Array<{ __typename?: 'ShowroomRecord', additional?: string | null, address?: string | null, city?: string | null, id: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> };

export type DistributorQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
  locale?: InputMaybe<SiteLocale>;
}>;


export type DistributorQuery = { __typename?: 'Query', distributor?: { __typename?: 'DistributorRecord', name?: string | null, address?: string | null, postalCode?: string | null, city?: string | null, contactName?: string | null, phone?: string | null, email?: string | null, url?: string | null, country?: { __typename?: 'CountryRecord', name?: string | null } | null } | null };

export type AllDistributorsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
}>;


export type AllDistributorsQuery = { __typename?: 'Query', distributors: Array<{ __typename?: 'DistributorRecord', name?: string | null, address?: string | null, postalCode?: string | null, city?: string | null, contactName?: string | null, phone?: string | null, email?: string | null, url?: string | null, country?: { __typename?: 'CountryRecord', name?: string | null } | null }> };

export type ResellerQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
  locale?: InputMaybe<SiteLocale>;
}>;


export type ResellerQuery = { __typename?: 'Query', reseller?: { __typename?: 'ResellerRecord', id: any, name?: string | null, address?: string | null, postalCode?: string | null, city?: string | null, url?: string | null, country?: { __typename?: 'CountryRecord', id: any, name?: string | null } | null } | null };

export type AllResellersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
}>;


export type AllResellersQuery = { __typename?: 'Query', resellers: Array<{ __typename?: 'ResellerRecord', id: any, name?: string | null, address?: string | null, postalCode?: string | null, city?: string | null, url?: string | null, country?: { __typename?: 'CountryRecord', id: any, name?: string | null } | null }> };

export type StaffQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
  locale?: InputMaybe<SiteLocale>;
}>;


export type StaffQuery = { __typename?: 'Query', staff?: { __typename?: 'StaffRecord', id: any, name?: string | null, role?: string | null, phone?: string | null, email?: string | null, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | null };

export type AllStaffsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
  locale?: InputMaybe<SiteLocale>;
}>;


export type AllStaffsQuery = { __typename?: 'Query', staffs: Array<{ __typename?: 'StaffRecord', id: any, name?: string | null, role?: string | null, phone?: string | null, email?: string | null, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> };

export type ContactQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactQuery = { __typename?: 'Query', contact?: { __typename?: 'ContactRecord', id: any, email?: string | null, intro?: string | null, phone?: string | null, showroomIntro?: string | null, title?: string | null, address?: string | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | null };

export type DesignerQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<SiteLocale>;
}>;


export type DesignerQuery = { __typename?: 'Query', designer?: { __typename?: 'DesignerRecord', id: any, name: string, description?: string | null, slug: string, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | null };

export type AllDesignersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
}>;


export type AllDesignersQuery = { __typename?: 'Query', designers: Array<{ __typename?: 'DesignerRecord', id: any, name: string, description?: string | null, slug: string, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> };

export type ContactFragmentFragment = { __typename?: 'ContactRecord', address?: string | null, email?: string | null, id: any, intro?: string | null, phone?: string | null, showroomIntro?: string | null, title?: string | null };

export type DesignerFragmentFragment = { __typename?: 'DesignerRecord', id: any, name: string, description?: string | null, slug: string, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null };

export type DesignerLightFragmentFragment = { __typename?: 'DesignerRecord', id: any, name: string, description?: string | null, slug: string, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null };

export type DistributorFragmentFragment = { __typename?: 'DistributorRecord', name?: string | null, address?: string | null, postalCode?: string | null, city?: string | null, contactName?: string | null, phone?: string | null, email?: string | null, url?: string | null, country?: { __typename?: 'CountryRecord', name?: string | null } | null };

export type FaqFragmentFragment = { __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer?: string | null, id: any, question?: string | null, category?: { __typename?: 'FaqCategoryRecord', id: any, title?: string | null } | null };

export type FileFragmentFragment = { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string };

export type ImageFragmentFragment = { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null };

export type ImageThumbnailFragmentFragment = { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null };

export type NewsFragmentFragment = { __typename: 'NewsRecord', id: any, link?: string | null, linkText?: string | null, text?: string | null, title?: string | null, slug: string, createdAt: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null };

export type ProductFragmentFragment = { __typename?: 'ProductRecord', id: any, title?: string | null, description?: string | null, slug: string, bimLink?: string | null, presentation?: string | null, markAsNew?: any | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name: string, slug: string } | { __typename: 'ProductRecord', id: any, title?: string | null, slug: string } | { __typename: 'ProjectRecord', id: any, title?: string | null, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lastImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, title?: string | null, url: string, width?: any | null, height?: any | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null }>, environmentImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, colorImages: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }>, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string } | null, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string | null } | null, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string | null } | null, drawing?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any | null, amount?: any | null, optional?: any | null, lightsource?: { __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string } | null }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any | null, volume?: any | null, weight?: any | null, articleNo?: string | null, color?: { __typename?: 'ProductColorRecord', id: any, name?: string | null } | null, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string | null } | null, feature?: { __typename?: 'ProductFeatureRecord', name?: string | null } | null }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string | null, price?: any | null, accessory?: { __typename?: 'ProductAccessoryRecord', name?: string | null } | null }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string | null } | null, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }>, seo: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

export type ProductLightFragmentFragment = { __typename?: 'ProductRecord', id: any, title?: string | null, slug: string, markAsNew?: any | null, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, environmentImage?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string, slug: string } | null };

export type ProjectFragmentFragment = { __typename?: 'ProjectRecord', id: any, location?: string | null, title?: string | null, slug: string, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string | null, titlePlural: string } | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, secondaryImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, relatedProducts: Array<{ __typename?: 'ProductRecord', id: any, title?: string | null, description?: string | null, slug: string, bimLink?: string | null, presentation?: string | null, markAsNew?: any | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name: string, slug: string } | { __typename: 'ProductRecord', id: any, title?: string | null, slug: string } | { __typename: 'ProjectRecord', id: any, title?: string | null, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lastImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, title?: string | null, url: string, width?: any | null, height?: any | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null }>, environmentImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, colorImages: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }>, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string } | null, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string | null } | null, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string | null } | null, drawing?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any | null, amount?: any | null, optional?: any | null, lightsource?: { __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string } | null }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any | null, volume?: any | null, weight?: any | null, articleNo?: string | null, color?: { __typename?: 'ProductColorRecord', id: any, name?: string | null } | null, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string | null } | null, feature?: { __typename?: 'ProductFeatureRecord', name?: string | null } | null }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string | null, price?: any | null, accessory?: { __typename?: 'ProductAccessoryRecord', name?: string | null } | null }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string | null } | null, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }>, seo: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }>, gallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name: string, slug: string } | { __typename: 'ProductRecord', id: any, title?: string | null, slug: string } | { __typename: 'ProjectRecord', id: any, title?: string | null, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lastImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> };

export type ProjectLightFragmentFragment = { __typename?: 'ProjectRecord', id: any, location?: string | null, title?: string | null, slug: string, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string | null, titlePlural: string } | null, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, secondaryImage?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null };

export type ResellerFragmentFragment = { __typename?: 'ResellerRecord', id: any, name?: string | null, address?: string | null, postalCode?: string | null, city?: string | null, url?: string | null, country?: { __typename?: 'CountryRecord', id: any, name?: string | null } | null };

export type SeoFragmentFragment = { __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string };

export type ShowroomFragmentFragment = { __typename?: 'ShowroomRecord', additional?: string | null, address?: string | null, city?: string | null, id: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null };

export type SiteFragmentFragment = { __typename?: 'Site', favicon: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | null } | null };

export type StaffFragmentFragment = { __typename?: 'StaffRecord', id: any, name?: string | null, role?: string | null, phone?: string | null, email?: string | null, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null };

export type VideoFragmentFragment = { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, title?: string | null, url: string, width?: any | null, height?: any | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null };

export type GlobalQueryVariables = Exact<{ [key: string]: never; }>;


export type GlobalQuery = { __typename?: 'Query', site: { __typename?: 'Site', favicon: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | null } | null } };

export type MenuQueryVariables = Exact<{ [key: string]: never; }>;


export type MenuQuery = { __typename?: 'Query', allDesigners: Array<{ __typename?: 'DesignerRecord', id: any, slug: string, name: string }>, allProducts: Array<{ __typename?: 'ProductRecord', id: any, designer?: { __typename?: 'DesignerRecord', id: any } | null }>, allProductCategories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }> };

export type IntlQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocales?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


export type IntlQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'TranslationRecord', key: string, value?: string | null }> };

export type ProductQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<SiteLocale>;
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'ProductRecord', id: any, title?: string | null, description?: string | null, slug: string, bimLink?: string | null, presentation?: string | null, markAsNew?: any | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name: string, slug: string } | { __typename: 'ProductRecord', id: any, title?: string | null, slug: string } | { __typename: 'ProjectRecord', id: any, title?: string | null, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lastImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, title?: string | null, url: string, width?: any | null, height?: any | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null }>, environmentImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, colorImages: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }>, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string } | null, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string | null } | null, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string | null } | null, drawing?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any | null, amount?: any | null, optional?: any | null, lightsource?: { __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string } | null }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any | null, volume?: any | null, weight?: any | null, articleNo?: string | null, color?: { __typename?: 'ProductColorRecord', id: any, name?: string | null } | null, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string | null } | null, feature?: { __typename?: 'ProductFeatureRecord', name?: string | null } | null }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string | null, price?: any | null, accessory?: { __typename?: 'ProductAccessoryRecord', name?: string | null } | null }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string | null } | null, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }>, seo: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

export type AllProductsQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


export type AllProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductRecord', id: any, title?: string | null, description?: string | null, slug: string, bimLink?: string | null, presentation?: string | null, markAsNew?: any | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name: string, slug: string } | { __typename: 'ProductRecord', id: any, title?: string | null, slug: string } | { __typename: 'ProjectRecord', id: any, title?: string | null, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lastImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, title?: string | null, url: string, width?: any | null, height?: any | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null }>, environmentImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, colorImages: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }>, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string } | null, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string | null } | null, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string | null } | null, drawing?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any | null, amount?: any | null, optional?: any | null, lightsource?: { __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string } | null }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any | null, volume?: any | null, weight?: any | null, articleNo?: string | null, color?: { __typename?: 'ProductColorRecord', id: any, name?: string | null } | null, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string | null } | null, feature?: { __typename?: 'ProductFeatureRecord', name?: string | null } | null }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string | null, price?: any | null, accessory?: { __typename?: 'ProductAccessoryRecord', name?: string | null } | null }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string | null } | null, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }>, seo: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }> };

export type AllProductsLightQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
}>;


export type AllProductsLightQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductRecord', id: any, title?: string | null, slug: string, markAsNew?: any | null, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, environmentImage?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string, slug: string } | null }> };

export type AllProductManualsQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


export type AllProductManualsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductRecord', id: any, title?: string | null, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, position?: any | null }>, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> };

export type AllProductDownloadsQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


export type AllProductDownloadsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductRecord', title?: string | null, bimLink?: string | null, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', name?: string | null }>, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> };

export type ProductStartQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductStartQuery = { __typename?: 'Query', productStart?: { __typename?: 'ProductStartRecord', id: any, featured: Array<{ __typename?: 'FeaturedRecord', id: any, headline?: string | null, items: Array<{ __typename?: 'DesignerRecord' } | { __typename?: 'ProductRecord', id: any, title?: string | null, slug: string, markAsNew?: any | null, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, environmentImage?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string, slug: string } | null } | { __typename?: 'ProjectRecord' }> }> } | null };

export type ProductCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductCategoriesQuery = { __typename?: 'Query', productCategories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, position?: any | null }> };

export type AllProductsByDesignerQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
}>;


export type AllProductsByDesignerQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductRecord', id: any, title?: string | null, slug: string, markAsNew?: any | null, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, environmentImage?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string, slug: string } | null }> };

export type RelatedProductsQueryVariables = Exact<{
  designerId?: InputMaybe<Scalars['ItemId']>;
  familyId?: InputMaybe<Scalars['ItemId']>;
}>;


export type RelatedProductsQuery = { __typename?: 'Query', relatedProducts: Array<{ __typename?: 'ProductRecord', id: any, title?: string | null, slug: string, markAsNew?: any | null, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, environmentImage?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string, slug: string } | null }> };

export type AllProductsByCategoryQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['ItemId']>;
}>;


export type AllProductsByCategoryQuery = { __typename?: 'Query', productsByCategory: Array<{ __typename?: 'ProductRecord', id: any, title?: string | null, slug: string, markAsNew?: any | null, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, environmentImage?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string, slug: string } | null }> };

export type ProjectQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type ProjectQuery = { __typename?: 'Query', project?: { __typename?: 'ProjectRecord', id: any, location?: string | null, title?: string | null, slug: string, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string | null, titlePlural: string } | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, secondaryImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, relatedProducts: Array<{ __typename?: 'ProductRecord', id: any, title?: string | null, description?: string | null, slug: string, bimLink?: string | null, presentation?: string | null, markAsNew?: any | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name: string, slug: string } | { __typename: 'ProductRecord', id: any, title?: string | null, slug: string } | { __typename: 'ProjectRecord', id: any, title?: string | null, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lastImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, title?: string | null, url: string, width?: any | null, height?: any | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null }>, environmentImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, colorImages: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }>, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string } | null, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string | null } | null, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string | null } | null, drawing?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any | null, amount?: any | null, optional?: any | null, lightsource?: { __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string } | null }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any | null, volume?: any | null, weight?: any | null, articleNo?: string | null, color?: { __typename?: 'ProductColorRecord', id: any, name?: string | null } | null, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string | null } | null, feature?: { __typename?: 'ProductFeatureRecord', name?: string | null } | null }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string | null, price?: any | null, accessory?: { __typename?: 'ProductAccessoryRecord', name?: string | null } | null }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string | null } | null, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }>, seo: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }>, gallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name: string, slug: string } | { __typename: 'ProductRecord', id: any, title?: string | null, slug: string } | { __typename: 'ProjectRecord', id: any, title?: string | null, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lastImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> } | null };

export type AllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'ProjectRecord', id: any, location?: string | null, title?: string | null, slug: string, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string | null, titlePlural: string } | null, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, secondaryImage?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> };

export type AllRelatedProjectsQueryVariables = Exact<{
  projectType?: InputMaybe<Scalars['ItemId']>;
}>;


export type AllRelatedProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'ProjectRecord', id: any, location?: string | null, title?: string | null, slug: string, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string | null, titlePlural: string } | null, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, secondaryImage?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> };

export type ProjectStartQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectStartQuery = { __typename?: 'Query', projectStart?: { __typename?: 'ProjectStartRecord', id: any, intro?: string | null, title?: string | null } | null };

export type AllProjectTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjectTypesQuery = { __typename?: 'Query', projectTypes: Array<{ __typename?: 'ProjectTypeRecord', id: any, title?: string | null, titlePlural: string }> };

export type BespokeQueryVariables = Exact<{ [key: string]: never; }>;


export type BespokeQuery = { __typename?: 'Query', bespoke?: { __typename?: 'BespokeRecord', id: any, intro?: string | null, outro?: string | null, title?: string | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, examples: Array<{ __typename?: 'BespokeProjectRecord', id: any, summary?: string | null, project?: { __typename?: 'ProjectRecord', id: any, location?: string | null, title?: string | null, slug: string, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string | null, titlePlural: string } | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, secondaryImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, relatedProducts: Array<{ __typename?: 'ProductRecord', id: any, title?: string | null, description?: string | null, slug: string, bimLink?: string | null, presentation?: string | null, markAsNew?: any | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name: string, slug: string } | { __typename: 'ProductRecord', id: any, title?: string | null, slug: string } | { __typename: 'ProjectRecord', id: any, title?: string | null, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lastImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, title?: string | null, url: string, width?: any | null, height?: any | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null }>, environmentImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, colorImages: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }>, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string } | null, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string | null } | null, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string | null } | null, drawing?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any | null, amount?: any | null, optional?: any | null, lightsource?: { __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string } | null }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any | null, volume?: any | null, weight?: any | null, articleNo?: string | null, color?: { __typename?: 'ProductColorRecord', id: any, name?: string | null } | null, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string | null } | null, feature?: { __typename?: 'ProductFeatureRecord', name?: string | null } | null }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string | null, price?: any | null, accessory?: { __typename?: 'ProductAccessoryRecord', name?: string | null } | null }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string | null } | null, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }>, seo: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }>, gallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name: string, slug: string } | { __typename: 'ProductRecord', id: any, title?: string | null, slug: string } | { __typename: 'ProjectRecord', id: any, title?: string | null, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lastImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> } | null }> } | null };

export type FactoryVisitQueryVariables = Exact<{ [key: string]: never; }>;


export type FactoryVisitQuery = { __typename?: 'Query', factoryVisit?: { __typename?: 'FactoryVisitRecord', id: any, title?: string | null, intro?: string | null } | null };

export type AllCataloguesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCataloguesQuery = { __typename?: 'Query', catalogues: Array<{ __typename?: 'CatalogueRecord', id: any, title?: string | null, pdf?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, thumbnail?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> };

export type AllColorsAndMaterialsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
}>;


export type AllColorsAndMaterialsQuery = { __typename?: 'Query', colorMaterials: Array<{ __typename?: 'ColorMaterialRecord', id: any, description?: string | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, category?: { __typename?: 'ColorMaterialTypeRecord', id: any, category: string, categoryPlural: string } | null }>, colorMaterialTypes: Array<{ __typename?: 'ColorMaterialTypeRecord', id: any, category: string, categoryPlural: string }>, colorMaterialIntro?: { __typename?: 'ColorMaterialIntroRecord', id: any, intro?: string | null } | null };

export type SiteSearchQueryVariables = Exact<{
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  designerIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  faqIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  newsIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  projectIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  staffIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
}>;


export type SiteSearchQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductRecord', id: any, title?: string | null, slug: string, markAsNew?: any | null, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, environmentImage?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string, slug: string } | null }>, designers: Array<{ __typename?: 'DesignerRecord', id: any, name: string, description?: string | null, slug: string, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }>, projects: Array<{ __typename?: 'ProjectRecord', id: any, location?: string | null, title?: string | null, slug: string, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string | null, titlePlural: string } | null, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, secondaryImage?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }>, faqs: Array<{ __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer?: string | null, id: any, question?: string | null, category?: { __typename?: 'FaqCategoryRecord', id: any, title?: string | null } | null }>, news: Array<{ __typename: 'NewsRecord', id: any, link?: string | null, linkText?: string | null, text?: string | null, title?: string | null, slug: string, createdAt: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }>, staffs: Array<{ __typename?: 'StaffRecord', id: any, name?: string | null, role?: string | null, phone?: string | null, email?: string | null, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> };

export type SiteSeoQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteSeoQuery = { __typename?: 'Query', site: { __typename?: 'Site', favicon: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | null } | null } };

export type StartQueryVariables = Exact<{ [key: string]: never; }>;


export type StartQuery = { __typename?: 'Query', start?: { __typename?: 'StartRecord', content: Array<{ __typename: 'FeaturedStartRecord', id: any, headline?: string | null, items: Array<{ __typename?: 'DesignerRecord' } | { __typename?: 'ProductRecord', id: any, title?: string | null, slug: string, markAsNew?: any | null, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, environmentImage?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string, slug: string } | null } | { __typename?: 'ProjectRecord', id: any, location?: string | null, title?: string | null, slug: string, projectType?: { __typename?: 'ProjectTypeRecord', id: any, title?: string | null, titlePlural: string } | null, image?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, secondaryImage?: { __typename?: 'FileField', id: any, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> } | { __typename: 'FullscreenMediaBlockRecord', id: any, headline?: string | null, subHeadline?: string | null, media?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, linkRecord?: { __typename?: 'DesignerRecord', id: any, name: string, description?: string | null, slug: string, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename?: 'ProductRecord', id: any, title?: string | null, description?: string | null, slug: string, bimLink?: string | null, presentation?: string | null, markAsNew?: any | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name: string, slug: string } | { __typename: 'ProductRecord', id: any, title?: string | null, slug: string } | { __typename: 'ProjectRecord', id: any, title?: string | null, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lastImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'VideoRecord', id: any, video?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, title?: string | null, url: string, width?: any | null, height?: any | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null }>, environmentImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, colorImages: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }>, family?: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null } | null, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name: string } | null, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string | null } | null, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string | null } | null, drawing?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any | null, amount?: any | null, optional?: any | null, lightsource?: { __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string } | null }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any | null, volume?: any | null, weight?: any | null, articleNo?: string | null, color?: { __typename?: 'ProductColorRecord', id: any, name?: string | null } | null, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string | null } | null, feature?: { __typename?: 'ProductFeatureRecord', name?: string | null } | null }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string | null, price?: any | null, accessory?: { __typename?: 'ProductAccessoryRecord', name?: string | null } | null }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string | null } | null, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }>, seo: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null } | { __typename: 'FullscreenVideoRecord', id: any, link?: string | null, linkText?: string | null, text?: string | null, video?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, title?: string | null, url: string, width?: any | null, height?: any | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null } | { __typename: 'ImageLinkRecord', id: any, firstLink?: string | null, firstLinkText?: string | null, firstHeadline?: string | null, secondLink?: string | null, secondLinkText?: string | null, secondHeadline?: string | null, firstImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null, secondImage?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | { __typename: 'NewsItemRecord', news: { __typename?: 'NewsRecord', id: any, title?: string | null, text?: string | null, link?: string | null, linkText?: string | null, slug: string } }> } | null };

export type FaqQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']>;
}>;


export type FaqQuery = { __typename?: 'Query', faq?: { __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer?: string | null, id: any, question?: string | null, category?: { __typename?: 'FaqCategoryRecord', id: any, title?: string | null } | null } | null };

export type AllFaqsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFaqsQuery = { __typename?: 'Query', faqs: Array<{ __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer?: string | null, id: any, question?: string | null, category?: { __typename?: 'FaqCategoryRecord', id: any, title?: string | null } | null }> };

export type AllFaqCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFaqCategoriesQuery = { __typename?: 'Query', faqCategories: Array<{ __typename?: 'FaqCategoryRecord', id: any, title?: string | null }> };

export type FaqStartQueryVariables = Exact<{ [key: string]: never; }>;


export type FaqStartQuery = { __typename?: 'Query', faqStart?: { __typename?: 'FaqStartRecord', intro?: string | null, id: any, title?: string | null } | null, faqs: Array<{ __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer?: string | null, id: any, question?: string | null, category?: { __typename?: 'FaqCategoryRecord', id: any, title?: string | null } | null }> };

export type TaxonomyQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
}>;


export type TaxonomyQuery = { __typename?: 'Query', designer: Array<{ __typename?: 'DesignerRecord', name: string, id: any, slug: string }>, category: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null }>, color: Array<{ __typename?: 'ProductColorRecord', id: any, name?: string | null }>, connection: Array<{ __typename?: 'ProductConnectionRecord', id: any, name?: string | null }>, dimmable: Array<{ __typename?: 'ProductDimmableRecord', id: any, name?: string | null }>, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, family: Array<{ __typename?: 'ProductFamilyRecord', id: any, name?: string | null }>, lightsource: Array<{ __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string }>, material: Array<{ __typename?: 'ProductMaterialRecord', id: any, name?: string | null }>, mounting: Array<{ __typename?: 'ProductMountingRecord', id: any, name?: string | null }>, socket: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }> };
