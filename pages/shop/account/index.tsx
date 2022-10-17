import styles from './index.module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { PageProps } from '/lib/context/page';
import { Section } from '/components';
import { useState } from 'react'
import useCustomer from '/lib/shopify/hooks/useCustomer';

type Props = {
	
}

export default function Account({  }: Props) {

  const [customer, createCustomer, login, logut] = useCustomer((state) => [state.customer, state.createCustomer, state.login, state.logout])
  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    const email = document.getElementById('email').value
    const firstName = document.getElementById('firstname').value
    const lastName = document.getElementById('lastname').value
    const password = document.getElementById('password').value
    const password2 = document.getElementById('password2').value

    
    const c = await createCustomer({email, firstName, lastName, password})
    console.log(c, {email, firstName, lastName, password});
    

  }

	return (
		<Section className={styles.account} top={true}>
      <h1>Account</h1>
      <form id="signup" onSubmit={handleSubmit}>
        <input id="email" type="text" placeholder="E-mail"/>
        <input id="firstname" type="text" placeholder="First name"/>
        <input id="lastname" type="text" placeholder="Last name"/>
        <input id="password" type="password" placeholder="Password"/>
        <input id="password2" type="text" placeholder="Password2..."/>
        <button type="submit">Sign up</button>
      </form>
		</Section>
	)
}

Account.page = { layout: 'normal', color: '--white', menu: 'normal' } as PageProps

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate }: any) => {


	return {
		props: {
			...props,
		},
		revalidate
	};
});