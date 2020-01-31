import React, { useEffect, useState } from "react"
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results)
        setCharacters(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })

  }, []);

  return (
    <section className="character-list">
      <h1>Character List</h1>
      
      <br />
      {characters.map(character => {
        return <CharacterCard key={character.id} character={character} />
      })}
    </section>
  );
}