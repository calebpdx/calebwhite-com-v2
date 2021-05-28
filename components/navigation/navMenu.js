import React from 'react'
import styled from 'styled-components'

import theme from '../../themes/_darkTheme'
import { respondAt } from '../../utils/_respondAt'

const Menu = styled.ul`
	display: flex;
	color: ${({ theme }) => theme.colors.wolfGray};
	font-size: ${({ theme }) => theme.fontSizes.sm};
	font-weight: 600;
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
			<li>about</li>
			<li>cv</li>
			<li>projects</li>
			<li>contact</li>
		</Menu>
	)
}

export default NavMenu
