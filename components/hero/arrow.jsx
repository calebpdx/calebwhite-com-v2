import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import theme from '../themes/_darkTheme'

const bounce = keyframes`
	
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-30px);
		}
		60% {
			transform: translateY(-15px);
		}
	`

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: flex-column;
	justify-content: center;
	align-items: flex-end;
	height: 50px;

	.downArrow {
		color: ${({ theme }) => theme.colors.powderWhite};
	}

	div {
		color: ${({ theme }) => theme.colors.onyx};
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	p {
		margin: 0.35rem;
	}

	.bounce {
		animation: 2s ${bounce} ease infinite;
	}
`

const Arrow = () => {
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset <= 300) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', toggleVisibility)

		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	return (
		<Container>
			{isVisible && (
				<a href='#' className='bounce'>
					<div>
						<FontAwesomeIcon
							icon={faChevronDown}
							size='2x'
							className='downArrow'
						/>
					</div>
				</a>
			)}
		</Container>
	)
}

export default Arrow
