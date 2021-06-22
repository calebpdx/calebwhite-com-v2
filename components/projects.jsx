import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ProjectCard from '@components/projects/projectCard'

import { respondAt } from '../utils/_respondAt'

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

const Container = styled.section`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 80%;
	margin: 3rem 2rem;

	${respondAt.md`
    	flex-direction: row;
		width: 70%;
        max-width: 1520px;
	`};
`

const Title = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex-basis: 0 1;
	font-weight: 600;
	margin-bottom: 0.5em;
`

const ProjectList = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;

	${respondAt.sm`
		justify-content: flex-start;
		align-items: flex-start;
    	flex-direction: row;
		width: 100%;
        max-width: 1520px;
	`};
`

const Projects = () => {
	const [projects, setProjects] = useState([])

	const fetchEntries = async () => {
		const projects = await client.getEntries({
			content_type: 'projects',
		})
		if (projects.items) return projects.items
		// eslint-disable-next-line no-undef
		console.log(`Error getting Entries for ${contentType.name}.`)
	}

	useEffect(() => {
		async function getProjects() {
			const newProjects = await fetchEntries()

			// Sort the results
			const allProjects = []
				.concat(newProjects)
				.sort((a, b) => (a.fields.title > b.fields.title ? 1 : -1))

			setProjects([...allProjects])
		}

		getProjects()
	}, [])

	return (
		<Wrapper id='projects'>
			<Container>
				<Title>Featured Projects</Title>
				<ProjectList>
					{projects.map((project) => (
						<ProjectCard key={project.sys.id} project={project} />
					))}
				</ProjectList>
			</Container>
		</Wrapper>
	)
}

export default Projects
