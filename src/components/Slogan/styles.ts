import { styled } from "styled-components";
import { colors } from "../../styles";

interface Props {
    posicao: 'direita' | 'esquerda'
}

export const Direcionamento = styled.div<Props>`
    display: flex;
    justify-content: ${(props) => props.posicao === 'esquerda' ? 'start' : 'end'} ;
`

export const HomeInfo = styled.div<Props>`
    margin-top: 80px;
    padding: ${(props) => props.posicao === 'esquerda' ? '16px 24px 16px 10px' : '24px 18px 18px 40px'};
    width: 400px;
    height: 400px;
    border-radius: ${(props) => props.posicao === 'esquerda' ? '0% 50% 50% 0' : '50% 0 0 50%'} ;
    background-color: ${colors.blueBrand};
    color: ${colors.white};
    transition: all ease 2s;


    h2 {
        font-size: 32px;
        line-height: 22px;
        font-weight: bold;
        margin-bottom: 32px;
        display: flex;
        justify-content: ${(props) => props.posicao === 'esquerda' ? 'start' : 'end'} ;

        @media (max-width: 768px) {
            font-size: 28px;
        }
    }

    p {     
        font-size: 16px;
        line-height: 32px;
        font-weight: 200;
        margin-bottom: 10px;
        text-align: ${(props) => props.posicao === 'esquerda' ? 'start' : 'end'};

        @media (max-width: 768px) {
            margin-bottom: ${(props) => props.posicao === 'esquerda' ? '10px' : '10px'};
            line-height: 28px;
            }

        @media (max-width: 736px) and (min-width: 414px) {
            margin-bottom: ${(props) => props.posicao === 'esquerda' ? '50px' : '10px'};
            line-height: 28px;
            }
    }

    img {
        margin: ${(props) => props.posicao === 'esquerda' ? '0 0 0 200px' : '32px 0 0 200px'};
        width: 100px;
        height: 100px;

        @media (max-width: 768px) {
            width: 75px;
            height: 75px;

            margin: ${(props) => props.posicao === 'esquerda' ? '0 0 50px 150px' : '32px 0 0 200px'};
            }

            @media (max-width: 736px) and (min-width: 414px) {
                margin: ${(props) => props.posicao === 'esquerda' ? '0 0 0 200px' : '60px 0 0 200px'};
            }
    }

    &:hover {
        transform: scale(1.1);
    }
`
