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
				Hi, I&lsquo;m Caleb White. I am a full-stack engineer living in
				Portland, OR. I enjoy the challenge of building better user
				digital experiences, balancing simplicity, functionality and
				accessibility on the web.
			</p>
			<p>
				My experience is multi-faceted, having worked in a variety of roles. Currently I am a full-stack engineer at{' '}<a href="https://deptagency.com" title="Dept Agency">Dept</a> building robust fullstack applications.
				My professional experience includes nonprofit
				program leadership, senior omni-channel
				retail leadership, frontend engineering and freelancing. I leverage the insights gained from all
				of these roles, which provides me with a unique perspective on
				challenges facing businesses today. 
			</p>
			<p>
				I follow atomic design principles for creating DRY components in
				my projects. Thus creating lean, reusable, and scalable code. Currently I am focused on building scalable
			</p>
		</Nar>
	)
}

export default Narrative
