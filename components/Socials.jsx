// Dependencies
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'

// Utilities Used
import { respondTo } from '../utils/_respondTo'

const Container = styled.ul`
	display: flex;
	flex-direction: row;
	list-style-type: none;
	margin: 2rem 0;
	padding: 0;
	justify-content: center;

	li {
		font-size: 1.25rem;
		display: flex;
		justify-content: center;
		align-items: center;

		${respondTo.sm`
            font-size: 1.5rem;
        `}
	}

	li:not(:last-child) {
		margin-right: 20px;
	}

	a {
		color: ${({ theme }) => theme.colors.secondary};
	}

	a:hover {
		transition: 0.25s ease-in;
		color: ${({ theme }) => theme.colors.primary};
	}
`

const Socials = () => {
	return (
		<Container>
			<li>
				<a href='https://www.twitter.com/goldfinger'>
					<FontAwesomeIcon icon={faTwitter} size='lg' />
				</a>
			</li>
			<li>
				<a href='https://www.github.com/cloroxo'>
					<FontAwesomeIcon icon={faGithub} size='lg' />
				</a>
			</li>
			<li>
				<a href='https://www.linkedin.com/in/calebawhite'>
					<FontAwesomeIcon icon={faLinkedin} size='lg' />
				</a>
			</li>
		</Container>
	)
}

export default Socials
