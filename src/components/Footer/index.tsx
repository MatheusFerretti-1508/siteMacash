import { Abas, FooterContent } from "./styles"


const Footer = () => {

    return (
        <FooterContent>
            <div className="container">
                <Abas>
                    <div>
                        <h4>Contato</h4>
                        <ul>
                            <li>Instagram</li>
                            <li>E-mail</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Sobre nós</h4>
                        <p>
                            Criado com o intuíto de crescer negócios,
                            o Grupo Macash oferece o pacote de crescimento
                            completo para os seus clientes, trabalhando desde o
                            marketing até o desenvolvimento de sites e vendas.
                        </p>
                    </div>
                    <div>
                        <h4>Redes Sociais</h4>
                        <ul>
                            <li>Instagram</li>
                            <li>E-mail</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </Abas>
            </div>
        </FooterContent>
    )
}

export default Footer