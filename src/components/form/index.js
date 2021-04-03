import React from "react";
import {
  InnerStyle,
  Base,
  Error,
  Title,
  Text,
  SmallText,
  Link,
  Input,
  Submit,
} from "./styles/form";
function Form({ children }) {
  return <InnerStyle>{children}</InnerStyle>;
}
Form.Base = function FormBase({ children }) {
  return <Base>{children}</Base>;
};
Form.Error = function FormError({ children }) {
  return <Error>{children}</Error>;
};
Form.Title = function FormTitle({ children }) {
  return <Title>{children}</Title>;
};
Form.Text = function FormText({ children }) {
  return <Text>{children}</Text>;
};
Form.SmallText = function FormSmallText({ children }) {
  return <SmallText>{children}</SmallText>;
};
Form.Link = function FormLink({ children }) {
  return <Link>{children}</Link>;
};
Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};
Form.Submit = function FormSubmit({ children }) {
  return <Submit>{children}</Submit>;
};
export default Form;
