import React, { createContext, useContext, useState } from "react";
import {
  OuterStyle,
  InnerStyle,
  Title,
  Item,
  Header,
  Body,
} from "./styles/accordion";
const ToggleContext = createContext();

function Accordion({ children }) {
  return (
    <OuterStyle>
      <InnerStyle>{children}</InnerStyle>
    </OuterStyle>
  );
}
Accordion.Title = function AccordionTitle({ children }) {
  return <Title>{children}</Title>;
};
Accordion.Item = function AccordionItem({ children }) {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      <Item>{children}</Item>
    </ToggleContext.Provider>
  );
};
Accordion.Header = function AccordionHeader({ children }) {
  const { toggle, setToggle } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggle((toggle) => !toggle)}>
      {children}
      {toggle ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};
Accordion.Body = function AccordionBody({ children }) {
  const { toggle } = useContext(ToggleContext);
  if (toggle) {
    return <Body>{children}</Body>;
  } else {
    return null;
  }
};
export default Accordion;
