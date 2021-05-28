import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import theme from '../../themes/_darkTheme'
import { respondAt } from '../../utils/_respondAt'

const Profiled = styled.aside`
	position: sticky;
	width: 100%;
	top: 7rem;

	.rounded {
		border-radius: 1em;
	}

	${respondAt.lg`
		position: sticky;
	`}
`

const Profile = () => {
	return (
		<Profiled>
			<Image
				src='/asset_images/caleb-grayscale.png'
				width={350}
				height={350}
				className='rounded'
				layout='responsive'
			/>
		</Profiled>
	)
}

export default Profile
