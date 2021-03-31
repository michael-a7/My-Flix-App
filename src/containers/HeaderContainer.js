import React from "react";
import { Header } from "../components";
import * as ROUTES from "../components/links/routes";
function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src="/images/icons/netflixlogo-removebg-preview.png"
          alt="Netflix Home"
        />
        <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
}
export default HeaderContainer;
