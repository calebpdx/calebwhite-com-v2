import React from 'react'
import styled from 'styled-components'
import { array } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import {
	faExternalLinkAlt,
	faFolderOpen,
} from '@fortawesome/free-solid-svg-icons'

import { respondAt } from '@utils/_respondAt'

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background-color: ${({ theme }) => theme.colors.bg.secondary};
	border: 0.1em solid ${({ theme }) => theme.colors.bg.card};
	margin-top: 1em;
	padding: 1em;
	width: 100%;

	${respondAt.sm`
        min-height: 290px;
        width: 33.3%;
	    margin: 1em 1em 0 0;
    `}

	&:nth-child(3) {
		width: 100%;
		margin-right: 0;

		${respondAt.sm`
	        width: 33.3%;
        `}
	}
`
const Title = styled.h4`
	color: ${({ theme }) => theme.colors.text.primary};
	font-size: ${({ theme }) => theme.fontSizes.md};
	margin: 0;
	margin-top: 1em;
`

const Desc = styled.p`
	flex-grow: 1;
	margin: 0;
	padding: 0.5em 0;
`

const Tags = styled.ul`
	color: ${({ theme }) => theme.colors.text.secondary};
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	font-size: ${({ theme }) => theme.fontSizes.xs};
	font-weight: 500;
	list-style: none;
	align-items: flex-end;
	margin: 0;
	min-height: 50px;
	padding: 0;
	width: 100%;

	${respondAt.sm`
	    min-height: 50px;
    `}

	li {
		padding: 0 0.6em 0.6em 0;
	}
`

const Links = styled.div`
	width: 100%;
	margin: 0;
	padding: 0.25em 0;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;

	svg {
		font-size: ${({ theme }) => theme.iconSizes.md};
	}

	a {
		margin-right: 1em;

		&:last-of-type {
			margin: 0;
		}
	}

	.main {
		display: flex;
		margin: 0;
		justify-content: flex-start;
		flex-grow: 1;
	}
`

const ProjectCard = ({ project }) => {
	const { title, description, builtWith, github, url } = project.fields

	return (
		<Card>
			<Links>
				<p className='main'>
					<FontAwesomeIcon icon={faFolderOpen} />
				</p>
				{github != undefined ? (
					<a href={github} target='_blank' rel='noreferrer'>
						<FontAwesomeIcon icon={faGithubAlt} />
					</a>
				) : (
					''
				)}
				{url != undefined ? (
					<a href={url} target='_blank' rel='noreferrer'>
						<FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
				) : (
					''
				)}
			</Links>
			<Title>{title}</Title>
			<Desc>{description}</Desc>
			<Tags>
				{builtWith.map((tools) => (
					<li key={project.sys.id}>{tools}</li>
				))}
			</Tags>
		</Card>
	)
}

ProjectCard.propTypes = {
	project: array.isRequired,
}

export default ProjectCard
