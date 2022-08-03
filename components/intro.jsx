import React from 'react'
import styled from 'styled-components'
import Socials from '@components/_helpers/socials'

import { respondAt } from '@utils/_respondAt'

const Intro = styled.main`
	width: 100%;
	max-width: 100%;
	margin: 0;
	padding: 0;
	display: flex;
	flex: auto 1;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	font-size: ${({ theme }) => theme.fontSizes.md};

	${respondAt.sm`
		font-size: ${({ theme }) => theme.fontSizes.lg};
  	`}

	h2 {
		color: ${({ theme }) => theme.colors.primary};
		font-size: ${({ theme }) => theme.fontSizes.md};

		${respondAt.sm`
		font-size: ${({ theme }) => theme.fontSizes.xl};
        `}
	}
`

const Para = styled.p`
	font-family: 'Noto Sans JP', sans-serif;
	color: ${({ theme }) => theme.colors.text.secondary};
	padding: 30px 0;
	margin: 0;
	text-align: left;
	font-size: ${({ theme }) => theme.fontSizes.md};
	line-height: 1.5;

	a {
		border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
		:hover {
			border: none;
		}
	}

	${respondAt.sm`
		font-size: ${({ theme }) => theme.fontSizes.lg};
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
				Hey, I&apos;m <strong>Caleb</strong>.
			</SiteTitle>
			<h2>A Full Stack Software Engineer based in Portland, OR</h2>
			<Para>
				I&apos;m passionate about building exceptional digital
				experiences. Currently Full Stack Software Engineer at {' '}
				<a
					href='https://www.deptagency.com/en-us/'
					target='_blank'
					rel='noreferrer'
				>
					DEPT®
				</a> and experiment and do fun things in the web3 space with 				<a
					href='https://www.westcoastnft.com/'
					target='_blank'
					rel='noreferrer'
				>West Coast NFTs</a> and <a
					href='https://www.unicornpowered.xyz/'
					target='_blank'
					rel='noreferrer'
				>Unicorn Powered</a>. Currently, I am not available freelance projects and opportunities.
			</Para>
			<Socials />
		</Intro>
	)
}

export default Hero
