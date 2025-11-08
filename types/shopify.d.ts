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
  Color: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  HTML: { input: any; output: any; }
  ISO8601DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  URL: { input: any; output: any; }
  UnsignedInt64: { input: any; output: any; }
};

/**
 * A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning).
 * Versions are commonly referred to by their handle (for example, `2021-10`).
 *
 */
type ApiVersion = {
  __typename?: 'ApiVersion';
  /** The human-readable name of the version. */
  displayName: Scalars['String']['output'];
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String']['output'];
  /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning). */
  supported: Scalars['Boolean']['output'];
};

/**
 * The input fields for submitting Apple Pay payment method information for checkout.
 *
 */
type ApplePayWalletContentInput = {
  /** The customer's billing address. */
  billingAddress: MailingAddressInput;
  /** The data for the Apple Pay wallet. */
  data: Scalars['String']['input'];
  /** The header data for the Apple Pay wallet. */
  header: ApplePayWalletHeaderInput;
  /** The last digits of the card used to create the payment. */
  lastDigits?: InputMaybe<Scalars['String']['input']>;
  /** The signature for the Apple Pay wallet. */
  signature: Scalars['String']['input'];
  /** The version for the Apple Pay wallet. */
  version: Scalars['String']['input'];
};

/**
 * The input fields for submitting wallet payment method information for checkout.
 *
 */
type ApplePayWalletHeaderInput = {
  /** The application data for the Apple Pay wallet. */
  applicationData?: InputMaybe<Scalars['String']['input']>;
  /** The ephemeral public key for the Apple Pay wallet. */
  ephemeralPublicKey: Scalars['String']['input'];
  /** The public key hash for the Apple Pay wallet. */
  publicKeyHash: Scalars['String']['input'];
  /** The transaction ID for the Apple Pay wallet. */
  transactionId: Scalars['String']['input'];
};

/** Details about the gift card used on the checkout. */
type AppliedGiftCard = Node & {
  __typename?: 'AppliedGiftCard';
  /** The amount that was taken from the gift card by applying it. */
  amountUsed: MoneyV2;
  /**
   * The amount that was taken from the gift card by applying it.
   * @deprecated Use `amountUsed` instead.
   */
  amountUsedV2: MoneyV2;
  /** The amount left on the gift card. */
  balance: MoneyV2;
  /**
   * The amount left on the gift card.
   * @deprecated Use `balance` instead.
   */
  balanceV2: MoneyV2;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The last characters of the gift card. */
  lastCharacters: Scalars['String']['output'];
  /** The amount that was applied to the checkout in its currency. */
  presentmentAmountUsed: MoneyV2;
};

/** An article in an online store blog. */
type Article = HasMetafields & Node & OnlineStorePublishable & Trackable & {
  __typename?: 'Article';
  /**
   * The article's author.
   * @deprecated Use `authorV2` instead.
   */
  author: ArticleAuthor;
  /** The article's author. */
  authorV2?: Maybe<ArticleAuthor>;
  /** The blog that the article belongs to. */
  blog: Blog;
  /** List of comments posted on the article. */
  comments: CommentConnection;
  /** Stripped content of the article, single line with HTML tags removed. */
  content: Scalars['String']['output'];
  /** The content of the article, complete with HTML formatting. */
  contentHtml: Scalars['HTML']['output'];
  /** Stripped excerpt of the article, single line with HTML tags removed. */
  excerpt?: Maybe<Scalars['String']['output']>;
  /** The excerpt of the article, complete with HTML formatting. */
  excerptHtml?: Maybe<Scalars['HTML']['output']>;
  /** A human-friendly unique string for the Article automatically generated from its title. */
  handle: Scalars['String']['output'];
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The image associated with the article. */
  image?: Maybe<Image>;
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>;
  /** The date and time when the article was published. */
  publishedAt: Scalars['DateTime']['output'];
  /** The article’s SEO information. */
  seo?: Maybe<SEO>;
  /**
   * A categorization that a article can be tagged with.
   *
   */
  tags: Array<Scalars['String']['output']>;
  /** The article’s name. */
  title: Scalars['String']['output'];
  /** URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/current/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries, otherwise returns null. */
  trackingParameters?: Maybe<Scalars['String']['output']>;
};


/** An article in an online store blog. */
type ArticlecommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


/** An article in an online store blog. */
type ArticlecontentArgs = {
  truncateAt?: InputMaybe<Scalars['Int']['input']>;
};


/** An article in an online store blog. */
type ArticleexcerptArgs = {
  truncateAt?: InputMaybe<Scalars['Int']['input']>;
};


/** An article in an online store blog. */
type ArticlemetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/** An article in an online store blog. */
type ArticlemetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};

/** The author of an article. */
type ArticleAuthor = {
  __typename?: 'ArticleAuthor';
  /** The author's bio. */
  bio?: Maybe<Scalars['String']['output']>;
  /** The author’s email. */
  email: Scalars['String']['output'];
  /** The author's first name. */
  firstName: Scalars['String']['output'];
  /** The author's last name. */
  lastName: Scalars['String']['output'];
  /** The author's full name. */
  name: Scalars['String']['output'];
};

/**
 * An auto-generated type for paginating through multiple Articles.
 *
 */
type ArticleConnection = {
  __typename?: 'ArticleConnection';
  /** A list of edges. */
  edges: Array<ArticleEdge>;
  /** A list of the nodes contained in ArticleEdge. */
  nodes: Array<Article>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one Article and a cursor during pagination.
 *
 */
type ArticleEdge = {
  __typename?: 'ArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of ArticleEdge. */
  node: Article;
};

/** The set of valid sort keys for the Article query. */
enum ArticleSortKeys {
  /** Sort by the `author` value. */
  AUTHOR = 'AUTHOR',
  /** Sort by the `blog_title` value. */
  BLOG_TITLE = 'BLOG_TITLE',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** Sort by the `published_at` value. */
  PUBLISHED_AT = 'PUBLISHED_AT',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RELEVANCE = 'RELEVANCE',
  /** Sort by the `title` value. */
  TITLE = 'TITLE',
  /** Sort by the `updated_at` value. */
  UPDATED_AT = 'UPDATED_AT'
}

/** Represents a generic custom attribute, such as whether an order is a customer's first. */
type Attribute = {
  __typename?: 'Attribute';
  /**
   * The key or name of the attribute. For example, `"customersFirstOrder"`.
   *
   */
  key: Scalars['String']['output'];
  /**
   * The value of the attribute. For example, `"true"`.
   *
   */
  value?: Maybe<Scalars['String']['output']>;
};

/** The input fields for an attribute. */
type AttributeInput = {
  /** Key or name of the attribute. */
  key: Scalars['String']['input'];
  /** Value of the attribute. */
  value: Scalars['String']['input'];
};

/**
 * Automatic discount applications capture the intentions of a discount that was automatically applied.
 *
 */
type AutomaticDiscountApplication = DiscountApplication & {
  __typename?: 'AutomaticDiscountApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
  /** The title of the application. */
  title: Scalars['String']['output'];
  /** The value of the discount application. */
  value: PricingValue;
};

/** Represents a cart line common fields. */
type BaseCartLine = {
  /** An attribute associated with the cart line. */
  attribute?: Maybe<Attribute>;
  /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
  attributes: Array<Attribute>;
  /** The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout. */
  cost: CartLineCost;
  /** The discounts that have been applied to the cart line. */
  discountAllocations: Array<CartDiscountAllocation>;
  /**
   * The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.
   * @deprecated Use `cost` instead.
   */
  estimatedCost: CartLineEstimatedCost;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The merchandise that the buyer intends to purchase. */
  merchandise: Merchandise;
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars['Int']['output'];
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation?: Maybe<SellingPlanAllocation>;
};


/** Represents a cart line common fields. */
type BaseCartLineattributeArgs = {
  key: Scalars['String']['input'];
};

/**
 * An auto-generated type for paginating through multiple BaseCartLines.
 *
 */
type BaseCartLineConnection = {
  __typename?: 'BaseCartLineConnection';
  /** A list of edges. */
  edges: Array<BaseCartLineEdge>;
  /** A list of the nodes contained in BaseCartLineEdge. */
  nodes: Array<BaseCartLine>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one BaseCartLine and a cursor during pagination.
 *
 */
type BaseCartLineEdge = {
  __typename?: 'BaseCartLineEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of BaseCartLineEdge. */
  node: BaseCartLine;
};

/** An online store blog. */
type Blog = HasMetafields & Node & OnlineStorePublishable & {
  __typename?: 'Blog';
  /** Find an article by its handle. */
  articleByHandle?: Maybe<Article>;
  /** List of the blog's articles. */
  articles: ArticleConnection;
  /** The authors who have contributed to the blog. */
  authors: Array<ArticleAuthor>;
  /**
   * A human-friendly unique string for the Blog automatically generated from its title.
   *
   */
  handle: Scalars['String']['output'];
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>;
  /** The blog's SEO information. */
  seo?: Maybe<SEO>;
  /** The blogs’s title. */
  title: Scalars['String']['output'];
};


/** An online store blog. */
type BlogarticleByHandleArgs = {
  handle: Scalars['String']['input'];
};


/** An online store blog. */
type BlogarticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ArticleSortKeys>;
};


/** An online store blog. */
type BlogmetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/** An online store blog. */
type BlogmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};

/**
 * An auto-generated type for paginating through multiple Blogs.
 *
 */
type BlogConnection = {
  __typename?: 'BlogConnection';
  /** A list of edges. */
  edges: Array<BlogEdge>;
  /** A list of the nodes contained in BlogEdge. */
  nodes: Array<Blog>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one Blog and a cursor during pagination.
 *
 */
type BlogEdge = {
  __typename?: 'BlogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of BlogEdge. */
  node: Blog;
};

/** The set of valid sort keys for the Blog query. */
enum BlogSortKeys {
  /** Sort by the `handle` value. */
  HANDLE = 'HANDLE',
  /** Sort by the `id` value. */
  ID = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RELEVANCE = 'RELEVANCE',
  /** Sort by the `title` value. */
  TITLE = 'TITLE'
}

/**
 * The store's [branding configuration](https://help.shopify.com/en/manual/promoting-marketing/managing-brand-assets).
 *
 */
type Brand = {
  __typename?: 'Brand';
  /** The colors of the store's brand. */
  colors: BrandColors;
  /** The store's cover image. */
  coverImage?: Maybe<MediaImage>;
  /** The store's default logo. */
  logo?: Maybe<MediaImage>;
  /** The store's short description. */
  shortDescription?: Maybe<Scalars['String']['output']>;
  /** The store's slogan. */
  slogan?: Maybe<Scalars['String']['output']>;
  /** The store's preferred logo for square UI elements. */
  squareLogo?: Maybe<MediaImage>;
};

/**
 * A group of related colors for the shop's brand.
 *
 */
type BrandColorGroup = {
  __typename?: 'BrandColorGroup';
  /** The background color. */
  background?: Maybe<Scalars['Color']['output']>;
  /** The foreground color. */
  foreground?: Maybe<Scalars['Color']['output']>;
};

/**
 * The colors of the shop's brand.
 *
 */
type BrandColors = {
  __typename?: 'BrandColors';
  /** The shop's primary brand colors. */
  primary: Array<BrandColorGroup>;
  /** The shop's secondary brand colors. */
  secondary: Array<BrandColorGroup>;
};

/**
 * The input fields for obtaining the buyer's identity.
 *
 */
type BuyerInput = {
  /** The identifier of the company location. */
  companyLocationId?: InputMaybe<Scalars['ID']['input']>;
  /** The customer access token retrieved from the [Customer Accounts API](https://shopify.dev/docs/api/customer#step-obtain-access-token). */
  customerAccessToken: Scalars['String']['input'];
};

/** Card brand, such as Visa or Mastercard, which can be used for payments. */
enum CardBrand {
  /** American Express. */
  AMERICAN_EXPRESS = 'AMERICAN_EXPRESS',
  /** Diners Club. */
  DINERS_CLUB = 'DINERS_CLUB',
  /** Discover. */
  DISCOVER = 'DISCOVER',
  /** JCB. */
  JCB = 'JCB',
  /** Mastercard. */
  MASTERCARD = 'MASTERCARD',
  /** Visa. */
  VISA = 'VISA'
}

/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
type Cart = HasMetafields & Node & {
  __typename?: 'Cart';
  /** The gift cards that have been applied to the cart. */
  appliedGiftCards: Array<AppliedGiftCard>;
  /** An attribute associated with the cart. */
  attribute?: Maybe<Attribute>;
  /** The attributes associated with the cart. Attributes are represented as key-value pairs. */
  attributes: Array<Attribute>;
  /** Information about the buyer that's interacting with the cart. */
  buyerIdentity: CartBuyerIdentity;
  /** The URL of the checkout for the cart. */
  checkoutUrl: Scalars['URL']['output'];
  /** The estimated costs that the buyer will pay at checkout. The costs are subject to change and changes will be reflected at checkout. The `cost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing). */
  cost: CartCost;
  /** The date and time when the cart was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The delivery properties of the cart. */
  delivery: CartDelivery;
  /**
   * The delivery groups available for the cart, based on the buyer identity default
   * delivery address preference or the default address of the logged-in customer.
   *
   */
  deliveryGroups: CartDeliveryGroupConnection;
  /** The discounts that have been applied to the entire cart. */
  discountAllocations: Array<CartDiscountAllocation>;
  /** The case-insensitive discount codes that the customer added at checkout. */
  discountCodes: Array<CartDiscountCode>;
  /**
   * The estimated costs that the buyer will pay at checkout. The estimated costs are subject to change and changes will be reflected at checkout. The `estimatedCost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
   * @deprecated Use `cost` instead.
   */
  estimatedCost: CartEstimatedCost;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** A list of lines containing information about the items the customer intends to purchase. */
  lines: BaseCartLineConnection;
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
  /** A note that's associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: Maybe<Scalars['String']['output']>;
  /** The total number of items in the cart. */
  totalQuantity: Scalars['Int']['output'];
  /** The date and time when the cart was updated. */
  updatedAt: Scalars['DateTime']['output'];
};


/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
type CartattributeArgs = {
  key: Scalars['String']['input'];
};


/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
type CartdeliveryGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  withCarrierRates?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
type CartlinesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
type CartmetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
type CartmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};

/** A delivery address of the buyer that is interacting with the cart. */
type CartAddress = CartDeliveryAddress;

/** The input fields to provide exactly one of a variety of delivery address types. */
type CartAddressInput = {
  /** Copies details from the customer address to an address on this cart. */
  copyFromCustomerAddressId?: InputMaybe<Scalars['ID']['input']>;
  /** A delivery address stored on this cart. */
  deliveryAddress?: InputMaybe<CartDeliveryAddressInput>;
};

