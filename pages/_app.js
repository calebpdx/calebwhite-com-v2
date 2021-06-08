/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import normalize from 'normalize.css/normalize.css'
import { ThemeProvider } from 'styled-components'
import '../styles/_fontStyles.css'

import { useDarkMode } from '../themes/useDarkMode'
import { mainTheme, darkTheme } from '../themes/themes'
import GlobalStyles from '../themes/globalStyles'

import Toggle from '../themes/toggleTheme'

import { library } from '@fortawesome/fontawesome-svg-core'
import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'

export default function App({ Component, pageProps }) {
	// const [theme, toggleTheme] = useDarkMode()
	// const themeMode = theme === 'main' ? mainTheme : darkTheme

	return (
		<ThemeProvider theme={darkTheme}>
			<>
				<GlobalStyles />
				{/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
				<Component {...pageProps} />
			</>
		</ThemeProvider>
	)
}
