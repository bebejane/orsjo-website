import styles from './index.module.scss'
import {
	ContactDocument,
	AllResellersDocument,
	AllStaffsDocument,
	AllShowroomsDocument,
	AllDistributorsDocument
} from '/graphql';

import { Section, ContactModal, TextReveal } from '/components'
import withGlobalProps from "/lib/withGlobalProps";
import { Image } from 'react-datocms'
import { PageProps } from '/lib/context/page';
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import { useState } from 'react';

export type ContactProps = {
	contact: ContactRecord,
	resellers: ResellerRecord[],
	staffs: StaffRecord[],
	showrooms: ShowroomRecord[],
	distributors: DistributorRecord[]
}

export default function Contact({ contact, resellers, staffs, showrooms, distributors }: ContactProps) {

	const [showContactForm, setShowContactForm] = useState(false)

	const resellesByCountry = {}
	resellers.forEach((r, i) => {
		if (!resellesByCountry[r.country.id])
			resellesByCountry[r.country.id] = { resellers: [], country: r.country.name }
		resellesByCountry[r.country.id].resellers.push(r)
	})

	return (
		<>
			<Section name="Information" top={true} className={styles.informationSection} bgColor='--beige'>
				<div className={styles.info}>
					<h1 className="topMargin">
						<TextReveal>
							{contact.title}
						</TextReveal>
					</h1>
					<div className={styles.getintouch}>
						<div className={styles.visit}>
							<p className="black medium noMargin">Visit</p>
							<div className="medium">
								<Markdown>{contact.address}</Markdown>
							</div>
						</div>
						<div className={styles.reachout}>
							<p className="black medium noMargin">Reach out</p>
							<p className="medium">
								<a href={`tel://${contact.phone}`}>{contact.phone}</a><br />
								<a href={`mailto:${contact.email}`}>{contact.email}</a>
							</p>
						</div>
						<button onClick={() => setShowContactForm(true)}>Contact Us</button>
					</div>
					<ContactModal
						show={showContactForm} onClose={() => setShowContactForm(false)}
						message={contact.contactFormMessage}
					/></div>
				<div className={styles.imageWrap}>
					<Image
						data={contact.image.responsiveImage}
						className={styles.image}
						priority={true}
					/>
					<div className={styles.fade}></div>
				</div>
			</Section>

			<Section name="People" className={styles.staffSection} bgColor='--beige'>
				<h1 className="bottomMargin">People</h1>
				<div className={styles.staff}>
					{staffs.map(({ id, name, role, phone, email, image }, idx) =>
						<div id={id} key={idx} className={styles.employee}>
							<div className={styles.image}>
								{image && <Image data={image.responsiveImage} />}
							</div>
							<div className={styles.name}>
								<p className="medium white noMargin">
									{name}</p>
							</div>
							<div className={styles.image}>
								<p className="medium">{role}<br />
									<a href={`tel://${phone}`}>{phone}</a><br />
									<a href={`mailto:${email}`}>{email}</a>
								</p>
							</div>
						</div>
					)}
				</div>

			</Section>
			<Section name="Showrooms" className={styles.showroomsSection} bgColor='--black'>
				<h1>Showrooms</h1>
				<Markdown className={styles.intro}>
					The best way to experience our products is to see them in real life, so just reach out and book an appointment.
				</Markdown>
				<ul>
					{showrooms.map(({ image, city, address, additional }, idx) =>
						<li key={idx} className={styles.showroom}>
							<div className={styles.left}>
								{image?.responsiveImage &&
									<Image
										data={image.responsiveImage}
										className={styles.image}
										layout={'responsive'}
										objectFit={'contain'}
									/>
								}
							</div>
							<div className={styles.right}>
								<div className="medium">
									<p className="red">{city}</p>
									<Markdown className={styles.text}>{address}</Markdown>
									<Markdown className={styles.text}>{additional}</Markdown>
								</div>
							</div>
						</li>
					)}
				</ul>
			</Section>
			<Section name="Agents & Distributors" className={styles.distributorSection} bgColor='--beige'>
				<h1 className="white bottomMargin">Agents & Distributors</h1>
				<div className={styles.distributors}>
					{distributors.map(({ name, address, city, country, email, phone, postalCode, contactName, url }, idx) =>
						<div key={idx} className={styles.distributor}>
							<p className="medium">
								<span className="white">{country.name}</span><br />
								{name}<br />
								{address && <>{address}<br /></>}
								{postalCode && <>{postalCode}<br /></>}
								{city && <>{city}<br /></>}
								{contactName && <>{contactName}<br /></>}
								{phone && <>{phone}<br /></>}
								{email && <><a href={`mailto:${email}`}>{email}</a><br /></>}
								{url && <a href={url}>{url.replace('https://', '')}</a>}
							</p>
						</div>
					)}
				</div>
			</Section>
			<Section name="Retailers" data-dark="1" className={styles.resellerSection} bgColor='--black'>
				<h1 className="red bottomMargin">Retailers</h1>
				<div className={styles.resellers}>
					{Object.keys((resellesByCountry)).map((id, idx) => {
						const { country } = resellesByCountry[id];
						const items = resellesByCountry[id].resellers;
						return (
							<div key={idx} className={styles.country}>
								<h2 className="topMargin">{country}</h2>
								<div className={styles.wrap}>
									{items.map(({ name, address, postalCode, city, phone, email, url }, ridx) =>
										<div key={ridx} className={styles.reseller}>
											<p className="medium">
												<span className="red">{name}</span><br />
												{address && <>{address}<br /></>}
												{postalCode && <>{postalCode}<br /></>}
												{city && <>{city}<br /></>}
												{phone && <>{phone}<br /></>}
												{email && <><a href={`mailto:${email}`}>{email}</a><br /></>}
												{url && <a href={url}>{url.replace('https://', '')}</a>}
											</p>

										</div>
									)}
								</div>
							</div>
						)
					})}
				</div>
			</Section>

		</>
	)
}

Contact.page = { title: 'Contact', layout: 'normal', color: "--beige", menu: 'inverted', footerLine: true } as PageProps

export const getStaticProps = withGlobalProps({ queries: [ContactDocument, AllResellersDocument, AllStaffsDocument, AllShowroomsDocument, AllDistributorsDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});