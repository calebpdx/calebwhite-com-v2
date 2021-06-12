import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faReact,
	faJsSquare,
	faHtml5,
	faCss3,
	faCss3Alt,
	faSass,
	faGit,
	faGithubSquare,
	faGithub,
	faGithubAlt,
	faNodeJs,
	faShopify,
	faWordpress,
	faAws,
	faStripe,
} from '@fortawesome/free-brands-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import { respondAt } from '../utils/_respondAt'

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.bg.main};
	color: ${({ theme }) => theme.colors.text.primary};
	width: 100%;
	display: flex;
	justify-content: center;
	border-top: 0.15em solid ${({ theme }) => theme.colors.bg.main};
	transition: all 0.25s linear;
`

const Container = styled.section`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
	width: 80%;
	margin: 3rem 2rem;

	${respondAt.sm`
    	flex-direction: row;
		width: 70%;
        max-width: 1520px;
	`};
`
const Title = styled.h2`
	order: 1;
	width: 100%;
	flex-basis: 0 1;
	font-weight: 600;
	text-align: center;
`

const TechUsed = styled.div`
	order: 3;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
	margin-top: 1.5rem;
	width: 100%;

	svg {
		color: ${({ theme }) => theme.colors.text.secondary};
		min-width: 1.25em;
		margin: 1rem 0 1rem 1rem;

		&:first-child {
			margin-left: 0;
		}

		&:nth-child(7) {
			margin-left: 0;
		}

		${respondAt.md`
			min-width: 1.5em;
		`}
	}

	${respondAt.sm`
		order: 2;
	    padding: 0 3rem 0 0;
	    width: calc(70% - 3rem);
	`}
`
const Desc = styled.aside`
	order: 2;
	margin-top: 1.5rem;
	width: 100%;

	p {
		color: ${({ theme }) => theme.colors.text.secondary};
	}

	${respondAt.sm`
	    order: 3;
		width: 30%;
	`}
`

const TechStack = () => {
	return (
		<Wrapper>
			<Container>
				<Title>Languages and Tools</Title>
				<TechUsed>
					<FontAwesomeIcon icon={faReact} size='5x' />
					<FontAwesomeIcon icon={faJsSquare} size='5x' />
					<FontAwesomeIcon icon={faHtml5} size='5x' />
					<FontAwesomeIcon icon={faCss3Alt} size='5x' />
					<FontAwesomeIcon icon={faNodeJs} size='5x' />
					<FontAwesomeIcon icon={faSass} size='5x' />
					<FontAwesomeIcon icon={faGit} size='5x' />
					<FontAwesomeIcon icon={faGithub} size='5x' />
					<FontAwesomeIcon icon={faShopify} size='5x' />
					<FontAwesomeIcon icon={faWordpress} size='5x' />
					<FontAwesomeIcon icon={faAws} size='5x' />
					<FontAwesomeIcon icon={faStripe} size='5x' />
				</TechUsed>
				<Desc>
					<p>
						Day-to-day I utilize quite a few tools. Here is a
						sampling of the tools I currently use regularly. This
						list will be constantly updated as I am strive to
						continue to build on my skillset.
					</p>
				</Desc>
			</Container>
		</Wrapper>
	)
}

export default TechStack
