import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import theme from '../../themes/_darkTheme'
import { respondAt } from '../../utils/_respondAt'

const Profiled = styled.aside`
	box-sizing: border-box;
	position: sticky;
	width: 100%;
	top: 7rem;

	.rounded {
		border-radius: 1em;
	}

	figure {
		padding: 0;
		margin: 0;

		figcaption {
			text-align: center;
			padding: 10px;
		}
	}

	${respondAt.lg`
		position: sticky;
	`}
`

const Thumbs = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 1rem;
	width: 100%;
	justify-content: space-between;

	.img-thumb {
		border-radius: 1em;
		max-width: calc(35% - 1rem);
		height: auto;
		margin-right: 1rem;
		opacity: 40%;
		cursor: pointer;

		:last-child {
			max-width: 30%;
			margin: 0;
		}

		:hover {
			opacity: 100%;
		}
	}
`
const imageDir = [
	{
		id: 1,
		src: '/asset_images/caleb-grayscale.png',
		alt: 'Caleb White - Frontend Engineer',
	},
	{
		id: 2,
		src: '/asset_images/caleb-1.png',
		alt: 'Beautiful Kaiui Sunset',
	},
	{
		id: 3,
		src: '/asset_images/caleb-1.png',
		alt: 'Beautiful Kaiui Sunset',
	},
	{
		id: 4,
		src: '/asset_images/caleb.png',
		alt: 'Caleb in Color',
	},
]

const Profile = () => {
	const [activeImg, setImage] = useState(1)

	return (
		<Profiled>
			{imageDir
				.filter((image) => image.id == activeImg)
				.map((currentImage) => (
					<figure key={currentImage.id}>
						{/* <Image
							src={currentImage.src}
							width={350}
							height={350}
							quality={50}
							className='rounded'
							layout='responsive'
							loading='eager'
						/> */}
						<img
							src={currentImage.src}
							alt={currentImage.alt}
							className='rounded'
						/>
						<figcaption>{currentImage.alt}</figcaption>
					</figure>
				))}

			<Thumbs>
				{imageDir
					.filter((image) => image.id != activeImg)
					.map((thumbImg) => (
						<img
							key={thumbImg.id}
							className='img-thumb'
							src={thumbImg.src}
							alt={thumbImg.alt}
							onClick={() => {
								setImage(thumbImg.id)
							}}
						/>
					))}
			</Thumbs>
		</Profiled>
	)
}

export default Profile
