import React from "react";
import JumbotronContainer from "../containers/JumbotronContainer";
import { FooterContainer } from "../containers/FooterContainer";
import HomeText from "../components/HomeText";
import Email from "../components/email";
import AccordionContainer from "../containers/AccordionContainer";
import HeaderContainer from "../containers/HeaderContainer";
export default function Home() {
  return (
    <>
      <HeaderContainer>
        <HomeText>
          <HomeText.Title>Unlimited movies, TV shows, and more.</HomeText.Title>
          <HomeText.Subtitle>Watch anywhere. Cancel anytime.</HomeText.Subtitle>
        </HomeText>
        <Email>
          <Email.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Email.Text>
          <Email.Input />
          <Email.Button>Get Started</Email.Button>
        </Email>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}
