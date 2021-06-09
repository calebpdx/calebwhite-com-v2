import { createGlobalStyle } from 'styled-components'
import { respondAt } from '../utils/_respondAt'

const GlobalStyles = createGlobalStyle`

  body {
    background-color: ${({ theme }) => theme.colors.bg.main};
  	font-family:'Noto Sans JP', Helvetica, Arial, sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	transition: all 0.25s linear;
  }

  h2 {
	font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
	margin: 0;
	text-align: left;
	font-size: ${({ theme }) => theme.fontSizes.md};

	${respondAt.sm`
      font-size: ${({ theme }) => theme.fontSizes.lg};
    `}

  }

  a {
	display: inline-block;
	line-height: 0.8;
	color: ${({ theme }) => theme.colors.altLight};
	font-weight: 500;
	text-decoration: none;
	transition: all 0.25s linear;
		
		:hover,
		:focus {
			color: ${({ theme }) => theme.colors.secondary};
			border: none;
		}

	}

	p {
		font-size: ${({ theme }) => theme.fontSizes.sm};
		color: ${({ theme }) => theme.colors.altLight};
		line-height: 1.5;
		
	}
`

export default GlobalStyles
