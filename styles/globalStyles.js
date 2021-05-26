import { createGlobalStyle } from 'styled-components'
import theme from '../themes/_darkTheme'
import { respondAt } from '../utils/_respondAt'

const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${theme.colors.bg};
  	font-family:'Noto Sans JP', Helvetica, Arial, sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h2 {
	font-family: 'Noto Sans JP', sans-serif;
	font-weight: 400;
    color: ${theme.colors.primary};
    padding: 0;
	margin: 0;
	text-align: left;
	font-size: ${theme.fontSizes.md};

	${respondAt.sm`
    font-size: ${theme.fontSizes.lg};
  `}

  }
`

export default GlobalStyle
