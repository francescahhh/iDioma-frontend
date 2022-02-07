import React from "react";
import VocabCard from "./VocabCard";
import VocabForm from "./VocabForm";

function Vocab() {
    return (
      <div>
        <h1>Vocab Page</h1>
        <VocabForm />
        <VocabCard />
        <VocabCard />
        <VocabCard />
      </div>
    );
  }

  export default Vocab;