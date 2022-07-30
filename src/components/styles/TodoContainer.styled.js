import styled from "styled-components";


export const TodoContainer = styled.div`

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 90%;  
  height: 700px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;