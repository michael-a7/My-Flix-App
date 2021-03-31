import styled from "styled-components/macro";

export const InnerStyle = styled.div`
  display: flex;
  padding: 40px 56px;
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
  margin-left: 10px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 15px;
`;
export const Link = styled.a`
  color: grey;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 18px;
  color: grey;
  margin-left: 10px;
  margin-bottom: 20px;
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
