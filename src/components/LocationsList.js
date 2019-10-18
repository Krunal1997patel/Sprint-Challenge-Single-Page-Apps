import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';
import styled from 'styled-components'

export default function LocationsList(props) {

    const AlllocaCard = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  `

    const [locations, setLocation] = useState([]);

    useEffect(() => {

        axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response =>{
            const data = response.data.results;

            const searchLoca = data.filter(charaNames =>
            charaNames.name.toLowerCase().includes(props.search.toLowerCase())
            );
            // console.log(data);
            setLocation(searchLoca);
        })
        .catch(err => console.log(err));
    },[props.search])

    return(
        <AlllocaCard>
            {
                locations.map(loca => (
                    <LocationCard
                    key={loca.created}
                    name={loca.name}
                    type={loca.type}
                    dimension={loca.dimension}
                    residents={loca.residents}
                    />
                ))
            }
        </AlllocaCard>
    )


}