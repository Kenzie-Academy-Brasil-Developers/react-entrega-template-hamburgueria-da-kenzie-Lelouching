import styled from "styled-components"

export const ProductListStyle = styled.ul`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    width: 100%;
    height: fit-content;
    padding: 1rem;
    gap: 1.25rem;

    @media (min-width:701px) {
        overflow-x: unset;
        width: 60%;
        flex-wrap: wrap;
        max-height: 50rem;
        overflow-y: auto;
    }
`