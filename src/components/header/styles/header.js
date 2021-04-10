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
  margin-right: 30px;
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
  margin-left: 1100px;
  box-sizing: border-box;
  text-decoration: none;
  &:hover {
    background-color: darkred;
    text-decoration: underline;
  }
`;

export const Feature = styled(InnerStyle)`
  padding: 150px 0 300px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
`;
export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;
export const FeatureName = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 20px;
`;

export const TextLink = styled.p`
  color: white;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Picture = styled.button`
  background: url(${({ src }) => src}) no-repeat;
  background-size: contain;
  border 0;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;
export const Dropdown = styled.div`
  display: none;
  background-color: black;
  position: absolute;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 1px;

  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    button {
      margin-right: 10px;
    }

    p {
      font-size: 12px;
      margin-bottom: 0;
      margin-top: 0;
    }
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 750px;
  position: relative;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0px;
  svg {
    color: white;
    cursor: pointer;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin-left: 10px;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;
export const SearchInput = styled.input`
  background-color: transparent;
  border: white 1px solid;
  outline: none;
  transition: 0.5s;
  color: white;
  margin-left: ${({ active }) => (active === true ? "10px" : "0px")};
  padding: ${({ active }) => (active === true ? "0 10px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "200px" : "0px")};
`;
export const PlayButton = styled.button`
  backround-color: white;
  outline: none;
  color: black;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  max-width: 130px;
  font-size: 20px;
  margin-top: 25px;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: white;
  }
`;
