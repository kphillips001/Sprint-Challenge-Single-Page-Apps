import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
 
  const[searchTerm, setSearchTerm] = useState('')
  const[searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = characters.filter(character => 
      character.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm])

  return (
    <section className="search-form">
     // Add a search form here
     <form onSubmit={handleChange}>
       <input 
        name="search"
        placeholder="search by name"
        value={searchTerm}
        onChange={handleChange}
       />
       {searchResults.map(character => {
         return<h3>{character}</h3>
       })}

     </form>
    </section>
  );
}
