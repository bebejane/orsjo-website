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
  Color: any;
  DateTime: any;
  Decimal: any;
  HTML: any;
  JSON: any;
  URL: any;
  UnsignedInt64: any;
};

/**
 * A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning).
 * Versions are commonly referred to by their handle (for example, `2021-10`).
 *
 */
type ApiVersion = {
  __typename?: 'ApiVersion';
  /** The human-readable name of the version. */
  displayName: Scalars['String'];
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String'];
  /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning). */
  supported: Scalars['Boolean'];
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
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The last characters of the gift card. */
  lastCharacters: Scalars['String'];
  /** The amount that was applied to the checkout in its currency. */
  presentmentAmountUsed: MoneyV2;
};

/** An article in an online store blog. */
type Article = HasMetafields & Node & OnlineStorePublishable & {
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
  content: Scalars['String'];
  /** The content of the article, complete with HTML formatting. */
  contentHtml: Scalars['HTML'];
  /** Stripped excerpt of the article, single line with HTML tags removed. */
  excerpt?: Maybe<Scalars['String']>;
  /** The excerpt of the article, complete with HTML formatting. */
  excerptHtml?: Maybe<Scalars['HTML']>;
  /**
   * A human-friendly unique string for the Article automatically generated from its title.
   *
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image associated with the article. */
  image?: Maybe<Image>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<Metafield>>;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** The date and time when the article was published. */
  publishedAt: Scalars['DateTime'];
  /** The article’s SEO information. */
  seo?: Maybe<SEO>;
  /** A categorization that a article can be tagged with. */
  tags: Array<Scalars['String']>;
  /** The article’s name. */
  title: Scalars['String'];
};


/** An article in an online store blog. */
type ArticlecommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** An article in an online store blog. */
type ArticlecontentArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/** An article in an online store blog. */
type ArticleexcerptArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/** An article in an online store blog. */
type ArticlemetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** An article in an online store blog. */
type ArticlemetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};

/** The author of an article. */
type ArticleAuthor = {
  __typename?: 'ArticleAuthor';
  /** The author's bio. */
  bio?: Maybe<Scalars['String']>;
  /** The author’s email. */
  email: Scalars['String'];
  /** The author's first name. */
  firstName: Scalars['String'];
  /** The author's last name. */
  lastName: Scalars['String'];
  /** The author's full name. */
  name: Scalars['String'];
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
  cursor: Scalars['String'];
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

/** Represents a generic custom attribute. */
type Attribute = {
  __typename?: 'Attribute';
  /** Key or name of the attribute. */
  key: Scalars['String'];
  /** Value of the attribute. */
  value?: Maybe<Scalars['String']>;
};

/** Specifies the input fields required for an attribute. */
type AttributeInput = {
  /** Key or name of the attribute. */
  key: Scalars['String'];
  /** Value of the attribute. */
  value: Scalars['String'];
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
  title: Scalars['String'];
  /** The value of the discount application. */
  value: PricingValue;
};

/** A collection of available shipping rates for a checkout. */
type AvailableShippingRates = {
  __typename?: 'AvailableShippingRates';
  /**
   * Whether or not the shipping rates are ready.
   * The `shippingRates` field is `null` when this value is `false`.
   * This field should be polled until its value becomes `true`.
   *
   */
  ready: Scalars['Boolean'];
  /** The fetched shipping rates. `null` until the `ready` field is `true`. */
  shippingRates?: Maybe<Array<ShippingRate>>;
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
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<Metafield>>;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** The blog's SEO information. */
  seo?: Maybe<SEO>;
  /** The blogs’s title. */
  title: Scalars['String'];
};


/** An online store blog. */
type BlogarticleByHandleArgs = {
  handle: Scalars['String'];
};


/** An online store blog. */
type BlogarticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ArticleSortKeys>;
};


/** An online store blog. */
type BlogmetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
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
  cursor: Scalars['String'];
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
 * The store's branding configuration.
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
  shortDescription?: Maybe<Scalars['String']>;
  /** The store's slogan. */
  slogan?: Maybe<Scalars['String']>;
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
  background?: Maybe<Scalars['Color']>;
  /** The foreground color. */
  foreground?: Maybe<Scalars['Color']>;
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
type Cart = Node & {
  __typename?: 'Cart';
  /** An attribute associated with the cart. */
  attribute?: Maybe<Attribute>;
  /** The attributes associated with the cart. Attributes are represented as key-value pairs. */
  attributes: Array<Attribute>;
  /** Information about the buyer that is interacting with the cart. */
  buyerIdentity: CartBuyerIdentity;
  /** The URL of the checkout for the cart. */
  checkoutUrl: Scalars['URL'];
  /** The estimated costs that the buyer will pay at checkout. The costs are subject to change and changes will be reflected at checkout. The `cost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing). */
  cost: CartCost;
  /** The date and time when the cart was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The delivery groups available for the cart, based on the buyer identity default
   * delivery address preference or the default address of the logged-in customer.
   *
   */
  deliveryGroups: CartDeliveryGroupConnection;
  /** The discounts that have been applied to the entire cart. */
  discountAllocations: Array<CartDiscountAllocation>;
  /**
   * The case-insensitive discount codes that the customer added at checkout.
   *
   */
  discountCodes: Array<CartDiscountCode>;
  /**
   * The estimated costs that the buyer will pay at checkout.
   * The estimated costs are subject to change and changes will be reflected at checkout.
   * The `estimatedCost` field uses the `buyerIdentity` field to determine
   * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
   *
   * @deprecated Use `cost` instead.
   */
  estimatedCost: CartEstimatedCost;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** A list of lines containing information about the items the customer intends to purchase. */
  lines: CartLineConnection;
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: Maybe<Scalars['String']>;
  /** The total number of items in the cart. */
  totalQuantity: Scalars['Int'];
  /** The date and time when the cart was updated. */
  updatedAt: Scalars['DateTime'];
};


/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
type CartattributeArgs = {
  key: Scalars['String'];
};


/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
type CartdeliveryGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
type CartlinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** Return type for `cartAttributesUpdate` mutation. */
type CartAttributesUpdatePayload = {
  __typename?: 'CartAttributesUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
};

/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
type CartAutomaticDiscountAllocation = CartDiscountAllocation & {
  __typename?: 'CartAutomaticDiscountAllocation';
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2;
  /** The title of the allocated discount. */
  title: Scalars['String'];
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
   */
  deliveryAddressPreferences: Array<DeliveryAddress>;
  /** The email address of the buyer that is interacting with the cart. */
  email?: Maybe<Scalars['String']>;
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: Maybe<Scalars['String']>;
};

/**
 * Specifies the input fields to update the buyer information associated with a cart.
 * Buyer identity is used to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * and should match the customer's shipping address.
 *
 */
type CartBuyerIdentityInput = {
  /** The country where the buyer is located. */
  countryCode?: InputMaybe<CountryCode>;
  /** The access token used to identify the customer associated with the cart. */
  customerAccessToken?: InputMaybe<Scalars['String']>;
  /**
   * An ordered set of delivery addresses tied to the buyer that is interacting with the cart.
   * The rank of the preferences is determined by the order of the addresses in the array. Preferences
   * can be used to populate relevant fields in the checkout flow.
   *
   */
  deliveryAddressPreferences?: InputMaybe<Array<DeliveryAddressInput>>;
  /** The email address of the buyer that is interacting with the cart. */
  email?: InputMaybe<Scalars['String']>;
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: InputMaybe<Scalars['String']>;
};

/** Return type for `cartBuyerIdentityUpdate` mutation. */
type CartBuyerIdentityUpdatePayload = {
  __typename?: 'CartBuyerIdentityUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
};

/** The discount that has been applied to the cart line using a discount code. */
type CartCodeDiscountAllocation = CartDiscountAllocation & {
  __typename?: 'CartCodeDiscountAllocation';
  /** The code used to apply the discount. */
  code: Scalars['String'];
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2;
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
  subtotalAmountEstimated: Scalars['Boolean'];
  /** The total amount for the customer to pay. */
  totalAmount: MoneyV2;
  /** Whether the total amount is estimated. */
  totalAmountEstimated: Scalars['Boolean'];
  /** The duty amount for the customer to pay at checkout. */
  totalDutyAmount?: Maybe<MoneyV2>;
  /** Whether the total duty amount is estimated. */
  totalDutyAmountEstimated: Scalars['Boolean'];
  /** The tax amount for the customer to pay at checkout. */
  totalTaxAmount?: Maybe<MoneyV2>;
  /** Whether the total tax amount is estimated. */
  totalTaxAmountEstimated: Scalars['Boolean'];
};

/** Return type for `cartCreate` mutation. */
type CartCreatePayload = {
  __typename?: 'CartCreatePayload';
  /** The new cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
};

/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
type CartCustomDiscountAllocation = CartDiscountAllocation & {
  __typename?: 'CartCustomDiscountAllocation';
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2;
  /** The title of the allocated discount. */
  title: Scalars['String'];
};

/** Information about the options available for one or more line items to be delivered to a specific address. */
type CartDeliveryGroup = {
  __typename?: 'CartDeliveryGroup';
  /** A list of cart lines for the delivery group. */
  cartLines: CartLineConnection;
  /** The destination address for the delivery group. */
  deliveryAddress: MailingAddress;
  /** The delivery options available for the delivery group. */
  deliveryOptions: Array<CartDeliveryOption>;
  /** The ID for the delivery group. */
  id: Scalars['ID'];
  /** The selected delivery option for the delivery group. */
  selectedDeliveryOption?: Maybe<CartDeliveryOption>;
};


/** Information about the options available for one or more line items to be delivered to a specific address. */
type CartDeliveryGroupcartLinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
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
  cursor: Scalars['String'];
  /** The item at the end of CartDeliveryGroupEdge. */
  node: CartDeliveryGroup;
};

/** Information about a delivery option. */
type CartDeliveryOption = {
  __typename?: 'CartDeliveryOption';
  /** The code of the delivery option. */
  code?: Maybe<Scalars['String']>;
  /** The method for the delivery option. */
  deliveryMethodType: DeliveryMethodType;
  /** The description of the delivery option. */
  description?: Maybe<Scalars['String']>;
  /** The estimated cost for the delivery option. */
  estimatedCost: MoneyV2;
  /** The unique identifier of the delivery option. */
  handle: Scalars['String'];
  /** The title of the delivery option. */
  title?: Maybe<Scalars['String']>;
};

/** The discounts that have been applied to the cart line. */
type CartDiscountAllocation = {
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2;
};

/** The discount codes applied to the cart. */
type CartDiscountCode = {
  __typename?: 'CartDiscountCode';
  /** Whether the discount code is applicable to the cart's current contents. */
  applicable: Scalars['Boolean'];
  /** The code for the discount. */
  code: Scalars['String'];
};

/** Return type for `cartDiscountCodesUpdate` mutation. */
type CartDiscountCodesUpdatePayload = {
  __typename?: 'CartDiscountCodesUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
};

/** Possible error codes that can be returned by `CartUserError`. */
enum CartErrorCode {
  /** The input value is invalid. */
  INVALID = 'INVALID',
  /** Merchandise line was not found in cart. */
  INVALID_MERCHANDISE_LINE = 'INVALID_MERCHANDISE_LINE',
  /** The input value should be less than the maximum value allowed. */
  LESS_THAN = 'LESS_THAN',
  /** Missing discount code. */
  MISSING_DISCOUNT_CODE = 'MISSING_DISCOUNT_CODE',
  /** Missing note. */
  MISSING_NOTE = 'MISSING_NOTE'
}

/**
 * The estimated costs that the buyer will pay at checkout.
 * The estimated cost uses
 * [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity)
 * to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
 *
 */
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

