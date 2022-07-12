import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({mon: {id, name, hp, sprites}}) {

  const [clicked, setClicked] = useState(false)
  return (
    <Card onClick={() => setClicked(!clicked)}>
      <div>
        <div className="image">
          {clicked ? <img src={sprites.back} alt="back sprite" ></img> : <img src={sprites.front} alt="front sprite"></img> }
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
