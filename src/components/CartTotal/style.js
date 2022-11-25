import styled from "styled-components"

export const CartTotalStyle = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding: 0.5rem;
    gap: 1rem;
    border-top: .125rem solid var(--color-grey-3);
    background-color: var(--color-grey-4);

    & > div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1rem 1rem 0.25rem 1rem;
    }

    & > div h4{
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-3);
        color: var(--color-grey-1);
    }

    & > div span{
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-3);
        color: var(--color-grey-2);
    }

    & > button{
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-3);
        color: var(--color-grey-2);
        background-color: var(--color-grey-3);
        border-radius: var(--radius-1);
        border: none;
        padding: .875rem 1.25rem;
        width: 95%;
        cursor: pointer;
    }

    & > button:hover{
        background-color: var(--color-grey-2);
        color: var(--color-grey-4);
    }
`