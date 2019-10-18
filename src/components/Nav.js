import React, {useState} from 'react';
import {Route, NavLink} from 'react-router-dom';
import styled from 'styled-components'

import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import SearchFrom from './SearchForm';
import LocationsList from './LocationsList';
import AnyCharacter from './AnyCharacter';

const Nav = () =>{


    const Nav = styled.div`
        display:flex;
        justify-content: space-evenly;
        font-size: 1.3rem;
    `

    //***************** Get data from the <SearchFrom />*/
    const [search, setSearch] = useState('');

    return(
        <div>
            {/****************************** The nav display on screen */ }
            <Nav>
                <NavLink exact activeClassName="active" to='/' >Home</NavLink>
                <NavLink  activeClassName="active" to='/characterList' >Characters</NavLink>
                <NavLink  activeClassName="active" to='/locationList' >Location</NavLink>
                <NavLink  activeClassName="active" to='/random' >Random</NavLink>
            </Nav>
    
            <Route  path='/' render={(props) => <SearchFrom  {...props} setSearch={setSearch} search={search}/> }  />

            <Route exact path='/' component={WelcomePage} />  {/* The Home page of the website*/}

            <Route exact path='/characterList' render={() => <CharacterList  search={search} /> }  /> {/*The 20 character page of the website*/}

            <Route exact path='/locationList'  render={() => <LocationsList setSearch={setSearch} search={search} />} />   {/* The 20 location page */}

            <Route exact path='/random' render={() => <AnyCharacter search={search} />} /> {/* The Random Search of the page */}
        </div>

    )
}

export default Nav;