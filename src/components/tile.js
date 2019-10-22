import React from 'react'
import styled from 'styled-components'
import TileContent from './tileContent'
import { imageRequire } from '../utils'
const TileWrapper = styled.div`
 flex: 0 0 100%;
 height: 100%;
`
const TileContentWrapper = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
`
const BlurFilter = styled.div`
 position: absolute;
 width: 100%;
 height: 100%;
 background: url(${props => props.backgroundImage}) no-repeat center;
 background-size: cover;
 filter: blur(8px);
 z-index: 1;
 &:after {
  content: '';
  position: absolute;
  background-color: rgba(0,0,0,0.3);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;

 }
`
const Tile = (props) => {
 return (
  <TileWrapper >
   <BlurFilter backgroundImage={imageRequire(props.image.src)} />
   <TileContentWrapper>
    <TileContent { ...props } />
   </TileContentWrapper>
  </ TileWrapper>
 )
}
export default Tile