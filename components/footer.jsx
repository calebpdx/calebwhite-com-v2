import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { getYear } from 'date-fns'
import useSWR from 'swr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

import { respondAt } from '@utils/_respondAt'

const fetcher = (url) => fetch(url).then((res) => res.json())

function getRepo() {
	const { data, error } = useSWR(
		'https://api.github.com/repos/calebpdx/calebpdx',
		fetcher
	)

	if (error) return <div>failed to load</div>
	if (!data) return <div>loading...</div>
	return data
}

const Container = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	padding: 1rem 0;
	background-color: ${({ theme }) => theme.colors.bg.main};
	color: ${({ theme }) => theme.colors.altLight};
	font-size: 1rem;

	${respondAt.lg`
		flex-direction: row;
		width: 70%;
		max-width: 1520px;
	`}

	a {
		font-size: ${({ theme }) => theme.fontSizes.sm};
		line-height: 1;
		font-weight: 400;
	}
`

const Copyright = styled.div`
	margin: auto;
	display: flex;
	text-align: center;
	width: 100%;
	align-items: center;
	justify-content: center;

	p {
		font-size: ${({ theme }) => theme.fontSizes.xs};
	}

	a {
		font-size: ${({ theme }) => theme.fontSizes.xs};
		font-weight: 500;
	}

	${respondAt.lg`
		justify-content: flex-start;
	`}
`
const Source = styled.button`
	color: ${({ theme }) => theme.colors.altLight};
	/* background-color: ${({ theme }) => theme.colors.buttons.primary}; */
	/* border: 0.15em solid ${({ theme }) => theme.colors.buttons.secondary}; */
	border: none;
	background: none;
	border-radius: 0.35em;
	display: flex;
	flex-direction: row;
	min-width: 10rem;
	align-items: center;
	justify-items: flex-end;
	align-content: center;
	justify-content: center;
	padding: 0.25em;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.buttons.hover};
		/* background-color: ${({ theme }) => theme.colors.buttons.hoverbg};
		border: 0.15em solid ${({ theme }) => theme.colors.buttons.hover}; */
	}

	div {
		padding: 0.25rem;
	}

	h4 {
		margin: 0;
	}

	.gh {
		padding: 0 0.1rem 0 0.25rem;
	}
`

const Footer = () => {
	const data = getRepo()

	return (
		<Container>
			<Copyright>
				<p>
					&copy; {getYear(new Date())} Caleb White. &#10094;{' '}
					<Link href='/siteinfo'>
						<a>Site Information </a>
					</Link>{' '}
					|{' '}
					<Link href='/privacy'>
						<a>Privacy </a>
					</Link>{' '}
					&#10095;
				</p>
			</Copyright>
			<a href={data.html_url} rel='noreferrer' target='_blank'>
				<Source>
					<div>source</div>
					<div>
						<FontAwesomeIcon
							icon={faStar}
							size='sm'
							className='gh'
						/>{' '}
						{data.stargazers_count}
					</div>
					<div>
						<FontAwesomeIcon
							icon={faCodeBranch}
							size='sm'
							className='gh'
						/>{' '}
						{data.forks_count}
					</div>
				</Source>
			</a>
		</Container>
	)
}

export default Footer
