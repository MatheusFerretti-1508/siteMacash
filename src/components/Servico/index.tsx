import { ContainerServico, BorderMark } from "./styles"


type Props = {
    tipo: '1' | '2'
    imagem: string,
    titulo: string,
    texto: string
}

const Servico = ({ tipo, imagem, titulo, texto }: Props) => {

    return (
        <div className="container">
            {tipo === '1' ? (
            <ContainerServico>
                <BorderMark tipo="1">
                    <img src={imagem} alt="" />
                    <div>
                        <h4>{titulo}</h4>
                        <p>
                            {texto}
                        </p>
                    </div>
                </BorderMark>
            </ContainerServico>) : (
            <ContainerServico>
                <BorderMark tipo="2">
                    <div>
                        <h4>{titulo}</h4>
                        <p>
                        {texto}    
                        </p>
                    </div>
                    <img src={imagem} alt="" />
                </BorderMark>
            </ContainerServico>)}
        </div>
    )
}

export default Servico