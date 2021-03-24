import styled from "styled-components/macro";
export const InnerStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${({ direction }) => direction};
  margin: auto;
  max-width: 1100px;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Divide = styled.div`
  background-color: black;
`;
export const Title = styled.h1`
  color: white;
`;
export const Subtitle = styled.h3`
  color: white;
`;
export const Image = styled.img``;
export const Square = styled.div`
  width: 50%;
`;
