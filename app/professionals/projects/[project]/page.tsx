import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import {
	ProjectDocument,
	AllProjectsDocument,
	AllRelatedProjectsDocument,
	BespokeThumbnailDocument,
} from '@/graphql';
import { PageProps } from '@/lib/context/page';
import { Section, FeaturedGallery } from '@/components';
import ProjectHeader from '@app/professionals/projects/[project]/ProjectHeader';
import { notFound } from '@node_modules/next/navigation';
import ProjectGallery from '@app/professionals/projects/[project]/ProjectGallery';

export type BespokeThumbnailRecord = Pick<BespokeRecord, 'thumbnail' | 'secondaryThumbnail'>;

export type ProjectProps = {
	params: Promise<{
		project: string;
	}>;
};

export default async function Project({ params }: ProjectProps) {
	const { project: slug } = await params;
	const { project } = await apiQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, {
		variables: { slug },
	});

	if (!project) return notFound();

	const [{ bespokeThumbnail }, { allProjects: allRelatedProjects }] = await Promise.all([
		apiQuery<BespokeThumbnailQuery, BespokeThumbnailQueryVariables>(BespokeThumbnailDocument),
		apiQuery<AllRelatedProjectsQuery, AllRelatedProjectsQueryVariables>(
			AllRelatedProjectsDocument,
			{
				variables: { projectType: project.projectType.id },
			}
		),
	]);

	const relatedProjects = allRelatedProjects
		.filter((p) => p.id !== project.id)
		.sort((a, b) => (Math.random() > 0.5 ? 1 : -1));

	const isOtherProject = project.projectType?.title.toLowerCase() === 'other';
	const relatedHeadline = !isOtherProject
		? `Other ${project.projectType.titlePlural.toLowerCase()}`
		: 'Related projects';

	// Add bespoke link to related products if project is bespoke.
	const bespokeProduct = {
		title: 'Bespoke',
		image: bespokeThumbnail?.thumbnail,
		environmentImage: bespokeThumbnail?.secondaryThumbnail,
		slug: '/professionals/bespoke',
	} as ProductRecord;

	const relatedProducts = project.bespoke
		? //@ts-ignore
			project.relatedProducts.concat([bespokeProduct])
		: project.relatedProducts;

	return (
		<>
			<ProjectHeader project={project} bespokeThumbnail={bespokeThumbnail} />
			<ProjectGallery project={project} />
			<Section bottom={true} />
			{(relatedProducts.length > 0 || relatedProjects.length > 0) && (
				<Section className={s.related} name={'Related'} bgColor={'--mid-gray'} fadeColor={'--gray'}>
					{relatedProducts.length > 0 && (
						<div className={s.gallery}>
							<FeaturedGallery
								id='relatedProducts'
								headline={'Products'}
								items={relatedProducts as ProductRecord[]}
								theme='light'
								fadeColor={'--mid-gray'}
							/>
						</div>
					)}
					{relatedProjects.length > 0 && (
						<div className={s.gallery}>
							<FeaturedGallery
								id='relatedProjects'
								headline={relatedHeadline}
								items={relatedProjects as ProjectRecord[]}
								theme='light'
								fadeColor={'--mid-gray'}
							/>
						</div>
					)}
				</Section>
			)}
		</>
	);
}

Project.page = { layout: 'normal', color: '--gray', menu: 'inverted' } as PageProps;

export async function generateStaticParams() {
	const { allProjects } = await apiQuery<AllProjectsQuery, AllProjectsQueryVariables>(
		AllProjectsDocument,
		{ all: true }
	);
	const paths = allProjects.map(({ slug }) => ({ project: slug }));
	return paths;
}
