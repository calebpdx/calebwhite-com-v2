import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	color: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	align-items: center;
`
const ContentWrapper = ({ children }) => {
	return <Wrapper>{children}</Wrapper>
}

export default ContentWrapper
