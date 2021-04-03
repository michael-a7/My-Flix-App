import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import HeaderContainer from "../containers/HeaderContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { Form } from "../components";
export default function Signin() {
  // const {firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";
  const handleSignin = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              type="text"
              value={emailAddress}
              onchange={({ t }) => setEmailAddress(t.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onchange={({ t }) => setPassword(t.value)}
            />
            <Form.Submit disabled={isInvalid}>Sign In</Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.SmallText>
        </Form>
      </HeaderContainer>
      ;
      <FooterContainer />
    </>
  );
}
