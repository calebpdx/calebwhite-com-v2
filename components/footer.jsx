import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'

import theme from '../themes/_darkTheme'
import { respondAt } from '../utils/_respondAt'

const Container = styled.footer`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100px;

	${respondAt.sm`
		width: 65%;
		max-width: 1520px;
	`}
`
const FootActual = styled.p`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 40px;
	color: ${({ theme }) => theme.colors.onyx};
	font-size: 1rem;
`

const Copyright = styled.div`
	display: flex;
	align-items: flex-start;
`
const Source = styled.div`
	display: flex;
	justify-items: flex-end;
`

const Footer = () => {
	return (
		<Container>
			<FootActual>
				<Copyright>
					Copyright &copy; <Moment format='YYYY' /> Caleb White. All
					Rights Reserved.
				</Copyright>
				<Source>Source GITHUB</Source>
			</FootActual>
		</Container>
	)
}

export default Footer
