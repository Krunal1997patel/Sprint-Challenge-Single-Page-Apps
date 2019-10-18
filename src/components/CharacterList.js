import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components'

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const AllCard = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `




  const [chara, setChara] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(` https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const data = response.data.results
      console.log(data);
        const searchdata = data.filter(charaNames =>
        charaNames.name.toLowerCase().includes(props.search.toLowerCase()) 

        );
      setChara(searchdata);

    })
    .catch(err => console.log(err));

  }, [props.search]);


  return (
    <AllCard className="character-list">
      {
        chara.map(oneChar => (
         <CharacterCard 
         id={oneChar.created}
          img={oneChar.image}
          name={oneChar.name}
          sex={oneChar.gender}
          status={oneChar.status}
          from={oneChar.location.name}
         /> 
        ))
      }
    </AllCard>
  );
}
