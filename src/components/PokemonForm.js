import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {

  const [pokeForm, setPokeForm] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: "",
    },
  })

  function updateFormData(e) {
    const newPokeForm = {
      ...pokeForm,
      [e.target.name]: e.target.value,
    }
    setPokeForm(newPokeForm);
  }

  function updateFormImage(e) {
    const newSprites = {
      ...pokeForm.sprites,
      [e.target.name]: e.target.value,
    }
    const newPokeForm = {
      ...pokeForm,
      sprites: newSprites,
    }
    setPokeForm(newPokeForm);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          addPokemon(pokeForm);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={updateFormData}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={updateFormData}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            onChange={updateFormImage}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            onChange={updateFormImage}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
