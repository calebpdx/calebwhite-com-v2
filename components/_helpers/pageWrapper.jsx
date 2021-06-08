import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.bg};
	color: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: flex-start;
	align-items: center;
	transition: all 0.25s linear;
`
const ContentWrapper = ({ children }) => {
	return <Wrapper>{children}</Wrapper>
}

export default ContentWrapper
