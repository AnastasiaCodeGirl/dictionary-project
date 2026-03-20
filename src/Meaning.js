import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
            {definition.definition}
            </div>
          <div className="example">
            {definition.example}
          </div>
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
