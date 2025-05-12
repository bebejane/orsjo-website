
declare module '*/cart.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Cart: DocumentNode;
export const CreateCart: DocumentNode;
export const CartBuyerIdentityUpdate: DocumentNode;
export const AddItemToCart: DocumentNode;
export const RemoveItemFromCart: DocumentNode;
export const UpdateItemFromCart: DocumentNode;
export const CartFragment: DocumentNode;
export const CartErrorsFragment: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/collection.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AllShopifyCollections: DocumentNode;
export const ShopifyCollection: DocumentNode;
export const CollectionFragment: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/customer.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Customer: DocumentNode;
export const CustomerFull: DocumentNode;
export const CustomerOrders: DocumentNode;
export const CustomerCreate: DocumentNode;
export const CustomerAccessTokenCreate: DocumentNode;
export const CustomerAccessTokenDelete: DocumentNode;
export const CustomerFragment: DocumentNode;
export const CustomerFragmentLight: DocumentNode;
export const CustomerOrderFragment: DocumentNode;
export const CustomerErrorsFragment: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/UserErrorsFragment.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const UserErrorsFragment: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/localization.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Localization: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/product.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AllShopifyProducts: DocumentNode;
export const ShopifyProduct: DocumentNode;
export const ShopifyVariant: DocumentNode;
export const ProductFragment: DocumentNode;
export const ProductVariantFragment: DocumentNode;

  export default defaultDocument;
}
    