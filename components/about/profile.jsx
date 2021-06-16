import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { respondAt } from '../../utils/_respondAt'

const Profiled = styled.aside`
	box-sizing: border-box;
	width: 100%;
	top: 2rem;

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
			color: ${({ theme }) => theme.colors.text.primary};
			font-weight: 400;
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

	div {
		display: flex;
		flex-direction: row;
		border-radius: 1em;
		max-width: calc(35% - 1rem);
		height: auto;
		margin: 0 1em 1em 0;
		opacity: 40%;
		cursor: pointer;

		:hover {
			opacity: 100%;
		}

		:nth-child(3n) {
			max-width: 30%;
			margin-right: 0;
		}
	}
`
const imageDir = [
	{
		id: 1,
		src: '/asset_images/caleb-grayscale.jpg',
		alt: 'Caleb White - Frontend Engineer',
		blur: 'TqOWvnof~q?bxuM{j[M{M{xuofay',
	},
	{
		id: 2,
		src: '/asset_images/caleb-1.jpg',
		alt: 'Beautiful Kaiui Sunset',
		blur: 'TtHxWZ~V%L^*%2fkIWIWM|RkoJoJ',
	},
	{
		id: 3,
		src: '/asset_images/caleb_black.jpg',
		alt: 'Darth Caleb',
		blur: 'T58z.G%M00004nIU9F_3~q4nt7xu',
	},
	{
		id: 4,
		src: '/asset_images/caleb.jpg',
		alt: 'Caleb in Color',
		blur: 'L#P6z1X9_NMx?bxuRjWBS~MxRPoz',
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
							blurDataURL={currentImage.blur}
							width='fill'
							height='fill'
							layout='responsive'
							placeholder='blur'
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
								blurDataURL={thumbImg.blur}
								width={350}
								height={350}
								alt={thumbImg.alt}
								onClick={() => {
									setImage(thumbImg.id)
								}}
								placeholder='blur'
							/>
						</div>
					))}
			</Thumbs>
		</Profiled>
	)
}

export default Profile
