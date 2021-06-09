/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

import normalize from 'normalize.css/normalize.css'
import '../styles/_fontStyles.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'

export default function App({ Component, pageProps }) {
	// const [theme, toggleTheme] = useDarkMode()
	// const themeMode = theme === 'main' ? mainTheme : darkTheme

	return (
		<>
			<Component {...pageProps} />
		</>
	)
}
