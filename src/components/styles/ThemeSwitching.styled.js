import styled from "styled-components";

export const ThemeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.header}; 
  height: 12vh; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  
`;

export const ThemeButton = styled.button`
  margin: 0 5px;
  padding: 10px;
  font-size: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

