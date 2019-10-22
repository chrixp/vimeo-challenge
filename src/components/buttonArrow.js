import React from 'react'
import styled from 'styled-components'

const Arrow = styled.span`
 font-size: calc(5em + 2vw);
 color: rgba(255,255,255,0.6);
`

const Button = styled.button`
 position: absolute;
 height: 3em;
 top: calc(50% - 1.5em);
 z-index: 4;
 outline: 0;
 background-color: transparent;
 border: 0;
 ${props => props.left && ({
  left: 0
})}
 ${props => props.right && ({
  right: 0
 })}
 &:hover ${Arrow} {
   color: rgb(16, 111, 167);
   cursor: pointer;
 }
`
const ButtonArrow = (props) => {
 return (
  <Button left={props.left} right={props.right} onClick={() => props.clickEvent(props.left ? -1 : 1)}>
   <Arrow  dangerouslySetInnerHTML={{__html: props.left ? "&lsaquo;" : "&rsaquo;" }} ></Arrow>
  </Button>
 )
}

export default ButtonArrow