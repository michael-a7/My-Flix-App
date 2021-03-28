import React from "react";
import { Accordion, Email } from "../components";
import questions from "../fixtures/faqs.json";
function AccordionContainer() {
  return (
    <div>
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Item>
          {questions.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Item>
      </Accordion>
      <Email>
        <Email.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </Email.Text>
        <Email.Input />
        <Email.Button>Get Started</Email.Button>
      </Email>
    </div>
  );
}
export default AccordionContainer;
