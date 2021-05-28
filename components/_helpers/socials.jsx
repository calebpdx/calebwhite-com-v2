// Dependencies
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGithubAlt,
	faInstagram,
	faLinkedinIn,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'

// Utilities Used
import { respondAt } from '../../utils/_respondAt'

const Container = styled.ul`
	display: flex;
	flex-direction: row;
	list-style-type: none;
	margin: 2rem 0;
	padding: 0;
	justify-content: center;

	li {
		font-size: ${({ theme }) => theme.iconSizes.sm};
		display: flex;
		justify-content: center;
		align-items: center;

		${respondAt.sm`
            font-size: ${({ theme }) => theme.iconSizes.md};
        `}
	}

	li:not(:last-child) {
		margin-right: 20px;
	}

	a {
		color: ${({ theme }) => theme.colors.secondary};
		border: none;
	}

	a:hover {
		transition: 0.25s ease-in-out;
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
				<a href='https://www.github.com/calebpdx'>
					<FontAwesomeIcon icon={faGithubAlt} size='lg' />
				</a>
			</li>
			<li>
				<a href='https://www.instagram.com/cloroxo'>
					<FontAwesomeIcon icon={faInstagram} size='lg' />
				</a>
			</li>
			<li>
				<a href='https://www.linkedin.com/in/calebawhite'>
					<FontAwesomeIcon icon={faLinkedinIn} size='lg' />
				</a>
			</li>
		</Container>
	)
}

export default Socials
