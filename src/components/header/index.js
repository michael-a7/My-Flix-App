import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, InnerStyle, Logo, Button } from "./styles/header";
function Header({ background = true, children }) {
  return background ? <Background>{children}</Background> : children;
}
Header.Frame = function HeaderFrame({ children }) {
  return <InnerStyle>{children} </InnerStyle>;
};

Header.Logo = function HeaderLogo({ link, ...restProps }) {
  return (
    <ReactRouterLink to={link}>
      <Logo />
    </ReactRouterLink>
  );
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
export default Header;
