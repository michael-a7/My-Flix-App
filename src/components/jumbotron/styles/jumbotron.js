import styled from 'styled-components/macro';
export const InnerStyle = styled.div`
display: flex;
justify-content: center;
flex-direction: ${({direction}) =>direction};
border: 5px black solid;
margin: auto;
max-width: 1100px;
width: 100%;
`
;
