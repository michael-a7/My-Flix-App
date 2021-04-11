import styled from "styled-components/macro";

export const InnerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`}
  ${({ margin }) => margin && `margin ${margin}`}
`;

export const Title = styled.p`
  font-size: 24px;
  color: white;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;

export const SubTitle = styled.p`
  color: white;
`;

export const Text = styled.p`
  color: white;
  font-size: 12px;
`;

export const Feature = styled.div``;

export const FeatureTitle = styled.p`
  margin-left: 0;
`;

export const FeatureText = styled.p`
  font-size: 24px;
  color: white;
  font-weight: bold;
  margin-left: 0;
  margin-right: 56px;
  margin-top: 0;
`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img(
      filter: brightness(0) invert(1);
      width: 24px;
  )
`;

export const Maturity = styled.div``;

export const Content = styled.div``;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Meta = styled.div`
  //   display: none;
  //   position: absolute;
  //   bottom: 0;
  //   padding: 10px;
  //   background-color: grey;
`;

export const Item = styled.div`
  max-width: 305px;
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;
