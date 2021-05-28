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

  a {
		display: inline-block;
		line-height: 0.8;
		color: ${theme.colors.powderWhite};
		font-weight: 500;
		text-decoration: none;
	:hover,
	:focus {
		color: ${theme.colors.primary};
		transition: 0.15s ease-in-out;
		border: none;
	}

	}

	p{
		font-size: ${theme.fontSizes.sm};
		color: ${theme.colors.powderWhite};
		line-height: 1.5;
	}
`

export default GlobalStyle
