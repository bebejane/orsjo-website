
declare module '*/file.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const FileUpdate: DocumentNode;
export const FileDelete: DocumentNode;
export const Files: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/product.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AddProduct: DocumentNode;
export const UpdateProduct: DocumentNode;
export const ProductUpdate: DocumentNode;
export const ProductVariantsBulkCreate: DocumentNode;
export const ProductVariantsBulkUpdate: DocumentNode;
export const ProductVariantDetachMedia: DocumentNode;
export const ProductVariantAppendMedia: DocumentNode;
export const ProductVariantsBulkDelete: DocumentNode;
export const RemoveProduct: DocumentNode;
export const AllShopifyAdminProducts: DocumentNode;
export const ProductMediaDelete: DocumentNode;
export const ShopifyAdminProduct: DocumentNode;
export const ShopifyAdminProductMediaStatus: DocumentNode;
export const ProductLightFragment: DocumentNode;
export const ProductFragment: DocumentNode;
export const ProductVariantFragment: DocumentNode;
export const UserErrorFragment: DocumentNode;

  export default defaultDocument;
}
    