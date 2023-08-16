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

    div {
        display: flex;
        justify-content: space-around;
        
        @media (max-width: 768px) {
                display: block;
            }

        img {
            height: 100px;
            width: 100px;
            transition: all ease 1s;
            cursor: pointer;

            &:hover {
                transform: scale(1.08);
            }
            
            @media (max-width: 768px) {
                display: flex;
                margin: 28px auto;
            }
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

// export const Social = styled.img<Props>`

// `