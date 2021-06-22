import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faReact,
	faJsSquare,
	faHtml5,
	faCss3Alt,
	faSass,
	faGit,
	faGithub,
	faNodeJs,
	faShopify,
	faWordpress,
	faAws,
} from '@fortawesome/free-brands-svg-icons'

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

const TechUsed = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	margin-top: 1rem;
	width: 100%;

	svg {
		color: ${({ theme }) => theme.colors.text.primary};
		fill: ${({ theme }) => theme.colors.text.primary};
		font-size: 2.25rem;
		min-width: 1.25em;
		height: auto;
		padding: 1.1rem;

		${respondAt.md`
			min-width: 1.5em;
		`}
	}

	/* ${respondAt.sm`
	    padding: 0 3rem 0 0;
	    width: calc(70% - 3rem);
	`} */
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

const TechStack = () => {
	return (
		<Wrapper>
			<Container>
				<Title>Languages and Tools</Title>
				<Desc>
					Day-to-day I utilize quite a few tools. Listed below is a
					sampling of the tools I currently use regularly. This list
					will be constantly updated as I am strive to continue to
					build on my skillset.
				</Desc>
				<TechUsed>
					<FontAwesomeIcon icon={faReact} />
					<FontAwesomeIcon icon={faJsSquare} />
					<FontAwesomeIcon icon={faHtml5} />
					<FontAwesomeIcon icon={faCss3Alt} />
					<FontAwesomeIcon icon={faNodeJs} />
					<FontAwesomeIcon icon={faSass} />
					<FontAwesomeIcon icon={faGit} />
					<FontAwesomeIcon icon={faGithub} />
					<FontAwesomeIcon icon={faShopify} />
					<FontAwesomeIcon icon={faWordpress} />
					<FontAwesomeIcon icon={faAws} />
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='32'
						height='32'
						viewBox='0 0 32 32'
					>
						<path d='M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='32'
						height='32'
						viewBox='0 0 32 32'
					>
						<path d='M18.734 3.667l6.578 3.802c1.089-1.146 2.901-1.193 4.047-0.104 0.193 0.188 0.365 0.401 0.5 0.635 0.786 1.37 0.313 3.12-1.063 3.906-0.229 0.13-0.479 0.234-0.745 0.297v7.599c1.531 0.365 2.474 1.896 2.109 3.427-0.063 0.271-0.172 0.531-0.307 0.771-0.792 1.365-2.536 1.833-3.906 1.042-0.26-0.146-0.5-0.344-0.698-0.568l-6.542 3.776c0.495 1.495-0.318 3.109-1.813 3.604-0.292 0.099-0.594 0.146-0.896 0.146-1.573 0-2.854-1.271-2.854-2.849 0-0.271 0.042-0.547 0.12-0.813l-6.583-3.797c-1.089 1.141-2.896 1.188-4.036 0.094-1.135-1.089-1.177-2.891-0.094-4.031 0.38-0.396 0.865-0.677 1.396-0.807v-7.599c-1.531-0.365-2.479-1.906-2.109-3.443 0.063-0.266 0.167-0.521 0.302-0.755 0.786-1.365 2.536-1.833 3.901-1.042 0.234 0.135 0.453 0.302 0.641 0.5l6.583-3.797c-0.448-1.51 0.417-3.099 1.922-3.542 0.26-0.083 0.536-0.12 0.813-0.12 1.573 0 2.854 1.271 2.854 2.844 0 0.281-0.042 0.557-0.12 0.823zM18.047 4.839c-0.026 0.026-0.047 0.052-0.078 0.078l8.615 14.917c0.036-0.010 0.078-0.021 0.109-0.031v-7.609c-1.526-0.375-2.453-1.922-2.073-3.448 0.005-0.031 0.016-0.068 0.021-0.099zM14.026 4.917l-0.078-0.078-6.594 3.802c0.438 1.51-0.438 3.089-1.948 3.526-0.036 0.010-0.068 0.016-0.104 0.026v7.609l0.115 0.031 8.615-14.917zM16.797 5.594c-0.521 0.146-1.073 0.146-1.589 0l-8.615 14.917c0.391 0.375 0.667 0.859 0.802 1.391h17.214c0.13-0.531 0.406-1.016 0.802-1.396zM18.109 27.229l6.552-3.786c-0.021-0.063-0.036-0.125-0.052-0.188h-17.219l-0.031 0.109 6.589 3.802c0.516-0.536 1.245-0.87 2.052-0.87 0.839 0 1.589 0.359 2.109 0.932z' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='32'
						height='32'
						viewBox='0 0 32 32'
					>
						<path d='M21.786 0.318l-0.161 3.615c-0.005 0.203 0.229 0.328 0.391 0.203l1.411-1.068 1.198 0.932c0.156 0.104 0.365 0 0.375-0.188l-0.135-3.677 1.776-0.135c0.922-0.063 1.708 0.672 1.708 1.599v28.802c0 0.917-0.766 1.646-1.682 1.599l-21.469-0.958c-0.833-0.036-1.505-0.708-1.531-1.547l-1-26.401c-0.052-0.885 0.62-1.646 1.505-1.693l17.599-1.109zM17.693 12.401c0 0.625 4.214 0.318 4.786-0.109 0-4.266-2.292-6.521-6.479-6.521-4.198 0-6.531 2.297-6.531 5.724 0 5.932 8 6.036 8 9.276 0 0.938-0.427 1.469-1.401 1.469-1.281 0-1.802-0.651-1.734-2.88 0-0.479-4.865-0.641-5.026 0-0.359 5.375 2.974 6.932 6.797 6.932 3.724 0 6.63-1.984 6.63-5.573 0-6.359-8.135-6.188-8.135-9.333 0-1.292 0.964-1.464 1.505-1.464 0.604 0 1.667 0.094 1.589 2.49z' />
					</svg>
				</TechUsed>
			</Container>
		</Wrapper>
	)
}

export default TechStack
