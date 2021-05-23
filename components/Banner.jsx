// Dependencies
import React, { Children } from 'react'
import styled from 'styled-components'

// Utilities Used
import { respondTo } from '../utils/_respondTo'

const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	font-weight: 600;
	color: #000;
	width: 100%;
	height: 30px;
	background-color: ${({ theme }) => theme.colors.primary};

	${respondTo.sm`
    height: 40px;
    font-size: 1.15rem;
  `}
`

const Banner = ({ children }) => {
	return <Container>{children}</Container>
}

export default Banner
