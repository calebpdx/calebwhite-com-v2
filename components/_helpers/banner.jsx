// Dependencies
import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

// Utilities Used
import { respondAt } from '../../utils/_respondAt'

const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.bg};
	width: 100%;
	height: 30px;
	background-color: ${({ theme }) => theme.colors.secondary};

	${respondAt.sm`
    height: 40px;
    font-size: 1.15rem;
  `}
`

const Banner = (props) => {
	return <Container>{props.children}</Container>
}

Banner.propTypes = {
	children: string.isRequired,
}

export default Banner
