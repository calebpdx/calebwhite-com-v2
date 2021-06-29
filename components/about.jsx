import React from 'react'
import styled from 'styled-components'

import { respondAt } from '../utils/_respondAt'

// About Page Parts
import ProfileContents from './about/profile'
import Narrative from './about/narrative'

const Wrapper = styled.div`
	margin: auto;
	background-color: ${({ theme }) => theme.colors.bg.secondary};
	width: 100%;
	display: flex;
	justify-content: center;
	border-top: 0.15em solid ${({ theme }) => theme.colors.bg.card};
	transition: all 0.25s linear;
`

const Container = styled.main`
	display: flex;
	flex-direction: column;
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

const Profile = styled.aside`
	order: 2;
	margin-top: 1.5rem;
	width: 100%;

	${respondAt.sm`
        order: none;

	    width: 30%;
	`}
`

const AboutContent = styled.section`
	order: 3;
	width: 100%;

	${respondAt.sm`
        order: 2;
	    padding: 0 3rem 0 0;
	    width: calc(70% - 3rem);
	`}
`

const About = () => {
	return (
		<Wrapper id='about'>
			<Container>
				<AboutContent>
					<Narrative />
				</AboutContent>
				<Profile>
					<ProfileContents />
				</Profile>
			</Container>
		</Wrapper>
	)
}

export default About
