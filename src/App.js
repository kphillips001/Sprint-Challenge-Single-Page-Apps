import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";
import {Route, Link, Switch} from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Header />

      <Link to='/'>Home</Link> 
      <Link to='/characters'>Characters</Link> 
      <Link to='/search'>Search</Link> 

      <Switch>
        <Route path="/search">
          <SearchForm/>
        </Route>
        
        <Route path="/characters">
          <CharacterList/>
        </Route>

        <Route path="/">
          <WelcomePage/>
        </Route>
      
      </Switch>

    </main>
  );
}