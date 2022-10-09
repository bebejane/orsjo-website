
declare module '*/cart.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Cart: DocumentNode;
export const createCart: DocumentNode;
export const addItemToCart: DocumentNode;
export const removeItemFromCart: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/customer.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const customerCreate: DocumentNode;
export const customerAccessTokenCreate: DocumentNode;

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
    

declare module '*/product.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AllShopifyProducts: DocumentNode;
export const ShopifyProduct: DocumentNode;

  export default defaultDocument;
}
    