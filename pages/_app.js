import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { config } from '@fortawesome/fontawesome-svg-core'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import '@fortawesome/fontawesome-svg-core/styles.css'
import normalize from 'normalize.css/normalize.css'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #020202;
  	font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
	colors: {
		primary: '#06B49A',
		secondary: '#AFDBD2',
		powderWhite: '#FFFDF9',
		onyx: '#36313D',
	},
	fonts: ['Helvetica', 'sans-serif', 'Roboto'],
	fontSizes: {
		xs: '0.75em',
		sm: '1em',
		md: '2em',
		lg: '3em',
	},
}

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
