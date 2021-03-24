import React from "react";
import { render } from "react-dom";
import Data from "./fixtures/jumbo.json";
import Jumbotron from "./components/jumbotron";
function App() {
  return (
    <Jumbotron.Divide>
      {Data.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <p>{item.title}</p>
        </Jumbotron>
      ))}
    </Jumbotron.Divide>
  );
}

export default App;
