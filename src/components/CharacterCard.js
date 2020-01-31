import React from "react";
import {
  Card, CardImg, CardTitle,
} from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <div className="container">
      <Card>
        <CardImg src={props.character.image} />
        <CardTitle>{props.chracter.name}</CardTitle>
      </Card>
    </div>
  )
}
