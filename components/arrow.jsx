import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	flex: auto;
	max-height: 50px;
`

const Arrow = () => {
	return <Container>Down Arrow</Container>
}

export default Arrow
