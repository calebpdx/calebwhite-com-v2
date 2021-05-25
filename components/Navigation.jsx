import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

//import theme styles
import theme from '../themes/_darkTheme'
import { respondTo } from '../utils/_respondTo'

import Logo from './logo'
import NavMenu from './navMenu'

const Wrapper = styled.section`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-top: 20px;
`
const NavBar = styled.nav`
	display: flex;
	justify-content: space-between;
	margin: auto;
	width: 75%;
	height: 70px;

	${respondTo.lg`
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
