import styled from "styled-components";

export const Search = styled.input`
  font-family: Arial, FontAwesome;
  text-align: left;
  border-radius: 5px;
  width: 250px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.search};
  padding: 10px;
  color: black;
  border: none;
  outline:none;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
  @media screen and (max-width: 400px) {
    width: 80px;
  }
`;

export const Create = styled.button`
    padding: 10px;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.button};
    border: none;
    border-radius: 5px;
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out; 

    &:hover{
      transform: scale(1.1);
    }

    @media screen and (max-width: 400px) {
      width: 110px;
      font-size: 0.7rem;
    }
`;
