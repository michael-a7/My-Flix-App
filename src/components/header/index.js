import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, InnerStyle, Logo, Button, Feature } from "./styles/header";
function Header({ background = true, children, ...restProps }) {
  return background ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    children
  );
}
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <InnerStyle {...restProps}>{children} </InnerStyle>;
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
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};
export default Header;
