import styled from "styled-components"

export const ProductStyle = styled.li`
    display: flex;
    flex-direction: column;
    height: 21.625rem;
    min-width: 18.75rem;
    border: .125rem solid var(--color-grey-3);
    border-radius: var(--radius-2);
    transition: 0.6s ease;

    div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: var(--color-grey-4);
    }

    img{
        width: 9.875rem;
        height: 9.875rem;
    }

    div:nth-child(2){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        background-color: #FFF;
        padding: 1.5rem;
    }

    h3{
        font-size: var(--font-size-3);
        font-weight: var(--font-weight-2);
        color: var(--color-grey-1);
    }

    div:nth-child(2) span:nth-child(2){
        font-size: var(--font-size-6);
        font-weight: var(--font-weight-5);
        color: var(--color-grey-2);
    }

    div:nth-child(2) span:nth-child(3){
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-3);
        color: var(--color-brand-1);
    }

    :hover{
        scale: 1.05;
    }
`