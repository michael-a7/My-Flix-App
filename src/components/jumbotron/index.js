import React from "react";
import {
  InnerStyle,
  Divide,
  Title,
  Subtitle,
  Image,
  Square,
} from "./styles/jumbotron";
function Jumbotron({ children, direction = "row" }) {
  return <InnerStyle direction={direction}>{children}</InnerStyle>;
}
Jumbotron.Divide = function JumbotronDivide({ children }) {
  return <Divide>{children}</Divide>;
};
Jumbotron.Title = function JumbotronTitle({ children }) {
  return <Title>{children}</Title>;
};
Jumbotron.Subtitle = function JumbotronSubtitle({ children }) {
  return <Subtitle>{children}</Subtitle>;
};
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
Jumbotron.Square = function JumbotronSquare({ children }) {
  return <Square>{children}</Square>;
};
export default Jumbotron;
