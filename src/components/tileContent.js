import React from 'react'
import styled from 'styled-components'
import TextContent from './textContent'
import { imageRequire } from '../utils'
const TileContentContainer = styled.div`
 padding: 0 9%;
 display:flex;
 position: relative;
 align-items: flex-start;
 flex-wrap: wrap;
 flex-direction: row;
 box-sizing: border-box;
 z-index: 3;
`

const Image = styled.img`
 width: calc(16em + 12vw);
 min-width: 20em;
 margin: auto;
 flex: 0.9;
`
const ImageContent= (props) => <Image src={ imageRequire(props.src) } alt={ props.alt } />
const TileContent = (props) => {
 return (
 <TileContentContainer>
  <ImageContent { ...props.image } />
  <TextContent { ...props.content }/>
 </TileContentContainer>
 )
}

export default TileContent
