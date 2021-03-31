import React from "react";
import { InnerStyle, Title, Subtitle } from "./styles/HomeText";
function HomeText({ children }) {
  return <InnerStyle>{children}</InnerStyle>;
}
HomeText.Title = function HomeTextTitle({ children }) {
  return <Title>{children}</Title>;
};
HomeText.Subtitle = function HomeTextSubtitle({ children }) {
  return <Subtitle>{children}</Subtitle>;
};
export default HomeText;
