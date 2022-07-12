import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, searchPokemon}) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map(mon => {
        if (mon.name.includes(searchPokemon)) {
          return <PokemonCard mon={mon} key={mon.name}/>
        }
        else return null;
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
