import styled from "styled-components"

export const MainStyle = styled.main`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (min-width:701px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 1.5rem;
    }
`