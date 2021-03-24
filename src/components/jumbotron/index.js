import React from "react";
import { InnerStyle, Divide } from "./styles/jumbotron";
function Jumbotron({ children, direction = "row" }) {
  return <InnerStyle direction={direction}>{children}</InnerStyle>;
}
Jumbotron.Divide = function JumboContain({ children }) {
  return <Divide>{children}</Divide>;
};
export default Jumbotron;
