import React from "react";
import Jumbotron from "../components/jumbotron";
import Data from "../fixtures/jumbo.json";
function JumbotronContainer() {
  return (
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
  );
}
export default JumbotronContainer;
