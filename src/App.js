import React from "react";
import { render } from "react-dom";
import JumbotronContainer from "./containers/JumbotronContainer";
import { FooterContainer } from "./containers/FooterContainer";
import AccordionContainer from "./containers/AccordionContainer";
function App() {
  return (
    <div>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
