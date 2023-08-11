import styled from "styled-components";
import { colors } from "../../styles";


export const ContainerChamada = styled.div`
    margin-top: 120px;
    margin-bottom: 120px;

    img {
        display: flex;
        margin: 0 auto;
        height: 100px;
        margin-bottom: 24px;
    }
`

export const TituloChamada = styled.h1`
    font-family: 'Exo', sans-serif;
    font-size: 72px;
    display: flex;
    justify-content: center;
    color: ${colors.blueBrand};
    margin-bottom: 24px;

    @media (max-width: 768px) {
        font-size: 48px;
    }
`

export const CardChamada = styled.div`
        margin: 0 auto;
        padding: 8px;
        height: 300px;
        width: 250px;
        background-color: ${colors.white};
        border-radius: 32px;
        border: 4px solid black;
        cursor: pointer;
        transition: all ease 3s;

        p {
            display: flex;
            justify-content: center;
            border-bottom: 2px solid black;
        }

        img {
            height: 264px;
            width: 225px;
            display: flex;
            object-fit: cover;
            border-radius: 0 0 32px 32px;
            position: absolute;
        }

        
        &:hover {
                transform: scale(1.1);
            }
`