import React, { createContext, useContext, useState } from "react";
const ToggleContext = createContext();

function Accordion({ children }) {
  return <InnerStyle>{children}</InnerStyle>;
}
Accordion.Title = function AccordionTitle({ children }) {
  return <Title>{children}</Title>;
};
Accordion.Frame = function AccordionFrame({ children }) {
  return <Frame>{children}</Frame>;
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
    <Header onClick={() => setToggle((toggle) => toggle)}>{children}</Header>
  );
};
Accordion.Body -
  function AccordionBody({ children }) {
    const { toggle } = useContext(ToggleContext);
    if (toggle) {
      return <Body>{children}</Body>;
    } else {
      return null;
    }
  };
export default Accordion;
