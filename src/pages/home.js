import React from "react";
import JumbotronContainer from "../containers/JumbotronContainer";
import { FooterContainer } from "../containers/FooterContainer";
import AccordionContainer from "../containers/AccordionContainer";
import HeaderContainer from "../containers/HeaderContainer";
export default function Home() {
  return (
    <>
      <HeaderContainer>
        <JumbotronContainer />
        <AccordionContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
}
