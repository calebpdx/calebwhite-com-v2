/* eslint-disable react/no-unescaped-entities */

// Dependencies
import React from 'react'
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import Headroom from 'react-headroom'

// Required Components
import Logo from '../components/navigation/logo'
import NavMenu from '../components/navigation/navMenu'
import Hero from '../components/intro'
import Banner from '../components/_helpers/banner'
import PageWrapper from '../components/_helpers/pageWrapper'
import About from '../components/about'
import CV from '../components/cv'
import TechStack from '../components/stack'
import Projects from '../components/projects'
import Footer from '../components/footer'
import Arrow from '../components/hero/arrow'

import Navigation from '../components/navigation'

// Utilities Used
import { respondAt } from '../utils/_respondAt'

// Theming Components/Utils
import { useDarkMode } from '../themes/useDarkMode'
import { mainTheme, darkTheme } from '../themes/themes'
import GlobalStyles from '../themes/globalStyles'
import Toggle from '../themes/toggleTheme'

const Landing = styled.section`
	min-height: 45rem;
	width: 75%;

	display: flex;
	flex: auto 1;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	font-size: ${({ theme }) => theme.fontSizes.sm};

	${respondAt.sm`
		margin: 0;
		padding: 0;
	`}

	${respondAt.md`
		min-height: calc(100vh - 100px);
	`}

	${respondAt.lg`
		width: 70%;
		max-width: 1520px;
  	`}
`

const NavBar = styled.nav`
	display: flex;
	width: 100%;

	background-color: ${({ theme }) => theme.colors.bg.main};
	justify-content: space-between;
	align-items: center;

	/* ${respondAt.lg`
		
		background-color: transparent;
	`} */
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
					<Landing>
						<Hero />
						<Arrow />
					</Landing>
					<About />
					<TechStack />
					<Projects />
					<Footer />
				</PageWrapper>
			</ThemeProvider>
		</>
	)
}
