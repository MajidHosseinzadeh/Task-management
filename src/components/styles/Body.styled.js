import styled from "styled-components";

export const Body = styled.div`
    background: radial-gradient(circle, ${({ theme }) => theme.colors.radialFirst} 0%, ${({ theme }) => theme.colors.radialSecond} 100%);
    background-color: ${({ theme }) => theme.colors.body};
    border-radius: 5px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`;