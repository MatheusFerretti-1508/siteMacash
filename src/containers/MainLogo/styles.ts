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

export const BrandName = styled.h1`
    font-size: 80px;
    font-weight: 700;
    line-height: 32px;
    display: flex;
    justify-content: center;
    color: ${colors.blueBrand};

    animation: ${waves} infinite;
    animation-duration: 8s;

`