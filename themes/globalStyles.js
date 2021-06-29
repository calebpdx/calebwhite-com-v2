import { createGlobalStyle } from 'styled-components'
import { respondAt } from '../utils/_respondAt'

const GlobalStyles = createGlobalStyle`

  html {
	scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.colors.bg.main};

  }

  body {
  	font-family:'Noto Sans JP', Helvetica, Arial, sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	transition: all 0.25s linear;
  }

  h1, h2, h3, h4, h5, h6 {
	font-family: 'Poppins', sans-serif;	
  }

  h2 {
	font-weight: 400;
    color: ${({ theme }) => theme.colors.text.title};
    padding: 0;
	margin: 0;
	text-align: left;
	font-size: ${({ theme }) => theme.fontSizes.lg};

	${respondAt.sm`
      font-size: ${({ theme }) => theme.fontSizes.xl};
    `}

  }

  a {
	display: inline-block;
	line-height: 0.95;
	color: ${({ theme }) => theme.colors.text.primary};
	font-weight: 500;
	text-decoration: none;
	transition: all 0.25s linear;
		
		:hover,
		:focus {
			color: ${({ theme }) => theme.colors.primary};
			border: none;
		}

	}

	p {
		font-size: ${({ theme }) => theme.fontSizes.sm};
		color: ${({ theme }) => theme.colors.altLight};
		line-height: 1.5;
		
	}

	/* CSS Additions for the Headroom */
	.headroom-wrapper {
		width: 100%;
	}

	.headroom--pinned {
		/* border-bottom: 0.2rem solid ${({ theme }) => theme.colors.bg.card}; */
	}

	::selection {
		color: ${({ theme }) => theme.colors.primary};
	}
`

export default GlobalStyles
