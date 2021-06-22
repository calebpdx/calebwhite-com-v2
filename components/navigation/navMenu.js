import React, { useState, useEffect } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import styled from 'styled-components'

import { respondAt } from '../../utils/_respondAt'

const Menu = styled.div`
	ul {
		display: none;
		color: ${({ theme }) => theme.colors.altDark};
		font-size: ${({ theme }) => theme.fontSizes.sm};
		font-weight: 600;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		list-style-type: none;
		padding-right: 1.25rem;

		${respondAt.sm`
		display: flex;
		`}
	}
	.open {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		z-index: 999;
		background-color: red;

		${respondAt.sm`
			display: none;
			background-color: none`}
	}
	li {
		margin-right: 1rem;

		:last-child {
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
		padding: 0.85rem;
		margin-right: -0.85rem;

		${respondAt.sm`
		display: none;
	`}
	}
`

const NavMenu = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : 'unset'
		document.body.style.position = menuOpen ? 'fixed' : 'unset'
		document.body.style.width = menuOpen ? '100vw' : 'unset'
	}, [menuOpen])

	return (
		<Menu>
			<ul className={`${menuOpen ? 'open' : ''}`}>
				<li>
					<a href='/'>about/cv</a>
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
	)
}

export default NavMenu
