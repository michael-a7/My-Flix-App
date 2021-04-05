import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
export const InnerStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 350px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  max-width: 250px;
  margin: auto;
  padding: 60px;
  margin-bottom: 100px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  max-width: 300px;
`;

export const Error = styled.div`
  background-color: darkorange;
  border-radius: 4px;
  font-size: 14px;
  margin 0 0 16px;
  color: white;
  padding: 15px
`;

export const Title = styled.h1`
color: white;
font-size: 32px;
font-weight bold;
margin-bottom: 20px;
`;

export const Text = styled.p`
  color: lightgrey;
  font-size: 16px;
  font-weight: 500;
`;

export const SmallText = styled.p`
  color: lightgrey;
  font-size: 10px;
  font-weight: 300;
  margin-top: 10px;
`;

export const Link = styled(ReactRouterLink)`
color: white
text-decoration: none;
&:hover{
    text-decoration: underline;
}
`;
export const Input = styled.input`
  border-radius: 4px;
  background-color: #333;
  color: white;
  border: 0;
  outline: none;
  padding: 8px 3px;
  margin: 2px 0px;
`;
export const Submit = styled.button`
  background-color: red;
  margin-top: 10px;
  border-radius: 2px;
  padding: 8px 0px;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: darkred;
    text-decoration: underline;
  }
  &:disabled {
    cursor: default;
    background-color: rgb(64, 0, 0);
    text: lightgrey;
    text-decoration: none;
  }
`;
