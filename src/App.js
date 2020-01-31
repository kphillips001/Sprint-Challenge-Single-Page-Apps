import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import {Route, Link, Switch} from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Header />

      <Link to='/'>Home</Link> 
      <Link to='/characters'>Characters</Link> 
      <Link to='/search'>Search</Link> 

      <Switch>
        <Route exact path="/search">
        
        </Route>

        <Route exact path="/characters">
        <CharacterList/>
        </Route>

        <Route exact path="/">
          <WelcomePage/>
        </Route>
      
      </Switch>

    </main>
  );
}