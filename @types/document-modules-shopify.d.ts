
declare module '*/cart.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Cart: DocumentNode;
export const CreateCart: DocumentNode;
export const AddItemToCart: DocumentNode;
export const RemoveItemFromCart: DocumentNode;
export const UpdateItemFromCart: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/customer.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CustomerCreate: DocumentNode;
export const CustomerAccessTokenCreate: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/CartFragment.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CartFragment: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/CustomerFragment.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CustomerFragment: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/CustomerLightFragment.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CustomerLightFragment: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/ShopifyProductFragment.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ShopifyProductFragment: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/UserErrorsFragment.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const UserErrorsFragment: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/product.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AllShopifyProducts: DocumentNode;
export const ShopifyProduct: DocumentNode;

  export default defaultDocument;
}
    