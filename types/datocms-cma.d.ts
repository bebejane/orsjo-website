import type { ItemTypeDefinition } from '@datocms/cma-client';

type EnvironmentSettings = {
  locales: 'en' | 'sv' | 'no' | 'da' | 'en-GB';
};

export type About = ItemTypeDefinition<
  EnvironmentSettings,
  '1996033',
  {
    title: {
      type: 'text';
    };
    intro: {
      type: 'text';
    };
    video: {
      type: 'file';
    };
    sections: {
      type: 'rich_text';
      blocks: AboutSection;
    };
  }
>;
export const About = {
  ID: '1996033',
  REF: { type: 'item_type', id: '1996033' },
} as const;

export type AboutSection = ItemTypeDefinition<
  EnvironmentSettings,
  '1996034',
  {
    text: {
      type: 'text';
    };
    video: {
      type: 'file';
    };
  }
>;
export const AboutSection = {
  ID: '1996034',
  REF: { type: 'item_type', id: '1996034' },
} as const;

export type Accessory = ItemTypeDefinition<
  EnvironmentSettings,
  '1801309',
  {
    accessory: {
      type: 'link';
    };
  }
>;
export const Accessory = {
  ID: '1801309',
  REF: { type: 'item_type', id: '1801309' },
} as const;

export type Bespoke = ItemTypeDefinition<
  EnvironmentSettings,
  '1996016',
  {
    thumbnail: {
      type: 'file';
    };
    secondary_thumbnail: {
      type: 'file';
    };
    title: {
      type: 'string';
    };
    intro: {
      type: 'text';
    };
    outro: {
      type: 'text';
    };
    examples: {
      type: 'rich_text';
      blocks: BespokeProject;
    };
    image: {
      type: 'file';
    };
  }
>;
export const Bespoke = {
  ID: '1996016',
  REF: { type: 'item_type', id: '1996016' },
} as const;

export type BespokeProject = ItemTypeDefinition<
  EnvironmentSettings,
  '1996017',
  {
    summary: {
      type: 'text';
    };
    project: {
      type: 'link';
    };
  }
>;
export const BespokeProject = {
  ID: '1996017',
  REF: { type: 'item_type', id: '1996017' },
} as const;

export type Catalogue = ItemTypeDefinition<
  EnvironmentSettings,
  '2010205',
  {
    pdf: {
      type: 'file';
    };
    thumbnail: {
      type: 'file';
    };
    title: {
      type: 'string';
    };
  }
>;
export const Catalogue = {
  ID: '2010205',
  REF: { type: 'item_type', id: '2010205' },
} as const;

export type ColorMaterial = ItemTypeDefinition<
  EnvironmentSettings,
  '2011957',
  {
    image: {
      type: 'file';
    };
    description: {
      type: 'string';
    };
    category: {
      type: 'link';
    };
    position: {
      type: 'integer';
    };
  }
>;
export const ColorMaterial = {
  ID: '2011957',
  REF: { type: 'item_type', id: '2011957' },
} as const;

export type ColorMaterialIntro = ItemTypeDefinition<
  EnvironmentSettings,
  '2011967',
  {
    intro: {
      type: 'text';
    };
  }
>;
export const ColorMaterialIntro = {
  ID: '2011967',
  REF: { type: 'item_type', id: '2011967' },
} as const;

export type ColorMaterialType = ItemTypeDefinition<
  EnvironmentSettings,
  '2011958',
  {
    category: {
      type: 'string';
    };
    category_plural: {
      type: 'string';
    };
    position: {
      type: 'integer';
    };
  }
>;
export const ColorMaterialType = {
  ID: '2011958',
  REF: { type: 'item_type', id: '2011958' },
} as const;

export type Contact = ItemTypeDefinition<
  EnvironmentSettings,
  '1996025',
  {
    title: {
      type: 'string';
    };
    intro: {
      type: 'text';
    };
    address: {
      type: 'text';
    };
    phone: {
      type: 'string';
    };
    email: {
      type: 'string';
    };
    showroom_intro: {
      type: 'text';
    };
    contact_form_message: {
      type: 'text';
    };
    image: {
      type: 'file';
    };
  }
>;
export const Contact = {
  ID: '1996025',
  REF: { type: 'item_type', id: '1996025' },
} as const;

