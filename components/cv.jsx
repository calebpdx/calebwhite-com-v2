import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import fetchEntries from '@utils/fetchJobsList'

import { respondAt } from '@utils/_respondAt'
import JobPost from '@components/cv/JobPost'
import DescBox from '@components/cv/JobDesc'

const client = require('contentful').createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
	accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

const Wrapper = styled.section`
	background-color: ${({ theme }) => theme.colors.bg.main};
	color: ${({ theme }) => theme.colors.text.primary};
	width: 100%;
	display: flex;
	justify-content: center;
	border-top: 0.15em solid ${({ theme }) => theme.colors.bg.main};
	border-bottom: 0.15em solid ${({ theme }) => theme.colors.bg.card};
	transition: all 0.25s linear;
`
const Container = styled.div`
	display: flex;
	/* flex-direction: column; */
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
	width: 80%;
	margin: 3rem 0;

	${respondAt.lg`
    	flex-direction: row;
		width: 60%;
        max-width: 1100px;
	`};
`

const JobList = styled.aside`
	display: flex;
	width: 100%;
	border: 0.1rem solid ${({ theme }) => theme.colors.primary};
	padding-right: 1rem;

	${respondAt.sm`
        border: none;
    	border-right: 0.1rem solid ${({ theme }) => theme.colors.primary};
	    width: calc(30% - (1.1rem + 2px));
        padding-right: 1rem;
    `}

	ul {
		display: flex;
		width: 100%;
		margin: 0;
		padding: 0;
		flex-direction: column;
		list-style-type: none;

		li {
			width: 100%;
			padding: 0.5em;
			cursor: pointer;
			display: block;

			${respondAt.sm`
    			border: 1px solid ${({ theme }) => theme.colors.bg.main};
                width: 95%;
			    padding: 0.5em;
    			margin-bottom: 0.25em;
                

            `}

			&:hover {
				border-color: ${({ theme }) => theme.colors.primary};

				h4 {
					color: ${({ theme }) => theme.colors.text.title};
				}

				p {
					color: ${({ theme }) => theme.colors.text.primary};
				}
			}

			&.selected {
				background-color: ${({ theme }) => theme.colors.bg.secondary};

				${respondAt.sm`
    				border: 1px solid ${({ theme }) => theme.colors.bg.secondary};
                `}
				:hover {
					p {
						color: ${({ theme }) => theme.colors.primary};
					}
				}
			}
		}
	}
`
const JobDesc = styled.main`
	display: flex;
	flex-grow: 1;
	width: calc(70%-3rem);
	margin-top: 1rem;

	${respondAt.sm`
        margin-top: 0;
	    margin-left: 3rem;
    `}
`
const Title = styled.h2`
	color: ${({ theme }) => theme.colors.text.title};
	width: 100%;
	flex-basis: 0 1;
	font-weight: 600;
	text-align: center;
	margin-bottom: 2rem;
`

const Experience = () => {
	const [currentExp, setCurrentExp] = useState(4)
	const [jobs, setJobs] = useState([])

	//Update the state of Job Description field with the currently selected tab
	const handleDesc = (key) => {
		setCurrentExp(key)
	}

	const fetchEntries = async () => {
		const entries = await client.getEntries()
		if (entries.items) return entries.items
		// eslint-disable-next-line no-undef
		console.log(`Error getting Entries for ${contentType.name}.`)
	}

	useEffect(() => {
		async function getJobs() {
			const newJobs = await fetchEntries()
			const allJobs = []
				.concat(newJobs)
				.sort((a, b) => (a.fields.jobId > b.fields.jobId ? -1 : 1))
			setJobs([...allJobs])
			console.log(allJobs)
		}

		getJobs()
	}, [])

	return (
		<Wrapper id='cv'>
			<Container>
				<Title>Work Experience</Title>
				<JobList>
					<ul>
						{jobs.map((p) => {
							return (
								<JobPost
									selected={
										currentExp != p.fields.jobId
											? 'false'
											: 'true'
									}
									key={p.fields.jobId}
									title={p.fields.jobName}
									company={p.fields.companyName}
									handler={() => handleDesc(p.fields.jobId)}
								/>
							)
						})}
					</ul>
				</JobList>
				<JobDesc>
					{jobs
						.filter((desc) => desc.fields.jobId == currentExp)
						.map((p) => {
							return (
								<DescBox
									key={p.fields.jobId}
									title={p.fields.jobName}
									company={p.fields.companyName}
									description={p.fields.description}
									website={p.fields.companyWebsite}
									start={p.fields.startDate}
									end={p.fields.endDate}
								/>
							)
						})}
				</JobDesc>
			</Container>
		</Wrapper>
	)
}

export default Experience
