import { apiQuery, SEOQuery } from "../dato/api";
import { GetServerSideProps, GetStaticProps } from 'next'
import { GetGlobal } from "/graphql";
import { DocumentNode } from 'graphql/language/ast';
import { generate } from '/lib/menu'

export default function withGlobalProps(opt: any , callback : Function) : GetStaticProps | GetServerSideProps {
  
  const revalidate : number = parseInt(process.env.REVALIDATE_TIME)
  const queries: [DocumentNode] = [GetGlobal]
  
  if(opt.query) 
    queries.push(opt.query)
  if(opt.queries) 
    queries.push.apply(queries, opt.queries)
  if(opt.model) 
    queries.push(SEOQuery(opt.model))
  
  return async (context) => {
    const props = await apiQuery(queries, { variables:{}, preview: context.preview ? true : false});
    const menu = await generate();

    if(callback)
      return await callback({context, props: {...props, menu}, revalidate});
    else
      return { props:{...props, menu}, context, revalidate};
  }
}