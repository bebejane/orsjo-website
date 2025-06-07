
declare module '*/product.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AddProduct: DocumentNode;
export const UpdateProduct: DocumentNode;
export const ProductUpdate: DocumentNode;
export const ProductDelete: DocumentNode;
export const ProductVariantsBulkCreate: DocumentNode;
export const ProductVariantsBulkUpdate: DocumentNode;
export const RemoveProduct: DocumentNode;
export const AllShopifyProducts: DocumentNode;
export const ShopifyProduct: DocumentNode;
export const ProductFragment: DocumentNode;
export const ProductVariantFragment: DocumentNode;
export const UserErrorFragment: DocumentNode;

  export default defaultDocument;
}
    