import React from 'react'
import styled from 'styled-components'

//import theme styles
import theme from '../themes/_darkTheme'
import { respondTo } from '../utils/_respondTo'

import NavMenu from './NavMenu'

const Wrapper = styled.section`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 90px;
`
const NavBar = styled.nav`
	display: flex;
	justify-content: space-between;
	margin: auto;
	width: 75%;

	${respondTo.lg`
        width: 60%;
    `}
`

const Navigation = () => {
	return (
		<Wrapper>
			<NavBar>
				<div>Logo</div>
				<NavMenu />
			</NavBar>
		</Wrapper>
	)
}

export default Navigation
