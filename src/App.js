import React from "react";
import { render } from "react-dom";
import Data from "./fixtures/jumbo.json";
import Jumbotron from "./components/jumbotron";
import { FooterContainer } from "./containers/FooterContainer";
function App() {
  return (
    <div>
      <Jumbotron.Divide>
        {Data.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Square>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.Subtitle>{item.subtitle}</Jumbotron.Subtitle>
            </Jumbotron.Square>
            <Jumbotron.Square>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Square>
          </Jumbotron>
        ))}
      </Jumbotron.Divide>
      <FooterContainer />
    </div>
  );
}

export default App;