export type Country = ItemTypeDefinition<
  EnvironmentSettings,
  '1990287',
  {
    name: {
      type: 'string';
      localized: true;
    };
  }
>;
export const Country = {
  ID: '1990287',
  REF: { type: 'item_type', id: '1990287' },
} as const;

export type Currency = ItemTypeDefinition<
  EnvironmentSettings,
  'XvpmvBqzR9-ogxmiWRp4lA',
  {
    iso_code: {
      type: 'string';
      localized: true;
    };
    symbol: {
      type: 'string';
      localized: true;
    };
    surcharge: {
      type: 'float';
      localized: true;
    };
    rate: {
      type: 'float';
      localized: true;
    };
    rate_deduction: {
      type: 'float';
      localized: true;
    };
    vat_rate: {
      type: 'float';
      localized: true;
    };
  }
>;
export const Currency = {
  ID: 'XvpmvBqzR9-ogxmiWRp4lA',
  REF: { type: 'item_type', id: 'XvpmvBqzR9-ogxmiWRp4lA' },
} as const;

export type DeliveryTerm = ItemTypeDefinition<
  EnvironmentSettings,
  'MpT9ez-DTdmZphlxNcx89w',
  {
    iso_code: {
      type: 'string';
    };
    text: {
      type: 'string';
    };
  }
>;
export const DeliveryTerm = {
  ID: 'MpT9ez-DTdmZphlxNcx89w',
  REF: { type: 'item_type', id: 'MpT9ez-DTdmZphlxNcx89w' },
} as const;

export type DeliveryTime = ItemTypeDefinition<
  EnvironmentSettings,
  'IPuZ-SmgQb6d2NyNn3dDYA',
  {
    time: {
      type: 'string';
    };
    text: {
      type: 'string';
    };
    text_short: {
      type: 'string';
    };
  }
>;
export const DeliveryTime = {
  ID: 'IPuZ-SmgQb6d2NyNn3dDYA',
  REF: { type: 'item_type', id: 'IPuZ-SmgQb6d2NyNn3dDYA' },
} as const;

