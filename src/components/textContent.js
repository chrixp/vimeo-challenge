import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
 padding: 0.8em 1.5em;
 margin: 0.5em;
 border: 2px solid rgba(0,0,0,0.2);
 background-color: ${props => props.blue ? "rgb(16, 111, 167)" : "transparent"};
 &:hover {
  cursor: pointer;
 }
`
const ButtonContent = styled.span`
 color: white;
 font-size: (0.5em + 1vw);
 font-weight: 600;

`
const ButtonContainer = styled.div`
 display: flex;
 flex-direction: row;
`
const ContentBox = styled.div`
 margin: 0.5em 1em;
 display:flex;
 flex-direction: column;
 min-width: 15em;
 flex: 1;
`
const Title = styled.h1`
 font-size: calc(1.8em + 1vw);
 color: white;
 margin: 0;
`
const Caption = styled.p`
 font-size: calc(0.5em + 0.7vw);
 color: white;
`
const TextContent = (props) => {
 return (
  <ContentBox>
   <Title>{props.title}</Title>
   <Caption>{props.caption}</Caption>
   <ButtonContainer>
    <Button blue><ButtonContent>Buy Now</ButtonContent></Button>
    <Button><ButtonContent>Watch Trailer</ButtonContent></Button>
   </ButtonContainer>
  </ContentBox>
 )
}
export default TextContent