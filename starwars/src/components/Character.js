// Write your Character component here

import React from "react";

const Character = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Born: {props.birthYear}</p>
      <p>Height: {props.height}</p>
      <p>Weight: {props.mass}</p>
      <p>Hair Color: {props.hairColor}</p>
      <p>Skin Color: {props.skinColor}</p>
      <p>Eye Color: {props.eyeColor}</p>
      <p>Gender: {props.gender}</p>
    </div>
  )
}

export default Character; 