/** Return type for `cartAttributesUpdate` mutation. */
type CartAttributesUpdatePayload = {
  __typename?: 'CartAttributesUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
type CartAutomaticDiscountAllocation = CartDiscountAllocation & {
  __typename?: 'CartAutomaticDiscountAllocation';
  /** The discount that have been applied on the cart line. */
  discountApplication: CartDiscountApplication;
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
  /** The title of the allocated discount. */
  title: Scalars['String']['output'];
};

/** Return type for `cartBillingAddressUpdate` mutation. */
type CartBillingAddressUpdatePayload = {
  __typename?: 'CartBillingAddressUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** Represents information about the buyer that is interacting with the cart. */
type CartBuyerIdentity = {
  __typename?: 'CartBuyerIdentity';
  /** The country where the buyer is located. */
  countryCode?: Maybe<CountryCode>;
  /** The customer account associated with the cart. */
  customer?: Maybe<Customer>;
  /**
   * An ordered set of delivery addresses tied to the buyer that is interacting with the cart.
   * The rank of the preferences is determined by the order of the addresses in the array. Preferences
   * can be used to populate relevant fields in the checkout flow.
   *
   * As of the `2025-01` release, `buyerIdentity.deliveryAddressPreferences` is deprecated.
   * Delivery addresses are now part of the `CartDelivery` object and managed with three new mutations:
   * - `cartDeliveryAddressAdd`
   * - `cartDeliveryAddressUpdate`
   * - `cartDeliveryAddressDelete`
   *
   * @deprecated Use `cart.delivery` instead.
   */
  deliveryAddressPreferences: Array<DeliveryAddress>;
  /** The email address of the buyer that's interacting with the cart. */
  email?: Maybe<Scalars['String']['output']>;
  /** The phone number of the buyer that's interacting with the cart. */
  phone?: Maybe<Scalars['String']['output']>;
  /**
   * A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection.
   * Preferences are not synced back to the cart if they are overwritten.
   *
   */
  preferences?: Maybe<CartPreferences>;
  /** The purchasing company associated with the cart. */
  purchasingCompany?: Maybe<PurchasingCompany>;
};

/**
 * Specifies the input fields to update the buyer information associated with a cart.
 * Buyer identity is used to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * and should match the customer's shipping address.
 *
 */
type CartBuyerIdentityInput = {
  /** The company location of the buyer that is interacting with the cart. */
  companyLocationId?: InputMaybe<Scalars['ID']['input']>;
  /** The country where the buyer is located. */
  countryCode?: InputMaybe<CountryCode>;
  /** The access token used to identify the customer associated with the cart. */
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  /** The email address of the buyer that is interacting with the cart. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /**
   * A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection.
   * Preferences are not synced back to the cart if they are overwritten.
   *
   */
  preferences?: InputMaybe<CartPreferencesInput>;
};

/** Return type for `cartBuyerIdentityUpdate` mutation. */
type CartBuyerIdentityUpdatePayload = {
  __typename?: 'CartBuyerIdentityUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/**
 * Represents how credit card details are provided for a direct payment.
 *
 */
enum CartCardSource {
  /**
   * The credit card was provided by a third party and vaulted on their system.
   * Using this value requires a separate permission from Shopify.
   *
   */
  SAVED_CREDIT_CARD = 'SAVED_CREDIT_CARD'
}

/** Return type for `cartClone` mutation. */
type CartClonePayload = {
  __typename?: 'CartClonePayload';
  /** The newly created cart without PII. This is a different cart from the source. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** The discount that has been applied to the cart line using a discount code. */
type CartCodeDiscountAllocation = CartDiscountAllocation & {
  __typename?: 'CartCodeDiscountAllocation';
  /** The code used to apply the discount. */
  code: Scalars['String']['output'];
  /** The discount that have been applied on the cart line. */
  discountApplication: CartDiscountApplication;
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
};

/** The completion action to checkout a cart. */
type CartCompletionAction = CompletePaymentChallenge;

/** The required completion action to checkout a cart. */
type CartCompletionActionRequired = {
  __typename?: 'CartCompletionActionRequired';
  /** The action required to complete the cart completion attempt. */
  action?: Maybe<CartCompletionAction>;
  /** The ID of the cart completion attempt. */
  id: Scalars['String']['output'];
};

/** The result of a cart completion attempt. */
type CartCompletionAttemptResult = CartCompletionActionRequired | CartCompletionFailed | CartCompletionProcessing | CartCompletionSuccess;

/** A failed completion to checkout a cart. */
type CartCompletionFailed = {
  __typename?: 'CartCompletionFailed';
  /** The errors that caused the checkout to fail. */
  errors: Array<CompletionError>;
  /** The ID of the cart completion attempt. */
  id: Scalars['String']['output'];
};

/** A cart checkout completion that's still processing. */
type CartCompletionProcessing = {
  __typename?: 'CartCompletionProcessing';
  /** The ID of the cart completion attempt. */
  id: Scalars['String']['output'];
  /** The number of milliseconds to wait before polling again. */
  pollDelay: Scalars['Int']['output'];
};

/** A successful completion to checkout a cart and a created order. */
type CartCompletionSuccess = {
  __typename?: 'CartCompletionSuccess';
  /** The date and time when the job completed. */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the cart completion attempt. */
  id: Scalars['String']['output'];
  /** The ID of the order that's created in Shopify. */
  orderId: Scalars['ID']['output'];
  /** The URL of the order confirmation in Shopify. */
  orderUrl: Scalars['URL']['output'];
};

/**
 * The costs that the buyer will pay at checkout.
 * The cart cost uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
 *
 */
type CartCost = {
  __typename?: 'CartCost';
  /** The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to `subtotalAmount`. */
  checkoutChargeAmount: MoneyV2;
  /** The amount, before taxes and cart-level discounts, for the customer to pay. */
  subtotalAmount: MoneyV2;
  /** Whether the subtotal amount is estimated. */
  subtotalAmountEstimated: Scalars['Boolean']['output'];
  /** The total amount for the customer to pay. */
  totalAmount: MoneyV2;
  /** Whether the total amount is estimated. */
  totalAmountEstimated: Scalars['Boolean']['output'];
  /**
   * The duty amount for the customer to pay at checkout.
   * @deprecated Tax and duty amounts are no longer available and will be removed in a future version.
   * Please see [the changelog](https://shopify.dev/changelog/tax-and-duties-are-deprecated-in-storefront-cart-api)
   * for more information.
   *
   */
  totalDutyAmount?: Maybe<MoneyV2>;
  /**
   * Whether the total duty amount is estimated.
   * @deprecated Tax and duty amounts are no longer available and will be removed in a future version.
   * Please see [the changelog](https://shopify.dev/changelog/tax-and-duties-are-deprecated-in-storefront-cart-api)
   * for more information.
   *
   */
  totalDutyAmountEstimated: Scalars['Boolean']['output'];
  /**
   * The tax amount for the customer to pay at checkout.
   * @deprecated Tax and duty amounts are no longer available and will be removed in a future version.
   * Please see [the changelog](https://shopify.dev/changelog/tax-and-duties-are-deprecated-in-storefront-cart-api)
   * for more information.
   *
   */
  totalTaxAmount?: Maybe<MoneyV2>;
  /**
   * Whether the total tax amount is estimated.
   * @deprecated Tax and duty amounts are no longer available and will be removed in a future version.
   * Please see [the changelog](https://shopify.dev/changelog/tax-and-duties-are-deprecated-in-storefront-cart-api)
   * for more information.
   *
   */
  totalTaxAmountEstimated: Scalars['Boolean']['output'];
};

/** Return type for `cartCreate` mutation. */
type CartCreatePayload = {
  __typename?: 'CartCreatePayload';
  /** The new cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
type CartCustomDiscountAllocation = CartDiscountAllocation & {
  __typename?: 'CartCustomDiscountAllocation';
  /** The discount that have been applied on the cart line. */
  discountApplication: CartDiscountApplication;
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
  /** The title of the allocated discount. */
  title: Scalars['String']['output'];
};

/**
 * The delivery properties of the cart.
 *
 */
type CartDelivery = {
  __typename?: 'CartDelivery';
  /** Selectable addresses to present to the buyer on the cart. */
  addresses: Array<CartSelectableAddress>;
};


/**
 * The delivery properties of the cart.
 *
 */
type CartDeliveryaddressesArgs = {
  selected?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Represents a mailing address for customers and shipping. */
type CartDeliveryAddress = {
  __typename?: 'CartDeliveryAddress';
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']['output']>;
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: Maybe<Scalars['String']['output']>;
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']['output']>;
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']['output']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']['output']>;
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']['output']>;
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: Maybe<Scalars['String']['output']>;
  /**
   * The alphanumeric code for the region.
   *
   * For example, ON.
   *
   */
  provinceCode?: Maybe<Scalars['String']['output']>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']['output']>;
};


/** Represents a mailing address for customers and shipping. */
type CartDeliveryAddressformattedArgs = {
  withCompany?: InputMaybe<Scalars['Boolean']['input']>;
  withName?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The input fields to create or update a cart address. */
type CartDeliveryAddressInput = {
  /**
   * The first line of the address. Typically the street address or PO Box number.
   *
   */
  address1?: InputMaybe<Scalars['String']['input']>;
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: InputMaybe<Scalars['String']['input']>;
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: InputMaybe<Scalars['String']['input']>;
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: InputMaybe<Scalars['String']['input']>;
  /** The name of the country. */
  countryCode?: InputMaybe<CountryCode>;
  /** The first name of the customer. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The last name of the customer. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** The region of the address, such as the province, state, or district. */
  provinceCode?: InputMaybe<Scalars['String']['input']>;
  /** The zip or postal code of the address. */
  zip?: InputMaybe<Scalars['String']['input']>;
};

/** Return type for `cartDeliveryAddressesAdd` mutation. */
type CartDeliveryAddressesAddPayload = {
  __typename?: 'CartDeliveryAddressesAddPayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** Return type for `cartDeliveryAddressesRemove` mutation. */
type CartDeliveryAddressesRemovePayload = {
  __typename?: 'CartDeliveryAddressesRemovePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** Return type for `cartDeliveryAddressesReplace` mutation. */
type CartDeliveryAddressesReplacePayload = {
  __typename?: 'CartDeliveryAddressesReplacePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** Return type for `cartDeliveryAddressesUpdate` mutation. */
type CartDeliveryAddressesUpdatePayload = {
  __typename?: 'CartDeliveryAddressesUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** Preferred location used to find the closest pick up point based on coordinates. */
type CartDeliveryCoordinatesPreference = {
  __typename?: 'CartDeliveryCoordinatesPreference';
  /**
   * The two-letter code for the country of the preferred location.
   *
   * For example, US.
   *
   */
  countryCode: CountryCode;
  /** The geographic latitude for a given location. Coordinates are required in order to set pickUpHandle for pickup points. */
  latitude: Scalars['Float']['output'];
  /** The geographic longitude for a given location. Coordinates are required in order to set pickUpHandle for pickup points. */
  longitude: Scalars['Float']['output'];
};

/** Preferred location used to find the closest pick up point based on coordinates. */
type CartDeliveryCoordinatesPreferenceInput = {
  /**
   * The two-letter code for the country of the preferred location.
   *
   * For example, US.
   *
   */
  countryCode: CountryCode;
  /** The geographic latitude for a given location. Coordinates are required in order to set pickUpHandle for pickup points. */
  latitude: Scalars['Float']['input'];
  /** The geographic longitude for a given location. Coordinates are required in order to set pickUpHandle for pickup points. */
  longitude: Scalars['Float']['input'];
};

/** Information about the options available for one or more line items to be delivered to a specific address. */
type CartDeliveryGroup = {
  __typename?: 'CartDeliveryGroup';
  /** A list of cart lines for the delivery group. */
  cartLines: BaseCartLineConnection;
  /** The destination address for the delivery group. */
  deliveryAddress: MailingAddress;
  /** The delivery options available for the delivery group. */
  deliveryOptions: Array<CartDeliveryOption>;
  /** The type of merchandise in the delivery group. */
  groupType: CartDeliveryGroupType;
  /** The ID for the delivery group. */
  id: Scalars['ID']['output'];
  /** The selected delivery option for the delivery group. */
  selectedDeliveryOption?: Maybe<CartDeliveryOption>;
};


/** Information about the options available for one or more line items to be delivered to a specific address. */
type CartDeliveryGroupcartLinesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * An auto-generated type for paginating through multiple CartDeliveryGroups.
 *
 */
type CartDeliveryGroupConnection = {
  __typename?: 'CartDeliveryGroupConnection';
  /** A list of edges. */
  edges: Array<CartDeliveryGroupEdge>;
  /** A list of the nodes contained in CartDeliveryGroupEdge. */
  nodes: Array<CartDeliveryGroup>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one CartDeliveryGroup and a cursor during pagination.
 *
 */
type CartDeliveryGroupEdge = {
  __typename?: 'CartDeliveryGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of CartDeliveryGroupEdge. */
  node: CartDeliveryGroup;
};

/**
 * Defines what type of merchandise is in the delivery group.
 *
 */
enum CartDeliveryGroupType {
  /**
   * The delivery group only contains merchandise that is either a one time purchase or a first delivery of
   * subscription merchandise.
   *
   */
  ONE_TIME_PURCHASE = 'ONE_TIME_PURCHASE',
  /** The delivery group only contains subscription merchandise. */
  SUBSCRIPTION = 'SUBSCRIPTION'
}

/** The input fields for the cart's delivery properties. */
type CartDeliveryInput = {
  /**
   * Selectable addresses to present to the buyer on the cart.
   *
   * The input must not contain more than `250` values.
   */
  addresses?: InputMaybe<Array<CartSelectableAddressInput>>;
};

/** Information about a delivery option. */
type CartDeliveryOption = {
  __typename?: 'CartDeliveryOption';
  /** The code of the delivery option. */
  code?: Maybe<Scalars['String']['output']>;
  /** The method for the delivery option. */
  deliveryMethodType: DeliveryMethodType;
  /** The description of the delivery option. */
  description?: Maybe<Scalars['String']['output']>;
  /** The estimated cost for the delivery option. */
  estimatedCost: MoneyV2;
  /** The unique identifier of the delivery option. */
  handle: Scalars['String']['output'];
  /** The title of the delivery option. */
  title?: Maybe<Scalars['String']['output']>;
};

/**
 * A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection.
 * Preferences are not synced back to the cart if they are overwritten.
 *
 */
type CartDeliveryPreference = {
  __typename?: 'CartDeliveryPreference';
  /** Preferred location used to find the closest pick up point based on coordinates. */
  coordinates?: Maybe<CartDeliveryCoordinatesPreference>;
  /** The preferred delivery methods such as shipping, local pickup or through pickup points. */
  deliveryMethod: Array<PreferenceDeliveryMethodType>;
  /**
   * The pickup handle prefills checkout fields with the location for either local pickup or pickup points delivery methods.
   * It accepts both location ID for local pickup and external IDs for pickup points.
   *
   */
  pickupHandle: Array<Scalars['String']['output']>;
};

/** Delivery preferences can be used to prefill the delivery section at checkout. */
type CartDeliveryPreferenceInput = {
  /** The coordinates of a delivery location in order of preference. */
  coordinates?: InputMaybe<CartDeliveryCoordinatesPreferenceInput>;
  /**
   * The preferred delivery methods such as shipping, local pickup or through pickup points.
   *
   * The input must not contain more than `250` values.
   */
  deliveryMethod?: InputMaybe<Array<PreferenceDeliveryMethodType>>;
  /**
   * The pickup handle prefills checkout fields with the location for either local pickup or pickup points delivery methods.
   * It accepts both location ID for local pickup and external IDs for pickup points.
   *
   * The input must not contain more than `250` values.
   */
  pickupHandle?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * The input fields for submitting direct payment method information for checkout.
 *
 */
type CartDirectPaymentMethodInput = {
  /** Indicates if the customer has accepted the subscription terms. Defaults to false. */
  acceptedSubscriptionTerms?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's billing address. */
  billingAddress: MailingAddressInput;
  /** The source of the credit card payment. */
  cardSource?: InputMaybe<CartCardSource>;
  /** The session ID for the direct payment method used to create the payment. */
  sessionId: Scalars['String']['input'];
};

/** The discounts that have been applied to the cart line. */
type CartDiscountAllocation = {
  /** The discount that have been applied on the cart line. */
  discountApplication: CartDiscountApplication;
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
};

/**
 * The discount application capture the intentions of a discount source at
 *         the time of application.
 */
type CartDiscountApplication = {
  __typename?: 'CartDiscountApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
  /** The value of the discount application. */
  value: PricingValue;
};

/** The discount codes applied to the cart. */
type CartDiscountCode = {
  __typename?: 'CartDiscountCode';
  /** Whether the discount code is applicable to the cart's current contents. */
  applicable: Scalars['Boolean']['output'];
  /** The code for the discount. */
  code: Scalars['String']['output'];
};

/** Return type for `cartDiscountCodesUpdate` mutation. */
type CartDiscountCodesUpdatePayload = {
  __typename?: 'CartDiscountCodesUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** Possible error codes that can be returned by `CartUserError`. */
enum CartErrorCode {
  /** The specified address field contains emojis. */
  ADDRESS_FIELD_CONTAINS_EMOJIS = 'ADDRESS_FIELD_CONTAINS_EMOJIS',
  /** The specified address field contains HTML tags. */
  ADDRESS_FIELD_CONTAINS_HTML_TAGS = 'ADDRESS_FIELD_CONTAINS_HTML_TAGS',
  /** The specified address field contains a URL. */
  ADDRESS_FIELD_CONTAINS_URL = 'ADDRESS_FIELD_CONTAINS_URL',
  /** The specified address field does not match the expected pattern. */
  ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN = 'ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN',
  /** The specified address field is required. */
  ADDRESS_FIELD_IS_REQUIRED = 'ADDRESS_FIELD_IS_REQUIRED',
  /** The specified address field is too long. */
  ADDRESS_FIELD_IS_TOO_LONG = 'ADDRESS_FIELD_IS_TOO_LONG',
  /** Bundles and addons cannot be mixed. */
  BUNDLES_AND_ADDONS_CANNOT_BE_MIXED = 'BUNDLES_AND_ADDONS_CANNOT_BE_MIXED',
  /** Buyer cannot purchase for company location. */
  BUYER_CANNOT_PURCHASE_FOR_COMPANY_LOCATION = 'BUYER_CANNOT_PURCHASE_FOR_COMPANY_LOCATION',
  /** The cart is too large to save. */
  CART_TOO_LARGE = 'CART_TOO_LARGE',
  /** The input value is invalid. */
  INVALID = 'INVALID',
  /** Company location not found or not allowed. */
  INVALID_COMPANY_LOCATION = 'INVALID_COMPANY_LOCATION',
  /** The delivery address was not found. */
  INVALID_DELIVERY_ADDRESS_ID = 'INVALID_DELIVERY_ADDRESS_ID',
  /** Delivery group was not found in cart. */
  INVALID_DELIVERY_GROUP = 'INVALID_DELIVERY_GROUP',
  /** Delivery option was not valid. */
  INVALID_DELIVERY_OPTION = 'INVALID_DELIVERY_OPTION',
  /** The quantity must be a multiple of the specified increment. */
  INVALID_INCREMENT = 'INVALID_INCREMENT',
  /** Merchandise line was not found in cart. */
  INVALID_MERCHANDISE_LINE = 'INVALID_MERCHANDISE_LINE',
  /** The metafields were not valid. */
  INVALID_METAFIELDS = 'INVALID_METAFIELDS',
  /** The payment wasn't valid. */
  INVALID_PAYMENT = 'INVALID_PAYMENT',
  /** The payment is invalid. Deferred payment is required. */
  INVALID_PAYMENT_DEFERRED_PAYMENT_REQUIRED = 'INVALID_PAYMENT_DEFERRED_PAYMENT_REQUIRED',
  /** Cannot update payment on an empty cart */
  INVALID_PAYMENT_EMPTY_CART = 'INVALID_PAYMENT_EMPTY_CART',
  /** The given zip code is invalid for the provided country. */
  INVALID_ZIP_CODE_FOR_COUNTRY = 'INVALID_ZIP_CODE_FOR_COUNTRY',
  /** The given zip code is invalid for the provided province. */
  INVALID_ZIP_CODE_FOR_PROVINCE = 'INVALID_ZIP_CODE_FOR_PROVINCE',
  /** The input value should be less than the maximum value allowed. */
  LESS_THAN = 'LESS_THAN',
  /** The quantity must be below the specified maximum for the item. */
  MAXIMUM_EXCEEDED = 'MAXIMUM_EXCEEDED',
  /** Item cannot be purchased as configured. */
  MERCHANDISE_NOT_APPLICABLE = 'MERCHANDISE_NOT_APPLICABLE',
  /** The quantity must be above the specified minimum for the item. */
  MINIMUM_NOT_MET = 'MINIMUM_NOT_MET',
  /** The customer access token is required when setting a company location. */
  MISSING_CUSTOMER_ACCESS_TOKEN = 'MISSING_CUSTOMER_ACCESS_TOKEN',
  /** Missing discount code. */
  MISSING_DISCOUNT_CODE = 'MISSING_DISCOUNT_CODE',
  /** Missing note. */
  MISSING_NOTE = 'MISSING_NOTE',
  /** The note length must be below the specified maximum. */
  NOTE_TOO_LONG = 'NOTE_TOO_LONG',
  /** Only one delivery address can be selected. */
  ONLY_ONE_DELIVERY_ADDRESS_CAN_BE_SELECTED = 'ONLY_ONE_DELIVERY_ADDRESS_CAN_BE_SELECTED',
  /** Parent line nesting is too deep or circular. */
  PARENT_LINE_NESTING_TOO_DEEP = 'PARENT_LINE_NESTING_TOO_DEEP',
  /** Parent line not found. */
  PARENT_LINE_NOT_FOUND = 'PARENT_LINE_NOT_FOUND',
  /** Nested cartlines are blocked due to an incompatibility. */
  PARENT_LINE_OPERATION_BLOCKED = 'PARENT_LINE_OPERATION_BLOCKED',
  /** Credit card has expired. */
  PAYMENTS_CREDIT_CARD_BASE_EXPIRED = 'PAYMENTS_CREDIT_CARD_BASE_EXPIRED',
  /** Credit card gateway is not supported. */
  PAYMENTS_CREDIT_CARD_BASE_GATEWAY_NOT_SUPPORTED = 'PAYMENTS_CREDIT_CARD_BASE_GATEWAY_NOT_SUPPORTED',
  /** Credit card error. */
  PAYMENTS_CREDIT_CARD_GENERIC = 'PAYMENTS_CREDIT_CARD_GENERIC',
  /** Credit card month is invalid. */
  PAYMENTS_CREDIT_CARD_MONTH_INCLUSION = 'PAYMENTS_CREDIT_CARD_MONTH_INCLUSION',
  /** Credit card number is invalid. */
  PAYMENTS_CREDIT_CARD_NUMBER_INVALID = 'PAYMENTS_CREDIT_CARD_NUMBER_INVALID',
  /** Credit card number format is invalid. */
  PAYMENTS_CREDIT_CARD_NUMBER_INVALID_FORMAT = 'PAYMENTS_CREDIT_CARD_NUMBER_INVALID_FORMAT',
  /** Credit card verification value is blank. */
  PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_BLANK = 'PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_BLANK',
  /** Credit card verification value is invalid for card type. */
  PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_INVALID_FOR_CARD_TYPE = 'PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_INVALID_FOR_CARD_TYPE',
  /** Credit card has expired. */
  PAYMENTS_CREDIT_CARD_YEAR_EXPIRED = 'PAYMENTS_CREDIT_CARD_YEAR_EXPIRED',
  /** Credit card expiry year is invalid. */
  PAYMENTS_CREDIT_CARD_YEAR_INVALID_EXPIRY_YEAR = 'PAYMENTS_CREDIT_CARD_YEAR_INVALID_EXPIRY_YEAR',
  /** The payment method is not applicable. */
  PAYMENT_METHOD_NOT_APPLICABLE = 'PAYMENT_METHOD_NOT_APPLICABLE',
  /** The payment method is not supported. */
  PAYMENT_METHOD_NOT_SUPPORTED = 'PAYMENT_METHOD_NOT_SUPPORTED',
  /** The delivery group is in a pending state. */
  PENDING_DELIVERY_GROUPS = 'PENDING_DELIVERY_GROUPS',
  /** The given province cannot be found. */
  PROVINCE_NOT_FOUND = 'PROVINCE_NOT_FOUND',
  /** Selling plan is not applicable. */
  SELLING_PLAN_NOT_APPLICABLE = 'SELLING_PLAN_NOT_APPLICABLE',
  /** An error occurred while saving the cart. */
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
  /** Too many delivery addresses on Cart. */
  TOO_MANY_DELIVERY_ADDRESSES = 'TOO_MANY_DELIVERY_ADDRESSES',
  /** A general error occurred during address validation. */
  UNSPECIFIED_ADDRESS_ERROR = 'UNSPECIFIED_ADDRESS_ERROR',
  /** Validation failed. */
  VALIDATION_CUSTOM = 'VALIDATION_CUSTOM',
  /** Variant can only be purchased with a selling plan. */
  VARIANT_REQUIRES_SELLING_PLAN = 'VARIANT_REQUIRES_SELLING_PLAN',
  /** The given zip code is unsupported. */
  ZIP_CODE_NOT_SUPPORTED = 'ZIP_CODE_NOT_SUPPORTED'
}

/** The estimated costs that the buyer will pay at checkout. The estimated cost uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing). */
type CartEstimatedCost = {
  __typename?: 'CartEstimatedCost';
  /** The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to`subtotal_amount`. */
  checkoutChargeAmount: MoneyV2;
  /** The estimated amount, before taxes and discounts, for the customer to pay. */
  subtotalAmount: MoneyV2;
  /** The estimated total amount for the customer to pay. */
  totalAmount: MoneyV2;
  /** The estimated duty amount for the customer to pay at checkout. */
  totalDutyAmount?: Maybe<MoneyV2>;
  /** The estimated tax amount for the customer to pay at checkout. */
  totalTaxAmount?: Maybe<MoneyV2>;
};

/**
 * The input fields for submitting a billing address without a selected payment method.
 *
 */
type CartFreePaymentMethodInput = {
  /** The customer's billing address. */
  billingAddress: MailingAddressInput;
};

/** Return type for `cartGiftCardCodesAdd` mutation. */
type CartGiftCardCodesAddPayload = {
  __typename?: 'CartGiftCardCodesAddPayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** Return type for `cartGiftCardCodesRemove` mutation. */
type CartGiftCardCodesRemovePayload = {
  __typename?: 'CartGiftCardCodesRemovePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** Return type for `cartGiftCardCodesUpdate` mutation. */
type CartGiftCardCodesUpdatePayload = {
  __typename?: 'CartGiftCardCodesUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** The input fields to create a cart. */
type CartInput = {
  /**
   * An array of key-value pairs that contains additional information about the cart.
   *
   * The input must not contain more than `250` values.
   */
  attributes?: InputMaybe<Array<AttributeInput>>;
  /**
   * The customer associated with the cart. Used to determine [international pricing]
   * (https://shopify.dev/custom-storefronts/internationalization/international-pricing).
   * Buyer identity should match the customer's shipping address.
   *
   */
  buyerIdentity?: InputMaybe<CartBuyerIdentityInput>;
  /** The delivery-related fields for the cart. */
  delivery?: InputMaybe<CartDeliveryInput>;
  /**
   * The case-insensitive discount codes that the customer added at checkout.
   *
   * The input must not contain more than `250` values.
   */
  discountCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * The case-insensitive gift card codes.
   *
   * The input must not contain more than `250` values.
   */
  giftCardCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * A list of merchandise lines to add to the cart.
   *
   * The input must not contain more than `250` values.
   */
  lines?: InputMaybe<Array<CartLineInput>>;
  /**
   * The metafields to associate with this cart.
   *
   * The input must not contain more than `250` values.
   */
  metafields?: InputMaybe<Array<CartInputMetafieldInput>>;
  /**
   * A note that's associated with the cart. For example, the note can be a personalized message to the buyer.
   *
   */
  note?: InputMaybe<Scalars['String']['input']>;
};

/** The input fields for a cart metafield value to set. */
type CartInputMetafieldInput = {
  /** The key name of the metafield. */
  key: Scalars['String']['input'];
  /**
   * The type of data that the cart metafield stores.
   * The type of data must be a [supported type](https://shopify.dev/apps/metafields/types).
   *
   */
  type: Scalars['String']['input'];
  /**
   * The data to store in the cart metafield. The data is always stored as a string, regardless of the metafield's type.
   *
   */
  value: Scalars['String']['input'];
};

/** Represents information about the merchandise in the cart. */
type CartLine = BaseCartLine & Node & {
  __typename?: 'CartLine';
  /** An attribute associated with the cart line. */
  attribute?: Maybe<Attribute>;
  /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
  attributes: Array<Attribute>;
  /** The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout. */
  cost: CartLineCost;
  /** The discounts that have been applied to the cart line. */
  discountAllocations: Array<CartDiscountAllocation>;
  /**
   * The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.
   * @deprecated Use `cost` instead.
   */
  estimatedCost: CartLineEstimatedCost;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The instructions for the line item. */
  instructions: CartLineInstructions;
  /** The merchandise that the buyer intends to purchase. */
  merchandise: Merchandise;
  /** The parent of the line item. */
  parentRelationship?: Maybe<CartLineParentRelationship>;
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars['Int']['output'];
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation?: Maybe<SellingPlanAllocation>;
};


/** Represents information about the merchandise in the cart. */
type CartLineattributeArgs = {
  key: Scalars['String']['input'];
};

/** The cost of the merchandise line that the buyer will pay at checkout. */
type CartLineCost = {
  __typename?: 'CartLineCost';
  /** The amount of the merchandise line. */
  amountPerQuantity: MoneyV2;
  /** The compare at amount of the merchandise line. */
  compareAtAmountPerQuantity?: Maybe<MoneyV2>;
  /** The cost of the merchandise line before line-level discounts. */
  subtotalAmount: MoneyV2;
  /** The total cost of the merchandise line. */
  totalAmount: MoneyV2;
};

/**
 * The estimated cost of the merchandise line that the buyer will pay at checkout.
 *
 */
type CartLineEstimatedCost = {
  __typename?: 'CartLineEstimatedCost';
  /** The amount of the merchandise line. */
  amount: MoneyV2;
  /** The compare at amount of the merchandise line. */
  compareAtAmount?: Maybe<MoneyV2>;
  /** The estimated cost of the merchandise line before discounts. */
  subtotalAmount: MoneyV2;
  /** The estimated total cost of the merchandise line. */
  totalAmount: MoneyV2;
};

/** The input fields to create a merchandise line on a cart. */
type CartLineInput = {
  /**
   * An array of key-value pairs that contains additional information about the merchandise line.
   *
   * The input must not contain more than `250` values.
   */
  attributes?: InputMaybe<Array<AttributeInput>>;
  /** The ID of the merchandise that the buyer intends to purchase. */
  merchandiseId: Scalars['ID']['input'];
  /** The parent line item of the cart line. */
  parent?: InputMaybe<CartLineParentInput>;
  /** The quantity of the merchandise. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']['input']>;
};

/** Represents instructions for a cart line item. */
type CartLineInstructions = {
  __typename?: 'CartLineInstructions';
  /** Whether the line item can be removed from the cart. */
  canRemove: Scalars['Boolean']['output'];
  /** Whether the line item quantity can be updated. */
  canUpdateQuantity: Scalars['Boolean']['output'];
};

/** The parent line item of the cart line. */
type CartLineParentInput = {
  /** The id of the parent line item. */
  lineId?: InputMaybe<Scalars['ID']['input']>;
  /** The ID of the parent line merchandise. */
  merchandiseId?: InputMaybe<Scalars['ID']['input']>;
};

/** Represents the parent relationship of a cart line. */
type CartLineParentRelationship = {
  __typename?: 'CartLineParentRelationship';
  /** The parent cart line. */
  parent: CartLine;
};

/** The input fields to update a line item on a cart. */
type CartLineUpdateInput = {
  /**
   * An array of key-value pairs that contains additional information about the merchandise line.
   *
   * The input must not contain more than `250` values.
   */
  attributes?: InputMaybe<Array<AttributeInput>>;
  /** The ID of the merchandise line. */
  id: Scalars['ID']['input'];
  /** The ID of the merchandise for the line item. */
  merchandiseId?: InputMaybe<Scalars['ID']['input']>;
  /** The quantity of the line item. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']['input']>;
};

/** Return type for `cartLinesAdd` mutation. */
type CartLinesAddPayload = {
  __typename?: 'CartLinesAddPayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** Return type for `cartLinesRemove` mutation. */
type CartLinesRemovePayload = {
  __typename?: 'CartLinesRemovePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** Return type for `cartLinesUpdate` mutation. */
type CartLinesUpdatePayload = {
  __typename?: 'CartLinesUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** The input fields to delete a cart metafield. */
type CartMetafieldDeleteInput = {
  /**
   * The key name of the cart metafield. Can either be a composite key (`namespace.key`) or a simple key
   *  that relies on the default app-reserved namespace.
   *
   */
  key: Scalars['String']['input'];
  /** The ID of the cart resource. */
  ownerId: Scalars['ID']['input'];
};

/** Return type for `cartMetafieldDelete` mutation. */
type CartMetafieldDeletePayload = {
  __typename?: 'CartMetafieldDeletePayload';
  /** The ID of the deleted cart metafield. */
  deletedId?: Maybe<Scalars['ID']['output']>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<MetafieldDeleteUserError>;
};

/** The input fields for a cart metafield value to set. */
type CartMetafieldsSetInput = {
  /** The key name of the cart metafield. */
  key: Scalars['String']['input'];
  /** The ID of the cart resource. */
  ownerId: Scalars['ID']['input'];
  /**
   * The type of data that the cart metafield stores.
   * The type of data must be a [supported type](https://shopify.dev/apps/metafields/types).
   *
   */
  type: Scalars['String']['input'];
  /**
   * The data to store in the cart metafield. The data is always stored as a string, regardless of the metafield's type.
   *
   */
  value: Scalars['String']['input'];
};

/** Return type for `cartMetafieldsSet` mutation. */
type CartMetafieldsSetPayload = {
  __typename?: 'CartMetafieldsSetPayload';
  /** The list of cart metafields that were set. */
  metafields?: Maybe<Array<Metafield>>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<MetafieldsSetUserError>;
};

/** Return type for `cartNoteUpdate` mutation. */
type CartNoteUpdatePayload = {
  __typename?: 'CartNoteUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** An error occurred during the cart operation. */
type CartOperationError = {
  __typename?: 'CartOperationError';
  /** The error code. */
  code: Scalars['String']['output'];
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/**
 * The input fields for updating the payment method that will be used to checkout.
 *
 */
type CartPaymentInput = {
  /** The amount that the customer will be charged at checkout. */
  amount: MoneyInput;
  /**
   * The input fields to use when checking out a cart with a direct payment method (like a credit card).
   *
   */
  directPaymentMethod?: InputMaybe<CartDirectPaymentMethodInput>;
  /**
   * The input fields to use to checkout a cart without providing a payment method.
   * Use this payment method input if the total cost of the cart is 0.
   *
   */
  freePaymentMethod?: InputMaybe<CartFreePaymentMethodInput>;
  /**
   * An ID of the order placed on the originating platform.
   * Note that this value doesn't correspond to the Shopify Order ID.
   *
   */
  sourceIdentifier?: InputMaybe<Scalars['String']['input']>;
  /**
   * The input fields to use when checking out a cart with a wallet payment method (like Shop Pay or Apple Pay).
   *
   */
  walletPaymentMethod?: InputMaybe<CartWalletPaymentMethodInput>;
};

/** Return type for `cartPaymentUpdate` mutation. */
type CartPaymentUpdatePayload = {
  __typename?: 'CartPaymentUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/**
 * A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection.
 * Preferences are not synced back to the cart if they are overwritten.
 *
 */
type CartPreferences = {
  __typename?: 'CartPreferences';
  /** Delivery preferences can be used to prefill the delivery section in at checkout. */
  delivery?: Maybe<CartDeliveryPreference>;
  /**
   * Wallet preferences are used to populate relevant payment fields in the checkout flow.
   * Accepted value: `["shop_pay"]`.
   *
   */
  wallet?: Maybe<Array<Scalars['String']['output']>>;
};

/** The input fields represent preferences for the buyer that is interacting with the cart. */
type CartPreferencesInput = {
  /** Delivery preferences can be used to prefill the delivery section in at checkout. */
  delivery?: InputMaybe<CartDeliveryPreferenceInput>;
  /**
   * Wallet preferences are used to populate relevant payment fields in the checkout flow.
   * Accepted value: `["shop_pay"]`.
   *
   * The input must not contain more than `250` values.
   */
  wallet?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Return type for `cartPrepareForCompletion` mutation. */
type CartPrepareForCompletionPayload = {
  __typename?: 'CartPrepareForCompletionPayload';
  /** The result of cart preparation for completion. */
  result?: Maybe<CartPrepareForCompletionResult>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
};

/** The result of cart preparation. */
type CartPrepareForCompletionResult = CartStatusNotReady | CartStatusReady | CartThrottled;

/** Return type for `cartRemovePersonalData` mutation. */
type CartRemovePersonalDataPayload = {
  __typename?: 'CartRemovePersonalDataPayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/**
 * A selectable delivery address for a cart.
 *
 */
type CartSelectableAddress = {
  __typename?: 'CartSelectableAddress';
  /** The delivery address. */
  address: CartAddress;
  /** A unique identifier for the address, specific to this cart. */
  id: Scalars['ID']['output'];
  /** This delivery address will not be associated with the buyer after a successful checkout. */
  oneTimeUse: Scalars['Boolean']['output'];
  /** Sets exactly one address as pre-selected for the buyer. */
  selected: Scalars['Boolean']['output'];
};

/** The input fields for a selectable delivery address in a cart. */
type CartSelectableAddressInput = {
  /** Exactly one kind of delivery address. */
  address: CartAddressInput;
  /** When true, this delivery address will not be associated with the buyer after a successful checkout. */
  oneTimeUse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Sets exactly one address as pre-selected for the buyer. */
  selected?: InputMaybe<Scalars['Boolean']['input']>;
  /** Defines what kind of address validation is requested. */
  validationStrategy?: InputMaybe<DeliveryAddressValidationStrategy>;
};

/** The input fields to update a line item on a cart. */
type CartSelectableAddressUpdateInput = {
  /** Exactly one kind of delivery address. */
  address?: InputMaybe<CartAddressInput>;
  /** The id of the selectable address. */
  id: Scalars['ID']['input'];
  /** When true, this delivery address will not be associated with the buyer after a successful checkout. */
  oneTimeUse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Sets exactly one address as pre-selected for the buyer. */
  selected?: InputMaybe<Scalars['Boolean']['input']>;
  /** Defines what kind of address validation is requested. */
  validationStrategy?: InputMaybe<DeliveryAddressValidationStrategy>;
};

/**
 * The input fields for updating the selected delivery options for a delivery group.
 *
 */
type CartSelectedDeliveryOptionInput = {
  /** The ID of the cart delivery group. */
  deliveryGroupId: Scalars['ID']['input'];
  /** The handle of the selected delivery option. */
  deliveryOptionHandle: Scalars['String']['input'];
};

/** Return type for `cartSelectedDeliveryOptionsUpdate` mutation. */
type CartSelectedDeliveryOptionsUpdatePayload = {
  __typename?: 'CartSelectedDeliveryOptionsUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
  /** A list of warnings that occurred during the mutation. */
  warnings: Array<CartWarning>;
};

/** Cart is not ready for payment update and completion. */
type CartStatusNotReady = {
  __typename?: 'CartStatusNotReady';
  /** The result of cart preparation for completion. */
  cart?: Maybe<Cart>;
  /** The list of errors that caused the cart to not be ready for payment update and completion. */
  errors: Array<CartOperationError>;
};

/** Cart is ready for payment update and completion. */
type CartStatusReady = {
  __typename?: 'CartStatusReady';
  /** The result of cart preparation for completion. */
  cart?: Maybe<Cart>;
};

/** Return type for `cartSubmitForCompletion` mutation. */
type CartSubmitForCompletionPayload = {
  __typename?: 'CartSubmitForCompletionPayload';
  /** The result of cart submission for completion. */
  result?: Maybe<CartSubmitForCompletionResult>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
};

/** The result of cart submit completion. */
type CartSubmitForCompletionResult = SubmitAlreadyAccepted | SubmitFailed | SubmitSuccess | SubmitThrottled;

/**
 * Response signifying that the access to cart request is currently being throttled.
 * The client can retry after `poll_after`.
 *
 */
type CartThrottled = {
  __typename?: 'CartThrottled';
  /** The result of cart preparation for completion. */
  cart?: Maybe<Cart>;
  /** The polling delay. */
  pollAfter: Scalars['DateTime']['output'];
};

/** Represents an error that happens during execution of a cart mutation. */
type CartUserError = DisplayableError & {
  __typename?: 'CartUserError';
  /** The error code. */
  code?: Maybe<CartErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/**
 * The input fields for submitting wallet payment method information for checkout.
 *
 */
type CartWalletPaymentMethodInput = {
  /** The payment method information for the Apple Pay wallet. */
  applePayWalletContent?: InputMaybe<ApplePayWalletContentInput>;
  /** The payment method information for the Shop Pay wallet. */
  shopPayWalletContent?: InputMaybe<ShopPayWalletContentInput>;
};

/** A warning that occurred during a cart mutation. */
type CartWarning = {
  __typename?: 'CartWarning';
  /** The code of the warning. */
  code: CartWarningCode;
  /** The message text of the warning. */
  message: Scalars['String']['output'];
  /** The target of the warning. */
  target: Scalars['ID']['output'];
};

/** The code for the cart warning. */
enum CartWarningCode {
  /** The discount code cannot be honored. */
  DISCOUNT_CODE_NOT_HONOURED = 'DISCOUNT_CODE_NOT_HONOURED',
  /** The discount is currently inactive. */
  DISCOUNT_CURRENTLY_INACTIVE = 'DISCOUNT_CURRENTLY_INACTIVE',
  /** The customer is not eligible for this discount. */
  DISCOUNT_CUSTOMER_NOT_ELIGIBLE = 'DISCOUNT_CUSTOMER_NOT_ELIGIBLE',
  /** The customer's discount usage limit has been reached. */
  DISCOUNT_CUSTOMER_USAGE_LIMIT_REACHED = 'DISCOUNT_CUSTOMER_USAGE_LIMIT_REACHED',
  /** An eligible customer is missing for this discount. */
  DISCOUNT_ELIGIBLE_CUSTOMER_MISSING = 'DISCOUNT_ELIGIBLE_CUSTOMER_MISSING',
  /** The purchase type is incompatible with this discount. */
  DISCOUNT_INCOMPATIBLE_PURCHASE_TYPE = 'DISCOUNT_INCOMPATIBLE_PURCHASE_TYPE',
  /** The discount was not found. */
  DISCOUNT_NOT_FOUND = 'DISCOUNT_NOT_FOUND',
  /** There are no entitled line items for this discount. */
  DISCOUNT_NO_ENTITLED_LINE_ITEMS = 'DISCOUNT_NO_ENTITLED_LINE_ITEMS',
  /** There are no entitled shipping lines for this discount. */
  DISCOUNT_NO_ENTITLED_SHIPPING_LINES = 'DISCOUNT_NO_ENTITLED_SHIPPING_LINES',
  /** The purchase is not in range for this discount. */
  DISCOUNT_PURCHASE_NOT_IN_RANGE = 'DISCOUNT_PURCHASE_NOT_IN_RANGE',
  /** The quantity is not in range for this discount. */
  DISCOUNT_QUANTITY_NOT_IN_RANGE = 'DISCOUNT_QUANTITY_NOT_IN_RANGE',
  /** The discount usage limit has been reached. */
  DISCOUNT_USAGE_LIMIT_REACHED = 'DISCOUNT_USAGE_LIMIT_REACHED',
  /** A delivery address with the same details already exists on this cart. */
  DUPLICATE_DELIVERY_ADDRESS = 'DUPLICATE_DELIVERY_ADDRESS',
  /** The merchandise does not have enough stock. */
  MERCHANDISE_NOT_ENOUGH_STOCK = 'MERCHANDISE_NOT_ENOUGH_STOCK',
  /** The merchandise is out of stock. */
  MERCHANDISE_OUT_OF_STOCK = 'MERCHANDISE_OUT_OF_STOCK',
  /** Only one-time purchase is available for B2B orders. */
  MERCHANDISE_SELLING_PLAN_NOT_APPLICABLE_ON_COMPANY_LOCATION = 'MERCHANDISE_SELLING_PLAN_NOT_APPLICABLE_ON_COMPANY_LOCATION',
  /** Gift cards are not available as a payment method. */
  PAYMENTS_GIFT_CARDS_UNAVAILABLE = 'PAYMENTS_GIFT_CARDS_UNAVAILABLE'
}

/**
 * A filter used to view a subset of products in a collection matching a specific category value.
 *
 */
type CategoryFilter = {
  /** The id of the category to filter on. */
  id: Scalars['String']['input'];
};

/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 *
 */
type Collection = HasMetafields & Node & OnlineStorePublishable & Trackable & {
  __typename?: 'Collection';
  /** Stripped description of the collection, single line with HTML tags removed. */
  description: Scalars['String']['output'];
  /** The description of the collection, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML']['output'];
  /**
   * A human-friendly unique string for the collection automatically generated from its title.
   * Limit of 255 characters.
   *
   */
  handle: Scalars['String']['output'];
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** Image associated with the collection. */
  image?: Maybe<Image>;
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>;
  /** List of products in the collection. */
  products: ProductConnection;
  /** The collection's SEO information. */
  seo: SEO;
  /** The collection’s name. Limit of 255 characters. */
  title: Scalars['String']['output'];
  /** URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/current/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries, otherwise returns null. */
  trackingParameters?: Maybe<Scalars['String']['output']>;
  /** The date and time when the collection was last modified. */
  updatedAt: Scalars['DateTime']['output'];
};


/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 *
 */
type CollectiondescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 *
 */
type CollectionmetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 *
 */
type CollectionmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};


/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 *
 */
type CollectionproductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<Array<ProductFilter>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ProductCollectionSortKeys>;
};

/**
 * An auto-generated type for paginating through multiple Collections.
 *
 */
type CollectionConnection = {
  __typename?: 'CollectionConnection';
  /** A list of edges. */
  edges: Array<CollectionEdge>;
  /** A list of the nodes contained in CollectionEdge. */
  nodes: Array<Collection>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The total count of Collections. */
  totalCount: Scalars['UnsignedInt64']['output'];
};

/**
 * An auto-generated type which holds one Collection and a cursor during pagination.
 *
 */
type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of CollectionEdge. */
  node: Collection;
};

/** The set of valid sort keys for the Collection query. */
enum CollectionSortKeys {
  /** Sort by the `id` value. */
  ID = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RELEVANCE = 'RELEVANCE',
  /** Sort by the `title` value. */
  TITLE = 'TITLE',
  /** Sort by the `updated_at` value. */
  UPDATED_AT = 'UPDATED_AT'
}

/** A comment on an article. */
type Comment = Node & {
  __typename?: 'Comment';
  /** The comment’s author. */
  author: CommentAuthor;
  /** Stripped content of the comment, single line with HTML tags removed. */
  content: Scalars['String']['output'];
  /** The content of the comment, complete with HTML formatting. */
  contentHtml: Scalars['HTML']['output'];
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
};


/** A comment on an article. */
type CommentcontentArgs = {
  truncateAt?: InputMaybe<Scalars['Int']['input']>;
};

/** The author of a comment. */
type CommentAuthor = {
  __typename?: 'CommentAuthor';
  /** The author's email. */
  email: Scalars['String']['output'];
  /** The author’s name. */
  name: Scalars['String']['output'];
};

/**
 * An auto-generated type for paginating through multiple Comments.
 *
 */
type CommentConnection = {
  __typename?: 'CommentConnection';
  /** A list of edges. */
  edges: Array<CommentEdge>;
  /** A list of the nodes contained in CommentEdge. */
  nodes: Array<Comment>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one Comment and a cursor during pagination.
 *
 */
type CommentEdge = {
  __typename?: 'CommentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of CommentEdge. */
  node: Comment;
};

/** Represents information about a company which is also a customer of the shop. */
type Company = HasMetafields & Node & {
  __typename?: 'Company';
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was created in Shopify. */
  createdAt: Scalars['DateTime']['output'];
  /** A unique externally-supplied ID for the company. */
  externalId?: Maybe<Scalars['String']['output']>;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
  /** The name of the company. */
  name: Scalars['String']['output'];
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was last modified. */
  updatedAt: Scalars['DateTime']['output'];
};


/** Represents information about a company which is also a customer of the shop. */
type CompanymetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/** Represents information about a company which is also a customer of the shop. */
type CompanymetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};

/** A company's main point of contact. */
type CompanyContact = Node & {
  __typename?: 'CompanyContact';
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was created in Shopify. */
  createdAt: Scalars['DateTime']['output'];
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The company contact's locale (language). */
  locale?: Maybe<Scalars['String']['output']>;
  /** The company contact's job title. */
  title?: Maybe<Scalars['String']['output']>;
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was last modified. */
  updatedAt: Scalars['DateTime']['output'];
};

/** A company's location. */
type CompanyLocation = HasMetafields & Node & {
  __typename?: 'CompanyLocation';
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was created in Shopify. */
  createdAt: Scalars['DateTime']['output'];
  /** A unique externally-supplied ID for the company. */
  externalId?: Maybe<Scalars['String']['output']>;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The preferred locale of the company location. */
  locale?: Maybe<Scalars['String']['output']>;
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
  /** The name of the company location. */
  name: Scalars['String']['output'];
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was last modified. */
  updatedAt: Scalars['DateTime']['output'];
};


/** A company's location. */
type CompanyLocationmetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/** A company's location. */
type CompanyLocationmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};

/** The action for the 3DS payment redirect. */
type CompletePaymentChallenge = {
  __typename?: 'CompletePaymentChallenge';
  /** The URL for the 3DS payment redirect. */
  redirectUrl?: Maybe<Scalars['URL']['output']>;
};

/** An error that occurred during a cart completion attempt. */
type CompletionError = {
  __typename?: 'CompletionError';
  /** The error code. */
  code: CompletionErrorCode;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** The code of the error that occurred during a cart completion attempt. */
enum CompletionErrorCode {
  ERROR = 'ERROR',
  INVENTORY_RESERVATION_ERROR = 'INVENTORY_RESERVATION_ERROR',
  PAYMENT_AMOUNT_TOO_SMALL = 'PAYMENT_AMOUNT_TOO_SMALL',
  PAYMENT_CALL_ISSUER = 'PAYMENT_CALL_ISSUER',
  PAYMENT_CARD_DECLINED = 'PAYMENT_CARD_DECLINED',
  PAYMENT_ERROR = 'PAYMENT_ERROR',
  PAYMENT_GATEWAY_NOT_ENABLED_ERROR = 'PAYMENT_GATEWAY_NOT_ENABLED_ERROR',
  PAYMENT_INSUFFICIENT_FUNDS = 'PAYMENT_INSUFFICIENT_FUNDS',
  PAYMENT_INVALID_BILLING_ADDRESS = 'PAYMENT_INVALID_BILLING_ADDRESS',
  PAYMENT_INVALID_CREDIT_CARD = 'PAYMENT_INVALID_CREDIT_CARD',
  PAYMENT_INVALID_CURRENCY = 'PAYMENT_INVALID_CURRENCY',
  PAYMENT_INVALID_PAYMENT_METHOD = 'PAYMENT_INVALID_PAYMENT_METHOD',
  PAYMENT_TRANSIENT_ERROR = 'PAYMENT_TRANSIENT_ERROR'
}

/** Represents information about the grouped merchandise in the cart. */
type ComponentizableCartLine = BaseCartLine & Node & {
  __typename?: 'ComponentizableCartLine';
  /** An attribute associated with the cart line. */
  attribute?: Maybe<Attribute>;
  /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
  attributes: Array<Attribute>;
  /** The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout. */
  cost: CartLineCost;
  /** The discounts that have been applied to the cart line. */
  discountAllocations: Array<CartDiscountAllocation>;
  /**
   * The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.
   * @deprecated Use `cost` instead.
   */
  estimatedCost: CartLineEstimatedCost;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The components of the line item. */
  lineComponents: Array<CartLine>;
  /** The merchandise that the buyer intends to purchase. */
  merchandise: Merchandise;
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars['Int']['output'];
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation?: Maybe<SellingPlanAllocation>;
};


/** Represents information about the grouped merchandise in the cart. */
type ComponentizableCartLineattributeArgs = {
  key: Scalars['String']['input'];
};

/** Details for count of elements. */
type Count = {
  __typename?: 'Count';
  /** Count of elements. */
  count: Scalars['Int']['output'];
  /** Precision of count, how exact is the value. */
  precision: CountPrecision;
};

/** The precision of the value returned by a count field. */
enum CountPrecision {
  /** The count is at least the value. A limit was reached. */
  AT_LEAST = 'AT_LEAST',
  /** The count is exactly the value. */
  EXACT = 'EXACT'
}

/** A country. */
type Country = {
  __typename?: 'Country';
  /** The languages available for the country. */
  availableLanguages: Array<Language>;
  /** The currency of the country. */
  currency: Currency;
  /** The default language for the country. */
  defaultLanguage: Language;
  /** The ISO code of the country. */
  isoCode: CountryCode;
  /**
   * The market that includes this country.
   * @deprecated This `market` field will be removed in a future version of the API.
   */
  market?: Maybe<Market>;
  /** The name of the country. */
  name: Scalars['String']['output'];
  /** The unit system used in the country. */
  unitSystem: UnitSystem;
};

/**
 * The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.
 * If a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision
 * of another country. For example, the territories associated with Spain are represented by the country code `ES`,
 * and the territories associated with the United States of America are represented by the country code `US`.
 *
 */
enum CountryCode {
  /** Ascension Island. */
  AC = 'AC',
  /** Andorra. */
  AD = 'AD',
  /** United Arab Emirates. */
  AE = 'AE',
  /** Afghanistan. */
  AF = 'AF',
  /** Antigua & Barbuda. */
  AG = 'AG',
  /** Anguilla. */
  AI = 'AI',
  /** Albania. */
  AL = 'AL',
  /** Armenia. */
  AM = 'AM',
  /** Netherlands Antilles. */
  AN = 'AN',
  /** Angola. */
  AO = 'AO',
  /** Argentina. */
  AR = 'AR',
  /** Austria. */
  AT = 'AT',
  /** Australia. */
  AU = 'AU',
  /** Aruba. */
  AW = 'AW',
  /** Åland Islands. */
  AX = 'AX',
  /** Azerbaijan. */
  AZ = 'AZ',
  /** Bosnia & Herzegovina. */
  BA = 'BA',
  /** Barbados. */
  BB = 'BB',
  /** Bangladesh. */
  BD = 'BD',
  /** Belgium. */
  BE = 'BE',
  /** Burkina Faso. */
  BF = 'BF',
  /** Bulgaria. */
  BG = 'BG',
  /** Bahrain. */
  BH = 'BH',
  /** Burundi. */
  BI = 'BI',
  /** Benin. */
  BJ = 'BJ',
  /** St. Barthélemy. */
  BL = 'BL',
  /** Bermuda. */
  BM = 'BM',
  /** Brunei. */
  BN = 'BN',
  /** Bolivia. */
  BO = 'BO',
  /** Caribbean Netherlands. */
  BQ = 'BQ',
  /** Brazil. */
  BR = 'BR',
  /** Bahamas. */
  BS = 'BS',
  /** Bhutan. */
  BT = 'BT',
  /** Bouvet Island. */
  BV = 'BV',
  /** Botswana. */
  BW = 'BW',
  /** Belarus. */
  BY = 'BY',
  /** Belize. */
  BZ = 'BZ',
  /** Canada. */
  CA = 'CA',
  /** Cocos (Keeling) Islands. */
  CC = 'CC',
  /** Congo - Kinshasa. */
  CD = 'CD',
  /** Central African Republic. */
  CF = 'CF',
  /** Congo - Brazzaville. */
  CG = 'CG',
  /** Switzerland. */
  CH = 'CH',
  /** Côte d’Ivoire. */
  CI = 'CI',
  /** Cook Islands. */
  CK = 'CK',
  /** Chile. */
  CL = 'CL',
  /** Cameroon. */
  CM = 'CM',
  /** China. */
  CN = 'CN',
  /** Colombia. */
  CO = 'CO',
  /** Costa Rica. */
  CR = 'CR',
  /** Cuba. */
  CU = 'CU',
  /** Cape Verde. */
  CV = 'CV',
  /** Curaçao. */
  CW = 'CW',
  /** Christmas Island. */
  CX = 'CX',
  /** Cyprus. */
  CY = 'CY',
  /** Czechia. */
  CZ = 'CZ',
  /** Germany. */
  DE = 'DE',
  /** Djibouti. */
  DJ = 'DJ',
  /** Denmark. */
  DK = 'DK',
  /** Dominica. */
  DM = 'DM',
  /** Dominican Republic. */
  DO = 'DO',
  /** Algeria. */
  DZ = 'DZ',
  /** Ecuador. */
  EC = 'EC',
  /** Estonia. */
  EE = 'EE',
  /** Egypt. */
  EG = 'EG',
  /** Western Sahara. */
  EH = 'EH',
  /** Eritrea. */
  ER = 'ER',
  /** Spain. */
  ES = 'ES',
  /** Ethiopia. */
  ET = 'ET',
  /** Finland. */
  FI = 'FI',
  /** Fiji. */
  FJ = 'FJ',
  /** Falkland Islands. */
  FK = 'FK',
  /** Faroe Islands. */
  FO = 'FO',
  /** France. */
  FR = 'FR',
  /** Gabon. */
  GA = 'GA',
  /** United Kingdom. */
  GB = 'GB',
  /** Grenada. */
  GD = 'GD',
  /** Georgia. */
  GE = 'GE',
  /** French Guiana. */
  GF = 'GF',
  /** Guernsey. */
  GG = 'GG',
  /** Ghana. */
  GH = 'GH',
  /** Gibraltar. */
  GI = 'GI',
  /** Greenland. */
  GL = 'GL',
  /** Gambia. */
  GM = 'GM',
  /** Guinea. */
  GN = 'GN',
  /** Guadeloupe. */
  GP = 'GP',
  /** Equatorial Guinea. */
  GQ = 'GQ',
  /** Greece. */
  GR = 'GR',
  /** South Georgia & South Sandwich Islands. */
  GS = 'GS',
  /** Guatemala. */
  GT = 'GT',
  /** Guinea-Bissau. */
  GW = 'GW',
  /** Guyana. */
  GY = 'GY',
  /** Hong Kong SAR. */
  HK = 'HK',
  /** Heard & McDonald Islands. */
  HM = 'HM',
  /** Honduras. */
  HN = 'HN',
  /** Croatia. */
  HR = 'HR',
  /** Haiti. */
  HT = 'HT',
  /** Hungary. */
  HU = 'HU',
  /** Indonesia. */
  ID = 'ID',
  /** Ireland. */
  IE = 'IE',
  /** Israel. */
  IL = 'IL',
  /** Isle of Man. */
  IM = 'IM',
  /** India. */
  IN = 'IN',
  /** British Indian Ocean Territory. */
  IO = 'IO',
  /** Iraq. */
  IQ = 'IQ',
  /** Iran. */
  IR = 'IR',
  /** Iceland. */
  IS = 'IS',
  /** Italy. */
  IT = 'IT',
  /** Jersey. */
  JE = 'JE',
  /** Jamaica. */
  JM = 'JM',
  /** Jordan. */
  JO = 'JO',
  /** Japan. */
  JP = 'JP',
  /** Kenya. */
  KE = 'KE',
  /** Kyrgyzstan. */
  KG = 'KG',
  /** Cambodia. */
  KH = 'KH',
  /** Kiribati. */
  KI = 'KI',
  /** Comoros. */
  KM = 'KM',
  /** St. Kitts & Nevis. */
  KN = 'KN',
  /** North Korea. */
  KP = 'KP',
  /** South Korea. */
  KR = 'KR',
  /** Kuwait. */
  KW = 'KW',
  /** Cayman Islands. */
  KY = 'KY',
  /** Kazakhstan. */
  KZ = 'KZ',
  /** Laos. */
  LA = 'LA',
  /** Lebanon. */
  LB = 'LB',
  /** St. Lucia. */
  LC = 'LC',
  /** Liechtenstein. */
  LI = 'LI',
  /** Sri Lanka. */
  LK = 'LK',
  /** Liberia. */
  LR = 'LR',
  /** Lesotho. */
  LS = 'LS',
  /** Lithuania. */
  LT = 'LT',
  /** Luxembourg. */
  LU = 'LU',
  /** Latvia. */
  LV = 'LV',
  /** Libya. */
  LY = 'LY',
  /** Morocco. */
  MA = 'MA',
  /** Monaco. */
  MC = 'MC',
  /** Moldova. */
  MD = 'MD',
  /** Montenegro. */
  ME = 'ME',
  /** St. Martin. */
  MF = 'MF',
  /** Madagascar. */
  MG = 'MG',
  /** North Macedonia. */
  MK = 'MK',
  /** Mali. */
  ML = 'ML',
  /** Myanmar (Burma). */
  MM = 'MM',
  /** Mongolia. */
  MN = 'MN',
  /** Macao SAR. */
  MO = 'MO',
  /** Martinique. */
  MQ = 'MQ',
  /** Mauritania. */
  MR = 'MR',
  /** Montserrat. */
  MS = 'MS',
  /** Malta. */
  MT = 'MT',
  /** Mauritius. */
  MU = 'MU',
  /** Maldives. */
  MV = 'MV',
  /** Malawi. */
  MW = 'MW',
  /** Mexico. */
  MX = 'MX',
  /** Malaysia. */
  MY = 'MY',
  /** Mozambique. */
  MZ = 'MZ',
  /** Namibia. */
  NA = 'NA',
  /** New Caledonia. */
  NC = 'NC',
  /** Niger. */
  NE = 'NE',
  /** Norfolk Island. */
  NF = 'NF',
  /** Nigeria. */
  NG = 'NG',
  /** Nicaragua. */
  NI = 'NI',
  /** Netherlands. */
  NL = 'NL',
  /** Norway. */
  NO = 'NO',
  /** Nepal. */
  NP = 'NP',
  /** Nauru. */
  NR = 'NR',
  /** Niue. */
  NU = 'NU',
  /** New Zealand. */
  NZ = 'NZ',
  /** Oman. */
  OM = 'OM',
  /** Panama. */
  PA = 'PA',
  /** Peru. */
  PE = 'PE',
  /** French Polynesia. */
  PF = 'PF',
  /** Papua New Guinea. */
  PG = 'PG',
  /** Philippines. */
  PH = 'PH',
  /** Pakistan. */
  PK = 'PK',
  /** Poland. */
  PL = 'PL',
  /** St. Pierre & Miquelon. */
  PM = 'PM',
  /** Pitcairn Islands. */
  PN = 'PN',
  /** Palestinian Territories. */
  PS = 'PS',
  /** Portugal. */
  PT = 'PT',
  /** Paraguay. */
  PY = 'PY',
  /** Qatar. */
  QA = 'QA',
  /** Réunion. */
  RE = 'RE',
  /** Romania. */
  RO = 'RO',
  /** Serbia. */
  RS = 'RS',
  /** Russia. */
  RU = 'RU',
  /** Rwanda. */
  RW = 'RW',
  /** Saudi Arabia. */
  SA = 'SA',
  /** Solomon Islands. */
  SB = 'SB',
  /** Seychelles. */
  SC = 'SC',
  /** Sudan. */
  SD = 'SD',
  /** Sweden. */
  SE = 'SE',
  /** Singapore. */
  SG = 'SG',
  /** St. Helena. */
  SH = 'SH',
  /** Slovenia. */
  SI = 'SI',
  /** Svalbard & Jan Mayen. */
  SJ = 'SJ',
  /** Slovakia. */
  SK = 'SK',
  /** Sierra Leone. */
  SL = 'SL',
  /** San Marino. */
  SM = 'SM',
  /** Senegal. */
  SN = 'SN',
  /** Somalia. */
  SO = 'SO',
  /** Suriname. */
  SR = 'SR',
  /** South Sudan. */
  SS = 'SS',
  /** São Tomé & Príncipe. */
  ST = 'ST',
  /** El Salvador. */
  SV = 'SV',
  /** Sint Maarten. */
  SX = 'SX',
  /** Syria. */
  SY = 'SY',
  /** Eswatini. */
  SZ = 'SZ',
  /** Tristan da Cunha. */
  TA = 'TA',
  /** Turks & Caicos Islands. */
  TC = 'TC',
  /** Chad. */
  TD = 'TD',
  /** French Southern Territories. */
  TF = 'TF',
  /** Togo. */
  TG = 'TG',
  /** Thailand. */
  TH = 'TH',
  /** Tajikistan. */
  TJ = 'TJ',
  /** Tokelau. */
  TK = 'TK',
  /** Timor-Leste. */
  TL = 'TL',
  /** Turkmenistan. */
  TM = 'TM',
  /** Tunisia. */
  TN = 'TN',
  /** Tonga. */
  TO = 'TO',
  /** Türkiye. */
  TR = 'TR',
  /** Trinidad & Tobago. */
  TT = 'TT',
  /** Tuvalu. */
  TV = 'TV',
  /** Taiwan. */
  TW = 'TW',
  /** Tanzania. */
  TZ = 'TZ',
  /** Ukraine. */
  UA = 'UA',
  /** Uganda. */
  UG = 'UG',
  /** U.S. Outlying Islands. */
  UM = 'UM',
  /** United States. */
  US = 'US',
  /** Uruguay. */
  UY = 'UY',
  /** Uzbekistan. */
  UZ = 'UZ',
  /** Vatican City. */
  VA = 'VA',
  /** St. Vincent & Grenadines. */
  VC = 'VC',
  /** Venezuela. */
  VE = 'VE',
  /** British Virgin Islands. */
  VG = 'VG',
  /** Vietnam. */
  VN = 'VN',
  /** Vanuatu. */
  VU = 'VU',
  /** Wallis & Futuna. */
  WF = 'WF',
  /** Samoa. */
  WS = 'WS',
  /** Kosovo. */
  XK = 'XK',
  /** Yemen. */
  YE = 'YE',
  /** Mayotte. */
  YT = 'YT',
  /** South Africa. */
  ZA = 'ZA',
  /** Zambia. */
  ZM = 'ZM',
  /** Zimbabwe. */
  ZW = 'ZW',
  /** Unknown Region. */
  ZZ = 'ZZ'
}

/** The part of the image that should remain after cropping. */
enum CropRegion {
  /** Keep the bottom of the image. */
  BOTTOM = 'BOTTOM',
  /** Keep the center of the image. */
  CENTER = 'CENTER',
  /** Keep the left of the image. */
  LEFT = 'LEFT',
  /** Keep the right of the image. */
  RIGHT = 'RIGHT',
  /** Keep the top of the image. */
  TOP = 'TOP'
}

/** A currency. */
type Currency = {
  __typename?: 'Currency';
  /** The ISO code of the currency. */
  isoCode: CurrencyCode;
  /** The name of the currency. */
  name: Scalars['String']['output'];
  /** The symbol of the currency. */
  symbol: Scalars['String']['output'];
};

/**
 * The three-letter currency codes that represent the world currencies used in
 * stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 *
 */
enum CurrencyCode {
  /** United Arab Emirates Dirham (AED). */
  AED = 'AED',
  /** Afghan Afghani (AFN). */
  AFN = 'AFN',
  /** Albanian Lek (ALL). */
  ALL = 'ALL',
  /** Armenian Dram (AMD). */
  AMD = 'AMD',
  /** Netherlands Antillean Guilder. */
  ANG = 'ANG',
  /** Angolan Kwanza (AOA). */
  AOA = 'AOA',
  /** Argentine Pesos (ARS). */
  ARS = 'ARS',
  /** Australian Dollars (AUD). */
  AUD = 'AUD',
  /** Aruban Florin (AWG). */
  AWG = 'AWG',
  /** Azerbaijani Manat (AZN). */
  AZN = 'AZN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  BAM = 'BAM',
  /** Barbadian Dollar (BBD). */
  BBD = 'BBD',
  /** Bangladesh Taka (BDT). */
  BDT = 'BDT',
  /** Bulgarian Lev (BGN). */
  BGN = 'BGN',
  /** Bahraini Dinar (BHD). */
  BHD = 'BHD',
  /** Burundian Franc (BIF). */
  BIF = 'BIF',
  /** Bermudian Dollar (BMD). */
  BMD = 'BMD',
  /** Brunei Dollar (BND). */
  BND = 'BND',
  /** Bolivian Boliviano (BOB). */
  BOB = 'BOB',
  /** Brazilian Real (BRL). */
  BRL = 'BRL',
  /** Bahamian Dollar (BSD). */
  BSD = 'BSD',
  /** Bhutanese Ngultrum (BTN). */
  BTN = 'BTN',
  /** Botswana Pula (BWP). */
  BWP = 'BWP',
  /** Belarusian Ruble (BYN). */
  BYN = 'BYN',
  /**
   * Belarusian Ruble (BYR).
   * @deprecated `BYR` is deprecated. Use `BYN` available from version `2021-01` onwards instead.
   */
  BYR = 'BYR',
  /** Belize Dollar (BZD). */
  BZD = 'BZD',
  /** Canadian Dollars (CAD). */
  CAD = 'CAD',
  /** Congolese franc (CDF). */
  CDF = 'CDF',
  /** Swiss Francs (CHF). */
  CHF = 'CHF',
  /** Chilean Peso (CLP). */
  CLP = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  CNY = 'CNY',
  /** Colombian Peso (COP). */
  COP = 'COP',
  /** Costa Rican Colones (CRC). */
  CRC = 'CRC',
  /** Cape Verdean escudo (CVE). */
  CVE = 'CVE',
  /** Czech Koruny (CZK). */
  CZK = 'CZK',
  /** Djiboutian Franc (DJF). */
  DJF = 'DJF',
  /** Danish Kroner (DKK). */
  DKK = 'DKK',
  /** Dominican Peso (DOP). */
  DOP = 'DOP',
  /** Algerian Dinar (DZD). */
  DZD = 'DZD',
  /** Egyptian Pound (EGP). */
  EGP = 'EGP',
  /** Eritrean Nakfa (ERN). */
  ERN = 'ERN',
  /** Ethiopian Birr (ETB). */
  ETB = 'ETB',
  /** Euro (EUR). */
  EUR = 'EUR',
  /** Fijian Dollars (FJD). */
  FJD = 'FJD',
  /** Falkland Islands Pounds (FKP). */
  FKP = 'FKP',
  /** United Kingdom Pounds (GBP). */
  GBP = 'GBP',
  /** Georgian Lari (GEL). */
  GEL = 'GEL',
  /** Ghanaian Cedi (GHS). */
  GHS = 'GHS',
  /** Gibraltar Pounds (GIP). */
  GIP = 'GIP',
  /** Gambian Dalasi (GMD). */
  GMD = 'GMD',
  /** Guinean Franc (GNF). */
  GNF = 'GNF',
  /** Guatemalan Quetzal (GTQ). */
  GTQ = 'GTQ',
  /** Guyanese Dollar (GYD). */
  GYD = 'GYD',
  /** Hong Kong Dollars (HKD). */
  HKD = 'HKD',
  /** Honduran Lempira (HNL). */
  HNL = 'HNL',
  /** Croatian Kuna (HRK). */
  HRK = 'HRK',
  /** Haitian Gourde (HTG). */
  HTG = 'HTG',
  /** Hungarian Forint (HUF). */
  HUF = 'HUF',
  /** Indonesian Rupiah (IDR). */
  IDR = 'IDR',
  /** Israeli New Shekel (NIS). */
  ILS = 'ILS',
  /** Indian Rupees (INR). */
  INR = 'INR',
  /** Iraqi Dinar (IQD). */
  IQD = 'IQD',
  /** Iranian Rial (IRR). */
  IRR = 'IRR',
  /** Icelandic Kronur (ISK). */
  ISK = 'ISK',
  /** Jersey Pound. */
  JEP = 'JEP',
  /** Jamaican Dollars (JMD). */
  JMD = 'JMD',
  /** Jordanian Dinar (JOD). */
  JOD = 'JOD',
  /** Japanese Yen (JPY). */
  JPY = 'JPY',
  /** Kenyan Shilling (KES). */
  KES = 'KES',
  /** Kyrgyzstani Som (KGS). */
  KGS = 'KGS',
  /** Cambodian Riel. */
  KHR = 'KHR',
  /** Kiribati Dollar (KID). */
  KID = 'KID',
  /** Comorian Franc (KMF). */
  KMF = 'KMF',
  /** South Korean Won (KRW). */
  KRW = 'KRW',
  /** Kuwaiti Dinar (KWD). */
  KWD = 'KWD',
  /** Cayman Dollars (KYD). */
  KYD = 'KYD',
  /** Kazakhstani Tenge (KZT). */
  KZT = 'KZT',
  /** Laotian Kip (LAK). */
  LAK = 'LAK',
  /** Lebanese Pounds (LBP). */
  LBP = 'LBP',
  /** Sri Lankan Rupees (LKR). */
  LKR = 'LKR',
  /** Liberian Dollar (LRD). */
  LRD = 'LRD',
  /** Lesotho Loti (LSL). */
  LSL = 'LSL',
  /** Lithuanian Litai (LTL). */
  LTL = 'LTL',
  /** Latvian Lati (LVL). */
  LVL = 'LVL',
  /** Libyan Dinar (LYD). */
  LYD = 'LYD',
  /** Moroccan Dirham. */
  MAD = 'MAD',
  /** Moldovan Leu (MDL). */
  MDL = 'MDL',
  /** Malagasy Ariary (MGA). */
  MGA = 'MGA',
  /** Macedonia Denar (MKD). */
  MKD = 'MKD',
  /** Burmese Kyat (MMK). */
  MMK = 'MMK',
  /** Mongolian Tugrik. */
  MNT = 'MNT',
  /** Macanese Pataca (MOP). */
  MOP = 'MOP',
  /** Mauritanian Ouguiya (MRU). */
  MRU = 'MRU',
  /** Mauritian Rupee (MUR). */
  MUR = 'MUR',
  /** Maldivian Rufiyaa (MVR). */
  MVR = 'MVR',
  /** Malawian Kwacha (MWK). */
  MWK = 'MWK',
  /** Mexican Pesos (MXN). */
  MXN = 'MXN',
  /** Malaysian Ringgits (MYR). */
  MYR = 'MYR',
  /** Mozambican Metical. */
  MZN = 'MZN',
  /** Namibian Dollar. */
  NAD = 'NAD',
  /** Nigerian Naira (NGN). */
  NGN = 'NGN',
  /** Nicaraguan Córdoba (NIO). */
  NIO = 'NIO',
  /** Norwegian Kroner (NOK). */
  NOK = 'NOK',
  /** Nepalese Rupee (NPR). */
  NPR = 'NPR',
  /** New Zealand Dollars (NZD). */
  NZD = 'NZD',
  /** Omani Rial (OMR). */
  OMR = 'OMR',
  /** Panamian Balboa (PAB). */
  PAB = 'PAB',
  /** Peruvian Nuevo Sol (PEN). */
  PEN = 'PEN',
  /** Papua New Guinean Kina (PGK). */
  PGK = 'PGK',
  /** Philippine Peso (PHP). */
  PHP = 'PHP',
  /** Pakistani Rupee (PKR). */
  PKR = 'PKR',
  /** Polish Zlotych (PLN). */
  PLN = 'PLN',
  /** Paraguayan Guarani (PYG). */
  PYG = 'PYG',
  /** Qatari Rial (QAR). */
  QAR = 'QAR',
  /** Romanian Lei (RON). */
  RON = 'RON',
  /** Serbian dinar (RSD). */
  RSD = 'RSD',
  /** Russian Rubles (RUB). */
  RUB = 'RUB',
  /** Rwandan Franc (RWF). */
  RWF = 'RWF',
  /** Saudi Riyal (SAR). */
  SAR = 'SAR',
  /** Solomon Islands Dollar (SBD). */
  SBD = 'SBD',
  /** Seychellois Rupee (SCR). */
  SCR = 'SCR',
  /** Sudanese Pound (SDG). */
  SDG = 'SDG',
  /** Swedish Kronor (SEK). */
  SEK = 'SEK',
  /** Singapore Dollars (SGD). */
  SGD = 'SGD',
  /** Saint Helena Pounds (SHP). */
  SHP = 'SHP',
  /** Sierra Leonean Leone (SLL). */
  SLL = 'SLL',
  /** Somali Shilling (SOS). */
  SOS = 'SOS',
  /** Surinamese Dollar (SRD). */
  SRD = 'SRD',
  /** South Sudanese Pound (SSP). */
  SSP = 'SSP',
  /**
   * Sao Tome And Principe Dobra (STD).
   * @deprecated `STD` is deprecated. Use `STN` available from version `2022-07` onwards instead.
   */
  STD = 'STD',
  /** Sao Tome And Principe Dobra (STN). */
  STN = 'STN',
  /** Syrian Pound (SYP). */
  SYP = 'SYP',
  /** Swazi Lilangeni (SZL). */
  SZL = 'SZL',
  /** Thai baht (THB). */
  THB = 'THB',
  /** Tajikistani Somoni (TJS). */
  TJS = 'TJS',
  /** Turkmenistani Manat (TMT). */
  TMT = 'TMT',
  /** Tunisian Dinar (TND). */
  TND = 'TND',
  /** Tongan Pa'anga (TOP). */
  TOP = 'TOP',
  /** Turkish Lira (TRY). */
  TRY = 'TRY',
  /** Trinidad and Tobago Dollars (TTD). */
  TTD = 'TTD',
  /** Taiwan Dollars (TWD). */
  TWD = 'TWD',
  /** Tanzanian Shilling (TZS). */
  TZS = 'TZS',
  /** Ukrainian Hryvnia (UAH). */
  UAH = 'UAH',
  /** Ugandan Shilling (UGX). */
  UGX = 'UGX',
  /** United States Dollars (USD). */
  USD = 'USD',
  /** Uruguayan Pesos (UYU). */
  UYU = 'UYU',
  /** Uzbekistan som (UZS). */
  UZS = 'UZS',
  /** Venezuelan Bolivares (VED). */
  VED = 'VED',
  /**
   * Venezuelan Bolivares (VEF).
   * @deprecated `VEF` is deprecated. Use `VES` available from version `2020-10` onwards instead.
   */
  VEF = 'VEF',
  /** Venezuelan Bolivares Soberanos (VES). */
  VES = 'VES',
  /** Vietnamese đồng (VND). */
  VND = 'VND',
  /** Vanuatu Vatu (VUV). */
  VUV = 'VUV',
  /** Samoan Tala (WST). */
  WST = 'WST',
  /** Central African CFA Franc (XAF). */
  XAF = 'XAF',
  /** East Caribbean Dollar (XCD). */
  XCD = 'XCD',
  /** West African CFA franc (XOF). */
  XOF = 'XOF',
  /** CFP Franc (XPF). */
  XPF = 'XPF',
  /** Unrecognized currency. */
  XXX = 'XXX',
  /** Yemeni Rial (YER). */
  YER = 'YER',
  /** South African Rand (ZAR). */
  ZAR = 'ZAR',
  /** Zambian Kwacha (ZMW). */
  ZMW = 'ZMW'
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
type Customer = HasMetafields & {
  __typename?: 'Customer';
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing: Scalars['Boolean']['output'];
  /** A list of addresses for the customer. */
  addresses: MailingAddressConnection;
  /** The date and time when the customer was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The customer’s default address. */
  defaultAddress?: Maybe<MailingAddress>;
  /** The customer’s name, email or phone number. */
  displayName: Scalars['String']['output'];
  /** The customer’s email address. */
  email?: Maybe<Scalars['String']['output']>;
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** A unique ID for the customer. */
  id: Scalars['ID']['output'];
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
  /** The number of orders that the customer has made at the store in their lifetime. */
  numberOfOrders: Scalars['UnsignedInt64']['output'];
  /** The orders associated with the customer. */
  orders: OrderConnection;
  /** The customer’s phone number. */
  phone?: Maybe<Scalars['String']['output']>;
  /**
   * A comma separated list of tags that have been added to the customer.
   * Additional access scope required: unauthenticated_read_customer_tags.
   *
   */
  tags: Array<Scalars['String']['output']>;
  /** The date and time when the customer information was updated. */
  updatedAt: Scalars['DateTime']['output'];
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
type CustomeraddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
type CustomermetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
type CustomermetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
type CustomerordersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<OrderSortKeys>;
};

/** A CustomerAccessToken represents the unique token required to make modifications to the customer object. */
type CustomerAccessToken = {
  __typename?: 'CustomerAccessToken';
  /** The customer’s access token. */
  accessToken: Scalars['String']['output'];
  /** The date and time when the customer access token expires. */
  expiresAt: Scalars['DateTime']['output'];
};

/** The input fields required to create a customer access token. */
type CustomerAccessTokenCreateInput = {
  /** The email associated to the customer. */
  email: Scalars['String']['input'];
  /** The login password to be used by the customer. */
  password: Scalars['String']['input'];
};

/** Return type for `customerAccessTokenCreate` mutation. */
type CustomerAccessTokenCreatePayload = {
  __typename?: 'CustomerAccessTokenCreatePayload';
  /** The newly created customer access token object. */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `customerAccessTokenCreateWithMultipass` mutation. */
type CustomerAccessTokenCreateWithMultipassPayload = {
  __typename?: 'CustomerAccessTokenCreateWithMultipassPayload';
  /** An access token object associated with the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
};

/** Return type for `customerAccessTokenDelete` mutation. */
type CustomerAccessTokenDeletePayload = {
  __typename?: 'CustomerAccessTokenDeletePayload';
  /** The destroyed access token. */
  deletedAccessToken?: Maybe<Scalars['String']['output']>;
  /** ID of the destroyed customer access token. */
  deletedCustomerAccessTokenId?: Maybe<Scalars['String']['output']>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `customerAccessTokenRenew` mutation. */
type CustomerAccessTokenRenewPayload = {
  __typename?: 'CustomerAccessTokenRenewPayload';
  /** The renewed customer access token object. */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `customerActivateByUrl` mutation. */
type CustomerActivateByUrlPayload = {
  __typename?: 'CustomerActivateByUrlPayload';
  /** The customer that was activated. */
  customer?: Maybe<Customer>;
  /** A new customer access token for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
};

/** The input fields to activate a customer. */
type CustomerActivateInput = {
  /** The activation token required to activate the customer. */
  activationToken: Scalars['String']['input'];
  /** New password that will be set during activation. */
  password: Scalars['String']['input'];
};

/** Return type for `customerActivate` mutation. */
type CustomerActivatePayload = {
  __typename?: 'CustomerActivatePayload';
  /** The customer object. */
  customer?: Maybe<Customer>;
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `customerAddressCreate` mutation. */
type CustomerAddressCreatePayload = {
  __typename?: 'CustomerAddressCreatePayload';
  /** The new customer address object. */
  customerAddress?: Maybe<MailingAddress>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `customerAddressDelete` mutation. */
type CustomerAddressDeletePayload = {
  __typename?: 'CustomerAddressDeletePayload';
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /** ID of the deleted customer address. */
  deletedCustomerAddressId?: Maybe<Scalars['String']['output']>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `customerAddressUpdate` mutation. */
type CustomerAddressUpdatePayload = {
  __typename?: 'CustomerAddressUpdatePayload';
  /** The customer’s updated mailing address. */
  customerAddress?: Maybe<MailingAddress>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** The input fields to create a new customer. */
type CustomerCreateInput = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer’s email. */
  email: Scalars['String']['input'];
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** The login password used by the customer. */
  password: Scalars['String']['input'];
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** Return type for `customerCreate` mutation. */
type CustomerCreatePayload = {
  __typename?: 'CustomerCreatePayload';
  /** The created customer object. */
  customer?: Maybe<Customer>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `customerDefaultAddressUpdate` mutation. */
type CustomerDefaultAddressUpdatePayload = {
  __typename?: 'CustomerDefaultAddressUpdatePayload';
  /** The updated customer object. */
  customer?: Maybe<Customer>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Possible error codes that can be returned by `CustomerUserError`. */
enum CustomerErrorCode {
  /** Customer already enabled. */
  ALREADY_ENABLED = 'ALREADY_ENABLED',
  /** Input email contains an invalid domain name. */
  BAD_DOMAIN = 'BAD_DOMAIN',
  /** The input value is blank. */
  BLANK = 'BLANK',
  /** Input contains HTML tags. */
  CONTAINS_HTML_TAGS = 'CONTAINS_HTML_TAGS',
  /** Input contains URL. */
  CONTAINS_URL = 'CONTAINS_URL',
  /** Customer is disabled. */
  CUSTOMER_DISABLED = 'CUSTOMER_DISABLED',
  /** The input value is invalid. */
  INVALID = 'INVALID',
  /** Multipass token is not valid. */
  INVALID_MULTIPASS_REQUEST = 'INVALID_MULTIPASS_REQUEST',
  /** Address does not exist. */
  NOT_FOUND = 'NOT_FOUND',
  /** Input password starts or ends with whitespace. */
  PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
  /** The input value is already taken. */
  TAKEN = 'TAKEN',
  /** Invalid activation token. */
  TOKEN_INVALID = 'TOKEN_INVALID',
  /** The input value is too long. */
  TOO_LONG = 'TOO_LONG',
  /** The input value is too short. */
  TOO_SHORT = 'TOO_SHORT',
  /** Unidentified customer. */
  UNIDENTIFIED_CUSTOMER = 'UNIDENTIFIED_CUSTOMER'
}

/** Return type for `customerRecover` mutation. */
type CustomerRecoverPayload = {
  __typename?: 'CustomerRecoverPayload';
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `customerResetByUrl` mutation. */
type CustomerResetByUrlPayload = {
  __typename?: 'CustomerResetByUrlPayload';
  /** The customer object which was reset. */
  customer?: Maybe<Customer>;
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** The input fields to reset a customer's password. */
type CustomerResetInput = {
  /** New password that will be set as part of the reset password process. */
  password: Scalars['String']['input'];
  /** The reset token required to reset the customer’s password. */
  resetToken: Scalars['String']['input'];
};

/** Return type for `customerReset` mutation. */
type CustomerResetPayload = {
  __typename?: 'CustomerResetPayload';
  /** The customer object which was reset. */
  customer?: Maybe<Customer>;
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** The input fields to update the Customer information. */
type CustomerUpdateInput = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer’s email. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** The login password used by the customer. */
  password?: InputMaybe<Scalars['String']['input']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.
   *
   */
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** Return type for `customerUpdate` mutation. */
type CustomerUpdatePayload = {
  __typename?: 'CustomerUpdatePayload';
  /** The updated customer object. */
  customer?: Maybe<Customer>;
  /**
   * The newly created customer access token. If the customer's password is updated, all previous access tokens
   * (including the one used to perform this mutation) become invalid, and a new token is generated.
   *
   */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Represents an error that happens during execution of a customer mutation. */
type CustomerUserError = DisplayableError & {
  __typename?: 'CustomerUserError';
  /** The error code. */
  code?: Maybe<CustomerErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** A delivery address of the buyer that is interacting with the cart. */
type DeliveryAddress = MailingAddress;

/**
 * The input fields for delivery address preferences.
 *
 */
type DeliveryAddressInput = {
  /**
   * The ID of a customer address that is associated with the buyer that is interacting with the cart.
   *
   */
  customerAddressId?: InputMaybe<Scalars['ID']['input']>;
  /** A delivery address preference of a buyer that is interacting with the cart. */
  deliveryAddress?: InputMaybe<MailingAddressInput>;
  /** Defines what kind of address validation is requested. */
  deliveryAddressValidationStrategy?: InputMaybe<DeliveryAddressValidationStrategy>;
  /**
   * Whether the given delivery address is considered to be a one-time use address. One-time use addresses do not
   * get persisted to the buyer's personal addresses when checking out.
   *
   */
  oneTimeUse?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Defines the types of available validation strategies for delivery addresses.
 *
 */
enum DeliveryAddressValidationStrategy {
  /** Only the country code is validated. */
  COUNTRY_CODE_ONLY = 'COUNTRY_CODE_ONLY',
  /**
   * Strict validation is performed, i.e. all fields in the address are validated
   * according to Shopify's checkout rules. If the address fails validation, the cart will not be updated.
   *
   */
  STRICT = 'STRICT'
}

/** List of different delivery method types. */
enum DeliveryMethodType {
  /** Local Delivery. */
  LOCAL = 'LOCAL',
  /** None. */
  NONE = 'NONE',
  /** Shipping to a Pickup Point. */
  PICKUP_POINT = 'PICKUP_POINT',
  /** Local Pickup. */
  PICK_UP = 'PICK_UP',
  /** Retail. */
  RETAIL = 'RETAIL',
  /** Shipping. */
  SHIPPING = 'SHIPPING'
}

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
enum DigitalWallet {
  /** Android Pay. */
  ANDROID_PAY = 'ANDROID_PAY',
  /** Apple Pay. */
  APPLE_PAY = 'APPLE_PAY',
  /** Google Pay. */
  GOOGLE_PAY = 'GOOGLE_PAY',
  /** Shopify Pay. */
  SHOPIFY_PAY = 'SHOPIFY_PAY'
}

/**
 * An amount discounting the line that has been allocated by a discount.
 *
 */
type DiscountAllocation = {
  __typename?: 'DiscountAllocation';
  /** Amount of discount allocated. */
  allocatedAmount: MoneyV2;
  /** The discount this allocated amount originated from. */
  discountApplication: DiscountApplication;
};

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 *
 */
type DiscountApplication = {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
  /** The value of the discount application. */
  value: PricingValue;
};

/** The method by which the discount's value is allocated onto its entitled lines. */
enum DiscountApplicationAllocationMethod {
  /** The value is spread across all entitled lines. */
  ACROSS = 'ACROSS',
  /** The value is applied onto every entitled line. */
  EACH = 'EACH',
  /**
   * The value is specifically applied onto a particular line.
   * @deprecated Use ACROSS instead.
   */
  ONE = 'ONE'
}

/**
 * An auto-generated type for paginating through multiple DiscountApplications.
 *
 */
type DiscountApplicationConnection = {
  __typename?: 'DiscountApplicationConnection';
  /** A list of edges. */
  edges: Array<DiscountApplicationEdge>;
  /** A list of the nodes contained in DiscountApplicationEdge. */
  nodes: Array<DiscountApplication>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one DiscountApplication and a cursor during pagination.
 *
 */
type DiscountApplicationEdge = {
  __typename?: 'DiscountApplicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of DiscountApplicationEdge. */
  node: DiscountApplication;
};

/**
 * The lines on the order to which the discount is applied, of the type defined by
 * the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of
 * `LINE_ITEM`, applies the discount on all line items that are entitled to the discount.
 * The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.
 *
 */
enum DiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  ALL = 'ALL',
  /** The discount is allocated onto only the lines that it's entitled for. */
  ENTITLED = 'ENTITLED',
  /** The discount is allocated onto explicitly chosen lines. */
  EXPLICIT = 'EXPLICIT'
}

/**
 * The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.
 *
 */
enum DiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LINE_ITEM = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  SHIPPING_LINE = 'SHIPPING_LINE'
}

/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied.
 *
 */
type DiscountCodeApplication = DiscountApplication & {
  __typename?: 'DiscountCodeApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /** Specifies whether the discount code was applied successfully. */
  applicable: Scalars['Boolean']['output'];
  /** The string identifying the discount code that was used at the time of application. */
  code: Scalars['String']['output'];
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
  /** The value of the discount application. */
  value: PricingValue;
};

/** Represents an error in the input of a mutation. */
type DisplayableError = {
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Represents a web address. */
type Domain = {
  __typename?: 'Domain';
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String']['output'];
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean']['output'];
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['URL']['output'];
};

/** Represents a video hosted outside of Shopify. */
type ExternalVideo = Media & Node & {
  __typename?: 'ExternalVideo';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']['output']>;
  /** The embed URL of the video for the respective host. */
  embedUrl: Scalars['URL']['output'];
  /**
   * The URL.
   * @deprecated Use `originUrl` instead.
   */
  embeddedUrl: Scalars['URL']['output'];
  /** The host of the external video. */
  host: MediaHost;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** The origin URL of the video on the respective host. */
  originUrl: Scalars['URL']['output'];
  /** The presentation for a media. */
  presentation?: Maybe<MediaPresentation>;
  /** The preview image for the media. */
  previewImage?: Maybe<Image>;
};

/** A filter that is supported on the parent field. */
type Filter = {
  __typename?: 'Filter';
  /** A unique identifier. */
  id: Scalars['String']['output'];
  /** A human-friendly string for this filter. */
  label: Scalars['String']['output'];
  /**
   * Describes how to present the filter values.
   * Returns a value only for filters of type `LIST`. Returns null for other types.
   *
   */
  presentation?: Maybe<FilterPresentation>;
  /** An enumeration that denotes the type of data this filter represents. */
  type: FilterType;
  /** The list of values for this filter. */
  values: Array<FilterValue>;
};

/**
 * Defines how to present the filter values, specifies the presentation of the filter.
 *
 */
enum FilterPresentation {
  /** Image presentation, filter values display an image. */
  IMAGE = 'IMAGE',
  /** Swatch presentation, filter values display color or image patterns. */
  SWATCH = 'SWATCH',
  /** Text presentation, no additional visual display for filter values. */
  TEXT = 'TEXT'
}

/**
 * The type of data that the filter group represents.
 *
 * For more information, refer to [Filter products in a collection with the Storefront API]
 * (https://shopify.dev/custom-storefronts/products-collections/filter-products).
 *
 */
enum FilterType {
  /** A boolean value. */
  BOOLEAN = 'BOOLEAN',
  /** A list of selectable values. */
  LIST = 'LIST',
  /** A range of prices. */
  PRICE_RANGE = 'PRICE_RANGE'
}

/** A selectable value within a filter. */
type FilterValue = {
  __typename?: 'FilterValue';
  /** The number of results that match this filter value. */
  count: Scalars['Int']['output'];
  /** A unique identifier. */
  id: Scalars['String']['output'];
  /** The visual representation when the filter's presentation is `IMAGE`. */
  image?: Maybe<MediaImage>;
  /**
   * An input object that can be used to filter by this value on the parent field.
   *
   * The value is provided as a helper for building dynamic filtering UI. For
   * example, if you have a list of selected `FilterValue` objects, you can combine
   * their respective `input` values to use in a subsequent query.
   *
   */
  input: Scalars['JSON']['output'];
  /** A human-friendly string for this filter value. */
  label: Scalars['String']['output'];
  /** The visual representation when the filter's presentation is `SWATCH`. */
  swatch?: Maybe<Swatch>;
};

/** Represents a single fulfillment in an order. */
type Fulfillment = {
  __typename?: 'Fulfillment';
  /** List of the fulfillment's line items. */
  fulfillmentLineItems: FulfillmentLineItemConnection;
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']['output']>;
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking number and tracking URL.
   *
   */
  trackingInfo: Array<FulfillmentTrackingInfo>;
};


/** Represents a single fulfillment in an order. */
type FulfillmentfulfillmentLineItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a single fulfillment in an order. */
type FulfillmenttrackingInfoArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
type FulfillmentLineItem = {
  __typename?: 'FulfillmentLineItem';
  /** The associated order's line item. */
  lineItem: OrderLineItem;
  /** The amount fulfilled in this fulfillment. */
  quantity: Scalars['Int']['output'];
};

/**
 * An auto-generated type for paginating through multiple FulfillmentLineItems.
 *
 */
type FulfillmentLineItemConnection = {
  __typename?: 'FulfillmentLineItemConnection';
  /** A list of edges. */
  edges: Array<FulfillmentLineItemEdge>;
  /** A list of the nodes contained in FulfillmentLineItemEdge. */
  nodes: Array<FulfillmentLineItem>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination.
 *
 */
type FulfillmentLineItemEdge = {
  __typename?: 'FulfillmentLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of FulfillmentLineItemEdge. */
  node: FulfillmentLineItem;
};

/** Tracking information associated with the fulfillment. */
type FulfillmentTrackingInfo = {
  __typename?: 'FulfillmentTrackingInfo';
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']['output']>;
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['URL']['output']>;
};

/** The generic file resource lets you manage files in a merchant’s store. Generic files include any file that doesn’t fit into a designated type such as image or video. Example: PDF, JSON. */
type GenericFile = Node & {
  __typename?: 'GenericFile';
  /** A word or phrase to indicate the contents of a file. */
  alt?: Maybe<Scalars['String']['output']>;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The MIME type of the file. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The size of the original file in bytes. */
  originalFileSize?: Maybe<Scalars['Int']['output']>;
  /** The preview image for the file. */
  previewImage?: Maybe<Image>;
  /** The URL of the file. */
  url?: Maybe<Scalars['URL']['output']>;
};

/** The input fields used to specify a geographical location. */
type GeoCoordinateInput = {
  /** The coordinate's latitude value. */
  latitude: Scalars['Float']['input'];
  /** The coordinate's longitude value. */
  longitude: Scalars['Float']['input'];
};

/** Represents information about the metafields associated to the specified resource. */
type HasMetafields = {
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
};


/** Represents information about the metafields associated to the specified resource. */
type HasMetafieldsmetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/** Represents information about the metafields associated to the specified resource. */
type HasMetafieldsmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};

/** The input fields to identify a metafield on an owner resource by namespace and key. */
type HasMetafieldsIdentifier = {
  /** The identifier for the metafield. */
  key: Scalars['String']['input'];
  /** The container the metafield belongs to. If omitted, the app-reserved namespace will be used. */
  namespace?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an image resource. */
type Image = {
  __typename?: 'Image';
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']['output']>;
  /** The original height of the image in pixels. Returns `null` if the image isn't hosted by Shopify. */
  height?: Maybe<Scalars['Int']['output']>;
  /** A unique ID for the image. */
  id?: Maybe<Scalars['ID']['output']>;
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   *
   * @deprecated Use `url` instead.
   */
  originalSrc: Scalars['URL']['output'];
  /**
   * The location of the image as a URL.
   * @deprecated Use `url` instead.
   */
  src: Scalars['URL']['output'];
  /**
   * The ThumbHash of the image.
   *
   * Useful to display placeholder images while the original image is loading.
   *
   * See https://evanw.github.io/thumbhash/ for details on how to use it.
   *
   */
  thumbhash?: Maybe<Scalars['String']['output']>;
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type doesn't support will be ignored.
   *
   * @deprecated Use `url(transform:)` instead
   */
  transformedSrc: Scalars['URL']['output'];
  /**
   * The location of the image as a URL.
   *
   * If no transform options are specified, then the original image will be preserved including any pre-applied transforms.
   *
   * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
   *
   * If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).
   *
   */
  url: Scalars['URL']['output'];
  /** The original width of the image in pixels. Returns `null` if the image isn't hosted by Shopify. */
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents an image resource. */
type ImagetransformedSrcArgs = {
  crop?: InputMaybe<CropRegion>;
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
  maxWidth?: InputMaybe<Scalars['Int']['input']>;
  preferredContentType?: InputMaybe<ImageContentType>;
  scale?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents an image resource. */
type ImageurlArgs = {
  transform?: InputMaybe<ImageTransformInput>;
};

/**
 * An auto-generated type for paginating through multiple Images.
 *
 */
type ImageConnection = {
  __typename?: 'ImageConnection';
  /** A list of edges. */
  edges: Array<ImageEdge>;
  /** A list of the nodes contained in ImageEdge. */
  nodes: Array<Image>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** List of supported image content types. */
enum ImageContentType {
  /** A JPG image. */
  JPG = 'JPG',
  /** A PNG image. */
  PNG = 'PNG',
  /** A WEBP image. */
  WEBP = 'WEBP'
}

/**
 * An auto-generated type which holds one Image and a cursor during pagination.
 *
 */
type ImageEdge = {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of ImageEdge. */
  node: Image;
};

/**
 * The available options for transforming an image.
 *
 * All transformation options are considered best effort. Any transformation that
 * the original image type doesn't support will be ignored.
 *
 */
type ImageTransformInput = {
  /**
   * The region of the image to remain after cropping.
   * Must be used in conjunction with the `maxWidth` and/or `maxHeight` fields,
   * where the `maxWidth` and `maxHeight` aren't equal.
   * The `crop` argument should coincide with the smaller value. A smaller `maxWidth` indicates a `LEFT` or `RIGHT` crop, while
   * a smaller `maxHeight` indicates a `TOP` or `BOTTOM` crop. For example, `{
   * maxWidth: 5, maxHeight: 10, crop: LEFT }` will result
   * in an image with a width of 5 and height of 10, where the right side of the image is removed.
   *
   */
  crop?: InputMaybe<CropRegion>;
  /**
   * Image height in pixels between 1 and 5760.
   *
   */
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Image width in pixels between 1 and 5760.
   *
   */
  maxWidth?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Convert the source image into the preferred content type.
   * Supported conversions: `.svg` to `.png`, any file type to `.jpg`, and any file type to `.webp`.
   *
   */
  preferredContentType?: InputMaybe<ImageContentType>;
  /**
   * Image size multiplier for high-resolution retina displays. Must be within 1..3.
   *
   */
  scale?: InputMaybe<Scalars['Int']['input']>;
};

/** Provide details about the contexts influenced by the @inContext directive on a field. */
type InContextAnnotation = {
  __typename?: 'InContextAnnotation';
  description: Scalars['String']['output'];
  type: InContextAnnotationType;
};

/** This gives information about the type of context that impacts a field. For example, for a query with @inContext(language: "EN"), the type would point to the name: LanguageCode and kind: ENUM. */
type InContextAnnotationType = {
  __typename?: 'InContextAnnotationType';
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** A language. */
type Language = {
  __typename?: 'Language';
  /** The name of the language in the language itself. If the language uses capitalization, it is capitalized for a mid-sentence position. */
  endonymName: Scalars['String']['output'];
  /** The ISO code. */
  isoCode: LanguageCode;
  /** The name of the language in the current language. */
  name: Scalars['String']['output'];
};

/** Language codes supported by Shopify. */
enum LanguageCode {
  /** Afrikaans. */
  AF = 'AF',
  /** Akan. */
  AK = 'AK',
  /** Amharic. */
  AM = 'AM',
  /** Arabic. */
  AR = 'AR',
  /** Assamese. */
  AS = 'AS',
  /** Azerbaijani. */
  AZ = 'AZ',
  /** Belarusian. */
  BE = 'BE',
  /** Bulgarian. */
  BG = 'BG',
  /** Bambara. */
  BM = 'BM',
  /** Bangla. */
  BN = 'BN',
  /** Tibetan. */
  BO = 'BO',
  /** Breton. */
  BR = 'BR',
  /** Bosnian. */
  BS = 'BS',
  /** Catalan. */
  CA = 'CA',
  /** Chechen. */
  CE = 'CE',
  /** Central Kurdish. */
  CKB = 'CKB',
  /** Czech. */
  CS = 'CS',
  /** Church Slavic. */
  CU = 'CU',
  /** Welsh. */
  CY = 'CY',
  /** Danish. */
  DA = 'DA',
  /** German. */
  DE = 'DE',
  /** Dzongkha. */
  DZ = 'DZ',
  /** Ewe. */
  EE = 'EE',
  /** Greek. */
  EL = 'EL',
  /** English. */
  EN = 'EN',
  /** Esperanto. */
  EO = 'EO',
  /** Spanish. */
  ES = 'ES',
  /** Estonian. */
  ET = 'ET',
  /** Basque. */
  EU = 'EU',
  /** Persian. */
  FA = 'FA',
  /** Fulah. */
  FF = 'FF',
  /** Finnish. */
  FI = 'FI',
  /** Filipino. */
  FIL = 'FIL',
  /** Faroese. */
  FO = 'FO',
  /** French. */
  FR = 'FR',
  /** Western Frisian. */
  FY = 'FY',
  /** Irish. */
  GA = 'GA',
  /** Scottish Gaelic. */
  GD = 'GD',
  /** Galician. */
  GL = 'GL',
  /** Gujarati. */
  GU = 'GU',
  /** Manx. */
  GV = 'GV',
  /** Hausa. */
  HA = 'HA',
  /** Hebrew. */
  HE = 'HE',
  /** Hindi. */
  HI = 'HI',
  /** Croatian. */
  HR = 'HR',
  /** Hungarian. */
  HU = 'HU',
  /** Armenian. */
  HY = 'HY',
  /** Interlingua. */
  IA = 'IA',
  /** Indonesian. */
  ID = 'ID',
  /** Igbo. */
  IG = 'IG',
  /** Sichuan Yi. */
  II = 'II',
  /** Icelandic. */
  IS = 'IS',
  /** Italian. */
  IT = 'IT',
  /** Japanese. */
  JA = 'JA',
  /** Javanese. */
  JV = 'JV',
  /** Georgian. */
  KA = 'KA',
  /** Kikuyu. */
  KI = 'KI',
  /** Kazakh. */
  KK = 'KK',
  /** Kalaallisut. */
  KL = 'KL',
  /** Khmer. */
  KM = 'KM',
  /** Kannada. */
  KN = 'KN',
  /** Korean. */
  KO = 'KO',
  /** Kashmiri. */
  KS = 'KS',
  /** Kurdish. */
  KU = 'KU',
  /** Cornish. */
  KW = 'KW',
  /** Kyrgyz. */
  KY = 'KY',
  /** Latin. */
  LA = 'LA',
  /** Luxembourgish. */
  LB = 'LB',
  /** Ganda. */
  LG = 'LG',
  /** Lingala. */
  LN = 'LN',
  /** Lao. */
  LO = 'LO',
  /** Lithuanian. */
  LT = 'LT',
  /** Luba-Katanga. */
  LU = 'LU',
  /** Latvian. */
  LV = 'LV',
  /** Malagasy. */
  MG = 'MG',
  /** Māori. */
  MI = 'MI',
  /** Macedonian. */
  MK = 'MK',
  /** Malayalam. */
  ML = 'ML',
  /** Mongolian. */
  MN = 'MN',
  /** Moldavian. */
  MO = 'MO',
  /** Marathi. */
  MR = 'MR',
  /** Malay. */
  MS = 'MS',
  /** Maltese. */
  MT = 'MT',
  /** Burmese. */
  MY = 'MY',
  /** Norwegian (Bokmål). */
  NB = 'NB',
  /** North Ndebele. */
  ND = 'ND',
  /** Nepali. */
  NE = 'NE',
  /** Dutch. */
  NL = 'NL',
  /** Norwegian Nynorsk. */
  NN = 'NN',
  /** Norwegian. */
  NO = 'NO',
  /** Oromo. */
  OM = 'OM',
  /** Odia. */
  OR = 'OR',
  /** Ossetic. */
  OS = 'OS',
  /** Punjabi. */
  PA = 'PA',
  /** Polish. */
  PL = 'PL',
  /** Pashto. */
  PS = 'PS',
  /** Portuguese. */
  PT = 'PT',
  /** Portuguese (Brazil). */
  PT_BR = 'PT_BR',
  /** Portuguese (Portugal). */
  PT_PT = 'PT_PT',
  /** Quechua. */
  QU = 'QU',
  /** Romansh. */
  RM = 'RM',
  /** Rundi. */
  RN = 'RN',
  /** Romanian. */
  RO = 'RO',
  /** Russian. */
  RU = 'RU',
  /** Kinyarwanda. */
  RW = 'RW',
  /** Sanskrit. */
  SA = 'SA',
  /** Sardinian. */
  SC = 'SC',
  /** Sindhi. */
  SD = 'SD',
  /** Northern Sami. */
  SE = 'SE',
  /** Sango. */
  SG = 'SG',
  /** Serbo-Croatian. */
  SH = 'SH',
  /** Sinhala. */
  SI = 'SI',
  /** Slovak. */
  SK = 'SK',
  /** Slovenian. */
  SL = 'SL',
  /** Shona. */
  SN = 'SN',
  /** Somali. */
  SO = 'SO',
  /** Albanian. */
  SQ = 'SQ',
  /** Serbian. */
  SR = 'SR',
  /** Sundanese. */
  SU = 'SU',
  /** Swedish. */
  SV = 'SV',
  /** Swahili. */
  SW = 'SW',
  /** Tamil. */
  TA = 'TA',
  /** Telugu. */
  TE = 'TE',
  /** Tajik. */
  TG = 'TG',
  /** Thai. */
  TH = 'TH',
  /** Tigrinya. */
  TI = 'TI',
  /** Turkmen. */
  TK = 'TK',
  /** Tongan. */
  TO = 'TO',
  /** Turkish. */
  TR = 'TR',
  /** Tatar. */
  TT = 'TT',
  /** Uyghur. */
  UG = 'UG',
  /** Ukrainian. */
  UK = 'UK',
  /** Urdu. */
  UR = 'UR',
  /** Uzbek. */
  UZ = 'UZ',
  /** Vietnamese. */
  VI = 'VI',
  /** Volapük. */
  VO = 'VO',
  /** Wolof. */
  WO = 'WO',
  /** Xhosa. */
  XH = 'XH',
  /** Yiddish. */
  YI = 'YI',
  /** Yoruba. */
  YO = 'YO',
  /** Chinese. */
  ZH = 'ZH',
  /** Chinese (Simplified). */
  ZH_CN = 'ZH_CN',
  /** Chinese (Traditional). */
  ZH_TW = 'ZH_TW',
  /** Zulu. */
  ZU = 'ZU'
}

/** Information about the localized experiences configured for the shop. */
type Localization = {
  __typename?: 'Localization';
  /** The list of countries with enabled localized experiences. */
  availableCountries: Array<Country>;
  /** The list of languages available for the active country. */
  availableLanguages: Array<Language>;
  /** The country of the active localized experience. Use the `@inContext` directive to change this value. */
  country: Country;
  /** The language of the active localized experience. Use the `@inContext` directive to change this value. */
  language: Language;
  /**
   * The market including the country of the active localized experience. Use the `@inContext` directive to change this value.
   * @deprecated This `market` field will be removed in a future version of the API.
   */
  market: Market;
};

/** Represents a location where product inventory is held. */
type Location = HasMetafields & Node & {
  __typename?: 'Location';
  /** The address of the location. */
  address: LocationAddress;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
  /** The name of the location. */
  name: Scalars['String']['output'];
};


/** Represents a location where product inventory is held. */
type LocationmetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a location where product inventory is held. */
type LocationmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};

/**
 * Represents the address of a location.
 *
 */
type LocationAddress = {
  __typename?: 'LocationAddress';
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']['output']>;
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']['output']>;
  /** The city of the location. */
  city?: Maybe<Scalars['String']['output']>;
  /** The country of the location. */
  country?: Maybe<Scalars['String']['output']>;
  /** The country code of the location. */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** A formatted version of the address for the location. */
  formatted: Array<Scalars['String']['output']>;
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']['output']>;
  /** The province of the location. */
  province?: Maybe<Scalars['String']['output']>;
  /**
   * The code for the province, state, or district of the address of the location.
   *
   */
  provinceCode?: Maybe<Scalars['String']['output']>;
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']['output']>;
};

/**
 * An auto-generated type for paginating through multiple Locations.
 *
 */
type LocationConnection = {
  __typename?: 'LocationConnection';
  /** A list of edges. */
  edges: Array<LocationEdge>;
  /** A list of the nodes contained in LocationEdge. */
  nodes: Array<Location>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one Location and a cursor during pagination.
 *
 */
type LocationEdge = {
  __typename?: 'LocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of LocationEdge. */
  node: Location;
};

/** The set of valid sort keys for the Location query. */
enum LocationSortKeys {
  /** Sort by the `city` value. */
  CITY = 'CITY',
  /** Sort by the `distance` value. */
  DISTANCE = 'DISTANCE',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** Sort by the `name` value. */
  NAME = 'NAME'
}

/** Represents a mailing address for customers and shipping. */
type MailingAddress = Node & {
  __typename?: 'MailingAddress';
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']['output']>;
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: Maybe<Scalars['String']['output']>;
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']['output']>;
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']['output']>;
  /** The name of the country. */
  country?: Maybe<Scalars['String']['output']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   * @deprecated Use `countryCodeV2` instead.
   */
  countryCode?: Maybe<Scalars['String']['output']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   */
  countryCodeV2?: Maybe<CountryCode>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']['output']>;
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']['output']>;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: Maybe<Scalars['String']['output']>;
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']['output']>;
  /**
   * The alphanumeric code for the region.
   *
   * For example, ON.
   *
   */
  provinceCode?: Maybe<Scalars['String']['output']>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']['output']>;
};


/** Represents a mailing address for customers and shipping. */
type MailingAddressformattedArgs = {
  withCompany?: InputMaybe<Scalars['Boolean']['input']>;
  withName?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * An auto-generated type for paginating through multiple MailingAddresses.
 *
 */
type MailingAddressConnection = {
  __typename?: 'MailingAddressConnection';
  /** A list of edges. */
  edges: Array<MailingAddressEdge>;
  /** A list of the nodes contained in MailingAddressEdge. */
  nodes: Array<MailingAddress>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one MailingAddress and a cursor during pagination.
 *
 */
type MailingAddressEdge = {
  __typename?: 'MailingAddressEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of MailingAddressEdge. */
  node: MailingAddress;
};

/** The input fields to create or update a mailing address. */
type MailingAddressInput = {
  /**
   * The first line of the address. Typically the street address or PO Box number.
   *
   */
  address1?: InputMaybe<Scalars['String']['input']>;
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: InputMaybe<Scalars['String']['input']>;
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: InputMaybe<Scalars['String']['input']>;
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: InputMaybe<Scalars['String']['input']>;
  /** The name of the country. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The first name of the customer. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The last name of the customer. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** The region of the address, such as the province, state, or district. */
  province?: InputMaybe<Scalars['String']['input']>;
  /** The zip or postal code of the address. */
  zip?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Manual discount applications capture the intentions of a discount that was manually created.
 *
 */
type ManualDiscountApplication = DiscountApplication & {
  __typename?: 'ManualDiscountApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /** The description of the application. */
  description?: Maybe<Scalars['String']['output']>;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
  /** The title of the application. */
  title: Scalars['String']['output'];
  /** The value of the discount application. */
  value: PricingValue;
};

/** A group of one or more regions of the world that a merchant is targeting for sales. To learn more about markets, refer to [the Shopify Markets conceptual overview](/docs/apps/markets). */
type Market = HasMetafields & Node & {
  __typename?: 'Market';
  /**
   * A human-readable unique string for the market automatically generated from its title.
   *
   */
  handle: Scalars['String']['output'];
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
};


/** A group of one or more regions of the world that a merchant is targeting for sales. To learn more about markets, refer to [the Shopify Markets conceptual overview](/docs/apps/markets). */
type MarketmetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/** A group of one or more regions of the world that a merchant is targeting for sales. To learn more about markets, refer to [the Shopify Markets conceptual overview](/docs/apps/markets). */
type MarketmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};

/** Represents a media interface. */
type Media = {
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']['output']>;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** The presentation for a media. */
  presentation?: Maybe<MediaPresentation>;
  /** The preview image for the media. */
  previewImage?: Maybe<Image>;
};

/**
 * An auto-generated type for paginating through multiple Media.
 *
 */
type MediaConnection = {
  __typename?: 'MediaConnection';
  /** A list of edges. */
  edges: Array<MediaEdge>;
  /** A list of the nodes contained in MediaEdge. */
  nodes: Array<Media>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** The possible content types for a media object. */
enum MediaContentType {
  /** An externally hosted video. */
  EXTERNAL_VIDEO = 'EXTERNAL_VIDEO',
  /** A Shopify hosted image. */
  IMAGE = 'IMAGE',
  /** A 3d model. */
  MODEL_3D = 'MODEL_3D',
  /** A Shopify hosted video. */
  VIDEO = 'VIDEO'
}

/**
 * An auto-generated type which holds one Media and a cursor during pagination.
 *
 */
type MediaEdge = {
  __typename?: 'MediaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of MediaEdge. */
  node: Media;
};

/** Host for a Media Resource. */
enum MediaHost {
  /** Host for Vimeo embedded videos. */
  VIMEO = 'VIMEO',
  /** Host for YouTube embedded videos. */
  YOUTUBE = 'YOUTUBE'
}

/** Represents a Shopify hosted image. */
type MediaImage = Media & Node & {
  __typename?: 'MediaImage';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']['output']>;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The image for the media. */
  image?: Maybe<Image>;
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** The presentation for a media. */
  presentation?: Maybe<MediaPresentation>;
  /** The preview image for the media. */
  previewImage?: Maybe<Image>;
};

/** A media presentation. */
type MediaPresentation = Node & {
  __typename?: 'MediaPresentation';
  /** A JSON object representing a presentation view. */
  asJson?: Maybe<Scalars['JSON']['output']>;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
};


/** A media presentation. */
type MediaPresentationasJsonArgs = {
  format: MediaPresentationFormat;
};

/** The possible formats for a media presentation. */
enum MediaPresentationFormat {
  /** A media image presentation. */
  IMAGE = 'IMAGE',
  /** A model viewer presentation. */
  MODEL_VIEWER = 'MODEL_VIEWER'
}

/**
 * A [navigation menu](https://help.shopify.com/manual/online-store/menus-and-links) representing a hierarchy
 * of hyperlinks (items).
 *
 */
type Menu = Node & {
  __typename?: 'Menu';
  /** The menu's handle. */
  handle: Scalars['String']['output'];
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The menu's child items. */
  items: Array<MenuItem>;
  /** The count of items on the menu. */
  itemsCount: Scalars['Int']['output'];
  /** The menu's title. */
  title: Scalars['String']['output'];
};

/** A menu item within a parent menu. */
type MenuItem = Node & {
  __typename?: 'MenuItem';
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The menu item's child items. */
  items: Array<MenuItem>;
  /** The linked resource. */
  resource?: Maybe<MenuItemResource>;
  /** The ID of the linked resource. */
  resourceId?: Maybe<Scalars['ID']['output']>;
  /** The menu item's tags to filter a collection. */
  tags: Array<Scalars['String']['output']>;
  /** The menu item's title. */
  title: Scalars['String']['output'];
  /** The menu item's type. */
  type: MenuItemType;
  /** The menu item's URL. */
  url?: Maybe<Scalars['URL']['output']>;
};

/**
 * The list of possible resources a `MenuItem` can reference.
 *
 */
type MenuItemResource = Article | Blog | Collection | Metaobject | Page | Product | ShopPolicy;

/** A menu item type. */
enum MenuItemType {
  /** An article link. */
  ARTICLE = 'ARTICLE',
  /** A blog link. */
  BLOG = 'BLOG',
  /** A catalog link. */
  CATALOG = 'CATALOG',
  /** A collection link. */
  COLLECTION = 'COLLECTION',
  /** A collection link. */
  COLLECTIONS = 'COLLECTIONS',
  /** A customer account page link. */
  CUSTOMER_ACCOUNT_PAGE = 'CUSTOMER_ACCOUNT_PAGE',
  /** A frontpage link. */
  FRONTPAGE = 'FRONTPAGE',
  /** An http link. */
  HTTP = 'HTTP',
  /** A metaobject page link. */
  METAOBJECT = 'METAOBJECT',
  /** A page link. */
  PAGE = 'PAGE',
  /** A product link. */
  PRODUCT = 'PRODUCT',
  /** A search link. */
  SEARCH = 'SEARCH',
  /** A shop policy link. */
  SHOP_POLICY = 'SHOP_POLICY'
}

/** The merchandise to be purchased at checkout. */
type Merchandise = ProductVariant;

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 *
 */
type Metafield = Node & {
  __typename?: 'Metafield';
  /** The date and time when the storefront metafield was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The description of a metafield. */
  description?: Maybe<Scalars['String']['output']>;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The unique identifier for the metafield within its namespace. */
  key: Scalars['String']['output'];
  /** The container for a group of metafields that the metafield is associated with. */
  namespace: Scalars['String']['output'];
  /** The type of resource that the metafield is attached to. */
  parentResource: MetafieldParentResource;
  /** Returns a reference object if the metafield's type is a resource reference. */
  reference?: Maybe<MetafieldReference>;
  /** A list of reference objects if the metafield's type is a resource reference list. */
  references?: Maybe<MetafieldReferenceConnection>;
  /**
   * The type name of the metafield.
   * Refer to the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   *
   */
  type: Scalars['String']['output'];
  /** The date and time when the metafield was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The data stored in the metafield. Always stored as a string, regardless of the metafield's type. */
  value: Scalars['String']['output'];
};


/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 *
 */
type MetafieldreferencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Possible error codes that can be returned by `MetafieldDeleteUserError`. */
enum MetafieldDeleteErrorCode {
  /** The current app is not authorized to perform this action. */
  APP_NOT_AUTHORIZED = 'APP_NOT_AUTHORIZED',
  /** The owner ID is invalid. */
  INVALID_OWNER = 'INVALID_OWNER',
  /** Metafield not found. */
  METAFIELD_DOES_NOT_EXIST = 'METAFIELD_DOES_NOT_EXIST'
}

/** An error that occurs during the execution of cart metafield deletion. */
type MetafieldDeleteUserError = DisplayableError & {
  __typename?: 'MetafieldDeleteUserError';
  /** The error code. */
  code?: Maybe<MetafieldDeleteErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/**
 * A filter used to view a subset of products in a collection matching a specific metafield value.
 *
 * Only the following metafield types are currently supported:
 * - `number_integer`
 * - `number_decimal`
 * - `single_line_text_field`
 * - `boolean` as of 2022-04.
 *
 */
type MetafieldFilter = {
  /** The key of the metafield to filter on. */
  key: Scalars['String']['input'];
  /** The namespace of the metafield to filter on. */
  namespace: Scalars['String']['input'];
  /** The value of the metafield. */
  value: Scalars['String']['input'];
};

/** A resource that the metafield belongs to. */
type MetafieldParentResource = Article | Blog | Cart | Collection | Company | CompanyLocation | Customer | Location | Market | Order | Page | Product | ProductVariant | SellingPlan | Shop;

/**
 * Returns the resource which is being referred to by a metafield.
 *
 */
type MetafieldReference = Article | Collection | GenericFile | MediaImage | Metaobject | Model3d | Page | Product | ProductVariant | Video;

/**
 * An auto-generated type for paginating through multiple MetafieldReferences.
 *
 */
type MetafieldReferenceConnection = {
  __typename?: 'MetafieldReferenceConnection';
  /** A list of edges. */
  edges: Array<MetafieldReferenceEdge>;
  /** A list of the nodes contained in MetafieldReferenceEdge. */
  nodes: Array<MetafieldReference>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one MetafieldReference and a cursor during pagination.
 *
 */
type MetafieldReferenceEdge = {
  __typename?: 'MetafieldReferenceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of MetafieldReferenceEdge. */
  node: MetafieldReference;
};

/** An error that occurs during the execution of `MetafieldsSet`. */
type MetafieldsSetUserError = DisplayableError & {
  __typename?: 'MetafieldsSetUserError';
  /** The error code. */
  code?: Maybe<MetafieldsSetUserErrorCode>;
  /** The index of the array element that's causing the error. */
  elementIndex?: Maybe<Scalars['Int']['output']>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Possible error codes that can be returned by `MetafieldsSetUserError`. */
enum MetafieldsSetUserErrorCode {
  /** The current app is not authorized to perform this action. */
  APP_NOT_AUTHORIZED = 'APP_NOT_AUTHORIZED',
  /** The input value is blank. */
  BLANK = 'BLANK',
  /** The input value isn't included in the list. */
  INCLUSION = 'INCLUSION',
  /** The owner ID is invalid. */
  INVALID_OWNER = 'INVALID_OWNER',
  /** The type is invalid. */
  INVALID_TYPE = 'INVALID_TYPE',
  /** The value is invalid for metafield type or for definition options. */
  INVALID_VALUE = 'INVALID_VALUE',
  /** The input value should be less than or equal to the maximum value allowed. */
  LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO',
  /** The input value needs to be blank. */
  PRESENT = 'PRESENT',
  /** The input value is too long. */
  TOO_LONG = 'TOO_LONG',
  /** The input value is too short. */
  TOO_SHORT = 'TOO_SHORT'
}

/** An instance of a user-defined model based on a MetaobjectDefinition. */
type Metaobject = Node & OnlineStorePublishable & {
  __typename?: 'Metaobject';
  /** Accesses a field of the object by key. */
  field?: Maybe<MetaobjectField>;
  /**
   * All object fields with defined values.
   * Omitted object keys can be assumed null, and no guarantees are made about field order.
   *
   */
  fields: Array<MetaobjectField>;
  /** The unique handle of the metaobject. Useful as a custom ID. */
  handle: Scalars['String']['output'];
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The URL used for viewing the metaobject on the shop's Online Store. Returns `null` if the metaobject definition doesn't have the `online_store` capability. */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>;
  /**
   * The metaobject's SEO information. Returns `null` if the metaobject definition
   * doesn't have the `renderable` capability.
   *
   */
  seo?: Maybe<MetaobjectSEO>;
  /** The type of the metaobject. Defines the namespace of its associated metafields. */
  type: Scalars['String']['output'];
  /** The date and time when the metaobject was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};


/** An instance of a user-defined model based on a MetaobjectDefinition. */
type MetaobjectfieldArgs = {
  key: Scalars['String']['input'];
};

/**
 * An auto-generated type for paginating through multiple Metaobjects.
 *
 */
type MetaobjectConnection = {
  __typename?: 'MetaobjectConnection';
  /** A list of edges. */
  edges: Array<MetaobjectEdge>;
  /** A list of the nodes contained in MetaobjectEdge. */
  nodes: Array<Metaobject>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one Metaobject and a cursor during pagination.
 *
 */
type MetaobjectEdge = {
  __typename?: 'MetaobjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of MetaobjectEdge. */
  node: Metaobject;
};

/** Provides the value of a Metaobject field. */
type MetaobjectField = {
  __typename?: 'MetaobjectField';
  /** The field key. */
  key: Scalars['String']['output'];
  /** A referenced object if the field type is a resource reference. */
  reference?: Maybe<MetafieldReference>;
  /** A list of referenced objects if the field type is a resource reference list. */
  references?: Maybe<MetafieldReferenceConnection>;
  /**
   * The type name of the field.
   * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   *
   */
  type: Scalars['String']['output'];
  /** The field value. */
  value?: Maybe<Scalars['String']['output']>;
};


/** Provides the value of a Metaobject field. */
type MetaobjectFieldreferencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The input fields used to retrieve a metaobject by handle. */
type MetaobjectHandleInput = {
  /** The handle of the metaobject. */
  handle: Scalars['String']['input'];
  /** The type of the metaobject. */
  type: Scalars['String']['input'];
};

/** SEO information for a metaobject. */
type MetaobjectSEO = {
  __typename?: 'MetaobjectSEO';
  /** The meta description. */
  description?: Maybe<MetaobjectField>;
  /** The SEO title. */
  title?: Maybe<MetaobjectField>;
};

/** Represents a Shopify hosted 3D model. */
type Model3d = Media & Node & {
  __typename?: 'Model3d';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']['output']>;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** The presentation for a media. */
  presentation?: Maybe<MediaPresentation>;
  /** The preview image for the media. */
  previewImage?: Maybe<Image>;
  /** The sources for a 3d model. */
  sources: Array<Model3dSource>;
};

/** Represents a source for a Shopify hosted 3d model. */
type Model3dSource = {
  __typename?: 'Model3dSource';
  /** The filesize of the 3d model. */
  filesize: Scalars['Int']['output'];
  /** The format of the 3d model. */
  format: Scalars['String']['output'];
  /** The MIME type of the 3d model. */
  mimeType: Scalars['String']['output'];
  /** The URL of the 3d model. */
  url: Scalars['String']['output'];
};

/** The input fields for a monetary value with currency. */
type MoneyInput = {
  /** Decimal money amount. */
  amount: Scalars['Decimal']['input'];
  /** Currency of the money. */
  currencyCode: CurrencyCode;
};

/**
 * A monetary value with currency.
 *
 */
type MoneyV2 = {
  __typename?: 'MoneyV2';
  /** Decimal money amount. */
  amount: Scalars['Decimal']['output'];
  /** Currency of the money. */
  currencyCode: CurrencyCode;
};

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type Mutation = {
  __typename?: 'Mutation';
  /** Updates the attributes on a cart. */
  cartAttributesUpdate?: Maybe<CartAttributesUpdatePayload>;
  /** Updates the billing address on the cart. */
  cartBillingAddressUpdate?: Maybe<CartBillingAddressUpdatePayload>;
  /**
   * Updates customer information associated with a cart.
   * Buyer identity is used to determine
   * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
   * and should match the customer's shipping address.
   *
   */
  cartBuyerIdentityUpdate?: Maybe<CartBuyerIdentityUpdatePayload>;
  /** Creates a clone of the specified cart with all personally identifiable information removed. */
  cartClone?: Maybe<CartClonePayload>;
  /** Creates a new cart. */
  cartCreate?: Maybe<CartCreatePayload>;
  /** Adds delivery addresses to the cart. */
  cartDeliveryAddressesAdd?: Maybe<CartDeliveryAddressesAddPayload>;
  /** Removes delivery addresses from the cart. */
  cartDeliveryAddressesRemove?: Maybe<CartDeliveryAddressesRemovePayload>;
  /** Replaces delivery addresses on the cart. */
  cartDeliveryAddressesReplace?: Maybe<CartDeliveryAddressesReplacePayload>;
  /** Updates one or more delivery addresses on a cart. */
  cartDeliveryAddressesUpdate?: Maybe<CartDeliveryAddressesUpdatePayload>;
  /** Updates the discount codes applied to the cart. */
  cartDiscountCodesUpdate?: Maybe<CartDiscountCodesUpdatePayload>;
  /** Adds gift card codes to the cart without replacing existing ones. */
  cartGiftCardCodesAdd?: Maybe<CartGiftCardCodesAddPayload>;
  /** Removes the gift card codes applied to the cart. */
  cartGiftCardCodesRemove?: Maybe<CartGiftCardCodesRemovePayload>;
  /** Updates the gift card codes applied to the cart. */
  cartGiftCardCodesUpdate?: Maybe<CartGiftCardCodesUpdatePayload>;
  /** Adds a merchandise line to the cart. */
  cartLinesAdd?: Maybe<CartLinesAddPayload>;
  /** Removes one or more merchandise lines from the cart. */
  cartLinesRemove?: Maybe<CartLinesRemovePayload>;
  /** Updates one or more merchandise lines on a cart. */
  cartLinesUpdate?: Maybe<CartLinesUpdatePayload>;
  /** Deletes a cart metafield. */
  cartMetafieldDelete?: Maybe<CartMetafieldDeletePayload>;
  /**
   * Sets cart metafield values. Cart metafield values will be set regardless if they were previously created or not.
   *
   * Allows a maximum of 25 cart metafields to be set at a time.
   *
   */
  cartMetafieldsSet?: Maybe<CartMetafieldsSetPayload>;
  /** Updates the note on the cart. */
  cartNoteUpdate?: Maybe<CartNoteUpdatePayload>;
  /** Update the customer's payment method that will be used to checkout. */
  cartPaymentUpdate?: Maybe<CartPaymentUpdatePayload>;
  /** Prepare the cart for cart checkout completion. */
  cartPrepareForCompletion?: Maybe<CartPrepareForCompletionPayload>;
  /** Removes personally identifiable information from the cart. */
  cartRemovePersonalData?: Maybe<CartRemovePersonalDataPayload>;
  /** Update the selected delivery options for a delivery group. */
  cartSelectedDeliveryOptionsUpdate?: Maybe<CartSelectedDeliveryOptionsUpdatePayload>;
  /** Submit the cart for checkout completion. */
  cartSubmitForCompletion?: Maybe<CartSubmitForCompletionPayload>;
  /**
   * Creates a customer access token.
   * The customer access token is required to modify the customer object in any way.
   *
   */
  customerAccessTokenCreate?: Maybe<CustomerAccessTokenCreatePayload>;
  /**
   * Creates a customer access token using a
   * [multipass token](https://shopify.dev/api/multipass) instead of email and
   * password. A customer record is created if the customer doesn't exist. If a customer
   * record already exists but the record is disabled, then the customer record is enabled.
   *
   */
  customerAccessTokenCreateWithMultipass?: Maybe<CustomerAccessTokenCreateWithMultipassPayload>;
  /** Permanently destroys a customer access token. */
  customerAccessTokenDelete?: Maybe<CustomerAccessTokenDeletePayload>;
  /**
   * Renews a customer access token.
   *
   * Access token renewal must happen *before* a token expires.
   * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
   *
   */
  customerAccessTokenRenew?: Maybe<CustomerAccessTokenRenewPayload>;
  /** Activates a customer. */
  customerActivate?: Maybe<CustomerActivatePayload>;
  /** Activates a customer with the activation url received from `customerCreate`. */
  customerActivateByUrl?: Maybe<CustomerActivateByUrlPayload>;
  /** Creates a new address for a customer. */
  customerAddressCreate?: Maybe<CustomerAddressCreatePayload>;
  /** Permanently deletes the address of an existing customer. */
  customerAddressDelete?: Maybe<CustomerAddressDeletePayload>;
  /** Updates the address of an existing customer. */
  customerAddressUpdate?: Maybe<CustomerAddressUpdatePayload>;
  /** Creates a new customer. */
  customerCreate?: Maybe<CustomerCreatePayload>;
  /** Updates the default address of an existing customer. */
  customerDefaultAddressUpdate?: Maybe<CustomerDefaultAddressUpdatePayload>;
  /**
   * Sends a reset password email to the customer. The reset password
   * email contains a reset password URL and token that you can pass to
   * the [`customerResetByUrl`](https://shopify.dev/api/storefront/latest/mutations/customerResetByUrl) or
   * [`customerReset`](https://shopify.dev/api/storefront/latest/mutations/customerReset) mutation to reset the
   * customer password.
   *
   * This mutation is throttled by IP. With private access,
   * you can provide a [`Shopify-Storefront-Buyer-IP`](https://shopify.dev/api/usage/authentication#optional-ip-header) instead of the request IP.
   * The header is case-sensitive and must be sent as `Shopify-Storefront-Buyer-IP`.
   *
   * Make sure that the value provided to `Shopify-Storefront-Buyer-IP` is trusted. Unthrottled access to this
   * mutation presents a security risk.
   *
   */
  customerRecover?: Maybe<CustomerRecoverPayload>;
  /**
   * "Resets a customer’s password with the token received from a reset password email. You can send a reset password email with the [`customerRecover`](https://shopify.dev/api/storefront/latest/mutations/customerRecover) mutation."
   *
   */
  customerReset?: Maybe<CustomerResetPayload>;
  /**
   * "Resets a customer’s password with the reset password URL received from a reset password email. You can send a reset password email with the [`customerRecover`](https://shopify.dev/api/storefront/latest/mutations/customerRecover) mutation."
   *
   */
  customerResetByUrl?: Maybe<CustomerResetByUrlPayload>;
  /** Updates an existing customer. */
  customerUpdate?: Maybe<CustomerUpdatePayload>;
  /** Create a new Shop Pay payment request session. */
  shopPayPaymentRequestSessionCreate?: Maybe<ShopPayPaymentRequestSessionCreatePayload>;
  /** Submits a Shop Pay payment request session. */
  shopPayPaymentRequestSessionSubmit?: Maybe<ShopPayPaymentRequestSessionSubmitPayload>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartAttributesUpdateArgs = {
  attributes: Array<AttributeInput>;
  cartId: Scalars['ID']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartBillingAddressUpdateArgs = {
  billingAddress?: InputMaybe<MailingAddressInput>;
  cartId: Scalars['ID']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartBuyerIdentityUpdateArgs = {
  buyerIdentity: CartBuyerIdentityInput;
  cartId: Scalars['ID']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartCloneArgs = {
  cartId: Scalars['ID']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartCreateArgs = {
  input?: InputMaybe<CartInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartDeliveryAddressesAddArgs = {
  addresses: Array<CartSelectableAddressInput>;
  cartId: Scalars['ID']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartDeliveryAddressesRemoveArgs = {
  addressIds: Array<Scalars['ID']['input']>;
  cartId: Scalars['ID']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartDeliveryAddressesReplaceArgs = {
  addresses: Array<CartSelectableAddressInput>;
  cartId: Scalars['ID']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartDeliveryAddressesUpdateArgs = {
  addresses: Array<CartSelectableAddressUpdateInput>;
  cartId: Scalars['ID']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartDiscountCodesUpdateArgs = {
  cartId: Scalars['ID']['input'];
  discountCodes?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartGiftCardCodesAddArgs = {
  cartId: Scalars['ID']['input'];
  giftCardCodes: Array<Scalars['String']['input']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartGiftCardCodesRemoveArgs = {
  appliedGiftCardIds: Array<Scalars['ID']['input']>;
  cartId: Scalars['ID']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartGiftCardCodesUpdateArgs = {
  cartId: Scalars['ID']['input'];
  giftCardCodes: Array<Scalars['String']['input']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartLinesAddArgs = {
  cartId: Scalars['ID']['input'];
  lines: Array<CartLineInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartLinesRemoveArgs = {
  cartId: Scalars['ID']['input'];
  lineIds: Array<Scalars['ID']['input']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartLinesUpdateArgs = {
  cartId: Scalars['ID']['input'];
  lines: Array<CartLineUpdateInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartMetafieldDeleteArgs = {
  input: CartMetafieldDeleteInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartMetafieldsSetArgs = {
  metafields: Array<CartMetafieldsSetInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartNoteUpdateArgs = {
  cartId: Scalars['ID']['input'];
  note: Scalars['String']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartPaymentUpdateArgs = {
  cartId: Scalars['ID']['input'];
  payment: CartPaymentInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartPrepareForCompletionArgs = {
  cartId: Scalars['ID']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartRemovePersonalDataArgs = {
  cartId: Scalars['ID']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartSelectedDeliveryOptionsUpdateArgs = {
  cartId: Scalars['ID']['input'];
  selectedDeliveryOptions: Array<CartSelectedDeliveryOptionInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartSubmitForCompletionArgs = {
  attemptToken: Scalars['String']['input'];
  cartId: Scalars['ID']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerAccessTokenCreateArgs = {
  input: CustomerAccessTokenCreateInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerAccessTokenCreateWithMultipassArgs = {
  multipassToken: Scalars['String']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerAccessTokenDeleteArgs = {
  customerAccessToken: Scalars['String']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerAccessTokenRenewArgs = {
  customerAccessToken: Scalars['String']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerActivateArgs = {
  id: Scalars['ID']['input'];
  input: CustomerActivateInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerActivateByUrlArgs = {
  activationUrl: Scalars['URL']['input'];
  password: Scalars['String']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerAddressCreateArgs = {
  address: MailingAddressInput;
  customerAccessToken: Scalars['String']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerAddressDeleteArgs = {
  customerAccessToken: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerAddressUpdateArgs = {
  address: MailingAddressInput;
  customerAccessToken: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerCreateArgs = {
  input: CustomerCreateInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerDefaultAddressUpdateArgs = {
  addressId: Scalars['ID']['input'];
  customerAccessToken: Scalars['String']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerRecoverArgs = {
  email: Scalars['String']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerResetArgs = {
  id: Scalars['ID']['input'];
  input: CustomerResetInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerResetByUrlArgs = {
  password: Scalars['String']['input'];
  resetUrl: Scalars['URL']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerUpdateArgs = {
  customer: CustomerUpdateInput;
  customerAccessToken: Scalars['String']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationshopPayPaymentRequestSessionCreateArgs = {
  paymentRequest: ShopPayPaymentRequestInput;
  sourceIdentifier: Scalars['String']['input'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationshopPayPaymentRequestSessionSubmitArgs = {
  idempotencyKey: Scalars['String']['input'];
  orderName?: InputMaybe<Scalars['String']['input']>;
  paymentRequest: ShopPayPaymentRequestInput;
  token: Scalars['String']['input'];
};

/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](/docs/api/storefront/latest/queries/node)
 * and [nodes](/docs/api/storefront/latest/queries/nodes) queries.
 *
 */
type Node = {
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
};

/** Represents a resource that can be published to the Online Store sales channel. */
type OnlineStorePublishable = {
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>;
};

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
type Order = HasMetafields & Node & {
  __typename?: 'Order';
  /** The address associated with the payment method. */
  billingAddress?: Maybe<MailingAddress>;
  /** The reason for the order's cancellation. Returns `null` if the order wasn't canceled. */
  cancelReason?: Maybe<OrderCancelReason>;
  /** The date and time when the order was canceled. Returns null if the order wasn't canceled. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The code of the currency used for the payment. */
  currencyCode: CurrencyCode;
  /** The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes aren't included unless the order is a taxes-included order. */
  currentSubtotalPrice: MoneyV2;
  /** The total cost of duties for the order, including refunds. */
  currentTotalDuties?: Maybe<MoneyV2>;
  /** The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed. */
  currentTotalPrice: MoneyV2;
  /** The total cost of shipping, excluding shipping lines that have been refunded or removed. Taxes aren't included unless the order is a taxes-included order. */
  currentTotalShippingPrice: MoneyV2;
  /** The total of all taxes applied to the order, excluding taxes for returned line items. */
  currentTotalTax: MoneyV2;
  /** A list of the custom attributes added to the order. For example, whether an order is a customer's first. */
  customAttributes: Array<Attribute>;
  /** The locale code in which this specific order happened. */
  customerLocale?: Maybe<Scalars['String']['output']>;
  /** The unique URL that the customer can use to access the order. */
  customerUrl?: Maybe<Scalars['URL']['output']>;
  /** Discounts that have been applied on the order. */
  discountApplications: DiscountApplicationConnection;
  /** Whether the order has had any edits applied or not. */
  edited: Scalars['Boolean']['output'];
  /** The customer's email address. */
  email?: Maybe<Scalars['String']['output']>;
  /** The financial status of the order. */
  financialStatus?: Maybe<OrderFinancialStatus>;
  /** The fulfillment status for the order. */
  fulfillmentStatus: OrderFulfillmentStatus;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** List of the order’s line items. */
  lineItems: OrderLineItemConnection;
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
  /**
   * Unique identifier for the order that appears on the order.
   * For example, _#1000_ or _Store1001.
   *
   */
  name: Scalars['String']['output'];
  /** A unique numeric identifier for the order for use by shop owner and customer. */
  orderNumber: Scalars['Int']['output'];
  /** The total cost of duties charged at checkout. */
  originalTotalDuties?: Maybe<MoneyV2>;
  /** The total price of the order before any applied edits. */
  originalTotalPrice: MoneyV2;
  /** The customer's phone number for receiving SMS notifications. */
  phone?: Maybe<Scalars['String']['output']>;
  /**
   * The date and time when the order was imported.
   * This value can be set to dates in the past when importing from other systems.
   * If no value is provided, it will be auto-generated based on current date and time.
   *
   */
  processedAt: Scalars['DateTime']['output'];
  /** The address to where the order will be shipped. */
  shippingAddress?: Maybe<MailingAddress>;
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   *
   */
  shippingDiscountAllocations: Array<DiscountAllocation>;
  /** The unique URL for the order's status page. */
  statusUrl: Scalars['URL']['output'];
  /** Price of the order before shipping and taxes. */
  subtotalPrice?: Maybe<MoneyV2>;
  /**
   * Price of the order before duties, shipping and taxes.
   * @deprecated Use `subtotalPrice` instead.
   */
  subtotalPriceV2?: Maybe<MoneyV2>;
  /** List of the order’s successful fulfillments. */
  successfulFulfillments?: Maybe<Array<Fulfillment>>;
  /** The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive). */
  totalPrice: MoneyV2;
  /**
   * The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive).
   * @deprecated Use `totalPrice` instead.
   */
  totalPriceV2: MoneyV2;
  /** The total amount that has been refunded. */
  totalRefunded: MoneyV2;
  /**
   * The total amount that has been refunded.
   * @deprecated Use `totalRefunded` instead.
   */
  totalRefundedV2: MoneyV2;
  /** The total cost of shipping. */
  totalShippingPrice: MoneyV2;
  /**
   * The total cost of shipping.
   * @deprecated Use `totalShippingPrice` instead.
   */
  totalShippingPriceV2: MoneyV2;
  /** The total cost of taxes. */
  totalTax?: Maybe<MoneyV2>;
  /**
   * The total cost of taxes.
   * @deprecated Use `totalTax` instead.
   */
  totalTaxV2?: Maybe<MoneyV2>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
type OrderdiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
type OrderlineItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
type OrdermetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
type OrdermetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
type OrdersuccessfulFulfillmentsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents the reason for the order's cancellation. */
enum OrderCancelReason {
  /** The customer wanted to cancel the order. */
  CUSTOMER = 'CUSTOMER',
  /** Payment was declined. */
  DECLINED = 'DECLINED',
  /** The order was fraudulent. */
  FRAUD = 'FRAUD',
  /** There was insufficient inventory. */
  INVENTORY = 'INVENTORY',
  /** The order was canceled for an unlisted reason. */
  OTHER = 'OTHER',
  /** Staff made an error. */
  STAFF = 'STAFF'
}

/**
 * An auto-generated type for paginating through multiple Orders.
 *
 */
type OrderConnection = {
  __typename?: 'OrderConnection';
  /** A list of edges. */
  edges: Array<OrderEdge>;
  /** A list of the nodes contained in OrderEdge. */
  nodes: Array<Order>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The total count of Orders. */
  totalCount: Scalars['UnsignedInt64']['output'];
};

/**
 * An auto-generated type which holds one Order and a cursor during pagination.
 *
 */
type OrderEdge = {
  __typename?: 'OrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of OrderEdge. */
  node: Order;
};

/** Represents the order's current financial status. */
enum OrderFinancialStatus {
  /** Displayed as **Authorized**. */
  AUTHORIZED = 'AUTHORIZED',
  /** Displayed as **Paid**. */
  PAID = 'PAID',
  /** Displayed as **Partially paid**. */
  PARTIALLY_PAID = 'PARTIALLY_PAID',
  /** Displayed as **Partially refunded**. */
  PARTIALLY_REFUNDED = 'PARTIALLY_REFUNDED',
  /** Displayed as **Pending**. */
  PENDING = 'PENDING',
  /** Displayed as **Refunded**. */
  REFUNDED = 'REFUNDED',
  /** Displayed as **Voided**. */
  VOIDED = 'VOIDED'
}

/** Represents the order's aggregated fulfillment status for display purposes. */
enum OrderFulfillmentStatus {
  /** Displayed as **Fulfilled**. All of the items in the order have been fulfilled. */
  FULFILLED = 'FULFILLED',
  /** Displayed as **In progress**. Some of the items in the order have been fulfilled, or a request for fulfillment has been sent to the fulfillment service. */
  IN_PROGRESS = 'IN_PROGRESS',
  /** Displayed as **On hold**. All of the unfulfilled items in this order are on hold. */
  ON_HOLD = 'ON_HOLD',
  /** Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status. */
  OPEN = 'OPEN',
  /** Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled. */
  PARTIALLY_FULFILLED = 'PARTIALLY_FULFILLED',
  /** Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by "IN_PROGRESS" status. */
  PENDING_FULFILLMENT = 'PENDING_FULFILLMENT',
  /** Displayed as **Restocked**. All of the items in the order have been restocked. Replaced by "UNFULFILLED" status. */
  RESTOCKED = 'RESTOCKED',
  /** Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time. */
  SCHEDULED = 'SCHEDULED',
  /** Displayed as **Unfulfilled**. None of the items in the order have been fulfilled. */
  UNFULFILLED = 'UNFULFILLED'
}

/** Represents a single line in an order. There is one line item for each distinct product variant. */
type OrderLineItem = {
  __typename?: 'OrderLineItem';
  /** The number of entries associated to the line item minus the items that have been removed. */
  currentQuantity: Scalars['Int']['output'];
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<Attribute>;
  /** The discounts that have been allocated onto the order line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>;
  /** The total price of the line item, including discounts, and displayed in the presentment currency. */
  discountedTotalPrice: MoneyV2;
  /** The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it's displayed in the presentment currency. */
  originalTotalPrice: MoneyV2;
  /** The number of products variants associated to the line item. */
  quantity: Scalars['Int']['output'];
  /** The title of the product combined with title of the variant. */
  title: Scalars['String']['output'];
  /** The product variant object associated to the line item. */
  variant?: Maybe<ProductVariant>;
};

/**
 * An auto-generated type for paginating through multiple OrderLineItems.
 *
 */
type OrderLineItemConnection = {
  __typename?: 'OrderLineItemConnection';
  /** A list of edges. */
  edges: Array<OrderLineItemEdge>;
  /** A list of the nodes contained in OrderLineItemEdge. */
  nodes: Array<OrderLineItem>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one OrderLineItem and a cursor during pagination.
 *
 */
type OrderLineItemEdge = {
  __typename?: 'OrderLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of OrderLineItemEdge. */
  node: OrderLineItem;
};

/** The set of valid sort keys for the Order query. */
enum OrderSortKeys {
  /** Sort by the `id` value. */
  ID = 'ID',
  /** Sort by the `processed_at` value. */
  PROCESSED_AT = 'PROCESSED_AT',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RELEVANCE = 'RELEVANCE',
  /** Sort by the `total_price` value. */
  TOTAL_PRICE = 'TOTAL_PRICE'
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
type Page = HasMetafields & Node & OnlineStorePublishable & Trackable & {
  __typename?: 'Page';
  /** The description of the page, complete with HTML formatting. */
  body: Scalars['HTML']['output'];
  /** Summary of the page body. */
  bodySummary: Scalars['String']['output'];
  /** The timestamp of the page creation. */
  createdAt: Scalars['DateTime']['output'];
  /** A human-friendly unique string for the page automatically generated from its title. */
  handle: Scalars['String']['output'];
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>;
  /** The page's SEO information. */
  seo?: Maybe<SEO>;
  /** The title of the page. */
  title: Scalars['String']['output'];
  /** URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/current/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries, otherwise returns null. */
  trackingParameters?: Maybe<Scalars['String']['output']>;
  /** The timestamp of the latest page update. */
  updatedAt: Scalars['DateTime']['output'];
};


/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
type PagemetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
type PagemetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};

/**
 * An auto-generated type for paginating through multiple Pages.
 *
 */
type PageConnection = {
  __typename?: 'PageConnection';
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** A list of the nodes contained in PageEdge. */
  nodes: Array<Page>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one Page and a cursor during pagination.
 *
 */
type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of PageEdge. */
  node: Page;
};

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 * For more information, please read our [GraphQL Pagination Usage Guide](https://shopify.dev/api/usage/pagination-graphql).
 *
 */
type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor corresponding to the last node in edges. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** The cursor corresponding to the first node in edges. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The set of valid sort keys for the Page query. */
enum PageSortKeys {
  /** Sort by the `id` value. */
  ID = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RELEVANCE = 'RELEVANCE',
  /** Sort by the `title` value. */
  TITLE = 'TITLE',
  /** Sort by the `updated_at` value. */
  UPDATED_AT = 'UPDATED_AT'
}

/** Type for paginating through multiple sitemap's resources. */
type PaginatedSitemapResources = {
  __typename?: 'PaginatedSitemapResources';
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean']['output'];
  /**
   * List of sitemap resources for the current page.
   * Note: The number of items varies between 0 and 250 per page.
   *
   */
  items: Array<SitemapResourceInterface>;
};

/** Settings related to payments. */
type PaymentSettings = {
  __typename?: 'PaymentSettings';
  /** List of the card brands which the business entity accepts. */
  acceptedCardBrands: Array<CardBrand>;
  /** The url pointing to the endpoint to vault credit cards. */
  cardVaultUrl: Scalars['URL']['output'];
  /** The country where the shop is located. When multiple business entities operate within the shop, then this will represent the country of the business entity that's serving the specified buyer context. */
  countryCode: CountryCode;
  /** The three-letter code for the shop's primary currency. */
  currencyCode: CurrencyCode;
  /**
   * A list of enabled currencies (ISO 4217 format) that the shop accepts.
   * Merchants can enable currencies from their Shopify Payments settings in the Shopify admin.
   *
   */
  enabledPresentmentCurrencies: Array<CurrencyCode>;
  /** The shop’s Shopify Payments account ID. */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']['output']>;
  /** List of the digital wallets which the business entity supports. */
  supportedDigitalWallets: Array<DigitalWallet>;
};

/** Decides the distribution of results. */
enum PredictiveSearchLimitScope {
  /** Return results up to limit across all types. */
  ALL = 'ALL',
  /** Return results up to limit per type. */
  EACH = 'EACH'
}

/**
 * A predictive search result represents a list of products, collections, pages, articles, and query suggestions
 * that matches the predictive search query.
 *
 */
type PredictiveSearchResult = {
  __typename?: 'PredictiveSearchResult';
  /** The articles that match the search query. */
  articles: Array<Article>;
  /** The articles that match the search query. */
  collections: Array<Collection>;
  /** The pages that match the search query. */
  pages: Array<Page>;
  /** The products that match the search query. */
  products: Array<Product>;
  /** The query suggestions that are relevant to the search query. */
  queries: Array<SearchQuerySuggestion>;
};

/** The types of search items to perform predictive search on. */
enum PredictiveSearchType {
  /** Returns matching articles. */
  ARTICLE = 'ARTICLE',
  /** Returns matching collections. */
  COLLECTION = 'COLLECTION',
  /** Returns matching pages. */
  PAGE = 'PAGE',
  /** Returns matching products. */
  PRODUCT = 'PRODUCT',
  /** Returns matching query strings. */
  QUERY = 'QUERY'
}

/** The preferred delivery methods such as shipping, local pickup or through pickup points. */
enum PreferenceDeliveryMethodType {
  /** A delivery method used to let buyers collect purchases at designated locations like parcel lockers. */
  PICKUP_POINT = 'PICKUP_POINT',
  /** A delivery method used to let buyers receive items directly from a specific location within an area. */
  PICK_UP = 'PICK_UP',
  /** A delivery method used to send items directly to a buyer’s specified address. */
  SHIPPING = 'SHIPPING'
}

/**
 * The input fields for a filter used to view a subset of products in a collection matching a specific price range.
 *
 */
type PriceRangeFilter = {
  /** The maximum price in the range. Empty indicates no max price. */
  max?: InputMaybe<Scalars['Float']['input']>;
  /** The minimum price in the range. Defaults to zero. */
  min?: InputMaybe<Scalars['Float']['input']>;
};

/** The value of the percentage pricing object. */
type PricingPercentageValue = {
  __typename?: 'PricingPercentageValue';
  /** The percentage value of the object. */
  percentage: Scalars['Float']['output'];
};

/** The price value (fixed or percentage) for a discount application. */
type PricingValue = MoneyV2 | PricingPercentageValue;

/**
 * The `Product` object lets you manage products in a merchant’s store.
 *
 * Products are the goods and services that merchants offer to customers.
 * They can include various details such as title, description, price, images, and options such as size or color.
 * You can use [product variants](/docs/api/storefront/latest/objects/ProductVariant)
 * to create or update different versions of the same product.
 * You can also add or update product [media](/docs/api/storefront/latest/interfaces/Media).
 * Products can be organized by grouping them into a [collection](/docs/api/storefront/latest/objects/Collection).
 *
 * Learn more about working with [products and collections](/docs/storefronts/headless/building-with-the-storefront-api/products-collections).
 *
 */
type Product = HasMetafields & Node & OnlineStorePublishable & Trackable & {
  __typename?: 'Product';
  /**
   * A list of variants whose selected options differ with the provided selected options by one, ordered by variant id.
   * If selected options are not provided, adjacent variants to the first available variant is returned.
   *
   * Note that this field returns an array of variants. In most cases, the number of variants in this array will be low.
   * However, with a low number of options and a high number of values per option, the number of variants returned
   * here can be high. In such cases, it recommended to avoid using this field.
   *
   * This list of variants can be used in combination with the `options` field to build a rich variant picker that
   * includes variant availability or other variant information.
   *
   */
  adjacentVariants: Array<ProductVariant>;
  /** Indicates if at least one product variant is available for sale. */
  availableForSale: Scalars['Boolean']['output'];
  /** The category of a product from [Shopify's Standard Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17). */
  category?: Maybe<TaxonomyCategory>;
  /** A list of [collections](/docs/api/storefront/latest/objects/Collection) that include the product. */
  collections: CollectionConnection;
  /** The [compare-at price range](https://help.shopify.com/manual/products/details/product-pricing/sale-pricing) of the product in the shop's default currency. */
  compareAtPriceRange: ProductPriceRange;
  /** The date and time when the product was created. */
  createdAt: Scalars['DateTime']['output'];
  /** A single-line description of the product, with [HTML tags](https://developer.mozilla.org/en-US/docs/Web/HTML) removed. */
  description: Scalars['String']['output'];
  /**
   * The description of the product, with
   * HTML tags. For example, the description might include
   * bold `<strong></strong>` and italic `<i></i>` text.
   *
   */
  descriptionHtml: Scalars['HTML']['output'];
  /**
   * An encoded string containing all option value combinations
   * with a corresponding variant that is currently available for sale.
   *
   * Integers represent option and values:
   * [0,1] represents option_value at array index 0 for the option at array index 0
   *
   * `:`, `,`, ` ` and `-` are control characters.
   * `:` indicates a new option. ex: 0:1 indicates value 0 for the option in position 1, value 1 for the option in position 2.
   * `,` indicates the end of a repeated prefix, mulitple consecutive commas indicate the end of multiple repeated prefixes.
   * ` ` indicates a gap in the sequence of option values. ex: 0 4 indicates option values in position 0 and 4 are present.
   * `-` indicates a continuous range of option values. ex: 0 1-3 4
   *
   * Decoding process:
   *
   * Example options: [Size, Color, Material]
   * Example values: [[Small, Medium, Large], [Red, Blue], [Cotton, Wool]]
   * Example encoded string: "0:0:0,1:0-1,,1:0:0-1,1:1,,2:0:1,1:0,,"
   *
   * Step 1: Expand ranges into the numbers they represent: "0:0:0,1:0 1,,1:0:0 1,1:1,,2:0:1,1:0,,"
   * Step 2: Expand repeated prefixes: "0:0:0,0:1:0 1,1:0:0 1,1:1:1,2:0:1,2:1:0,"
   * Step 3: Expand shared prefixes so data is encoded as a string: "0:0:0,0:1:0,0:1:1,1:0:0,1:0:1,1:1:1,2:0:1,2:1:0,"
   * Step 4: Map to options + option values to determine existing variants:
   *
   * [Small, Red, Cotton] (0:0:0), [Small, Blue, Cotton] (0:1:0), [Small, Blue, Wool] (0:1:1),
   * [Medium, Red, Cotton] (1:0:0), [Medium, Red, Wool] (1:0:1), [Medium, Blue, Wool] (1:1:1),
   * [Large, Red, Wool] (2:0:1), [Large, Blue, Cotton] (2:1:0).
   *
   *
   */
  encodedVariantAvailability?: Maybe<Scalars['String']['output']>;
  /**
   * An encoded string containing all option value combinations with a corresponding variant.
   *
   * Integers represent option and values:
   * [0,1] represents option_value at array index 0 for the option at array index 0
   *
   * `:`, `,`, ` ` and `-` are control characters.
   * `:` indicates a new option. ex: 0:1 indicates value 0 for the option in position 1, value 1 for the option in position 2.
   * `,` indicates the end of a repeated prefix, mulitple consecutive commas indicate the end of multiple repeated prefixes.
   * ` ` indicates a gap in the sequence of option values. ex: 0 4 indicates option values in position 0 and 4 are present.
   * `-` indicates a continuous range of option values. ex: 0 1-3 4
   *
   * Decoding process:
   *
   * Example options: [Size, Color, Material]
   * Example values: [[Small, Medium, Large], [Red, Blue], [Cotton, Wool]]
   * Example encoded string: "0:0:0,1:0-1,,1:0:0-1,1:1,,2:0:1,1:0,,"
   *
   * Step 1: Expand ranges into the numbers they represent: "0:0:0,1:0 1,,1:0:0 1,1:1,,2:0:1,1:0,,"
   * Step 2: Expand repeated prefixes: "0:0:0,0:1:0 1,1:0:0 1,1:1:1,2:0:1,2:1:0,"
   * Step 3: Expand shared prefixes so data is encoded as a string: "0:0:0,0:1:0,0:1:1,1:0:0,1:0:1,1:1:1,2:0:1,2:1:0,"
   * Step 4: Map to options + option values to determine existing variants:
   *
   * [Small, Red, Cotton] (0:0:0), [Small, Blue, Cotton] (0:1:0), [Small, Blue, Wool] (0:1:1),
   * [Medium, Red, Cotton] (1:0:0), [Medium, Red, Wool] (1:0:1), [Medium, Blue, Wool] (1:1:1),
   * [Large, Red, Wool] (2:0:1), [Large, Blue, Cotton] (2:1:0).
   *
   *
   */
  encodedVariantExistence?: Maybe<Scalars['String']['output']>;
  /**
   * The featured image for the product.
   *
   * This field is functionally equivalent to `images(first: 1)`.
   *
   */
  featuredImage?: Maybe<Image>;
  /**
   * A unique, human-readable string of the product's title.
   * A handle can contain letters, hyphens (`-`), and numbers, but no spaces.
   * The handle is used in the online store URL for the product.
   *
   */
  handle: Scalars['String']['output'];
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** List of images associated with the product. */
  images: ImageConnection;
  /** Whether the product is a gift card. */
  isGiftCard: Scalars['Boolean']['output'];
  /** The [media](/docs/apps/build/online-store/product-media) that are associated with the product. Valid media are images, 3D models, videos. */
  media: MediaConnection;
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
  /**
   * The product's URL on the online store.
   * If `null`, then the product isn't published to the online store sales channel.
   *
   */
  onlineStoreUrl?: Maybe<Scalars['URL']['output']>;
  /** A list of product options. The limit is defined by the [shop's resource limits for product options](/docs/api/admin-graphql/latest/objects/Shop#field-resourcelimits) (`Shop.resourceLimits.maxProductOptions`). */
  options: Array<ProductOption>;
  /**
   * The minimum and maximum prices of a product, expressed in decimal numbers.
   * For example, if the product is priced between $10.00 and $50.00,
   * then the price range is $10.00 - $50.00.
   *
   */
  priceRange: ProductPriceRange;
  /**
   * The [product type](https://help.shopify.com/manual/products/details/product-type)
   * that merchants define.
   *
   */
  productType: Scalars['String']['output'];
  /** The date and time when the product was published to the channel. */
  publishedAt: Scalars['DateTime']['output'];
  /** Whether the product can only be purchased with a [selling plan](/docs/apps/build/purchase-options/subscriptions/selling-plans). Products that are sold on subscription (`requiresSellingPlan: true`) can be updated only for online stores. If you update a product to be subscription-only (`requiresSellingPlan:false`), then the product is unpublished from all channels, except the online store. */
  requiresSellingPlan: Scalars['Boolean']['output'];
  /**
   * Find an active product variant based on selected options, availability or the first variant.
   *
   * All arguments are optional. If no selected options are provided, the first available variant is returned.
   * If no variants are available, the first variant is returned.
   *
   */
  selectedOrFirstAvailableVariant?: Maybe<ProductVariant>;
  /** A list of all [selling plan groups](/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan) that are associated with the product either directly, or through the product's variants. */
  sellingPlanGroups: SellingPlanGroupConnection;
  /**
   * The [SEO title and description](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords)
   * that are associated with a product.
   *
   */
  seo: SEO;
  /**
   * A comma-separated list of searchable keywords that are
   * associated with the product. For example, a merchant might apply the `sports`
   * and `summer` tags to products that are associated with sportwear for summer.
   * Updating `tags` overwrites any existing tags that were previously added to the product.
   * To add new tags without overwriting existing tags,
   * use the GraphQL Admin API's [`tagsAdd`](/docs/api/admin-graphql/latest/mutations/tagsadd)
   * mutation.
   *
   */
  tags: Array<Scalars['String']['output']>;
  /**
   * The name for the product that displays to customers. The title is used to construct the product's handle.
   * For example, if a product is titled "Black Sunglasses", then the handle is `black-sunglasses`.
   *
   */
  title: Scalars['String']['output'];
  /** The quantity of inventory that's in stock. */
  totalInventory?: Maybe<Scalars['Int']['output']>;
  /** URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/current/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries, otherwise returns null. */
  trackingParameters?: Maybe<Scalars['String']['output']>;
  /**
   * The date and time when the product was last modified.
   * A product's `updatedAt` value can change for different reasons. For example, if an order
   * is placed for a product that has inventory tracking set up, then the inventory adjustment
   * is counted as an update.
   *
   */
  updatedAt: Scalars['DateTime']['output'];
  /**
   * Find a product’s variant based on its selected options.
   * This is useful for converting a user’s selection of product options into a single matching variant.
   * If there is not a variant for the selected options, `null` will be returned.
   *
   */
  variantBySelectedOptions?: Maybe<ProductVariant>;
  /** A list of [variants](/docs/api/storefront/latest/objects/ProductVariant) that are associated with the product. */
  variants: ProductVariantConnection;
  /** The number of [variants](/docs/api/storefront/latest/objects/ProductVariant) that are associated with the product. */
  variantsCount?: Maybe<Count>;
  /** The name of the product's vendor. */
  vendor: Scalars['String']['output'];
};


/**
 * The `Product` object lets you manage products in a merchant’s store.
 *
 * Products are the goods and services that merchants offer to customers.
 * They can include various details such as title, description, price, images, and options such as size or color.
 * You can use [product variants](/docs/api/storefront/latest/objects/ProductVariant)
 * to create or update different versions of the same product.
 * You can also add or update product [media](/docs/api/storefront/latest/interfaces/Media).
 * Products can be organized by grouping them into a [collection](/docs/api/storefront/latest/objects/Collection).
 *
 * Learn more about working with [products and collections](/docs/storefronts/headless/building-with-the-storefront-api/products-collections).
 *
 */
type ProductadjacentVariantsArgs = {
  caseInsensitiveMatch?: InputMaybe<Scalars['Boolean']['input']>;
  ignoreUnknownOptions?: InputMaybe<Scalars['Boolean']['input']>;
  selectedOptions?: InputMaybe<Array<SelectedOptionInput>>;
};


/**
 * The `Product` object lets you manage products in a merchant’s store.
 *
 * Products are the goods and services that merchants offer to customers.
 * They can include various details such as title, description, price, images, and options such as size or color.
 * You can use [product variants](/docs/api/storefront/latest/objects/ProductVariant)
 * to create or update different versions of the same product.
 * You can also add or update product [media](/docs/api/storefront/latest/interfaces/Media).
 * Products can be organized by grouping them into a [collection](/docs/api/storefront/latest/objects/Collection).
 *
 * Learn more about working with [products and collections](/docs/storefronts/headless/building-with-the-storefront-api/products-collections).
 *
 */
type ProductcollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * The `Product` object lets you manage products in a merchant’s store.
 *
 * Products are the goods and services that merchants offer to customers.
 * They can include various details such as title, description, price, images, and options such as size or color.
 * You can use [product variants](/docs/api/storefront/latest/objects/ProductVariant)
 * to create or update different versions of the same product.
 * You can also add or update product [media](/docs/api/storefront/latest/interfaces/Media).
 * Products can be organized by grouping them into a [collection](/docs/api/storefront/latest/objects/Collection).
 *
 * Learn more about working with [products and collections](/docs/storefronts/headless/building-with-the-storefront-api/products-collections).
 *
 */
type ProductdescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * The `Product` object lets you manage products in a merchant’s store.
 *
 * Products are the goods and services that merchants offer to customers.
 * They can include various details such as title, description, price, images, and options such as size or color.
 * You can use [product variants](/docs/api/storefront/latest/objects/ProductVariant)
 * to create or update different versions of the same product.
 * You can also add or update product [media](/docs/api/storefront/latest/interfaces/Media).
 * Products can be organized by grouping them into a [collection](/docs/api/storefront/latest/objects/Collection).
 *
 * Learn more about working with [products and collections](/docs/storefronts/headless/building-with-the-storefront-api/products-collections).
 *
 */
type ProductimagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ProductImageSortKeys>;
};


/**
 * The `Product` object lets you manage products in a merchant’s store.
 *
 * Products are the goods and services that merchants offer to customers.
 * They can include various details such as title, description, price, images, and options such as size or color.
 * You can use [product variants](/docs/api/storefront/latest/objects/ProductVariant)
 * to create or update different versions of the same product.
 * You can also add or update product [media](/docs/api/storefront/latest/interfaces/Media).
 * Products can be organized by grouping them into a [collection](/docs/api/storefront/latest/objects/Collection).
 *
 * Learn more about working with [products and collections](/docs/storefronts/headless/building-with-the-storefront-api/products-collections).
 *
 */
type ProductmediaArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ProductMediaSortKeys>;
};


/**
 * The `Product` object lets you manage products in a merchant’s store.
 *
 * Products are the goods and services that merchants offer to customers.
 * They can include various details such as title, description, price, images, and options such as size or color.
 * You can use [product variants](/docs/api/storefront/latest/objects/ProductVariant)
 * to create or update different versions of the same product.
 * You can also add or update product [media](/docs/api/storefront/latest/interfaces/Media).
 * Products can be organized by grouping them into a [collection](/docs/api/storefront/latest/objects/Collection).
 *
 * Learn more about working with [products and collections](/docs/storefronts/headless/building-with-the-storefront-api/products-collections).
 *
 */
type ProductmetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/**
 * The `Product` object lets you manage products in a merchant’s store.
 *
 * Products are the goods and services that merchants offer to customers.
 * They can include various details such as title, description, price, images, and options such as size or color.
 * You can use [product variants](/docs/api/storefront/latest/objects/ProductVariant)
 * to create or update different versions of the same product.
 * You can also add or update product [media](/docs/api/storefront/latest/interfaces/Media).
 * Products can be organized by grouping them into a [collection](/docs/api/storefront/latest/objects/Collection).
 *
 * Learn more about working with [products and collections](/docs/storefronts/headless/building-with-the-storefront-api/products-collections).
 *
 */
type ProductmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};


/**
 * The `Product` object lets you manage products in a merchant’s store.
 *
 * Products are the goods and services that merchants offer to customers.
 * They can include various details such as title, description, price, images, and options such as size or color.
 * You can use [product variants](/docs/api/storefront/latest/objects/ProductVariant)
 * to create or update different versions of the same product.
 * You can also add or update product [media](/docs/api/storefront/latest/interfaces/Media).
 * Products can be organized by grouping them into a [collection](/docs/api/storefront/latest/objects/Collection).
 *
 * Learn more about working with [products and collections](/docs/storefronts/headless/building-with-the-storefront-api/products-collections).
 *
 */
type ProductoptionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * The `Product` object lets you manage products in a merchant’s store.
 *
 * Products are the goods and services that merchants offer to customers.
 * They can include various details such as title, description, price, images, and options such as size or color.
 * You can use [product variants](/docs/api/storefront/latest/objects/ProductVariant)
 * to create or update different versions of the same product.
 * You can also add or update product [media](/docs/api/storefront/latest/interfaces/Media).
 * Products can be organized by grouping them into a [collection](/docs/api/storefront/latest/objects/Collection).
 *
 * Learn more about working with [products and collections](/docs/storefronts/headless/building-with-the-storefront-api/products-collections).
 *
 */
type ProductselectedOrFirstAvailableVariantArgs = {
  caseInsensitiveMatch?: InputMaybe<Scalars['Boolean']['input']>;
  ignoreUnknownOptions?: InputMaybe<Scalars['Boolean']['input']>;
  selectedOptions?: InputMaybe<Array<SelectedOptionInput>>;
};


/**
 * The `Product` object lets you manage products in a merchant’s store.
 *
 * Products are the goods and services that merchants offer to customers.
 * They can include various details such as title, description, price, images, and options such as size or color.
 * You can use [product variants](/docs/api/storefront/latest/objects/ProductVariant)
 * to create or update different versions of the same product.
 * You can also add or update product [media](/docs/api/storefront/latest/interfaces/Media).
 * Products can be organized by grouping them into a [collection](/docs/api/storefront/latest/objects/Collection).
 *
 * Learn more about working with [products and collections](/docs/storefronts/headless/building-with-the-storefront-api/products-collections).
 *
 */
type ProductsellingPlanGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * The `Product` object lets you manage products in a merchant’s store.
 *
 * Products are the goods and services that merchants offer to customers.
 * They can include various details such as title, description, price, images, and options such as size or color.
 * You can use [product variants](/docs/api/storefront/latest/objects/ProductVariant)
 * to create or update different versions of the same product.
 * You can also add or update product [media](/docs/api/storefront/latest/interfaces/Media).
 * Products can be organized by grouping them into a [collection](/docs/api/storefront/latest/objects/Collection).
 *
 * Learn more about working with [products and collections](/docs/storefronts/headless/building-with-the-storefront-api/products-collections).
 *
 */
type ProductvariantBySelectedOptionsArgs = {
  caseInsensitiveMatch?: InputMaybe<Scalars['Boolean']['input']>;
  ignoreUnknownOptions?: InputMaybe<Scalars['Boolean']['input']>;
  selectedOptions: Array<SelectedOptionInput>;
};


/**
 * The `Product` object lets you manage products in a merchant’s store.
 *
 * Products are the goods and services that merchants offer to customers.
 * They can include various details such as title, description, price, images, and options such as size or color.
 * You can use [product variants](/docs/api/storefront/latest/objects/ProductVariant)
 * to create or update different versions of the same product.
 * You can also add or update product [media](/docs/api/storefront/latest/interfaces/Media).
 * Products can be organized by grouping them into a [collection](/docs/api/storefront/latest/objects/Collection).
 *
 * Learn more about working with [products and collections](/docs/storefronts/headless/building-with-the-storefront-api/products-collections).
 *
 */
type ProductvariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ProductVariantSortKeys>;
};

/** The set of valid sort keys for the ProductCollection query. */
enum ProductCollectionSortKeys {
  /** Sort by the `best-selling` value. */
  BEST_SELLING = 'BEST_SELLING',
  /** Sort by the `collection-default` value. */
  COLLECTION_DEFAULT = 'COLLECTION_DEFAULT',
  /** Sort by the `created` value. */
  CREATED = 'CREATED',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** Sort by the `manual` value. */
  MANUAL = 'MANUAL',
  /** Sort by the `price` value. */
  PRICE = 'PRICE',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RELEVANCE = 'RELEVANCE',
  /** Sort by the `title` value. */
  TITLE = 'TITLE'
}

/**
 * An auto-generated type for paginating through multiple Products.
 *
 */
type ProductConnection = {
  __typename?: 'ProductConnection';
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** A list of available filters. */
  filters: Array<Filter>;
  /** A list of the nodes contained in ProductEdge. */
  nodes: Array<Product>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one Product and a cursor during pagination.
 *
 */
type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of ProductEdge. */
  node: Product;
};

/**
 * The input fields for a filter used to view a subset of products in a collection.
 * By default, the `available` and `price` filters are enabled. Filters are customized with the Shopify Search & Discovery app.
 * Learn more about [customizing storefront filtering](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).
 *
 */
type ProductFilter = {
  /** Filter on if the product is available for sale. */
  available?: InputMaybe<Scalars['Boolean']['input']>;
  /** A product category to filter on. */
  category?: InputMaybe<CategoryFilter>;
  /** A range of prices to filter with-in. */
  price?: InputMaybe<PriceRangeFilter>;
  /** A product metafield to filter on. */
  productMetafield?: InputMaybe<MetafieldFilter>;
  /** The product type to filter on. */
  productType?: InputMaybe<Scalars['String']['input']>;
  /** The product vendor to filter on. */
  productVendor?: InputMaybe<Scalars['String']['input']>;
  /** A product tag to filter on. */
  tag?: InputMaybe<Scalars['String']['input']>;
  /** A standard product attribute metafield to filter on. */
  taxonomyMetafield?: InputMaybe<TaxonomyMetafieldFilter>;
  /** A variant metafield to filter on. */
  variantMetafield?: InputMaybe<MetafieldFilter>;
  /** A variant option to filter on. */
  variantOption?: InputMaybe<VariantOptionFilter>;
};

/** The set of valid sort keys for the ProductImage query. */
enum ProductImageSortKeys {
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** Sort by the `position` value. */
  POSITION = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RELEVANCE = 'RELEVANCE'
}

/** The set of valid sort keys for the ProductMedia query. */
enum ProductMediaSortKeys {
  /** Sort by the `id` value. */
  ID = 'ID',
  /** Sort by the `position` value. */
  POSITION = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RELEVANCE = 'RELEVANCE'
}

/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 *
 */
type ProductOption = Node & {
  __typename?: 'ProductOption';
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The product option’s name. */
  name: Scalars['String']['output'];
  /** The corresponding option value to the product option. */
  optionValues: Array<ProductOptionValue>;
  /**
   * The corresponding value to the product option name.
   * @deprecated Use `optionValues` instead.
   */
  values: Array<Scalars['String']['output']>;
};

/**
 * The product option value names. For example, "Red", "Blue", and "Green" for a "Color" option.
 *
 */
type ProductOptionValue = Node & {
  __typename?: 'ProductOptionValue';
  /**
   * The product variant that combines this option value with the
   * lowest-position option values for all other options.
   *
   * This field will always return a variant, provided a variant including this option value exists.
   *
   */
  firstSelectableVariant?: Maybe<ProductVariant>;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The name of the product option value. */
  name: Scalars['String']['output'];
  /** The swatch of the product option value. */
  swatch?: Maybe<ProductOptionValueSwatch>;
};

/**
 * The product option value swatch.
 *
 */
type ProductOptionValueSwatch = {
  __typename?: 'ProductOptionValueSwatch';
  /** The swatch color. */
  color?: Maybe<Scalars['Color']['output']>;
  /** The swatch image. */
  image?: Maybe<Media>;
};

/** The price range of the product. */
type ProductPriceRange = {
  __typename?: 'ProductPriceRange';
  /** The highest variant's price. */
  maxVariantPrice: MoneyV2;
  /** The lowest variant's price. */
  minVariantPrice: MoneyV2;
};

/**
 * The recommendation intent that is used to generate product recommendations.
 * You can use intent to generate product recommendations according to different strategies.
 *
 */
enum ProductRecommendationIntent {
  /** Offer customers products that are complementary to a product for which recommendations are to be fetched. An example is add-on products that display in a Pair it with section. */
  COMPLEMENTARY = 'COMPLEMENTARY',
  /** Offer customers a mix of products that are similar or complementary to a product for which recommendations are to be fetched. An example is substitutable products that display in a You may also like section. */
  RELATED = 'RELATED'
}

/** The set of valid sort keys for the Product query. */
enum ProductSortKeys {
  /** Sort by the `best_selling` value. */
  BEST_SELLING = 'BEST_SELLING',
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** Sort by the `price` value. */
  PRICE = 'PRICE',
  /** Sort by the `product_type` value. */
  PRODUCT_TYPE = 'PRODUCT_TYPE',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RELEVANCE = 'RELEVANCE',
  /** Sort by the `title` value. */
  TITLE = 'TITLE',
  /** Sort by the `updated_at` value. */
  UPDATED_AT = 'UPDATED_AT',
  /** Sort by the `vendor` value. */
  VENDOR = 'VENDOR'
}

/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
type ProductVariant = HasMetafields & Node & {
  __typename?: 'ProductVariant';
  /** Indicates if the product variant is available for sale. */
  availableForSale: Scalars['Boolean']['output'];
  /** The barcode (for example, ISBN, UPC, or GTIN) associated with the variant. */
  barcode?: Maybe<Scalars['String']['output']>;
  /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`. */
  compareAtPrice?: Maybe<MoneyV2>;
  /**
   * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`.
   * @deprecated Use `compareAtPrice` instead.
   */
  compareAtPriceV2?: Maybe<MoneyV2>;
  /**
   * List of bundles components included in the variant considering only fixed bundles.
   *
   */
  components: ProductVariantComponentConnection;
  /** Whether a product is out of stock but still available for purchase (used for backorders). */
  currentlyNotInStock: Scalars['Boolean']['output'];
  /**
   * List of bundles that include this variant considering only fixed bundles.
   *
   */
  groupedBy: ProductVariantConnection;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** Image associated with the product variant. This field falls back to the product image if no image is available. */
  image?: Maybe<Image>;
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
  /** The product variant’s price. */
  price: MoneyV2;
  /**
   * The product variant’s price.
   * @deprecated Use `price` instead.
   */
  priceV2: MoneyV2;
  /** The product object that the product variant belongs to. */
  product: Product;
  /** The total sellable quantity of the variant for online sales channels. */
  quantityAvailable?: Maybe<Scalars['Int']['output']>;
  /** A list of quantity breaks for the product variant. */
  quantityPriceBreaks: QuantityPriceBreakConnection;
  /** The quantity rule for the product variant in a given context. */
  quantityRule: QuantityRule;
  /**
   * Whether a product variant requires components. The default value is `false`.
   * If `true`, then the product variant can only be purchased as a parent bundle with components.
   *
   */
  requiresComponents: Scalars['Boolean']['output'];
  /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
  requiresShipping: Scalars['Boolean']['output'];
  /** List of product options applied to the variant. */
  selectedOptions: Array<SelectedOption>;
  /** Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing. */
  sellingPlanAllocations: SellingPlanAllocationConnection;
  /** The Shop Pay Installments pricing information for the product variant. */
  shopPayInstallmentsPricing?: Maybe<ShopPayInstallmentsProductVariantPricing>;
  /** The SKU (stock keeping unit) associated with the variant. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The in-store pickup availability of this variant by location. */
  storeAvailability: StoreAvailabilityConnection;
  /** Whether tax is charged when the product variant is sold. */
  taxable: Scalars['Boolean']['output'];
  /** The product variant’s title. */
  title: Scalars['String']['output'];
  /** The unit price value for the variant based on the variant's measurement. */
  unitPrice?: Maybe<MoneyV2>;
  /** The unit price measurement for the variant. */
  unitPriceMeasurement?: Maybe<UnitPriceMeasurement>;
  /** The weight of the product variant in the unit system specified with `weight_unit`. */
  weight?: Maybe<Scalars['Float']['output']>;
  /** Unit of measurement for weight. */
  weightUnit: WeightUnit;
};


/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
type ProductVariantcomponentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
type ProductVariantgroupedByArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
type ProductVariantmetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
type ProductVariantmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};


/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
type ProductVariantquantityPriceBreaksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
type ProductVariantsellingPlanAllocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
type ProductVariantstoreAvailabilityArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  near?: InputMaybe<GeoCoordinateInput>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Represents a component of a bundle variant.
 *
 */
type ProductVariantComponent = {
  __typename?: 'ProductVariantComponent';
  /** The product variant object that the component belongs to. */
  productVariant: ProductVariant;
  /** The quantity of component present in the bundle. */
  quantity: Scalars['Int']['output'];
};

/**
 * An auto-generated type for paginating through multiple ProductVariantComponents.
 *
 */
type ProductVariantComponentConnection = {
  __typename?: 'ProductVariantComponentConnection';
  /** A list of edges. */
  edges: Array<ProductVariantComponentEdge>;
  /** A list of the nodes contained in ProductVariantComponentEdge. */
  nodes: Array<ProductVariantComponent>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one ProductVariantComponent and a cursor during pagination.
 *
 */
type ProductVariantComponentEdge = {
  __typename?: 'ProductVariantComponentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of ProductVariantComponentEdge. */
  node: ProductVariantComponent;
};

/**
 * An auto-generated type for paginating through multiple ProductVariants.
 *
 */
type ProductVariantConnection = {
  __typename?: 'ProductVariantConnection';
  /** A list of edges. */
  edges: Array<ProductVariantEdge>;
  /** A list of the nodes contained in ProductVariantEdge. */
  nodes: Array<ProductVariant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one ProductVariant and a cursor during pagination.
 *
 */
type ProductVariantEdge = {
  __typename?: 'ProductVariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of ProductVariantEdge. */
  node: ProductVariant;
};

/** The set of valid sort keys for the ProductVariant query. */
enum ProductVariantSortKeys {
  /** Sort by the `id` value. */
  ID = 'ID',
  /** Sort by the `position` value. */
  POSITION = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RELEVANCE = 'RELEVANCE',
  /** Sort by the `sku` value. */
  SKU = 'SKU',
  /** Sort by the `title` value. */
  TITLE = 'TITLE'
}

/** Represents information about the buyer that is interacting with the cart. */
type PurchasingCompany = {
  __typename?: 'PurchasingCompany';
  /** The company associated to the order or draft order. */
  company: Company;
  /** The company contact associated to the order or draft order. */
  contact?: Maybe<CompanyContact>;
  /** The company location associated to the order or draft order. */
  location: CompanyLocation;
};

/**
 * Quantity price breaks lets you offer different rates that are based on the
 * amount of a specific variant being ordered.
 *
 */
type QuantityPriceBreak = {
  __typename?: 'QuantityPriceBreak';
  /**
   * Minimum quantity required to reach new quantity break price.
   *
   */
  minimumQuantity: Scalars['Int']['output'];
  /**
   * The price of variant after reaching the minimum quanity.
   *
   */
  price: MoneyV2;
};

/**
 * An auto-generated type for paginating through multiple QuantityPriceBreaks.
 *
 */
type QuantityPriceBreakConnection = {
  __typename?: 'QuantityPriceBreakConnection';
  /** A list of edges. */
  edges: Array<QuantityPriceBreakEdge>;
  /** A list of the nodes contained in QuantityPriceBreakEdge. */
  nodes: Array<QuantityPriceBreak>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one QuantityPriceBreak and a cursor during pagination.
 *
 */
type QuantityPriceBreakEdge = {
  __typename?: 'QuantityPriceBreakEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of QuantityPriceBreakEdge. */
  node: QuantityPriceBreak;
};

/**
 * The quantity rule for the product variant in a given context.
 *
 */
type QuantityRule = {
  __typename?: 'QuantityRule';
  /**
   * The value that specifies the quantity increment between minimum and maximum of the rule.
   * Only quantities divisible by this value will be considered valid.
   *
   * The increment must be lower than or equal to the minimum and the maximum, and both minimum and maximum
   * must be divisible by this value.
   *
   */
  increment: Scalars['Int']['output'];
  /**
   * An optional value that defines the highest allowed quantity purchased by the customer.
   * If defined, maximum must be lower than or equal to the minimum and must be a multiple of the increment.
   *
   */
  maximum?: Maybe<Scalars['Int']['output']>;
  /**
   * The value that defines the lowest allowed quantity purchased by the customer.
   * The minimum must be a multiple of the quantity rule's increment.
   *
   */
  minimum: Scalars['Int']['output'];
};

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRoot = {
  __typename?: 'QueryRoot';
  /** Fetch a specific Article by its ID. */
  article?: Maybe<Article>;
  /** List of the shop's articles. */
  articles: ArticleConnection;
  /** Fetch a specific `Blog` by one of its unique attributes. */
  blog?: Maybe<Blog>;
  /**
   * Find a blog by its handle.
   * @deprecated Use `blog` instead.
   */
  blogByHandle?: Maybe<Blog>;
  /** List of the shop's blogs. */
  blogs: BlogConnection;
  /**
   * Retrieve a cart by its ID. For more information, refer to
   * [Manage a cart with the Storefront API](https://shopify.dev/custom-storefronts/cart/manage).
   *
   */
  cart?: Maybe<Cart>;
  /**
   * A poll for the status of the cart checkout completion and order creation.
   *
   */
  cartCompletionAttempt?: Maybe<CartCompletionAttemptResult>;
  /** Fetch a specific `Collection` by one of its unique attributes. */
  collection?: Maybe<Collection>;
  /**
   * Find a collection by its handle.
   * @deprecated Use `collection` instead.
   */
  collectionByHandle?: Maybe<Collection>;
  /** List of the shop’s collections. */
  collections: CollectionConnection;
  /**
   * The customer associated with the given access token. Tokens are obtained by using the
   * [`customerAccessTokenCreate` mutation](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreate).
   *
   */
  customer?: Maybe<Customer>;
  /** Returns the localized experiences configured for the shop. */
  localization: Localization;
  /**
   * List of the shop's locations that support in-store pickup.
   *
   * When sorting by distance, you must specify a location via the `near` argument.
   *
   *
   */
  locations: LocationConnection;
  /** Retrieve a [navigation menu](https://help.shopify.com/manual/online-store/menus-and-links) by its handle. */
  menu?: Maybe<Menu>;
  /** Fetch a specific Metaobject by one of its unique identifiers. */
  metaobject?: Maybe<Metaobject>;
  /** All active metaobjects for the shop. */
  metaobjects: MetaobjectConnection;
  /** Returns a specific node by ID. */
  node?: Maybe<Node>;
  /** Returns the list of nodes with the given IDs. */
  nodes: Array<Maybe<Node>>;
  /** Fetch a specific `Page` by one of its unique attributes. */
  page?: Maybe<Page>;
  /**
   * Find a page by its handle.
   * @deprecated Use `page` instead.
   */
  pageByHandle?: Maybe<Page>;
  /** List of the shop's pages. */
  pages: PageConnection;
  /** Settings related to payments. */
  paymentSettings: PaymentSettings;
  /** List of the predictive search results. */
  predictiveSearch?: Maybe<PredictiveSearchResult>;
  /** Fetch a specific `Product` by one of its unique attributes. */
  product?: Maybe<Product>;
  /**
   * Find a product by its handle.
   * @deprecated Use `product` instead.
   */
  productByHandle?: Maybe<Product>;
  /**
   * Find recommended products related to a given `product_id`.
   * To learn more about how recommendations are generated, see
   * [*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).
   *
   */
  productRecommendations?: Maybe<Array<Product>>;
  /**
   * Tags added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   *
   */
  productTags: StringConnection;
  /** List of product types for the shop's products that are published to your app. */
  productTypes: StringConnection;
  /** Returns a list of the shop's products. For storefront search, use the [`search`](https://shopify.dev/docs/api/storefront/latest/queries/search) query. */
  products: ProductConnection;
  /** The list of public Storefront API versions, including supported, release candidate and unstable versions. */
  publicApiVersions: Array<ApiVersion>;
  /** List of the search results. */
  search: SearchResultItemConnection;
  /** The shop associated with the storefront access token. */
  shop: Shop;
  /** Contains all fields required to generate sitemaps. */
  sitemap: Sitemap;
  /** A list of redirects for a shop. */
  urlRedirects: UrlRedirectConnection;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootarticleArgs = {
  id: Scalars['ID']['input'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootarticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ArticleSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootblogArgs = {
  handle?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootblogByHandleArgs = {
  handle: Scalars['String']['input'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootblogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<BlogSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootcartArgs = {
  id: Scalars['ID']['input'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootcartCompletionAttemptArgs = {
  attemptId: Scalars['String']['input'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootcollectionArgs = {
  handle?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootcollectionByHandleArgs = {
  handle: Scalars['String']['input'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootcollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<CollectionSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootcustomerArgs = {
  customerAccessToken: Scalars['String']['input'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootlocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  near?: InputMaybe<GeoCoordinateInput>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<LocationSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootmenuArgs = {
  handle: Scalars['String']['input'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootmetaobjectArgs = {
  handle?: InputMaybe<MetaobjectHandleInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootmetaobjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootnodeArgs = {
  id: Scalars['ID']['input'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootnodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootpageArgs = {
  handle?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootpageByHandleArgs = {
  handle: Scalars['String']['input'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootpagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<PageSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootpredictiveSearchArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  limitScope?: InputMaybe<PredictiveSearchLimitScope>;
  query: Scalars['String']['input'];
  searchableFields?: InputMaybe<Array<SearchableField>>;
  types?: InputMaybe<Array<PredictiveSearchType>>;
  unavailableProducts?: InputMaybe<SearchUnavailableProductsType>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootproductArgs = {
  handle?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootproductByHandleArgs = {
  handle: Scalars['String']['input'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootproductRecommendationsArgs = {
  intent?: InputMaybe<ProductRecommendationIntent>;
  productHandle?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootproductTagsArgs = {
  first: Scalars['Int']['input'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootproductTypesArgs = {
  first: Scalars['Int']['input'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootproductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ProductSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootsearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  prefix?: InputMaybe<SearchPrefixQueryType>;
  productFilters?: InputMaybe<Array<ProductFilter>>;
  query: Scalars['String']['input'];
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<SearchSortKeys>;
  types?: InputMaybe<Array<SearchType>>;
  unavailableProducts?: InputMaybe<SearchUnavailableProductsType>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootsitemapArgs = {
  type: SitemapType;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRooturlRedirectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};

/** SEO information. */
type SEO = {
  __typename?: 'SEO';
  /** The meta description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The SEO title. */
  title?: Maybe<Scalars['String']['output']>;
};

/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script.
 *
 */
type ScriptDiscountApplication = DiscountApplication & {
  __typename?: 'ScriptDiscountApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
  /** The title of the application as defined by the Script. */
  title: Scalars['String']['output'];
  /** The value of the discount application. */
  value: PricingValue;
};

/** Specifies whether to perform a partial word match on the last search term. */
enum SearchPrefixQueryType {
  /** Perform a partial word match on the last search term. */
  LAST = 'LAST',
  /** Don't perform a partial word match on the last search term. */
  NONE = 'NONE'
}

/** A search query suggestion. */
type SearchQuerySuggestion = Trackable & {
  __typename?: 'SearchQuerySuggestion';
  /** The text of the search query suggestion with highlighted HTML tags. */
  styledText: Scalars['String']['output'];
  /** The text of the search query suggestion. */
  text: Scalars['String']['output'];
  /** URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/current/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries, otherwise returns null. */
  trackingParameters?: Maybe<Scalars['String']['output']>;
};

/**
 * A search result that matches the search query.
 *
 */
type SearchResultItem = Article | Page | Product;

/**
 * An auto-generated type for paginating through multiple SearchResultItems.
 *
 */
type SearchResultItemConnection = {
  __typename?: 'SearchResultItemConnection';
  /** A list of edges. */
  edges: Array<SearchResultItemEdge>;
  /** A list of the nodes contained in SearchResultItemEdge. */
  nodes: Array<SearchResultItem>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of available filters. */
  productFilters: Array<Filter>;
  /** The total number of results. */
  totalCount: Scalars['Int']['output'];
};

/**
 * An auto-generated type which holds one SearchResultItem and a cursor during pagination.
 *
 */
type SearchResultItemEdge = {
  __typename?: 'SearchResultItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of SearchResultItemEdge. */
  node: SearchResultItem;
};

/** The set of valid sort keys for the search query. */
enum SearchSortKeys {
  /** Sort by the `price` value. */
  PRICE = 'PRICE',
  /** Sort by relevance to the search terms. */
  RELEVANCE = 'RELEVANCE'
}

/** The types of search items to perform search within. */
enum SearchType {
  /** Returns matching articles. */
  ARTICLE = 'ARTICLE',
  /** Returns matching pages. */
  PAGE = 'PAGE',
  /** Returns matching products. */
  PRODUCT = 'PRODUCT'
}

/** Specifies whether to display results for unavailable products. */
enum SearchUnavailableProductsType {
  /** Exclude unavailable products. */
  HIDE = 'HIDE',
  /** Show unavailable products after all other matching results. This is the default. */
  LAST = 'LAST',
  /** Show unavailable products in the order that they're found. */
  SHOW = 'SHOW'
}

/** Specifies the list of resource fields to search. */
enum SearchableField {
  /** Author of the page or article. */
  AUTHOR = 'AUTHOR',
  /** Body of the page or article or product description or collection description. */
  BODY = 'BODY',
  /** Product type. */
  PRODUCT_TYPE = 'PRODUCT_TYPE',
  /** Tag associated with the product or article. */
  TAG = 'TAG',
  /** Title of the page or article or product title or collection title. */
  TITLE = 'TITLE',
  /** Variant barcode. */
  VARIANTS_BARCODE = 'VARIANTS_BARCODE',
  /** Variant SKU. */
  VARIANTS_SKU = 'VARIANTS_SKU',
  /** Variant title. */
  VARIANTS_TITLE = 'VARIANTS_TITLE',
  /** Product vendor. */
  VENDOR = 'VENDOR'
}

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 *
 */
type SelectedOption = {
  __typename?: 'SelectedOption';
  /** The product option’s name. */
  name: Scalars['String']['output'];
  /** The product option’s value. */
  value: Scalars['String']['output'];
};

/** The input fields required for a selected option. */
type SelectedOptionInput = {
  /** The product option’s name. */
  name: Scalars['String']['input'];
  /** The product option’s value. */
  value: Scalars['String']['input'];
};

/** Represents how products and variants can be sold and purchased. */
type SellingPlan = HasMetafields & {
  __typename?: 'SellingPlan';
  /** The billing policy for the selling plan. */
  billingPolicy?: Maybe<SellingPlanBillingPolicy>;
  /** The initial payment due for the purchase. */
  checkoutCharge: SellingPlanCheckoutCharge;
  /** The delivery policy for the selling plan. */
  deliveryPolicy?: Maybe<SellingPlanDeliveryPolicy>;
  /** The description of the selling plan. */
  description?: Maybe<Scalars['String']['output']>;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
  /** The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'. */
  name: Scalars['String']['output'];
  /** The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing. */
  options: Array<SellingPlanOption>;
  /** The price adjustments that a selling plan makes when a variant is purchased with a selling plan. */
  priceAdjustments: Array<SellingPlanPriceAdjustment>;
  /** Whether purchasing the selling plan will result in multiple deliveries. */
  recurringDeliveries: Scalars['Boolean']['output'];
};


/** Represents how products and variants can be sold and purchased. */
type SellingPlanmetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/** Represents how products and variants can be sold and purchased. */
type SellingPlanmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};

/** Represents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan. */
type SellingPlanAllocation = {
  __typename?: 'SellingPlanAllocation';
  /** The checkout charge amount due for the purchase. */
  checkoutChargeAmount: MoneyV2;
  /** A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it. */
  priceAdjustments: Array<SellingPlanAllocationPriceAdjustment>;
  /** The remaining balance charge amount due for the purchase. */
  remainingBalanceChargeAmount: MoneyV2;
  /** A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlan: SellingPlan;
};

/**
 * An auto-generated type for paginating through multiple SellingPlanAllocations.
 *
 */
type SellingPlanAllocationConnection = {
  __typename?: 'SellingPlanAllocationConnection';
  /** A list of edges. */
  edges: Array<SellingPlanAllocationEdge>;
  /** A list of the nodes contained in SellingPlanAllocationEdge. */
  nodes: Array<SellingPlanAllocation>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination.
 *
 */
type SellingPlanAllocationEdge = {
  __typename?: 'SellingPlanAllocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of SellingPlanAllocationEdge. */
  node: SellingPlanAllocation;
};

/** The resulting prices for variants when they're purchased with a specific selling plan. */
type SellingPlanAllocationPriceAdjustment = {
  __typename?: 'SellingPlanAllocationPriceAdjustment';
  /** The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00. */
  compareAtPrice: MoneyV2;
  /** The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00. */
  perDeliveryPrice: MoneyV2;
  /** The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00. */
  price: MoneyV2;
  /** The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`. */
  unitPrice?: Maybe<MoneyV2>;
};

/** The selling plan billing policy. */
type SellingPlanBillingPolicy = SellingPlanRecurringBillingPolicy;

/** The initial payment due for the purchase. */
type SellingPlanCheckoutCharge = {
  __typename?: 'SellingPlanCheckoutCharge';
  /** The charge type for the checkout charge. */
  type: SellingPlanCheckoutChargeType;
  /** The charge value for the checkout charge. */
  value: SellingPlanCheckoutChargeValue;
};

/** The percentage value of the price used for checkout charge. */
type SellingPlanCheckoutChargePercentageValue = {
  __typename?: 'SellingPlanCheckoutChargePercentageValue';
  /** The percentage value of the price used for checkout charge. */
  percentage: Scalars['Float']['output'];
};

/** The checkout charge when the full amount isn't charged at checkout. */
enum SellingPlanCheckoutChargeType {
  /** The checkout charge is a percentage of the product or variant price. */
  PERCENTAGE = 'PERCENTAGE',
  /** The checkout charge is a fixed price amount. */
  PRICE = 'PRICE'
}

/** The portion of the price to be charged at checkout. */
type SellingPlanCheckoutChargeValue = MoneyV2 | SellingPlanCheckoutChargePercentageValue;

/**
 * An auto-generated type for paginating through multiple SellingPlans.
 *
 */
type SellingPlanConnection = {
  __typename?: 'SellingPlanConnection';
  /** A list of edges. */
  edges: Array<SellingPlanEdge>;
  /** A list of the nodes contained in SellingPlanEdge. */
  nodes: Array<SellingPlan>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** The selling plan delivery policy. */
type SellingPlanDeliveryPolicy = SellingPlanRecurringDeliveryPolicy;

/**
 * An auto-generated type which holds one SellingPlan and a cursor during pagination.
 *
 */
type SellingPlanEdge = {
  __typename?: 'SellingPlanEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of SellingPlanEdge. */
  node: SellingPlan;
};

/** A fixed amount that's deducted from the original variant price. For example, $10.00 off. */
type SellingPlanFixedAmountPriceAdjustment = {
  __typename?: 'SellingPlanFixedAmountPriceAdjustment';
  /** The money value of the price adjustment. */
  adjustmentAmount: MoneyV2;
};

/** A fixed price adjustment for a variant that's purchased with a selling plan. */
type SellingPlanFixedPriceAdjustment = {
  __typename?: 'SellingPlanFixedPriceAdjustment';
  /** A new price of the variant when it's purchased with the selling plan. */
  price: MoneyV2;
};

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
type SellingPlanGroup = {
  __typename?: 'SellingPlanGroup';
  /** A display friendly name for the app that created the selling plan group. */
  appName?: Maybe<Scalars['String']['output']>;
  /** The name of the selling plan group. */
  name: Scalars['String']['output'];
  /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<SellingPlanGroupOption>;
  /** A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlans: SellingPlanConnection;
};


/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
type SellingPlanGroupsellingPlansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * An auto-generated type for paginating through multiple SellingPlanGroups.
 *
 */
type SellingPlanGroupConnection = {
  __typename?: 'SellingPlanGroupConnection';
  /** A list of edges. */
  edges: Array<SellingPlanGroupEdge>;
  /** A list of the nodes contained in SellingPlanGroupEdge. */
  nodes: Array<SellingPlanGroup>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one SellingPlanGroup and a cursor during pagination.
 *
 */
type SellingPlanGroupEdge = {
  __typename?: 'SellingPlanGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of SellingPlanGroupEdge. */
  node: SellingPlanGroup;
};

/**
 * Represents an option on a selling plan group that's available in the drop-down list in the storefront.
 *
 * Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.
 */
type SellingPlanGroupOption = {
  __typename?: 'SellingPlanGroupOption';
  /** The name of the option. For example, 'Delivery every'. */
  name: Scalars['String']['output'];
  /** The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'. */
  values: Array<Scalars['String']['output']>;
};

/** Represents a valid selling plan interval. */
enum SellingPlanInterval {
  /** Day interval. */
  DAY = 'DAY',
  /** Month interval. */
  MONTH = 'MONTH',
  /** Week interval. */
  WEEK = 'WEEK',
  /** Year interval. */
  YEAR = 'YEAR'
}

/** An option provided by a Selling Plan. */
type SellingPlanOption = {
  __typename?: 'SellingPlanOption';
  /** The name of the option (ie "Delivery every"). */
  name?: Maybe<Scalars['String']['output']>;
  /** The value of the option (ie "Month"). */
  value?: Maybe<Scalars['String']['output']>;
};

/** A percentage amount that's deducted from the original variant price. For example, 10% off. */
type SellingPlanPercentagePriceAdjustment = {
  __typename?: 'SellingPlanPercentagePriceAdjustment';
  /** The percentage value of the price adjustment. */
  adjustmentPercentage: Scalars['Float']['output'];
};

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price. */
type SellingPlanPriceAdjustment = {
  __typename?: 'SellingPlanPriceAdjustment';
  /** The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price. */
  adjustmentValue: SellingPlanPriceAdjustmentValue;
  /** The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`. */
  orderCount?: Maybe<Scalars['Int']['output']>;
};

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
type SellingPlanPriceAdjustmentValue = SellingPlanFixedAmountPriceAdjustment | SellingPlanFixedPriceAdjustment | SellingPlanPercentagePriceAdjustment;

/** The recurring billing policy for the selling plan. */
type SellingPlanRecurringBillingPolicy = {
  __typename?: 'SellingPlanRecurringBillingPolicy';
  /** The billing frequency, it can be either: day, week, month or year. */
  interval: SellingPlanInterval;
  /** The number of intervals between billings. */
  intervalCount: Scalars['Int']['output'];
};

/** The recurring delivery policy for the selling plan. */
type SellingPlanRecurringDeliveryPolicy = {
  __typename?: 'SellingPlanRecurringDeliveryPolicy';
  /** The delivery frequency, it can be either: day, week, month or year. */
  interval: SellingPlanInterval;
  /** The number of intervals between deliveries. */
  intervalCount: Scalars['Int']['output'];
};

/** Shop represents a collection of the general settings and information about the shop. */
type Shop = HasMetafields & Node & {
  __typename?: 'Shop';
  /** The shop's branding configuration. */
  brand?: Maybe<Brand>;
  /** The URL for the customer account (only present if shop has a customer account vanity domain). */
  customerAccountUrl?: Maybe<Scalars['String']['output']>;
  /** A description of the shop. */
  description?: Maybe<Scalars['String']['output']>;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information. */
  metafield?: Maybe<Metafield>;
  /** A list of [custom fields](/docs/apps/build/custom-data) that a merchant associates with a Shopify resource. */
  metafields: Array<Maybe<Metafield>>;
  /** A string representing the way currency is formatted when the currency isn’t specified. */
  moneyFormat: Scalars['String']['output'];
  /** The shop’s name. */
  name: Scalars['String']['output'];
  /** Settings related to payments. */
  paymentSettings: PaymentSettings;
  /** The primary domain of the shop’s Online Store. */
  primaryDomain: Domain;
  /** The shop’s privacy policy. */
  privacyPolicy?: Maybe<ShopPolicy>;
  /** The shop’s refund policy. */
  refundPolicy?: Maybe<ShopPolicy>;
  /** The shop’s shipping policy. */
  shippingPolicy?: Maybe<ShopPolicy>;
  /** Countries that the shop ships to. */
  shipsToCountries: Array<CountryCode>;
  /** The Shop Pay Installments pricing information for the shop. */
  shopPayInstallmentsPricing?: Maybe<ShopPayInstallmentsPricing>;
  /** The shop’s subscription policy. */
  subscriptionPolicy?: Maybe<ShopPolicyWithDefault>;
  /** The shop’s terms of service. */
  termsOfService?: Maybe<ShopPolicy>;
};


/** Shop represents a collection of the general settings and information about the shop. */
type ShopmetafieldArgs = {
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/** Shop represents a collection of the general settings and information about the shop. */
type ShopmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};

/** The financing plan in Shop Pay Installments. */
type ShopPayInstallmentsFinancingPlan = Node & {
  __typename?: 'ShopPayInstallmentsFinancingPlan';
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The maximum price to qualify for the financing plan. */
  maxPrice: MoneyV2;
  /** The minimum price to qualify for the financing plan. */
  minPrice: MoneyV2;
  /** The terms of the financing plan. */
  terms: Array<ShopPayInstallmentsFinancingPlanTerm>;
};

/** The payment frequency for a Shop Pay Installments Financing Plan. */
enum ShopPayInstallmentsFinancingPlanFrequency {
  /** Monthly payment frequency. */
  MONTHLY = 'MONTHLY',
  /** Weekly payment frequency. */
  WEEKLY = 'WEEKLY'
}

/** The terms of the financing plan in Shop Pay Installments. */
type ShopPayInstallmentsFinancingPlanTerm = Node & {
  __typename?: 'ShopPayInstallmentsFinancingPlanTerm';
  /** The annual percentage rate (APR) of the financing plan. */
  apr: Scalars['Int']['output'];
  /** The payment frequency for the financing plan. */
  frequency: ShopPayInstallmentsFinancingPlanFrequency;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The number of installments for the financing plan. */
  installmentsCount?: Maybe<Count>;
  /** The type of loan for the financing plan. */
  loanType: ShopPayInstallmentsLoan;
};

/** The loan type for a Shop Pay Installments Financing Plan Term. */
enum ShopPayInstallmentsLoan {
  /** An interest-bearing loan type. */
  INTEREST = 'INTEREST',
  /** A split-pay loan type. */
  SPLIT_PAY = 'SPLIT_PAY',
  /** A zero-percent loan type. */
  ZERO_PERCENT = 'ZERO_PERCENT'
}

/** The result for a Shop Pay Installments pricing request. */
type ShopPayInstallmentsPricing = {
  __typename?: 'ShopPayInstallmentsPricing';
  /** The financing plans available for the given price range. */
  financingPlans: Array<ShopPayInstallmentsFinancingPlan>;
  /** The maximum price to qualify for financing. */
  maxPrice: MoneyV2;
  /** The minimum price to qualify for financing. */
  minPrice: MoneyV2;
};

/** The shop pay installments pricing information for a product variant. */
type ShopPayInstallmentsProductVariantPricing = Node & {
  __typename?: 'ShopPayInstallmentsProductVariantPricing';
  /** Whether the product variant is available. */
  available: Scalars['Boolean']['output'];
  /** Whether the product variant is eligible for Shop Pay Installments. */
  eligible: Scalars['Boolean']['output'];
  /** The full price of the product variant. */
  fullPrice: MoneyV2;
  /** The ID of the product variant. */
  id: Scalars['ID']['output'];
  /** The number of payment terms available for the product variant. */
  installmentsCount?: Maybe<Count>;
  /** The price per term for the product variant. */
  pricePerTerm: MoneyV2;
};

/** Represents a Shop Pay payment request. */
type ShopPayPaymentRequest = {
  __typename?: 'ShopPayPaymentRequest';
  /** The delivery methods for the payment request. */
  deliveryMethods: Array<ShopPayPaymentRequestDeliveryMethod>;
  /** The discount codes for the payment request. */
  discountCodes: Array<Scalars['String']['output']>;
  /** The discounts for the payment request order. */
  discounts?: Maybe<Array<ShopPayPaymentRequestDiscount>>;
  /** The line items for the payment request. */
  lineItems: Array<ShopPayPaymentRequestLineItem>;
  /** The locale for the payment request. */
  locale: Scalars['String']['output'];
  /** The presentment currency for the payment request. */
  presentmentCurrency: CurrencyCode;
  /** The delivery method type for the payment request. */
  selectedDeliveryMethodType: ShopPayPaymentRequestDeliveryMethodType;
  /** The shipping address for the payment request. */
  shippingAddress?: Maybe<ShopPayPaymentRequestContactField>;
  /** The shipping lines for the payment request. */
  shippingLines: Array<ShopPayPaymentRequestShippingLine>;
  /** The subtotal amount for the payment request. */
  subtotal: MoneyV2;
  /** The total amount for the payment request. */
  total: MoneyV2;
  /** The total shipping price for the payment request. */
  totalShippingPrice?: Maybe<ShopPayPaymentRequestTotalShippingPrice>;
  /** The total tax for the payment request. */
  totalTax?: Maybe<MoneyV2>;
};

/** Represents a contact field for a Shop Pay payment request. */
type ShopPayPaymentRequestContactField = {
  __typename?: 'ShopPayPaymentRequestContactField';
  /** The first address line of the contact field. */
  address1: Scalars['String']['output'];
  /** The second address line of the contact field. */
  address2?: Maybe<Scalars['String']['output']>;
  /** The city of the contact field. */
  city: Scalars['String']['output'];
  /** The company name of the contact field. */
  companyName?: Maybe<Scalars['String']['output']>;
  /** The country of the contact field. */
  countryCode: Scalars['String']['output'];
  /** The email of the contact field. */
  email?: Maybe<Scalars['String']['output']>;
  /** The first name of the contact field. */
  firstName: Scalars['String']['output'];
  /** The first name of the contact field. */
  lastName: Scalars['String']['output'];
  /** The phone number of the contact field. */
  phone?: Maybe<Scalars['String']['output']>;
  /** The postal code of the contact field. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The province of the contact field. */
  provinceCode?: Maybe<Scalars['String']['output']>;
};

/** Represents a delivery method for a Shop Pay payment request. */
type ShopPayPaymentRequestDeliveryMethod = {
  __typename?: 'ShopPayPaymentRequestDeliveryMethod';
  /** The amount for the delivery method. */
  amount: MoneyV2;
  /** The code of the delivery method. */
  code: Scalars['String']['output'];
  /** The detail about when the delivery may be expected. */
  deliveryExpectationLabel?: Maybe<Scalars['String']['output']>;
  /** The detail of the delivery method. */
  detail?: Maybe<Scalars['String']['output']>;
  /** The label of the delivery method. */
  label: Scalars['String']['output'];
  /** The maximum delivery date for the delivery method. */
  maxDeliveryDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** The minimum delivery date for the delivery method. */
  minDeliveryDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

/** The input fields to create a delivery method for a Shop Pay payment request. */
type ShopPayPaymentRequestDeliveryMethodInput = {
  /** The amount for the delivery method. */
  amount?: InputMaybe<MoneyInput>;
  /** The code of the delivery method. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** The detail about when the delivery may be expected. */
  deliveryExpectationLabel?: InputMaybe<Scalars['String']['input']>;
  /** The detail of the delivery method. */
  detail?: InputMaybe<Scalars['String']['input']>;
  /** The label of the delivery method. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** The maximum delivery date for the delivery method. */
  maxDeliveryDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** The minimum delivery date for the delivery method. */
  minDeliveryDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

/** Represents the delivery method type for a Shop Pay payment request. */
enum ShopPayPaymentRequestDeliveryMethodType {
  /** The delivery method type is pickup. */
  PICKUP = 'PICKUP',
  /** The delivery method type is shipping. */
  SHIPPING = 'SHIPPING'
}

/** Represents a discount for a Shop Pay payment request. */
type ShopPayPaymentRequestDiscount = {
  __typename?: 'ShopPayPaymentRequestDiscount';
  /** The amount of the discount. */
  amount: MoneyV2;
  /** The label of the discount. */
  label: Scalars['String']['output'];
};

/** The input fields to create a discount for a Shop Pay payment request. */
type ShopPayPaymentRequestDiscountInput = {
  /** The amount of the discount. */
  amount?: InputMaybe<MoneyInput>;
  /** The label of the discount. */
  label?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an image for a Shop Pay payment request line item. */
type ShopPayPaymentRequestImage = {
  __typename?: 'ShopPayPaymentRequestImage';
  /** The alt text of the image. */
  alt?: Maybe<Scalars['String']['output']>;
  /** The source URL of the image. */
  url: Scalars['String']['output'];
};

/** The input fields to create an image for a Shop Pay payment request. */
type ShopPayPaymentRequestImageInput = {
  /** The alt text of the image. */
  alt?: InputMaybe<Scalars['String']['input']>;
  /** The source URL of the image. */
  url: Scalars['String']['input'];
};

/** The input fields represent a Shop Pay payment request. */
type ShopPayPaymentRequestInput = {
  /**
   * The delivery methods for the payment request.
   *
   * The input must not contain more than `250` values.
   */
  deliveryMethods?: InputMaybe<Array<ShopPayPaymentRequestDeliveryMethodInput>>;
  /**
   * The discount codes for the payment request.
   *
   * The input must not contain more than `250` values.
   */
  discountCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * The discounts for the payment request order.
   *
   * The input must not contain more than `250` values.
   */
  discounts?: InputMaybe<Array<ShopPayPaymentRequestDiscountInput>>;
  /**
   * The line items for the payment request.
   *
   * The input must not contain more than `250` values.
   */
  lineItems?: InputMaybe<Array<ShopPayPaymentRequestLineItemInput>>;
  /** The locale for the payment request. */
  locale: Scalars['String']['input'];
  /** The encrypted payment method for the payment request. */
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  /** The presentment currency for the payment request. */
  presentmentCurrency: CurrencyCode;
  /** The delivery method type for the payment request. */
  selectedDeliveryMethodType?: InputMaybe<ShopPayPaymentRequestDeliveryMethodType>;
  /**
   * The shipping lines for the payment request.
   *
   * The input must not contain more than `250` values.
   */
  shippingLines?: InputMaybe<Array<ShopPayPaymentRequestShippingLineInput>>;
  /** The subtotal amount for the payment request. */
  subtotal: MoneyInput;
  /** The total amount for the payment request. */
  total: MoneyInput;
  /** The total shipping price for the payment request. */
  totalShippingPrice?: InputMaybe<ShopPayPaymentRequestTotalShippingPriceInput>;
  /** The total tax for the payment request. */
  totalTax?: InputMaybe<MoneyInput>;
};

/** Represents a line item for a Shop Pay payment request. */
type ShopPayPaymentRequestLineItem = {
  __typename?: 'ShopPayPaymentRequestLineItem';
  /** The final item price for the line item. */
  finalItemPrice: MoneyV2;
  /** The final line price for the line item. */
  finalLinePrice: MoneyV2;
  /** The image of the line item. */
  image?: Maybe<ShopPayPaymentRequestImage>;
  /** The item discounts for the line item. */
  itemDiscounts?: Maybe<Array<ShopPayPaymentRequestDiscount>>;
  /** The label of the line item. */
  label: Scalars['String']['output'];
  /** The line discounts for the line item. */
  lineDiscounts?: Maybe<Array<ShopPayPaymentRequestDiscount>>;
  /** The original item price for the line item. */
  originalItemPrice?: Maybe<MoneyV2>;
  /** The original line price for the line item. */
  originalLinePrice?: Maybe<MoneyV2>;
  /** The quantity of the line item. */
  quantity: Scalars['Int']['output'];
  /** Whether the line item requires shipping. */
  requiresShipping?: Maybe<Scalars['Boolean']['output']>;
  /** The SKU of the line item. */
  sku?: Maybe<Scalars['String']['output']>;
};

/** The input fields to create a line item for a Shop Pay payment request. */
type ShopPayPaymentRequestLineItemInput = {
  /** The final item price for the line item. */
  finalItemPrice?: InputMaybe<MoneyInput>;
  /** The final line price for the line item. */
  finalLinePrice?: InputMaybe<MoneyInput>;
  /** The image of the line item. */
  image?: InputMaybe<ShopPayPaymentRequestImageInput>;
  /**
   * The item discounts for the line item.
   *
   * The input must not contain more than `250` values.
   */
  itemDiscounts?: InputMaybe<Array<ShopPayPaymentRequestDiscountInput>>;
  /** The label of the line item. */
  label?: InputMaybe<Scalars['String']['input']>;
  /**
   * The line discounts for the line item.
   *
   * The input must not contain more than `250` values.
   */
  lineDiscounts?: InputMaybe<Array<ShopPayPaymentRequestDiscountInput>>;
  /** The original item price for the line item. */
  originalItemPrice?: InputMaybe<MoneyInput>;
  /** The original line price for the line item. */
  originalLinePrice?: InputMaybe<MoneyInput>;
  /** The quantity of the line item. */
  quantity: Scalars['Int']['input'];
  /** Whether the line item requires shipping. */
  requiresShipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** The SKU of the line item. */
  sku?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a receipt for a Shop Pay payment request. */
type ShopPayPaymentRequestReceipt = {
  __typename?: 'ShopPayPaymentRequestReceipt';
  /** The payment request object. */
  paymentRequest: ShopPayPaymentRequest;
  /** The processing status. */
  processingStatusType: Scalars['String']['output'];
  /** The token of the receipt. */
  token: Scalars['String']['output'];
};

/** Represents a Shop Pay payment request session. */
type ShopPayPaymentRequestSession = {
  __typename?: 'ShopPayPaymentRequestSession';
  /** The checkout URL of the Shop Pay payment request session. */
  checkoutUrl: Scalars['URL']['output'];
  /** The payment request associated with the Shop Pay payment request session. */
  paymentRequest: ShopPayPaymentRequest;
  /** The source identifier of the Shop Pay payment request session. */
  sourceIdentifier: Scalars['String']['output'];
  /** The token of the Shop Pay payment request session. */
  token: Scalars['String']['output'];
};

/** Return type for `shopPayPaymentRequestSessionCreate` mutation. */
type ShopPayPaymentRequestSessionCreatePayload = {
  __typename?: 'ShopPayPaymentRequestSessionCreatePayload';
  /** The new Shop Pay payment request session object. */
  shopPayPaymentRequestSession?: Maybe<ShopPayPaymentRequestSession>;
  /** Error codes for failed Shop Pay payment request session mutations. */
  userErrors: Array<UserErrorsShopPayPaymentRequestSessionUserErrors>;
};

/** Return type for `shopPayPaymentRequestSessionSubmit` mutation. */
type ShopPayPaymentRequestSessionSubmitPayload = {
  __typename?: 'ShopPayPaymentRequestSessionSubmitPayload';
  /** The checkout on which the payment was applied. */
  paymentRequestReceipt?: Maybe<ShopPayPaymentRequestReceipt>;
  /** Error codes for failed Shop Pay payment request session mutations. */
  userErrors: Array<UserErrorsShopPayPaymentRequestSessionUserErrors>;
};

/** Represents a shipping line for a Shop Pay payment request. */
type ShopPayPaymentRequestShippingLine = {
  __typename?: 'ShopPayPaymentRequestShippingLine';
  /** The amount for the shipping line. */
  amount: MoneyV2;
  /** The code of the shipping line. */
  code: Scalars['String']['output'];
  /** The label of the shipping line. */
  label: Scalars['String']['output'];
};

/** The input fields to create a shipping line for a Shop Pay payment request. */
type ShopPayPaymentRequestShippingLineInput = {
  /** The amount for the shipping line. */
  amount?: InputMaybe<MoneyInput>;
  /** The code of the shipping line. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** The label of the shipping line. */
  label?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a shipping total for a Shop Pay payment request. */
type ShopPayPaymentRequestTotalShippingPrice = {
  __typename?: 'ShopPayPaymentRequestTotalShippingPrice';
  /** The discounts for the shipping total. */
  discounts: Array<ShopPayPaymentRequestDiscount>;
  /** The final total for the shipping total. */
  finalTotal: MoneyV2;
  /** The original total for the shipping total. */
  originalTotal?: Maybe<MoneyV2>;
};

/** The input fields to create a shipping total for a Shop Pay payment request. */
type ShopPayPaymentRequestTotalShippingPriceInput = {
  /**
   * The discounts for the shipping total.
   *
   * The input must not contain more than `250` values.
   */
  discounts?: InputMaybe<Array<ShopPayPaymentRequestDiscountInput>>;
  /** The final total for the shipping total. */
  finalTotal?: InputMaybe<MoneyInput>;
  /** The original total for the shipping total. */
  originalTotal?: InputMaybe<MoneyInput>;
};

/**
 * The input fields for submitting Shop Pay payment method information for checkout.
 *
 */
type ShopPayWalletContentInput = {
  /** The customer's billing address. */
  billingAddress: MailingAddressInput;
  /** Session token for transaction. */
  sessionToken: Scalars['String']['input'];
};

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
type ShopPolicy = Node & {
  __typename?: 'ShopPolicy';
  /** Policy text, maximum size of 64kb. */
  body: Scalars['String']['output'];
  /** Policy’s handle. */
  handle: Scalars['String']['output'];
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** Policy’s title. */
  title: Scalars['String']['output'];
  /** Public URL to the policy. */
  url: Scalars['URL']['output'];
};

/**
 * A policy for the store that comes with a default value, such as a subscription policy.
 * If the merchant hasn't configured a policy for their store, then the policy will return the default value.
 * Otherwise, the policy will return the merchant-configured value.
 *
 */
type ShopPolicyWithDefault = {
  __typename?: 'ShopPolicyWithDefault';
  /** The text of the policy. Maximum size: 64KB. */
  body: Scalars['String']['output'];
  /** The handle of the policy. */
  handle: Scalars['String']['output'];
  /** The unique ID of the policy. A default policy doesn't have an ID. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The title of the policy. */
  title: Scalars['String']['output'];
  /** Public URL to the policy. */
  url: Scalars['URL']['output'];
};

/** Contains all fields required to generate sitemaps. */
type Sitemap = {
  __typename?: 'Sitemap';
  /** The number of sitemap's pages for a given type. */
  pagesCount?: Maybe<Count>;
  /**
   * A list of sitemap's resources for a given type.
   *
   * Important Notes:
   *   - The number of items per page varies from 0 to 250.
   *   - Empty pages (0 items) may occur and do not necessarily indicate the end of results.
   *   - Always check `hasNextPage` to determine if more pages are available.
   *
   */
  resources?: Maybe<PaginatedSitemapResources>;
};


/** Contains all fields required to generate sitemaps. */
type SitemapresourcesArgs = {
  page: Scalars['Int']['input'];
};

/** Represents a sitemap's image. */
type SitemapImage = {
  __typename?: 'SitemapImage';
  /** Image's alt text. */
  alt?: Maybe<Scalars['String']['output']>;
  /** Path to the image. */
  filepath?: Maybe<Scalars['String']['output']>;
  /** The date and time when the image was updated. */
  updatedAt: Scalars['DateTime']['output'];
};

/** Represents a sitemap resource that is not a metaobject. */
type SitemapResource = SitemapResourceInterface & {
  __typename?: 'SitemapResource';
  /** Resource's handle. */
  handle: Scalars['String']['output'];
  /** Resource's image. */
  image?: Maybe<SitemapImage>;
  /** Resource's title. */
  title?: Maybe<Scalars['String']['output']>;
  /** The date and time when the resource was updated. */
  updatedAt: Scalars['DateTime']['output'];
};

/** Represents the common fields for all sitemap resource types. */
type SitemapResourceInterface = {
  /** Resource's handle. */
  handle: Scalars['String']['output'];
  /** The date and time when the resource was updated. */
  updatedAt: Scalars['DateTime']['output'];
};

/**
 * A SitemapResourceMetaobject represents a metaobject with
 * [the `renderable` capability](https://shopify.dev/docs/apps/build/custom-data/metaobjects/use-metaobject-capabilities#render-metaobjects-as-web-pages).
 *
 */
type SitemapResourceMetaobject = SitemapResourceInterface & {
  __typename?: 'SitemapResourceMetaobject';
  /** Resource's handle. */
  handle: Scalars['String']['output'];
  /** The URL handle for accessing pages of this metaobject type in the Online Store. */
  onlineStoreUrlHandle?: Maybe<Scalars['String']['output']>;
  /** The type of the metaobject. Defines the namespace of its associated metafields. */
  type: Scalars['String']['output'];
  /** The date and time when the resource was updated. */
  updatedAt: Scalars['DateTime']['output'];
};

/** The types of resources potentially present in a sitemap. */
enum SitemapType {
  /** Articles present in the sitemap. */
  ARTICLE = 'ARTICLE',
  /** Blogs present in the sitemap. */
  BLOG = 'BLOG',
  /** Collections present in the sitemap. */
  COLLECTION = 'COLLECTION',
  /**
   * Metaobjects present in the sitemap. Only metaobject types with the
   * [`renderable` capability](https://shopify.dev/docs/apps/build/custom-data/metaobjects/use-metaobject-capabilities#render-metaobjects-as-web-pages)
   * are included in sitemap.
   *
   */
  METAOBJECT = 'METAOBJECT',
  /** Pages present in the sitemap. */
  PAGE = 'PAGE',
  /** Products present in the sitemap. */
  PRODUCT = 'PRODUCT'
}

/**
 * The availability of a product variant at a particular location.
 * Local pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.
 *
 */
type StoreAvailability = {
  __typename?: 'StoreAvailability';
  /** Whether the product variant is in-stock at this location. */
  available: Scalars['Boolean']['output'];
  /** The location where this product variant is stocked at. */
  location: Location;
  /** Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours). */
  pickUpTime: Scalars['String']['output'];
  /** The quantity of the product variant in-stock at this location. */
  quantityAvailable: Scalars['Int']['output'];
};

/**
 * An auto-generated type for paginating through multiple StoreAvailabilities.
 *
 */
type StoreAvailabilityConnection = {
  __typename?: 'StoreAvailabilityConnection';
  /** A list of edges. */
  edges: Array<StoreAvailabilityEdge>;
  /** A list of the nodes contained in StoreAvailabilityEdge. */
  nodes: Array<StoreAvailability>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one StoreAvailability and a cursor during pagination.
 *
 */
type StoreAvailabilityEdge = {
  __typename?: 'StoreAvailabilityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of StoreAvailabilityEdge. */
  node: StoreAvailability;
};

/**
 * An auto-generated type for paginating through multiple Strings.
 *
 */
type StringConnection = {
  __typename?: 'StringConnection';
  /** A list of edges. */
  edges: Array<StringEdge>;
  /** A list of the nodes contained in StringEdge. */
  nodes: Array<Scalars['String']['output']>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one String and a cursor during pagination.
 *
 */
type StringEdge = {
  __typename?: 'StringEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of StringEdge. */
  node: Scalars['String']['output'];
};

/** An error that occurred during cart submit for completion. */
type SubmissionError = {
  __typename?: 'SubmissionError';
  /** The error code. */
  code: SubmissionErrorCode;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** The code of the error that occurred during cart submit for completion. */
enum SubmissionErrorCode {
  BUYER_IDENTITY_EMAIL_IS_INVALID = 'BUYER_IDENTITY_EMAIL_IS_INVALID',
  BUYER_IDENTITY_EMAIL_REQUIRED = 'BUYER_IDENTITY_EMAIL_REQUIRED',
  BUYER_IDENTITY_PHONE_IS_INVALID = 'BUYER_IDENTITY_PHONE_IS_INVALID',
  DELIVERY_ADDRESS1_INVALID = 'DELIVERY_ADDRESS1_INVALID',
  DELIVERY_ADDRESS1_REQUIRED = 'DELIVERY_ADDRESS1_REQUIRED',
  DELIVERY_ADDRESS1_TOO_LONG = 'DELIVERY_ADDRESS1_TOO_LONG',
  DELIVERY_ADDRESS2_INVALID = 'DELIVERY_ADDRESS2_INVALID',
  DELIVERY_ADDRESS2_REQUIRED = 'DELIVERY_ADDRESS2_REQUIRED',
  DELIVERY_ADDRESS2_TOO_LONG = 'DELIVERY_ADDRESS2_TOO_LONG',
  DELIVERY_ADDRESS_REQUIRED = 'DELIVERY_ADDRESS_REQUIRED',
  DELIVERY_CITY_INVALID = 'DELIVERY_CITY_INVALID',
  DELIVERY_CITY_REQUIRED = 'DELIVERY_CITY_REQUIRED',
  DELIVERY_CITY_TOO_LONG = 'DELIVERY_CITY_TOO_LONG',
  DELIVERY_COMPANY_INVALID = 'DELIVERY_COMPANY_INVALID',
  DELIVERY_COMPANY_REQUIRED = 'DELIVERY_COMPANY_REQUIRED',
  DELIVERY_COMPANY_TOO_LONG = 'DELIVERY_COMPANY_TOO_LONG',
  DELIVERY_COUNTRY_REQUIRED = 'DELIVERY_COUNTRY_REQUIRED',
  DELIVERY_FIRST_NAME_INVALID = 'DELIVERY_FIRST_NAME_INVALID',
  DELIVERY_FIRST_NAME_REQUIRED = 'DELIVERY_FIRST_NAME_REQUIRED',
  DELIVERY_FIRST_NAME_TOO_LONG = 'DELIVERY_FIRST_NAME_TOO_LONG',
  DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY = 'DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY',
  DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE = 'DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE',
  DELIVERY_LAST_NAME_INVALID = 'DELIVERY_LAST_NAME_INVALID',
  DELIVERY_LAST_NAME_REQUIRED = 'DELIVERY_LAST_NAME_REQUIRED',
  DELIVERY_LAST_NAME_TOO_LONG = 'DELIVERY_LAST_NAME_TOO_LONG',
  DELIVERY_NO_DELIVERY_AVAILABLE = 'DELIVERY_NO_DELIVERY_AVAILABLE',
  DELIVERY_NO_DELIVERY_AVAILABLE_FOR_MERCHANDISE_LINE = 'DELIVERY_NO_DELIVERY_AVAILABLE_FOR_MERCHANDISE_LINE',
  DELIVERY_OPTIONS_PHONE_NUMBER_INVALID = 'DELIVERY_OPTIONS_PHONE_NUMBER_INVALID',
  DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED = 'DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED',
  DELIVERY_PHONE_NUMBER_INVALID = 'DELIVERY_PHONE_NUMBER_INVALID',
  DELIVERY_PHONE_NUMBER_REQUIRED = 'DELIVERY_PHONE_NUMBER_REQUIRED',
  DELIVERY_POSTAL_CODE_INVALID = 'DELIVERY_POSTAL_CODE_INVALID',
  DELIVERY_POSTAL_CODE_REQUIRED = 'DELIVERY_POSTAL_CODE_REQUIRED',
  DELIVERY_ZONE_NOT_FOUND = 'DELIVERY_ZONE_NOT_FOUND',
  DELIVERY_ZONE_REQUIRED_FOR_COUNTRY = 'DELIVERY_ZONE_REQUIRED_FOR_COUNTRY',
  ERROR = 'ERROR',
  MERCHANDISE_LINE_LIMIT_REACHED = 'MERCHANDISE_LINE_LIMIT_REACHED',
  MERCHANDISE_NOT_APPLICABLE = 'MERCHANDISE_NOT_APPLICABLE',
  MERCHANDISE_NOT_ENOUGH_STOCK_AVAILABLE = 'MERCHANDISE_NOT_ENOUGH_STOCK_AVAILABLE',
  MERCHANDISE_OUT_OF_STOCK = 'MERCHANDISE_OUT_OF_STOCK',
  MERCHANDISE_PRODUCT_NOT_PUBLISHED = 'MERCHANDISE_PRODUCT_NOT_PUBLISHED',
  NO_DELIVERY_GROUP_SELECTED = 'NO_DELIVERY_GROUP_SELECTED',
  PAYMENTS_ADDRESS1_INVALID = 'PAYMENTS_ADDRESS1_INVALID',
  PAYMENTS_ADDRESS1_REQUIRED = 'PAYMENTS_ADDRESS1_REQUIRED',
  PAYMENTS_ADDRESS1_TOO_LONG = 'PAYMENTS_ADDRESS1_TOO_LONG',
  PAYMENTS_ADDRESS2_INVALID = 'PAYMENTS_ADDRESS2_INVALID',
  PAYMENTS_ADDRESS2_REQUIRED = 'PAYMENTS_ADDRESS2_REQUIRED',
  PAYMENTS_ADDRESS2_TOO_LONG = 'PAYMENTS_ADDRESS2_TOO_LONG',
  PAYMENTS_BILLING_ADDRESS_ZONE_NOT_FOUND = 'PAYMENTS_BILLING_ADDRESS_ZONE_NOT_FOUND',
  PAYMENTS_BILLING_ADDRESS_ZONE_REQUIRED_FOR_COUNTRY = 'PAYMENTS_BILLING_ADDRESS_ZONE_REQUIRED_FOR_COUNTRY',
  PAYMENTS_CITY_INVALID = 'PAYMENTS_CITY_INVALID',
  PAYMENTS_CITY_REQUIRED = 'PAYMENTS_CITY_REQUIRED',
  PAYMENTS_CITY_TOO_LONG = 'PAYMENTS_CITY_TOO_LONG',
  PAYMENTS_COMPANY_INVALID = 'PAYMENTS_COMPANY_INVALID',
  PAYMENTS_COMPANY_REQUIRED = 'PAYMENTS_COMPANY_REQUIRED',
  PAYMENTS_COMPANY_TOO_LONG = 'PAYMENTS_COMPANY_TOO_LONG',
  PAYMENTS_COUNTRY_REQUIRED = 'PAYMENTS_COUNTRY_REQUIRED',
  PAYMENTS_CREDIT_CARD_BASE_EXPIRED = 'PAYMENTS_CREDIT_CARD_BASE_EXPIRED',
  PAYMENTS_CREDIT_CARD_BASE_GATEWAY_NOT_SUPPORTED = 'PAYMENTS_CREDIT_CARD_BASE_GATEWAY_NOT_SUPPORTED',
  PAYMENTS_CREDIT_CARD_BASE_INVALID_START_DATE_OR_ISSUE_NUMBER_FOR_DEBIT = 'PAYMENTS_CREDIT_CARD_BASE_INVALID_START_DATE_OR_ISSUE_NUMBER_FOR_DEBIT',
  PAYMENTS_CREDIT_CARD_BRAND_NOT_SUPPORTED = 'PAYMENTS_CREDIT_CARD_BRAND_NOT_SUPPORTED',
  PAYMENTS_CREDIT_CARD_FIRST_NAME_BLANK = 'PAYMENTS_CREDIT_CARD_FIRST_NAME_BLANK',
  PAYMENTS_CREDIT_CARD_GENERIC = 'PAYMENTS_CREDIT_CARD_GENERIC',
  PAYMENTS_CREDIT_CARD_LAST_NAME_BLANK = 'PAYMENTS_CREDIT_CARD_LAST_NAME_BLANK',
  PAYMENTS_CREDIT_CARD_MONTH_INCLUSION = 'PAYMENTS_CREDIT_CARD_MONTH_INCLUSION',
  PAYMENTS_CREDIT_CARD_NAME_INVALID = 'PAYMENTS_CREDIT_CARD_NAME_INVALID',
  PAYMENTS_CREDIT_CARD_NUMBER_INVALID = 'PAYMENTS_CREDIT_CARD_NUMBER_INVALID',
  PAYMENTS_CREDIT_CARD_NUMBER_INVALID_FORMAT = 'PAYMENTS_CREDIT_CARD_NUMBER_INVALID_FORMAT',
  PAYMENTS_CREDIT_CARD_SESSION_ID = 'PAYMENTS_CREDIT_CARD_SESSION_ID',
  PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_BLANK = 'PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_BLANK',
  PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_INVALID_FOR_CARD_TYPE = 'PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_INVALID_FOR_CARD_TYPE',
  PAYMENTS_CREDIT_CARD_YEAR_EXPIRED = 'PAYMENTS_CREDIT_CARD_YEAR_EXPIRED',
  PAYMENTS_CREDIT_CARD_YEAR_INVALID_EXPIRY_YEAR = 'PAYMENTS_CREDIT_CARD_YEAR_INVALID_EXPIRY_YEAR',
  PAYMENTS_FIRST_NAME_INVALID = 'PAYMENTS_FIRST_NAME_INVALID',
  PAYMENTS_FIRST_NAME_REQUIRED = 'PAYMENTS_FIRST_NAME_REQUIRED',
  PAYMENTS_FIRST_NAME_TOO_LONG = 'PAYMENTS_FIRST_NAME_TOO_LONG',
  PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY = 'PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY',
  PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE = 'PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE',
  PAYMENTS_LAST_NAME_INVALID = 'PAYMENTS_LAST_NAME_INVALID',
  PAYMENTS_LAST_NAME_REQUIRED = 'PAYMENTS_LAST_NAME_REQUIRED',
  PAYMENTS_LAST_NAME_TOO_LONG = 'PAYMENTS_LAST_NAME_TOO_LONG',
  PAYMENTS_METHOD_REQUIRED = 'PAYMENTS_METHOD_REQUIRED',
  PAYMENTS_METHOD_UNAVAILABLE = 'PAYMENTS_METHOD_UNAVAILABLE',
  PAYMENTS_PHONE_NUMBER_INVALID = 'PAYMENTS_PHONE_NUMBER_INVALID',
  PAYMENTS_PHONE_NUMBER_REQUIRED = 'PAYMENTS_PHONE_NUMBER_REQUIRED',
  PAYMENTS_POSTAL_CODE_INVALID = 'PAYMENTS_POSTAL_CODE_INVALID',
  PAYMENTS_POSTAL_CODE_REQUIRED = 'PAYMENTS_POSTAL_CODE_REQUIRED',
  PAYMENTS_SHOPIFY_PAYMENTS_REQUIRED = 'PAYMENTS_SHOPIFY_PAYMENTS_REQUIRED',
  PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT = 'PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT',
  PAYMENTS_WALLET_CONTENT_MISSING = 'PAYMENTS_WALLET_CONTENT_MISSING',
  /** Redirect to checkout required to complete this action. */
  REDIRECT_TO_CHECKOUT_REQUIRED = 'REDIRECT_TO_CHECKOUT_REQUIRED',
  TAXES_DELIVERY_GROUP_ID_NOT_FOUND = 'TAXES_DELIVERY_GROUP_ID_NOT_FOUND',
  TAXES_LINE_ID_NOT_FOUND = 'TAXES_LINE_ID_NOT_FOUND',
  TAXES_MUST_BE_DEFINED = 'TAXES_MUST_BE_DEFINED',
  /** Validation failed. */
  VALIDATION_CUSTOM = 'VALIDATION_CUSTOM'
}

/** Cart submit for checkout completion is successful. */
type SubmitAlreadyAccepted = {
  __typename?: 'SubmitAlreadyAccepted';
  /** The ID of the cart completion attempt that will be used for polling for the result. */
  attemptId: Scalars['String']['output'];
};

/** Cart submit for checkout completion failed. */
type SubmitFailed = {
  __typename?: 'SubmitFailed';
  /** The URL of the checkout for the cart. */
  checkoutUrl?: Maybe<Scalars['URL']['output']>;
  /** The list of errors that occurred from executing the mutation. */
  errors: Array<SubmissionError>;
};

/** Cart submit for checkout completion is already accepted. */
type SubmitSuccess = {
  __typename?: 'SubmitSuccess';
  /** The ID of the cart completion attempt that will be used for polling for the result. */
  attemptId: Scalars['String']['output'];
  /** The url to which the buyer should be redirected after the cart is successfully submitted. */
  redirectUrl: Scalars['URL']['output'];
};

/** Cart submit for checkout completion is throttled. */
type SubmitThrottled = {
  __typename?: 'SubmitThrottled';
  /**
   * UTC date time string that indicates the time after which clients should make their next
   * poll request. Any poll requests sent before this time will be ignored. Use this value to schedule the
   * next poll request.
   *
   */
  pollAfter: Scalars['DateTime']['output'];
};

/** Color and image for visual representation. */
type Swatch = {
  __typename?: 'Swatch';
  /** The swatch color. */
  color?: Maybe<Scalars['Color']['output']>;
  /** The swatch image. */
  image?: Maybe<MediaImage>;
};

/**
 * The taxonomy category for the product.
 *
 */
type TaxonomyCategory = Node & {
  __typename?: 'TaxonomyCategory';
  /** All parent nodes of the current taxonomy category. */
  ancestors: Array<TaxonomyCategory>;
  /** A static identifier for the taxonomy category. */
  id: Scalars['ID']['output'];
  /** The localized name of the taxonomy category. */
  name: Scalars['String']['output'];
};

/**
 * A filter used to view a subset of products in a collection matching a specific taxonomy metafield value.
 *
 */
type TaxonomyMetafieldFilter = {
  /** The key of the metafield to filter on. */
  key: Scalars['String']['input'];
  /** The namespace of the metafield to filter on. */
  namespace: Scalars['String']['input'];
  /** The value of the metafield. */
  value: Scalars['String']['input'];
};

/** Represents a resource that you can track the origin of the search traffic. */
type Trackable = {
  /** URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/current/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries, otherwise returns null. */
  trackingParameters?: Maybe<Scalars['String']['output']>;
};

/**
 * The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).
 *
 */
type UnitPriceMeasurement = {
  __typename?: 'UnitPriceMeasurement';
  /** The type of unit of measurement for the unit price measurement. */
  measuredType?: Maybe<UnitPriceMeasurementMeasuredType>;
  /** The quantity unit for the unit price measurement. */
  quantityUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>;
  /** The quantity value for the unit price measurement. */
  quantityValue: Scalars['Float']['output'];
  /** The reference unit for the unit price measurement. */
  referenceUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>;
  /** The reference value for the unit price measurement. */
  referenceValue: Scalars['Int']['output'];
};

/** The accepted types of unit of measurement. */
enum UnitPriceMeasurementMeasuredType {
  /** Unit of measurements representing areas. */
  AREA = 'AREA',
  /** Unit of measurements representing counts. */
  COUNT = 'COUNT',
  /** Unit of measurements representing lengths. */
  LENGTH = 'LENGTH',
  /** The type of measurement is unknown. Upgrade to the latest version of the API to resolve this type. */
  UNKNOWN = 'UNKNOWN',
  /** Unit of measurements representing volumes. */
  VOLUME = 'VOLUME',
  /** Unit of measurements representing weights. */
  WEIGHT = 'WEIGHT'
}

/** The valid units of measurement for a unit price measurement. */
enum UnitPriceMeasurementMeasuredUnit {
  /** 100 centiliters equals 1 liter. */
  CL = 'CL',
  /** 100 centimeters equals 1 meter. */
  CM = 'CM',
  /** Imperial system unit of volume (U.S. customary unit). */
  FLOZ = 'FLOZ',
  /** 1 foot equals 12 inches. */
  FT = 'FT',
  /** Imperial system unit of area. */
  FT2 = 'FT2',
  /** Metric system unit of weight. */
  G = 'G',
  /** 1 gallon equals 128 fluid ounces (U.S. customary unit). */
  GAL = 'GAL',
  /** Imperial system unit of length. */
  IN = 'IN',
  /** 1 item, a unit of count. */
  ITEM = 'ITEM',
  /** 1 kilogram equals 1000 grams. */
  KG = 'KG',
  /** Metric system unit of volume. */
  L = 'L',
  /** Imperial system unit of weight. */
  LB = 'LB',
  /** Metric system unit of length. */
  M = 'M',
  /** Metric system unit of area. */
  M2 = 'M2',
  /** 1 cubic meter equals 1000 liters. */
  M3 = 'M3',
  /** 1000 milligrams equals 1 gram. */
  MG = 'MG',
  /** 1000 milliliters equals 1 liter. */
  ML = 'ML',
  /** 1000 millimeters equals 1 meter. */
  MM = 'MM',
  /** 16 ounces equals 1 pound. */
  OZ = 'OZ',
  /** 1 pint equals 16 fluid ounces (U.S. customary unit). */
  PT = 'PT',
  /** 1 quart equals 32 fluid ounces (U.S. customary unit). */
  QT = 'QT',
  /** The unit of measurement is unknown. Upgrade to the latest version of the API to resolve this unit. */
  UNKNOWN = 'UNKNOWN',
  /** 1 yard equals 36 inches. */
  YD = 'YD'
}

/** Systems of weights and measures. */
enum UnitSystem {
  /** Imperial system of weights and measures. */
  IMPERIAL_SYSTEM = 'IMPERIAL_SYSTEM',
  /** Metric system of weights and measures. */
  METRIC_SYSTEM = 'METRIC_SYSTEM'
}

/** A redirect on the online store. */
type UrlRedirect = Node & {
  __typename?: 'UrlRedirect';
  /** The ID of the URL redirect. */
  id: Scalars['ID']['output'];
  /** The old path to be redirected from. When the user visits this path, they'll be redirected to the target location. */
  path: Scalars['String']['output'];
  /** The target location where the user will be redirected to. */
  target: Scalars['String']['output'];
};

/**
 * An auto-generated type for paginating through multiple UrlRedirects.
 *
 */
type UrlRedirectConnection = {
  __typename?: 'UrlRedirectConnection';
  /** A list of edges. */
  edges: Array<UrlRedirectEdge>;
  /** A list of the nodes contained in UrlRedirectEdge. */
  nodes: Array<UrlRedirect>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one UrlRedirect and a cursor during pagination.
 *
 */
type UrlRedirectEdge = {
  __typename?: 'UrlRedirectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of UrlRedirectEdge. */
  node: UrlRedirect;
};

/** Represents an error in the input of a mutation. */
type UserError = DisplayableError & {
  __typename?: 'UserError';
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Error codes for failed Shop Pay payment request session mutations. */
type UserErrorsShopPayPaymentRequestSessionUserErrors = DisplayableError & {
  __typename?: 'UserErrorsShopPayPaymentRequestSessionUserErrors';
  /** The error code. */
  code?: Maybe<UserErrorsShopPayPaymentRequestSessionUserErrorsCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Possible error codes that can be returned by `ShopPayPaymentRequestSessionUserErrors`. */
enum UserErrorsShopPayPaymentRequestSessionUserErrorsCode {
  /** Idempotency key has already been used. */
  IDEMPOTENCY_KEY_ALREADY_USED = 'IDEMPOTENCY_KEY_ALREADY_USED',
  /** Payment request input is invalid. */
  PAYMENT_REQUEST_INVALID_INPUT = 'PAYMENT_REQUEST_INVALID_INPUT',
  /** Payment request not found. */
  PAYMENT_REQUEST_NOT_FOUND = 'PAYMENT_REQUEST_NOT_FOUND'
}

/** The input fields for a filter used to view a subset of products in a collection matching a specific variant option. */
type VariantOptionFilter = {
  /** The name of the variant option to filter on. */
  name: Scalars['String']['input'];
  /** The value of the variant option to filter on. */
  value: Scalars['String']['input'];
};

/** Represents a Shopify hosted video. */
type Video = Media & Node & {
  __typename?: 'Video';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']['output']>;
  /** A globally-unique ID. */
  id: Scalars['ID']['output'];
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** The presentation for a media. */
  presentation?: Maybe<MediaPresentation>;
  /** The preview image for the media. */
  previewImage?: Maybe<Image>;
  /** The sources for a video. */
  sources: Array<VideoSource>;
};

/** Represents a source for a Shopify hosted video. */
type VideoSource = {
  __typename?: 'VideoSource';
  /** The format of the video source. */
  format: Scalars['String']['output'];
  /** The height of the video. */
  height: Scalars['Int']['output'];
  /** The video MIME type. */
  mimeType: Scalars['String']['output'];
  /** The URL of the video. */
  url: Scalars['String']['output'];
  /** The width of the video. */
  width: Scalars['Int']['output'];
};

/** The visitor's consent to data processing purposes for the shop. true means accepting the purposes, false means declining them, and null means that the visitor didn't express a preference. */
type VisitorConsent = {
  /** The visitor accepts or rejects the analytics data processing purpose. */
  analytics?: InputMaybe<Scalars['Boolean']['input']>;
  /** The visitor accepts or rejects the first and third party marketing data processing purposes. */
  marketing?: InputMaybe<Scalars['Boolean']['input']>;
  /** The visitor accepts or rejects the preferences data processing purpose. */
  preferences?: InputMaybe<Scalars['Boolean']['input']>;
  /** The visitor accepts or rejects the sale or sharing of their data with third parties. */
  saleOfData?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Units of measurement for weight. */
enum WeightUnit {
  /** Metric system unit of mass. */
  GRAMS = 'GRAMS',
  /** 1 kilogram equals 1000 grams. */
  KILOGRAMS = 'KILOGRAMS',
  /** Imperial system unit of mass. */
  OUNCES = 'OUNCES',
  /** 1 pound equals 16 ounces. */
  POUNDS = 'POUNDS'
}

type CartQueryVariables = Exact<{
  country?: InputMaybe<CountryCode>;
  id: Scalars['ID']['input'];
}>;


type CartQuery = { __typename?: 'QueryRoot', cart?: { __typename?: 'Cart', id: string, createdAt: any, updatedAt: any, checkoutUrl: any, totalQuantity: number, buyerIdentity: { __typename?: 'CartBuyerIdentity', countryCode?: CountryCode | null, email?: string | null, phone?: string | null, preferences?: { __typename?: 'CartPreferences', wallet?: Array<string> | null } | null, customer?: { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, displayName: string, firstName?: string | null, lastName?: string | null, email?: string | null, addresses: { __typename?: 'MailingAddressConnection', edges: Array<{ __typename?: 'MailingAddressEdge', node: { __typename?: 'MailingAddress', id: string, address1?: string | null, lastName?: string | null, name?: string | null, phone?: string | null, province?: string | null, provinceCode?: string | null, zip?: string | null, address2?: string | null, company?: string | null, country?: string | null, countryCodeV2?: CountryCode | null, firstName?: string | null, formatted: Array<string>, formattedArea?: string | null } }> }, orders: { __typename?: 'OrderConnection', edges: Array<{ __typename?: 'OrderEdge', node: { __typename?: 'Order', id: string, fulfillmentStatus: OrderFulfillmentStatus, canceledAt?: any | null, lineItems: { __typename?: 'OrderLineItemConnection', edges: Array<{ __typename?: 'OrderLineItemEdge', node: { __typename?: 'OrderLineItem', quantity: number, title: string, variant?: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null } }> } } }> } } | null }, cost: { __typename?: 'CartCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, lines: { __typename?: 'BaseCartLineConnection', edges: Array<{ __typename?: 'BaseCartLineEdge', node:
          | { __typename?: 'CartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }>, merchandise: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, image?: { __typename?: 'Image', url: any, altText?: string | null } | null, product: { __typename?: 'Product', id: string, title: string, handle: string }, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, metafields: Array<{ __typename?: 'Metafield', id: string, key: string, value: string } | null> } }
          | { __typename?: 'ComponentizableCartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }>, merchandise: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, image?: { __typename?: 'Image', url: any, altText?: string | null } | null, product: { __typename?: 'Product', id: string, title: string, handle: string }, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, metafields: Array<{ __typename?: 'Metafield', id: string, key: string, value: string } | null> } }
         }> }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }> } | null };

type CreateCartMutationVariables = Exact<{
  country?: InputMaybe<CountryCode>;
  cartInput?: InputMaybe<CartInput>;
}>;


type CreateCartMutation = { __typename?: 'Mutation', cartCreate?: { __typename?: 'CartCreatePayload', cart?: { __typename?: 'Cart', id: string, createdAt: any, updatedAt: any, checkoutUrl: any, totalQuantity: number, buyerIdentity: { __typename?: 'CartBuyerIdentity', countryCode?: CountryCode | null, email?: string | null, phone?: string | null, preferences?: { __typename?: 'CartPreferences', wallet?: Array<string> | null } | null, customer?: { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, displayName: string, firstName?: string | null, lastName?: string | null, email?: string | null, addresses: { __typename?: 'MailingAddressConnection', edges: Array<{ __typename?: 'MailingAddressEdge', node: { __typename?: 'MailingAddress', id: string, address1?: string | null, lastName?: string | null, name?: string | null, phone?: string | null, province?: string | null, provinceCode?: string | null, zip?: string | null, address2?: string | null, company?: string | null, country?: string | null, countryCodeV2?: CountryCode | null, firstName?: string | null, formatted: Array<string>, formattedArea?: string | null } }> }, orders: { __typename?: 'OrderConnection', edges: Array<{ __typename?: 'OrderEdge', node: { __typename?: 'Order', id: string, fulfillmentStatus: OrderFulfillmentStatus, canceledAt?: any | null, lineItems: { __typename?: 'OrderLineItemConnection', edges: Array<{ __typename?: 'OrderLineItemEdge', node: { __typename?: 'OrderLineItem', quantity: number, title: string, variant?: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null } }> } } }> } } | null }, cost: { __typename?: 'CartCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, lines: { __typename?: 'BaseCartLineConnection', edges: Array<{ __typename?: 'BaseCartLineEdge', node:
            | { __typename?: 'CartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }>, merchandise: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, image?: { __typename?: 'Image', url: any, altText?: string | null } | null, product: { __typename?: 'Product', id: string, title: string, handle: string }, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, metafields: Array<{ __typename?: 'Metafield', id: string, key: string, value: string } | null> } }
            | { __typename?: 'ComponentizableCartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }>, merchandise: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, image?: { __typename?: 'Image', url: any, altText?: string | null } | null, product: { __typename?: 'Product', id: string, title: string, handle: string }, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, metafields: Array<{ __typename?: 'Metafield', id: string, key: string, value: string } | null> } }
           }> }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }> } | null, userErrors: Array<{ __typename: 'CartUserError', field?: Array<string> | null, message: string, code?: CartErrorCode | null }> } | null };

type CartBuyerIdentityUpdateMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  buyerIdentity: CartBuyerIdentityInput;
}>;


type CartBuyerIdentityUpdateMutation = { __typename?: 'Mutation', cartBuyerIdentityUpdate?: { __typename?: 'CartBuyerIdentityUpdatePayload', cart?: { __typename?: 'Cart', id: string, createdAt: any, updatedAt: any, checkoutUrl: any, totalQuantity: number, buyerIdentity: { __typename?: 'CartBuyerIdentity', countryCode?: CountryCode | null, email?: string | null, phone?: string | null, preferences?: { __typename?: 'CartPreferences', wallet?: Array<string> | null } | null, customer?: { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, displayName: string, firstName?: string | null, lastName?: string | null, email?: string | null, addresses: { __typename?: 'MailingAddressConnection', edges: Array<{ __typename?: 'MailingAddressEdge', node: { __typename?: 'MailingAddress', id: string, address1?: string | null, lastName?: string | null, name?: string | null, phone?: string | null, province?: string | null, provinceCode?: string | null, zip?: string | null, address2?: string | null, company?: string | null, country?: string | null, countryCodeV2?: CountryCode | null, firstName?: string | null, formatted: Array<string>, formattedArea?: string | null } }> }, orders: { __typename?: 'OrderConnection', edges: Array<{ __typename?: 'OrderEdge', node: { __typename?: 'Order', id: string, fulfillmentStatus: OrderFulfillmentStatus, canceledAt?: any | null, lineItems: { __typename?: 'OrderLineItemConnection', edges: Array<{ __typename?: 'OrderLineItemEdge', node: { __typename?: 'OrderLineItem', quantity: number, title: string, variant?: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null } }> } } }> } } | null }, cost: { __typename?: 'CartCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, lines: { __typename?: 'BaseCartLineConnection', edges: Array<{ __typename?: 'BaseCartLineEdge', node:
            | { __typename?: 'CartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }>, merchandise: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, image?: { __typename?: 'Image', url: any, altText?: string | null } | null, product: { __typename?: 'Product', id: string, title: string, handle: string }, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, metafields: Array<{ __typename?: 'Metafield', id: string, key: string, value: string } | null> } }
            | { __typename?: 'ComponentizableCartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }>, merchandise: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, image?: { __typename?: 'Image', url: any, altText?: string | null } | null, product: { __typename?: 'Product', id: string, title: string, handle: string }, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, metafields: Array<{ __typename?: 'Metafield', id: string, key: string, value: string } | null> } }
           }> }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }> } | null, userErrors: Array<{ __typename: 'CartUserError', field?: Array<string> | null, message: string, code?: CartErrorCode | null }> } | null };

type AddItemToCartMutationVariables = Exact<{
  country?: InputMaybe<CountryCode>;
  cartId: Scalars['ID']['input'];
  lines: Array<CartLineInput> | CartLineInput;
}>;


type AddItemToCartMutation = { __typename?: 'Mutation', cartLinesAdd?: { __typename?: 'CartLinesAddPayload', cart?: { __typename?: 'Cart', id: string, createdAt: any, updatedAt: any, checkoutUrl: any, totalQuantity: number, buyerIdentity: { __typename?: 'CartBuyerIdentity', countryCode?: CountryCode | null, email?: string | null, phone?: string | null, preferences?: { __typename?: 'CartPreferences', wallet?: Array<string> | null } | null, customer?: { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, displayName: string, firstName?: string | null, lastName?: string | null, email?: string | null, addresses: { __typename?: 'MailingAddressConnection', edges: Array<{ __typename?: 'MailingAddressEdge', node: { __typename?: 'MailingAddress', id: string, address1?: string | null, lastName?: string | null, name?: string | null, phone?: string | null, province?: string | null, provinceCode?: string | null, zip?: string | null, address2?: string | null, company?: string | null, country?: string | null, countryCodeV2?: CountryCode | null, firstName?: string | null, formatted: Array<string>, formattedArea?: string | null } }> }, orders: { __typename?: 'OrderConnection', edges: Array<{ __typename?: 'OrderEdge', node: { __typename?: 'Order', id: string, fulfillmentStatus: OrderFulfillmentStatus, canceledAt?: any | null, lineItems: { __typename?: 'OrderLineItemConnection', edges: Array<{ __typename?: 'OrderLineItemEdge', node: { __typename?: 'OrderLineItem', quantity: number, title: string, variant?: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null } }> } } }> } } | null }, cost: { __typename?: 'CartCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, lines: { __typename?: 'BaseCartLineConnection', edges: Array<{ __typename?: 'BaseCartLineEdge', node:
            | { __typename?: 'CartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }>, merchandise: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, image?: { __typename?: 'Image', url: any, altText?: string | null } | null, product: { __typename?: 'Product', id: string, title: string, handle: string }, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, metafields: Array<{ __typename?: 'Metafield', id: string, key: string, value: string } | null> } }
            | { __typename?: 'ComponentizableCartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }>, merchandise: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, image?: { __typename?: 'Image', url: any, altText?: string | null } | null, product: { __typename?: 'Product', id: string, title: string, handle: string }, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, metafields: Array<{ __typename?: 'Metafield', id: string, key: string, value: string } | null> } }
           }> }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }> } | null, userErrors: Array<{ __typename: 'CartUserError', field?: Array<string> | null, message: string, code?: CartErrorCode | null }> } | null };

type RemoveItemFromCartMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  lineIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


type RemoveItemFromCartMutation = { __typename?: 'Mutation', cartLinesRemove?: { __typename?: 'CartLinesRemovePayload', cart?: { __typename?: 'Cart', id: string, createdAt: any, updatedAt: any, checkoutUrl: any, totalQuantity: number, buyerIdentity: { __typename?: 'CartBuyerIdentity', countryCode?: CountryCode | null, email?: string | null, phone?: string | null, preferences?: { __typename?: 'CartPreferences', wallet?: Array<string> | null } | null, customer?: { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, displayName: string, firstName?: string | null, lastName?: string | null, email?: string | null, addresses: { __typename?: 'MailingAddressConnection', edges: Array<{ __typename?: 'MailingAddressEdge', node: { __typename?: 'MailingAddress', id: string, address1?: string | null, lastName?: string | null, name?: string | null, phone?: string | null, province?: string | null, provinceCode?: string | null, zip?: string | null, address2?: string | null, company?: string | null, country?: string | null, countryCodeV2?: CountryCode | null, firstName?: string | null, formatted: Array<string>, formattedArea?: string | null } }> }, orders: { __typename?: 'OrderConnection', edges: Array<{ __typename?: 'OrderEdge', node: { __typename?: 'Order', id: string, fulfillmentStatus: OrderFulfillmentStatus, canceledAt?: any | null, lineItems: { __typename?: 'OrderLineItemConnection', edges: Array<{ __typename?: 'OrderLineItemEdge', node: { __typename?: 'OrderLineItem', quantity: number, title: string, variant?: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null } }> } } }> } } | null }, cost: { __typename?: 'CartCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, lines: { __typename?: 'BaseCartLineConnection', edges: Array<{ __typename?: 'BaseCartLineEdge', node:
            | { __typename?: 'CartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }>, merchandise: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, image?: { __typename?: 'Image', url: any, altText?: string | null } | null, product: { __typename?: 'Product', id: string, title: string, handle: string }, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, metafields: Array<{ __typename?: 'Metafield', id: string, key: string, value: string } | null> } }
            | { __typename?: 'ComponentizableCartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }>, merchandise: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, image?: { __typename?: 'Image', url: any, altText?: string | null } | null, product: { __typename?: 'Product', id: string, title: string, handle: string }, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, metafields: Array<{ __typename?: 'Metafield', id: string, key: string, value: string } | null> } }
           }> }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }> } | null, userErrors: Array<{ __typename: 'CartUserError', field?: Array<string> | null, message: string, code?: CartErrorCode | null }> } | null };

type UpdateItemFromCartMutationVariables = Exact<{
  country?: InputMaybe<CountryCode>;
  cartId: Scalars['ID']['input'];
  lines: Array<CartLineUpdateInput> | CartLineUpdateInput;
}>;


type UpdateItemFromCartMutation = { __typename?: 'Mutation', cartLinesUpdate?: { __typename?: 'CartLinesUpdatePayload', cart?: { __typename?: 'Cart', id: string, createdAt: any, updatedAt: any, checkoutUrl: any, totalQuantity: number, buyerIdentity: { __typename?: 'CartBuyerIdentity', countryCode?: CountryCode | null, email?: string | null, phone?: string | null, preferences?: { __typename?: 'CartPreferences', wallet?: Array<string> | null } | null, customer?: { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, displayName: string, firstName?: string | null, lastName?: string | null, email?: string | null, addresses: { __typename?: 'MailingAddressConnection', edges: Array<{ __typename?: 'MailingAddressEdge', node: { __typename?: 'MailingAddress', id: string, address1?: string | null, lastName?: string | null, name?: string | null, phone?: string | null, province?: string | null, provinceCode?: string | null, zip?: string | null, address2?: string | null, company?: string | null, country?: string | null, countryCodeV2?: CountryCode | null, firstName?: string | null, formatted: Array<string>, formattedArea?: string | null } }> }, orders: { __typename?: 'OrderConnection', edges: Array<{ __typename?: 'OrderEdge', node: { __typename?: 'Order', id: string, fulfillmentStatus: OrderFulfillmentStatus, canceledAt?: any | null, lineItems: { __typename?: 'OrderLineItemConnection', edges: Array<{ __typename?: 'OrderLineItemEdge', node: { __typename?: 'OrderLineItem', quantity: number, title: string, variant?: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null } }> } } }> } } | null }, cost: { __typename?: 'CartCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, lines: { __typename?: 'BaseCartLineConnection', edges: Array<{ __typename?: 'BaseCartLineEdge', node:
            | { __typename?: 'CartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }>, merchandise: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, image?: { __typename?: 'Image', url: any, altText?: string | null } | null, product: { __typename?: 'Product', id: string, title: string, handle: string }, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, metafields: Array<{ __typename?: 'Metafield', id: string, key: string, value: string } | null> } }
            | { __typename?: 'ComponentizableCartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }>, merchandise: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, image?: { __typename?: 'Image', url: any, altText?: string | null } | null, product: { __typename?: 'Product', id: string, title: string, handle: string }, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, metafields: Array<{ __typename?: 'Metafield', id: string, key: string, value: string } | null> } }
           }> }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }> } | null, userErrors: Array<{ __typename: 'CartUserError', field?: Array<string> | null, message: string, code?: CartErrorCode | null }> } | null };

type CartFragment = { __typename?: 'Cart', id: string, createdAt: any, updatedAt: any, checkoutUrl: any, totalQuantity: number, buyerIdentity: { __typename?: 'CartBuyerIdentity', countryCode?: CountryCode | null, email?: string | null, phone?: string | null, preferences?: { __typename?: 'CartPreferences', wallet?: Array<string> | null } | null, customer?: { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, displayName: string, firstName?: string | null, lastName?: string | null, email?: string | null, addresses: { __typename?: 'MailingAddressConnection', edges: Array<{ __typename?: 'MailingAddressEdge', node: { __typename?: 'MailingAddress', id: string, address1?: string | null, lastName?: string | null, name?: string | null, phone?: string | null, province?: string | null, provinceCode?: string | null, zip?: string | null, address2?: string | null, company?: string | null, country?: string | null, countryCodeV2?: CountryCode | null, firstName?: string | null, formatted: Array<string>, formattedArea?: string | null } }> }, orders: { __typename?: 'OrderConnection', edges: Array<{ __typename?: 'OrderEdge', node: { __typename?: 'Order', id: string, fulfillmentStatus: OrderFulfillmentStatus, canceledAt?: any | null, lineItems: { __typename?: 'OrderLineItemConnection', edges: Array<{ __typename?: 'OrderLineItemEdge', node: { __typename?: 'OrderLineItem', quantity: number, title: string, variant?: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null } }> } } }> } } | null }, cost: { __typename?: 'CartCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, lines: { __typename?: 'BaseCartLineConnection', edges: Array<{ __typename?: 'BaseCartLineEdge', node:
        | { __typename?: 'CartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }>, merchandise: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, image?: { __typename?: 'Image', url: any, altText?: string | null } | null, product: { __typename?: 'Product', id: string, title: string, handle: string }, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, metafields: Array<{ __typename?: 'Metafield', id: string, key: string, value: string } | null> } }
        | { __typename?: 'ComponentizableCartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }>, merchandise: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, image?: { __typename?: 'Image', url: any, altText?: string | null } | null, product: { __typename?: 'Product', id: string, title: string, handle: string }, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, metafields: Array<{ __typename?: 'Metafield', id: string, key: string, value: string } | null> } }
       }> }, attributes: Array<{ __typename?: 'Attribute', key: string, value?: string | null }> };

type CartUserErrorFragment = { __typename: 'CartUserError', field?: Array<string> | null, message: string, code?: CartErrorCode | null };

type AllShopifyCollectionsQueryVariables = Exact<{
  country?: InputMaybe<CountryCode>;
  first?: InputMaybe<Scalars['Int']['input']>;
}>;


type AllShopifyCollectionsQuery = { __typename?: 'QueryRoot', collections: { __typename?: 'CollectionConnection', edges: Array<{ __typename?: 'CollectionEdge', node: { __typename?: 'Collection', id: string, handle: string, title: string, description: string, image?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } };

type ShopifyCollectionQueryVariables = Exact<{
  country?: InputMaybe<CountryCode>;
  handle?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
}>;


type ShopifyCollectionQuery = { __typename?: 'QueryRoot', collection?: { __typename?: 'Collection', id: string, handle: string, title: string, description: string, image?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, products: { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', node: { __typename?: 'Product', id: string, handle: string, title: string, description: string, tags: Array<string>, featuredImage?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, options: Array<{ __typename?: 'ProductOption', id: string, name: string }>, selectedOrFirstAvailableVariant?: { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null, variants: { __typename?: 'ProductVariantConnection', edges: Array<{ __typename?: 'ProductVariantEdge', node: { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, quantityAvailable?: number | null, sku?: string | null, weightUnit: WeightUnit, taxable: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, image?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, compareAtPrice?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } | null, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, unitPrice?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } | null } }> } } }> } } | null };

type CollectionFragment = { __typename?: 'Collection', id: string, handle: string, title: string, description: string, image?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null };

type CustomerQueryVariables = Exact<{
  accessToken: Scalars['String']['input'];
}>;


type CustomerQuery = { __typename?: 'QueryRoot', customer?: { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

type CustomerFullQueryVariables = Exact<{
  accessToken: Scalars['String']['input'];
}>;


type CustomerFullQuery = { __typename?: 'QueryRoot', customer?: { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, displayName: string, firstName?: string | null, lastName?: string | null, email?: string | null, addresses: { __typename?: 'MailingAddressConnection', edges: Array<{ __typename?: 'MailingAddressEdge', node: { __typename?: 'MailingAddress', id: string, address1?: string | null, lastName?: string | null, name?: string | null, phone?: string | null, province?: string | null, provinceCode?: string | null, zip?: string | null, address2?: string | null, company?: string | null, country?: string | null, countryCodeV2?: CountryCode | null, firstName?: string | null, formatted: Array<string>, formattedArea?: string | null } }> }, orders: { __typename?: 'OrderConnection', edges: Array<{ __typename?: 'OrderEdge', node: { __typename?: 'Order', id: string, fulfillmentStatus: OrderFulfillmentStatus, canceledAt?: any | null, lineItems: { __typename?: 'OrderLineItemConnection', edges: Array<{ __typename?: 'OrderLineItemEdge', node: { __typename?: 'OrderLineItem', quantity: number, title: string, variant?: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null } }> } } }> } } | null };

type CustomerOrdersQueryVariables = Exact<{
  accessToken: Scalars['String']['input'];
}>;


type CustomerOrdersQuery = { __typename?: 'QueryRoot', customer?: { __typename?: 'Customer', id: string, orders: { __typename?: 'OrderConnection', edges: Array<{ __typename?: 'OrderEdge', node: { __typename?: 'Order', id: string, fulfillmentStatus: OrderFulfillmentStatus, canceledAt?: any | null, cancelReason?: OrderCancelReason | null, processedAt: any, totalPrice: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, lineItems: { __typename?: 'OrderLineItemConnection', edges: Array<{ __typename?: 'OrderLineItemEdge', node: { __typename?: 'OrderLineItem', quantity: number, title: string, variant?: { __typename?: 'ProductVariant', title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null } }> } } }> } } | null };

type CustomerCreateMutationVariables = Exact<{
  input: CustomerCreateInput;
}>;


type CustomerCreateMutation = { __typename?: 'Mutation', customerCreate?: { __typename?: 'CustomerCreatePayload', customer?: { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, displayName: string, firstName?: string | null, lastName?: string | null, email?: string | null, addresses: { __typename?: 'MailingAddressConnection', edges: Array<{ __typename?: 'MailingAddressEdge', node: { __typename?: 'MailingAddress', id: string, address1?: string | null, lastName?: string | null, name?: string | null, phone?: string | null, province?: string | null, provinceCode?: string | null, zip?: string | null, address2?: string | null, company?: string | null, country?: string | null, countryCodeV2?: CountryCode | null, firstName?: string | null, formatted: Array<string>, formattedArea?: string | null } }> }, orders: { __typename?: 'OrderConnection', edges: Array<{ __typename?: 'OrderEdge', node: { __typename?: 'Order', id: string, fulfillmentStatus: OrderFulfillmentStatus, canceledAt?: any | null, lineItems: { __typename?: 'OrderLineItemConnection', edges: Array<{ __typename?: 'OrderLineItemEdge', node: { __typename?: 'OrderLineItem', quantity: number, title: string, variant?: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null } }> } } }> } } | null, customerUserErrors: Array<{ __typename?: 'CustomerUserError', code?: CustomerErrorCode | null, field?: Array<string> | null, message: string }> } | null };

type CustomerAccessTokenCreateMutationVariables = Exact<{
  input: CustomerAccessTokenCreateInput;
}>;


type CustomerAccessTokenCreateMutation = { __typename?: 'Mutation', customerAccessTokenCreate?: { __typename?: 'CustomerAccessTokenCreatePayload', customerAccessToken?: { __typename?: 'CustomerAccessToken', accessToken: string, expiresAt: any } | null, customerUserErrors: Array<{ __typename: 'CustomerUserError', field?: Array<string> | null, message: string, code?: CustomerErrorCode | null }> } | null };

type CustomerAccessTokenDeleteMutationVariables = Exact<{
  accessToken: Scalars['String']['input'];
}>;


type CustomerAccessTokenDeleteMutation = { __typename?: 'Mutation', customerAccessTokenDelete?: { __typename?: 'CustomerAccessTokenDeletePayload', deletedAccessToken?: string | null, userErrors: Array<{ __typename: 'UserError', field?: Array<string> | null, message: string }> } | null };

type CustomerFragment = { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, displayName: string, firstName?: string | null, lastName?: string | null, email?: string | null, addresses: { __typename?: 'MailingAddressConnection', edges: Array<{ __typename?: 'MailingAddressEdge', node: { __typename?: 'MailingAddress', id: string, address1?: string | null, lastName?: string | null, name?: string | null, phone?: string | null, province?: string | null, provinceCode?: string | null, zip?: string | null, address2?: string | null, company?: string | null, country?: string | null, countryCodeV2?: CountryCode | null, firstName?: string | null, formatted: Array<string>, formattedArea?: string | null } }> }, orders: { __typename?: 'OrderConnection', edges: Array<{ __typename?: 'OrderEdge', node: { __typename?: 'Order', id: string, fulfillmentStatus: OrderFulfillmentStatus, canceledAt?: any | null, lineItems: { __typename?: 'OrderLineItemConnection', edges: Array<{ __typename?: 'OrderLineItemEdge', node: { __typename?: 'OrderLineItem', quantity: number, title: string, variant?: { __typename?: 'ProductVariant', id: string, title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null } }> } } }> } };

type CustomerFragmentLightFragment = { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, firstName?: string | null, lastName?: string | null, email?: string | null };

type CustomerOrderFragment = { __typename?: 'Customer', id: string, orders: { __typename?: 'OrderConnection', edges: Array<{ __typename?: 'OrderEdge', node: { __typename?: 'Order', id: string, fulfillmentStatus: OrderFulfillmentStatus, canceledAt?: any | null, cancelReason?: OrderCancelReason | null, processedAt: any, totalPrice: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, lineItems: { __typename?: 'OrderLineItemConnection', edges: Array<{ __typename?: 'OrderLineItemEdge', node: { __typename?: 'OrderLineItem', quantity: number, title: string, variant?: { __typename?: 'ProductVariant', title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null } }> } } }> } };

type CustomerErrorsFragment = { __typename: 'CustomerUserError', field?: Array<string> | null, message: string, code?: CustomerErrorCode | null };

type UserErrorsFragment = { __typename: 'UserError', field?: Array<string> | null, message: string };

type LocalizationQueryVariables = Exact<{
  country?: InputMaybe<CountryCode>;
  language?: InputMaybe<LanguageCode>;
}>;


type LocalizationQuery = { __typename?: 'QueryRoot', localization: { __typename?: 'Localization', availableCountries: Array<{ __typename?: 'Country', isoCode: CountryCode, name: string, unitSystem: UnitSystem, currency: { __typename?: 'Currency', isoCode: CurrencyCode, name: string, symbol: string } }>, country: { __typename?: 'Country', isoCode: CountryCode, name: string, unitSystem: UnitSystem, currency: { __typename?: 'Currency', isoCode: CurrencyCode, name: string, symbol: string } } } };

type AllShopifyProductsQueryVariables = Exact<{
  country?: InputMaybe<CountryCode>;
  first?: InputMaybe<Scalars['Int']['input']>;
}>;


type AllShopifyProductsQuery = { __typename?: 'QueryRoot', products: { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', node: { __typename?: 'Product', id: string, handle: string, title: string, description: string, tags: Array<string>, featuredImage?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, options: Array<{ __typename?: 'ProductOption', id: string, name: string }>, selectedOrFirstAvailableVariant?: { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null, variants: { __typename?: 'ProductVariantConnection', edges: Array<{ __typename?: 'ProductVariantEdge', node: { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, quantityAvailable?: number | null, sku?: string | null, weightUnit: WeightUnit, taxable: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, image?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, compareAtPrice?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } | null, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, unitPrice?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } | null } }> } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } };

type ShopifyProductQueryVariables = Exact<{
  country?: InputMaybe<CountryCode>;
  handle?: InputMaybe<Scalars['String']['input']>;
}>;


type ShopifyProductQuery = { __typename?: 'QueryRoot', product?: { __typename?: 'Product', id: string, handle: string, title: string, description: string, tags: Array<string>, featuredImage?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, options: Array<{ __typename?: 'ProductOption', id: string, name: string }>, selectedOrFirstAvailableVariant?: { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null, variants: { __typename?: 'ProductVariantConnection', edges: Array<{ __typename?: 'ProductVariantEdge', node: { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, quantityAvailable?: number | null, sku?: string | null, weightUnit: WeightUnit, taxable: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, image?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, compareAtPrice?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } | null, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, unitPrice?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } | null } }> } } | null };

type ShopifyProductsByQueryVariables = Exact<{
  country?: InputMaybe<CountryCode>;
  query?: InputMaybe<Scalars['String']['input']>;
}>;


type ShopifyProductsByQuery = { __typename?: 'QueryRoot', products: { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', node: { __typename?: 'Product', id: string, handle: string, title: string, description: string, tags: Array<string>, featuredImage?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, options: Array<{ __typename?: 'ProductOption', id: string, name: string }>, selectedOrFirstAvailableVariant?: { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null, variants: { __typename?: 'ProductVariantConnection', edges: Array<{ __typename?: 'ProductVariantEdge', node: { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, quantityAvailable?: number | null, sku?: string | null, weightUnit: WeightUnit, taxable: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, image?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, compareAtPrice?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } | null, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, unitPrice?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } | null } }> } } }> } };

type ShopifyProductByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type ShopifyProductByIdQuery = { __typename?: 'QueryRoot', product?: { __typename?: 'Product', id: string, handle: string, title: string, description: string, tags: Array<string>, featuredImage?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, options: Array<{ __typename?: 'ProductOption', id: string, name: string }>, selectedOrFirstAvailableVariant?: { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null, variants: { __typename?: 'ProductVariantConnection', edges: Array<{ __typename?: 'ProductVariantEdge', node: { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, quantityAvailable?: number | null, sku?: string | null, weightUnit: WeightUnit, taxable: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, image?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, compareAtPrice?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } | null, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, unitPrice?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } | null } }> } } | null };

type ShopifyVariantQueryVariables = Exact<{
  country?: InputMaybe<CountryCode>;
  id: Scalars['ID']['input'];
}>;


type ShopifyVariantQuery = { __typename?: 'QueryRoot', variant?:
    | { __typename?: 'AppliedGiftCard' }
    | { __typename?: 'Article' }
    | { __typename?: 'Blog' }
    | { __typename?: 'Cart' }
    | { __typename?: 'CartLine' }
    | { __typename?: 'Collection' }
    | { __typename?: 'Comment' }
    | { __typename?: 'Company' }
    | { __typename?: 'CompanyContact' }
    | { __typename?: 'CompanyLocation' }
    | { __typename?: 'ComponentizableCartLine' }
    | { __typename?: 'ExternalVideo' }
    | { __typename?: 'GenericFile' }
    | { __typename?: 'Location' }
    | { __typename?: 'MailingAddress' }
    | { __typename?: 'Market' }
    | { __typename?: 'MediaImage' }
    | { __typename?: 'MediaPresentation' }
    | { __typename?: 'Menu' }
    | { __typename?: 'MenuItem' }
    | { __typename?: 'Metafield' }
    | { __typename?: 'Metaobject' }
    | { __typename?: 'Model3d' }
    | { __typename?: 'Order' }
    | { __typename?: 'Page' }
    | { __typename?: 'Product' }
    | { __typename?: 'ProductOption' }
    | { __typename?: 'ProductOptionValue' }
    | { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, quantityAvailable?: number | null, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, product: { __typename?: 'Product', id: string, handle: string, title: string, description: string, tags: Array<string>, featuredImage?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, options: Array<{ __typename?: 'ProductOption', id: string, name: string }>, selectedOrFirstAvailableVariant?: { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null, variants: { __typename?: 'ProductVariantConnection', edges: Array<{ __typename?: 'ProductVariantEdge', node: { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, quantityAvailable?: number | null, sku?: string | null, weightUnit: WeightUnit, taxable: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, image?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, compareAtPrice?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } | null, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, unitPrice?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } | null } }> } } }
    | { __typename?: 'Shop' }
    | { __typename?: 'ShopPayInstallmentsFinancingPlan' }
    | { __typename?: 'ShopPayInstallmentsFinancingPlanTerm' }
    | { __typename?: 'ShopPayInstallmentsProductVariantPricing' }
    | { __typename?: 'ShopPolicy' }
    | { __typename?: 'TaxonomyCategory' }
    | { __typename?: 'UrlRedirect' }
    | { __typename?: 'Video' }
   | null };

type ProductFragment = { __typename?: 'Product', id: string, handle: string, title: string, description: string, tags: Array<string>, featuredImage?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, options: Array<{ __typename?: 'ProductOption', id: string, name: string }>, selectedOrFirstAvailableVariant?: { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } | null, variants: { __typename?: 'ProductVariantConnection', edges: Array<{ __typename?: 'ProductVariantEdge', node: { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, quantityAvailable?: number | null, sku?: string | null, weightUnit: WeightUnit, taxable: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, image?: { __typename?: 'Image', id?: string | null, url: any, height?: number | null, width?: number | null, altText?: string | null } | null, compareAtPrice?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } | null, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, unitPrice?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } | null } }> } };

type ProductVariantFragment = { __typename?: 'ProductVariant', id: string, title: string, weight?: number | null, availableForSale: boolean, selectedOptions: Array<{ __typename?: 'SelectedOption', name: string, value: string }>, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } };
