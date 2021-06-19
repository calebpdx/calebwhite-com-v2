import React from 'react'
import styled from 'styled-components'
import { string, func, number } from 'prop-types'
import { format, formatDistanceStrict } from 'date-fns'

import { respondAt } from '@utils/_respondAt'

const Container = styled.main`
	width: 100%;
	margin: 0;
	padding: 0;
`

const BulletPoints = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;

	li {
		margin: 0;
		padding: 0;

		&:before {
			margin: 0;
			margin-right: 0.5em;
			font-size: 1.25em;
			font-weight: 400;
			padding: 0;
			position: relative;
			content: '⇢';
			color: ${({ theme }) => theme.colors.text.title};
		}
	}
`

const Position = styled.h3`
	font-size: 1.5rem;
	margin: 0;
	padding: 0;
`

const Company = styled.p`
	margin: 0;
	padding: 0;

	a {
		color: ${({ theme }) => theme.colors.primary};
	}
`

const Tenure = styled.p`
	margin: 0.25em 0 0.75em;
	font-size: ${({ theme }) => theme.fontSizes.xs};
	color: ${({ theme }) => theme.colors.altLight};
`

export const tenure = (starting, ended) => {
	if (ended != undefined) {
		let actualTenure = formatDistanceStrict(
			new Date(ended),
			new Date(starting)
		)

		return actualTenure
	}

	let newEnd = new Date()

	let actualTenure = formatDistanceStrict(
		new Date(starting),
		new Date(newEnd)
	)

	return actualTenure
}

const DescBox = ({ description, start, end, title, company, website }) => {
	return (
		<Container>
			<Position>{title}</Position>
			<Company>
				<a href={website} target='_blank' rel='noreferrer'>
					@{company}
				</a>
			</Company>
			<Tenure>
				{format(new Date(start), 'MMM yyyy')} -{' '}
				{end != undefined
					? format(new Date(end), 'MMM yyyy')
					: 'Present'}{' '}
				{'( '}
				{tenure(start, end)}
				{' )'}
			</Tenure>

			<BulletPoints>
				{description.map((value) => {
					return <li>{value}</li>
				})}
			</BulletPoints>
		</Container>
	)
}

export default DescBox
