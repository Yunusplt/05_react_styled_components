import styled from 'styled-components';

const Display = styled.div`
background-color: lightblue;
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: ${({theme})=> theme.responsive} ) {
    flex-direction: column;
    text-align:center;
}

`;

export default Display;
