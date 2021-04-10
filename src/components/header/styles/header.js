import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
    top left/cover no-repeat;
`;
export const InnerStyle = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-betweem;
  align-items: center;
`;
export const Logo = styled.img`
  height: 30px;
  margin-right: 1110px;
`;
export const Button = styled(ReactRouterLink)`
  display: block;
  background-color: red;
  width: 89px;
  padding: 8px 17px;
  height: fit-content;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;
  &:hover {
    background-color: darkred;
    text-decoration: underline;
  }
`;

export const Feature = styled(InnerStyle)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  background-color: black;
`;
