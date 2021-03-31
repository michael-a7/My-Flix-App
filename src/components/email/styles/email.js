import styled from "styled-components/macro";
export const InnerStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  border-bottom: 3px grey solid;
`;
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  margin-left: 30px;
  padding: 10px;
  height: 40px;
  box-sizing: border-box;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: red;
  color: white;
  border: 0;
  margin-bottom: 15px;
  height: 40px;
  font-size: 26px;
  padding: 10px;
  cursor: pointer;
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 16px;
  }
  &:hover {
    background-color: darkred;
    text-decoration: underline;
  }
`;
export const Text = styled.p`
  color: white;
`;
