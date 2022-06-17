import styles from './Designer.module.scss'
import { GetAllDesigners, GetDesigner } from '/graphql'
import { apiQuery } from '/lib/dato/api'
import { withGlobalProps } from '/lib/hoc'
import { Image } from 'react-datocms'

export type DesignerProps = { designer: Designer };

export default function Designer({designer} : DesignerProps){

	return (
		<section className={styles.designer}>
			{designer.name}
		</section>
	)
}

export async function getStaticPaths(context) {
	const { designers } = await apiQuery(GetAllDesigners)
	const paths = designers.map(({ slug }) => ({ params: { designer: [slug] } }))
	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = withGlobalProps({ model: 'designer' }, async ({ props, context, revalidate }) => {
	const { designer } = await apiQuery(GetDesigner, {variables: { slug: context.params.designer[0] }})

	if (!designer) 
		return { notFound: true }

	return {
		props: {
			...props,
			designer
		},
		revalidate
	};
});