import React from 'react'
import styled from 'styled-components'
import { respondAt } from '@utils/_respondAt'

const Nar = styled.div`
	p {
		color: ${({ theme }) => theme.colors.text.secondary};
		font-size: ${({ theme }) => theme.fontSizes.md};

		${respondAt.lg`
			font-size: ${({ theme }) => theme.fontSizes.lg};

		`}
	}
`

const Narrative = () => {
	return (
		<Nar>
			<p>
				Hi, I&lsquo;m Caleb White. I am a frontend engineer living in
				Portland, OR. I enjoy the challenge of building better user
				digital experiences, balancing simplicity, functionality and
				accessibility.
			</p>
			<p>
				The diversity of my professional experience includes nonprofit
				program leadership, senior retail leadership, omni-channel
				retail, and freelancing. I leverage the insights gained from all
				of these roles, which provides me with a unique perspective on
				challenges facing businesses today. My primary focus is bringing
				the in-store retail experience online, and propelling businesses
				to the next level.
			</p>
			<p>
				I follow atomic design principles for creating DRY components in
				my projects. Thus creating lean, reusable, and scalable code. I
				currently focus on Next.js/React and headless e-commerce.
			</p>
			<p>I am available for full-time and freelance work.</p>
		</Nar>
	)
}

export default Narrative
