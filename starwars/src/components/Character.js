// Write your Character component here

import React from "react";
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardSubtitle,
  Badge,
  Col
} from "reactstrap";
import styled, { css } from  "styled-components";
import "./Character.css";

const CardStyle = styled(CardHeader)`
  border: 1px orange;
  color: violet; 
` 

const Character = (props) => {
  return (
    <Col xs="10" sm="5" md="4" xl="3">
      <Card>
        <CardHeader className="card-header"> 
          {props.name} 
        </CardHeader>
        <CardBody>
          <CardText> Born: {props.birthYear}
          </CardText>
          <CardText>Height: {props.height}</CardText>
          <p>Weight: {props.mass}</p>
          <p>Hair Color: {props.hairColor}</p>
          <p>Skin Color: {props.skinColor}</p>
          <p>Eye Color: {props.eyeColor}</p>
          <CardSubtitle>Gender: {props.gender}</CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Character; 