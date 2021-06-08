import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'

import theme from '../themes/_darkTheme'
import { respondAt } from '../utils/_respondAt'

const Container = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	min-height: 2.5rem;
	padding: 2rem 0;
	color: ${({ theme }) => theme.colors.wolfGray};
	font-size: 1rem;

	${respondAt.sm`
		flex-direction: row;
		width: 70%;
		max-width: 1520px;
	`}
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
			<Copyright>
				Copyright &copy; <Moment format='YYYY' /> &nbsp; Caleb White.
				All Rights Reserved.
			</Copyright>
			<Source>Source GITHUB</Source>
		</Container>
	)
}

export default Footer
