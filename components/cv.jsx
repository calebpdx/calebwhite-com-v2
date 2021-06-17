import React, { useState } from 'react'
import styled from 'styled-components'

import { respondAt } from '../utils/_respondAt'

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.bg.main};
	color: ${({ theme }) => theme.colors.text.primary};
	width: 100%;
	display: flex;
	justify-content: center;
	border-top: 0.15em solid ${({ theme }) => theme.colors.bg.main};
	border-bottom: 0.15em solid ${({ theme }) => theme.colors.bg.card};
	transition: all 0.25s linear;
`
const Container = styled.section`
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

const JobList = styled.div`
	display: flex;
	width: calc(30% - 1.1rem);
	border-right: 0.1rem solid ${({ theme }) => theme.colors.primary};
	padding-right: 1rem;

	ul {
		display: flex;
		width: 100%;
		margin: 0;
		padding: 0;
		flex-direction: column;
		list-style-type: none;

		li {
			width: 95%;
			padding: 0.5em;
			cursor: pointer;
			display: block;
			margin-bottom: 0.25em;

			&:hover {
				color: ${({ theme }) => theme.colors.text.title};
				background-color: ${({ theme }) => theme.colors.bg.secondary};

				p {
					color: ${({ theme }) => theme.colors.primary};
				}
			}
		}
	}
`
const JobDesc = styled.div`
	display: flex;
	flex-grow: 1;
	width: calc(70%-3rem);
	margin-left: 3rem;
`
const Title = styled.h2`
	color: ${({ theme }) => theme.colors.text.title};
	width: 100%;
	flex-basis: 0 1;
	font-weight: 600;
	text-align: center;
	margin-bottom: 2rem;
`

const JobTitle = styled.h3`
	font-size: ${({ theme }) => theme.fontSizes.sm};
	margin: 0;
	padding: 0;
`
const Company = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.xs};
	margin: 0;
	padding: 0;
`

const Experience = () => {
	const [currentExp, setCurrentExp] = useState()

	return (
		<Wrapper id='cv'>
			<Container>
				<Title>Work Experience</Title>
				<JobList>
					<ul>
						<li onClick={() => setCurrentExp('fwc')}>
							<JobTitle>Frontend Engineer / Founder</JobTitle>
							<Company>Fairway Creative</Company>
						</li>
						<li onClick={() => setCurrentExp('hfhpdx')}>
							<JobTitle>Retail Director</JobTitle>
							<Company>Habitat Portland Region</Company>
						</li>
						<li onClick={() => setCurrentExp('spshabitat')}>
							<JobTitle>Director of Retail Operations</JobTitle>
							<Company>
								South Puget Sound Habitat for Humanity
							</Company>
						</li>
						<li onClick={() => setCurrentExp('QM')}>
							<JobTitle>Freelance Web Developer</JobTitle>
							<Company>Quake Media Group</Company>
						</li>
					</ul>
				</JobList>
				<JobDesc>
					<p>{currentExp}</p>
				</JobDesc>
			</Container>
		</Wrapper>
	)
}

export default Experience
