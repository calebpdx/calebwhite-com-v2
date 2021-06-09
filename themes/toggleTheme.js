import React, { useState } from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeButton = styled.button`
	height: auto;
	display: flex;
	justify-content: center;
	overflow: hidden;
	color: ${({ theme }) => theme.colors.title};
	margin-right: 1rem;
	background: none;
	border: none;
	cursor: pointer;
	transition: all 0.25s linear;

	:hover {
		color: ${({ theme }) => theme.colors.primary};
	}

	svg {
		transition: all 0.25s linear;
		height: auto;
	}
`

const Toggle = ({ theme, toggleTheme }) => {
	const isMain = theme === 'mainTheme'

	return (
		<ThemeButton isMain={isMain} onClick={toggleTheme}>
			{isMain ? (
				<FontAwesomeIcon icon={faMoon} size='lg' />
			) : (
				<FontAwesomeIcon icon={faSun} size='lg' />
			)}
		</ThemeButton>
	)
}

Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
}

export default Toggle
