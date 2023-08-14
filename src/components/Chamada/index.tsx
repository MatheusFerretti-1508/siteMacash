import { CardChamada, ContainerChamada, TituloChamada } from "./styles"
import SetaImg from '../../assets/images/down-arrow-svgrepo-com.svg'
import CallImg from '../../assets/images/chatting-conversation-contact-svgrepo-com.svg'



const Chamada = () => {

    return ( 
        <>
            <ContainerChamada>
                <TituloChamada>Ficou interessado?</TituloChamada>
                <img src={SetaImg} alt="seta para baixo" />
                <a href="https://ig.me/m/grupomacash">
                    <CardChamada>
                        <p>Entre em contato!</p>
                            <img src={CallImg} alt="Telefone" />
                    </CardChamada>
                </a>
            </ContainerChamada>
        </>
    )
}

export default Chamada