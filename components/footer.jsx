import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'

import theme from '../themes/_darkTheme'
import { respondAt } from '../utils/_respondAt'

const Container = styled.footer`
	display: flex;
	flex-direction: row;
	width: 100%;

	${respondAt.sm`
		width: 60%;
	`}
`
const FootActual = styled.p`
	width: 100%;
	height: 40px;
	color: ${({ theme }) => theme.colors.onyx};
	font-size: 1rem;
`

const Footer = () => {
	return (
		<Container>
			<FootActual>
				Copyright &copy; <Moment format='YYYY' /> Caleb White. All
				Rights Reserved.
			</FootActual>
		</Container>
	)
}

export default Footer
