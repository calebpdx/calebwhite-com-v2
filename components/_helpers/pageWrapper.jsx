import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.bg.main};
	color: ${({ theme }) => theme.colors.secondary};
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	transition: all 0.25s linear;

	.headroom-wrapper {
		width: 100%;
	}

	.headroom--pinned {
		border-bottom: 0.2rem solid ${({ theme }) => theme.colors.bg.card};
	}
`
const ContentWrapper = ({ children }) => {
	return <Wrapper>{children}</Wrapper>
}

export default ContentWrapper
