import React from "react";
import styled from 'styled-components'

export default function WelcomePage() {

  const ImgTitle = styled.img`
    max-width: 88%;
    margin: 3% 3% 4%;
  `
  const MainImg = styled.img`
    border-radius: 165px;
    margin: 2% 30% 0;
    border: 18px solid #29a529;
    box-shadow: 3px 4px 60px 43px #15a015;
  `

  return (
    <section className="welcome-page">
      <header>
        {/* <h1>Welcome to the ultimate fan site!</h1> */}
        <ImgTitle src='https://fontmeme.com/permalink/191018/27313418995175a334a7781de61b30c3.png' />
        <MainImg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
