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

		img {
			border-radius: 1em;
		}

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
	list-style-type: none;
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
		src: '/asset_images/caleb-grayscale.jpg',
		alt: 'Caleb White - Frontend Engineer',
	},
	{
		id: 2,
		src: '/asset_images/caleb-1.jpg',
		alt: 'Beautiful Kaiui Sunset',
	},
	{
		id: 3,
		src: '/asset_images/caleb_black.jpg',
		alt: 'Beautiful Kaiui Sunset',
	},
	{
		id: 4,
		src: '/asset_images/caleb.jpg',
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
					<figure className='rounded' key={currentImage.id}>
						<Image
							src={currentImage.src}
							width='fill'
							height='fill'
							layout='responsive'
						/>

						<figcaption>{currentImage.alt}</figcaption>
					</figure>
				))}

			<Thumbs>
				{imageDir
					.filter((image) => image.id != activeImg)
					.map((thumbImg) => (
						<div key={thumbImg.id} className='img-thumb'>
							<Image
								src={thumbImg.src}
								width={350}
								height={350}
								className='img-thumb'
								alt={thumbImg.alt}
								onClick={() => {
									setImage(thumbImg.id)
								}}
							/>
						</div>
					))}
				{/* <img
							key={thumbImg.id}
							className='img-thumb'
							src={thumbImg.src}
							alt={thumbImg.alt}
							onClick={() => {
								setImage(thumbImg.id)
							}}
						/> */}
			</Thumbs>
		</Profiled>
	)
}

export default Profile
