import styled from 'styled-components';

const CardStyle = styled.div`
  background-color: aquamarine;
  border-radius: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  gap: 2rem;
  padding: 60px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: ${({ reverse }) => reverse || "row"};
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: justify;
  }
`;

export default CardStyle;
