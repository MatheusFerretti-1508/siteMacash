import { keyframes, styled } from "styled-components";
import { colors } from "../../styles";

const waves = keyframes`
    
    0% {
        font-size: 80px;
    }

    50% {
        font-size: 120px;
    }

    100% {
        font-size: 80px;
    }
`

const MobileWaves = keyframes`
    
    0% {
        font-size: 50px;
    }

    50% {
        font-size: 80px;
    }

    100% {
        font-size: 50px;
    }
`

export const BrandName = styled.h1`
    /* position: absolute;
    top: 260px;
    left: 32%;
    right: 32%; */
    display: flex;
    justify-content: center;
    margin-top: 240px;
    margin-bottom: 240px;
    font-size: 80px;
    font-weight: 700;
    line-height: 32px;
    display: flex;
    justify-content: center;
    color: ${colors.blueBrand};

    animation: ${waves} infinite;
    animation-duration: 8s;

    @media (max-width: 768px){
        font-size: 40px;
        animation: ${MobileWaves} infinite;
        animation-duration: 8s;
    }
`