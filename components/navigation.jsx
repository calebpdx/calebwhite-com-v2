import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

//import theme styles
import { respondAt } from '../utils/_respondAt'

import Logo from './navigation/logo'
import NavMenu from './navigation/navMenu'

const NavBar = styled.nav`
	position: fixed;
	display: flex;
	background-color: black;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100px;
	z-index: 100;

	/* ${respondAt.sm`
        width: 95%;
    `} */

	${respondAt.lg`
		border-color: ${({ theme }) => theme.colors.title};

		border: none;
	`}
`
const NavBarActive = styled.nav`
	position: fixed;
	display: flex;
	background-color: black;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100px;
	z-index: 100;

	/* ${respondAt.sm`
        width: 95%;
    `} */

	${respondAt.lg`
		border: 4em solid ${({ theme }) => theme.colors.title};
	`}
`

const Navigation = () => {
	return (
		<NavBar>
			<Logo />
			<NavMenu />
		</NavBar>
	)
}

export default Navigation
