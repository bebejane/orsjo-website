import { apiQuery, SEOQuery } from "/lib/dato/api";
import initializeBasicAuth from 'nextjs-basic-auth'
//const basicAuthCheck = initializeBasicAuth({users: [{user:process.env.DATOCMS_WEBHOOK_USERNAME, password:process.env.DATOCMS_WEBHOOK_PASSWORD}]})

export default function withGlobalProps(opt = {}, callback){
  
  callback = typeof opt === 'function' ? opt : callback;

  const revalidate = parseInt(process.env.REVALIDATE_TIME || 60)
  const queries = []
  
  if(opt.query) 
    queries.push(opt.query)
  if(Array.isArray(opt.queries))
    queries.push.apply(queries, opt.queries)
  if(opt.model) 
    queries.push(SEOQuery(opt.model))

  return async (context) => {    
    
    //if(context.req) await basicAuthCheck(context.req, context.res)

    const props = await apiQuery(queries, {}, context.preview);
    
    if(callback)
      return await callback({context, props: {...props }, revalidate});
    else
      return { props:{...props }, context, revalidate};
  }
}

