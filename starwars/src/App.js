import React, { useState, useEffect} from "react";
import axios from "axios";
import Character from "./components/Character";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components"; 
import "./App.css";

const Header = styled.h1`
  text-align: center;
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios
    .get('https://swapi.py4e.com/api/people/')
    .then(response => {
      // console.log(response);
      setChars(response.data.results)
    })
    .catch(error => {
      console.log('there was an error', error); 
    }); 
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Header>Characters</Header>
        </Col>
      </Row>
      <Row>
        {chars.map(char => {
          return <Character 
            name={char.name}
            birthYear = {char.birth_year}
            height = {char.height}
            mass = {char.mass}
            hairColor = {char.hair_color}
            skinColor = {char.skin_color}
            eyeColor = {char.eye_color}
            gender={char.gender} 
            />;
        })}
      </Row>
    </Container>
  );
}

export default App;
