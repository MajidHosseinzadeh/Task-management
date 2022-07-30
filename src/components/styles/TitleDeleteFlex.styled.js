import styled from "styled-components";


export const TitleDeleteFlex = styled.div`
    width: 90%;
    margin: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.border};
    
    @media screen and (max-width: 500px) {
      width: 300px;
    }
    @media screen and (max-width: 350px) {
      width: 200px;
    }
`;