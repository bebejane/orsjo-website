
declare module '*/market.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AllGeinsChannels: DocumentNode;

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
    