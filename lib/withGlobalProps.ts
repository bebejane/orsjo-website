import { apiQuery, SEOQuery } from 'dato-nextjs-utils/api';
import type { TypedDocumentNode } from "@apollo/client";
import type { GetServerSideProps, GetStaticProps } from 'next'
import { GlobalDocument } from "@/graphql";
import { buildMenu } from '@/lib/menu'

export default function withGlobalProps(opt: any, callback: Function): GetStaticProps | GetServerSideProps {

  const revalidate: number = parseInt(process.env.REVALIDATE_TIME)
  const queries: TypedDocumentNode[] = [GlobalDocument]
  const variables = opt.variables || {}

  if (opt.query)
    queries.push(opt.query)
  if (opt.queries)
    queries.push.apply(queries, opt.queries)
  if (opt.seo)
    queries.push(SEOQuery(opt.seo))

  return async (context) => {

    const res = await Promise.all([
      buildMenu(),
      apiQuery(queries, { variables, preview: context.preview ? true : false })
    ])

    const menu = res[0];
    const props = res[1];

    props.preview = context.preview ? true : false

    if (callback)
      return await callback({ context, props: { ...props, menu }, revalidate });
    else
      return { props: { ...props, menu }, context, revalidate };
  }
}