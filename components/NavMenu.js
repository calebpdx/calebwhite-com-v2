import React from 'react'
import styled from 'styled-components'

import theme from '../themes/_darkTheme'
import { respondTo } from '../utils/_respondTo'

const Menu = styled.ul`
	display: flex;
	color: ${theme.colors.wolfGray};
	font-size: ${({ theme }) => theme.fontSizes.sm};
	font-weight: 400;
	align-items: flex-end;
	justify-content: center;
	flex-direction: row;
	list-style-type: none;

	li {
		margin-right: 1rem;
	}

	li:last-child {
		margin-right: 0;
	}
`

const NavMenu = () => {
	return (
		<Menu>
			<li>home</li>
			<li>about</li>
			<li>projects</li>
			<li>contact</li>
		</Menu>
	)
}

export default NavMenu
