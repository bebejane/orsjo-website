import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import {
	ContactDocument,
	AllResellersDocument,
	AllStaffsDocument,
	AllShowroomsDocument,
	AllDistributorsDocument,
} from '@/graphql';

import { Section, TextReveal } from '@/components';
import { Image } from 'react-datocms';
import { PageProps } from '@/lib/context/page';
import { Markdown } from 'next-dato-utils/components';
import { notFound } from 'next/navigation';
import ContactButton from '@app/contact/ContactButton';

export type ContactProps = {
	contact: ContactRecord;
	resellers: ResellerRecord[];
	staffs: StaffRecord[];
	showrooms: ShowroomRecord[];
	distributors: DistributorRecord[];
};

export default async function Contact() {
	const [{ contact }, { resellers }, { staffs }, { showrooms }, { distributors }] =
		await Promise.all([
			apiQuery<ContactQuery, ContactQueryVariables>(ContactDocument),
			apiQuery<AllResellersQuery, AllResellersQueryVariables>(AllResellersDocument),
			apiQuery<AllStaffsQuery, AllStaffsQueryVariables>(AllStaffsDocument),
			apiQuery<AllShowroomsQuery, AllShowroomsQueryVariables>(AllShowroomsDocument),
			apiQuery<AllDistributorsQuery, AllDistributorsQueryVariables>(AllDistributorsDocument),
		]);

	if (!contact) return notFound();

	const resellesByCountry = {};
	resellers.forEach((r, i) => {
		if (!resellesByCountry[r.country.id])
			resellesByCountry[r.country.id] = { resellers: [], country: r.country.name };
		resellesByCountry[r.country.id].resellers.push(r);
	});

	return (
		<>
			<Section name='Information' top={true} className={s.informationSection} bgColor='--beige'>
				<div className={s.info}>
					<h1 className='topMargin'>
						<TextReveal>{contact.title}</TextReveal>
					</h1>
					<div className={s.getintouch}>
						<div className={s.visit}>
							<p className='black medium noMargin'>Visit</p>
							<div className='medium'>
								<Markdown content={contact.address} />
							</div>
						</div>
						<div className={s.reachout}>
							<p className='black medium noMargin'>Reach out</p>
							<p className='medium'>
								<a href={`tel://${contact.phone}`}>{contact.phone}</a>
								<br />
								<a href={`mailto:${contact.email}`}>{contact.email}</a>
							</p>
						</div>
						<ContactButton contact={contact} />
					</div>
				</div>
				<div className={s.imageWrap}>
					{contact?.image.responsiveImage && (
						<Image data={contact.image.responsiveImage} className={s.image} priority={true} />
					)}
					<div className={s.fade}></div>
				</div>
			</Section>

			<Section name='People' className={s.staffSection} bgColor='--beige'>
				<h1 className='bottomMargin'>People</h1>
				<div className={s.staff}>
					{staffs.map(({ id, name, role, phone, email, image }, idx) => (
						<div id={id} key={idx} className={s.employee}>
							<div className={s.image}>
								{image?.responsiveImage && <Image data={image.responsiveImage} />}
							</div>
							<div className={s.name}>
								<p className='medium white noMargin'>{name}</p>
							</div>
							<div className={s.image}>
								<p className='medium'>
									{role}
									<br />
									<a href={`tel://${phone}`}>{phone}</a>
									<br />
									<a href={`mailto:${email}`}>{email}</a>
								</p>
							</div>
						</div>
					))}
				</div>
			</Section>
			<Section name='Showrooms' className={s.showroomsSection} bgColor='--black'>
				<h1>Showrooms</h1>
				<Markdown
					className={s.intro}
					content={`The best way to experience our products is to see them in real life, so just reach out and
					book an appointment.`}
				></Markdown>
				<ul>
					{showrooms.map(({ image, city, address, additional }, idx) => (
						<li key={idx} className={s.showroom}>
							<div className={s.left}>
								{image?.responsiveImage && (
									<Image
										data={image.responsiveImage}
										className={s.image}
										layout={'responsive'}
										objectFit={'contain'}
									/>
								)}
							</div>
							<div className={s.right}>
								<div className='medium'>
									<p className='red'>{city}</p>
									<Markdown className={s.text} content={address} />
									{additional && <Markdown className={s.text} content={additional} />}
								</div>
							</div>
						</li>
					))}
				</ul>
			</Section>
			<Section name='Agents & Distributors' className={s.distributorSection} bgColor='--beige'>
				<h1 className='white bottomMargin'>Agents & Distributors</h1>
				<div className={s.distributors}>
					{distributors.map(
						({ name, address, city, country, email, phone, postalCode, contactName, url }, idx) => (
							<div key={idx} className={s.distributor}>
								<p className='medium'>
									<span className='white'>{country.name}</span>
									<br />
									{name}
									<br />

									{address && (
										<>
											{address}
											<br />
										</>
									)}
									{postalCode && (
										<>
											{postalCode}
											<br />
										</>
									)}
									{city && (
										<>
											{city}
											<br />
										</>
									)}
									{contactName && (
										<>
											{contactName}
											<br />
										</>
									)}
									{phone && (
										<>
											{phone}
											<br />
										</>
									)}
									{email && (
										<>
											<a href={`mailto:${email}`}>{email}</a>
											<br />
										</>
									)}
									{url && <a href={url}>{url.replace('https://', '')}</a>}
								</p>
							</div>
						)
					)}
				</div>
			</Section>
			<Section name='Retailers' data-dark='1' className={s.resellerSection} bgColor='--black'>
				<h1 className='red bottomMargin'>Retailers</h1>
				<div className={s.resellers}>
					{Object.keys(resellesByCountry).map((id, idx) => {
						const { country } = resellesByCountry[id];
						const items = resellesByCountry[id].resellers;
						return (
							<div key={idx} className={s.country}>
								<h2 className='topMargin'>{country}</h2>
								<div className={s.wrap}>
									{items.map(({ name, address, postalCode, city, phone, email, url }, ridx) => (
										<div key={ridx} className={s.reseller}>
											<p className='medium'>
												<span className='red'>{name}</span>
												<br />
												{address && (
													<>
														{address}
														<br />
													</>
												)}
												{postalCode && (
													<>
														{postalCode}
														<br />
													</>
												)}
												{city && (
													<>
														{city}
														<br />
													</>
												)}
												{phone && (
													<>
														{phone}
														<br />
													</>
												)}
												{email && (
													<>
														<a href={`mailto:${email}`}>{email}</a>
														<br />
													</>
												)}
												{url && <a href={url}>{url.replace('https://', '')}</a>}
											</p>
										</div>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</Section>
		</>
	);
}

Contact.page = {
	title: 'Contact',
	layout: 'normal',
	color: '--beige',
	menu: 'inverted',
	footerLine: true,
} as PageProps;
