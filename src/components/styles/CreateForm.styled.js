import styled from "styled-components";


export const CreateHeader = styled.h1`
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.2rem;
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 0.7rem;
    }
`;

export const CHeader = styled.h1`
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.2rem;
    
`;

export const CreateInput = styled.input`
  font-family: Arial, FontAwesome;
  margin: 40px 0;
  font-size: 1rem;
  text-align: center;
  border-radius: 5px;
  width: 70%;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.search};
  padding: 10px;
  color: black;
  border: none;
  outline:none;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
    width: 100px;
    height: 10px
  }
`;

export const CreateButton = styled.button`
    margin: 0 0 10px 0;
    padding: 10px;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.button};
    border: none;
    border-radius: 5px;
    width: 200px;
    height: auto;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out; 

    &:hover{
      transform: scale(1.05);
    }
    @media screen and (max-width: 1100px) {
      width: 150px;
      font-size: 0.9rem
    }
    @media screen and (max-width: 768px) {
      width: 100px;
      font-size: 0.8rem
    }
    @media screen and (max-width: 500px) {
      height: 10px;
      font-size: 0.5rem
    }
    
`;

