import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

//import theme styles
import theme from '../themes/_darkTheme'
import { respondAt } from '../utils/_respondAt'

import Logo from './navigation/logo'
import NavMenu from './navigation/navMenu'

const NavBar = styled.nav`
	position: fixed;
	display: flex;
	background-color: black;
	justify-content: space-between;
	margin: auto;
	align-items: center;
	width: 80%;
	height: 100px;
	z-index: 100;

	${respondAt.sm`
        width: 95%;
    `}

	${respondAt.lg`
		background-color: transparent;
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
