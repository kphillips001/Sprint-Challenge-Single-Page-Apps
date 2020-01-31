import React, { useEffect, useState } from "react"
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
    
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data.results.filter(char => 
          char.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
        ));
                
       console.log(response.data.results)
        
      })
      .catch(error => {
        console.log(error)
      })

  }, [searchTerm]);

  return (
    <section className="character-list">
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <h1>Character List</h1>
      
      <br />
      {characters.map(character => {
        return <CharacterCard key={character.id} character={character} />
      })}
    </section>
  );
}