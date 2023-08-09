import { keyframes, styled } from "styled-components";
import { colors } from "../../styles";

const fundoLink = keyframes`
    
    from {
        background-color: transparent;
    }
    
    to {
        background-color: ${colors.blueBrand};
        color: ${colors.white};
        width: 100%;
        animation-play-state: paused;
    }
`

export const HeaderContent = styled.header`
    padding: 24px;
    border: 2px solid ${colors.blueBrand};
    border-top: 0;
    border-radius: 16px;
    margin-bottom: 180px;
`

export const ListaDeLinks = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;

    li {
    }
    `

export const Link = styled.a`
    padding: 8px;
    border-radius: 16px;
    text-decoration: none;
    color: ${colors.black};
    background-color: ${colors.white};
    background-position: left;
    &:hover {
        animation: ${fundoLink};
        animation-duration: 1s;
        animation-iteration-count: 1;
        background-color: ${colors.blueBrand};
        color: ${colors.white};
    }
    `