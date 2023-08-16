import { ContainerServico, BorderMark } from "./styles"



type Props = {
    tipo: '1' | '2'
    imagem1: string,
    imagem2: string,
    imagem3: string
}

const CardContato = ({ tipo, imagem1, imagem2, imagem3}: Props) => {

    return (
        <>
            <div className="container">
                {tipo === '1' ? (
                    <ContainerServico>
                        <BorderMark tipo="1">
                            <h3>Entre em contato conosco por meio dos canais abaixo</h3>
                            <div>
                            <a href="https://ig.me/m/grupomacash"><img src={imagem1} alt="Instagram" /></a>
                            <a href="mailto:macashaceleradoraesolucoes@gmail.com"><img src={imagem2} alt="E-mail" /></a>
                            <a href="https://www.facebook.com/profile.php?id=61550323701017&mibextid=LQQJ4d"><img src={imagem3} alt="Facebook" /></a>
                            </div>
                        </BorderMark>
                    </ContainerServico>) : (
                    <ContainerServico>
                        <BorderMark tipo="2">
                        </BorderMark>
                    </ContainerServico>)}
            </div>
        </>
    )
}

export default CardContato