/** Specifies the input fields to create a cart. */
type CartInput = {
  /** An array of key-value pairs that contains additional information about the cart. */
  attributes?: InputMaybe<Array<AttributeInput>>;
  /**
   * The customer associated with the cart. Used to determine [international pricing]
   * (https://shopify.dev/custom-storefronts/internationalization/international-pricing).
   * Buyer identity should match the customer's shipping address.
   *
   */
  buyerIdentity?: InputMaybe<CartBuyerIdentityInput>;
  /**
   * The case-insensitive discount codes that the customer added at checkout.
   *
   */
  discountCodes?: InputMaybe<Array<Scalars['String']>>;
  /** A list of merchandise lines to add to the cart. */
  lines?: InputMaybe<Array<CartLineInput>>;
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: InputMaybe<Scalars['String']>;
};

/** Represents information about the merchandise in the cart. */
type CartLine = Node & {
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
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The merchandise that the buyer intends to purchase. */
  merchandise: Merchandise;
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars['Int'];
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation?: Maybe<SellingPlanAllocation>;
};


/** Represents information about the merchandise in the cart. */
type CartLineattributeArgs = {
  key: Scalars['String'];
};

/**
 * An auto-generated type for paginating through multiple CartLines.
 *
 */
type CartLineConnection = {
  __typename?: 'CartLineConnection';
  /** A list of edges. */
  edges: Array<CartLineEdge>;
  /** A list of the nodes contained in CartLineEdge. */
  nodes: Array<CartLine>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
 * An auto-generated type which holds one CartLine and a cursor during pagination.
 *
 */
type CartLineEdge = {
  __typename?: 'CartLineEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CartLineEdge. */
  node: CartLine;
};

/** The estimated cost of the merchandise line that the buyer will pay at checkout. */
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

/** Specifies the input fields to create a merchandise line on a cart. */
type CartLineInput = {
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: InputMaybe<Array<AttributeInput>>;
  /** The identifier of the merchandise that the buyer intends to purchase. */
  merchandiseId: Scalars['ID'];
  /** The quantity of the merchandise. */
  quantity?: InputMaybe<Scalars['Int']>;
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']>;
};

/** Specifies the input fields to update a line item on a cart. */
type CartLineUpdateInput = {
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: InputMaybe<Array<AttributeInput>>;
  /** The identifier of the merchandise line. */
  id: Scalars['ID'];
  /** The identifier of the merchandise for the line item. */
  merchandiseId?: InputMaybe<Scalars['ID']>;
  /** The quantity of the line item. */
  quantity?: InputMaybe<Scalars['Int']>;
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']>;
};

/** Return type for `cartLinesAdd` mutation. */
type CartLinesAddPayload = {
  __typename?: 'CartLinesAddPayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
};

/** Return type for `cartLinesRemove` mutation. */
type CartLinesRemovePayload = {
  __typename?: 'CartLinesRemovePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
};

/** Return type for `cartLinesUpdate` mutation. */
type CartLinesUpdatePayload = {
  __typename?: 'CartLinesUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
};

/** Return type for `cartNoteUpdate` mutation. */
type CartNoteUpdatePayload = {
  __typename?: 'CartNoteUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
};

/**
 * The input fields for updating the selected delivery options for a delivery group.
 *
 */
type CartSelectedDeliveryOptionInput = {
  /** The ID of the cart delivery group. */
  deliveryGroupId: Scalars['ID'];
  /** The handle of the selected delivery option. */
  deliveryOptionHandle: Scalars['String'];
};

/** Return type for `cartSelectedDeliveryOptionsUpdate` mutation. */
type CartSelectedDeliveryOptionsUpdatePayload = {
  __typename?: 'CartSelectedDeliveryOptionsUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<Cart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>;
};

/** Represents an error that happens during execution of a cart mutation. */
type CartUserError = DisplayableError & {
  __typename?: 'CartUserError';
  /** The error code. */
  code?: Maybe<CartErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A container for all the information required to checkout items and pay. */
type Checkout = Node & {
  __typename?: 'Checkout';
  /** The gift cards used on the checkout. */
  appliedGiftCards: Array<AppliedGiftCard>;
  /**
   * The available shipping rates for this Checkout.
   * Should only be used when checkout `requiresShipping` is `true` and
   * the shipping address is valid.
   *
   */
  availableShippingRates?: Maybe<AvailableShippingRates>;
  /** The identity of the customer associated with the checkout. */
  buyerIdentity: CheckoutBuyerIdentity;
  /** The date and time when the checkout was completed. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The date and time when the checkout was created. */
  createdAt: Scalars['DateTime'];
  /** The currency code for the checkout. */
  currencyCode: CurrencyCode;
  /** A list of extra information that is added to the checkout. */
  customAttributes: Array<Attribute>;
  /** Discounts that have been applied on the checkout. */
  discountApplications: DiscountApplicationConnection;
  /** The email attached to this checkout. */
  email?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems: CheckoutLineItemConnection;
  /** The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded. */
  lineItemsSubtotalPrice: MoneyV2;
  /** The note associated with the checkout. */
  note?: Maybe<Scalars['String']>;
  /** The resulting order from a paid checkout. */
  order?: Maybe<Order>;
  /** The Order Status Page for this Checkout, null when checkout is not completed. */
  orderStatusUrl?: Maybe<Scalars['URL']>;
  /** The amount left to be paid. This is equal to the cost of the line items, taxes, and shipping, minus discounts and gift cards. */
  paymentDue: MoneyV2;
  /**
   * The amount left to be paid. This is equal to the cost of the line items, duties, taxes, and shipping, minus discounts and gift cards.
   * @deprecated Use `paymentDue` instead.
   */
  paymentDueV2: MoneyV2;
  /**
   * Whether or not the Checkout is ready and can be completed. Checkouts may
   * have asynchronous operations that can take time to finish. If you want
   * to complete a checkout or ensure all the fields are populated and up to
   * date, polling is required until the value is true.
   *
   */
  ready: Scalars['Boolean'];
  /** States whether or not the fulfillment requires shipping. */
  requiresShipping: Scalars['Boolean'];
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe<MailingAddress>;
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   *
   */
  shippingDiscountAllocations: Array<DiscountAllocation>;
  /** Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object. */
  shippingLine?: Maybe<ShippingRate>;
  /** The price at checkout before shipping and taxes. */
  subtotalPrice: MoneyV2;
  /**
   * The price at checkout before duties, shipping, and taxes.
   * @deprecated Use `subtotalPrice` instead.
   */
  subtotalPriceV2: MoneyV2;
  /** Whether the checkout is tax exempt. */
  taxExempt: Scalars['Boolean'];
  /** Whether taxes are included in the line item and shipping line prices. */
  taxesIncluded: Scalars['Boolean'];
  /** The sum of all the duties applied to the line items in the checkout. */
  totalDuties?: Maybe<MoneyV2>;
  /** The sum of all the prices of all the items in the checkout, including taxes and duties. */
  totalPrice: MoneyV2;
  /**
   * The sum of all the prices of all the items in the checkout, including taxes and duties.
   * @deprecated Use `totalPrice` instead.
   */
  totalPriceV2: MoneyV2;
  /** The sum of all the taxes applied to the line items and shipping lines in the checkout. */
  totalTax: MoneyV2;
  /**
   * The sum of all the taxes applied to the line items and shipping lines in the checkout.
   * @deprecated Use `totalTax` instead.
   */
  totalTaxV2: MoneyV2;
  /** The date and time when the checkout was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The url pointing to the checkout accessible from the web. */
  webUrl: Scalars['URL'];
};


/** A container for all the information required to checkout items and pay. */
type CheckoutdiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A container for all the information required to checkout items and pay. */
type CheckoutlineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies the fields required to update a checkout's attributes. */
type CheckoutAttributesUpdateV2Input = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at completion time. Defaults to `false` with
   * each operation.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>;
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<AttributeInput>>;
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>;
};

/** Return type for `checkoutAttributesUpdateV2` mutation. */
type CheckoutAttributesUpdateV2Payload = {
  __typename?: 'CheckoutAttributesUpdateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** The identity of the customer associated with the checkout. */
type CheckoutBuyerIdentity = {
  __typename?: 'CheckoutBuyerIdentity';
  /** The country code for the checkout. For example, `CA`. */
  countryCode?: Maybe<CountryCode>;
};

/** Specifies the identity of the customer associated with the checkout. */
type CheckoutBuyerIdentityInput = {
  /**
   * The country code of one of the shop's
   * [enabled countries](https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency/setup).
   * For example, `CA`. Including this field creates a checkout in the specified country's currency.
   *
   */
  countryCode: CountryCode;
};

/** Return type for `checkoutCompleteFree` mutation. */
type CheckoutCompleteFreePayload = {
  __typename?: 'CheckoutCompleteFreePayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutCompleteWithCreditCardV2` mutation. */
type CheckoutCompleteWithCreditCardV2Payload = {
  __typename?: 'CheckoutCompleteWithCreditCardV2Payload';
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutCompleteWithTokenizedPaymentV3` mutation. */
type CheckoutCompleteWithTokenizedPaymentV3Payload = {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentV3Payload';
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Specifies the fields required to create a checkout. */
type CheckoutCreateInput = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of addresses is still done at completion time. Defaults to `null`.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>;
  /** The identity of the customer associated with the checkout. */
  buyerIdentity?: InputMaybe<CheckoutBuyerIdentityInput>;
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<AttributeInput>>;
  /** The email with which the customer wants to checkout. */
  email?: InputMaybe<Scalars['String']>;
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems?: InputMaybe<Array<CheckoutLineItemInput>>;
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>;
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: InputMaybe<MailingAddressInput>;
};

/** Return type for `checkoutCreate` mutation. */
type CheckoutCreatePayload = {
  __typename?: 'CheckoutCreatePayload';
  /** The new checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /** The checkout queue token. Available only to selected stores. */
  queueToken?: Maybe<Scalars['String']>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutCustomerAssociateV2` mutation. */
type CheckoutCustomerAssociateV2Payload = {
  __typename?: 'CheckoutCustomerAssociateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /** The associated customer object. */
  customer?: Maybe<Customer>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutCustomerDisassociateV2` mutation. */
type CheckoutCustomerDisassociateV2Payload = {
  __typename?: 'CheckoutCustomerDisassociateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutDiscountCodeApplyV2` mutation. */
type CheckoutDiscountCodeApplyV2Payload = {
  __typename?: 'CheckoutDiscountCodeApplyV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutDiscountCodeRemove` mutation. */
type CheckoutDiscountCodeRemovePayload = {
  __typename?: 'CheckoutDiscountCodeRemovePayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutEmailUpdateV2` mutation. */
type CheckoutEmailUpdateV2Payload = {
  __typename?: 'CheckoutEmailUpdateV2Payload';
  /** The checkout object with the updated email. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Possible error codes that can be returned by `CheckoutUserError`. */
enum CheckoutErrorCode {
  /** Checkout is already completed. */
  ALREADY_COMPLETED = 'ALREADY_COMPLETED',
  /** Input email contains an invalid domain name. */
  BAD_DOMAIN = 'BAD_DOMAIN',
  /** The input value is blank. */
  BLANK = 'BLANK',
  /** Cart does not meet discount requirements notice. */
  CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE = 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE',
  /** Customer already used once per customer discount notice. */
  CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE = 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE',
  /** Discount already applied. */
  DISCOUNT_ALREADY_APPLIED = 'DISCOUNT_ALREADY_APPLIED',
  /** Discount disabled. */
  DISCOUNT_DISABLED = 'DISCOUNT_DISABLED',
  /** Discount expired. */
  DISCOUNT_EXPIRED = 'DISCOUNT_EXPIRED',
  /** Discount limit reached. */
  DISCOUNT_LIMIT_REACHED = 'DISCOUNT_LIMIT_REACHED',
  /** Discount not found. */
  DISCOUNT_NOT_FOUND = 'DISCOUNT_NOT_FOUND',
  /** Checkout is already completed. */
  EMPTY = 'EMPTY',
  /** Queue token has expired. */
  EXPIRED_QUEUE_TOKEN = 'EXPIRED_QUEUE_TOKEN',
  /** Gift card has already been applied. */
  GIFT_CARD_ALREADY_APPLIED = 'GIFT_CARD_ALREADY_APPLIED',
  /** Gift card code is invalid. */
  GIFT_CARD_CODE_INVALID = 'GIFT_CARD_CODE_INVALID',
  /** Gift card currency does not match checkout currency. */
  GIFT_CARD_CURRENCY_MISMATCH = 'GIFT_CARD_CURRENCY_MISMATCH',
  /** Gift card has no funds left. */
  GIFT_CARD_DEPLETED = 'GIFT_CARD_DEPLETED',
  /** Gift card is disabled. */
  GIFT_CARD_DISABLED = 'GIFT_CARD_DISABLED',
  /** Gift card is expired. */
  GIFT_CARD_EXPIRED = 'GIFT_CARD_EXPIRED',
  /** Gift card was not found. */
  GIFT_CARD_NOT_FOUND = 'GIFT_CARD_NOT_FOUND',
  /** Gift card cannot be applied to a checkout that contains a gift card. */
  GIFT_CARD_UNUSABLE = 'GIFT_CARD_UNUSABLE',
  /** The input value should be greater than or equal to the minimum value allowed. */
  GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO',
  /** Higher value discount applied. */
  HIGHER_VALUE_DISCOUNT_APPLIED = 'HIGHER_VALUE_DISCOUNT_APPLIED',
  /** The input value is invalid. */
  INVALID = 'INVALID',
  /** Cannot specify country and presentment currency code. */
  INVALID_COUNTRY_AND_CURRENCY = 'INVALID_COUNTRY_AND_CURRENCY',
  /** Input Zip is invalid for country provided. */
  INVALID_FOR_COUNTRY = 'INVALID_FOR_COUNTRY',
  /** Input Zip is invalid for country and province provided. */
  INVALID_FOR_COUNTRY_AND_PROVINCE = 'INVALID_FOR_COUNTRY_AND_PROVINCE',
  /** Invalid province in country. */
  INVALID_PROVINCE_IN_COUNTRY = 'INVALID_PROVINCE_IN_COUNTRY',
  /** Queue token is invalid. */
  INVALID_QUEUE_TOKEN = 'INVALID_QUEUE_TOKEN',
  /** Invalid region in country. */
  INVALID_REGION_IN_COUNTRY = 'INVALID_REGION_IN_COUNTRY',
  /** Invalid state in country. */
  INVALID_STATE_IN_COUNTRY = 'INVALID_STATE_IN_COUNTRY',
  /** The input value should be less than the maximum value allowed. */
  LESS_THAN = 'LESS_THAN',
  /** The input value should be less than or equal to the maximum value allowed. */
  LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO',
  /** Line item was not found in checkout. */
  LINE_ITEM_NOT_FOUND = 'LINE_ITEM_NOT_FOUND',
  /** Checkout is locked. */
  LOCKED = 'LOCKED',
  /** Maximum number of discount codes limit reached. */
  MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED = 'MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED',
  /** Missing payment input. */
  MISSING_PAYMENT_INPUT = 'MISSING_PAYMENT_INPUT',
  /** Not enough in stock. */
  NOT_ENOUGH_IN_STOCK = 'NOT_ENOUGH_IN_STOCK',
  /** Input value is not supported. */
  NOT_SUPPORTED = 'NOT_SUPPORTED',
  /** The input value needs to be blank. */
  PRESENT = 'PRESENT',
  /** Shipping rate expired. */
  SHIPPING_RATE_EXPIRED = 'SHIPPING_RATE_EXPIRED',
  /** Throttled during checkout. */
  THROTTLED_DURING_CHECKOUT = 'THROTTLED_DURING_CHECKOUT',
  /** The input value is too long. */
  TOO_LONG = 'TOO_LONG',
  /** The amount of the payment does not match the value to be paid. */
  TOTAL_PRICE_MISMATCH = 'TOTAL_PRICE_MISMATCH',
  /** Unable to apply discount. */
  UNABLE_TO_APPLY = 'UNABLE_TO_APPLY'
}

/** Return type for `checkoutGiftCardRemoveV2` mutation. */
type CheckoutGiftCardRemoveV2Payload = {
  __typename?: 'CheckoutGiftCardRemoveV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutGiftCardsAppend` mutation. */
type CheckoutGiftCardsAppendPayload = {
  __typename?: 'CheckoutGiftCardsAppendPayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** A single line item in the checkout, grouped by variant and attributes. */
type CheckoutLineItem = Node & {
  __typename?: 'CheckoutLineItem';
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes: Array<Attribute>;
  /** The discounts that have been allocated onto the checkout line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The quantity of the line item. */
  quantity: Scalars['Int'];
  /** Title of the line item. Defaults to the product's title. */
  title: Scalars['String'];
  /** Unit price of the line item. */
  unitPrice?: Maybe<MoneyV2>;
  /** Product variant of the line item. */
  variant?: Maybe<ProductVariant>;
};

/**
 * An auto-generated type for paginating through multiple CheckoutLineItems.
 *
 */
type CheckoutLineItemConnection = {
  __typename?: 'CheckoutLineItemConnection';
  /** A list of edges. */
  edges: Array<CheckoutLineItemEdge>;
  /** A list of the nodes contained in CheckoutLineItemEdge. */
  nodes: Array<CheckoutLineItem>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * An auto-generated type which holds one CheckoutLineItem and a cursor during pagination.
 *
 */
type CheckoutLineItemEdge = {
  __typename?: 'CheckoutLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CheckoutLineItemEdge. */
  node: CheckoutLineItem;
};

/** Specifies the input fields to create a line item on a checkout. */
type CheckoutLineItemInput = {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: InputMaybe<Array<AttributeInput>>;
  /** The quantity of the line item. */
  quantity: Scalars['Int'];
  /** The identifier of the product variant for the line item. */
  variantId: Scalars['ID'];
};

/** Specifies the input fields to update a line item on the checkout. */
type CheckoutLineItemUpdateInput = {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: InputMaybe<Array<AttributeInput>>;
  /** The identifier of the line item. */
  id?: InputMaybe<Scalars['ID']>;
  /** The quantity of the line item. */
  quantity?: InputMaybe<Scalars['Int']>;
  /** The variant identifier of the line item. */
  variantId?: InputMaybe<Scalars['ID']>;
};

/** Return type for `checkoutLineItemsAdd` mutation. */
type CheckoutLineItemsAddPayload = {
  __typename?: 'CheckoutLineItemsAddPayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutLineItemsRemove` mutation. */
type CheckoutLineItemsRemovePayload = {
  __typename?: 'CheckoutLineItemsRemovePayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutLineItemsReplace` mutation. */
type CheckoutLineItemsReplacePayload = {
  __typename?: 'CheckoutLineItemsReplacePayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CheckoutUserError>;
};

/** Return type for `checkoutLineItemsUpdate` mutation. */
type CheckoutLineItemsUpdatePayload = {
  __typename?: 'CheckoutLineItemsUpdatePayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutShippingAddressUpdateV2` mutation. */
type CheckoutShippingAddressUpdateV2Payload = {
  __typename?: 'CheckoutShippingAddressUpdateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutShippingLineUpdate` mutation. */
type CheckoutShippingLineUpdatePayload = {
  __typename?: 'CheckoutShippingLineUpdatePayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserError>;
};

/** Represents an error that happens during execution of a checkout mutation. */
type CheckoutUserError = DisplayableError & {
  __typename?: 'CheckoutUserError';
  /** The error code. */
  code?: Maybe<CheckoutErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
type Collection = HasMetafields & Node & OnlineStorePublishable & {
  __typename?: 'Collection';
  /** Stripped description of the collection, single line with HTML tags removed. */
  description: Scalars['String'];
  /** The description of the collection, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML'];
  /**
   * A human-friendly unique string for the collection automatically generated from its title.
   * Limit of 255 characters.
   *
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Image associated with the collection. */
  image?: Maybe<Image>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<Metafield>>;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** List of products in the collection. */
  products: ProductConnection;
  /** The collection's SEO information. */
  seo: SEO;
  /** The collection’s name. Limit of 255 characters. */
  title: Scalars['String'];
  /** The date and time when the collection was last modified. */
  updatedAt: Scalars['DateTime'];
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
type CollectiondescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
type CollectionmetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
type CollectionmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
type CollectionproductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Array<ProductFilter>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
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
};

/**
 * An auto-generated type which holds one Collection and a cursor during pagination.
 *
 */
type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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
  content: Scalars['String'];
  /** The content of the comment, complete with HTML formatting. */
  contentHtml: Scalars['HTML'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
};


/** A comment on an article. */
type CommentcontentArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};

/** The author of a comment. */
type CommentAuthor = {
  __typename?: 'CommentAuthor';
  /** The author's email. */
  email: Scalars['String'];
  /** The author’s name. */
  name: Scalars['String'];
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
  cursor: Scalars['String'];
  /** The item at the end of CommentEdge. */
  node: Comment;
};

/** A country. */
type Country = {
  __typename?: 'Country';
  /** The languages available for the country. */
  availableLanguages: Array<Language>;
  /** The currency of the country. */
  currency: Currency;
  /** The ISO code of the country. */
  isoCode: CountryCode;
  /** The name of the country. */
  name: Scalars['String'];
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
  /** Turkey. */
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

/** Credit card information used for a payment. */
type CreditCard = {
  __typename?: 'CreditCard';
  /** The brand of the credit card. */
  brand?: Maybe<Scalars['String']>;
  /** The expiry month of the credit card. */
  expiryMonth?: Maybe<Scalars['Int']>;
  /** The expiry year of the credit card. */
  expiryYear?: Maybe<Scalars['Int']>;
  /** The credit card's BIN number. */
  firstDigits?: Maybe<Scalars['String']>;
  /** The first name of the card holder. */
  firstName?: Maybe<Scalars['String']>;
  /** The last 4 digits of the credit card. */
  lastDigits?: Maybe<Scalars['String']>;
  /** The last name of the card holder. */
  lastName?: Maybe<Scalars['String']>;
  /** The masked credit card number with only the last 4 digits displayed. */
  maskedNumber?: Maybe<Scalars['String']>;
};

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 *
 */
type CreditCardPaymentInputV2 = {
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String'];
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInput;
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>;
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String'];
};

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
  name: Scalars['String'];
  /** The symbol of the currency. */
  symbol: Scalars['String'];
};

/**
 * The three-letter currency codes that represent the world currencies used in stores. These include standard ISO 4217 codes, legacy codes,
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
  /** Venezuelan Bolivares (VES). */
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
  acceptsMarketing: Scalars['Boolean'];
  /** A list of addresses for the customer. */
  addresses: MailingAddressConnection;
  /** The date and time when the customer was created. */
  createdAt: Scalars['DateTime'];
  /** The customer’s default address. */
  defaultAddress?: Maybe<MailingAddress>;
  /** The customer’s name, email or phone number. */
  displayName: Scalars['String'];
  /** The customer’s email address. */
  email?: Maybe<Scalars['String']>;
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>;
  /** A unique identifier for the customer. */
  id: Scalars['ID'];
  /** The customer's most recently updated, incomplete checkout. */
  lastIncompleteCheckout?: Maybe<Checkout>;
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<Metafield>>;
  /** The number of orders that the customer has made at the store in their lifetime. */
  numberOfOrders: Scalars['UnsignedInt64'];
  /** The orders associated with the customer. */
  orders: OrderConnection;
  /** The customer’s phone number. */
  phone?: Maybe<Scalars['String']>;
  /**
   * A comma separated list of tags that have been added to the customer.
   * Additional access scope required: unauthenticated_read_customer_tags.
   *
   */
  tags: Array<Scalars['String']>;
  /** The date and time when the customer information was updated. */
  updatedAt: Scalars['DateTime'];
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
type CustomeraddressesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
type CustomermetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
type CustomermetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
type CustomerordersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<OrderSortKeys>;
};

/** A CustomerAccessToken represents the unique token required to make modifications to the customer object. */
type CustomerAccessToken = {
  __typename?: 'CustomerAccessToken';
  /** The customer’s access token. */
  accessToken: Scalars['String'];
  /** The date and time when the customer access token expires. */
  expiresAt: Scalars['DateTime'];
};

/** Specifies the input fields required to create a customer access token. */
type CustomerAccessTokenCreateInput = {
  /** The email associated to the customer. */
  email: Scalars['String'];
  /** The login password to be used by the customer. */
  password: Scalars['String'];
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
  deletedAccessToken?: Maybe<Scalars['String']>;
  /** ID of the destroyed customer access token. */
  deletedCustomerAccessTokenId?: Maybe<Scalars['String']>;
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

/** Specifies the input fields required to activate a customer. */
type CustomerActivateInput = {
  /** The activation token required to activate the customer. */
  activationToken: Scalars['String'];
  /** New password that will be set during activation. */
  password: Scalars['String'];
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
  deletedCustomerAddressId?: Maybe<Scalars['String']>;
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

/** The fields required to create a new customer. */
type CustomerCreateInput = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>;
  /** The customer’s email. */
  email: Scalars['String'];
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** The login password used by the customer. */
  password: Scalars['String'];
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']>;
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

/** Specifies the fields required to reset a customer’s password. */
type CustomerResetInput = {
  /** New password that will be set as part of the reset password process. */
  password: Scalars['String'];
  /** The reset token required to reset the customer’s password. */
  resetToken: Scalars['String'];
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

/** Specifies the fields required to update the Customer information. */
type CustomerUpdateInput = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>;
  /** The customer’s email. */
  email?: InputMaybe<Scalars['String']>;
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** The login password used by the customer. */
  password?: InputMaybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.
   *
   */
  phone?: InputMaybe<Scalars['String']>;
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
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A delivery address of the buyer that is interacting with the cart. */
type DeliveryAddress = MailingAddress;

/**
 * The input fields for delivery address preferences.
 *
 */
type DeliveryAddressInput = {
  /** A delivery address preference of a buyer that is interacting with the cart. */
  deliveryAddress?: InputMaybe<MailingAddressInput>;
};

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
  cursor: Scalars['String'];
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
  applicable: Scalars['Boolean'];
  /** The string identifying the discount code that was used at the time of application. */
  code: Scalars['String'];
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
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** Represents a web address. */
type Domain = {
  __typename?: 'Domain';
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String'];
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean'];
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['URL'];
};

/** Represents a video hosted outside of Shopify. */
type ExternalVideo = Media & Node & {
  __typename?: 'ExternalVideo';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** The embed URL of the video for the respective host. */
  embedUrl: Scalars['URL'];
  /**
   * The URL.
   * @deprecated Use `originUrl` instead.
   */
  embeddedUrl: Scalars['URL'];
  /** The host of the external video. */
  host: MediaHost;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** The origin URL of the video on the respective host. */
  originUrl: Scalars['URL'];
  /** The preview image for the media. */
  previewImage?: Maybe<Image>;
};

/** A filter that is supported on the parent field. */
type Filter = {
  __typename?: 'Filter';
  /** A unique identifier. */
  id: Scalars['String'];
  /** A human-friendly string for this filter. */
  label: Scalars['String'];
  /** An enumeration that denotes the type of data this filter represents. */
  type: FilterType;
  /** The list of values for this filter. */
  values: Array<FilterValue>;
};

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
  count: Scalars['Int'];
  /** A unique identifier. */
  id: Scalars['String'];
  /**
   * An input object that can be used to filter by this value on the parent field.
   *
   * The value is provided as a helper for building dynamic filtering UI. For example, if you have a list of selected `FilterValue` objects, you can combine their respective `input` values to use in a subsequent query.
   *
   */
  input: Scalars['JSON'];
  /** A human-friendly string for this filter value. */
  label: Scalars['String'];
};

/** Represents a single fulfillment in an order. */
type Fulfillment = {
  __typename?: 'Fulfillment';
  /** List of the fulfillment's line items. */
  fulfillmentLineItems: FulfillmentLineItemConnection;
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>;
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking number and tracking URL.
   *
   */
  trackingInfo: Array<FulfillmentTrackingInfo>;
};


/** Represents a single fulfillment in an order. */
type FulfillmentfulfillmentLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a single fulfillment in an order. */
type FulfillmenttrackingInfoArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
type FulfillmentLineItem = {
  __typename?: 'FulfillmentLineItem';
  /** The associated order's line item. */
  lineItem: OrderLineItem;
  /** The amount fulfilled in this fulfillment. */
  quantity: Scalars['Int'];
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
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentLineItemEdge. */
  node: FulfillmentLineItem;
};

/** Tracking information associated with the fulfillment. */
type FulfillmentTrackingInfo = {
  __typename?: 'FulfillmentTrackingInfo';
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>;
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['URL']>;
};

/** The generic file resource lets you manage files in a merchant’s store. Generic files include any file that doesn’t fit into a designated type such as image or video. Example: PDF, JSON. */
type GenericFile = Node & {
  __typename?: 'GenericFile';
  /** A word or phrase to indicate the contents of a file. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The MIME type of the file. */
  mimeType?: Maybe<Scalars['String']>;
  /** The size of the original file in bytes. */
  originalFileSize?: Maybe<Scalars['Int']>;
  /** The preview image for the file. */
  previewImage?: Maybe<Image>;
  /** The URL of the file. */
  url?: Maybe<Scalars['URL']>;
};

/** Used to specify a geographical location. */
type GeoCoordinateInput = {
  /** The coordinate's latitude value. */
  latitude: Scalars['Float'];
  /** The coordinate's longitude value. */
  longitude: Scalars['Float'];
};

/** Represents information about the metafields associated to the specified resource. */
type HasMetafields = {
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<Metafield>>;
};


/** Represents information about the metafields associated to the specified resource. */
type HasMetafieldsmetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Represents information about the metafields associated to the specified resource. */
type HasMetafieldsmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};

/** Identifies a metafield on an owner resource by namespace and key. */
type HasMetafieldsIdentifier = {
  /** The identifier for the metafield. */
  key: Scalars['String'];
  /** A container for a set of metafields. */
  namespace: Scalars['String'];
};

/** Represents an image resource. */
type Image = {
  __typename?: 'Image';
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>;
  /** The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  height?: Maybe<Scalars['Int']>;
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>;
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   *
   * @deprecated Use `url` instead.
   */
  originalSrc: Scalars['URL'];
  /**
   * The location of the image as a URL.
   * @deprecated Use `url` instead.
   */
  src: Scalars['URL'];
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   *
   * @deprecated Use `url(transform:)` instead
   */
  transformedSrc: Scalars['URL'];
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
  url: Scalars['URL'];
  /** The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  width?: Maybe<Scalars['Int']>;
};


/** Represents an image resource. */
type ImagetransformedSrcArgs = {
  crop?: InputMaybe<CropRegion>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  preferredContentType?: InputMaybe<ImageContentType>;
  scale?: InputMaybe<Scalars['Int']>;
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
  cursor: Scalars['String'];
  /** The item at the end of ImageEdge. */
  node: Image;
};

/**
 * The available options for transforming an image.
 *
 * All transformation options are considered best effort. Any transformation that the original image type doesn't support will be ignored.
 *
 */
type ImageTransformInput = {
  /**
   * The region of the image to remain after cropping.
   * Must be used in conjunction with the `maxWidth` and/or `maxHeight` fields, where the `maxWidth` and `maxHeight` aren't equal.
   * The `crop` argument should coincide with the smaller value. A smaller `maxWidth` indicates a `LEFT` or `RIGHT` crop, while
   * a smaller `maxHeight` indicates a `TOP` or `BOTTOM` crop. For example, `{ maxWidth: 5, maxHeight: 10, crop: LEFT }` will result
   * in an image with a width of 5 and height of 10, where the right side of the image is removed.
   *
   */
  crop?: InputMaybe<CropRegion>;
  /**
   * Image height in pixels between 1 and 5760.
   *
   */
  maxHeight?: InputMaybe<Scalars['Int']>;
  /**
   * Image width in pixels between 1 and 5760.
   *
   */
  maxWidth?: InputMaybe<Scalars['Int']>;
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
  scale?: InputMaybe<Scalars['Int']>;
};

/** A language. */
type Language = {
  __typename?: 'Language';
  /** The name of the language in the language itself. If the language uses capitalization, it is capitalized for a mid-sentence position. */
  endonymName: Scalars['String'];
  /** The ISO code. */
  isoCode: LanguageCode;
  /** The name of the language in the current language. */
  name: Scalars['String'];
};

/** ISO 639-1 language codes supported by Shopify. */
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
  /** Sindhi. */
  SD = 'SD',
  /** Northern Sami. */
  SE = 'SE',
  /** Sango. */
  SG = 'SG',
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
};

/** Represents a location where product inventory is held. */
type Location = Node & {
  __typename?: 'Location';
  /** The address of the location. */
  address: LocationAddress;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the location. */
  name: Scalars['String'];
};

/**
 * Represents the address of a location.
 *
 */
type LocationAddress = {
  __typename?: 'LocationAddress';
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>;
  /** The city of the location. */
  city?: Maybe<Scalars['String']>;
  /** The country of the location. */
  country?: Maybe<Scalars['String']>;
  /** The country code of the location. */
  countryCode?: Maybe<Scalars['String']>;
  /** A formatted version of the address for the location. */
  formatted: Array<Scalars['String']>;
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']>;
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>;
  /** The province of the location. */
  province?: Maybe<Scalars['String']>;
  /**
   * The code for the province, state, or district of the address of the location.
   *
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>;
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
  cursor: Scalars['String'];
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
  address1?: Maybe<Scalars['String']>;
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: Maybe<Scalars['String']>;
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: Maybe<Scalars['String']>;
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: Maybe<Scalars['String']>;
  /**
   * The name of the country.
   *
   */
  country?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   * @deprecated Use `countryCodeV2` instead.
   */
  countryCode?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   */
  countryCodeV2?: Maybe<CountryCode>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>;
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']>;
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>;
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']>;
  /**
   * The full name of the customer, based on firstName and lastName.
   *
   */
  name?: Maybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: Maybe<Scalars['String']>;
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   *
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>;
};


/** Represents a mailing address for customers and shipping. */
type MailingAddressformattedArgs = {
  withCompany?: InputMaybe<Scalars['Boolean']>;
  withName?: InputMaybe<Scalars['Boolean']>;
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
  cursor: Scalars['String'];
  /** The item at the end of MailingAddressEdge. */
  node: MailingAddress;
};

/** Specifies the fields accepted to create or update a mailing address. */
type MailingAddressInput = {
  /**
   * The first line of the address. Typically the street address or PO Box number.
   *
   */
  address1?: InputMaybe<Scalars['String']>;
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: InputMaybe<Scalars['String']>;
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: InputMaybe<Scalars['String']>;
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: InputMaybe<Scalars['String']>;
  /** The name of the country. */
  country?: InputMaybe<Scalars['String']>;
  /** The first name of the customer. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The last name of the customer. */
  lastName?: InputMaybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']>;
  /** The region of the address, such as the province, state, or district. */
  province?: InputMaybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: InputMaybe<Scalars['String']>;
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
  description?: Maybe<Scalars['String']>;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
  /** The title of the application. */
  title: Scalars['String'];
  /** The value of the discount application. */
  value: PricingValue;
};

/** Represents a media interface. */
type Media = {
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** The media content type. */
  mediaContentType: MediaContentType;
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
  cursor: Scalars['String'];
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
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image for the media. */
  image?: Maybe<Image>;
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<Image>;
};

/**
 * A menu used for navigation within a storefront.
 *
 */
type Menu = Node & {
  __typename?: 'Menu';
  /** The menu's handle. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The menu's child items. */
  items: Array<MenuItem>;
  /** The count of items on the menu. */
  itemsCount: Scalars['Int'];
  /** The menu's title. */
  title: Scalars['String'];
};

/**
 * A menu item within a parent menu.
 *
 */
type MenuItem = Node & {
  __typename?: 'MenuItem';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The menu item's child items. */
  items: Array<MenuItem>;
  /** The ID of the linked resource. */
  resourceId?: Maybe<Scalars['ID']>;
  /** The menu item's tags to filter a collection. */
  tags: Array<Scalars['String']>;
  /** The menu item's title. */
  title: Scalars['String'];
  /** The menu item's type. */
  type: MenuItemType;
  /** The menu item's URL. */
  url?: Maybe<Scalars['URL']>;
};

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
  /** A frontpage link. */
  FRONTPAGE = 'FRONTPAGE',
  /** An http link. */
  HTTP = 'HTTP',
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
  createdAt: Scalars['DateTime'];
  /** The description of a metafield. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The key name for a metafield. */
  key: Scalars['String'];
  /** The namespace for a metafield. */
  namespace: Scalars['String'];
  /** The parent object that the metafield belongs to. */
  parentResource: MetafieldParentResource;
  /** Returns a reference object if the metafield definition's type is a resource reference. */
  reference?: Maybe<MetafieldReference>;
  /** A list of reference objects if the metafield's type is a resource reference list. */
  references?: Maybe<MetafieldReferenceConnection>;
  /**
   * The type name of the metafield.
   * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   *
   */
  type: Scalars['String'];
  /** The date and time when the storefront metafield was updated. */
  updatedAt: Scalars['DateTime'];
  /** The value of a metafield. */
  value: Scalars['String'];
};


/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 *
 */
type MetafieldreferencesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
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
  key: Scalars['String'];
  /** The namespace of the metafield to filter on. */
  namespace: Scalars['String'];
  /** The value of the metafield. */
  value: Scalars['String'];
};

/** A resource that the metafield belongs to. */
type MetafieldParentResource = Article | Blog | Collection | Customer | Order | Page | Product | ProductVariant | Shop;

/**
 * Returns the resource which is being referred to by a metafield.
 *
 */
type MetafieldReference = Collection | GenericFile | MediaImage | Page | Product | ProductVariant | Video;

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
  cursor: Scalars['String'];
  /** The item at the end of MetafieldReferenceEdge. */
  node: MetafieldReference;
};

/** Represents a Shopify hosted 3D model. */
type Model3d = Media & Node & {
  __typename?: 'Model3d';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<Image>;
  /** The sources for a 3d model. */
  sources: Array<Model3dSource>;
};

/** Represents a source for a Shopify hosted 3d model. */
type Model3dSource = {
  __typename?: 'Model3dSource';
  /** The filesize of the 3d model. */
  filesize: Scalars['Int'];
  /** The format of the 3d model. */
  format: Scalars['String'];
  /** The MIME type of the 3d model. */
  mimeType: Scalars['String'];
  /** The URL of the 3d model. */
  url: Scalars['String'];
};

/** Specifies the fields for a monetary value with currency. */
type MoneyInput = {
  /** Decimal money amount. */
  amount: Scalars['Decimal'];
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
  amount: Scalars['Decimal'];
  /** Currency of the money. */
  currencyCode: CurrencyCode;
};

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type Mutation = {
  __typename?: 'Mutation';
  /** Updates the attributes on a cart. */
  cartAttributesUpdate?: Maybe<CartAttributesUpdatePayload>;
  /**
   * Updates customer information associated with a cart.
   * Buyer identity is used to determine
   * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
   * and should match the customer's shipping address.
   *
   */
  cartBuyerIdentityUpdate?: Maybe<CartBuyerIdentityUpdatePayload>;
  /** Creates a new cart. */
  cartCreate?: Maybe<CartCreatePayload>;
  /** Updates the discount codes applied to the cart. */
  cartDiscountCodesUpdate?: Maybe<CartDiscountCodesUpdatePayload>;
  /** Adds a merchandise line to the cart. */
  cartLinesAdd?: Maybe<CartLinesAddPayload>;
  /** Removes one or more merchandise lines from the cart. */
  cartLinesRemove?: Maybe<CartLinesRemovePayload>;
  /** Updates one or more merchandise lines on a cart. */
  cartLinesUpdate?: Maybe<CartLinesUpdatePayload>;
  /** Updates the note on the cart. */
  cartNoteUpdate?: Maybe<CartNoteUpdatePayload>;
  /** Update the selected delivery options for a delivery group. */
  cartSelectedDeliveryOptionsUpdate?: Maybe<CartSelectedDeliveryOptionsUpdatePayload>;
  /** Updates the attributes of a checkout if `allowPartialAddresses` is `true`. */
  checkoutAttributesUpdateV2?: Maybe<CheckoutAttributesUpdateV2Payload>;
  /** Completes a checkout without providing payment information. You can use this mutation for free items or items whose purchase price is covered by a gift card. */
  checkoutCompleteFree?: Maybe<CheckoutCompleteFreePayload>;
  /** Completes a checkout using a credit card token from Shopify's card vault. Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you need to  [_request payment processing_](https://shopify.dev/apps/channels/getting-started#request-payment-processing). */
  checkoutCompleteWithCreditCardV2?: Maybe<CheckoutCompleteWithCreditCardV2Payload>;
  /** Completes a checkout with a tokenized payment. */
  checkoutCompleteWithTokenizedPaymentV3?: Maybe<CheckoutCompleteWithTokenizedPaymentV3Payload>;
  /** Creates a new checkout. */
  checkoutCreate?: Maybe<CheckoutCreatePayload>;
  /** Associates a customer to the checkout. */
  checkoutCustomerAssociateV2?: Maybe<CheckoutCustomerAssociateV2Payload>;
  /** Disassociates the current checkout customer from the checkout. */
  checkoutCustomerDisassociateV2?: Maybe<CheckoutCustomerDisassociateV2Payload>;
  /** Applies a discount to an existing checkout using a discount code. */
  checkoutDiscountCodeApplyV2?: Maybe<CheckoutDiscountCodeApplyV2Payload>;
  /** Removes the applied discounts from an existing checkout. */
  checkoutDiscountCodeRemove?: Maybe<CheckoutDiscountCodeRemovePayload>;
  /** Updates the email on an existing checkout. */
  checkoutEmailUpdateV2?: Maybe<CheckoutEmailUpdateV2Payload>;
  /** Removes an applied gift card from the checkout. */
  checkoutGiftCardRemoveV2?: Maybe<CheckoutGiftCardRemoveV2Payload>;
  /** Appends gift cards to an existing checkout. */
  checkoutGiftCardsAppend?: Maybe<CheckoutGiftCardsAppendPayload>;
  /** Adds a list of line items to a checkout. */
  checkoutLineItemsAdd?: Maybe<CheckoutLineItemsAddPayload>;
  /** Removes line items from an existing checkout. */
  checkoutLineItemsRemove?: Maybe<CheckoutLineItemsRemovePayload>;
  /** Sets a list of line items to a checkout. */
  checkoutLineItemsReplace?: Maybe<CheckoutLineItemsReplacePayload>;
  /** Updates line items on a checkout. */
  checkoutLineItemsUpdate?: Maybe<CheckoutLineItemsUpdatePayload>;
  /** Updates the shipping address of an existing checkout. */
  checkoutShippingAddressUpdateV2?: Maybe<CheckoutShippingAddressUpdateV2Payload>;
  /** Updates the shipping lines on an existing checkout. */
  checkoutShippingLineUpdate?: Maybe<CheckoutShippingLineUpdatePayload>;
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
   * This mutation is throttled by IP. With authenticated access,
   * you can provide a [`Shopify-Storefront-Buyer-IP`](https://shopify.dev/api/usage/authentication#optional-ip-header) instead of the request IP.
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
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartAttributesUpdateArgs = {
  attributes: Array<AttributeInput>;
  cartId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartBuyerIdentityUpdateArgs = {
  buyerIdentity: CartBuyerIdentityInput;
  cartId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartCreateArgs = {
  input?: InputMaybe<CartInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartDiscountCodesUpdateArgs = {
  cartId: Scalars['ID'];
  discountCodes?: InputMaybe<Array<Scalars['String']>>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartLinesAddArgs = {
  cartId: Scalars['ID'];
  lines: Array<CartLineInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartLinesRemoveArgs = {
  cartId: Scalars['ID'];
  lineIds: Array<Scalars['ID']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartLinesUpdateArgs = {
  cartId: Scalars['ID'];
  lines: Array<CartLineUpdateInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartNoteUpdateArgs = {
  cartId: Scalars['ID'];
  note?: InputMaybe<Scalars['String']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcartSelectedDeliveryOptionsUpdateArgs = {
  cartId: Scalars['ID'];
  selectedDeliveryOptions: Array<CartSelectedDeliveryOptionInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutAttributesUpdateV2Args = {
  checkoutId: Scalars['ID'];
  input: CheckoutAttributesUpdateV2Input;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutCompleteFreeArgs = {
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutCompleteWithCreditCardV2Args = {
  checkoutId: Scalars['ID'];
  payment: CreditCardPaymentInputV2;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutCompleteWithTokenizedPaymentV3Args = {
  checkoutId: Scalars['ID'];
  payment: TokenizedPaymentInputV3;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutCreateArgs = {
  input: CheckoutCreateInput;
  queueToken?: InputMaybe<Scalars['String']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutCustomerAssociateV2Args = {
  checkoutId: Scalars['ID'];
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutCustomerDisassociateV2Args = {
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutDiscountCodeApplyV2Args = {
  checkoutId: Scalars['ID'];
  discountCode: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutDiscountCodeRemoveArgs = {
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutEmailUpdateV2Args = {
  checkoutId: Scalars['ID'];
  email: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutGiftCardRemoveV2Args = {
  appliedGiftCardId: Scalars['ID'];
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutGiftCardsAppendArgs = {
  checkoutId: Scalars['ID'];
  giftCardCodes: Array<Scalars['String']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutLineItemsAddArgs = {
  checkoutId: Scalars['ID'];
  lineItems: Array<CheckoutLineItemInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutLineItemsRemoveArgs = {
  checkoutId: Scalars['ID'];
  lineItemIds: Array<Scalars['ID']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutLineItemsReplaceArgs = {
  checkoutId: Scalars['ID'];
  lineItems: Array<CheckoutLineItemInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutLineItemsUpdateArgs = {
  checkoutId: Scalars['ID'];
  lineItems: Array<CheckoutLineItemUpdateInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutShippingAddressUpdateV2Args = {
  checkoutId: Scalars['ID'];
  shippingAddress: MailingAddressInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcheckoutShippingLineUpdateArgs = {
  checkoutId: Scalars['ID'];
  shippingRateHandle: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerAccessTokenCreateArgs = {
  input: CustomerAccessTokenCreateInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerAccessTokenCreateWithMultipassArgs = {
  multipassToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerAccessTokenDeleteArgs = {
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerAccessTokenRenewArgs = {
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerActivateArgs = {
  id: Scalars['ID'];
  input: CustomerActivateInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerActivateByUrlArgs = {
  activationUrl: Scalars['URL'];
  password: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerAddressCreateArgs = {
  address: MailingAddressInput;
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerAddressDeleteArgs = {
  customerAccessToken: Scalars['String'];
  id: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerAddressUpdateArgs = {
  address: MailingAddressInput;
  customerAccessToken: Scalars['String'];
  id: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerCreateArgs = {
  input: CustomerCreateInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerDefaultAddressUpdateArgs = {
  addressId: Scalars['ID'];
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerRecoverArgs = {
  email: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerResetArgs = {
  id: Scalars['ID'];
  input: CustomerResetInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerResetByUrlArgs = {
  password: Scalars['String'];
  resetUrl: Scalars['URL'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
type MutationcustomerUpdateArgs = {
  customer: CustomerUpdateInput;
  customerAccessToken: Scalars['String'];
};

/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)
 * and [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.
 *
 */
type Node = {
  /** A globally-unique identifier. */
  id: Scalars['ID'];
};

/** Represents a resource that can be published to the Online Store sales channel. */
type OnlineStorePublishable = {
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
};

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
type Order = HasMetafields & Node & {
  __typename?: 'Order';
  /** The reason for the order's cancellation. Returns `null` if the order wasn't canceled. */
  cancelReason?: Maybe<OrderCancelReason>;
  /** The date and time when the order was canceled. Returns null if the order wasn't canceled. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The code of the currency used for the payment. */
  currencyCode: CurrencyCode;
  /** The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes are not included unless the order is a taxes-included order. */
  currentSubtotalPrice: MoneyV2;
  /** The total cost of duties for the order, including refunds. */
  currentTotalDuties?: Maybe<MoneyV2>;
  /** The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed. */
  currentTotalPrice: MoneyV2;
  /** The total of all taxes applied to the order, excluding taxes for returned line items. */
  currentTotalTax: MoneyV2;
  /** The locale code in which this specific order happened. */
  customerLocale?: Maybe<Scalars['String']>;
  /** The unique URL that the customer can use to access the order. */
  customerUrl?: Maybe<Scalars['URL']>;
  /** Discounts that have been applied on the order. */
  discountApplications: DiscountApplicationConnection;
  /** Whether the order has had any edits applied or not. */
  edited: Scalars['Boolean'];
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>;
  /** The financial status of the order. */
  financialStatus?: Maybe<OrderFinancialStatus>;
  /** The fulfillment status for the order. */
  fulfillmentStatus: OrderFulfillmentStatus;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** List of the order’s line items. */
  lineItems: OrderLineItemConnection;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<Metafield>>;
  /**
   * Unique identifier for the order that appears on the order.
   * For example, _#1000_ or _Store1001.
   *
   */
  name: Scalars['String'];
  /** A unique numeric identifier for the order for use by shop owner and customer. */
  orderNumber: Scalars['Int'];
  /** The total cost of duties charged at checkout. */
  originalTotalDuties?: Maybe<MoneyV2>;
  /** The total price of the order before any applied edits. */
  originalTotalPrice: MoneyV2;
  /** The customer's phone number for receiving SMS notifications. */
  phone?: Maybe<Scalars['String']>;
  /**
   * The date and time when the order was imported.
   * This value can be set to dates in the past when importing from other systems.
   * If no value is provided, it will be auto-generated based on current date and time.
   *
   */
  processedAt: Scalars['DateTime'];
  /** The address to where the order will be shipped. */
  shippingAddress?: Maybe<MailingAddress>;
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   *
   */
  shippingDiscountAllocations: Array<DiscountAllocation>;
  /** The unique URL for the order's status page. */
  statusUrl: Scalars['URL'];
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
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
type OrderlineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
type OrdermetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
type OrdermetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
type OrdersuccessfulFulfillmentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
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
  OTHER = 'OTHER'
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
  totalCount: Scalars['UnsignedInt64'];
};

/**
 * An auto-generated type which holds one Order and a cursor during pagination.
 *
 */
type OrderEdge = {
  __typename?: 'OrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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
  currentQuantity: Scalars['Int'];
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<Attribute>;
  /** The discounts that have been allocated onto the order line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>;
  /** The total price of the line item, including discounts, and displayed in the presentment currency. */
  discountedTotalPrice: MoneyV2;
  /** The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency. */
  originalTotalPrice: MoneyV2;
  /** The number of products variants associated to the line item. */
  quantity: Scalars['Int'];
  /** The title of the product combined with title of the variant. */
  title: Scalars['String'];
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
  cursor: Scalars['String'];
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
type Page = HasMetafields & Node & OnlineStorePublishable & {
  __typename?: 'Page';
  /** The description of the page, complete with HTML formatting. */
  body: Scalars['HTML'];
  /** Summary of the page body. */
  bodySummary: Scalars['String'];
  /** The timestamp of the page creation. */
  createdAt: Scalars['DateTime'];
  /** A human-friendly unique string for the page automatically generated from its title. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<Metafield>>;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** The page's SEO information. */
  seo?: Maybe<SEO>;
  /** The title of the page. */
  title: Scalars['String'];
  /** The timestamp of the latest page update. */
  updatedAt: Scalars['DateTime'];
};


/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
type PagemetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
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
  cursor: Scalars['String'];
  /** The item at the end of PageEdge. */
  node: Page;
};

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 *
 */
type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor corresponding to the last node in edges. */
  endCursor?: Maybe<Scalars['String']>;
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean'];
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor corresponding to the first node in edges. */
  startCursor?: Maybe<Scalars['String']>;
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

/** A payment applied to a checkout. */
type Payment = Node & {
  __typename?: 'Payment';
  /** The amount of the payment. */
  amount: MoneyV2;
  /**
   * The amount of the payment.
   * @deprecated Use `amount` instead.
   */
  amountV2: MoneyV2;
  /** The billing address for the payment. */
  billingAddress?: Maybe<MailingAddress>;
  /** The checkout to which the payment belongs. */
  checkout: Checkout;
  /** The credit card used for the payment in the case of direct payments. */
  creditCard?: Maybe<CreditCard>;
  /** A message describing a processing error during asynchronous processing. */
  errorMessage?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /**
   * A client-side generated token to identify a payment and perform idempotent operations.
   * For more information, refer to
   * [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).
   *
   */
  idempotencyKey?: Maybe<Scalars['String']>;
  /** The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow. */
  nextActionUrl?: Maybe<Scalars['URL']>;
  /** Whether the payment is still processing asynchronously. */
  ready: Scalars['Boolean'];
  /** A flag to indicate if the payment is to be done in test mode for gateways that support it. */
  test: Scalars['Boolean'];
  /** The actual transaction recorded by Shopify after having processed the payment with the gateway. */
  transaction?: Maybe<Transaction>;
};

/** Settings related to payments. */
type PaymentSettings = {
  __typename?: 'PaymentSettings';
  /** List of the card brands which the shop accepts. */
  acceptedCardBrands: Array<CardBrand>;
  /** The url pointing to the endpoint to vault credit cards. */
  cardVaultUrl: Scalars['URL'];
  /** The country where the shop is located. */
  countryCode: CountryCode;
  /** The three-letter code for the shop's primary currency. */
  currencyCode: CurrencyCode;
  /** A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin. */
  enabledPresentmentCurrencies: Array<CurrencyCode>;
  /** The shop’s Shopify Payments account id. */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>;
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<DigitalWallet>;
};

/** The valid values for the types of payment token. */
enum PaymentTokenType {
  /** Apple Pay token type. */
  APPLE_PAY = 'APPLE_PAY',
  /** Google Pay token type. */
  GOOGLE_PAY = 'GOOGLE_PAY',
  /** Shopify Pay token type. */
  SHOPIFY_PAY = 'SHOPIFY_PAY',
  /** Stripe token type. */
  STRIPE_VAULT_TOKEN = 'STRIPE_VAULT_TOKEN',
  /** Vault payment token type. */
  VAULT = 'VAULT'
}

/** A filter used to view a subset of products in a collection matching a specific price range. */
type PriceRangeFilter = {
  /** The maximum price in the range. Empty indicates no max price. */
  max?: InputMaybe<Scalars['Float']>;
  /** The minimum price in the range. Defaults to zero. */
  min?: InputMaybe<Scalars['Float']>;
};

/** The value of the percentage pricing object. */
type PricingPercentageValue = {
  __typename?: 'PricingPercentageValue';
  /** The percentage value of the object. */
  percentage: Scalars['Float'];
};

/** The price value (fixed or percentage) for a discount application. */
type PricingValue = MoneyV2 | PricingPercentageValue;

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
type Product = HasMetafields & Node & OnlineStorePublishable & {
  __typename?: 'Product';
  /** Indicates if at least one product variant is available for sale. */
  availableForSale: Scalars['Boolean'];
  /** List of collections a product belongs to. */
  collections: CollectionConnection;
  /** The compare at price of the product across all variants. */
  compareAtPriceRange: ProductPriceRange;
  /** The date and time when the product was created. */
  createdAt: Scalars['DateTime'];
  /** Stripped description of the product, single line with HTML tags removed. */
  description: Scalars['String'];
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML'];
  /**
   * The featured image for the product.
   *
   * This field is functionally equivalent to `images(first: 1)`.
   *
   */
  featuredImage?: Maybe<Image>;
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   *
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** List of images associated with the product. */
  images: ImageConnection;
  /** Whether the product is a gift card. */
  isGiftCard: Scalars['Boolean'];
  /** The media associated with the product. */
  media: MediaConnection;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<Metafield>>;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** List of product options. */
  options: Array<ProductOption>;
  /** The price range. */
  priceRange: ProductPriceRange;
  /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
  productType: Scalars['String'];
  /** The date and time when the product was published to the channel. */
  publishedAt: Scalars['DateTime'];
  /** Whether the product can only be purchased with a selling plan. */
  requiresSellingPlan: Scalars['Boolean'];
  /** A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
  sellingPlanGroups: SellingPlanGroupConnection;
  /** The product's SEO information. */
  seo: SEO;
  /**
   * A comma separated list of tags that have been added to the product.
   * Additional access scope required for private apps: unauthenticated_read_product_tags.
   *
   */
  tags: Array<Scalars['String']>;
  /** The product’s title. */
  title: Scalars['String'];
  /** The total quantity of inventory in stock for this Product. */
  totalInventory?: Maybe<Scalars['Int']>;
  /**
   * The date and time when the product was last modified.
   * A product's `updatedAt` value can change for different reasons. For example, if an order
   * is placed for a product that has inventory tracking set up, then the inventory adjustment
   * is counted as an update.
   *
   */
  updatedAt: Scalars['DateTime'];
  /**
   * Find a product’s variant based on its selected options.
   * This is useful for converting a user’s selection of product options into a single matching variant.
   * If there is not a variant for the selected options, `null` will be returned.
   *
   */
  variantBySelectedOptions?: Maybe<ProductVariant>;
  /** List of the product’s variants. */
  variants: ProductVariantConnection;
  /** The product’s vendor name. */
  vendor: Scalars['String'];
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
type ProductcollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
type ProductdescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
type ProductimagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ProductImageSortKeys>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
type ProductmediaArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ProductMediaSortKeys>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
type ProductmetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
type ProductmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
type ProductoptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
type ProductsellingPlanGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
type ProductvariantBySelectedOptionsArgs = {
  selectedOptions: Array<SelectedOptionInput>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
type ProductvariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
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
  cursor: Scalars['String'];
  /** The item at the end of ProductEdge. */
  node: Product;
};

/** A filter used to view a subset of products in a collection. */
type ProductFilter = {
  /** Filter on if the product is available for sale. */
  available?: InputMaybe<Scalars['Boolean']>;
  /** A range of prices to filter with-in. */
  price?: InputMaybe<PriceRangeFilter>;
  /** A product metafield to filter on. */
  productMetafield?: InputMaybe<MetafieldFilter>;
  /** The product type to filter on. */
  productType?: InputMaybe<Scalars['String']>;
  /** The product vendor to filter on. */
  productVendor?: InputMaybe<Scalars['String']>;
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
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The product option’s name. */
  name: Scalars['String'];
  /** The corresponding value to the product option name. */
  values: Array<Scalars['String']>;
};

/** The price range of the product. */
type ProductPriceRange = {
  __typename?: 'ProductPriceRange';
  /** The highest variant's price. */
  maxVariantPrice: MoneyV2;
  /** The lowest variant's price. */
  minVariantPrice: MoneyV2;
};

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

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
type ProductVariant = HasMetafields & Node & {
  __typename?: 'ProductVariant';
  /** Indicates if the product variant is available for sale. */
  availableForSale: Scalars['Boolean'];
  /** The barcode (for example, ISBN, UPC, or GTIN) associated with the variant. */
  barcode?: Maybe<Scalars['String']>;
  /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`. */
  compareAtPrice?: Maybe<MoneyV2>;
  /**
   * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`.
   * @deprecated Use `compareAtPrice` instead.
   */
  compareAtPriceV2?: Maybe<MoneyV2>;
  /** Whether a product is out of stock but still available for purchase (used for backorders). */
  currentlyNotInStock: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /**
   * Image associated with the product variant. This field falls back to the product image if no image is available.
   *
   */
  image?: Maybe<Image>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
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
  quantityAvailable?: Maybe<Scalars['Int']>;
  /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
  requiresShipping: Scalars['Boolean'];
  /** List of product options applied to the variant. */
  selectedOptions: Array<SelectedOption>;
  /** Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing. */
  sellingPlanAllocations: SellingPlanAllocationConnection;
  /** The SKU (stock keeping unit) associated with the variant. */
  sku?: Maybe<Scalars['String']>;
  /** The in-store pickup availability of this variant by location. */
  storeAvailability: StoreAvailabilityConnection;
  /** The product variant’s title. */
  title: Scalars['String'];
  /** The unit price value for the variant based on the variant's measurement. */
  unitPrice?: Maybe<MoneyV2>;
  /** The unit price measurement for the variant. */
  unitPriceMeasurement?: Maybe<UnitPriceMeasurement>;
  /** The weight of the product variant in the unit system specified with `weight_unit`. */
  weight?: Maybe<Scalars['Float']>;
  /** Unit of measurement for weight. */
  weightUnit: WeightUnit;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
type ProductVariantmetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
type ProductVariantmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
type ProductVariantsellingPlanAllocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
type ProductVariantstoreAvailabilityArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
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
  cursor: Scalars['String'];
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

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRoot = {
  __typename?: 'QueryRoot';
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
  /** Fetch a specific `Collection` by one of its unique attributes. */
  collection?: Maybe<Collection>;
  /**
   * Find a collection by its handle.
   * @deprecated Use `collection` instead.
   */
  collectionByHandle?: Maybe<Collection>;
  /** List of the shop’s collections. */
  collections: CollectionConnection;
  /** Find a customer by its access token. */
  customer?: Maybe<Customer>;
  /** Returns the localized experiences configured for the shop. */
  localization: Localization;
  /**
   * List of the shop's locations that support in-store pickup.
   *
   * When sorting by distance, you must specify a location via the `near` argument.
   *
   */
  locations: LocationConnection;
  /** A storefront menu. */
  menu?: Maybe<Menu>;
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
  /** List of the shop’s products. */
  products: ProductConnection;
  /** The list of public Storefront API versions, including supported, release candidate and unstable versions. */
  publicApiVersions: Array<ApiVersion>;
  /** The shop associated with the storefront access token. */
  shop: Shop;
  /** A list of redirects for a shop. */
  urlRedirects: UrlRedirectConnection;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootarticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ArticleSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootblogArgs = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootblogByHandleArgs = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootblogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<BlogSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootcartArgs = {
  id: Scalars['ID'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootcollectionArgs = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootcollectionByHandleArgs = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootcollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<CollectionSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootcustomerArgs = {
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootlocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  near?: InputMaybe<GeoCoordinateInput>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<LocationSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootmenuArgs = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootnodeArgs = {
  id: Scalars['ID'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootnodesArgs = {
  ids: Array<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootpageArgs = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootpageByHandleArgs = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootpagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<PageSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootproductArgs = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootproductByHandleArgs = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootproductRecommendationsArgs = {
  productId: Scalars['ID'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootproductTagsArgs = {
  first: Scalars['Int'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootproductTypesArgs = {
  first: Scalars['Int'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRootproductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ProductSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
type QueryRooturlRedirectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** SEO information. */
type SEO = {
  __typename?: 'SEO';
  /** The meta description. */
  description?: Maybe<Scalars['String']>;
  /** The SEO title. */
  title?: Maybe<Scalars['String']>;
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
  title: Scalars['String'];
  /** The value of the discount application. */
  value: PricingValue;
};

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 *
 */
type SelectedOption = {
  __typename?: 'SelectedOption';
  /** The product option’s name. */
  name: Scalars['String'];
  /** The product option’s value. */
  value: Scalars['String'];
};

/** Specifies the input fields required for a selected option. */
type SelectedOptionInput = {
  /** The product option’s name. */
  name: Scalars['String'];
  /** The product option’s value. */
  value: Scalars['String'];
};

/** Represents how products and variants can be sold and purchased. */
type SellingPlan = {
  __typename?: 'SellingPlan';
  /** The initial payment due for the purchase. */
  checkoutCharge: SellingPlanCheckoutCharge;
  /** The description of the selling plan. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'. */
  name: Scalars['String'];
  /** The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing. */
  options: Array<SellingPlanOption>;
  /** The price adjustments that a selling plan makes when a variant is purchased with a selling plan. */
  priceAdjustments: Array<SellingPlanPriceAdjustment>;
  /** Whether purchasing the selling plan will result in multiple deliveries. */
  recurringDeliveries: Scalars['Boolean'];
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
  cursor: Scalars['String'];
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
  percentage: Scalars['Float'];
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

/**
 * An auto-generated type which holds one SellingPlan and a cursor during pagination.
 *
 */
type SellingPlanEdge = {
  __typename?: 'SellingPlanEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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
  appName?: Maybe<Scalars['String']>;
  /** The name of the selling plan group. */
  name: Scalars['String'];
  /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<SellingPlanGroupOption>;
  /** A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlans: SellingPlanConnection;
};


/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
type SellingPlanGroupsellingPlansArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
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
  cursor: Scalars['String'];
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
  name: Scalars['String'];
  /** The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'. */
  values: Array<Scalars['String']>;
};

/** An option provided by a Selling Plan. */
type SellingPlanOption = {
  __typename?: 'SellingPlanOption';
  /** The name of the option (ie "Delivery every"). */
  name?: Maybe<Scalars['String']>;
  /** The value of the option (ie "Month"). */
  value?: Maybe<Scalars['String']>;
};

/** A percentage amount that's deducted from the original variant price. For example, 10% off. */
type SellingPlanPercentagePriceAdjustment = {
  __typename?: 'SellingPlanPercentagePriceAdjustment';
  /** The percentage value of the price adjustment. */
  adjustmentPercentage: Scalars['Int'];
};

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price. */
type SellingPlanPriceAdjustment = {
  __typename?: 'SellingPlanPriceAdjustment';
  /** The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price. */
  adjustmentValue: SellingPlanPriceAdjustmentValue;
  /** The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`. */
  orderCount?: Maybe<Scalars['Int']>;
};

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
type SellingPlanPriceAdjustmentValue = SellingPlanFixedAmountPriceAdjustment | SellingPlanFixedPriceAdjustment | SellingPlanPercentagePriceAdjustment;

/** A shipping rate to be applied to a checkout. */
type ShippingRate = {
  __typename?: 'ShippingRate';
  /** Human-readable unique identifier for this shipping rate. */
  handle: Scalars['String'];
  /** Price of this shipping rate. */
  price: MoneyV2;
  /**
   * Price of this shipping rate.
   * @deprecated Use `price` instead.
   */
  priceV2: MoneyV2;
  /** Title of this shipping rate. */
  title: Scalars['String'];
};

/** Shop represents a collection of the general settings and information about the shop. */
type Shop = HasMetafields & Node & {
  __typename?: 'Shop';
  /** The shop's branding configuration. */
  brand?: Maybe<Brand>;
  /** A description of the shop. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<Metafield>>;
  /** A string representing the way currency is formatted when the currency isn’t specified. */
  moneyFormat: Scalars['String'];
  /** The shop’s name. */
  name: Scalars['String'];
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
  /** The shop’s subscription policy. */
  subscriptionPolicy?: Maybe<ShopPolicyWithDefault>;
  /** The shop’s terms of service. */
  termsOfService?: Maybe<ShopPolicy>;
};


/** Shop represents a collection of the general settings and information about the shop. */
type ShopmetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Shop represents a collection of the general settings and information about the shop. */
type ShopmetafieldsArgs = {
  identifiers: Array<HasMetafieldsIdentifier>;
};

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
type ShopPolicy = Node & {
  __typename?: 'ShopPolicy';
  /** Policy text, maximum size of 64kb. */
  body: Scalars['String'];
  /** Policy’s handle. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Policy’s title. */
  title: Scalars['String'];
  /** Public URL to the policy. */
  url: Scalars['URL'];
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
  body: Scalars['String'];
  /** The handle of the policy. */
  handle: Scalars['String'];
  /** The unique identifier of the policy. A default policy doesn't have an ID. */
  id?: Maybe<Scalars['ID']>;
  /** The title of the policy. */
  title: Scalars['String'];
  /** Public URL to the policy. */
  url: Scalars['URL'];
};

/**
 * The availability of a product variant at a particular location.
 * Local pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.
 *
 */
type StoreAvailability = {
  __typename?: 'StoreAvailability';
  /** Whether the product variant is in-stock at this location. */
  available: Scalars['Boolean'];
  /** The location where this product variant is stocked at. */
  location: Location;
  /** Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours). */
  pickUpTime: Scalars['String'];
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
  cursor: Scalars['String'];
  /** The item at the end of StoreAvailabilityEdge. */
  node: StoreAvailability;
};

/**
 * An auto-generated type for paginating through a list of Strings.
 *
 */
type StringConnection = {
  __typename?: 'StringConnection';
  /** A list of edges. */
  edges: Array<StringEdge>;
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
  cursor: Scalars['String'];
  /** The item at the end of StringEdge. */
  node: Scalars['String'];
};

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 *
 */
type TokenizedPaymentInputV3 = {
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String'];
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: InputMaybe<Scalars['String']>;
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInput;
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String'];
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>;
  /** The type of payment token. */
  type: PaymentTokenType;
};

/** An object representing exchange of money for a product or service. */
type Transaction = {
  __typename?: 'Transaction';
  /** The amount of money that the transaction was for. */
  amount: MoneyV2;
  /**
   * The amount of money that the transaction was for.
   * @deprecated Use `amount` instead.
   */
  amountV2: MoneyV2;
  /** The kind of the transaction. */
  kind: TransactionKind;
  /**
   * The status of the transaction.
   * @deprecated Use `statusV2` instead.
   */
  status: TransactionStatus;
  /** The status of the transaction. */
  statusV2?: Maybe<TransactionStatus>;
  /** Whether the transaction was done in test mode or not. */
  test: Scalars['Boolean'];
};

/** The different kinds of order transactions. */
enum TransactionKind {
  /**
   * An amount reserved against the cardholder's funding source.
   * Money does not change hands until the authorization is captured.
   *
   */
  AUTHORIZATION = 'AUTHORIZATION',
  /** A transfer of the money that was reserved during the authorization stage. */
  CAPTURE = 'CAPTURE',
  /** Money returned to the customer when they have paid too much. */
  CHANGE = 'CHANGE',
  /** An authorization for a payment taken with an EMV credit card reader. */
  EMV_AUTHORIZATION = 'EMV_AUTHORIZATION',
  /** An authorization and capture performed together in a single step. */
  SALE = 'SALE'
}

/** Transaction statuses describe the status of a transaction. */
enum TransactionStatus {
  /** There was an error while processing the transaction. */
  ERROR = 'ERROR',
  /** The transaction failed. */
  FAILURE = 'FAILURE',
  /** The transaction is pending. */
  PENDING = 'PENDING',
  /** The transaction succeeded. */
  SUCCESS = 'SUCCESS'
}

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
  quantityValue: Scalars['Float'];
  /** The reference unit for the unit price measurement. */
  referenceUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>;
  /** The reference value for the unit price measurement. */
  referenceValue: Scalars['Int'];
};

/** The accepted types of unit of measurement. */
enum UnitPriceMeasurementMeasuredType {
  /** Unit of measurements representing areas. */
  AREA = 'AREA',
  /** Unit of measurements representing lengths. */
  LENGTH = 'LENGTH',
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
  /** Metric system unit of weight. */
  G = 'G',
  /** 1 kilogram equals 1000 grams. */
  KG = 'KG',
  /** Metric system unit of volume. */
  L = 'L',
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
  MM = 'MM'
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
  id: Scalars['ID'];
  /** The old path to be redirected from. When the user visits this path, they'll be redirected to the target location. */
  path: Scalars['String'];
  /** The target location where the user will be redirected to. */
  target: Scalars['String'];
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
  cursor: Scalars['String'];
  /** The item at the end of UrlRedirectEdge. */
  node: UrlRedirect;
};

/** Represents an error in the input of a mutation. */
type UserError = DisplayableError & {
  __typename?: 'UserError';
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A filter used to view a subset of products in a collection matching a specific variant option. */
type VariantOptionFilter = {
  /** The name of the variant option to filter on. */
  name: Scalars['String'];
  /** The value of the variant option to filter on. */
  value: Scalars['String'];
};

/** Represents a Shopify hosted video. */
type Video = Media & Node & {
  __typename?: 'Video';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<Image>;
  /** The sources for a video. */
  sources: Array<VideoSource>;
};

/** Represents a source for a Shopify hosted video. */
type VideoSource = {
  __typename?: 'VideoSource';
  /** The format of the video source. */
  format: Scalars['String'];
  /** The height of the video. */
  height: Scalars['Int'];
  /** The video MIME type. */
  mimeType: Scalars['String'];
  /** The URL of the video. */
  url: Scalars['String'];
  /** The width of the video. */
  width: Scalars['Int'];
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
  cartId: Scalars['ID'];
}>;


type CartQuery = { __typename?: 'QueryRoot', cart?: { __typename?: 'Cart', id: string, createdAt: any, updatedAt: any, checkoutUrl: any, totalQuantity: number, buyerIdentity: { __typename?: 'CartBuyerIdentity', customer?: { __typename?: 'Customer', firstName?: string, lastName?: string } }, cost: { __typename?: 'CartCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, lines: { __typename?: 'CartLineConnection', edges: Array<{ __typename?: 'CartLineEdge', node: { __typename?: 'CartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, merchandise: { __typename?: 'ProductVariant', id: string, title: string, priceV2: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, product: { __typename?: 'Product', id: string, title: string } } } }> }, estimatedCost: { __typename?: 'CartEstimatedCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalTaxAmount?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalDutyAmount?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } } };

type createCartMutationVariables = Exact<{
  cartInput?: InputMaybe<CartInput>;
}>;


type createCartMutation = { __typename?: 'Mutation', cartCreate?: { __typename?: 'CartCreatePayload', cart?: { __typename?: 'Cart', id: string, createdAt: any, updatedAt: any, checkoutUrl: any, totalQuantity: number, buyerIdentity: { __typename?: 'CartBuyerIdentity', customer?: { __typename?: 'Customer', firstName?: string, lastName?: string } }, cost: { __typename?: 'CartCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, lines: { __typename?: 'CartLineConnection', edges: Array<{ __typename?: 'CartLineEdge', node: { __typename?: 'CartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, merchandise: { __typename?: 'ProductVariant', id: string, title: string, priceV2: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, product: { __typename?: 'Product', id: string, title: string } } } }> }, estimatedCost: { __typename?: 'CartEstimatedCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalTaxAmount?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalDutyAmount?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } } } };

type addItemToCartMutationVariables = Exact<{
  cartId: Scalars['ID'];
  lines: Array<CartLineInput> | CartLineInput;
}>;


type addItemToCartMutation = { __typename?: 'Mutation', cartLinesAdd?: { __typename?: 'CartLinesAddPayload', cart?: { __typename?: 'Cart', id: string, createdAt: any, updatedAt: any, checkoutUrl: any, totalQuantity: number, buyerIdentity: { __typename?: 'CartBuyerIdentity', customer?: { __typename?: 'Customer', firstName?: string, lastName?: string } }, cost: { __typename?: 'CartCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, lines: { __typename?: 'CartLineConnection', edges: Array<{ __typename?: 'CartLineEdge', node: { __typename?: 'CartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, merchandise: { __typename?: 'ProductVariant', id: string, title: string, priceV2: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, product: { __typename?: 'Product', id: string, title: string } } } }> }, estimatedCost: { __typename?: 'CartEstimatedCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalTaxAmount?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalDutyAmount?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } } } };

type removeItemFromCartMutationVariables = Exact<{
  cartId: Scalars['ID'];
  lineIds: Array<Scalars['ID']> | Scalars['ID'];
}>;


type removeItemFromCartMutation = { __typename?: 'Mutation', cartLinesRemove?: { __typename?: 'CartLinesRemovePayload', cart?: { __typename?: 'Cart', id: string, createdAt: any, updatedAt: any, checkoutUrl: any, totalQuantity: number, buyerIdentity: { __typename?: 'CartBuyerIdentity', customer?: { __typename?: 'Customer', firstName?: string, lastName?: string } }, cost: { __typename?: 'CartCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, lines: { __typename?: 'CartLineConnection', edges: Array<{ __typename?: 'CartLineEdge', node: { __typename?: 'CartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, merchandise: { __typename?: 'ProductVariant', id: string, title: string, priceV2: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, product: { __typename?: 'Product', id: string, title: string } } } }> }, estimatedCost: { __typename?: 'CartEstimatedCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalTaxAmount?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalDutyAmount?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } } } };

type customerCreateMutationVariables = Exact<{
  input: CustomerCreateInput;
}>;


type customerCreateMutation = { __typename?: 'Mutation', customerCreate?: { __typename?: 'CustomerCreatePayload', customer?: { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, firstName?: string, lastName?: string, email?: string, addresses: { __typename?: 'MailingAddressConnection', edges: Array<{ __typename?: 'MailingAddressEdge', node: { __typename?: 'MailingAddress', id: string, address1?: string, lastName?: string, name?: string, phone?: string, province?: string, provinceCode?: string, zip?: string, address2?: string, company?: string, country?: string, countryCodeV2?: CountryCode, firstName?: string, formatted: Array<string>, formattedArea?: string } }> }, orders: { __typename?: 'OrderConnection', edges: Array<{ __typename?: 'OrderEdge', node: { __typename?: 'Order', id: string, fulfillmentStatus: OrderFulfillmentStatus, lineItems: { __typename?: 'OrderLineItemConnection', edges: Array<{ __typename?: 'OrderLineItemEdge', node: { __typename?: 'OrderLineItem', quantity: number, title: string, variant?: { __typename?: 'ProductVariant', title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } } }> } } }> } }, customerUserErrors: Array<{ __typename?: 'CustomerUserError', code?: CustomerErrorCode, field?: Array<string>, message: string }> } };

type customerAccessTokenCreateMutationVariables = Exact<{
  input: CustomerAccessTokenCreateInput;
}>;


type customerAccessTokenCreateMutation = { __typename?: 'Mutation', customerAccessTokenCreate?: { __typename?: 'CustomerAccessTokenCreatePayload', customerAccessToken?: { __typename?: 'CustomerAccessToken', accessToken: string, expiresAt: any }, customerUserErrors: Array<{ __typename?: 'CustomerUserError', code?: CustomerErrorCode, field?: Array<string>, message: string }> } };

type CartFragment = { __typename?: 'Cart', id: string, createdAt: any, updatedAt: any, checkoutUrl: any, totalQuantity: number, buyerIdentity: { __typename?: 'CartBuyerIdentity', customer?: { __typename?: 'Customer', firstName?: string, lastName?: string } }, cost: { __typename?: 'CartCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, lines: { __typename?: 'CartLineConnection', edges: Array<{ __typename?: 'CartLineEdge', node: { __typename?: 'CartLine', id: string, quantity: number, cost: { __typename?: 'CartLineCost', subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } }, merchandise: { __typename?: 'ProductVariant', id: string, title: string, priceV2: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, product: { __typename?: 'Product', id: string, title: string } } } }> }, estimatedCost: { __typename?: 'CartEstimatedCost', totalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, subtotalAmount: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalTaxAmount?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode }, totalDutyAmount?: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } };

type CustomerFragment = { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, firstName?: string, lastName?: string, email?: string, addresses: { __typename?: 'MailingAddressConnection', edges: Array<{ __typename?: 'MailingAddressEdge', node: { __typename?: 'MailingAddress', id: string, address1?: string, lastName?: string, name?: string, phone?: string, province?: string, provinceCode?: string, zip?: string, address2?: string, company?: string, country?: string, countryCodeV2?: CountryCode, firstName?: string, formatted: Array<string>, formattedArea?: string } }> }, orders: { __typename?: 'OrderConnection', edges: Array<{ __typename?: 'OrderEdge', node: { __typename?: 'Order', id: string, fulfillmentStatus: OrderFulfillmentStatus, lineItems: { __typename?: 'OrderLineItemConnection', edges: Array<{ __typename?: 'OrderLineItemEdge', node: { __typename?: 'OrderLineItem', quantity: number, title: string, variant?: { __typename?: 'ProductVariant', title: string, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } } }> } } }> } };

type CustomerLightFragment = { __typename?: 'Customer', id: string, createdAt: any, updatedAt: any, firstName?: string, lastName?: string, email?: string };

type ShopifyProductFragment = { __typename?: 'Product', id: string, handle: string, title: string, variants: { __typename?: 'ProductVariantConnection', edges: Array<{ __typename?: 'ProductVariantEdge', node: { __typename?: 'ProductVariant', id: string, title: string, weight?: number, availableForSale: boolean, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } }> } };

type AllShopifyProductsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
}>;


type AllShopifyProductsQuery = { __typename?: 'QueryRoot', products: { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', node: { __typename?: 'Product', id: string, handle: string, title: string, variants: { __typename?: 'ProductVariantConnection', edges: Array<{ __typename?: 'ProductVariantEdge', node: { __typename?: 'ProductVariant', id: string, title: string, weight?: number, availableForSale: boolean, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } }> } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } };

type ShopifyProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


type ShopifyProductQuery = { __typename?: 'QueryRoot', product?: { __typename?: 'Product', id: string, handle: string, title: string, variants: { __typename?: 'ProductVariantConnection', edges: Array<{ __typename?: 'ProductVariantEdge', node: { __typename?: 'ProductVariant', id: string, title: string, weight?: number, availableForSale: boolean, price: { __typename?: 'MoneyV2', amount: any, currencyCode: CurrencyCode } } }> } } };
