import React from 'react'
import styled from 'styled-components'
import { string, func, number } from 'prop-types'

const JobTitle = styled.h4`
	color: ${({ theme }) => theme.colors.text.secondary};
	font-size: ${({ theme }) => theme.fontSizes.sm};
	margin: 0;
	padding: 0;

	&.selected {
		color: ${({ theme }) => theme.colors.text.title};
	}
`
const Company = styled.p`
	color: ${({ theme }) => theme.colors.altLight};
	font-size: ${({ theme }) => theme.fontSizes.xs};
	font-weight: 400;
	margin: 0;
	padding: 0;

	&.selected {
		color: ${({ theme }) => theme.colors.primary};
	}
`

const JobPost = ({ title, company, handler, selected }) => {
	return (
		<li
			onClick={handler}
			className={selected == 'true' ? 'selected' : undefined}
		>
			<JobTitle className={selected == 'true' ? 'selected' : undefined}>
				{title}
			</JobTitle>
			<Company className={selected == 'true' ? 'selected' : undefined}>
				{company}
			</Company>
		</li>
	)
}

JobPost.propTypes = {
	title: string.isRequired,
	company: string.isRequired,
	handler: func.isRequired,
	selected: string.isRequired,
}

export default JobPost
