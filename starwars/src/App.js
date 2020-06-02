import React, { useState, useEffect} from "react";
import axios from "axios";
import Character from "./components/Character";
import "./App.css";

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
    <div >
      <div className="App">
        <h1 className="Header">Characters</h1>
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
      </div>
    </div>
  );
}

export default App;
