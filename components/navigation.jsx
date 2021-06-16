import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Divide as Hamburger } from 'hamburger-react'

//import theme styles
import { respondAt } from '../utils/_respondAt'

import Logo from './navigation/logo'
import Toggle from '../themes/toggleTheme'

import { useDarkMode } from '../themes/useDarkMode'
import { mainTheme, darkTheme } from '../themes/themes'

const Menu = styled.div`
	ul {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100vh;
		margin: 0;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		${respondAt.sm`
			display: flex;
			flex-direction: row;
			position: initial;
			margin: 0;
			padding: 0;
			height: auto;
			color: ${({ theme }) => theme.colors.altDark};
			font-size: ${({ theme }) => theme.fontSizes.md};
			font-weight: 600;
			align-items: center;
			justify-content: center;
			list-style-type: none;
			padding-right: 1.25rem;

			
		`}
	}

	li {
		margin-right: 1rem;

		:hover,
		:focus {
			color: ${({ theme }) => theme.colors.primary};
		}

		&:last-child {
			margin-right: 0;
		}
	}

	a {
		color: ${({ theme }) => theme.colors.text.title};

		:hover,
		:focus {
			color: ${({ theme }) => theme.colors.primary};
		}
	}

	ul:hover > li a:not(:hover) {
		color: ${({ theme }) => theme.colors.disabled};
		transition: all 0.75s ease-in-out;
	}

	.hamburgerMenu {
		color: ${({ theme }) => theme.colors.text.title};
		transition: all 0.25s ease-in-out;

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}

		${respondAt.sm`
		display: none;
	`}
	}
`

const NavBar = styled.header`
	background-color: ${({ theme }) => theme.colors.bg.main};
	z-index: 999;

	.open .sitemap ul {
		background-color: ${({ theme }) => theme.colors.bg.main};
		display: flex;
		list-style-type: none;

		li > a {
			font-size: ${({ theme }) => theme.fontSizes.xl};
			color: ${({ theme }) => theme.colors.primary};
			margin-bottom: 0.5em;
		}

		li::last-child {
			margin: 0;
		}
	}
`
const Container = styled.div`
	display: flex;
	padding: 1.25em 0;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.bg.main};
	justify-content: center;
	align-items: center;
`

const Navigation = (props) => {
	const [theme, toggleTheme] = useDarkMode()
	const themeMode = props.theme === 'mainTheme' ? mainTheme : darkTheme

	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : 'unset'
		document.body.style.position = menuOpen ? 'fixed' : 'unset'
		document.body.style.width = menuOpen ? '100vw' : 'unset'
	}, [menuOpen])

	return (
		<NavBar>
			<Container className={`${menuOpen ? 'open' : ''}`}>
				<Logo />
				<Menu className='sitemap'>
					<ul>
						<li>
							<a>
								<Link href='/about'>about/cv</Link>
							</a>
						</li>
						<li>
							<a href='/'>projects</a>
						</li>
						<li>
							<a href='/'>contact</a>
						</li>
					</ul>
					<div className='hamburgerMenu'>
						<Hamburger
							size={25}
							toggled={menuOpen}
							toggle={(open) => setMenuOpen(open)}
							label='Show menu'
						/>
					</div>
				</Menu>
				<Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
			</Container>
		</NavBar>
	)
}

export default Navigation
