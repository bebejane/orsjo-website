
declare module '*/cart.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Cart: DocumentNode;
export const AddToCart: DocumentNode;
export const UpdateCartItem: DocumentNode;
export const ClearCart: DocumentNode;
export const CartFragment: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/channels.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AllGeinsChannels: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/checkout.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Checkout: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/order.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const PlaceOrder: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/product.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AllGeinsProducts: DocumentNode;
export const GeinsProductsByCategory: DocumentNode;
export const GeinsProductByArticleNo: DocumentNode;
export const ProductFragment: DocumentNode;

  export default defaultDocument;
}
    