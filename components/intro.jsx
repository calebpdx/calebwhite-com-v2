import React from 'react'
import styled from 'styled-components'
import Socials from './_helpers/socials'

import { respondAt } from '../utils/_respondAt'

const Intro = styled.main`
	width: 100%;
	padding: 0;
	margin: 0;
	display: flex;
	flex: auto 1;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	font-size: ${({ theme }) => theme.fontSizes.sm};

	h2 {
		color: ${({ theme }) => theme.colors.primary};
	}

	${respondAt.sm`
		font-size: ${({ theme }) => theme.fontSizes.md};
  	`}
`

const Para = styled.p`
	font-family: 'Noto Sans JP', sans-serif;
	color: ${({ theme }) => theme.colors.text.secondary};
	padding: 30px 0;
	margin: 0;
	text-align: left;
	font-size: ${({ theme }) => theme.fontSizes.sm};
	line-height: 1.5;

	a {
		border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
		:hover {
			border: none;
		}
	}

	${respondAt.sm`
		font-size: ${({ theme }) => theme.fontSizes.md};
  	`}
`
const SiteTitle = styled.h1`
	font-family: 'Poppins', sans-serif;
	font-size: ${({ theme }) => theme.fontSizes.xl};
	font-weight: 300;
	padding: 0;
	margin: 0.65rem 0 0.65rem;
	color: ${({ theme }) => theme.colors.text.title};

	strong {
		font-weight: 600;
	}

	${respondAt.sm`
    font-size: 4.75rem;
  `}
`

const Hero = () => {
	return (
		<Intro>
			<SiteTitle>
				Hey, I'm <strong>Caleb</strong>
			</SiteTitle>
			<h2>A Frontend Engineer based in Portland, OR</h2>
			<Para>
				I'm passionate about building a better web with exceptional
				digital experiences. Currently freelancing as{' '}
				<a href='https://www.fairwaycreative.com'>Fairway Creative</a>{' '}
				and open to full-time remote opportunities. You can learn more
				about my current skills, view cv, and more below.
			</Para>
			<Socials />
		</Intro>
	)
}

export default Hero
