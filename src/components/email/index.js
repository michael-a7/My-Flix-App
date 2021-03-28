import React from "react";
import { InnerStyle, Input, Button, Text } from "./styles/email";
export default function Email({ children }) {
  return <InnerStyle>{children}</InnerStyle>;
}
Email.Input = function EmailInput() {
  return <Input />;
};
Email.Button = function EmailButton({ children }) {
  return (
    <Button>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

Email.Text = function EmailText({ children }) {
  return <Text>{children}</Text>;
};
