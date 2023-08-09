import {createGlobalStyle} from 'styled-components'

export const colors = {
    blueBrand: '#1D78A4',
    white: '#fff',
    black: '#000'
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
    }
`