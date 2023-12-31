import {createGlobalStyle} from 'styled-components'

export const colors = {
    blueBrand: '#1D78A4',
    lightBlueBrand: '#288ebf',
    white: '#fff',
    black: '#000',
    background: '#ebebeb'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'REM', sans-serif;
    }

    .container {
        max-width: 1024px;
        margin: 0 auto;

        @media (max-width: 768px) {
            width: 90%;
            margin: 0 auto;
        }
    }

    body {
        background-color: ${colors.background};
    }
`

// #24b811
// #1b870e
// #288ebf
// #126794
// #DFE6F0