export type Designer = ItemTypeDefinition<
  EnvironmentSettings,
  '1801302',
  {
    image: {
      type: 'file';
    };
    name: {
      type: 'string';
    };
    description: {
      type: 'text';
      localized: true;
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const Designer = {
  ID: '1801302',
  REF: { type: 'item_type', id: '1801302' },
} as const;

export type Distributor = ItemTypeDefinition<
  EnvironmentSettings,
  '1990316',
  {
    name: {
      type: 'string';
    };
    address: {
      type: 'text';
    };
    postal_code: {
      type: 'string';
    };
    city: {
      type: 'string';
    };
    country: {
      type: 'link';
    };
    contact_name: {
      type: 'string';
    };
    phone: {
      type: 'string';
    };
    email: {
      type: 'string';
    };
    url: {
      type: 'string';
    };
  }
>;
export const Distributor = {
  ID: '1990316',
  REF: { type: 'item_type', id: '1990316' },
} as const;

export type DownloadsStart = ItemTypeDefinition<
  EnvironmentSettings,
  '1996018',
  {
    title: {
      type: 'string';
    };
    intro: {
      type: 'text';
    };
  }
>;
export const DownloadsStart = {
  ID: '1996018',
  REF: { type: 'item_type', id: '1996018' },
} as const;

export type FactoryVisit = ItemTypeDefinition<
  EnvironmentSettings,
  '1996019',
  {
    title: {
      type: 'string';
    };
    intro: {
      type: 'text';
    };
  }
>;
export const FactoryVisit = {
  ID: '1996019',
  REF: { type: 'item_type', id: '1996019' },
} as const;

export type Faq = ItemTypeDefinition<
  EnvironmentSettings,
  '1995928',
  {
    question: {
      type: 'string';
    };
    answer: {
      type: 'text';
    };
    category: {
      type: 'link';
    };
  }
>;
export const Faq = {
  ID: '1995928',
  REF: { type: 'item_type', id: '1995928' },
} as const;

export type FaqCategory = ItemTypeDefinition<
  EnvironmentSettings,
  '1995929',
  {
    title: {
      type: 'string';
    };
  }
>;
export const FaqCategory = {
  ID: '1995929',
  REF: { type: 'item_type', id: '1995929' },
} as const;

export type FaqStart = ItemTypeDefinition<
  EnvironmentSettings,
  '1996031',
  {
    title: {
      type: 'string';
    };
    intro: {
      type: 'text';
    };
  }
>;
export const FaqStart = {
  ID: '1996031',
  REF: { type: 'item_type', id: '1996031' },
} as const;

export type Featured = ItemTypeDefinition<
  EnvironmentSettings,
  '1995909',
  {
    headline: {
      type: 'string';
    };
    items: {
      type: 'links';
    };
    show_mark_as_new: {
      type: 'boolean';
    };
  }
>;
export const Featured = {
  ID: '1995909',
  REF: { type: 'item_type', id: '1995909' },
} as const;

export type FeaturedStart = ItemTypeDefinition<
  EnvironmentSettings,
  '2001048',
  {
    headline: {
      type: 'string';
    };
    items: {
      type: 'links';
    };
  }
>;
export const FeaturedStart = {
  ID: '2001048',
  REF: { type: 'item_type', id: '2001048' },
} as const;

export type FullscreenMediaBlock = ItemTypeDefinition<
  EnvironmentSettings,
  '1995908',
  {
    sub_headline: {
      type: 'string';
    };
    headline: {
      type: 'string';
    };
    media: {
      type: 'file';
    };
    link_record: {
      type: 'link';
    };
    read_more: {
      type: 'string';
    };
    make_darker: {
      type: 'boolean';
    };
  }
>;
export const FullscreenMediaBlock = {
  ID: '1995908',
  REF: { type: 'item_type', id: '1995908' },
} as const;

export type FullscreenVideo = ItemTypeDefinition<
  EnvironmentSettings,
  '1995914',
  {
    video: {
      type: 'file';
    };
    text: {
      type: 'text';
    };
    link_text: {
      type: 'string';
    };
    link: {
      type: 'string';
    };
  }
>;
export const FullscreenVideo = {
  ID: '1995914',
  REF: { type: 'item_type', id: '1995914' },
} as const;

export type FullwidthImage = ItemTypeDefinition<
  EnvironmentSettings,
  '1995883',
  {
    image: {
      type: 'file';
    };
  }
>;
export const FullwidthImage = {
  ID: '1995883',
  REF: { type: 'item_type', id: '1995883' },
} as const;

export type ImageGallery = ItemTypeDefinition<
  EnvironmentSettings,
  '1995888',
  {
    gallery: {
      type: 'gallery';
    };
  }
>;
export const ImageGallery = {
  ID: '1995888',
  REF: { type: 'item_type', id: '1995888' },
} as const;

export type ImageLink = ItemTypeDefinition<
  EnvironmentSettings,
  '1995913',
  {
    first_image: {
      type: 'file';
    };
    first_headline: {
      type: 'string';
    };
    first_link_text: {
      type: 'string';
    };
    first_link: {
      type: 'string';
    };
    second_image: {
      type: 'file';
    };
    second_headline: {
      type: 'string';
    };
    second_link_text: {
      type: 'string';
    };
    second_link: {
      type: 'string';
    };
  }
>;
export const ImageLink = {
  ID: '1995913',
  REF: { type: 'item_type', id: '1995913' },
} as const;

export type Job = ItemTypeDefinition<
  EnvironmentSettings,
  '1995931',
  {
    title: {
      type: 'string';
    };
    summary: {
      type: 'text';
    };
    text: {
      type: 'text';
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const Job = {
  ID: '1995931',
  REF: { type: 'item_type', id: '1995931' },
} as const;

export type Lightsource = ItemTypeDefinition<
  EnvironmentSettings,
  '1801306',
  {
    lightsource: {
      type: 'link';
    };
    amount: {
      type: 'integer';
    };
    included: {
      type: 'boolean';
    };
    optional: {
      type: 'boolean';
    };
  }
>;
export const Lightsource = {
  ID: '1801306',
  REF: { type: 'item_type', id: '1801306' },
} as const;

export type Manual = ItemTypeDefinition<
  EnvironmentSettings,
  '1996032',
  {
    title: {
      type: 'string';
    };
    intro: {
      type: 'text';
    };
  }
>;
export const Manual = {
  ID: '1996032',
  REF: { type: 'item_type', id: '1996032' },
} as const;

export type News = ItemTypeDefinition<
  EnvironmentSettings,
  '1995930',
  {
    title: {
      type: 'string';
    };
    text: {
      type: 'text';
    };
    image: {
      type: 'file';
    };
    link_text: {
      type: 'string';
    };
    link: {
      type: 'string';
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const News = {
  ID: '1995930',
  REF: { type: 'item_type', id: '1995930' },
} as const;

export type NewsItem = ItemTypeDefinition<
  EnvironmentSettings,
  '2000409',
  {
    news: {
      type: 'link';
    };
  }
>;
export const NewsItem = {
  ID: '2000409',
  REF: { type: 'item_type', id: '2000409' },
} as const;

export type PolicyItem = ItemTypeDefinition<
  EnvironmentSettings,
  'Lb7Tyb33R8Gg9BCoPNlh7Q',
  {
    title: {
      type: 'string';
    };
    content: {
      type: 'structured_text';
    };
  }
>;
export const PolicyItem = {
  ID: 'Lb7Tyb33R8Gg9BCoPNlh7Q',
  REF: { type: 'item_type', id: 'Lb7Tyb33R8Gg9BCoPNlh7Q' },
} as const;

export type Press = ItemTypeDefinition<
  EnvironmentSettings,
  '1996306',
  {
    title: {
      type: 'string';
    };
    url: {
      type: 'string';
    };
  }
>;
export const Press = {
  ID: '1996306',
  REF: { type: 'item_type', id: '1996306' },
} as const;

export type Pricelist = ItemTypeDefinition<
  EnvironmentSettings,
  'Qxs8cA40RZGrdQp_bmFCZw',
  {
    cover: {
      type: 'file';
      localized: true;
    };
    cover_inc_vat: {
      type: 'file';
      localized: true;
    };
    current_pricelist: {
      type: 'file';
    };
    warranty: {
      type: 'file';
    };
    terms: {
      type: 'file';
    };
  }
>;
export const Pricelist = {
  ID: 'Qxs8cA40RZGrdQp_bmFCZw',
  REF: { type: 'item_type', id: 'Qxs8cA40RZGrdQp_bmFCZw' },
} as const;

export type PrivacyPolicy = ItemTypeDefinition<
  EnvironmentSettings,
  'ILTLuHlSTYOxmJRX2vu-ug',
  {
    title: {
      type: 'string';
    };
    intro: {
      type: 'string';
    };
    policies: {
      type: 'rich_text';
      blocks: PolicyItem;
    };
  }
>;
export const PrivacyPolicy = {
  ID: 'ILTLuHlSTYOxmJRX2vu-ug',
  REF: { type: 'item_type', id: 'ILTLuHlSTYOxmJRX2vu-ug' },
} as const;

export type Product = ItemTypeDefinition<
  EnvironmentSettings,
  '1801291',
  {
    categories: {
      type: 'links';
    };
    hide_in_pricelist: {
      type: 'boolean';
    };
    image: {
      type: 'file';
    };
    light_file: {
      type: 'file';
    };
    models: {
      type: 'rich_text';
      blocks: ProductModel;
    };
    color_images: {
      type: 'gallery';
    };
    environment_image: {
      type: 'file';
    };
    family: {
      type: 'link';
    };
    mounting_instructions: {
      type: 'file';
    };
    title: {
      type: 'string';
    };
    bim_file: {
      type: 'file';
    };
    designer: {
      type: 'link';
    };
    mark_as_new: {
      type: 'boolean';
    };
    pdf_file: {
      type: 'file';
      localized: true;
    };
    product_gallery: {
      type: 'rich_text';
      blocks: FullwidthImage | TwoColumnImage | Text | Video | ImageGallery;
    };
    additional_information: {
      type: 'string';
      localized: true;
    };
    bim_link: {
      type: 'string';
    };
    upcycled: {
      type: 'boolean';
    };
    description: {
      type: 'text';
      localized: true;
    };
    note: {
      type: 'text';
      localized: true;
    };
    electrical_data: {
      type: 'links';
    };
    sockets: {
      type: 'links';
    };
    dimmable: {
      type: 'link';
    };
    connection: {
      type: 'link';
    };
    mounting: {
      type: 'link';
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const Product = {
  ID: '1801291',
  REF: { type: 'item_type', id: '1801291' },
} as const;

export type ProductAccessory = ItemTypeDefinition<
  EnvironmentSettings,
  'ZU6qDmJWRnGkIqsGWmJa2A',
  {
    name: {
      type: 'string';
      localized: true;
    };
    article_no: {
      type: 'string';
    };
    price: {
      type: 'integer';
    };
    delivery_days: {
      type: 'string';
    };
    image: {
      type: 'file';
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const ProductAccessory = {
  ID: 'ZU6qDmJWRnGkIqsGWmJa2A',
  REF: { type: 'item_type', id: 'ZU6qDmJWRnGkIqsGWmJa2A' },
} as const;

export type ProductCategory = ItemTypeDefinition<
  EnvironmentSettings,
  '1801301',
  {
    name: {
      type: 'string';
      localized: true;
    };
    name_plural: {
      type: 'string';
      localized: true;
    };
    description: {
      type: 'text';
      localized: true;
    };
    position: {
      type: 'integer';
    };
  }
>;
export const ProductCategory = {
  ID: '1801301',
  REF: { type: 'item_type', id: '1801301' },
} as const;

export type ProductColor = ItemTypeDefinition<
  EnvironmentSettings,
  '1801296',
  {
    name: {
      type: 'string';
      localized: true;
    };
  }
>;
export const ProductColor = {
  ID: '1801296',
  REF: { type: 'item_type', id: '1801296' },
} as const;

export type ProductConnection = ItemTypeDefinition<
  EnvironmentSettings,
  '1801297',
  {
    name: {
      type: 'string';
      localized: true;
    };
  }
>;
export const ProductConnection = {
  ID: '1801297',
  REF: { type: 'item_type', id: '1801297' },
} as const;

export type ProductDimmable = ItemTypeDefinition<
  EnvironmentSettings,
  '1801305',
  {
    name: {
      type: 'string';
      localized: true;
    };
  }
>;
export const ProductDimmable = {
  ID: '1801305',
  REF: { type: 'item_type', id: '1801305' },
} as const;

export type ProductElectrical = ItemTypeDefinition<
  EnvironmentSettings,
  '1801303',
  {
    name: {
      type: 'string';
      localized: true;
    };
  }
>;
export const ProductElectrical = {
  ID: '1801303',
  REF: { type: 'item_type', id: '1801303' },
} as const;

export type ProductFamily = ItemTypeDefinition<
  EnvironmentSettings,
  '1801294',
  {
    name: {
      type: 'string';
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const ProductFamily = {
  ID: '1801294',
  REF: { type: 'item_type', id: '1801294' },
} as const;

export type ProductFeature = ItemTypeDefinition<
  EnvironmentSettings,
  '1801299',
  {
    name: {
      type: 'string';
      localized: true;
    };
  }
>;
export const ProductFeature = {
  ID: '1801299',
  REF: { type: 'item_type', id: '1801299' },
} as const;

export type ProductLightsource = ItemTypeDefinition<
  EnvironmentSettings,
  '1801292',
  {
    name: {
      type: 'string';
      localized: true;
    };
    article_no: {
      type: 'string';
    };
    price: {
      type: 'float';
    };
    delivery_days: {
      type: 'string';
    };
    image: {
      type: 'file';
    };
    eprel: {
      type: 'string';
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const ProductLightsource = {
  ID: '1801292',
  REF: { type: 'item_type', id: '1801292' },
} as const;

export type ProductMaterial = ItemTypeDefinition<
  EnvironmentSettings,
  '1801295',
  {
    name: {
      type: 'string';
      localized: true;
    };
  }
>;
export const ProductMaterial = {
  ID: '1801295',
  REF: { type: 'item_type', id: '1801295' },
} as const;

export type ProductMdm = ItemTypeDefinition<
  EnvironmentSettings,
  'PXOVw3q7Q4WSGpw_SpjzMg',
  {
    length: {
      type: 'float';
    };
    width: {
      type: 'float';
    };
    height: {
      type: 'float';
    };
    depth: {
      type: 'float';
    };
    diameter: {
      type: 'float';
    };
    lampshade_height: {
      type: 'float';
    };
    cable_length: {
      type: 'string';
    };
    lightsource_type: {
      type: 'string';
      localized: true;
    };
    ceiling_rose_color: {
      type: 'string';
      localized: true;
    };
    lamp_switch: {
      type: 'string';
      localized: true;
    };
    cable_color: {
      type: 'string';
      localized: true;
    };
    cable_type: {
      type: 'string';
      localized: true;
    };
    dimmable: {
      type: 'boolean';
    };
    dimmer_included: {
      type: 'boolean';
    };
    lightsource_exchangeable: {
      type: 'boolean';
    };
    ceiling_rose_included: {
      type: 'boolean';
    };
    lampshade_included: {
      type: 'boolean';
    };
  }
>;
export const ProductMdm = {
  ID: 'PXOVw3q7Q4WSGpw_SpjzMg',
  REF: { type: 'item_type', id: 'PXOVw3q7Q4WSGpw_SpjzMg' },
} as const;

export type ProductModel = ItemTypeDefinition<
  EnvironmentSettings,
  '1801307',
  {
    name: {
      type: 'link';
    };
    drawing: {
      type: 'file';
    };
    variants: {
      type: 'links';
    };
    lightsources: {
      type: 'rich_text';
      blocks: Lightsource;
    };
    accessories: {
      type: 'rich_text';
      blocks: Accessory;
    };
    master_data: {
      type: 'link';
    };
  }
>;
export const ProductModel = {
  ID: '1801307',
  REF: { type: 'item_type', id: '1801307' },
} as const;

export type ProductModelName = ItemTypeDefinition<
  EnvironmentSettings,
  '1801298',
  {
    name: {
      type: 'string';
      localized: true;
    };
  }
>;
export const ProductModelName = {
  ID: '1801298',
  REF: { type: 'item_type', id: '1801298' },
} as const;

export type ProductMounting = ItemTypeDefinition<
  EnvironmentSettings,
  '1801293',
  {
    name: {
      type: 'string';
      localized: true;
    };
  }
>;
export const ProductMounting = {
  ID: '1801293',
  REF: { type: 'item_type', id: '1801293' },
} as const;

export type ProductSocket = ItemTypeDefinition<
  EnvironmentSettings,
  '1801304',
  {
    name: {
      type: 'string';
    };
  }
>;
export const ProductSocket = {
  ID: '1801304',
  REF: { type: 'item_type', id: '1801304' },
} as const;

export type ProductStart = ItemTypeDefinition<
  EnvironmentSettings,
  '1996014',
  {
    featured: {
      type: 'rich_text';
      blocks: Featured;
    };
  }
>;
export const ProductStart = {
  ID: '1996014',
  REF: { type: 'item_type', id: '1996014' },
} as const;

export type ProductVariant = ItemTypeDefinition<
  EnvironmentSettings,
  'OMyMb5W4S2iyX6FONqm2eg',
  {
    article_no: {
      type: 'string';
    };
    color: {
      type: 'link';
    };
    material: {
      type: 'link';
    };
    feature: {
      type: 'link';
    };
    weight: {
      type: 'float';
    };
    volume: {
      type: 'float';
    };
    price: {
      type: 'float';
    };
    delivery_days: {
      type: 'string';
    };
    image: {
      type: 'file';
    };
    ean: {
      type: 'integer';
    };
  }
>;
export const ProductVariant = {
  ID: 'OMyMb5W4S2iyX6FONqm2eg',
  REF: { type: 'item_type', id: 'OMyMb5W4S2iyX6FONqm2eg' },
} as const;

export type Project = ItemTypeDefinition<
  EnvironmentSettings,
  '1995922',
  {
    image: {
      type: 'file';
    };
    secondary_image: {
      type: 'file';
    };
    title: {
      type: 'string';
    };
    location: {
      type: 'string';
    };
    project_type: {
      type: 'link';
    };
    bespoke: {
      type: 'boolean';
    };
    gallery: {
      type: 'rich_text';
      blocks: FullwidthImage | ImageGallery | TwoColumnImage | Text | Video;
    };
    related_products: {
      type: 'links';
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const Project = {
  ID: '1995922',
  REF: { type: 'item_type', id: '1995922' },
} as const;

export type ProjectStart = ItemTypeDefinition<
  EnvironmentSettings,
  '1996015',
  {
    title: {
      type: 'string';
    };
    intro: {
      type: 'text';
    };
  }
>;
export const ProjectStart = {
  ID: '1996015',
  REF: { type: 'item_type', id: '1996015' },
} as const;

export type ProjectType = ItemTypeDefinition<
  EnvironmentSettings,
  '1995924',
  {
    title: {
      type: 'string';
    };
    title_plural: {
      type: 'string';
    };
    position: {
      type: 'integer';
    };
  }
>;
export const ProjectType = {
  ID: '1995924',
  REF: { type: 'item_type', id: '1995924' },
} as const;

export type Reseller = ItemTypeDefinition<
  EnvironmentSettings,
  '1990290',
  {
    name: {
      type: 'string';
    };
    address: {
      type: 'text';
    };
    postal_code: {
      type: 'string';
    };
    city: {
      type: 'string';
    };
    country: {
      type: 'link';
    };
    url: {
      type: 'string';
    };
  }
>;
export const Reseller = {
  ID: '1990290',
  REF: { type: 'item_type', id: '1990290' },
} as const;

export type Shipping = ItemTypeDefinition<
  EnvironmentSettings,
  'RR7Vst1VRQuLYzJs9n6uZg',
  {
    delivery_days: {
      type: 'rich_text';
      blocks: DeliveryTime;
    };
    delivery_terms: {
      type: 'rich_text';
      blocks: DeliveryTerm;
    };
    delivery_terms_other: {
      type: 'string';
    };
  }
>;
export const Shipping = {
  ID: 'RR7Vst1VRQuLYzJs9n6uZg',
  REF: { type: 'item_type', id: 'RR7Vst1VRQuLYzJs9n6uZg' },
} as const;

export type Showroom = ItemTypeDefinition<
  EnvironmentSettings,
  '1996028',
  {
    city: {
      type: 'string';
    };
    address: {
      type: 'text';
    };
    additional: {
      type: 'text';
    };
    image: {
      type: 'file';
    };
    position: {
      type: 'integer';
    };
  }
>;
export const Showroom = {
  ID: '1996028',
  REF: { type: 'item_type', id: '1996028' },
} as const;

export type Social = ItemTypeDefinition<
  EnvironmentSettings,
  '2022630',
  {
    instagram: {
      type: 'json';
    };
  }
>;
export const Social = {
  ID: '2022630',
  REF: { type: 'item_type', id: '2022630' },
} as const;

export type Staff = ItemTypeDefinition<
  EnvironmentSettings,
  '1990321',
  {
    image: {
      type: 'file';
    };
    name: {
      type: 'string';
    };
    role: {
      type: 'string';
    };
    phone: {
      type: 'string';
    };
    email: {
      type: 'string';
    };
    position: {
      type: 'integer';
    };
  }
>;
export const Staff = {
  ID: '1990321',
  REF: { type: 'item_type', id: '1990321' },
} as const;

export type Start = ItemTypeDefinition<
  EnvironmentSettings,
  '1995907',
  {
    content: {
      type: 'rich_text';
      blocks:
        | FullscreenMediaBlock
        | ImageLink
        | FullscreenVideo
        | NewsItem
        | FeaturedStart;
    };
  }
>;
export const Start = {
  ID: '1995907',
  REF: { type: 'item_type', id: '1995907' },
} as const;

export type Sustainability = ItemTypeDefinition<
  EnvironmentSettings,
  '1996030',
  {
    title: {
      type: 'string';
    };
    intro: {
      type: 'text';
    };
    image: {
      type: 'file';
    };
    steps: {
      type: 'rich_text';
      blocks: SustainabilityStep;
    };
  }
>;
export const Sustainability = {
  ID: '1996030',
  REF: { type: 'item_type', id: '1996030' },
} as const;

export type SustainabilityStep = ItemTypeDefinition<
  EnvironmentSettings,
  '2000787',
  {
    title: {
      type: 'string';
    };
    text: {
      type: 'text';
    };
    media: {
      type: 'file';
    };
    full_width_image: {
      type: 'boolean';
    };
  }
>;
export const SustainabilityStep = {
  ID: '2000787',
  REF: { type: 'item_type', id: '2000787' },
} as const;

export type Term = ItemTypeDefinition<
  EnvironmentSettings,
  'FXlY1YXYQXCnlE6YrQ2K9w',
  {
    title: {
      type: 'string';
    };
    text: {
      type: 'structured_text';
    };
    category: {
      type: 'link';
    };
  }
>;
export const Term = {
  ID: 'FXlY1YXYQXCnlE6YrQ2K9w',
  REF: { type: 'item_type', id: 'FXlY1YXYQXCnlE6YrQ2K9w' },
} as const;

export type TermCategory = ItemTypeDefinition<
  EnvironmentSettings,
  'EFtwhOeaRRC1ZPgMYSmk3Q',
  {
    title: {
      type: 'string';
    };
  }
>;
export const TermCategory = {
  ID: 'EFtwhOeaRRC1ZPgMYSmk3Q',
  REF: { type: 'item_type', id: 'EFtwhOeaRRC1ZPgMYSmk3Q' },
} as const;

export type TermStart = ItemTypeDefinition<
  EnvironmentSettings,
  'aEtvaDzBSmOO5dNfhcSrlg',
  {
    title: {
      type: 'string';
    };
    intro: {
      type: 'text';
    };
  }
>;
export const TermStart = {
  ID: 'aEtvaDzBSmOO5dNfhcSrlg',
  REF: { type: 'item_type', id: 'aEtvaDzBSmOO5dNfhcSrlg' },
} as const;

export type Text = ItemTypeDefinition<
  EnvironmentSettings,
  '1995885',
  {
    text: {
      type: 'structured_text';
    };
  }
>;
export const Text = {
  ID: '1995885',
  REF: { type: 'item_type', id: '1995885' },
} as const;

export type Translation = ItemTypeDefinition<
  EnvironmentSettings,
  '1801300',
  {
    page: {
      type: 'string';
    };
    value: {
      type: 'string';
      localized: true;
    };
    key: {
      type: 'string';
    };
  }
>;
export const Translation = {
  ID: '1801300',
  REF: { type: 'item_type', id: '1801300' },
} as const;

export type TwoColumnImage = ItemTypeDefinition<
  EnvironmentSettings,
  '1995884',
  {
    first_image: {
      type: 'file';
    };
    last_image: {
      type: 'file';
    };
  }
>;
export const TwoColumnImage = {
  ID: '1995884',
  REF: { type: 'item_type', id: '1995884' },
} as const;

export type Video = ItemTypeDefinition<
  EnvironmentSettings,
  '1995887',
  {
    video: {
      type: 'file';
    };
  }
>;
export const Video = {
  ID: '1995887',
  REF: { type: 'item_type', id: '1995887' },
} as const;

export type WithdrawFromPurchase = ItemTypeDefinition<
  EnvironmentSettings,
  'Z-GQKCaFSGS6jrUPuBCDLA',
  {
    e_mail_text: {
      type: 'text';
    };
    title: {
      type: 'string';
    };
    intro: {
      type: 'text';
    };
  }
>;
export const WithdrawFromPurchase = {
  ID: 'Z-GQKCaFSGS6jrUPuBCDLA',
  REF: { type: 'item_type', id: 'Z-GQKCaFSGS6jrUPuBCDLA' },
} as const;

export type AnyBlock =
  | AboutSection
  | Accessory
  | BespokeProject
  | DeliveryTerm
  | DeliveryTime
  | Featured
  | FeaturedStart
  | FullscreenMediaBlock
  | FullscreenVideo
  | FullwidthImage
  | ImageGallery
  | ImageLink
  | Lightsource
  | NewsItem
  | PolicyItem
  | ProductModel
  | SustainabilityStep
  | Text
  | TwoColumnImage
  | Video;
export type AnyModel =
  | About
  | Bespoke
  | Catalogue
  | ColorMaterial
  | ColorMaterialIntro
  | ColorMaterialType
  | Contact
  | Country
  | Currency
  | Designer
  | Distributor
  | DownloadsStart
  | FactoryVisit
  | Faq
  | FaqCategory
  | FaqStart
  | Job
  | Manual
  | News
  | Press
  | Pricelist
  | PrivacyPolicy
  | Product
  | ProductAccessory
  | ProductCategory
  | ProductColor
  | ProductConnection
  | ProductDimmable
  | ProductElectrical
  | ProductFamily
  | ProductFeature
  | ProductLightsource
  | ProductMaterial
  | ProductMdm
  | ProductModelName
  | ProductMounting
  | ProductSocket
  | ProductStart
  | ProductVariant
  | Project
  | ProjectStart
  | ProjectType
  | Reseller
  | Shipping
  | Showroom
  | Social
  | Staff
  | Start
  | Sustainability
  | Term
  | TermCategory
  | TermStart
  | Translation
  | WithdrawFromPurchase;
export type AnyBlockOrModel = AnyBlock | AnyModel;
