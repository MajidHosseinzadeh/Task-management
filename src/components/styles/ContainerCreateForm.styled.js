import styled from "styled-components";

export const ContainerCreateForm = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  border-radius: 5px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: absolute;
  width: 40%;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;