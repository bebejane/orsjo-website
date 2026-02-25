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
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  Guid: { input: any; output: any; }
  Long: { input: any; output: any; }
};

type AddressInputType = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  careOf?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  entryCode?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

type AddressType = {
  __typename?: 'AddressType';
  /** The first line of the address. */
  addressLine1: Scalars['String']['output'];
  /** The second line of the address. */
  addressLine2: Scalars['String']['output'];
  /** The third line of the address. */
  addressLine3: Scalars['String']['output'];
  /** The care of (c/o) name for the address. */
  careOf: Scalars['String']['output'];
  /** The city of the address. */
  city: Scalars['String']['output'];
  /** The company name associated with the address. */
  company: Scalars['String']['output'];
  /** The country of the address. Can be either a valid english country name or ISO code */
  country: Scalars['String']['output'];
  /** The entry code for the address. */
  entryCode: Scalars['String']['output'];
  /** The first name of the address holder. */
  firstName: Scalars['String']['output'];
  /** The last name of the address holder. */
  lastName: Scalars['String']['output'];
  /** The mobile phone number associated with the address. */
  mobile: Scalars['String']['output'];
  /** The phone number associated with the address. */
  phone: Scalars['String']['output'];
  /** The state of the address. */
  state: Scalars['String']['output'];
  /** The zip code of the address. */
  zip: Scalars['String']['output'];
};

/** Type containing information about alternative urls to an entity */
type AlternativeUrlType = {
  __typename?: 'AlternativeUrlType';
  /** The id of the channel that the alternative url exists on */
  channelId: Scalars['String']['output'];
  /** The country code of the alternative url */
  country?: Maybe<Scalars['String']['output']>;
  /** The culture of the alternative url */
  culture: Scalars['String']['output'];
  /** The language code of the alternative url */
  language: Scalars['String']['output'];
  /** Alternative url */
  url: Scalars['String']['output'];
};

/** Type containing account balance information */
type BalanceType = {
  __typename?: 'BalanceType';
  /** The amount that will be used for this order */
  pending: Scalars['Decimal']['output'];
  /** Pending balance, formatted as a currency string */
  pendingFormatted?: Maybe<Scalars['String']['output']>;
  /** The remaining account balance */
  remaining: Scalars['Decimal']['output'];
  /** Remaining account balance, formatted as a currency string */
  remainingFormatted?: Maybe<Scalars['String']['output']>;
  /** The cart total selling price excl. VAT if balance hadn't been withdrawn. */
  totalSellingPriceExBalanceExVat: Scalars['Decimal']['output'];
  /** Cart total excl. VAT, excl. balance, formatted as a currency string */
  totalSellingPriceExBalanceExVatFormatted?: Maybe<Scalars['String']['output']>;
  /** The cart total selling price incl. VAT if balance hadn't been withdrawn . */
  totalSellingPriceExBalanceIncVat: Scalars['Decimal']['output'];
  /** Cart total incl. VAT, excl. balance, formatted as a currency string */
  totalSellingPriceExBalanceIncVatFormatted?: Maybe<Scalars['String']['output']>;
};

/** Type containing brand listing information */
type BrandListType = {
  __typename?: 'BrandListType';
  /** Brand alias */
  alias?: Maybe<Scalars['String']['output']>;
  /**
   * Alternative full paths to the brand
   * @deprecated Use AlternativeUrls instead.
   */
  alternativeCanonicalUrls?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Alternative urls to the brand */
  alternativeUrls?: Maybe<Array<Maybe<AlternativeUrlType>>>;
  /** Background image */
  backgroundImage?: Maybe<Scalars['String']['output']>;
  /** Brand ID */
  brandId: Scalars['Int']['output'];
  /** The full path for this brand. e.g. '/l/brand-1' */
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** Brand description */
  description?: Maybe<Scalars['String']['output']>;
  /** Brand logo */
  logo?: Maybe<Scalars['String']['output']>;
  /** Brand name */
  name?: Maybe<Scalars['String']['output']>;
  /** Primary image */
  primaryImage?: Maybe<Scalars['String']['output']>;
  /** Secondary description */
  secondaryDescription?: Maybe<Scalars['String']['output']>;
};

/** Type containing brand information */
type BrandType = {
  __typename?: 'BrandType';
  /** Brand alias */
  alias?: Maybe<Scalars['String']['output']>;
  /**
   * Alternative full paths to the brand
   * @deprecated Use AlternativeUrls instead.
   */
  alternativeCanonicalUrls?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Alternative urls to the brand */
  alternativeUrls?: Maybe<Array<Maybe<AlternativeUrlType>>>;
  /** Brand ID */
  brandId: Scalars['Int']['output'];
  /** The full path for this brand. e.g. '/l/brand-1' */
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** Brand description */
  description?: Maybe<Scalars['String']['output']>;
  /** Brand name */
  name?: Maybe<Scalars['String']['output']>;
};

/** Type containing breadcrumb information */
type BreadcrumbType = {
  __typename?: 'BreadcrumbType';
  /** Category ID */
  categoryId: Scalars['Int']['output'];
  /** Breadcrumb display name */
  name: Scalars['String']['output'];
  /** Parent category ID */
  parentCategoryId: Scalars['Int']['output'];
  /** Breadcrumb path */
  url?: Maybe<Scalars['String']['output']>;
};

/** Type containing campaign price information */
type CampaignPriceType = {
  __typename?: 'CampaignPriceType';
  /** Campaign price discount */
  discount: Scalars['Decimal']['output'];
  /** Campaign price discount percentage */
  discountPercentage: Scalars['Decimal']['output'];
  /** Campaign price */
  price?: Maybe<PriceType>;
  /** Campaign price quantity */
  quantity: Scalars['Int']['output'];
};

/** Type containing campaign rule information */
type CampaignRuleType = {
  __typename?: 'CampaignRuleType';
  /** Campaign action */
  action?: Maybe<Scalars['String']['output']>;
  /** Campaign action value */
  actionValue?: Maybe<Scalars['String']['output']>;
  /** Campaign ID */
  campaignId: Scalars['String']['output'];
  /** The url to this campaign, if any */
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** Campaign category */
  category?: Maybe<Scalars['String']['output']>;
  /** Whether to hide the campaign title */
  hideTitle?: Maybe<Scalars['Boolean']['output']>;
  /** Campaign name */
  name?: Maybe<Scalars['String']['output']>;
  /** Campaign rule type */
  ruleType?: Maybe<Scalars['String']['output']>;
};

/** Type containing campaign information */
type CampaignType = {
  __typename?: 'CampaignType';
  /** Applied campaigns */
  appliedCampaigns?: Maybe<Array<Maybe<CampaignRuleType>>>;
  /** Campaign prices */
  prices?: Maybe<Array<Maybe<CampaignPriceType>>>;
};

/** Type containing information about cart fees */
type CartFeesType = {
  __typename?: 'CartFeesType';
  /** Payment fee excl. VAT */
  paymentFeeExVat: Scalars['Decimal']['output'];
  /** Payment fee incl. VAT */
  paymentFeeIncVat: Scalars['Decimal']['output'];
  /** Shipping fee excl. VAT */
  shippingFeeExVat: Scalars['Decimal']['output'];
  /** Shipping fee incl. VAT */
  shippingFeeIncVat: Scalars['Decimal']['output'];
};

type CartGroupInputType = {
  groupKey?: InputMaybe<Scalars['ID']['input']>;
  quantity: Scalars['Int']['input'];
};

type CartItemInputType = {
  groupKey?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  skuId?: InputMaybe<Scalars['Int']['input']>;
};

/** Type containing cart item information */
type CartItemType = {
  __typename?: 'CartItemType';
  /** Campaign */
  campaign?: Maybe<CampaignType>;
  /** The key of the group that this cart item belong to */
  groupKey?: Maybe<Scalars['ID']['output']>;
  /** Cart item Id */
  id: Scalars['ID']['output'];
  /** Indicates if the cart item is a free gift from a campaign */
  isCampaignFreeGift: Scalars['Boolean']['output'];
  /** Custom message */
  message?: Maybe<Scalars['String']['output']>;
  /** Product */
  product?: Maybe<ProductType>;
  /** Contains package meta data if the cart item was part of package */
  productPackage?: Maybe<ProductPackageCartItemType>;
  /** Quantity */
  quantity: Scalars['Int']['output'];
  /** SKU Id */
  skuId: Scalars['Int']['output'];
  /** Total price */
  totalPrice?: Maybe<PriceType>;
  /** Price per unit */
  unitPrice?: Maybe<PriceType>;
};

/** Type containing cart summary information */
type CartSummaryType = {
  __typename?: 'CartSummaryType';
  /** Account balance information */
  balance?: Maybe<BalanceType>;
  /** Cart fee information */
  fees?: Maybe<CartFeesType>;
  /** Cart fixed discount amount excl. VAT */
  fixedAmountDiscountExVat: Scalars['Decimal']['output'];
  /** Cart fixed discount amount incl. VAT */
  fixedAmountDiscountIncVat: Scalars['Decimal']['output'];
  /** Cart payment option information */
  payment?: Maybe<PaymentOptionType>;
  /** Cart shipping option information */
  shipping?: Maybe<ShippingOptionType>;
  /** Cart sub-total */
  subTotal?: Maybe<PriceType>;
  /** Cart total */
  total?: Maybe<PriceType>;
  /** Cart VAT information */
  vats?: Maybe<Array<Maybe<VatGroupType>>>;
};

/** Type containing cart information */
type CartType = {
  __typename?: 'CartType';
  /** Campaigns applied to this cart */
  appliedCampaigns?: Maybe<Array<Maybe<CampaignRuleType>>>;
  /** Cart fixed discount */
  fixedDiscount: Scalars['Decimal']['output'];
  /** Whether the cart has free shipping */
  freeShipping: Scalars['Boolean']['output'];
  /** The cart ID */
  id?: Maybe<Scalars['String']['output']>;
  /** If true, the cart can not be modified further */
  isCompleted: Scalars['Boolean']['output'];
  /** The cart items */
  items?: Maybe<Array<Maybe<CartItemType>>>;
  /** Cart merchant data */
  merchantData?: Maybe<Scalars['String']['output']>;
  /** Cart promo code */
  promoCode?: Maybe<Scalars['String']['output']>;
  /** The cart summary */
  summary?: Maybe<CartSummaryType>;
};

/** Type containing category information */
type CategoryType = {
  __typename?: 'CategoryType';
  /** Category alias */
  alias?: Maybe<Scalars['String']['output']>;
  /**
   * Alternative full paths to the category
   * @deprecated Use AlternativeUrls instead.
   */
  alternativeCanonicalUrls?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Alternative urls to the category */
  alternativeUrls?: Maybe<Array<Maybe<AlternativeUrlType>>>;
  /** Background image */
  backgroundImage?: Maybe<Scalars['String']['output']>;
  /** The full path to the category. e.g. '/l/category-1' */
  canonicalUrl: Scalars['String']['output'];
  /** Category ID */
  categoryId: Scalars['Int']['output'];
  /** Category description */
  description?: Maybe<Scalars['String']['output']>;
  /** Google taxonomy data for this category */
  googleTaxonomy?: Maybe<GoogleTaxonomyType>;
  /** Category is hidden */
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  /** Category name */
  name: Scalars['String']['output'];
  /** Category display order */
  order: Scalars['Int']['output'];
  /** Parent category ID */
  parentCategoryId: Scalars['Int']['output'];
  /** Primary image */
  primaryImage?: Maybe<Scalars['String']['output']>;
  /** Category secondary description */
  secondaryDescription?: Maybe<Scalars['String']['output']>;
};

