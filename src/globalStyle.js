import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-brand-1: #27ae60;
        --color-brand-2: #93d7af;
        --color-secondary: #eb5757;
        --color-grey-1: #333333;
        --color-grey-2: #828282;
        --color-grey-3: #e0e0e0;
        --color-grey-4: #f5f5f5;
        --color-negative: #e60000;
        --color-warning: #ffcd07;
        --color-sucess: #168821;
        --color-information: #155bcb;

        --font-size-1: 1.625rem;
        --font-size-2: 1.375rem;
        --font-size-3: 1.125rem;
        --font-size-4: 1rem;
        --font-size-5: .875rem;
        --font-size-6: .75rem;

        --font-weight-1: 800;
        --font-weight-2: 700;
        --font-weight-3: 600;
        --font-weight-4: 500;
        --font-weight-5: 400;

        --radius-1: .5rem;
        --radius-2: .25rem;
    }

    .App{
        min-height: 100vh;
        min-width: 100vw;
        font-family: 'Inter', sans-serif;
    }

    .container{
        width: 90%;
        margin: 0 auto;
    }

    @media (min-width:701px) {
        .container{
            width: 1200px;
            max-width: 100%;
        }
    }
`