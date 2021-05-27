/* eslint-disable react/no-unescaped-entities */

// Dependencies
import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

// Required Components
import Socials from '../components/socials'
import Banner from '../components/banner'
import PageWrapper from '../components/pageWrapper'
import Navigation from '../components/navigation'
import About from '../components/about'
import Footer from '../components/footer'
import Arrow from '../components/arrow'

// Utilities Used
import { respondAt } from '../utils/_respondAt'

const Landing = styled.section`
	min-height: calc(100vh - 117px);
	width: 75%;
	padding: 0;
	margin: 0;
	display: flex;
	flex: auto 1;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	font-size: ${({ theme }) => theme.fontSizes.sm};

	${respondAt.lg`
    width: 60%;
  `}
`

const Intro = styled.main`
	width: 100%;
	padding: 0;
	margin: 0;
	display: flex;
	flex: auto 1;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	font-size: ${({ theme }) => theme.fontSizes.sm};
`

const Para = styled.p`
	font-family: 'Noto Sans JP', sans-serif;
	color: ${({ theme }) => theme.colors.wolfGray};
	padding: 30px 0;
	margin: 0;
	text-align: left;
	font-size: ${({ theme }) => theme.fontSizes.md};
	line-height: 1.5;

	a {
		border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
	}
`
const SiteTitle = styled.h1`
	font-family: 'Poppins', sans-serif;
	font-size: ${({ theme }) => theme.fontSizes.xl};
	font-weight: 300;
	padding: 0;
	margin: 0.65rem 0 0.65rem;
	color: ${({ theme }) => theme.colors.powderWhite};

	strong {
		font-weight: 600;
	}

	${respondAt.sm`
    font-size: 4.75rem;
  `}
`

export default function Home() {
	return (
		<>
			<Head>
				<title>Caleb White - Frontend Engineer - Portland, OR</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<PageWrapper>
				<Navigation />
				<Landing>
					<Intro>
						<SiteTitle>
							Hey, I'm <strong>Caleb</strong>
						</SiteTitle>
						<h2>A Frontend Engineer based in Portland, OR</h2>
						<Para>
							I'm passionate about building a better web with
							exceptional digital experiences. Currently
							freelancing as{' '}
							<a href='https://www.fairwaycreative.com'>
								Fairway Creative
							</a>{' '}
							and open to full-time remote opportunities. You can
							learn more about my current skills, view cv, and
							more below.
						</Para>
						<Socials />
					</Intro>
					<Arrow />
				</Landing>
				<About />
				<Footer />

				{/* <Footer>
					<p>
						Copyright &copy; <Moment format='YYYY' /> Caleb White.
						All Rights Reserved.
					</p>
				</Footer> */}
			</PageWrapper>
		</>
	)
}
