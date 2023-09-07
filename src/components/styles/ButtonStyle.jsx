import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: ${({ yy }) => (yy ? "white" : "#A62440")};
  color: ${({ yy }) => (yy || "white")};
  border: 1px solid #a62440;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  margin: 2rem 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.97);
  }
`;

export const ButtonDetail = styled(ButtonStyle)`
background-color: white;
color: tomato;
border-left: 5px solid blue;
border-radius: 20px 0;

`

export default ButtonStyle;
