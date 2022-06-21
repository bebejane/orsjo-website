import styles from './index.module.scss'
import { GetContact, GetAllResellers, GetAllStaffs, GetAllShowrooms, GetAllDistributors } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import { Image } from 'react-datocms'
import { PageLayoutProps } from '/lib/context/layout';
import { sectionId } from '/lib/utils'
import Markdown from '/lib/dato/components/Markdown';

export type ContactProps = {
	contact: ContactRecord,
	resellers: ResellerRecord[],
	staffs: StaffRecord[],
	showrooms: ShowroomRecord[],
	distributors: DistributorRecord[]
}

export default function Contact({ contact, resellers, staffs, showrooms, distributors }: ContactProps) {

	const resellesByCountry = {}
	resellers.forEach((r, i) => {
		if(!resellesByCountry[r.country.id]) 
			resellesByCountry[r.country.id] = {resellers:[], country:r.country.name}
		resellesByCountry[r.country.id].resellers.push(r)
	})
	
	return (
		<div className={styles.contact}>
			<section {...sectionId('Information')} className={styles.informationSection}>
				
					<div className={styles.info}>
						<h1>{contact.title}</h1>
						<Markdown>
							{contact.intro}
						</Markdown>
						<div className={styles.getintouch}>
							<div className={styles.visit}>
								<h2>Visit</h2>
								<Markdown>{contact.address}</Markdown>
							</div>
							<div className={styles.reachout}>
								<h2>Reach out</h2>
								<a href={`tel://${contact.phone}`}>{contact.phone}</a><br/>
								<a href={`mailto:${contact.email}`}>{contact.email}</a>
							</div>
						</div>
						<button>Contact Us</button>
					</div>
					<div className={styles.image}>
						<Image data={contact.image.responsiveImage}/>
					</div>
			</section>
			<section {...sectionId('Staff')} className={styles.staffSection}>
				<h1>Staff</h1>
				<div className={styles.staff}>
				{staffs.map(({name, role, phone, email, image}, idx) => 
					<div key={idx} className={styles.employee}>
						<div className={styles.image}>
							<Image data={image.responsiveImage}/>
						</div>
						<div className={styles.name}>
							{name}
						</div>
						<div className={styles.image}>
							{role}<br/>
							<a href={`tel://${phone}`}>{phone}</a><br/>
							<a href={`mailto:${email}`}>{email}</a>
						</div>
					</div>
				)}
				</div>
			</section>
			<section {...sectionId('Showrooms')} data-dark="1" className={styles.showroomsSection}>
				<h1>Showrooms</h1>
				<Markdown className={styles.intro}>
					The best way to experience our products is to see them in real life, so just reach out and book an appointment.
				</Markdown>
				{showrooms.map(({image, city, address, additional}, idx) => 
					<div key={idx} className={styles.showroom}>
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
							<h2>{city}</h2>
							<Markdown className={styles.text}>{address}</Markdown>
							<Markdown className={styles.text}>{additional}</Markdown>
						</div>
					</div>
				)}
			</section>
			<section {...sectionId('Agents & Distributors')} className={styles.distributorSection}>
				<h1>Agents & Distributors</h1>
				<div className={styles.distributors}>
					{distributors.map(({name, address, city, country, email, phone, postalCode, contactName, url}, idx) =>
						<div key={idx} className={styles.distributor}>
							<h2>{country.name}</h2>
							{address && <>{address}<br/></> }
							{postalCode && <>{postalCode}<br/></> }
							{city && <>{city}<br/></> }
							{contactName && <>{contactName}<br/></> }
							{phone && <>{phone}<br/></> }
							{email && <><a href={`mailto:${email}`}>{email}</a><br/></> }
							{url && <a href={url}>{url.replace('https://', '')}</a> }
						</div>
					)}
				</div>
			</section>
			<section {...sectionId('Retailers')} data-dark="1" className={styles.resellerSection}>
				<h1>Retailers</h1>
				<div className={styles.resellers}>
					{Object.keys((resellesByCountry)).map((id, idx) => {
						const {country} = resellesByCountry[id];
						const items = resellesByCountry[id].resellers;
						return (
							<div key={idx} className={styles.country}>
								<h1>{country}</h1>
								<div className={styles.wrap}>
								{items.map(({name, address, postalCode, city, phone, email, url}, ridx) => 
									<div key={ridx} className={styles.reseller}>
										<div className={styles.name}>
											{name}
										</div>
										{address && <>{address}<br/></> }
										{postalCode && <>{postalCode}<br/></> }
										{city && <>{city}<br/></> }
										{phone && <>{phone}<br/></> }
										{email && <><a href={`mailto:${email}`}>{email}</a><br/></> }
										{url && <a href={url}>{url.replace('https://', '')}</a> }
									</div>
								)}
								</div>	
							</div>
						)
					})}
				</div>
			</section>

		</div>
	)
}

Contact.layout = { layout: 'full', color: "#DF3600", menu: 'normal' } as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetContact, GetAllResellers, GetAllStaffs, GetAllShowrooms, GetAllDistributors] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});