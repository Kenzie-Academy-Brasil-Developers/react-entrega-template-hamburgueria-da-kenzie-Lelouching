import styled from "styled-components"

export const MainStyle = styled.main`
    width: 90%;
    margin: 0 auto;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (min-width:701px) {
        width: 1200px;
        max-width: 100%;
        flex-direction: row;
        justify-content: space-between;
        gap: 1.5rem;
    }
`