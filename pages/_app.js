/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import normalize from 'normalize.css/normalize.css'
import { ThemeProvider } from 'styled-components'
import '../styles/_fontStyles.css'

import theme from '../themes/_darkTheme'
import GlobalStyle from '../styles/globalStyles'

import { library } from '@fortawesome/fontawesome-svg-core'
import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
