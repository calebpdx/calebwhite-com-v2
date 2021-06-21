import React from 'react'
import styled from 'styled-components'
import { string, func, array } from 'prop-types'

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
	color: ${({ theme }) => theme.colors.altDark};
	font-size: ${({ theme }) => theme.fontSizes.xs};
	font-weight: 400;
	margin: 0;
	padding: 0;

	&.selected {
		color: ${({ theme }) => theme.colors.primary};
	}
`

const JobPost = ({ job, handler, selected }) => {
	const { jobName: title, companyName: company } = job.fields

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
	job: array.isRequired,
	handler: func.isRequired,
	selected: string.isRequired,
}

export default JobPost
