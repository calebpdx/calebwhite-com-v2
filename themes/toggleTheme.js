import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

const ThemeButton = styled.button`
	margin-right: 1rem;
`

const Toggle = ({ theme, toggleTheme }) => {
	const isMain = theme === 'main'
	return <ThemeButton onClick={toggleTheme}>T X</ThemeButton>
}

Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
}

export default Toggle
