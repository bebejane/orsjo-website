import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
<<<<<<< HEAD
import { ProjectDocument, AllProjectsDocument, AllRelatedProjectsDocument, BespokeThumbnailDocument } from '@/graphql';
=======
import {
	ProjectDocument,
	AllProjectsDocument,
	AllRelatedProjectsDocument,
	BespokeThumbnailDocument,
} from '@/graphql';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
import { Section, FeaturedGallery } from '@/components';
import ProjectHeader from './ProjectHeader';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import ProjectGallery from './ProjectGallery';
<<<<<<< HEAD
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';

export type BespokeThumbnailRecord = Pick<BespokeRecord, 'thumbnail' | 'secondaryThumbnail'>;

export default async function Project({ params }: PageProps<'/[locale]/professionals/projects/[project]'>) {
=======
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';
import { DraftMode } from 'next-dato-utils/components';

export type BespokeThumbnailRecord = Pick<BespokeRecord, 'thumbnail' | 'secondaryThumbnail'>;

export default async function Project({
	params,
}: PageProps<'/[locale]/professionals/projects/[project]'>) {
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	const { locale, project: slug } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

<<<<<<< HEAD
	const { project } = await apiQuery(ProjectDocument, {
=======
	const { project, draftUrl } = await apiQuery(ProjectDocument, {
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		variables: { slug },
	});

	if (!project) return notFound();

<<<<<<< HEAD
	const [{ bespokeThumbnail }, { allProjects: allRelatedProjects }] = await Promise.all([
=======
	const [
		{ bespokeThumbnail, draftUrl: bespokeThumbnailDraftUrl },
		{ allProjects: allRelatedProjects, draftUrl: relatedProjectsDraftUrl },
	] = await Promise.all([
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		apiQuery(BespokeThumbnailDocument),
		apiQuery(AllRelatedProjectsDocument, {
			variables: { projectType: project.projectType.id },
		}),
	]);

<<<<<<< HEAD
=======
	const draftUrls: (string | null)[] = [
		draftUrl,
		bespokeThumbnailDraftUrl,
		relatedProjectsDraftUrl,
	];

>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	const relatedProjects = allRelatedProjects
		.filter((p) => p.id !== project.id)
		.sort((a, b) => (Math.random() > 0.5 ? 1 : -1));

	const isOtherProject = project.projectType?.title.toLowerCase() === 'other';
	const relatedHeadline = !isOtherProject
		? `Other ${project.projectType.titlePlural.toLowerCase()}`
		: 'Related projects';

	// Add bespoke link to related products if project is bespoke.
	const bespokeProduct = {
		__typename: 'ProfessionalRecord',
		title: 'Bespoke',
		image: bespokeThumbnail?.thumbnail,
		environmentImage: bespokeThumbnail?.secondaryThumbnail,
		slug: `bespoke`,
	} as unknown as ProductRecord;

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
<<<<<<< HEAD
=======
			<DraftMode url={draftUrls} path={`/professionals/projects/${slug}`} />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		</>
	);
}

export async function generateStaticParams() {
	const { allProjects } = await apiQuery(AllProjectsDocument, {
		all: true,
	});
	const paths = allProjects.map(({ slug }) => ({ project: slug }));
	return paths;
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/professionals/projects/[project]'>): Promise<Metadata> {
	const { project: slug } = await params;
	const { project } = await apiQuery(ProjectDocument, {
		variables: { slug },
	});
	if (!project) return notFound();
	return await buildMetadata({
		title: project.title,
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/professionals/projects/${slug}`,
		image: project.image as FileField,
	});
}
