import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  InnerStyle,
  Logo,
  Button,
  Feature,
  Text,
  FeatureName,
  TextLink,
  Group,
  Picture,
  Profile,
  Dropdown,
} from "./styles/header";
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
Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children} </Group>;
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
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};
Header.FeatureName = function HeaderFeatureName({ children, ...restProps }) {
  return <FeatureName {...restProps}>{children}</FeatureName>;
};
Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={"/images/users/1.png"} />;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
export default Header;
