import styled from "styled-components";


export const ContainerCategoryFlex = styled.div`
  background: ${({ theme }) => theme.colors.category};
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 5.5px );
  -webkit-backdrop-filter: blur( 5.5px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 100px;

  }
`;