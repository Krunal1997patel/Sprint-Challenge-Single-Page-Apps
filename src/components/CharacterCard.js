import React from "react";
import styled from 'styled-components'


export default function CharacterCard({id, img, name, sex, status, from}) {

  const Card = styled.div`
    background-color: #6f6f6f;
    box-shadow: 4px 7px 22px 10px #439c29;
    transform: scale(0.9);
    transition: 0.3s ease-in-out;
    text-align: center;
    border-radius: 24px;

      :hover{
        transform: scale(1.0);
      } 
  `

  const Image = styled.img`
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  `

  const Name = styled.h2`
    background-color: #a9d3e9;
    color: white;
    margin:0;
    padding: 4px 0 10px;
  `

  const Type = styled.h3`
    background-color: white;
    color: black;
    margin: 0 auto;
  `

  return (
    <Card key={id}>
      <Image src={img} alt={name} />
      <Name>{name}</Name>

      <Type>Gender</Type>
      <h3>{sex}</h3>

      <Type>Status</Type>
      <h3>{status}</h3>

      <Type>From</Type>
      <h3>{from}</h3>
    </Card>
  )
}