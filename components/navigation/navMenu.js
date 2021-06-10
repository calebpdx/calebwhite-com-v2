import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { respondAt } from '../../utils/_respondAt'

const Menu = styled.ul`
	ul {
		display: flex;
		color: ${({ theme }) => theme.colors.altDark};
		font-size: ${({ theme }) => theme.fontSizes.sm};
		font-weight: 600;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		list-style-type: none;
		padding-right: 1.25rem;
	}

	li {
		margin-right: 1rem;

		:last-child {
			margin-right: 0;
		}
	}

	a {
		color: ${({ theme }) => theme.colors.text.title};
		
		:hover, :focus {
			color: color: ${({ theme }) => theme.colors.primary};
		}

	}

	ul:hover > li a:not(:hover) {
		color: ${({ theme }) => theme.colors.disabled};
		transition: all 0.75s ease-in-out;
	}
`

const NavMenu = () => {
	return (
		<Menu>
			<ul>
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
		</Menu>
	)
}

export default NavMenu
