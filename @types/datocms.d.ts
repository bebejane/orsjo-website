type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BooleanType: { input: any; output: any; }
  CustomData: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  FloatType: { input: any; output: any; }
  IntType: { input: any; output: any; }
  ItemId: { input: any; output: any; }
  JsonField: { input: any; output: any; }
  MetaTagAttributes: { input: any; output: any; }
  UploadId: { input: any; output: any; }
};

/** Record of type About us (about) */
type AboutRecord = RecordInterface & {
  __typename?: 'AboutRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  intro: Scalars['String']['output'];
  sections: Array<AboutSectionRecord>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  video: FileField;
};


/** Record of type About us (about) */
type AboutRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type About us (about) */
type AboutRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type About us (about) */
type AboutRecordtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type About section (about_section) */
type AboutSectionRecord = RecordInterface & {
  __typename?: 'AboutSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  video: FileField;
};


/** Block of type About section (about_section) */
type AboutSectionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type About section (about_section) */
type AboutSectionRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Accessory (accessory) */
type AccessoryRecord = RecordInterface & {
  __typename?: 'AccessoryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  accessory: ProductAccessoryRecord;
  articleNo?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  price?: Maybe<Scalars['FloatType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Accessory (accessory) */
type AccessoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Bespoke project (bespoke_project) */
type BespokeProjectRecord = RecordInterface & {
  __typename?: 'BespokeProjectRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  project?: Maybe<ProjectRecord>;
  summary: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Bespoke project (bespoke_project) */
type BespokeProjectRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Bespoke project (bespoke_project) */
type BespokeProjectRecordsummaryArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Record of type Bespoke (bespoke) */
type BespokeRecord = RecordInterface & {
  __typename?: 'BespokeRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  examples: Array<BespokeProjectRecord>;
  id: Scalars['ItemId']['output'];
  image: FileField;
  intro: Scalars['String']['output'];
  outro: Scalars['String']['output'];
  secondaryThumbnail?: Maybe<FileField>;
  thumbnail: FileField;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Bespoke (bespoke) */
type BespokeRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bespoke (bespoke) */
type BespokeRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Bespoke (bespoke) */
type BespokeRecordoutroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter Boolean fields */
type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

type CatalogueModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CatalogueModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  pdf: FileField;
  thumbnail: FileField;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Catalogue (catalogue) */
type CatalogueRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType']['output'];
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
  alpha: Scalars['IntType']['output'];
  blue: Scalars['IntType']['output'];
  cssRgb: Scalars['String']['output'];
  green: Scalars['IntType']['output'];
  hex: Scalars['String']['output'];
  red: Scalars['IntType']['output'];
};

/** Record of type Color & material intro (color_material_intro) */
type ColorMaterialIntroRecord = RecordInterface & {
  __typename?: 'ColorMaterialIntroRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  intro: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Color & material intro (color_material_intro) */
type ColorMaterialIntroRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Color & material intro (color_material_intro) */
type ColorMaterialIntroRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

type ColorMaterialModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ColorMaterialModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  category: ColorMaterialTypeRecord;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  image: FileField;
  position?: Maybe<Scalars['IntType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Color & material (color_material) */
type ColorMaterialRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ColorMaterialTypeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ColorMaterialTypeModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  category: Scalars['String']['output'];
  categoryPlural: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Color & material type (color_material_type) */
type ColorMaterialTypeRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Contact (contact) */
type ContactRecord = RecordInterface & {
  __typename?: 'ContactRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  address: Scalars['String']['output'];
  contactFormMessage: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  image: FileField;
  intro: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  showroomIntro: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Contact (contact) */
type ContactRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Contact (contact) */
type ContactRecordaddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Contact (contact) */
type ContactRecordcontactFormMessageArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Contact (contact) */
type ContactRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Contact (contact) */
type ContactRecordshowroomIntroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

type CountryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CountryModelFilter>>>;
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
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
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
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

type DesignerModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<DesignerModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image: FileField;
  name?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Designer (designer) */
type DesignerRecord_allDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Designer (designer) */
type DesignerRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Designer (designer) */
type DesignerRecorddescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

type DistributorModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<DistributorModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contactName?: Maybe<Scalars['String']['output']>;
  country: CountryRecord;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Record of type Distributor (distributor) */
type DistributorRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Distributor (distributor) */
type DistributorRecordaddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Record of type Downloads (downloads_start) */
type DownloadsStartRecord = RecordInterface & {
  __typename?: 'DownloadsStartRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  intro: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Downloads (downloads_start) */
type DownloadsStartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Downloads (downloads_start) */
type DownloadsStartRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Record of type Factory visit (factory_visit) */
type FactoryVisitRecord = RecordInterface & {
  __typename?: 'FactoryVisitRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  intro: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Factory visit (factory_visit) */
type FactoryVisitRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Factory visit (factory_visit) */
type FactoryVisitRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

type FaqCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqCategoryModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type FAQ Category (faq_category) */
type FaqCategoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FaqModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  answer: Scalars['String']['output'];
  category: FaqCategoryRecord;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  question: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type FAQ (faq) */
type FaqRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type FAQ (faq) */
type FaqRecordanswerArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Record of type FAQ start (faq_start) */
type FaqStartRecord = RecordInterface & {
  __typename?: 'FaqStartRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  intro: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type FAQ start (faq_start) */
type FaqStartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type FAQ start (faq_start) */
type FaqStartRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  headline: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  items: Array<FeaturedModelItemsField>;
  showMarkAsNew?: Maybe<Scalars['BooleanType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Featured (featured) */
type FeaturedRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FeaturedStartModelItemsField = DesignerRecord | ProductRecord | ProjectRecord;

/** Block of type Featured start (featured_start) */
type FeaturedStartRecord = RecordInterface & {
  __typename?: 'FeaturedStartRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  headline: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  items: Array<FeaturedStartModelItemsField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Featured start (featured_start) */
type FeaturedStartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


type FileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
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
  sizes?: InputMaybe<Scalars['String']['input']>;
};


type FileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


type FileFieldInterfacealtArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
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
  sizes?: InputMaybe<Scalars['String']['input']>;
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
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter Floating-point fields */
type FloatFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['FloatType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['FloatType']['input']>;
};

type FullscreenMediaBlockModelLinkRecordField = AboutRecord | DesignerRecord | ProductRecord;

/** Block of type Fullscreen media (fullscreen_media_block) */
type FullscreenMediaBlockRecord = RecordInterface & {
  __typename?: 'FullscreenMediaBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  headline: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  linkRecord: FullscreenMediaBlockModelLinkRecordField;
  makeDarker?: Maybe<Scalars['BooleanType']['output']>;
  media: FileField;
  readMore: Scalars['String']['output'];
  subHeadline: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Fullscreen media (fullscreen_media_block) */
type FullscreenMediaBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Fullscreen video (fullscreen_video) */
type FullscreenVideoRecord = RecordInterface & {
  __typename?: 'FullscreenVideoRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  link?: Maybe<Scalars['String']['output']>;
  linkText?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  video: FileField;
};


/** Block of type Fullscreen video (fullscreen_video) */
type FullscreenVideoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Fullscreen video (fullscreen_video) */
type FullscreenVideoRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Fullwidth image (fullwidth_image) */
type FullwidthImageRecord = RecordInterface & {
  __typename?: 'FullwidthImageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image: FileField;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Fullwidth image (fullwidth_image) */
type FullwidthImageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Multiple files/images field */
type GalleryFilter = {
  /** Filter records that have all of the specified uploads. The specified values must be Upload IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Filter records that have one of the specified uploads. The specified values must be Upload IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Upload IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that do not have any of the specified uploads. The specified values must be Upload IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']['output']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
  twitterAccount?: Maybe<Scalars['String']['output']>;
};

/** Block of type Image gallery (image_gallery) */
type ImageGalleryRecord = RecordInterface & {
  __typename?: 'ImageGalleryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  gallery: Array<FileField>;
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Image gallery (image_gallery) */
type ImageGalleryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Image links (image_link) */
type ImageLinkRecord = RecordInterface & {
  __typename?: 'ImageLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  firstHeadline?: Maybe<Scalars['String']['output']>;
  firstImage: FileField;
  firstLink?: Maybe<Scalars['String']['output']>;
  firstLinkText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  secondHeadline?: Maybe<Scalars['String']['output']>;
  secondImage: FileField;
  secondLink?: Maybe<Scalars['String']['output']>;
  secondLinkText?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
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
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/aspect-ratio)
   */
  ar?: InputMaybe<Scalars['String']['input']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/automatic)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/background-color)
   */
  bg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-remove failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-fallback)
   */
  bgRemoveFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Foreground Type
   *
   * Specifies the image foreground type for background removal.
   *
   * Depends on: `bg-remove=true`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-foreground-type)
   */
  bgRemoveFgType?: InputMaybe<Array<ImgixParamsBgRemoveFgType>>;
  /**
   * Background Removal Semi Transparency
   *
   * Enables background removal while retaining semi-transparent areas.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-semi-transparency)
   */
  bgRemoveSemiTransparency?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement
   *
   * Replaces background from image using a string based prompt.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement)
   */
  bgReplace?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Replace Fallback
   *
   * Overrides default fallback behavior for bg-replace failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replace-fallback)
   */
  bgReplaceFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement Negative Prompt
   *
   * Provides a negative text suggestion for background replacement.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement-negative-prompt)
   */
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-height)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-padding)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-width)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-x-position)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-y-position)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/gaussian-blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size)
   */
  border?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/outer-border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/inner-border-radius)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/brightness)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/client-hints)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/chroma-subsampling)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-quantization)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/palette-color-count)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/contrast)
   */
  con?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/crop-mode)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-space)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/download)
   */
  dl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/dots-per-inch)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/device-pixel-ratio)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/exposure)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/expiration)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Blur
   *
   * Specifies the amount of blur to apply to detected faces. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-blur)
   */
  faceBlur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Pixelation
   *
   * Specifies the pixelation amount of the face.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-pixelation)
   */
  facePixel?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-index)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-padding)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/json-face-data)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-mode)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Fallback
   *
   * Sets the fallback behavior for generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-fallback)
   */
  fillGenFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Fill Generative Negative Prompt
   *
   * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-negative-prompt)
   */
  fillGenNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Position
   *
   * Sets the position of the Origin Image in relation to the generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-position)
   */
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
  /**
   * Fill Generative Prompt
   *
   * Provides a text suggestion to the generative fill parameter.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-prompt)
   */
  fillGenPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Seed
   *
   * Sets the generative seed value. Used to generate similar outputs from different prompts.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-seed)
   */
  fillGenSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Gradient Color Space
   *
   * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-color-space)
   */
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
  /**
   * Fill Gradient Linear
   *
   * Blends a gradient between two colors, {color1} and {color2}, along a straight path
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear)
   */
  fillGradientLinear?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Linear Direction
   *
   * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear-direction)
   */
  fillGradientLinearDirection?: InputMaybe<Array<ImgixParamsFillGradientLinearDirection>>;
  /**
   * Fill Gradient Radial
   *
   * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial)
   */
  fillGradientRadial?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial Radius
   *
   * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-radius)
   */
  fillGradientRadialRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial X
   *
   * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-x)
   */
  fillGradientRadialX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Radial Y
   *
   * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-y)
   */
  fillGradientRadialY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Type
   *
   * Specifies if a gradient is radial (circular) or linear (straight)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-type)
   */
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/resize-fit-mode)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/flip-axis)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-format)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-x-position)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-y-position)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-zoom)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frames-per-second)
   */
  fps?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-selection)
   */
  frame?: InputMaybe<Scalars['String']['input']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/gamma)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Animated Gif Quality
   *
   * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
   *
   * Depends on: `fm=gif`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/animated-gif-quality)
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-colors)
   */
  gridColors?: InputMaybe<Scalars['String']['input']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-size)
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-height)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/highlight)
   */
  high?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/halftone)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/hue-shift)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-interval)
   */
  interval?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/iptc-passthrough)
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Jpg Progressive
   *
   * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/jpg-progressive)
   */
  jpgProgressive?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation)
   */
  loop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/lossless-compression)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * License Plate Blur
   *
   * Specifies the amount of blur to apply to detected license plates. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/license-plate-detection/license-plate-blur)
   */
  lpBlur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-image-url)
   */
  mark?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alignment-mode)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-base-url)
   */
  markBase?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-fit-mode)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-height)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark If Minimum Height
   *
   * Displays the watermark if rendered base image pixel height is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-height)
   */
  markIfMinHeight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark If Minimum Width
   *
   * Displays the watermark if rendered base image pixel width is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-width)
   */
  markIfMinWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-padding)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-rotation)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-width)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-x-position)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-y-position)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-type)
   */
  mask?: InputMaybe<Scalars['String']['input']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-background-color)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-bound)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-sharpen)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Object Removal Negative Prompt
   *
   * Provides a negative text suggestion to object-removal-prompt. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-negative-prompt)
   */
  objectRemovalNegativePrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal Prompt
   *
   * Suggest auto generative fill for the object-removal-rect parameter
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-prompt)
   */
  objectRemovalPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal
   *
   * Using a specified rectangle, an object is removed from the image
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal)
   */
  objectRemovalRect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal Seed
   *
   * Sets the generative seed value for object-removal. Used to generate new outputs from the same prompt
   *
   * Depends on: `object-removal-rect`, `object-removal-prompt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-seed)
   */
  objectRemovalSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/orientation)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-page-number)
   */
  page?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/color-palette-extraction)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/css-prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/pixellate)
   */
  px?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=avif`, `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-quality)
   */
  q?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Rasterize Bypass
   *
   * Bypasses all rendering parameters (including default parameters) and serves the original image. Works for svg+xml,x-eps,pdf, and vnd.adobe.illustrator.
   */
  rasterizeBypass?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/source-rectangle-region)
   */
  rect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/reverse)
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Rotation Type
   *
   * Changes the rotation type.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation-type)
   */
  rotType?: InputMaybe<ImgixParamsRotType>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/saturation)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/sepia-tone)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/shadow)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/sharpen)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-skip)
   */
  skip?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Sanitize Svg
   *
   * Specifies whether to sanitize an SVG.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/sanitize-svg)
   */
  svgSanitize?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-image)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Alpha
   *
   * Specifies a trim alpha on a trim operation.
   *
   * Depends on: `trim=alpha`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-alpha)
   */
  trimAlpha?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-mean-difference)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-padding)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-standard-deviation)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-tolerance)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-string)
   */
  txt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-clipping-mode)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-fit-mode)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-leading)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-padding)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-shadow)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-tracking)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-x-position)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-y-position)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Super Resolution
   *
   * Uses generative AI fill to upscale low resolution images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscale?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Super Resolution Fallback
   *
   * Overrides default fallback behavior for super resolution failures
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscaleFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask-radius)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/vibrance)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-width)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>;
};

enum ImgixParamsAuto {
  compress = 'compress',
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye'
}

enum ImgixParamsBgRemoveFgType {
  auto = 'auto',
  car = 'car'
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
  origin = 'origin',
  srgb = 'srgb',
  strip = 'strip',
  tinysrgb = 'tinysrgb'
}

enum ImgixParamsFill {
  blur = 'blur',
  gen = 'gen',
  generative = 'generative',
  gradient = 'gradient',
  solid = 'solid'
}

enum ImgixParamsFillGenPos {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsFillGradientCs {
  hsl = 'hsl',
  lch = 'lch',
  linear = 'linear',
  oklab = 'oklab',
  srgb = 'srgb'
}

enum ImgixParamsFillGradientLinearDirection {
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsFillGradientType {
  linear = 'linear',
  radial = 'radial'
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

enum ImgixParamsRotType {
  pivot = 'pivot',
  straighten = 'straighten'
}

enum ImgixParamsTransparency {
  grid = 'grid'
}

enum ImgixParamsTrim {
  alpha = 'alpha',
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
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter by ID */
type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated'
}

type JobModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<JobModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slug: Scalars['String']['output'];
  summary: Scalars['String']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Jobs (job) */
type JobRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Jobs (job) */
type JobRecordsummaryArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Jobs (job) */
type JobRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Lightsource (lightsource) */
type LightsourceRecord = RecordInterface & {
  __typename?: 'LightsourceRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  amount?: Maybe<Scalars['IntType']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  included?: Maybe<Scalars['BooleanType']['output']>;
  lightsource: ProductLightsourceRecord;
  optional?: Maybe<Scalars['BooleanType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Lightsource (lightsource) */
type LightsourceRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-link fields */
type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Specifies how to filter Multiple-links fields */
type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  intro: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Manuals (manual) */
type ManualRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Manuals (manual) */
type ManualRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png'
}

/** Block of type News item (news_item) */
type NewsItemRecord = RecordInterface & {
  __typename?: 'NewsItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  news: NewsRecord;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type News item (news_item) */
type NewsItemRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type NewsModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  link?: Maybe<Scalars['String']['output']>;
  linkText?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type News (news) */
type NewsRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
type NewsRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
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
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

type PressModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PressModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};


/** Record of type Press (press) */
type PressRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductAccessoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductAccessoryModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
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
  AND?: InputMaybe<Array<InputMaybe<ProductCategoryModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  namePlural?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Product category (product_category) */
type ProductCategoryRecord_allDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
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
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
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
  AND?: InputMaybe<Array<InputMaybe<ProductColorModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
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
  AND?: InputMaybe<Array<InputMaybe<ProductConnectionModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
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
  AND?: InputMaybe<Array<InputMaybe<ProductDimmableModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
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
  AND?: InputMaybe<Array<InputMaybe<ProductElectricalModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
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
  AND?: InputMaybe<Array<InputMaybe<ProductFamilyModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Product family (product_family) */
type ProductFamilyRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductFeatureModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductFeatureModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
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
  AND?: InputMaybe<Array<InputMaybe<ProductLightsourceModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  articleNo: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  price: Scalars['FloatType']['output'];
  updatedAt: Scalars['DateTime']['output'];
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
  AND?: InputMaybe<Array<InputMaybe<ProductMaterialModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
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
  AND?: InputMaybe<Array<InputMaybe<ProductModelFilter>>>;
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
  hideInPricelist?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  lightFile?: InputMaybe<FileFilter>;
  markAsNew?: InputMaybe<BooleanFilter>;
  mounting?: InputMaybe<LinkFilter>;
  mountingInstructions?: InputMaybe<FileFilter>;
  note?: InputMaybe<TextFilter>;
  pdfFile?: InputMaybe<FileFilter>;
  slug?: InputMaybe<SlugFilter>;
  sockets?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
  upcycled?: InputMaybe<BooleanFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

type ProductModelNameModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductModelNameModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
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
  hideInPricelist_ASC = 'hideInPricelist_ASC',
  hideInPricelist_DESC = 'hideInPricelist_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  markAsNew_ASC = 'markAsNew_ASC',
  markAsNew_DESC = 'markAsNew_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  upcycled_ASC = 'upcycled_ASC',
  upcycled_DESC = 'upcycled_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type ProductModelProductGalleryField = FullwidthImageRecord | ImageGalleryRecord | TextRecord | TwoColumnImageRecord | VideoRecord;

/** Block of type Model (product_model) */
type ProductModelRecord = RecordInterface & {
  __typename?: 'ProductModelRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  accessories: Array<AccessoryRecord>;
  createdAt: Scalars['DateTime']['output'];
  drawing?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  lightsources: Array<LightsourceRecord>;
  name?: Maybe<ProductModelNameRecord>;
  updatedAt: Scalars['DateTime']['output'];
  variants: Array<VariantRecord>;
};


/** Block of type Model (product_model) */
type ProductModelRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductMountingModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductMountingModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
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
  _allNoteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allPdfFileLocales?: Maybe<Array<FileFieldMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  additionalInformation?: Maybe<Scalars['String']['output']>;
  bimFile?: Maybe<FileField>;
  bimLink?: Maybe<Scalars['String']['output']>;
  categories: Array<ProductCategoryRecord>;
  colorImages: Array<FileField>;
  connection?: Maybe<ProductConnectionRecord>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  designer?: Maybe<DesignerRecord>;
  dimmable?: Maybe<ProductDimmableRecord>;
  electricalData: Array<ProductElectricalRecord>;
  environmentImage: FileField;
  family: ProductFamilyRecord;
  hideInPricelist?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  image: FileField;
  lightFile?: Maybe<FileField>;
  markAsNew?: Maybe<Scalars['BooleanType']['output']>;
  models: Array<ProductModelRecord>;
  mounting?: Maybe<ProductMountingRecord>;
  mountingInstructions?: Maybe<FileField>;
  note?: Maybe<Scalars['String']['output']>;
  pdfFile?: Maybe<FileField>;
  productGallery: Array<ProductModelProductGalleryField>;
  slug: Scalars['String']['output'];
  sockets: Array<ProductSocketRecord>;
  title: Scalars['String']['output'];
  upcycled?: Maybe<Scalars['BooleanType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Product (product) */
type ProductRecord_allAdditionalInformationLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product (product) */
type ProductRecord_allDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Product (product) */
type ProductRecord_allNoteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
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
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Product (product) */
type ProductRecordnoteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Product (product) */
type ProductRecordpdfFileArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

type ProductSocketModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductSocketModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Product socket (product_socket) */
type ProductSocketRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Product start (product_start) */
type ProductStartRecord = RecordInterface & {
  __typename?: 'ProductStartRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  featured: Array<FeaturedRecord>;
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Product start (product_start) */
type ProductStartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProjectModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  bespoke?: Maybe<Scalars['BooleanType']['output']>;
  createdAt: Scalars['DateTime']['output'];
  gallery: Array<ProjectModelGalleryField>;
  id: Scalars['ItemId']['output'];
  image: FileField;
  location: Scalars['String']['output'];
  projectType: ProjectTypeRecord;
  relatedProducts: Array<ProductRecord>;
  secondaryImage?: Maybe<FileField>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Project (project) */
type ProjectRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Project start (project_start) */
type ProjectStartRecord = RecordInterface & {
  __typename?: 'ProjectStartRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  intro: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Project start (project_start) */
type ProjectStartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Project start (project_start) */
type ProjectStartRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

type ProjectTypeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectTypeModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  title: Scalars['String']['output'];
  titlePlural: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Project type (project_type) */
type ProjectTypeRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
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
  _allUploadsMeta: CollectionMetadata;
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
  downloadsStart?: Maybe<DownloadsStartRecord>;
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
  /** Returns the single instance record */
  social?: Maybe<SocialRecord>;
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
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CatalogueModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallColorMaterialTypesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorMaterialTypeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ColorMaterialTypeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallColorMaterialsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorMaterialModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ColorMaterialModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallCountriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CountryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallDesignersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DesignerModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DesignerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallDistributorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistributorModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DistributorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallFaqCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallFaqsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallJobsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<JobModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<JobModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallPressesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PressModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PressModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductAccessoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductAccessoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductAccessoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductColorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductColorModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductColorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductConnectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductConnectionModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductConnectionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductDimmablesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductDimmableModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductDimmableModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductElectricalsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductElectricalModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductElectricalModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductFamiliesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFamilyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFamilyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductFeaturesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFeatureModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFeatureModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductLightsourcesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductLightsourceModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductLightsourceModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductMaterialsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMaterialModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMaterialModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductModelNamesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelNameModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelNameModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductMountingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMountingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMountingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductSocketsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductSocketModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductSocketModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProjectTypesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectTypeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectTypeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallResellersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ResellerModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ResellerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallShowroomsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShowroomModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShowroomModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallStaffsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StaffModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StaffModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallTranslationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TranslationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TranslationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
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
type QuerydownloadsStartArgs = {
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
type QuerysocialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


type RecordInterface_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ResellerModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ResellerModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: CountryRecord;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  postalCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Record of type Reseller (reseller) */
type ResellerRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Reseller (reseller) */
type ResellerRecordaddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
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
  alt?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['FloatType']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  height: Scalars['IntType']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  webpSrcSet: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
};

type ShowroomModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ShowroomModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  additional?: Maybe<Scalars['String']['output']>;
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image: FileField;
  position?: Maybe<Scalars['IntType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Showroom (showroom) */
type ShowroomRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Showroom (showroom) */
type ShowroomRecordadditionalArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Showroom (showroom) */
type ShowroomRecordaddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
};


type SitefaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


type SiteglobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

enum SiteLocale {
  da = 'da',
  en = 'en',
  en_GB = 'en_GB',
  no = 'no',
  sv = 'sv'
}

/** Specifies how to filter Slug fields */
type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Record of type Social (social) */
type SocialRecord = RecordInterface & {
  __typename?: 'SocialRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  instagram?: Maybe<Scalars['JsonField']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Social (social) */
type SocialRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type StaffModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<StaffModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image: FileField;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  role: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Staff (staff) */
type StaffRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type StartModelContentField = FeaturedStartRecord | FullscreenMediaBlockRecord | FullscreenVideoRecord | ImageLinkRecord | NewsItemRecord;

/** Record of type Start (start) */
type StartRecord = RecordInterface & {
  __typename?: 'StartRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content: Array<StartModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
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
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
  pattern: Scalars['String']['input'];
  regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Scalars['String']['output']>;
};

type StringNonNullMultiLocaleField = {
  __typename?: 'StringNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Scalars['String']['output'];
};

/** Record of type Sustainability (sustainability) */
type SustainabilityRecord = RecordInterface & {
  __typename?: 'SustainabilityRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image: FileField;
  intro: Scalars['String']['output'];
  steps: Array<SustainabilityStepRecord>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Sustainability (sustainability) */
type SustainabilityRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sustainability (sustainability) */
type SustainabilityRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Sustainability step (sustainability_step) */
type SustainabilityStepRecord = RecordInterface & {
  __typename?: 'SustainabilityStepRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  fullWidthImage?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  media: FileField;
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Sustainability step (sustainability_step) */
type SustainabilityStepRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Sustainability step (sustainability_step) */
type SustainabilityStepRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
};

/** Specifies how to filter text fields */
type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type TextModelTextField = {
  __typename?: 'TextModelTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<TextModelTextLinksField>;
  value: Scalars['JsonField']['output'];
};

type TextModelTextLinksField = DesignerRecord | ProductRecord | ProjectRecord;

/** Block of type Text (text) */
type TextRecord = RecordInterface & {
  __typename?: 'TextRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<TextModelTextField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Text (text) */
type TextRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type TranslationModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TranslationModelFilter>>>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  key: Scalars['String']['output'];
  page: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value?: Maybe<Scalars['String']['output']>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  firstImage: FileField;
  id: Scalars['ItemId']['output'];
  lastImage: FileField;
  updatedAt: Scalars['DateTime']['output'];
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
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
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
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
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
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
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
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

type UploadVideoField = {
  __typename?: 'UploadVideoField';
  alt?: Maybe<Scalars['String']['output']>;
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  height: Scalars['IntType']['output'];
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbhash?: Maybe<Scalars['String']['output']>;
  thumbnailUrl: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  width: Scalars['IntType']['output'];
};


type UploadVideoFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type UploadVideoFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type UploadVideoFieldmp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


type UploadVideoFieldthumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};


type UploadVideoFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Block of type Variant (variant) */
type VariantRecord = RecordInterface & {
  __typename?: 'VariantRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  articleNo?: Maybe<Scalars['String']['output']>;
  color?: Maybe<ProductColorRecord>;
  createdAt: Scalars['DateTime']['output'];
  feature?: Maybe<ProductFeatureRecord>;
  id: Scalars['ItemId']['output'];
  material?: Maybe<ProductMaterialRecord>;
  price?: Maybe<Scalars['FloatType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  volume?: Maybe<Scalars['FloatType']['output']>;
  weight?: Maybe<Scalars['FloatType']['output']>;
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
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
  video: FileField;
};


/** Block of type Video (video) */
type VideoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type focalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType']['output'];
  y: Scalars['FloatType']['output'];
};

type SustainabilityQueryVariables = Exact<{ [key: string]: never; }>;


type SustainabilityQuery = { __typename?: 'Query', sustainability?: { __typename?: 'SustainabilityRecord', id: any, title: string, intro: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, steps: Array<{ __typename?: 'SustainabilityStepRecord', title: string, text: string, fullWidthImage?: any | null, media: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } }> } | null };

type AboutQueryVariables = Exact<{ [key: string]: never; }>;


type AboutQuery = { __typename?: 'Query', about?: { __typename?: 'AboutRecord', id: any, intro: string, title: string, video: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null }, sections: Array<{ __typename?: 'AboutSectionRecord', id: any, text: string, video: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } }> } | null };

type NewsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


type NewsQuery = { __typename?: 'Query', news?: { __typename: 'NewsRecord', id: any, link?: string | null, linkText?: string | null, text: string, title: string, slug: string, createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type LastNewsQueryVariables = Exact<{ [key: string]: never; }>;


type LastNewsQuery = { __typename?: 'Query', lastNews: Array<{ __typename: 'NewsRecord', id: any, link?: string | null, linkText?: string | null, text: string, title: string, slug: string, createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }> };

type AllNewsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllNewsQuery = { __typename?: 'Query', allNews: Array<{ __typename: 'NewsRecord', id: any, link?: string | null, linkText?: string | null, text: string, title: string, slug: string, createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }>, _allNewsMeta: { __typename?: 'CollectionMetadata', count: any } };

type NewsFragment = { __typename: 'NewsRecord', id: any, link?: string | null, linkText?: string | null, text: string, title: string, slug: string, createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type JobQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']['input']>;
}>;


type JobQuery = { __typename?: 'Query', job?: { __typename?: 'JobRecord', id: any, summary: string, text: string, title: string } | null };

type AllJobsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllJobsQuery = { __typename?: 'Query', jobs: Array<{ __typename?: 'JobRecord', id: any, summary: string, text: string, title: string }> };

type PressQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']['input']>;
}>;


type PressQuery = { __typename?: 'Query', press?: { __typename?: 'PressRecord', id: any, title: string, url: string } | null };

type AllPressQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllPressQuery = { __typename?: 'Query', presses: Array<{ __typename?: 'PressRecord', id: any, title: string, url: string }> };

type ShowroomQueryVariables = Exact<{ [key: string]: never; }>;


type ShowroomQuery = { __typename?: 'Query', showroom?: { __typename?: 'ShowroomRecord', additional?: string | null, address: string, city: string, id: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | null };

type AllShowroomsQueryVariables = Exact<{ [key: string]: never; }>;


type AllShowroomsQuery = { __typename?: 'Query', showrooms: Array<{ __typename?: 'ShowroomRecord', additional?: string | null, address: string, city: string, id: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } }> };

type DistributorQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']['input']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type DistributorQuery = { __typename?: 'Query', distributor?: { __typename?: 'DistributorRecord', name: string, address?: string | null, postalCode?: string | null, city?: string | null, contactName?: string | null, phone?: string | null, email: string, url?: string | null, country: { __typename?: 'CountryRecord', name: string } } | null };

type AllDistributorsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type AllDistributorsQuery = { __typename?: 'Query', distributors: Array<{ __typename?: 'DistributorRecord', name: string, address?: string | null, postalCode?: string | null, city?: string | null, contactName?: string | null, phone?: string | null, email: string, url?: string | null, country: { __typename?: 'CountryRecord', name: string } }> };

type DistributorFragment = { __typename?: 'DistributorRecord', name: string, address?: string | null, postalCode?: string | null, city?: string | null, contactName?: string | null, phone?: string | null, email: string, url?: string | null, country: { __typename?: 'CountryRecord', name: string } };

type ResellerQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']['input']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type ResellerQuery = { __typename?: 'Query', reseller?: { __typename?: 'ResellerRecord', id: any, name: string, address: string, postalCode?: string | null, city: string, url?: string | null, country: { __typename?: 'CountryRecord', id: any, name: string } } | null };

type AllResellersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type AllResellersQuery = { __typename?: 'Query', resellers: Array<{ __typename?: 'ResellerRecord', id: any, name: string, address: string, postalCode?: string | null, city: string, url?: string | null, country: { __typename?: 'CountryRecord', id: any, name: string } }> };

type StaffQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']['input']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type StaffQuery = { __typename?: 'Query', staff?: { __typename?: 'StaffRecord', id: any, name: string, role: string, phone?: string | null, email?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | null };

type AllStaffsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']['input']>;
  locale?: InputMaybe<SiteLocale>;
  first?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllStaffsQuery = { __typename?: 'Query', staffs: Array<{ __typename?: 'StaffRecord', id: any, name: string, role: string, phone?: string | null, email?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } }> };

type ContactQueryVariables = Exact<{ [key: string]: never; }>;


type ContactQuery = { __typename?: 'Query', contact?: { __typename?: 'ContactRecord', id: any, email: string, intro: string, phone: string, showroomIntro: string, contactFormMessage: string, title: string, address: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | null };

type ContactFragment = { __typename?: 'ContactRecord', address: string, email: string, id: any, intro: string, phone: string, showroomIntro: string, title: string };

type ResellerFragment = { __typename?: 'ResellerRecord', id: any, name: string, address: string, postalCode?: string | null, city: string, url?: string | null, country: { __typename?: 'CountryRecord', id: any, name: string } };

type ShowroomFragment = { __typename?: 'ShowroomRecord', additional?: string | null, address: string, city: string, id: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } };

type StaffFragment = { __typename?: 'StaffRecord', id: any, name: string, role: string, phone?: string | null, email?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } };

type DesignerQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type DesignerQuery = { __typename?: 'Query', designer?: { __typename: 'DesignerRecord', id: any, name?: string | null, description?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type AllDesignersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type AllDesignersQuery = { __typename?: 'Query', allDesigners: Array<{ __typename: 'DesignerRecord', id: any, name?: string | null, description?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } }>, _allDesignersMeta: { __typename?: 'CollectionMetadata', count: any } };

type DesignerFragment = { __typename: 'DesignerRecord', id: any, name?: string | null, description?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type DesignerLightFragment = { __typename: 'DesignerRecord', id: any, name?: string | null, description?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } };

type FileFragment = { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string };

type ImageFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null };

type ImageMediumFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null };

type ImageThumbnailFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null };

type SEOFragment = { __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string };

type VideoFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null };

type GlobalQueryVariables = Exact<{ [key: string]: never; }>;


type GlobalQuery = { __typename?: 'Query', site: { __typename?: 'Site', faviconMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null } | null } | null } };

type IntlQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocales?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type IntlQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'TranslationRecord', key: string, value?: string | null }> };

type MenuQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type MenuQuery = { __typename?: 'Query', allDesigners: Array<{ __typename?: 'DesignerRecord', id: any, slug: string, name?: string | null }>, _allDesignersMeta: { __typename?: 'CollectionMetadata', count: any }, allProducts: Array<{ __typename?: 'ProductRecord', id: any, designer?: { __typename?: 'DesignerRecord', id: any } | null }>, _allProductsMeta: { __typename?: 'CollectionMetadata', count: any }, allProductCategories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, _allProductCategoriesMeta: { __typename?: 'CollectionMetadata', count: any } };

type ProductStartQueryVariables = Exact<{ [key: string]: never; }>;


type ProductStartQuery = { __typename?: 'Query', productStart?: { __typename?: 'ProductStartRecord', id: any, featured: Array<{ __typename?: 'FeaturedRecord', id: any, headline: string, showMarkAsNew?: any | null, items: Array<{ __typename?: 'DesignerRecord' } | { __typename: 'ProductRecord', id: any, title: string, slug: string, markAsNew?: any | null, upcycled?: any | null, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null } | { __typename?: 'ProjectRecord' }> }> } | null };

type ProductQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'ProductRecord', id: any, title: string, description?: string | null, slug: string, additionalInformation?: string | null, markAsNew?: any | null, upcycled?: any | null, bimLink?: string | null, note?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string | null, slug: string } | { __typename: 'ProductRecord', id: any, title: string, slug: string } | { __typename: 'ProjectRecord', id: any, title: string, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, lastImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, video: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } }>, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, colorImages: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }>, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string | null } | null, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, bimFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string | null } | null, drawing?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any | null, amount?: any | null, optional?: any | null, lightsource: { __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string } }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any | null, volume?: any | null, weight?: any | null, articleNo?: string | null, color?: { __typename?: 'ProductColorRecord', id: any, name?: string | null } | null, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string | null } | null, feature?: { __typename?: 'ProductFeatureRecord', name?: string | null } | null }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string | null, price?: any | null, accessory: { __typename?: 'ProductAccessoryRecord', name?: string | null } }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string | null } | null, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type AllProductsQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllProductsQuery = { __typename?: 'Query', allProducts: Array<{ __typename?: 'ProductRecord', id: any, title: string, description?: string | null, slug: string, additionalInformation?: string | null, markAsNew?: any | null, upcycled?: any | null, bimLink?: string | null, note?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string | null, slug: string } | { __typename: 'ProductRecord', id: any, title: string, slug: string } | { __typename: 'ProjectRecord', id: any, title: string, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, lastImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, video: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } }>, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, colorImages: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }>, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string | null } | null, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, bimFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string | null } | null, drawing?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any | null, amount?: any | null, optional?: any | null, lightsource: { __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string } }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any | null, volume?: any | null, weight?: any | null, articleNo?: string | null, color?: { __typename?: 'ProductColorRecord', id: any, name?: string | null } | null, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string | null } | null, feature?: { __typename?: 'ProductFeatureRecord', name?: string | null } | null }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string | null, price?: any | null, accessory: { __typename?: 'ProductAccessoryRecord', name?: string | null } }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string | null } | null, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }>, _allProductsMeta: { __typename?: 'CollectionMetadata', count: any } };

type AllProductsLightQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
}>;


type AllProductsLightQuery = { __typename?: 'Query', allProducts: Array<{ __typename: 'ProductRecord', id: any, title: string, slug: string, markAsNew?: any | null, upcycled?: any | null, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null }>, _allProductsMeta: { __typename?: 'CollectionMetadata', count: any } };

type AllProductManualsQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllProductManualsQuery = { __typename?: 'Query', allProducts: Array<{ __typename?: 'ProductRecord', id: any, title: string, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, position?: any | null }>, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }>, _allProductsMeta: { __typename?: 'CollectionMetadata', count: any } };

type AllProductDownloadsQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllProductDownloadsQuery = { __typename?: 'Query', allProducts: Array<{ __typename?: 'ProductRecord', id: any, title: string, bimLink?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', name?: string | null }>, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, bimFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }>, _allProductsMeta: { __typename?: 'CollectionMetadata', count: any } };

type ProductCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


type ProductCategoriesQuery = { __typename?: 'Query', productCategories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }> };

type AllProductsByDesignerQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']['input']>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllProductsByDesignerQuery = { __typename?: 'Query', allProducts: Array<{ __typename: 'ProductRecord', id: any, title: string, slug: string, markAsNew?: any | null, upcycled?: any | null, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null }>, _allProductsMeta: { __typename?: 'CollectionMetadata', count: any } };

type RelatedProductsQueryVariables = Exact<{
  designerId?: InputMaybe<Scalars['ItemId']['input']>;
  familyId?: InputMaybe<Scalars['ItemId']['input']>;
  first?: InputMaybe<Scalars['IntType']['input']>;
}>;


type RelatedProductsQuery = { __typename?: 'Query', relatedProducts: Array<{ __typename: 'ProductRecord', id: any, title: string, slug: string, markAsNew?: any | null, upcycled?: any | null, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null }> };

type RelatedProjectsForProductQueryVariables = Exact<{
  productId?: InputMaybe<Scalars['ItemId']['input']>;
  first?: InputMaybe<Scalars['IntType']['input']>;
}>;


type RelatedProjectsForProductQuery = { __typename?: 'Query', relatedProjects: Array<{ __typename?: 'ProjectRecord', id: any, location: string, title: string, slug: string, projectType: { __typename?: 'ProjectTypeRecord', id: any, title: string, titlePlural: string }, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null }> };

type AllProductsByCategoryQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['ItemId']['input']>;
  first?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllProductsByCategoryQuery = { __typename?: 'Query', productsByCategory: Array<{ __typename: 'ProductRecord', id: any, title: string, slug: string, markAsNew?: any | null, upcycled?: any | null, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null }> };

type ProductFragment = { __typename?: 'ProductRecord', id: any, title: string, description?: string | null, slug: string, additionalInformation?: string | null, markAsNew?: any | null, upcycled?: any | null, bimLink?: string | null, note?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string | null, slug: string } | { __typename: 'ProductRecord', id: any, title: string, slug: string } | { __typename: 'ProjectRecord', id: any, title: string, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, lastImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, video: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } }>, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, colorImages: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }>, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string | null } | null, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, bimFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string | null } | null, drawing?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any | null, amount?: any | null, optional?: any | null, lightsource: { __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string } }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any | null, volume?: any | null, weight?: any | null, articleNo?: string | null, color?: { __typename?: 'ProductColorRecord', id: any, name?: string | null } | null, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string | null } | null, feature?: { __typename?: 'ProductFeatureRecord', name?: string | null } | null }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string | null, price?: any | null, accessory: { __typename?: 'ProductAccessoryRecord', name?: string | null } }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string | null } | null, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type ProductLightFragment = { __typename: 'ProductRecord', id: any, title: string, slug: string, markAsNew?: any | null, upcycled?: any | null, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null };

type ProjectQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


type ProjectQuery = { __typename?: 'Query', project?: { __typename?: 'ProjectRecord', id: any, location: string, title: string, slug: string, bespoke?: any | null, projectType: { __typename?: 'ProjectTypeRecord', id: any, title: string, titlePlural: string }, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, relatedProducts: Array<{ __typename?: 'ProductRecord', id: any, title: string, description?: string | null, slug: string, additionalInformation?: string | null, markAsNew?: any | null, upcycled?: any | null, bimLink?: string | null, note?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string | null, slug: string } | { __typename: 'ProductRecord', id: any, title: string, slug: string } | { __typename: 'ProjectRecord', id: any, title: string, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, lastImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, video: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } }>, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, colorImages: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }>, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string | null } | null, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, bimFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string | null } | null, drawing?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any | null, amount?: any | null, optional?: any | null, lightsource: { __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string } }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any | null, volume?: any | null, weight?: any | null, articleNo?: string | null, color?: { __typename?: 'ProductColorRecord', id: any, name?: string | null } | null, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string | null } | null, feature?: { __typename?: 'ProductFeatureRecord', name?: string | null } | null }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string | null, price?: any | null, accessory: { __typename?: 'ProductAccessoryRecord', name?: string | null } }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string | null } | null, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }>, gallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string | null, slug: string } | { __typename: 'ProductRecord', id: any, title: string, slug: string } | { __typename: 'ProjectRecord', id: any, title: string, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, lastImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, video: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type AllProjectsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllProjectsQuery = { __typename?: 'Query', allProjects: Array<{ __typename?: 'ProjectRecord', id: any, location: string, title: string, slug: string, projectType: { __typename?: 'ProjectTypeRecord', id: any, title: string, titlePlural: string }, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null }>, _allProjectsMeta: { __typename?: 'CollectionMetadata', count: any } };

type AllRelatedProjectsQueryVariables = Exact<{
  projectType?: InputMaybe<Scalars['ItemId']['input']>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllRelatedProjectsQuery = { __typename?: 'Query', allProjects: Array<{ __typename?: 'ProjectRecord', id: any, location: string, title: string, slug: string, projectType: { __typename?: 'ProjectTypeRecord', id: any, title: string, titlePlural: string }, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null }>, _allProjectsMeta: { __typename?: 'CollectionMetadata', count: any } };

type ProjectStartQueryVariables = Exact<{ [key: string]: never; }>;


type ProjectStartQuery = { __typename?: 'Query', projectStart?: { __typename?: 'ProjectStartRecord', id: any, intro: string, title: string } | null };

type AllProjectTypesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllProjectTypesQuery = { __typename?: 'Query', allProjectTypes: Array<{ __typename?: 'ProjectTypeRecord', id: any, title: string, titlePlural: string }>, _allProjectTypesMeta: { __typename?: 'CollectionMetadata', count: any } };

type BespokeQueryVariables = Exact<{ [key: string]: never; }>;


type BespokeQuery = { __typename?: 'Query', bespoke?: { __typename?: 'BespokeRecord', id: any, intro: string, outro: string, title: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, examples: Array<{ __typename?: 'BespokeProjectRecord', id: any, summary: string, project?: { __typename?: 'ProjectRecord', id: any, location: string, title: string, slug: string, bespoke?: any | null, projectType: { __typename?: 'ProjectTypeRecord', id: any, title: string, titlePlural: string }, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, relatedProducts: Array<{ __typename?: 'ProductRecord', id: any, title: string, description?: string | null, slug: string, additionalInformation?: string | null, markAsNew?: any | null, upcycled?: any | null, bimLink?: string | null, note?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string | null, slug: string } | { __typename: 'ProductRecord', id: any, title: string, slug: string } | { __typename: 'ProjectRecord', id: any, title: string, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, lastImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, video: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } }>, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, colorImages: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }>, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string | null } | null, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, bimFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string | null } | null, drawing?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any | null, amount?: any | null, optional?: any | null, lightsource: { __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string } }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any | null, volume?: any | null, weight?: any | null, articleNo?: string | null, color?: { __typename?: 'ProductColorRecord', id: any, name?: string | null } | null, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string | null } | null, feature?: { __typename?: 'ProductFeatureRecord', name?: string | null } | null }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string | null, price?: any | null, accessory: { __typename?: 'ProductAccessoryRecord', name?: string | null } }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string | null } | null, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }>, gallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string | null, slug: string } | { __typename: 'ProductRecord', id: any, title: string, slug: string } | { __typename: 'ProjectRecord', id: any, title: string, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, lastImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, video: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null }> } | null };

type BespokeThumbnailQueryVariables = Exact<{ [key: string]: never; }>;


type BespokeThumbnailQuery = { __typename?: 'Query', bespokeThumbnail?: { __typename?: 'BespokeRecord', thumbnail: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, secondaryThumbnail?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null } | null };

type FactoryVisitQueryVariables = Exact<{ [key: string]: never; }>;


type FactoryVisitQuery = { __typename?: 'Query', factoryVisit?: { __typename?: 'FactoryVisitRecord', id: any, title: string, intro: string } | null };

type DownloadsStartQueryVariables = Exact<{ [key: string]: never; }>;


type DownloadsStartQuery = { __typename?: 'Query', downloadsStart?: { __typename?: 'DownloadsStartRecord', id: any, intro: string, title: string } | null };

type AllCataloguesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllCataloguesQuery = { __typename?: 'Query', allCatalogues: Array<{ __typename?: 'CatalogueRecord', id: any, title: string, pdf: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string }, thumbnail: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } }>, _allCataloguesMeta: { __typename?: 'CollectionMetadata', count: any } };

type AllColorsAndMaterialsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllColorsAndMaterialsQuery = { __typename?: 'Query', allColorMaterials: Array<{ __typename?: 'ColorMaterialRecord', id: any, description: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, thumb: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, category: { __typename?: 'ColorMaterialTypeRecord', id: any, category: string, categoryPlural: string } }>, _allColorMaterialsMeta: { __typename?: 'CollectionMetadata', count: any }, allColorMaterialTypes: Array<{ __typename?: 'ColorMaterialTypeRecord', id: any, category: string, categoryPlural: string }>, _allColorMaterialTypesMeta: { __typename?: 'CollectionMetadata', count: any }, colorMaterialIntro?: { __typename?: 'ColorMaterialIntroRecord', id: any, intro: string } | null };

type ProjectFragment = { __typename?: 'ProjectRecord', id: any, location: string, title: string, slug: string, bespoke?: any | null, projectType: { __typename?: 'ProjectTypeRecord', id: any, title: string, titlePlural: string }, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, relatedProducts: Array<{ __typename?: 'ProductRecord', id: any, title: string, description?: string | null, slug: string, additionalInformation?: string | null, markAsNew?: any | null, upcycled?: any | null, bimLink?: string | null, note?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string | null, slug: string } | { __typename: 'ProductRecord', id: any, title: string, slug: string } | { __typename: 'ProjectRecord', id: any, title: string, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, lastImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, video: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } }>, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, colorImages: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }>, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string | null } | null, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, bimFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string | null } | null, drawing?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any | null, amount?: any | null, optional?: any | null, lightsource: { __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string } }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any | null, volume?: any | null, weight?: any | null, articleNo?: string | null, color?: { __typename?: 'ProductColorRecord', id: any, name?: string | null } | null, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string | null } | null, feature?: { __typename?: 'ProductFeatureRecord', name?: string | null } | null }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string | null, price?: any | null, accessory: { __typename?: 'ProductAccessoryRecord', name?: string | null } }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string | null } | null, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }>, gallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string | null, slug: string } | { __typename: 'ProductRecord', id: any, title: string, slug: string } | { __typename: 'ProjectRecord', id: any, title: string, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, lastImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, video: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type ProjectLightFragment = { __typename?: 'ProjectRecord', id: any, location: string, title: string, slug: string, projectType: { __typename?: 'ProjectTypeRecord', id: any, title: string, titlePlural: string }, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null };

type SiteSearchQueryVariables = Exact<{
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>> | InputMaybe<Scalars['ItemId']['input']>>;
  designerIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>> | InputMaybe<Scalars['ItemId']['input']>>;
  faqIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>> | InputMaybe<Scalars['ItemId']['input']>>;
  newsIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>> | InputMaybe<Scalars['ItemId']['input']>>;
  projectIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>> | InputMaybe<Scalars['ItemId']['input']>>;
  staffIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>> | InputMaybe<Scalars['ItemId']['input']>>;
  first?: InputMaybe<Scalars['IntType']['input']>;
}>;


type SiteSearchQuery = { __typename?: 'Query', products: Array<{ __typename: 'ProductRecord', id: any, title: string, slug: string, markAsNew?: any | null, upcycled?: any | null, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null }>, designers: Array<{ __typename: 'DesignerRecord', id: any, name?: string | null, description?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } }>, projects: Array<{ __typename?: 'ProjectRecord', id: any, location: string, title: string, slug: string, projectType: { __typename?: 'ProjectTypeRecord', id: any, title: string, titlePlural: string }, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null }>, faqs: Array<{ __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer: string, id: any, question: string, category: { __typename?: 'FaqCategoryRecord', id: any, title: string } }>, news: Array<{ __typename: 'NewsRecord', id: any, link?: string | null, linkText?: string | null, text: string, title: string, slug: string, createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }>, people: Array<{ __typename?: 'StaffRecord', id: any, name: string, role: string, phone?: string | null, email?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } }> };

type SiteSEOQueryVariables = Exact<{ [key: string]: never; }>;


type SiteSEOQuery = { __typename?: 'Query', site: { __typename?: 'Site', faviconMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null } | null } | null } };

type SiteFragment = { __typename?: 'Site', faviconMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null } | null } | null };

type StartQueryVariables = Exact<{ [key: string]: never; }>;


type StartQuery = { __typename?: 'Query', start?: { __typename?: 'StartRecord', content: Array<{ __typename: 'FeaturedStartRecord', id: any, headline: string, items: Array<{ __typename: 'DesignerRecord' } | { __typename: 'ProductRecord', id: any, title: string, slug: string, markAsNew?: any | null, upcycled?: any | null, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null }>, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null } | { __typename: 'ProjectRecord', id: any, location: string, title: string, slug: string, projectType: { __typename?: 'ProjectTypeRecord', id: any, title: string, titlePlural: string }, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, secondaryImage?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null }> } | { __typename: 'FullscreenMediaBlockRecord', id: any, headline: string, subHeadline: string, readMore: string, makeDarker?: any | null, media: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null }, linkRecord: { __typename: 'AboutRecord', id: any, title: string } | { __typename: 'DesignerRecord', id: any, name?: string | null, description?: string | null, slug: string, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | { __typename: 'ProductRecord', id: any, title: string, description?: string | null, slug: string, additionalInformation?: string | null, markAsNew?: any | null, upcycled?: any | null, bimLink?: string | null, note?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, productGallery: Array<{ __typename: 'FullwidthImageRecord', id: any, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'ImageGalleryRecord', id: any, gallery: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }> } | { __typename: 'TextRecord', id: any, text?: { __typename?: 'TextModelTextField', value: any, links: Array<{ __typename: 'DesignerRecord', id: any, name?: string | null, slug: string } | { __typename: 'ProductRecord', id: any, title: string, slug: string } | { __typename: 'ProjectRecord', id: any, title: string, slug: string }> } | null } | { __typename: 'TwoColumnImageRecord', id: any, firstImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, lastImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'VideoRecord', id: any, video: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } }>, environmentImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, colorImages: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }>, family: { __typename?: 'ProductFamilyRecord', id: any, name?: string | null }, categories: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null, namePlural?: string | null, position?: any | null }>, connection?: { __typename?: 'ProductConnectionRecord', id: any, name?: string | null } | null, designer?: { __typename?: 'DesignerRecord', id: any, name?: string | null, slug: string } | null, dimmable?: { __typename?: 'ProductDimmableRecord', id: any, name?: string | null } | null, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, lightFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, bimFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, models: Array<{ __typename?: 'ProductModelRecord', id: any, name?: { __typename?: 'ProductModelNameRecord', id: any, name?: string | null } | null, drawing?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, lightsources: Array<{ __typename?: 'LightsourceRecord', id: any, included?: any | null, amount?: any | null, optional?: any | null, lightsource: { __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string } }>, variants: Array<{ __typename?: 'VariantRecord', id: any, price?: any | null, volume?: any | null, weight?: any | null, articleNo?: string | null, color?: { __typename?: 'ProductColorRecord', id: any, name?: string | null } | null, material?: { __typename?: 'ProductMaterialRecord', id: any, name?: string | null } | null, feature?: { __typename?: 'ProductFeatureRecord', name?: string | null } | null }>, accessories: Array<{ __typename?: 'AccessoryRecord', articleNo?: string | null, price?: any | null, accessory: { __typename?: 'ProductAccessoryRecord', name?: string | null } }> }>, mounting?: { __typename?: 'ProductMountingRecord', id: any, name?: string | null } | null, mountingInstructions?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFile?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null, pdfFiles?: Array<{ __typename?: 'FileFieldMultiLocaleField', locale?: SiteLocale | null, value?: { __typename?: 'FileField', alt?: string | null, basename: string, filename: string, format: string, id: any, title?: string | null, url: string } | null }> | null, sockets: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } } | { __typename: 'FullscreenVideoRecord', id: any, link?: string | null, linkText?: string | null, text?: string | null, video: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } } | { __typename: 'ImageLinkRecord', id: any, firstLink?: string | null, firstLinkText?: string | null, firstHeadline?: string | null, secondLink?: string | null, secondLinkText?: string | null, secondHeadline?: string | null, firstImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null }, secondImage: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } } | { __typename: 'NewsItemRecord', news: { __typename?: 'NewsRecord', id: any, title: string, text: string, link?: string | null, linkText?: string | null, slug: string } }> } | null, lastNews: Array<{ __typename: 'NewsRecord', id: any, link?: string | null, linkText?: string | null, text: string, title: string, slug: string, createdAt: any, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, customData: any, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, base64?: string | null, sizes: string } | null } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }> };

type FaqQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']['input']>;
}>;


type FaqQuery = { __typename?: 'Query', faq?: { __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer: string, id: any, question: string, category: { __typename?: 'FaqCategoryRecord', id: any, title: string } } | null };

type AllFaqsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllFaqsQuery = { __typename?: 'Query', faqs: Array<{ __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer: string, id: any, question: string, category: { __typename?: 'FaqCategoryRecord', id: any, title: string } }> };

type AllFaqCategoriesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllFaqCategoriesQuery = { __typename?: 'Query', faqCategories: Array<{ __typename?: 'FaqCategoryRecord', id: any, title: string }> };

type FaqStartQueryVariables = Exact<{ [key: string]: never; }>;


type FaqStartQuery = { __typename?: 'Query', faqStart?: { __typename?: 'FaqStartRecord', intro: string, id: any, title: string } | null, faqs: Array<{ __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer: string, id: any, question: string, category: { __typename?: 'FaqCategoryRecord', id: any, title: string } }> };

type ManualsIntroQueryVariables = Exact<{ [key: string]: never; }>;


type ManualsIntroQuery = { __typename?: 'Query', manual?: { __typename?: 'ManualRecord', intro: string, id: any, title: string } | null };

type FaqFragment = { __typename?: 'FaqRecord', updatedAt: any, createdAt: any, answer: string, id: any, question: string, category: { __typename?: 'FaqCategoryRecord', id: any, title: string } };

type TaxonomyQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
}>;


type TaxonomyQuery = { __typename?: 'Query', designer: Array<{ __typename?: 'DesignerRecord', name?: string | null, id: any, slug: string }>, category: Array<{ __typename?: 'ProductCategoryRecord', id: any, name?: string | null }>, color: Array<{ __typename?: 'ProductColorRecord', id: any, name?: string | null }>, connection: Array<{ __typename?: 'ProductConnectionRecord', id: any, name?: string | null }>, dimmable: Array<{ __typename?: 'ProductDimmableRecord', id: any, name?: string | null }>, electricalData: Array<{ __typename?: 'ProductElectricalRecord', id: any, name?: string | null }>, family: Array<{ __typename?: 'ProductFamilyRecord', id: any, name?: string | null }>, lightsource: Array<{ __typename?: 'ProductLightsourceRecord', id: any, name?: string | null, price: any, articleNo: string }>, material: Array<{ __typename?: 'ProductMaterialRecord', id: any, name?: string | null }>, mounting: Array<{ __typename?: 'ProductMountingRecord', id: any, name?: string | null }>, socket: Array<{ __typename?: 'ProductSocketRecord', id: any, name?: string | null }> };
