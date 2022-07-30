import styled from "styled-components";


export const TodoLogo = styled.span`
    color: ${({ theme }) => theme.colors.text};
    margin: 0 5px;
    font-size: 1.2rem;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        font-size: 1rem;
      }
      @media screen and (max-width: 500px) {
        font-size: 0.8rem;
      }
      @media screen and (max-width: 350px) {
        font-size: 0.5rem;
      }
`;

export const TodoLogin = styled.button`
    color: ${({ theme }) => theme.colors.text};
    background: none;
    box-shadow: inset 0px 20px 25px -25px ${({ theme }) => theme.colors.button};
    border-radius: 10px;
    padding: 10px 35px;
    font-size: 0.8rem;
    font-weight: bold;
    border: none;
    width: auto;
    height: 60%;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    transition: all 0.5s ease-in;

    &:hover{
        box-shadow: inset 0px 20px 25px -10px ${({ theme }) => theme.colors.button};
        transition: box-shadow 0.5s ease-in;
    }
    @media screen and (max-width: 768px) {
        font-size: 0.6rem;
        padding: 5px 15px
      }
`;


export const CreateCategory = styled.div`
    
    
`;
