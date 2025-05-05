//import { AllProgramsDocument } from '@graphql';
//import { apiQuery } from 'next-dato-utils/api';
import { MetadataRoute } from 'next'

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },

]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  /*
  const { allPrograms } = await apiQuery<
    AllProgramsQuery,
    AllProgramsQueryVariables
  >(AllProgramsDocument, {
    all: true,
    tags: ['program', 'program_category'],
    variables: {
      first: 500,
      skip: 0,
    },
  });
*/
  return [
    ...staticRoutes,
  ] as MetadataRoute.Sitemap;
}