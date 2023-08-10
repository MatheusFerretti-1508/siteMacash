import { Direcionamento, HomeInfo } from "./styles"

type Props = {
    titulo: string,
    texto: string,
    imagem: string,
    posicao: 'direita' | 'esquerda'
}


const Slogan = ({ imagem, texto, titulo, posicao }: Props) => {

    return (
        <>
            {posicao === 'esquerda' ? (
                <Direcionamento posicao="esquerda">
                    <HomeInfo posicao="esquerda">
                    <h2>{titulo}</h2>
                    <p>{texto}</p>
                    <img src={imagem} alt="foguete" />
                    </HomeInfo>
                </Direcionamento>
            ) : (
                <Direcionamento posicao="direita">
                    <HomeInfo posicao="direita">
                    <h2>{titulo}</h2>
                    <p>{texto}</p>
                    <img src={imagem} alt="foguete" />
                    </HomeInfo>
                </Direcionamento>
            )}
        </>
    )
}

export default Slogan