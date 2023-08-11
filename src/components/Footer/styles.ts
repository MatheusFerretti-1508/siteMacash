import styled from "styled-components";
import { colors } from "../../styles";


export const FooterContent = styled.div`
    background-color: ${colors.blueBrand};
    color: ${colors.white};
    height: 300px;
    padding: 32px;
    display: flex;
    margin: 0 auto;
`

export const Abas = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 190px;

    div {

        h4 {
            display: flex;
            font-size: 32px;
            margin-bottom: 16px;
            justify-content: center;
        }

        p {
            text-align: center;
        }

        ul {
            list-style: none;

            li {
                font-size: 18px;
                display: flex;
                justify-content: center;
            }
        }
    }
`