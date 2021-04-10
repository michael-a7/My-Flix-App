import styled from "styled-components/macro";

export const InnerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  color: white;
  width: 100%;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  cursor: pointer;
  &:hover {
    border: 3px solid white;
    border-radius: 5px;
    max-width: 194px;
  }
`;

export const Name = styled.p`
  font-size: 25px;
  text-align: center;
  color: lightgrey;
`;
export const User = styled.li`
  max-height: 250px;
  max-width: 250px;

  &:hover ${Name} {
    color: white;
    cursor: pointer;
    font-weight: 500;
  }
  &:hover ${Picture} {
    border: 3px solid white;
    border-radius: 5px;
    max-width: 194px;
  }
`;
