import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(data => {setPokemon(data)});
  }, [])

  function updateSearch(search) {
    setSearchPokemon(search);
  }

  function addPokemon(newPokemon) {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon),
    })
    .then(resp => resp.json())
    .then(data => console.log("added", data));
    setPokemon([newPokemon, ...pokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search updateSearch={updateSearch}/>
      <br />
      <PokemonCollection pokemon={pokemon} searchPokemon={searchPokemon}/>
    </Container>
  );
}

export default PokemonPage;
