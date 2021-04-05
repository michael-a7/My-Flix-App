import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, InnerStyle, Logo, Button } from "./styles/header";
function Header({ background = true, children, ...restProps }) {
  return background ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    children
  );
}
Header.Frame = function HeaderFrame({ children }) {
  return <InnerStyle>{children} </InnerStyle>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
export default Header;
