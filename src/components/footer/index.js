import React from "react";
import {
  InnerStyle,
  Row,
  Column,
  Title,
  Text,
  Break,
  Link,
} from "./styles/footer";
function Footer({ children }) {
  return <InnerStyle>{children}</InnerStyle>;
}
Footer.Row = function FooterRow({ children }) {
  return <Row>{children}</Row>;
};
Footer.Column = function FooterColumn({ children }) {
  return <Column>{children}</Column>;
};
Footer.Title = function FooterTitle({ children }) {
  return <Title>{children}</Title>;
};
Footer.Text = function FooterText({ children }) {
  return <Text>{children}</Text>;
};
Footer.Break = function FooterBreak({ children }) {
  return <Break>{children}</Break>;
};
Footer.Link = function FooterLink({ children }) {
  return <Link>{children}</Link>;
};
export default Footer;
