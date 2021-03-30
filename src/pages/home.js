import React from "react";
import JumbotronContainer from "../containers/JumbotronContainer";
import { FooterContainer } from "../containers/FooterContainer";
import AccordionContainer from "../containers/AccordionContainer";
export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}
