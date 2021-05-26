import React from 'react'
import styled from 'styled-components'

import theme from '../themes/_darkTheme'
import { respondAt } from '../utils/_respondAt'

const Container = styled.section`
	display: flex;
	flex-direction: row;
	width: 100%;

	${respondAt.sm`
		width: 60%;
	`}
`

const Profile = styled.div`
	height: 300px;
	width: 30%;
	background-color: green;
`

const AboutTwo = styled.div`
	width: 70%;
	background-color: red;
`

const About = () => {
	return (
		<Container>
			<Profile>Profile</Profile>
			<AboutTwo>ProfileTwo</AboutTwo>
		</Container>
	)
}

export default About
