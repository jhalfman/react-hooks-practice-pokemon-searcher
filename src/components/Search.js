import React from "react";

function Search({updateSearch}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" type="text" name="name" placeholder="search here" onChange={(e) => updateSearch(e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
