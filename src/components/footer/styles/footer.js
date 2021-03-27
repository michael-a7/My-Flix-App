import styled from "styled-components/macro";

export const InnerStyle = styled.div`
  display: flex;
  padding: 70px 0px;
  margin: auto;
  flex-direction: column;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax (230px, 1fr));
  grid-gap: 15px;
`;
export const Link = styled.a`
  color: blue;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 20px;
  color: green;
  margin-bottom: 40px;
  text-decoration: bold;
`;
export const Text = styled.p`
  font-size: 14px;
  color: green;
  margin-bottom: 40px;
`;
export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
