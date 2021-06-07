import React from 'react'
import styled from 'styled-components'
import theme from '../../themes/_darkTheme'

const SvgStyle = styled.svg`
	padding-left: 1.25rem;
	opacity: 100%;
	height: 60px;
	width: 50px;
	fill: ${({ theme }) => theme.colors.primary};

	#w-letter {
		fill: ${({ theme }) => theme.colors.wolfGray};
	}

	:hover {
		cursor: pointer;
		width: 60px;
		fill: ${({ theme }) => theme.colors.secondary};
		transition: width 0.25s ease-in-out;
		transition: fill 0.25s ease-in-out;

		#w-letter {
			fill: ${({ theme }) => theme.colors.powderWhite};
			transition: fill 0.25s ease-in;
		}
	}
`

const Logo = () => {
	return (
		<SvgStyle
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			x='0px'
			y='0px'
			width='432px'
			height='577.4px'
			viewBox='0 0 432 577.4'
		>
			<g id='c-letter'>
				<rect id='c-top' width='432' height='107.8' />
				<rect
					id='c-left'
					x='-234'
					y='234'
					transform='matrix(6.123234e-17 -1 1 6.123234e-17 -234 342)'
					width='576'
					height='108'
				/>
				<rect id='c-bottom' y='468' width='432' height='109.4' />
			</g>
			<g id='w-letter'>
				<rect
					id='w-left_1_'
					x='144'
					y='144'
					className='st0'
					width='72'
					height='288'
				/>
				<rect
					id='w-middle_1_'
					x='252'
					y='216'
					className='st0'
					width='72'
					height='216'
				/>
				<rect
					id='w-right_1_'
					x='360'
					y='144'
					className='st0'
					width='72'
					height='288'
				/>

				<rect
					id='w-bottom_1_'
					x='288'
					y='288'
					transform='matrix(-1.836970e-16 1 -1 -1.836970e-16 720 72)'
					className='st0'
					width='72'
					height='216'
				/>
			</g>
		</SvgStyle>
	)
}

export default Logo
