import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <br />
            <em>{definition.example}</em>
            <br/>
            <Synonyms synonyms={definition.synonyms} />
            {/* <strong>Symonyms:</strong>
            {definition.synonyms} */}
          </div>
        );
      })}
      {/* <p>{props.meaning.definitions[0].definition}</p>
      <p><em>{props.meaning.definitions[0].example}</em></p> */}
      
    </div>
  );
}
