import React,{useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CharacterCard from './CharacterCard';

const AnyCharacter = props =>{

    const AllCard = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `

    const [random, setRandom] = useState([]);

    useEffect(() =>{

        axios
        .get(`https://rickandmortyapi.com/api/character/?name=${props.search}`)
        .then(response => {
            const data = response.data.results
            // console.log(data)
            setRandom(data);
        })
        .catch(err => console.log(err));

    },[props.search])


    return(
        <AllCard className="character-list">
        {
          random.map(oneChar => (
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
    )
}

export default AnyCharacter;