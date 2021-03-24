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

export const Divide = styled.div``;
export const Title = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: normal;
  margin-bottom: 30px;
`;
export const Subtitle = styled.h3`
  color: white;
  font-size: 25px;
  font-weight: normal;
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
export const Square = styled.div`
  width: 50%;
`;
