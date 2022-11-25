import styled from "styled-components"

export const HeaderStyle = styled.header`

    width: 100%;
    height: fit-content;
    background-color: var(--color-grey-4);
    
    nav{
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;
        gap: 1rem;
    }

    h1{
        font-size: var(--font-size-1);
        font-weight: var(--font-weight-2);
        color: var(--color-grey-1);
    }

    span{
        font-size: var(--font-size-3);
        color: var(--color-secondary);
    }

    form{
        display: flex;
        align-items: center;
        width: 100%;
        border: .125rem solid var(--color-grey-3);
        border-radius: var(--radius-1);
        padding: 0.5rem;
        background-color: #FFF;
    }

    form:hover {
        border: .125rem solid var(--color-grey-2);
    }

    form:hover input::placeholder{
        color: var(--color-grey-1);
    }

    input{
        font-size: var(--font-size-4);
        font-weight: var(--font-weight-4);
        color: var(--color-grey-1);
        width: 100%;
        padding: 0.5rem 1rem;
        border: none;
        background: none;
    }

    input::placeholder{
        font-size: var(--font-size-4);
        font-weight: var(--font-weight-5);
        color: var(--color-grey-3);
    }

    input:focus{
        outline: none;
    }

    input:focus::placeholder{
        color: var(--color-grey-1);
    }

    @media (min-width:701px) {
        nav{
            flex-direction: row;
            justify-content: space-between;
        }

        form{
            width: 22.8125rem;
        } 
    }
`