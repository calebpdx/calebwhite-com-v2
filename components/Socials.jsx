import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import styled from 'styled-components'

const Social = styled.ul`
	display: flex;
	flex-direction: row;
	list-style-type: none;
	margin: 2rem 0;
	justify-content: center;

	li {
		font-size: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	li:not(:last-child) {
		margin-right: 30px;
	}

	a {
		color: ${({ theme }) => theme.colors.powderWhite};
	}

	a:hover {
		color: ${({ theme }) => theme.colors.persianGreen};
	}
`

const Socials = () => {
	return (
		<Social>
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
		</Social>
	)
}

export default Socials
