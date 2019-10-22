import React from 'react'
import { tilesConfig } from '../config'
import styled from 'styled-components'
import uuid from 'uuid'
import Tile from './tile'
import ButtonArrow from './buttonArrow'
const CarouselOuter = styled.div`
 position: relative;
 width: 100%;
 height: 100%;
 overflow: hidden;
`
const CarouselInner = styled.div`
 display: flex;
 flex-direction: row;
 transition: 0.2s ease-in-out;
 flex-wrap: no wrap;
 position: absolute;
 height: 100%;
 width: 100%;
 top: 0;
 left: ${props => props.index * -100}%;
`

class Carousel extends React.Component {
 constructor(props){
  super(props)
  this.state = {
   index: 0,
   tileLength: tilesConfig.length
  }
 }
 getNewIndex = (index) => {
  //If it goes zero, then take the carousel to the end
  if(this.state.index + index < 0){
   return this.state.tileLength - 1
  }else{
   // The modulo operation is to make sure the index is never more than or equal to the number of tiles
   return (this.state.index + index) % this.state.tileLength
  }
 }
 changeIndex = (index) => {
  this.setState({
   index: this.getNewIndex(index)
  })
 }
 render() {
  return (
  <CarouselOuter>
   <ButtonArrow clickEvent={this.changeIndex} left/>
   <CarouselInner index={this.state.index}>
   {tilesConfig.map(eachTile => <Tile key={uuid()} {...eachTile } />)}
   </CarouselInner>
   <ButtonArrow clickEvent={this.changeIndex} right/>
  </CarouselOuter>
  )
 }
}
export default Carousel