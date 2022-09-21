import { apiQuery, SEOQuery } from "./dato/api";
import { TypedDocumentNode } from "@apollo/client";
import { GetServerSideProps, GetStaticProps } from 'next'
import { GlobalDocument } from "/graphql";
import { buildMenu } from '/lib/menu'

export default function withGlobalProps(opt: any , callback : Function) : GetStaticProps | GetServerSideProps {
  
  const revalidate : number = parseInt(process.env.REVALIDATE_TIME)
  const queries: TypedDocumentNode[] = [GlobalDocument]
  const variables = opt.variables || {}

  if(opt.query) 
    queries.push(opt.query)
  if(opt.queries) 
    queries.push.apply(queries, opt.queries)
  if(opt.model) 
    queries.push(SEOQuery(opt.model))
  
  return async (context) => {
    
    const props = await apiQuery(queries, { variables, preview: context.preview ? true : false});
    const menu =  buildMenu(props);

    if(callback)
      return await callback({context, props: {...props, menu}, revalidate});
    else
      return { props:{...props, menu}, context, revalidate};
  }
}