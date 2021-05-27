import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import theme from '../themes/_darkTheme'

const Profile = styled.aside`
	width: 100%;

	.rounded {
		border-radius: 1em;
	}
`

const Profiled = () => {
	return (
		<Profile>
			<Image
				src='/asset_images/caleb-grayscale.png'
				width={350}
				height={350}
				className='rounded'
			/>
		</Profile>
	)
}

export default Profiled
