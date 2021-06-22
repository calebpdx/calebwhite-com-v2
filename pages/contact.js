/* eslint-disable react/no-unescaped-entities */

// Dependencies
import React from 'react'
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import Headroom from 'react-headroom'

// Required Components
import PageWrapper from '../components/_helpers/pageWrapper'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

//Utilities Used
import { respondAt } from '../utils/_respondAt'

// Theming Components/Utils
import { useDarkMode } from '../themes/useDarkMode'
import { mainTheme, darkTheme } from '../themes/themes'
import GlobalStyles from '../themes/globalStyles'

const Container = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin: 2em 0;

	${respondAt.sm`
		width: 70%;
		flex-flow: row nowrap;	
	`}
`
const Title = styled.h1`
	width: 100%;
	text-align: left;
	color: ${({ theme }) => theme.colors.text.title};
	font-size: ${({ theme }) => theme.fontSizes.xxl};

	${respondAt.sm`
		width: 70%;
	`}
`

const Privacy = styled.div`
	width: 70%;
`

export default function Home() {
	const [theme, toggleTheme] = useDarkMode()
	const themeMode = theme === 'mainTheme' ? mainTheme : darkTheme

	return (
		<>
			<Head>
				<title>Caleb White - Frontend Engineer - Portland, OR</title>
				<meta
					name='Caleb White'
					content='A Frontend Engineer from Portland, OR'
				/>

				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />

				<PageWrapper>
					<Headroom style={{ zIndex: 998 }}>
						<Navigation theme={theme} toggleTheme={toggleTheme} />
					</Headroom>
					<Title>Contact</Title>
					<Container>
						<Privacy>Hello World!</Privacy>
					</Container>

					<Footer />
				</PageWrapper>
			</ThemeProvider>
		</>
	)
}
