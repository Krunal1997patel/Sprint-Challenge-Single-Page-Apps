import React from "react";
import styled from 'styled-components'

export default function LocationCard({ name, type, dimension, residents, key }) {

  const Card = styled.div`
    border: 2px green solid;
    margin: 3%;
    padding: 2%;
    background-color: green;
    text-align: center;
    border-radius: 120px;
    transition: 0.3s ease-in-out;
    box-shadow: 6px 6px 14px 5px black;

      :hover{
        transform: scale(1.1);
      }
  `

  const Title = styled.h1`
    color: white;
  `

  return(
    <Card key={key}>
      <Title>{name}</Title>
      <h3>Dimension: {dimension}</h3>
      <h3>Type: {type}</h3>
    </Card>
  )
}