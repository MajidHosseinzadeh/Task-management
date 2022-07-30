import styled from "styled-components";


export const ButtonFlex = styled.div`
    width: 100%;
    margin: 5px 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    
`;