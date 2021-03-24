import styled from "styled-components/macro";
export const InnerStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${({ direction }) => direction};
  margin: auto;
  width: 100%;
  border-bottom: 3px grey solid;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Divide = styled.div``;
export const Title = styled.h1`
  color: white;
  font-size: 50px;
  margin: 20px 25px 0px;
  margin-bottom: 30px;
`;
export const Subtitle = styled.h3`
  color: white;
  font-size: 25px;
  margin: 0px 25px;
  font-weight: normal;
`;
export const Image = styled.img`
  max-width: 100%;
  margin: 0px 15px;
  height: auto;
`;
export const Square = styled.div`
  width: 70%;
`;
