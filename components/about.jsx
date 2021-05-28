import React from 'react'
import styled from 'styled-components'

import theme from '../themes/_darkTheme'
import { respondAt } from '../utils/_respondAt'

// About Page Parts
import ProfileContents from './about/profile'
import Narrative from './about/narrative'

const Container = styled.main`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
	width: 80%;
	margin: 0 2rem;

	${respondAt.sm`
    	flex-direction: row;
		width: 65%;
        max-width: 1520px;
	`}
`
const Title = styled.h2`
	order: 1;
	width: 100%;
	flex-basis: 0 1;
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
		<Container>
			<Title>About Caleb</Title>
			<AboutContent>
				<Narrative />
			</AboutContent>
			<Profile>
				<ProfileContents />
			</Profile>
		</Container>
	)
}

export default About
