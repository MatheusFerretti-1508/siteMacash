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
    padding: 32px;
    display: flex;

    @media (max-width: 768px) {
        display: block;
        padding: 40px;
    }

    img {
        margin: ${(props) => props.tipo === '1' ? '0 80px 0 0' : '0 0 0 80px'};
        height: 150px;
        width: 150px;
        transition: all ease 2s;

        &:hover {
            transform: scale(1.1);
        }

        @media (max-width: 768px) {
        display: flex;
        margin: 0 auto;
        }
    }

    div {

        h4 {
            font-size: 32px;
            margin-bottom: 8px;

            @media (max-width: 768px) {
                font-size: 16px;
                white-space: nowrap;
                display: flex;
                justify-content: center;
            }
        }
        p {
            line-height: 22px;
            text-align: justify;

            @media (max-width: 768px) {
                font-size: 14px;
            }
        }   
    }
`