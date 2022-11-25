import styled from "styled-components"

export const CartProductStyle = styled.li`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    padding: 0.5rem;

    & > div{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        height: fit-content;
        width: fit-content;
    }

    & > span{
        font-size: var(--font-size-6);
        font-weight: var(--font-weight-4);
        color: var(--color-grey-2);
        padding: 1rem;
        height: fit-content;
        width: fit-content;
        cursor: pointer;
    }

    & > span:hover{
        text-decoration: underline;
    }

    & > div div:nth-child(1){
        background-color: var(--color-grey-3);
        padding: 0.25rem;
        border-radius: var(--radius-2);
    }

    & > div div:nth-child(1) img{
        width: 5rem;
        height: 5rem;
    }

    & > div div:nth-child(2){
        display: flex;
        flex-direction: column;
        padding: 1rem 0 0 0;
        gap: 1rem;
        width: fit-content;
        height: 100%;
    }

    & > div div:nth-child(2) h3{
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-2);
        color: var(--color-grey-1);
    }

    & > div div:nth-child(2) span{
        font-size: var(--font-size-6);
        font-weight: var(5);
        color: var(--color-grey-2);
    }
`