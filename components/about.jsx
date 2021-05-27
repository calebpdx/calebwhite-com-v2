import React from 'react'
import styled from 'styled-components'

import theme from '../themes/_darkTheme'
import { respondAt } from '../utils/_respondAt'
import ProfileContents from './about_profile'

const Container = styled.main`
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	width: 100%;
	margin: 0 2rem;

	${respondAt.sm`
		width: 60%;
	`}
`

const Profile = styled.aside`
	height: 900px;
	width: 30%;
`

const AboutContent = styled.section`
	padding: 0 0 0 3rem;
	width: 70%;
`

const About = () => {
	return (
		<Container>
			<Profile>
				<ProfileContents />
			</Profile>
			<AboutContent>ProfileTwo</AboutContent>
		</Container>
	)
}

export default About
