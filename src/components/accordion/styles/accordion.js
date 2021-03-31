import styled from "styled-components/macro";

export const InnerStyle = styled.div`
  display: flex;
  padding: 70px 40px;
  max-width: 815px;
  margin: auto;
  img {
    filter: brightness(0) invert(1);
    width: 14px;
    margin-left: 15px;
  }
`;
export const OuterStyle = styled.div``;
export const Title = styled.h1`
  color: white;
  margin-right: 10px;
`;
export const Item = styled.div`
  margin-bottom: 0px;
  color: white;
  margin: auto;
  max-width: 670px;
  width: 100%;
  background-color: grey;
  cursor: pointer;
`;
export const Header = styled.h1`
  margin-left: 20px;
  font-weight: normal;
  align-items: center;
  max-width: 500px;
`;
export const Body = styled.p`
  color: white;
  background-color: darkgrey;
  padding: 10px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  cursor: default;
`;