/** Type containing all information about the channel-type */
type ChannelType = {
  __typename?: 'ChannelType';
  /** Default language ID used if no other is specified, or an invalid is supplied. */
  defaultLanguageId: Scalars['String']['output'];
  /** Default market ID used if no other is specified, or an invalid is supplied. */
  defaultMarketId: Scalars['String']['output'];
  /** ID */
  id: Scalars['String']['output'];
  languages?: Maybe<Array<Maybe<LanguageType>>>;
  markets?: Maybe<Array<Maybe<MarketType>>>;
  /** Name */
  name: Scalars['String']['output'];
  /** Type */
  type: Scalars['String']['output'];
  /** Base URL */
  url: Scalars['String']['output'];
};

type CheckoutAndOrderType = {
  __typename?: 'CheckoutAndOrderType';
  /** HTML-snippet */
  htmlSnippet: Scalars['String']['output'];
  /** Order details */
  order?: Maybe<CheckoutOrderType>;
};

type CheckoutDataType = {
  __typename?: 'CheckoutDataType';
  /** The order details represented as a cart object. */
  cart?: Maybe<CartType>;
  /** Indicates if the purchase has been completed. This may not be available for all payment types */
  completed?: Maybe<Scalars['Boolean']['output']>;
  /** HTML-snippet */
  htmlSnippet?: Maybe<Scalars['String']['output']>;
  /** True if this is a new checkout session */
  newCheckoutSession: Scalars['Boolean']['output'];
  /** The total number of purchases that the customer has done including this one */
  nthPurchase: Scalars['Int']['output'];
  /** Order details */
  order?: Maybe<CheckoutOrderType>;
};

type CheckoutInputType = {
  /** The consents accepted by the customer. */
  acceptedConsents?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The billing address for the order. */
  billingAddress?: InputMaybe<AddressInputType>;
  /** The URLs for the checkout process. These are optional and if not supplied, default values configured in the respective integration to the payment provider will be used. Placeholders that can be used in the URLs: {geins.cartid} - the cart id, {payment.uid} - the unique payment identifier (external order id). Note that some payment providers do not support this and others only accept https. */
  checkoutUrls?: InputMaybe<CheckoutUrlsInputType>;
  /** The type of customer. */
  customerType?: InputMaybe<CustomerType>;
  /** The desired delivery date for the order. */
  desiredDeliveryDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The email address of the customer. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The external shipping fee for the order. */
  externalShippingFee?: InputMaybe<Scalars['Decimal']['input']>;
  /** The external ID of the shipping method. */
  externalShippingId?: InputMaybe<Scalars['String']['input']>;
  /** The identity number of the customer. */
  identityNumber?: InputMaybe<Scalars['String']['input']>;
  /** Additional data from the merchant. */
  merchantData?: InputMaybe<Scalars['String']['input']>;
  /** A message from the customer. */
  message?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the payment method. */
  paymentId?: InputMaybe<Scalars['Int']['input']>;
  /** The pickup point for the order. */
  pickupPoint?: InputMaybe<Scalars['String']['input']>;
  /** The shipping address for the order. */
  shippingAddress?: InputMaybe<AddressInputType>;
  /** The ID of the shipping method. */
  shippingId?: InputMaybe<Scalars['Int']['input']>;
  /** When set to true, the submitted ShippingId will be set on the order regardless of it being available in the list of shipping options. */
  skipShippingValidation?: InputMaybe<Scalars['Boolean']['input']>;
};

type CheckoutOrderRowType = {
  __typename?: 'CheckoutOrderRowType';
  /** Article number */
  articleNumber?: Maybe<Scalars['String']['output']>;
  /** Brand name */
  brand?: Maybe<Scalars['String']['output']>;
  /** Campaign IDs */
  campaignIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Campaign names */
  campaignNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Categories */
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Currency ISO code */
  currency?: Maybe<Scalars['String']['output']>;
  /** Discount excl. VAT */
  discountExVat: Scalars['Decimal']['output'];
  /** Discount incl. VAT */
  discountIncVat: Scalars['Decimal']['output'];
  /** Discount rate */
  discountRate: Scalars['Float']['output'];
  /** ExternalId */
  externalId?: Maybe<Scalars['String']['output']>;
  /** GTIN */
  gtin?: Maybe<Scalars['String']['output']>;
  /** Height */
  height: Scalars['Int']['output'];
  /** Product image URL */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Length */
  length: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Price excl. VAT */
  priceExVat: Scalars['Decimal']['output'];
  /** Price incl. VAT */
  priceIncVat: Scalars['Decimal']['output'];
  /** ProductId */
  productId: Scalars['Int']['output'];
  /** ProductPriceCampaignId */
  productPriceCampaignId?: Maybe<Scalars['Int']['output']>;
  /** Product price list ID */
  productPriceListId?: Maybe<Scalars['Int']['output']>;
  /** ProductUrl */
  productUrl?: Maybe<Scalars['String']['output']>;
  /** Quantity */
  quantity: Scalars['Int']['output'];
  /** SKU */
  sku?: Maybe<Scalars['String']['output']>;
  /** Variant */
  variant?: Maybe<Scalars['String']['output']>;
  /** Weight */
  weight: Scalars['Int']['output'];
  /** Width */
  width: Scalars['Int']['output'];
};

type CheckoutOrderType = {
  __typename?: 'CheckoutOrderType';
  /**
   * Address Line 1
   * @deprecated Use Billing Address instead
   */
  address1?: Maybe<Scalars['String']['output']>;
  /**
   * Address Line 2
   * @deprecated Use Billing Address instead
   */
  address2?: Maybe<Scalars['String']['output']>;
  /** Amount used from Balance */
  balance: Scalars['Decimal']['output'];
  /** Billing address */
  billingAddress?: Maybe<AddressType>;
  /** Campaign IDs */
  campaignIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Campaign names */
  campaignNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * City
   * @deprecated Use Billing Address instead
   */
  city?: Maybe<Scalars['String']['output']>;
  /**
   * Company
   * @deprecated Use Billing Address instead
   */
  company?: Maybe<Scalars['String']['output']>;
  /**
   * Country
   * @deprecated Use Billing Address instead
   */
  country?: Maybe<Scalars['String']['output']>;
  /** Currency */
  currency?: Maybe<Scalars['String']['output']>;
  /** CustomerGroup ID */
  customerGroupId: Scalars['Int']['output'];
  /** Customer ID */
  customerId: Scalars['Int']['output'];
  /** Customer Type ID */
  customerTypeId: Scalars['Int']['output'];
  /** Desired Delivery Date */
  desiredDeliveryDate?: Maybe<Scalars['DateTime']['output']>;
  /** Discount excl. VAT */
  discountExVat: Scalars['Decimal']['output'];
  /** Discount incl. VAT */
  discountIncVat: Scalars['Decimal']['output'];
  /**
   * E-mail
   * @deprecated Use Billing Address instead
   */
  email?: Maybe<Scalars['String']['output']>;
  /** External Order ID */
  externalOrderId?: Maybe<Scalars['String']['output']>;
  /**
   * First name
   * @deprecated Use Billing Address instead
   */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Gender */
  gender: GenderType;
  /** IP Address */
  ipAddress?: Maybe<Scalars['String']['output']>;
  /** Represents the total sum of the prices for all order rows, excluding VAT */
  itemValueExVat: Scalars['Decimal']['output'];
  /** Represents the total sum of the prices for all order rows */
  itemValueIncVat: Scalars['Decimal']['output'];
  /** Locale */
  languageId?: Maybe<Scalars['String']['output']>;
  /**
   * Last name
   * @deprecated Use Billing Address instead
   */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Market ID. */
  marketId: Scalars['String']['output'];
  /** Order message */
  message?: Maybe<Scalars['String']['output']>;
  /** Meta Data */
  metaData?: Maybe<Scalars['String']['output']>;
  /** Order ID */
  orderId?: Maybe<Scalars['String']['output']>;
  /** Order value excluding VAT (item value + fees - balance) */
  orderValueExVat: Scalars['Decimal']['output'];
  /** Order value including VAT (item value + fees - balance) */
  orderValueIncVat: Scalars['Decimal']['output'];
  /** Organization Number */
  organizationNumber?: Maybe<Scalars['String']['output']>;
  /** Payment fee excl. VAT */
  paymentFeeExVat: Scalars['Decimal']['output'];
  /** Payment fee incl. VAT */
  paymentFeeIncVat: Scalars['Decimal']['output'];
  /** Payment ID */
  paymentId: Scalars['Int']['output'];
  /** Personal ID */
  personalId?: Maybe<Scalars['String']['output']>;
  /**
   * Phone number
   * @deprecated Use Billing Address instead
   */
  phone?: Maybe<Scalars['String']['output']>;
  /** Pickup Point */
  pickupPoint?: Maybe<Scalars['String']['output']>;
  /** Promo Code */
  promoCode?: Maybe<Scalars['String']['output']>;
  /** Order rows */
  rows?: Maybe<Array<Maybe<CheckoutOrderRowType>>>;
  /**
   * Secondary transaction ID
   * @deprecated Not used any more
   */
  secondaryTransactionId?: Maybe<Scalars['String']['output']>;
  /** Shipping address */
  shippingAddress?: Maybe<AddressType>;
  /** Shipping fee excl. VAT */
  shippingFeeExVat: Scalars['Decimal']['output'];
  /** Shipping fee incl. VAT */
  shippingFeeIncVat: Scalars['Decimal']['output'];
  /** Shipping ID */
  shippingId: Scalars['Int']['output'];
  /** Order Status */
  status?: Maybe<Scalars['String']['output']>;
  /** Order sum. Amount to pay. */
  sum: Scalars['Decimal']['output'];
  /** Payment Provider Transaction ID */
  transactionId?: Maybe<Scalars['String']['output']>;
  /** User Agent */
  userAgent?: Maybe<Scalars['String']['output']>;
  /**
   * Zip code
   * @deprecated Use Billing Address instead
   */
  zip?: Maybe<Scalars['String']['output']>;
};

enum CheckoutStatus {
  CUSTOMER_BLACKLISTED = 'CUSTOMER_BLACKLISTED',
  OK = 'OK'
}

type CheckoutType = {
  __typename?: 'CheckoutType';
  billingAddress?: Maybe<AddressType>;
  cart?: Maybe<CartType>;
  checkoutStatus?: Maybe<CheckoutStatus>;
  /** @deprecated The consent module is not supported any more. */
  consents?: Maybe<Array<Maybe<ConsentType>>>;
  email?: Maybe<Scalars['String']['output']>;
  identityNumber?: Maybe<Scalars['String']['output']>;
  paymentOptions?: Maybe<Array<Maybe<PaymentOptionType>>>;
  shippingAddress?: Maybe<AddressType>;
  shippingData?: Maybe<Scalars['String']['output']>;
  shippingOptions?: Maybe<Array<Maybe<ShippingOptionType>>>;
};

type CheckoutUrlsInputType = {
  /** The absolute URL to the Checkout page. */
  checkoutPageUrl?: InputMaybe<Scalars['String']['input']>;
  /** The absolute redirect URL. This is usually the URL to which the payment provider redirects after a successful payment. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** The absolute URL to the Terms page. */
  termsPageUrl?: InputMaybe<Scalars['String']['input']>;
};

