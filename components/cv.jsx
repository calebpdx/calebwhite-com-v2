import React from 'react'
import styled from 'styled-components'

import { respondAt } from '../utils/_respondAt'

// About Page Parts
import ProfileContents from './about/profile'
import Narrative from './about/narrative'

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.bg.secondary};
	width: 100%;
	display: flex;
	justify-content: center;
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
const Title = styled.h2`
	order: 1;
	width: 100%;
	flex-basis: 0 1;
	font-weight: 600;
`

const SortJobs = styled.aside`
	order: 2;
	width: 100%;
	margin-top: 1.5rem;

	${respondAt.sm`
        order: none;

	    width: 30%;
	`}
`

const JobDescriptions = styled.section`
	order: 3;
	width: 100%;
	height: 900px;
	margin-top: 1.5rem;

	${respondAt.sm`
        order: 2;
	    padding: 0 3rem 0 0;
	    width: calc(70% - 3rem);
	`}
`

const CV = () => {
	return (
		<Wrapper>
			<Container>
				<Title>Work Experience</Title>
				<SortJobs>List Jobs</SortJobs>
				<JobDescriptions>Job descriptions and sorting</JobDescriptions>
			</Container>
		</Wrapper>
	)
}

export default CV