import styled from "styled-components";
import { colors } from "../../styles";

interface Props {
    tipo: '1'| '2'
}


export const ContainerServico = styled.div`
    margin-top: 240px;
    margin-bottom: 90px;
    padding: 12px;
    border: 2px solid ${colors.blueBrand};
    border-radius: 120px;
`

export const BorderMark = styled.div<Props>`
    border: 2px solid ${colors.blueBrand};
    border-radius: 120px;
    padding: 48px;

    @media (max-width: 768px) {
        display: block;
        padding: 40px;
    }

    h3 {
        display: flex;
        justify-content: center;
        font-size: 32px;
        margin: 0 auto;
        margin-bottom: 24px;
        color: ${colors.blueBrand};

        @media (max-width: 768px) {
            font-size: 18px;
            text-align: center;
    }
    }

`

export const Seta = styled.img`
    height: 90px;
    width: 90px;

    @media (max-width: 768px) {
        display: none;
        }
`

export const FormularioContato = styled.form`
    display: grid;

    label {
        margin-bottom: 8px;
    }

    input {
        margin-bottom: 8px;
        padding: 8px;
        height: 32px;
    }

    textarea {
        margin-bottom: 16px;
        padding: 8px;
        resize: none;
        height: 104px;
    }

    button {
        padding: 8px;
        background-color: ${colors.lightBlueBrand};
        color: ${colors.white};
        border: none;
        border-radius: 16px;
        cursor: pointer;
        width: 50%;
        margin: 0 auto;

        &:hover {
            background-color: ${colors.blueBrand};
        }
    }
`