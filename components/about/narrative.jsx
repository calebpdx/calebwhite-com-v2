import React from 'react'
import styled from 'styled-components'
import theme from '../../themes/_darkTheme'

const Nar = styled.div`
	p {
		color: ${({ theme }) => theme.colors.bg};
	}
`

const Narrative = () => {
	return (
		<Nar>
			<p>
				Hi, I'm Caleb White. Thank you so much for visiting my site, I
				appreciate you wanting to learn more about me! This site is
				mainly a representation of my web presence in the tech world,
				but I will be sure to throw in some extra tidbits. Et malesuada
				fames ac turpis. Adipiscing vitae proin sagittis nisl rhoncus
				mattis rhoncus urna. Scelerisque in dictum non consectetur a
				erat nam at lectus. Et netus et malesuada fames ac turpis. Et
				netus et malesuada fames ac turpis egestas.
			</p>
			<p>
				Dolor purus non enim praesent elementum facilisis leo vel. In
				hac habitasse platea dictumst quisque sagittis purus sit amet.
				Aliquet nec ullamcorper sit amet. Euismod lacinia at quis risus.
				Duis ultricies lacus sed turpis tincidunt id aliquet risus.
				Pellentesque habitant morbi tristique senectus et. Curabitur
				gravida arcu ac tortor dignissim convallis. Accumsan in nisl
				nisi scelerisque. A lacus vestibulum sed arcu non odio euismod
				lacinia at. Ac feugiat sed lectus vestibulum.
			</p>
			<p>
				Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.
				Molestie nunc non blandit massa enim nec dui. Ultrices sagittis
				orci a scelerisque purus semper. Pulvinar etiam non quam lacus
				suspendisse faucibus interdum. Dolor purus non enim praesent
				elementum facilisis. Velit sed ullamcorper morbi tincidunt
				ornare. Facilisis mauris sit amet massa. Egestas fringilla
				phasellus faucibus scelerisque. Nullam vehicula ipsum a arcu
				cursus vitae. Sed id semper risus in hendrerit gravida rutrum
				quisque non. Sit amet venenatis urna cursus eget nunc
				scelerisque viverra. Et magnis dis parturient montes nascetur
				ridiculus mus mauris vitae. Orci sagittis eu volutpat odio
				facilisis mauris.
			</p>
		</Nar>
	)
}

export default Narrative
