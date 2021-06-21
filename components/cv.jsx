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
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	padding: 1em 0;
	border-top: 0.15em solid ${({ theme }) => theme.colors.bg.main};
	border-bottom: 0.15em solid ${({ theme }) => theme.colors.bg.card};
	transition: all 0.25s linear;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 80%;
	margin: 0 0 2rem;

	${respondAt.sm`
    	flex-direction: row;
		width: 80%;
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
		width: 30%;
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
	width: 100%;
	margin-top: 1rem;

	${respondAt.sm`
		width: 70%;
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
	margin: 2rem;
`

const Experience = () => {
	const [currentExp, setCurrentExp] = useState(4)
	const [jobs, setJobs] = useState([])

	//Update the state of Job Description field with the currently selected tab
	const handleDesc = (key) => {
		setCurrentExp(key)
	}

	const fetchEntries = async () => {
		const entries = await client.getEntries({ content_type: 'jobs' })
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
		}

		getJobs()
	}, [])

	return (
		<Wrapper id='cv'>
			<Title>Work Experience</Title>
			<Container>
				<JobList>
					<ul>
						{jobs.map((job) => (
							<JobPost
								key={job.sys.id}
								job={job}
								handler={() => handleDesc(job.fields.jobId)}
								selected={
									currentExp != job.fields.jobId
										? 'false'
										: 'true'
								}
							/>
						))}
					</ul>
				</JobList>
				<JobDesc>
					{jobs
						.filter((desc) => desc.fields.jobId == currentExp)
						.map((job) => {
							return <DescBox key={job.fields.jobId} job={job} />
						})}
				</JobDesc>
			</Container>
		</Wrapper>
	)
}

export default Experience