type ConsentType = {
  __typename?: 'ConsentType';
  autoAccept: Scalars['Boolean']['output'];
  checked: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** Type containing all information about the country-type */
type CountryType = {
  __typename?: 'CountryType';
  /** Two-letter ISO code */
  code: Scalars['String']['output'];
  /** Name */
  name: Scalars['String']['output'];
};

/** Type containing all information about the currency-type */
type CurrencyType = {
  __typename?: 'CurrencyType';
  /** Currency code */
  code: Scalars['String']['output'];
  /** Name */
  name: Scalars['String']['output'];
  /** Currency rate used to convert from this currency to default currency */
  rate: Scalars['Decimal']['output'];
  /** Currency symbol */
  symbol: Scalars['String']['output'];
};

/** Customer type */
enum CustomerType {
  /** Organization */
  ORGANIZATION = 'ORGANIZATION',
  /** Private person */
  PERSON = 'PERSON'
}

/** SKU dimensions */
type DimensionsType = {
  __typename?: 'DimensionsType';
  /** Height */
  height: Scalars['Int']['output'];
  /** Length */
  length: Scalars['Int']['output'];
  /** Width */
  width: Scalars['Int']['output'];
};

enum DiscountType {
  EXTERNAL = 'EXTERNAL',
  NONE = 'NONE',
  PRICE_CAMPAIGN = 'PRICE_CAMPAIGN',
  SALE_PRICE = 'SALE_PRICE'
}

/** Type containing collection of filters */
type FilterCollectionType = {
  __typename?: 'FilterCollectionType';
  /** The collection of facet values returned from the query */
  facets?: Maybe<Array<Maybe<FilterType>>>;
  /** The lowest / highest price found in the results */
  price?: Maybe<PriceFilterType>;
};

/** Filter options */
type FilterInputType = {
  /** A list of article numbers to filter on. The maximum number of values is 600. If Product IDs filter is present, it takes priority and the article number filter will not be applied. When the article number filter is set, no other filters will be applied. The result is sorted in the exact same way as the input list regardless of what sort method has been set. */
  articleNumbers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of brand IDs to filter on. When set, all matching brands will be added to the include filter. */
  brandIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A list of category IDs to filter on. When set, all matching categories will be added to the include filter. */
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A list of discount campaign IDs to filter on. When set, all matching campaigns will be added to the include filter. */
  discountCampaignIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A list of string values, that when specified will exclude products that are associated with one of those values */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of brand IDs to filter on. When set, all matching brands will be added to the exclude filter. */
  excludeBrandIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A list of category IDs to filter on. When set, all matching categories will be added to the exclude filter. */
  excludeCategoryIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A list of discount campaign IDs to filter on. When set, all matching campaigns will be added to the exclude filter. */
  excludeDiscountCampaignIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A list of string values, that when specified will exclude products that are associated with one of the facets */
  excludeFacets?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of string values, that when specified will only include products associated with those values */
  facets?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter mode */
  filterMode?: InputMaybe<FilterMode>;
  /** A list of string values, that when specified will only include products associated with those values */
  include?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Include collapsed products */
  includeCollapsed?: InputMaybe<Scalars['Boolean']['input']>;
  /** A value to control how values in the Include-field are combined logically. */
  includeMode?: InputMaybe<IncludeMode>;
  /** Price filter */
  price?: InputMaybe<PriceFilterInputType>;
  /** Limits products to only those found in the price list with the specified identifier. */
  priceListIdentifier?: InputMaybe<Scalars['String']['input']>;
  /** A list of product IDs to filter on. The maximum number of values is 600. When the product IDs filter is set, no other filters will be applied. The result is sorted in the exact same way as the input list regardless of what sort method has been set. */
  productIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Search text to filter by */
  searchText?: InputMaybe<Scalars['String']['input']>;
  /** Use this to sort the results in a particular way */
  sort?: InputMaybe<SortType>;
};

/** Filter mode */
enum FilterMode {
  /** Get the counts for the results, including the ones excluded by the groups */
  BY_GROUP = 'BY_GROUP',
  /** Get the counts for the current filter results */
  CURRENT = 'CURRENT'
}

/** Filter group */
type FilterType = {
  __typename?: 'FilterType';
  /** ID for this filter type */
  filterId: Scalars['String']['output'];
  /** Parameter group name */
  group?: Maybe<Scalars['String']['output']>;
  /** Parameter group display name */
  label?: Maybe<Scalars['String']['output']>;
  /** The display order of this filter group. Only supported for type Parameter */
  order: Scalars['Int']['output'];
  /** Filter type. e.g. 'Parameter', 'Category', 'Sku' */
  type?: Maybe<Scalars['String']['output']>;
  /** Collection of facet values in this group */
  values?: Maybe<Array<Maybe<FilterValueType>>>;
};

/** Filter value */
type FilterValueType = {
  __typename?: 'FilterValueType';
  /** FacetId_Count */
  _id: Scalars['String']['output'];
  /** The amount of products in the results associated with this facet */
  count: Scalars['Long']['output'];
  /** Facet ID. Use this in the Facets-list in the products-query to retrieve products associated with it */
  facetId?: Maybe<Scalars['String']['output']>;
  /** If the filter for this facet is hidden */
  hidden: Scalars['Boolean']['output'];
  /** Facet display name */
  label?: Maybe<Scalars['String']['output']>;
  /** The display order of this facet */
  order: Scalars['Int']['output'];
  /** Parent ID. Only available for category-facets.0 */
  parentId?: Maybe<Scalars['String']['output']>;
  /** The path associated with this facet. e.g. '/c/category-1' */
  url?: Maybe<Scalars['String']['output']>;
};

type GeinsMerchantApiMutation = {
  __typename?: 'GeinsMerchantApiMutation';
  addPackageToCart?: Maybe<CartType>;
  addToCart?: Maybe<CartType>;
  /** Clears all items in the cart */
  clearCart?: Maybe<CartType>;
  /** Clones the cart */
  cloneCart?: Maybe<CartType>;
  commitReset?: Maybe<Scalars['Boolean']['output']>;
  /** Marks the cart as completed, and makes it read-only */
  completeCart?: Maybe<CartType>;
  createOrUpdateCheckout?: Maybe<CheckoutType>;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  monitorProductAvailability?: Maybe<Scalars['Boolean']['output']>;
  placeOrder?: Maybe<PlaceOrderResponseType>;
  postProductReview?: Maybe<Scalars['Boolean']['output']>;
  requestPasswordReset?: Maybe<Scalars['Boolean']['output']>;
  /** Set custom merchant data on the cart */
  setCartMerchantData?: Maybe<CartType>;
  /** Set a promo code on the cart */
  setCartPromoCode?: Maybe<CartType>;
  setCartShippingFee?: Maybe<CheckoutType>;
  subscribeToNewsletter?: Maybe<Scalars['Boolean']['output']>;
  /** Update the quantity of an entire cart group */
  updateCartGroup?: Maybe<CartType>;
  /** Update the cart item */
  updateCartItem?: Maybe<CartType>;
  updateUser?: Maybe<UserType>;
};


type GeinsMerchantApiMutationaddPackageToCartArgs = {
  allowExternalShippingFee?: InputMaybe<Scalars['Boolean']['input']>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  packageId: Scalars['Int']['input'];
  selections?: InputMaybe<Array<InputMaybe<ProductPackageSelectionType>>>;
};


type GeinsMerchantApiMutationaddToCartArgs = {
  allowExternalShippingFee?: InputMaybe<Scalars['Boolean']['input']>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  item: CartItemInputType;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiMutationclearCartArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiMutationcloneCartArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  resetPromotions?: InputMaybe<Scalars['Boolean']['input']>;
};


type GeinsMerchantApiMutationcommitResetArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  resetKey: Scalars['String']['input'];
};


type GeinsMerchantApiMutationcompleteCartArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiMutationcreateOrUpdateCheckoutArgs = {
  cartId: Scalars['String']['input'];
  channelId?: InputMaybe<Scalars['String']['input']>;
  checkout?: InputMaybe<CheckoutInputType>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiMutationdeleteUserArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiMutationmonitorProductAvailabilityArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  skuId: Scalars['Int']['input'];
};


type GeinsMerchantApiMutationplaceOrderArgs = {
  cartId: Scalars['String']['input'];
  channelId?: InputMaybe<Scalars['String']['input']>;
  checkout: CheckoutInputType;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiMutationpostProductReviewArgs = {
  alias: Scalars['String']['input'];
  author: Scalars['String']['input'];
  channelId?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};


type GeinsMerchantApiMutationrequestPasswordResetArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiMutationsetCartMerchantDataArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  merchantData: Scalars['String']['input'];
};


type GeinsMerchantApiMutationsetCartPromoCodeArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  promoCode: Scalars['String']['input'];
};


type GeinsMerchantApiMutationsetCartShippingFeeArgs = {
  cartId: Scalars['String']['input'];
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  shippingFee: Scalars['Decimal']['input'];
};


type GeinsMerchantApiMutationsubscribeToNewsletterArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


type GeinsMerchantApiMutationupdateCartGroupArgs = {
  allowExternalShippingFee?: InputMaybe<Scalars['Boolean']['input']>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  item: CartGroupInputType;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiMutationupdateCartItemArgs = {
  allowExternalShippingFee?: InputMaybe<Scalars['Boolean']['input']>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  item: CartItemInputType;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiMutationupdateUserArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  user: UserInputType;
};

type GeinsMerchantApiQuery = {
  __typename?: 'GeinsMerchantApiQuery';
  /** Get all brands. */
  brands?: Maybe<Array<Maybe<BrandListType>>>;
  /** Get all categories. */
  categories?: Maybe<Array<Maybe<CategoryType>>>;
  /** Gets a category with the specified ID. Use either alias or categoryId. If both are provided, categoryId will be used. */
  category?: Maybe<CategoryType>;
  /** Gets a channel with the specified ID. */
  channel?: Maybe<ChannelType>;
  /** Gets all available channels. */
  channels?: Maybe<Array<Maybe<ChannelType>>>;
  /** Gets checkout data with a html snippet, checkout order data for the specified order and the User. If the order was recently completed, the html snippet will contain the "Thank you"-content. */
  checkout?: Maybe<CheckoutDataType>;
  /** Gets all CMS pages. */
  cmsPages?: Maybe<Array<Maybe<PageWidgetPageType>>>;
  /** Get the cart */
  getCart?: Maybe<CartType>;
  /**
   * Gets html snippet for the specified external order. If the order was recently completed, the html snippet will contain the "Thank you"-content.
   * @deprecated Use Checkout instead
   */
  getCheckout?: Maybe<Scalars['String']['output']>;
  /**
   * Gets html snippet and checkout order data for the specified external order. If the order was recently completed, the html snippet will contain the "Thank you"-content.
   * @deprecated Use Checkout instead
   */
  getCheckoutAndOrder?: Maybe<CheckoutAndOrderType>;
  /** Get a menu */
  getMenuAtLocation?: Maybe<MenuType>;
  /** Get a specific order with details */
  getOrder?: Maybe<OrderType>;
  /** Get a specific order with details via public id */
  getOrderPublic?: Maybe<OrderType>;
  /** Get orders for the current user */
  getOrders?: Maybe<Array<Maybe<OrderType>>>;
  /** Get the current user */
  getUser?: Maybe<UserType>;
  /** Gets information about the specified list page. */
  listPageInfo?: Maybe<PageInfoType>;
  /** Gets a product with the specified ID. Use either alias or productId. If both are provided, productId will be used. */
  product?: Maybe<ProductType>;
  /** Gets all products according to the values provided. */
  products?: Maybe<ProductsResultType>;
  /** Gets related products for the specified alias. */
  relatedProducts?: Maybe<Array<Maybe<RelatedProductType>>>;
  /** Gets all products reviews to the values provided. */
  reviews?: Maybe<ProductReviewResultType>;
  /** Gets an alternate url for a given url. */
  urlHistory?: Maybe<UrlHistoryType>;
  /** Validates the conditions required for placing an order, including product stock availability, customer balance, payment method selection, shipping method selection, and customer eligibility to complete the purchase. */
  validateOrderConditions?: Maybe<ValidateOrderConditionsResponseType>;
  /** @deprecated Use ValidateOrderConditions instead */
  validateOrderCreation?: Maybe<ValidateOrderCreationResponseType>;
  /** Gets the page area and widgets from the specifed family. */
  widgetArea?: Maybe<PageWidgetCollectionType>;
};


type GeinsMerchantApiQuerybrandsArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiQuerycategoriesArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  includeHidden?: InputMaybe<Scalars['Boolean']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  parentCategoryId?: InputMaybe<Scalars['Int']['input']>;
};


type GeinsMerchantApiQuerycategoryArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiQuerychannelArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiQuerycheckoutArgs = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  paymentType: PaymentType;
};


type GeinsMerchantApiQuerycmsPagesArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  excludeTags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeTags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiQuerygetCartArgs = {
  allowExternalShippingFee?: InputMaybe<Scalars['Boolean']['input']>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  forceRefresh?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  includeCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiQuerygetCheckoutArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  paymentType: PaymentType;
};


type GeinsMerchantApiQuerygetCheckoutAndOrderArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  paymentType: PaymentType;
};


type GeinsMerchantApiQuerygetMenuAtLocationArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  customerGroupId?: InputMaybe<Scalars['Int']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  menuLocationId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiQuerygetOrderArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['Int']['input'];
};


type GeinsMerchantApiQuerygetOrderPublicArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  publicOrderId: Scalars['Guid']['input'];
};


type GeinsMerchantApiQuerygetOrdersArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiQuerygetUserArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiQuerylistPageInfoArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiQueryproductArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
};


type GeinsMerchantApiQueryproductsArgs = {
  brandAlias?: InputMaybe<Scalars['String']['input']>;
  categoryAlias?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  discountCampaignAlias?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterInputType>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiQueryrelatedProductsArgs = {
  alias: Scalars['String']['input'];
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiQueryreviewsArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


type GeinsMerchantApiQueryurlHistoryArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiQueryvalidateOrderConditionsArgs = {
  cartId: Scalars['String']['input'];
  channelId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiQueryvalidateOrderCreationArgs = {
  cartId: Scalars['String']['input'];
  channelId?: InputMaybe<Scalars['String']['input']>;
  checkout: CheckoutInputType;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
};


type GeinsMerchantApiQuerywidgetAreaArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
  areaName?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  customerType?: InputMaybe<CustomerType>;
  displaySetting?: InputMaybe<Scalars['String']['input']>;
  family?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<Array<InputMaybe<PageWidgetCollectionFilterInputType>>>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

enum Gender {
  MAN = 'MAN',
  UNSET = 'UNSET',
  UNSPECIFIED = 'UNSPECIFIED',
  WOMAN = 'WOMAN'
}

enum GenderType {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
  UNKNOWN = 'UNKNOWN'
}

/** Type containing Google taxonomy data */
type GoogleTaxonomyType = {
  __typename?: 'GoogleTaxonomyType';
  /** Google taxonomy ID */
  id?: Maybe<Scalars['Int']['output']>;
  /** Google taxonomy name */
  name?: Maybe<Scalars['String']['output']>;
  /** Parent Google taxonomy ID */
  parentId?: Maybe<Scalars['Int']['output']>;
  /** Google taxonomy path */
  path?: Maybe<Scalars['String']['output']>;
};

/** Type containing information for a group in a product package */
type GroupType = {
  __typename?: 'GroupType';
  /** The package group description */
  description?: Maybe<Scalars['String']['output']>;
  /** The package group id */
  groupId: Scalars['Int']['output'];
  /** The package group image */
  image?: Maybe<Scalars['String']['output']>;
  /** The package group name */
  name?: Maybe<Scalars['String']['output']>;
  /** Options in this package group */
  options?: Maybe<Array<Maybe<OptionType>>>;
  /** 'true' if this package group is required in order to place the package in cart */
  required: Scalars['Boolean']['output'];
  /** The sort order of this package group relative to other groups */
  sortOrder: Scalars['Int']['output'];
};

enum IncludeMode {
  /** Products must have a value from *all* groups provided in the Include field. This is the default mode. */
  INTERSECT = 'INTERSECT',
  /** Products must have a value from *at least one* of the groups provided in the Include field. */
  UNION = 'UNION'
}

/** Type containing all information about the language-type */
type LanguageType = {
  __typename?: 'LanguageType';
  /** Two-letter ISO code */
  code: Scalars['String']['output'];
  /** Language ID */
  id: Scalars['String']['output'];
  /** Language name */
  name: Scalars['String']['output'];
};

/** Type containing information about the lowest price during last 30 days and the legal comparison price (EU). Observe that discount is calculated against comparison price and not the regular price. */
type LowestPriceType = {
  __typename?: 'LowestPriceType';
  /** The comparison price excluding VAT */
  comparisonPriceExVat: Scalars['Decimal']['output'];
  /** Comparison price (excl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  comparisonPriceExVatFormatted?: Maybe<Scalars['String']['output']>;
  /** The comparison price including VAT */
  comparisonPriceIncVat: Scalars['Decimal']['output'];
  /** Comparison price (incl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  comparisonPriceIncVatFormatted?: Maybe<Scalars['String']['output']>;
  /** Discount amount excluding VAT. */
  discountExVat: Scalars['Decimal']['output'];
  /** Discount (excl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  discountExVatFormatted?: Maybe<Scalars['String']['output']>;
  /** Discount amount including VAT. */
  discountIncVat: Scalars['Decimal']['output'];
  /** Discount (incl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  discountIncVatFormatted?: Maybe<Scalars['String']['output']>;
  /** Discount percentage. */
  discountPercentage: Scalars['Int']['output'];
  /** Whether the price is discounted or not */
  isDiscounted: Scalars['Boolean']['output'];
  /** The lowest price excluding VAT */
  lowestPriceExVat: Scalars['Decimal']['output'];
  /** Lowest price (excl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  lowestPriceExVatFormatted?: Maybe<Scalars['String']['output']>;
  /** The lowest price including VAT */
  lowestPriceIncVat: Scalars['Decimal']['output'];
  /** Lowest price (incl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  lowestPriceIncVatFormatted?: Maybe<Scalars['String']['output']>;
  /** The selling price excluding VAT */
  sellingPriceExVat: Scalars['Decimal']['output'];
  /** Selling price (excl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  sellingPriceExVatFormatted?: Maybe<Scalars['String']['output']>;
  /** The selling price including VAT */
  sellingPriceIncVat: Scalars['Decimal']['output'];
  /** Selling price (incl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  sellingPriceIncVatFormatted?: Maybe<Scalars['String']['output']>;
  /** VAT amount */
  vat: Scalars['Decimal']['output'];
  /** VAT amount, formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  vatFormatted?: Maybe<Scalars['String']['output']>;
};

/** Type containing all information about the market-type */
type MarketType = {
  __typename?: 'MarketType';
  /** The part of the market id that is used in the url. */
  alias?: Maybe<Scalars['String']['output']>;
  allowedLanguages?: Maybe<Array<Maybe<LanguageType>>>;
  /** Country */
  country?: Maybe<CountryType>;
  /** Currency */
  currency?: Maybe<CurrencyType>;
  /** Default language ID used if no other is specified, or an invalid is supplied. */
  defaultLanguageId: Scalars['String']['output'];
  /** Group key used to group related markets together, i.e. if they belong to the same region or continent. */
  groupKey: Scalars['String']['output'];
  /** ID */
  id: Scalars['String']['output'];
  /** Indicates if the market should only be displayed in the checkout process. */
  onlyDisplayInCheckout?: Maybe<Scalars['Boolean']['output']>;
  /** If true, indicates that the market is virtual. Virtual markets cannot be used in the checkout process */
  virtual?: Maybe<Scalars['Boolean']['output']>;
};

type MenuItemType = {
  __typename?: 'MenuItemType';
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<MenuItemType>>>;
  hidden: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  open: Scalars['Boolean']['output'];
  order: Scalars['Int']['output'];
  targetBlank: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

type MenuType = {
  __typename?: 'MenuType';
  channels?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['String']['output'];
  languages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  menuItems?: Maybe<Array<Maybe<MenuItemType>>>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** Type containing metadata */
type MetadataType = {
  __typename?: 'MetadataType';
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** Keywords */
  keywords?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

/** Type containing information for an option in a product package group */
type OptionType = {
  __typename?: 'OptionType';
  /** 'true' if this option should be selected by default */
  isSelected: Scalars['Boolean']['output'];
  /** The name of the option */
  name?: Maybe<Scalars['String']['output']>;
  /** The option id */
  optionId: Scalars['Int']['output'];
  /** The product that this options refers to */
  product?: Maybe<ProductType>;
  /** The quantity of items that is chosen if this option is selected */
  quantity: Scalars['Int']['output'];
  /** The sort order of this option relative to other options */
  sortOrder: Scalars['Int']['output'];
};

type OrderType = {
  __typename?: 'OrderType';
  billingAddress?: Maybe<AddressType>;
  cart?: Maybe<CartType>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<Scalars['Int']['output']>;
  desiredDeliveryDate?: Maybe<Scalars['DateTime']['output']>;
  discount?: Maybe<PriceType>;
  /** The amount taken from account balance */
  fromBalance: Scalars['Decimal']['output'];
  /** The amount taken from account balance. Formatted as a currency string. */
  fromBalanceFormatted?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  orderTotal?: Maybe<PriceType>;
  paymentDetails?: Maybe<Array<Maybe<PaymentDetailsType>>>;
  paymentFee?: Maybe<PriceType>;
  publicId: Scalars['ID']['output'];
  refunds?: Maybe<Array<Maybe<RefundType>>>;
  shippingAddress?: Maybe<AddressType>;
  shippingDetails?: Maybe<Array<Maybe<ShippingDetailType>>>;
  shippingFee?: Maybe<PriceType>;
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vat?: Maybe<PriceType>;
};

/** Type containing widget page area information */
type PageAreaType = {
  __typename?: 'PageAreaType';
  /** ID */
  id: Scalars['Int']['output'];
  /** Index */
  index: Scalars['Int']['output'];
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
};

/** Type containing page information */
type PageInfoType = {
  __typename?: 'PageInfoType';
  /** Alias */
  alias: Scalars['String']['output'];
  /**
   * Alternative full paths to the page
   * @deprecated Use AlternativeUrls instead.
   */
  alternativeCanonicalUrls?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Alternative urls to the page */
  alternativeUrls?: Maybe<Array<Maybe<AlternativeUrlType>>>;
  /** Background image */
  backgroundImage?: Maybe<Scalars['String']['output']>;
  /** Full path to the page */
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** Whether the descriptions should be hidden */
  hideDescription: Scalars['Boolean']['output'];
  /** Whether the Name-field should be hidden */
  hideTitle: Scalars['Boolean']['output'];
  /** Page ID */
  id: Scalars['Int']['output'];
  /** Logo */
  logo?: Maybe<Scalars['String']['output']>;
  /** Page metadata */
  meta?: Maybe<MetadataType>;
  /** Name */
  name: Scalars['String']['output'];
  /** Primary description */
  primaryDescription?: Maybe<Scalars['String']['output']>;
  /** Primary image */
  primaryImage?: Maybe<Scalars['String']['output']>;
  /** Secondary description */
  secondaryDescription?: Maybe<Scalars['String']['output']>;
  /** Page sub-categories */
  subCategories?: Maybe<Array<Maybe<CategoryType>>>;
};

/** Type for filtering widgets */
type PageWidgetCollectionFilterInputType = {
  /** Filter key. Possible values: SiteId, LanguageId, Product, Category, Brand, DiscountCampaign, CustomerType, Parameter */
  key?: InputMaybe<Scalars['String']['input']>;
  /** Filter value. Id (int) or Alias */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Type containing widget collection information */
type PageWidgetCollectionType = {
  __typename?: 'PageWidgetCollectionType';
  /** Collection containers */
  containers?: Maybe<Array<Maybe<PageWidgetContainerType>>>;
  /** Collection family name */
  familyName?: Maybe<Scalars['String']['output']>;
  /** Collection ID */
  id: Scalars['Int']['output'];
  /** Collection metadata */
  meta?: Maybe<MetadataType>;
  /** Name */
  name: Scalars['String']['output'];
  /** Collection page area */
  pageArea?: Maybe<PageAreaType>;
  /** List of tags */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

/** Type containing widget container information */
type PageWidgetContainerType = {
  __typename?: 'PageWidgetContainerType';
  /** Container class names */
  classNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Container design */
  design: Scalars['String']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** Container layout */
  layout: Scalars['String']['output'];
  /** Name */
  name: Scalars['String']['output'];
  /** Container responsive mode */
  responsiveMode: Scalars['String']['output'];
  /** Sort order */
  sortOrder: Scalars['Int']['output'];
  /** Widgets in this container */
  widgets?: Maybe<Array<Maybe<PageWidgetType>>>;
};

/** Type containing widget image size information */
type PageWidgetImageSizeType = {
  __typename?: 'PageWidgetImageSizeType';
  /** Image height */
  imageHeight: Scalars['Int']['output'];
  /** Image ratio */
  imageRatio: Scalars['Float']['output'];
  /** Image width */
  imageWidth: Scalars['Int']['output'];
};

/** Type containing widget image information */
type PageWidgetImageType = {
  __typename?: 'PageWidgetImageType';
  /** Filename */
  fileName: Scalars['String']['output'];
  /** Largest image size */
  largestSize?: Maybe<PageWidgetImageSizeType>;
  /** Image sizes */
  sizes?: Maybe<Array<Maybe<PageWidgetImageSizeType>>>;
};

/** Type containing CMS page information */
type PageWidgetPageType = {
  __typename?: 'PageWidgetPageType';
  /** Active From */
  activeFrom?: Maybe<Scalars['DateTime']['output']>;
  /** Active To */
  activeTo?: Maybe<Scalars['DateTime']['output']>;
  /** Alias */
  alias?: Maybe<Scalars['String']['output']>;
  /** The url to this cms page */
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** Collection ID */
  id: Scalars['Int']['output'];
  /** Collection metadata */
  meta?: Maybe<MetadataType>;
  /** Name */
  name: Scalars['String']['output'];
  /** List of tags */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

/** Type containing widget information */
type PageWidgetType = {
  __typename?: 'PageWidgetType';
  /** Class names */
  classNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Configuration */
  configuration: Scalars['String']['output'];
  /** ID */
  id: Scalars['String']['output'];
  /** Images */
  images?: Maybe<Array<Maybe<PageWidgetImageType>>>;
  /** Name */
  name: Scalars['String']['output'];
  /** Size */
  size: Scalars['String']['output'];
  /** Sort order */
  sortOrder: Scalars['Int']['output'];
  /** Widget Type */
  type: Scalars['String']['output'];
};

/** Type containing product parameter group information */
type ParameterGroupType = {
  __typename?: 'ParameterGroupType';
  /** The parameter group name */
  name: Scalars['String']['output'];
  /** The parameter group order */
  order?: Maybe<Scalars['Int']['output']>;
  /** Parameter group ID */
  parameterGroupId?: Maybe<Scalars['Int']['output']>;
  /** List of parameters */
  parameters?: Maybe<Array<Maybe<ParameterType>>>;
  /** Product ID associated with this parameter group */
  productId: Scalars['Int']['output'];
};

/** Type containing parameter information */
type ParameterType = {
  __typename?: 'ParameterType';
  /** Parameter description */
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the associated facet */
  facetId?: Maybe<Scalars['String']['output']>;
  /** The internal identifier of the parameter. This value is the same for all languages and does not change if the parameter name changes. */
  identifier?: Maybe<Scalars['String']['output']>;
  /** Parameter label */
  label?: Maybe<Scalars['String']['output']>;
  /** Parameter name */
  name?: Maybe<Scalars['String']['output']>;
  /** The order of the parameter within the group */
  order: Scalars['Int']['output'];
  /** ID of the associated parameter group */
  parameterGroupId: Scalars['Int']['output'];
  /** Parameter ID */
  parameterId: Scalars['Int']['output'];
  /** The ID of the associated parameter value */
  parameterValueId?: Maybe<Scalars['Int']['output']>;
  /** Whether this parameter should be shown within the product specifications */
  show: Scalars['Boolean']['output'];
  /** Whether this parameter should be shown within filter options */
  showFilter: Scalars['Boolean']['output'];
  /** The parameter type */
  type?: Maybe<Scalars['String']['output']>;
  /** Parameter value */
  value?: Maybe<Scalars['String']['output']>;
};

enum PaymentCheckout {
  EXTERNAL = 'EXTERNAL',
  GEINS_PAY = 'GEINS_PAY',
  STANDARD = 'STANDARD'
}

type PaymentDetailsType = {
  __typename?: 'PaymentDetailsType';
  displayName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isPaid: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  paymentFee: Scalars['Float']['output'];
  paymentId: Scalars['Int']['output'];
  paymentOption?: Maybe<Scalars['String']['output']>;
  reservationDate: Scalars['DateTime']['output'];
  reservationNumber?: Maybe<Scalars['String']['output']>;
  shippingFee: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  transactionId: Scalars['String']['output'];
};

/** Type containing payment option information */
type PaymentOptionType = {
  __typename?: 'PaymentOptionType';
  /** Checkout type */
  checkoutType?: Maybe<PaymentCheckout>;
  /** Display name */
  displayName?: Maybe<Scalars['String']['output']>;
  /** Fee excl. VAT */
  feeExVat: Scalars['Decimal']['output'];
  /** Fee excl. VAT, formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  feeExVatFormatted?: Maybe<Scalars['String']['output']>;
  /** Fee incl. VAT */
  feeIncVat: Scalars['Decimal']['output'];
  /** Fee incl. VAT, formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  feeIncVatFormatted?: Maybe<Scalars['String']['output']>;
  /** Payment option ID */
  id: Scalars['Int']['output'];
  /** Whether this payment option is the default selection */
  isDefault: Scalars['Boolean']['output'];
  /** Whether this option is the one selected */
  isSelected: Scalars['Boolean']['output'];
  /** Shipping option logo */
  logo?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Whether it is a new checkout session */
  newCheckoutSession: Scalars['Boolean']['output'];
  /** Payment option data */
  paymentData?: Maybe<Scalars['String']['output']>;
  /** Payment type */
  paymentType?: Maybe<PaymentType>;
};

/** Payment types */
enum PaymentType {
  /** Avarda */
  AVARDA = 'AVARDA',
  /** GeinsPay */
  GEINS_PAY = 'GEINS_PAY',
  /** Klarna */
  KLARNA = 'KLARNA',
  /** Standard */
  STANDARD = 'STANDARD',
  /** Svea */
  SVEA = 'SVEA',
  /** Walley */
  WALLEY = 'WALLEY'
}

type PlaceOrderResponseType = {
  __typename?: 'PlaceOrderResponseType';
  orderId?: Maybe<Scalars['String']['output']>;
  publicId?: Maybe<Scalars['String']['output']>;
  redirectUrl?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** Price range filter */
type PriceFilterInputType = {
  /** The highest price you want to include */
  highest?: InputMaybe<Scalars['Float']['input']>;
  /** The lowest price you want to include */
  lowest?: InputMaybe<Scalars['Float']['input']>;
};

/** Price range filter */
type PriceFilterType = {
  __typename?: 'PriceFilterType';
  /** The highest price found in the results */
  highest: Scalars['Float']['output'];
  /** The lowest price found in the results */
  lowest: Scalars['Float']['output'];
};

/** Type containing all information about a product price log item */
type PriceLogItemType = {
  __typename?: 'PriceLogItemType';
  /** Date of the price change */
  date: Scalars['String']['output'];
  /** Discount amount excluding VAT */
  discountExVat: Scalars['Decimal']['output'];
  /** Discount (excl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  discountExVatFormatted?: Maybe<Scalars['String']['output']>;
  /** Discount amount including VAT */
  discountIncVat: Scalars['Decimal']['output'];
  /** Discount (incl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  discountIncVatFormatted?: Maybe<Scalars['String']['output']>;
  /** Discount percentage */
  discountPercentage: Scalars['Int']['output'];
  /** Whether the price is discounted or not */
  isDiscounted: Scalars['Boolean']['output'];
  /** True if this log items has the lowest price for the last 30 days */
  isLowest: Scalars['Boolean']['output'];
  /** The regular price excluding VAT */
  regularPriceExVat: Scalars['Decimal']['output'];
  /** Regular price (excl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  regularPriceExVatFormatted?: Maybe<Scalars['String']['output']>;
  /** The regular price including VAT */
  regularPriceIncVat: Scalars['Decimal']['output'];
  /** Regular price (incl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  regularPriceIncVatFormatted?: Maybe<Scalars['String']['output']>;
  /** The selling price excluding VAT */
  sellingPriceExVat: Scalars['Decimal']['output'];
  /** Selling price (excl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  sellingPriceExVatFormatted?: Maybe<Scalars['String']['output']>;
  /** The selling price including VAT */
  sellingPriceIncVat: Scalars['Decimal']['output'];
  /** Selling price (incl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  sellingPriceIncVatFormatted?: Maybe<Scalars['String']['output']>;
  /** VAT amount */
  vat: Scalars['Decimal']['output'];
  /** VAT amount, formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  vatFormatted?: Maybe<Scalars['String']['output']>;
};

/** Type containing price information */
type PriceType = {
  __typename?: 'PriceType';
  /** Currency information */
  currency?: Maybe<CurrencyType>;
  /** Discount amount excluding VAT */
  discountExVat: Scalars['Decimal']['output'];
  /** Discount (excl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  discountExVatFormatted?: Maybe<Scalars['String']['output']>;
  /** Discount amount including VAT */
  discountIncVat: Scalars['Decimal']['output'];
  /** Discount (incl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  discountIncVatFormatted?: Maybe<Scalars['String']['output']>;
  /** Discount percentage */
  discountPercentage: Scalars['Int']['output'];
  /** Whether the price is discounted or not */
  isDiscounted: Scalars['Boolean']['output'];
  /** The regular price excluding VAT */
  regularPriceExVat: Scalars['Decimal']['output'];
  /** Regular price (excl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  regularPriceExVatFormatted?: Maybe<Scalars['String']['output']>;
  /** The regular price including VAT */
  regularPriceIncVat: Scalars['Decimal']['output'];
  /** Regular price (incl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  regularPriceIncVatFormatted?: Maybe<Scalars['String']['output']>;
  /** The selling price excluding VAT */
  sellingPriceExVat: Scalars['Decimal']['output'];
  /** Selling price (excl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  sellingPriceExVatFormatted?: Maybe<Scalars['String']['output']>;
  /** The selling price including VAT */
  sellingPriceIncVat: Scalars['Decimal']['output'];
  /** Selling price (incl. VAT), formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  sellingPriceIncVatFormatted?: Maybe<Scalars['String']['output']>;
  /** VAT amount */
  vat: Scalars['Decimal']['output'];
  /** VAT amount, formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  vatFormatted?: Maybe<Scalars['String']['output']>;
};

/** Type containing all information about a product image */
type ProductImageType = {
  __typename?: 'ProductImageType';
  /** The file name of the product image. */
  fileName: Scalars['String']['output'];
  /** Custom tags associated with the product image. */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Type containing meta data for the package selection that a cart item was added from */
type ProductPackageCartItemType = {
  __typename?: 'ProductPackageCartItemType';
  /** The group id */
  groupId: Scalars['Int']['output'];
  /** The option id */
  optionId: Scalars['Int']['output'];
  /** The package id */
  packageId: Scalars['Int']['output'];
  /** The package name */
  packageName: Scalars['String']['output'];
};

/** Type containing an option selection for a product package group */
type ProductPackageSelectionType = {
  /** The group id that the selection is made in */
  groupId: Scalars['Int']['input'];
  /** The selected option id */
  optionId: Scalars['Int']['input'];
  /** The selected SKU */
  skuId: Scalars['Int']['input'];
};

/** Type containing type specific information for a product of the type 'package' */
type ProductPackageType = {
  __typename?: 'ProductPackageType';
  /** Groups in this package */
  groups?: Maybe<Array<Maybe<GroupType>>>;
};

/** Product relation type */
enum ProductRelation {
  /** Product is an accessory to this product */
  ACCESSORIES = 'ACCESSORIES',
  /** Product is related to this product */
  RELATED = 'RELATED',
  /** Product is similar to this product */
  SIMILAR = 'SIMILAR'
}

/** The results of the reviews query. */
type ProductReviewResultType = {
  __typename?: 'ProductReviewResultType';
  /** The average rating for this product */
  averageRating: Scalars['Float']['output'];
  /** The total count of results for the query */
  count: Scalars['Long']['output'];
  /** Results returned by the query */
  reviews?: Maybe<Array<Maybe<ProductReviewType>>>;
};

/** Type containing all information about a product review */
type ProductReviewType = {
  __typename?: 'ProductReviewType';
  /** Author of the review */
  author: Scalars['String']['output'];
  /** The product review comment */
  comment: Scalars['String']['output'];
  /** The product rating (1-5) */
  rating: Scalars['Int']['output'];
  /** The date and time for when the review was made */
  reviewDate: Scalars['DateTime']['output'];
};

/** Product info */
type ProductTextsType = {
  __typename?: 'ProductTextsType';
  /** Main product info */
  text1?: Maybe<Scalars['String']['output']>;
  /** Secondary product info */
  text2?: Maybe<Scalars['String']['output']>;
  /** Tertiary product info */
  text3?: Maybe<Scalars['String']['output']>;
};

/** Type containing all information about a product */
type ProductType = {
  __typename?: 'ProductType';
  /** Alias for the product */
  alias: Scalars['String']['output'];
  /**
   * Alternative full paths to the product
   * @deprecated Use AlternativeUrls instead.
   */
  alternativeCanonicalUrls?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Alternative urls to the product */
  alternativeUrls?: Maybe<Array<Maybe<AlternativeUrlType>>>;
  /** The product article number */
  articleNumber?: Maybe<Scalars['String']['output']>;
  /** Product brand information */
  brand?: Maybe<BrandType>;
  /** Breadcrumbs */
  breadcrumbs?: Maybe<Array<Maybe<BreadcrumbType>>>;
  /** The full path to the product */
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** Product category information */
  categories?: Maybe<Array<Maybe<CategoryType>>>;
  /** The primary category ID */
  categoryId: Scalars['Int']['output'];
  /** The current variant selection */
  currentProductVariant?: Maybe<VariantType>;
  /** The dimensions of the Product. Note that this can also be set on SKU level */
  dimensions?: Maybe<DimensionsType>;
  /** Product discount campaigns */
  discountCampaigns?: Maybe<Array<Maybe<CampaignRuleType>>>;
  /** Type of discount price: None, SalePrice, PriceCampaign or External */
  discountType?: Maybe<DiscountType>;
  /** The date on which the product was first available (yyyy-mm-dd) */
  firstAvailableOn?: Maybe<Scalars['String']['output']>;
  /** The Freightclass set for this product */
  freightClass?: Maybe<Scalars['String']['output']>;
  /**
   * List of product images
   * @deprecated Use ProductType.ProductImages instead.
   */
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Lowest price and comparison price according to EU price laws */
  lowestPrice?: Maybe<LowestPriceType>;
  /** Product metadata */
  meta?: Maybe<MetadataType>;
  /** The product name */
  name?: Maybe<Scalars['String']['output']>;
  /** Product parameter groups */
  parameterGroups?: Maybe<Array<Maybe<ParameterGroupType>>>;
  /** Price log with the prices from the last 30 days */
  priceLog?: Maybe<Array<Maybe<PriceLogItemType>>>;
  /** Primary category for this product */
  primaryCategory?: Maybe<CategoryType>;
  /** Product ID */
  productId: Scalars['Int']['output'];
  /** List of product images and their related properties */
  productImages?: Maybe<Array<Maybe<ProductImageType>>>;
  /** Package specific information for this product */
  productPackage?: Maybe<ProductPackageType>;
  /** Product rating */
  rating?: Maybe<RatingType>;
  /** Product SKUs */
  skus?: Maybe<Array<Maybe<SkuType>>>;
  /** The Supplier Id */
  supplierId: Scalars['Int']['output'];
  /** Product text info */
  texts?: Maybe<ProductTextsType>;
  /** Product stock information */
  totalStock?: Maybe<StockType>;
  /** The product type. Either 'product' or 'package' */
  type?: Maybe<Scalars['String']['output']>;
  /** Product price information */
  unitPrice?: Maybe<PriceType>;
  /** Variant dimensions */
  variantDimensions?: Maybe<Array<Maybe<VariantDimensionType>>>;
  /** Product variant group */
  variantGroup?: Maybe<VariantGroupType>;
  /** Weight in grams (g). Note that this can also be set on SKU level */
  weight: Scalars['Int']['output'];
};

/** The results of the products-query. */
type ProductsResultType = {
  __typename?: 'ProductsResultType';
  /** The total count of results for the query */
  count: Scalars['Long']['output'];
  /** The filters available for this query */
  filters?: Maybe<FilterCollectionType>;
  /** Results returned by the query */
  products?: Maybe<Array<Maybe<ProductType>>>;
};

/** Type containing product rating information */
type RatingType = {
  __typename?: 'RatingType';
  /** Rating score */
  score: Scalars['Decimal']['output'];
  /** Vote count */
  voteCount: Scalars['Int']['output'];
};

type RefundType = {
  __typename?: 'RefundType';
  articleNumber?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['Int']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  reasonCode?: Maybe<Scalars['Int']['output']>;
  refundType?: Maybe<Scalars['String']['output']>;
  toBalance: Scalars['Boolean']['output'];
  total: Scalars['Float']['output'];
  vat: Scalars['Float']['output'];
};

/** Type containing a subset of product information for related products */
type RelatedProductType = {
  __typename?: 'RelatedProductType';
  /** Product alias */
  alias: Scalars['String']['output'];
  /** Product brand information */
  brand?: Maybe<BrandType>;
  /** Full path to the product */
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** Product campaigns */
  discountCampaigns?: Maybe<Array<Maybe<CampaignRuleType>>>;
  /**
   * List of product images
   * @deprecated Use RelatedProductType.ProductImages instead.
   */
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Product name */
  name?: Maybe<Scalars['String']['output']>;
  /** Product parameter groups. The availability of data in this field needs to be configured. */
  parameterGroups?: Maybe<Array<Maybe<ParameterGroupType>>>;
  /** Primary category for this product */
  primaryCategory?: Maybe<CategoryType>;
  /** Product primary image */
  primaryImage?: Maybe<Scalars['String']['output']>;
  /** List of product images and their related properties */
  productImages?: Maybe<Array<Maybe<ProductImageType>>>;
  /**
   * Relation type
   * @deprecated Use RelatedProductType.RelationType instead.
   */
  relation?: Maybe<ProductRelation>;
  /** Relation type */
  relationType: Scalars['String']['output'];
  /** Product secondary image */
  secondaryImage?: Maybe<Scalars['String']['output']>;
  /** Product SKUs */
  skus?: Maybe<Array<Maybe<SkuType>>>;
  /** Product price */
  unitPrice?: Maybe<PriceType>;
};

type ShippingDetailType = {
  __typename?: 'ShippingDetailType';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  parcelNumber?: Maybe<Scalars['String']['output']>;
  shippingDate?: Maybe<Scalars['DateTime']['output']>;
  shippingId: Scalars['Int']['output'];
  trackingLink?: Maybe<Scalars['String']['output']>;
};

/** Type containing shipping option information */
type ShippingOptionType = {
  __typename?: 'ShippingOptionType';
  /** Amount left to recieve free shipping */
  amountLeftToFreeShipping: Scalars['Decimal']['output'];
  /** Amount left to recieve free shipping formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  amountLeftToFreeShippingFormatted?: Maybe<Scalars['String']['output']>;
  /** Display name */
  displayName?: Maybe<Scalars['String']['output']>;
  /** External ID */
  externalId?: Maybe<Scalars['String']['output']>;
  /** Fee excl. VAT */
  feeExVat: Scalars['Decimal']['output'];
  /** Fee excl. VAT, formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  feeExVatFormatted?: Maybe<Scalars['String']['output']>;
  /** Fee incl. VAT */
  feeIncVat: Scalars['Decimal']['output'];
  /** Fee incl. VAT, formatted with currency info. e.g. '299 kr', '123,45 SEK', '$12.34' */
  feeIncVatFormatted?: Maybe<Scalars['String']['output']>;
  /** Shipping option ID */
  id: Scalars['Int']['output'];
  /** Whether this shipping option is the default selection */
  isDefault: Scalars['Boolean']['output'];
  /** Whether this option is the one selected */
  isSelected: Scalars['Boolean']['output'];
  /** Shipping option logo */
  logo?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Shipping data */
  shippingData?: Maybe<Scalars['String']['output']>;
  /** Sub-options */
  subOptions?: Maybe<Array<Maybe<ShippingOptionType>>>;
};

/** Type containing all information about a product SKU */
type SkuType = {
  __typename?: 'SkuType';
  /** The article number of the SKU */
  articleNumber: Scalars['String']['output'];
  /** The dimensions of the SKU */
  dimensions?: Maybe<DimensionsType>;
  /** External ID of the SKU */
  externalId?: Maybe<Scalars['String']['output']>;
  /** SKU GTIN */
  gtin?: Maybe<Scalars['String']['output']>;
  /** Incoming date */
  incoming?: Maybe<Scalars['DateTime']['output']>;
  /** SKU name */
  name?: Maybe<Scalars['String']['output']>;
  /** The associated product ID */
  productId: Scalars['Int']['output'];
  /** Shelf */
  shelf?: Maybe<Scalars['String']['output']>;
  /** ID of the SKU */
  skuId: Scalars['Int']['output'];
  /** Stock information */
  stock?: Maybe<StockType>;
  /** Weight in grams (g) */
  weight: Scalars['Int']['output'];
};

/** Sort types */
enum SortType {
  /** Sort by alphabetical */
  ALPHABETICAL = 'ALPHABETICAL',
  /** Sort by alphabetical, in descending order */
  ALPHABETICAL_DESC = 'ALPHABETICAL_DESC',
  /** Sort by available stock balance */
  AVAILABLE_STOCK = 'AVAILABLE_STOCK',
  /** Sort by available stock balance, in descending order */
  AVAILABLE_STOCK_DESC = 'AVAILABLE_STOCK_DESC',
  /** Sort by brand */
  BRAND = 'BRAND',
  /** Sort by custom value 1 */
  CUSTOM_1 = 'CUSTOM_1',
  /** Sort by custom value 2 */
  CUSTOM_2 = 'CUSTOM_2',
  /** Sort by custom value 3 */
  CUSTOM_3 = 'CUSTOM_3',
  /** Sort by custom value 4 */
  CUSTOM_4 = 'CUSTOM_4',
  /** Sort by custom value 5 */
  CUSTOM_5 = 'CUSTOM_5',
  /** Sort by facets */
  FACET_ORDER = 'FACET_ORDER',
  /** Sort by latest products */
  LATEST = 'LATEST',
  /** Sort by most sold */
  MOST_SOLD = 'MOST_SOLD',
  /** No sorting */
  NONE = 'NONE',
  /** Sort by price */
  PRICE = 'PRICE',
  /** Sort by price, in descending order */
  PRICE_DESC = 'PRICE_DESC',
  /** Sort by relevance */
  RELEVANCE = 'RELEVANCE',
  /** Sort by total stock balance, including oversellable */
  TOTAL_STOCK = 'TOTAL_STOCK',
  /** Sort by total stock balance, including oversellable, in descending order */
  TOTAL_STOCK_DESC = 'TOTAL_STOCK_DESC',
  /** Sort by votes */
  VOTES = 'VOTES'
}

/** Represents SKU stock information. */
type StockType = {
  __typename?: 'StockType';
  /** Number of units currently available in the warehouse. */
  inStock: Scalars['Int']['output'];
  /**
   * The date when new stock is arriving. (Deprecated: Use SkuType.Incoming or VariantType.Incoming instead)
   * @deprecated Use SkuType.Incoming or VariantType.Incoming instead
   */
  incoming?: Maybe<Scalars['DateTime']['output']>;
  /** Number of units that can be oversold. */
  oversellable: Scalars['Int']['output'];
  /**
   * The shelf identifier for the stock. (Deprecated: Use SkuType.Shelf or VariantType.Shelf instead)
   * @deprecated Use SkuType.Shelf or VariantType.Shelf instead
   */
  shelf?: Maybe<Scalars['String']['output']>;
  /** Number of units that are always available for sale. This value is never lowered when goods are sold or increased when goods are returned. */
  static?: Maybe<Scalars['Int']['output']>;
  /** Total number of units available for sale. TotalStock = InStock + OverSellable + Static. */
  totalStock: Scalars['Int']['output'];
};

type UrlHistoryType = {
  __typename?: 'UrlHistoryType';
  newUrl: Scalars['String']['output'];
  oldUrl: Scalars['String']['output'];
};

type UserBalanceType = {
  __typename?: 'UserBalanceType';
  amount: Scalars['Decimal']['output'];
  /** User balance amount. Formatted as a currency string. */
  amountFormatted?: Maybe<Scalars['String']['output']>;
  currency: Scalars['String']['output'];
};

type UserInputType = {
  address?: InputMaybe<AddressInputType>;
  customerType?: InputMaybe<CustomerType>;
  gender?: InputMaybe<Gender>;
  /** Free-text field to store any data related to the customer. */
  metaData?: InputMaybe<Scalars['String']['input']>;
  newsletter?: InputMaybe<Scalars['Boolean']['input']>;
  personalId?: InputMaybe<Scalars['String']['input']>;
};

type UserType = {
  __typename?: 'UserType';
  /** The address of the user. */
  address?: Maybe<AddressType>;
  /**
   * Account balance
   * @deprecated Use Balances instead
   */
  balance: Scalars['Decimal']['output'];
  /**
   * Account balance. Formatted as a currency string.
   * @deprecated Use Balances instead
   */
  balanceFormatted?: Maybe<Scalars['String']['output']>;
  /** User balance per currency */
  balances?: Maybe<Array<Maybe<UserBalanceType>>>;
  /** The customer type of the user. */
  customerType?: Maybe<CustomerType>;
  /** The email address of the user. */
  email: Scalars['String']['output'];
  /** The gender of the user. */
  gender?: Maybe<Gender>;
  /** The unique identifier of the user. */
  id: Scalars['Int']['output'];
  /** The membership identifier of the user. */
  memberId: Scalars['Int']['output'];
  /** The type of membership the user has. */
  memberType: Scalars['String']['output'];
  /** Free-text field that can contain any additional metadata related to the customer. */
  metaData?: Maybe<Scalars['String']['output']>;
  /** Indicates if the user is subscribed to the newsletter. */
  newsletter?: Maybe<Scalars['Boolean']['output']>;
  /** The personal identification number of the user. */
  personalId?: Maybe<Scalars['String']['output']>;
};

type ValidateOrderConditionsResponseType = {
  __typename?: 'ValidateOrderConditionsResponseType';
  isValid: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

type ValidateOrderCreationResponseType = {
  __typename?: 'ValidateOrderCreationResponseType';
  isValid: Scalars['Boolean']['output'];
  memberType?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

/** Type containing variant attribute information */
type VariantAttributeType = {
  __typename?: 'VariantAttributeType';
  /** Attribute key */
  key: Scalars['String']['output'];
  /** Attribute value */
  value: Scalars['String']['output'];
};

/** Type containing variant dimension information */
type VariantDimensionType = {
  __typename?: 'VariantDimensionType';
  /** Dimension attributes */
  attributes?: Maybe<Array<Maybe<VariantAttributeType>>>;
  /** The dimension name */
  dimension: Scalars['String']['output'];
  /** Group values */
  group?: Maybe<Array<Maybe<VariantValueType>>>;
  /** Dimension label */
  label?: Maybe<Scalars['String']['output']>;
  /** The level of this variant dimension */
  level: Scalars['Int']['output'];
  /** Dimension type. e.g. 'product' if it leads to a different product, otherwise 'selection' */
  type: Scalars['String']['output'];
  /** Dimension value */
  value?: Maybe<Scalars['String']['output']>;
};

/** Type containing variant group information */
type VariantGroupType = {
  __typename?: 'VariantGroupType';
  /** The amount of active products in this variant group */
  activeProducts: Scalars['Int']['output'];
  /** If true, only the main product will show up in product lists */
  collapseInLists: Scalars['Boolean']['output'];
  /** ID of the main product in this group */
  mainProductId: Scalars['Int']['output'];
  /** Variant group name */
  name: Scalars['String']['output'];
  /** Variant group ID */
  variantGroupId: Scalars['Int']['output'];
  /** Group variants */
  variants?: Maybe<Array<Maybe<VariantType>>>;
};

/** Type containing variant information */
type VariantType = {
  __typename?: 'VariantType';
  /** Alias for variant selection. e.g. 'product-4' */
  alias?: Maybe<Scalars['String']['output']>;
  /** Variant attributes */
  attributes?: Maybe<Array<Maybe<VariantAttributeType>>>;
  /** Canonical URL. Only available for the 'product'-level */
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** Variant dimension */
  dimension: Scalars['String']['output'];
  /** Incoming date */
  incoming?: Maybe<Scalars['DateTime']['output']>;
  /** Variant label */
  label?: Maybe<Scalars['String']['output']>;
  /** Level of this variant. Lower value is a more accurate selection */
  level: Scalars['Int']['output'];
  /** Variant name */
  name?: Maybe<Scalars['String']['output']>;
  /** The primary image used for the product. Only available for the 'product'-level */
  primaryImage?: Maybe<Scalars['String']['output']>;
  /** Product ID associated with this variant */
  productId: Scalars['Int']['output'];
  /** Shelf */
  shelf?: Maybe<Scalars['String']['output']>;
  /** SKU ID associated with this variant */
  skuId?: Maybe<Scalars['Int']['output']>;
  /** Stock information for variant */
  stock?: Maybe<StockType>;
  /** Variant type. In order of accuracy 'sku', 'product', 'selection' */
  type: Scalars['String']['output'];
  /** Variant value */
  value?: Maybe<Scalars['String']['output']>;
  /** List of variants for this variant */
  variants?: Maybe<Array<Maybe<VariantType>>>;
};

/** Type containing variant value information */
type VariantValueType = {
  __typename?: 'VariantValueType';
  /** Label */
  label: Scalars['String']['output'];
  /** Value */
  value: Scalars['String']['output'];
};

/** Type containing VAT group information */
type VatGroupType = {
  __typename?: 'VatGroupType';
  /** VAT amount */
  amount: Scalars['Decimal']['output'];
  /** VAT rate */
  rate: Scalars['Int']['output'];
};

type CartQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
}>;


type CartQuery = { __typename?: 'GeinsMerchantApiQuery', getCart?: { __typename?: 'CartType', id?: string | null, items?: Array<{ __typename: 'CartItemType', id: string, skuId: number, quantity: number, groupKey?: string | null, product?: { __typename?: 'ProductType', productId: number, name?: string | null, articleNumber?: string | null, categoryId: number, canonicalUrl?: string | null, type?: string | null, skus?: Array<{ __typename?: 'SkuType', skuId: number, weight: number, productId: number, articleNumber: string, externalId?: string | null, gtin?: string | null, name?: string | null, shelf?: string | null, incoming?: any | null, stock?: { __typename?: 'StockType', totalStock: number, inStock: number, oversellable: number, static?: number | null } | null, dimensions?: { __typename?: 'DimensionsType', length: number, width: number, height: number } | null } | null> | null, brand?: { __typename?: 'BrandType', brandId: number } | null, categories?: Array<{ __typename?: 'CategoryType', categoryId: number, name: string, alias?: string | null, description?: string | null } | null> | null, unitPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, sellingPriceExVat: any, vatFormatted?: string | null, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null, productImages?: Array<{ __typename?: 'ProductImageType', fileName: string, tags?: Array<string | null> | null } | null> | null, parameterGroups?: Array<{ __typename?: 'ParameterGroupType', parameterGroupId?: number | null, parameters?: Array<{ __typename?: 'ParameterType', parameterValueId?: number | null, facetId?: string | null, identifier?: string | null, type?: string | null, name?: string | null, value?: string | null } | null> | null } | null> | null } | null, totalPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, regularPriceIncVatFormatted?: string | null, sellingPriceExVat: any } | null, unitPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null } | null> | null } | null };

type AddToCartMutationVariables = Exact<{
  id: Scalars['String']['input'];
  item: CartItemInputType;
  marketId?: InputMaybe<Scalars['String']['input']>;
}>;


type AddToCartMutation = { __typename?: 'GeinsMerchantApiMutation', addToCart?: { __typename?: 'CartType', id?: string | null, items?: Array<{ __typename: 'CartItemType', id: string, skuId: number, quantity: number, groupKey?: string | null, product?: { __typename?: 'ProductType', productId: number, name?: string | null, articleNumber?: string | null, categoryId: number, canonicalUrl?: string | null, type?: string | null, skus?: Array<{ __typename?: 'SkuType', skuId: number, weight: number, productId: number, articleNumber: string, externalId?: string | null, gtin?: string | null, name?: string | null, shelf?: string | null, incoming?: any | null, stock?: { __typename?: 'StockType', totalStock: number, inStock: number, oversellable: number, static?: number | null } | null, dimensions?: { __typename?: 'DimensionsType', length: number, width: number, height: number } | null } | null> | null, brand?: { __typename?: 'BrandType', brandId: number } | null, categories?: Array<{ __typename?: 'CategoryType', categoryId: number, name: string, alias?: string | null, description?: string | null } | null> | null, unitPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, sellingPriceExVat: any, vatFormatted?: string | null, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null, productImages?: Array<{ __typename?: 'ProductImageType', fileName: string, tags?: Array<string | null> | null } | null> | null, parameterGroups?: Array<{ __typename?: 'ParameterGroupType', parameterGroupId?: number | null, parameters?: Array<{ __typename?: 'ParameterType', parameterValueId?: number | null, facetId?: string | null, identifier?: string | null, type?: string | null, name?: string | null, value?: string | null } | null> | null } | null> | null } | null, totalPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, regularPriceIncVatFormatted?: string | null, sellingPriceExVat: any } | null, unitPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null } | null> | null } | null };

type UpdateCartItemMutationVariables = Exact<{
  id: Scalars['String']['input'];
  item: CartItemInputType;
  marketId?: InputMaybe<Scalars['String']['input']>;
}>;


type UpdateCartItemMutation = { __typename?: 'GeinsMerchantApiMutation', updateCartItem?: { __typename?: 'CartType', id?: string | null, items?: Array<{ __typename: 'CartItemType', id: string, skuId: number, quantity: number, groupKey?: string | null, product?: { __typename?: 'ProductType', productId: number, name?: string | null, articleNumber?: string | null, categoryId: number, canonicalUrl?: string | null, type?: string | null, skus?: Array<{ __typename?: 'SkuType', skuId: number, weight: number, productId: number, articleNumber: string, externalId?: string | null, gtin?: string | null, name?: string | null, shelf?: string | null, incoming?: any | null, stock?: { __typename?: 'StockType', totalStock: number, inStock: number, oversellable: number, static?: number | null } | null, dimensions?: { __typename?: 'DimensionsType', length: number, width: number, height: number } | null } | null> | null, brand?: { __typename?: 'BrandType', brandId: number } | null, categories?: Array<{ __typename?: 'CategoryType', categoryId: number, name: string, alias?: string | null, description?: string | null } | null> | null, unitPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, sellingPriceExVat: any, vatFormatted?: string | null, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null, productImages?: Array<{ __typename?: 'ProductImageType', fileName: string, tags?: Array<string | null> | null } | null> | null, parameterGroups?: Array<{ __typename?: 'ParameterGroupType', parameterGroupId?: number | null, parameters?: Array<{ __typename?: 'ParameterType', parameterValueId?: number | null, facetId?: string | null, identifier?: string | null, type?: string | null, name?: string | null, value?: string | null } | null> | null } | null> | null } | null, totalPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, regularPriceIncVatFormatted?: string | null, sellingPriceExVat: any } | null, unitPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null } | null> | null } | null };

type ClearCartMutationVariables = Exact<{
  id: Scalars['String']['input'];
  marketId?: InputMaybe<Scalars['String']['input']>;
}>;


type ClearCartMutation = { __typename?: 'GeinsMerchantApiMutation', clearCart?: { __typename?: 'CartType', id?: string | null, items?: Array<{ __typename: 'CartItemType', id: string, skuId: number, quantity: number, groupKey?: string | null, product?: { __typename?: 'ProductType', productId: number, name?: string | null, articleNumber?: string | null, categoryId: number, canonicalUrl?: string | null, type?: string | null, skus?: Array<{ __typename?: 'SkuType', skuId: number, weight: number, productId: number, articleNumber: string, externalId?: string | null, gtin?: string | null, name?: string | null, shelf?: string | null, incoming?: any | null, stock?: { __typename?: 'StockType', totalStock: number, inStock: number, oversellable: number, static?: number | null } | null, dimensions?: { __typename?: 'DimensionsType', length: number, width: number, height: number } | null } | null> | null, brand?: { __typename?: 'BrandType', brandId: number } | null, categories?: Array<{ __typename?: 'CategoryType', categoryId: number, name: string, alias?: string | null, description?: string | null } | null> | null, unitPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, sellingPriceExVat: any, vatFormatted?: string | null, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null, productImages?: Array<{ __typename?: 'ProductImageType', fileName: string, tags?: Array<string | null> | null } | null> | null, parameterGroups?: Array<{ __typename?: 'ParameterGroupType', parameterGroupId?: number | null, parameters?: Array<{ __typename?: 'ParameterType', parameterValueId?: number | null, facetId?: string | null, identifier?: string | null, type?: string | null, name?: string | null, value?: string | null } | null> | null } | null> | null } | null, totalPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, regularPriceIncVatFormatted?: string | null, sellingPriceExVat: any } | null, unitPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null } | null> | null } | null };

type CartFragment = { __typename?: 'CartType', id?: string | null, items?: Array<{ __typename: 'CartItemType', id: string, skuId: number, quantity: number, groupKey?: string | null, product?: { __typename?: 'ProductType', productId: number, name?: string | null, articleNumber?: string | null, categoryId: number, canonicalUrl?: string | null, type?: string | null, skus?: Array<{ __typename?: 'SkuType', skuId: number, weight: number, productId: number, articleNumber: string, externalId?: string | null, gtin?: string | null, name?: string | null, shelf?: string | null, incoming?: any | null, stock?: { __typename?: 'StockType', totalStock: number, inStock: number, oversellable: number, static?: number | null } | null, dimensions?: { __typename?: 'DimensionsType', length: number, width: number, height: number } | null } | null> | null, brand?: { __typename?: 'BrandType', brandId: number } | null, categories?: Array<{ __typename?: 'CategoryType', categoryId: number, name: string, alias?: string | null, description?: string | null } | null> | null, unitPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, sellingPriceExVat: any, vatFormatted?: string | null, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null, productImages?: Array<{ __typename?: 'ProductImageType', fileName: string, tags?: Array<string | null> | null } | null> | null, parameterGroups?: Array<{ __typename?: 'ParameterGroupType', parameterGroupId?: number | null, parameters?: Array<{ __typename?: 'ParameterType', parameterValueId?: number | null, facetId?: string | null, identifier?: string | null, type?: string | null, name?: string | null, value?: string | null } | null> | null } | null> | null } | null, totalPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, regularPriceIncVatFormatted?: string | null, sellingPriceExVat: any } | null, unitPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null } | null> | null };

type AllGeinsChannelsQueryVariables = Exact<{ [key: string]: never; }>;


type AllGeinsChannelsQuery = { __typename?: 'GeinsMerchantApiQuery', channels?: Array<{ __typename?: 'ChannelType', id: string, name: string, type: string, defaultLanguageId: string, languages?: Array<{ __typename?: 'LanguageType', id: string, name: string, code: string } | null> | null, markets?: Array<{ __typename?: 'MarketType', id: string, country?: { __typename?: 'CountryType', name: string, code: string } | null, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null> | null } | null> | null };

type CheckoutQueryVariables = Exact<{
  orderId: Scalars['String']['input'];
  cartId?: InputMaybe<Scalars['String']['input']>;
  paymentType?: InputMaybe<PaymentType>;
}>;


type CheckoutQuery = { __typename?: 'GeinsMerchantApiQuery', checkout?: { __typename?: 'CheckoutDataType', htmlSnippet?: string | null, newCheckoutSession: boolean, completed?: boolean | null, order?: { __typename?: 'CheckoutOrderType', orderId?: string | null, currency?: string | null, status?: string | null } | null, cart?: { __typename?: 'CartType', id?: string | null } | null } | null };

type PlaceOrderMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
  checkout: CheckoutInputType;
  channelId?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
}>;


type PlaceOrderMutation = { __typename?: 'GeinsMerchantApiMutation', placeOrder?: { __typename?: 'PlaceOrderResponseType', orderId?: string | null, publicId?: string | null, redirectUrl?: string | null, status?: string | null } | null };

type AllGeinsProductsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
}>;


type AllGeinsProductsQuery = { __typename?: 'GeinsMerchantApiQuery', products?: { __typename?: 'ProductsResultType', count: any, products?: Array<{ __typename?: 'ProductType', productId: number, name?: string | null, articleNumber?: string | null, categoryId: number, canonicalUrl?: string | null, type?: string | null, skus?: Array<{ __typename?: 'SkuType', skuId: number, weight: number, productId: number, articleNumber: string, externalId?: string | null, gtin?: string | null, name?: string | null, shelf?: string | null, incoming?: any | null, stock?: { __typename?: 'StockType', totalStock: number, inStock: number, oversellable: number, static?: number | null } | null, dimensions?: { __typename?: 'DimensionsType', length: number, width: number, height: number } | null } | null> | null, brand?: { __typename?: 'BrandType', brandId: number } | null, categories?: Array<{ __typename?: 'CategoryType', categoryId: number, name: string, alias?: string | null, description?: string | null } | null> | null, unitPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, sellingPriceExVat: any, vatFormatted?: string | null, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null, productImages?: Array<{ __typename?: 'ProductImageType', fileName: string, tags?: Array<string | null> | null } | null> | null, parameterGroups?: Array<{ __typename?: 'ParameterGroupType', parameterGroupId?: number | null, parameters?: Array<{ __typename?: 'ParameterType', parameterValueId?: number | null, facetId?: string | null, identifier?: string | null, type?: string | null, name?: string | null, value?: string | null } | null> | null } | null> | null } | null> | null } | null };

type GeinsProductsByCategoryQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  categoryAlias?: InputMaybe<Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
}>;


type GeinsProductsByCategoryQuery = { __typename?: 'GeinsMerchantApiQuery', products?: { __typename?: 'ProductsResultType', count: any, products?: Array<{ __typename?: 'ProductType', productId: number, name?: string | null, articleNumber?: string | null, categoryId: number, canonicalUrl?: string | null, type?: string | null, skus?: Array<{ __typename?: 'SkuType', skuId: number, weight: number, productId: number, articleNumber: string, externalId?: string | null, gtin?: string | null, name?: string | null, shelf?: string | null, incoming?: any | null, stock?: { __typename?: 'StockType', totalStock: number, inStock: number, oversellable: number, static?: number | null } | null, dimensions?: { __typename?: 'DimensionsType', length: number, width: number, height: number } | null } | null> | null, brand?: { __typename?: 'BrandType', brandId: number } | null, categories?: Array<{ __typename?: 'CategoryType', categoryId: number, name: string, alias?: string | null, description?: string | null } | null> | null, unitPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, sellingPriceExVat: any, vatFormatted?: string | null, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null, productImages?: Array<{ __typename?: 'ProductImageType', fileName: string, tags?: Array<string | null> | null } | null> | null, parameterGroups?: Array<{ __typename?: 'ParameterGroupType', parameterGroupId?: number | null, parameters?: Array<{ __typename?: 'ParameterType', parameterValueId?: number | null, facetId?: string | null, identifier?: string | null, type?: string | null, name?: string | null, value?: string | null } | null> | null } | null> | null } | null> | null } | null };

type GeinsProductByArticleNoQueryVariables = Exact<{
  articleNumbers?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  marketId?: InputMaybe<Scalars['String']['input']>;
}>;


type GeinsProductByArticleNoQuery = { __typename?: 'GeinsMerchantApiQuery', products?: { __typename?: 'ProductsResultType', count: any, products?: Array<{ __typename?: 'ProductType', productId: number, name?: string | null, articleNumber?: string | null, categoryId: number, canonicalUrl?: string | null, type?: string | null, skus?: Array<{ __typename?: 'SkuType', skuId: number, weight: number, productId: number, articleNumber: string, externalId?: string | null, gtin?: string | null, name?: string | null, shelf?: string | null, incoming?: any | null, stock?: { __typename?: 'StockType', totalStock: number, inStock: number, oversellable: number, static?: number | null } | null, dimensions?: { __typename?: 'DimensionsType', length: number, width: number, height: number } | null } | null> | null, brand?: { __typename?: 'BrandType', brandId: number } | null, categories?: Array<{ __typename?: 'CategoryType', categoryId: number, name: string, alias?: string | null, description?: string | null } | null> | null, unitPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, sellingPriceExVat: any, vatFormatted?: string | null, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null, productImages?: Array<{ __typename?: 'ProductImageType', fileName: string, tags?: Array<string | null> | null } | null> | null, parameterGroups?: Array<{ __typename?: 'ParameterGroupType', parameterGroupId?: number | null, parameters?: Array<{ __typename?: 'ParameterType', parameterValueId?: number | null, facetId?: string | null, identifier?: string | null, type?: string | null, name?: string | null, value?: string | null } | null> | null } | null> | null } | null> | null } | null };

type ProductFragment = { __typename?: 'ProductType', productId: number, name?: string | null, articleNumber?: string | null, categoryId: number, canonicalUrl?: string | null, type?: string | null, skus?: Array<{ __typename?: 'SkuType', skuId: number, weight: number, productId: number, articleNumber: string, externalId?: string | null, gtin?: string | null, name?: string | null, shelf?: string | null, incoming?: any | null, stock?: { __typename?: 'StockType', totalStock: number, inStock: number, oversellable: number, static?: number | null } | null, dimensions?: { __typename?: 'DimensionsType', length: number, width: number, height: number } | null } | null> | null, brand?: { __typename?: 'BrandType', brandId: number } | null, categories?: Array<{ __typename?: 'CategoryType', categoryId: number, name: string, alias?: string | null, description?: string | null } | null> | null, unitPrice?: { __typename?: 'PriceType', sellingPriceIncVat: any, sellingPriceExVat: any, vatFormatted?: string | null, currency?: { __typename?: 'CurrencyType', name: string, symbol: string, code: string, rate: any } | null } | null, productImages?: Array<{ __typename?: 'ProductImageType', fileName: string, tags?: Array<string | null> | null } | null> | null, parameterGroups?: Array<{ __typename?: 'ParameterGroupType', parameterGroupId?: number | null, parameters?: Array<{ __typename?: 'ParameterType', parameterValueId?: number | null, facetId?: string | null, identifier?: string | null, type?: string | null, name?: string | null, value?: string | null } | null> | null } | null> | null };
