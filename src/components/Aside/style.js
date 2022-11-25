import styled from "styled-components"

export const AsideStyle = styled.aside`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;

    & > div:nth-child(1){
        background-color: var(--color-brand-1);
        border-radius: var(--radius-2) var(--radius-2) 0px 0px;
        padding: 1.75rem;
        width: 100%;
    }

    & > div:nth-child(1) span{
        font-size: var(--font-size-3);
        font-weight: var(--font-weight-2);
        color: #FFF;
    }

    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        height: 9.875rem;
        border-radius: 0px 0px var(--radius-2) var(--radius-2);
        background-color: var(--color-grey-4);
    }

    & > div:nth-child(2) h3{
        font-size: var(--font-size-2);
        font-weight: var(--font-weight-2);
        color: var(--color-grey-1);
    }

    & > div:nth-child(2) span{
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-5);
        color: var(--color-grey-2);
    }

    @media (min-width: 701px) {
        width: 40%;
        padding: 1rem 0 0 0;
    }
`