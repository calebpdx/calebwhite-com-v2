import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { respondAt } from '../utils/_respondAt'

const Wrapper = styled.section`
	background-color: ${({ theme }) => theme.colors.bg.secondary};
	color: ${({ theme }) => theme.colors.text.primary};
	width: 100%;
	display: flex;
	justify-content: center;
	border-top: 0.15em solid ${({ theme }) => theme.colors.bg.secondary};
	border-bottom: 0.15em solid ${({ theme }) => theme.colors.bg.card};
	transition: all 0.25s linear;
`

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
	width: 80%;
	margin: 2rem;

	${respondAt.sm`
    	flex-direction: row;
		width: 70%;
        max-width: 1520px;
	`};
`
const Title = styled.h2`
	color: ${({ theme }) => theme.colors.text.title};
	width: 100%;
	flex-basis: 0 1;
	font-weight: 600;
	text-align: center;
`

const ContactMethod = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
	width: 100%;

	${respondAt.sm`
		flex-flow: row nowrap;
	`}
`
const Desc = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.md};
	color: ${({ theme }) => theme.colors.text.secondary};
	margin-top: 1rem;
	width: 90%;
	text-align: center;

	p {
		color: ${({ theme }) => theme.colors.text.secondary};
	}

	${respondAt.md`
		width: 75%;
	`}
`

const ConButton = styled.button`
	background-color: ${({ theme }) => theme.colors.buttons.primary};
	color: ${({ theme }) => theme.colors.text.primary};
	border: 0.15em solid ${({ theme }) => theme.colors.buttons.primary};
	width: 100%;
	height: 4em;
	cursor: pointer;
	margin: 0.5em;

	&:hover {
		color: ${({ theme }) => theme.colors.buttons.hover};
		background-color: ${({ theme }) => theme.colors.buttons.hoverbg};
		border: 0.15em solid ${({ theme }) => theme.colors.buttons.hover};
	}

	a {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}

	span {
		font-weight: 500;
		margin-left: 0.75em;
	}

	${respondAt.sm`
		width: 11em;
	`}
`

const Contact = () => {
	return (
		<Wrapper id='contact'>
			<Container>
				<Title>Get in Touch</Title>
				<Desc>
					I am currently looking for my next opportunity as a frontend
					engineer. If you have a full-time position, I would love to
					connect! If you have any other questions, my inbox is always
					open.
				</Desc>
				<ContactMethod>
					<ConButton>
						<a
							href='mailto:calebwhite@hey.com'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faPaperPlane} size='lg' />
							<span>Message</span>
						</a>
					</ConButton>
					<ConButton>
						<a
							href='https:/www.twitter.com/goldfinger'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faTwitter} size='lg' />

							<span>Follow</span>
						</a>
					</ConButton>
				</ContactMethod>
			</Container>
		</Wrapper>
	)
}

export default Contact
