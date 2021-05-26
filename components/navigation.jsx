import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

//import theme styles
import theme from '../themes/_darkTheme'
import { respondAt } from '../utils/_respondAt'

import Logo from './logo'
import NavMenu from './navMenu'

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-top: 20px;
	min-height: 60px;
`
const NavBar = styled.nav`
	display: flex;
	justify-content: space-between;
	margin: auto;
	width: 75%;
	height: 60px;

	${respondAt.lg`
        width: 60%;
    `}
`

const Navigation = () => {
	return (
		<Wrapper>
			<NavBar>
				<Link href='/'>
					<a>
						<Logo />
					</a>
				</Link>
				<NavMenu />
			</NavBar>
		</Wrapper>
	)
}

export default Navigation
