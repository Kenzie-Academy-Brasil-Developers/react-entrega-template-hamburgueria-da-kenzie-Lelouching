import styled from "styled-components"

export const ButtonBrandStyle = styled.button`
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-4);
    color: #FFF;
    border: none;
    border-radius: var(--radius-1);
    background-color: var(--color-brand-1);
    padding: .75rem 1.25rem;
    cursor: pointer;
    width: fit-content;

    :hover{
        background-color: var(--color-brand-2);
    }
`