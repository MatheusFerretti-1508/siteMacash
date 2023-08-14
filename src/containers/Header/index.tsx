import { colors } from "../../styles"
import { HeaderContent, LinkDeNavegacao, ListaDeLinks } from "./styles"

type Props = {
    ativo: '1' | '2' | '3'
}

const Header = ({ativo}:Props) => {

    return (
            <div className="container">
                <HeaderContent>
                <nav>
                    <ListaDeLinks>
                        {ativo === '1' ? (
                        <li>
                            <LinkDeNavegacao style={{backgroundColor: `${colors.blueBrand}`, color: `${colors.white}`}} to={'/'}>Quem somos</LinkDeNavegacao>
                        </li>
                        ) : (
                        <li>
                            <LinkDeNavegacao to='/'>Quem somos</LinkDeNavegacao>
                        </li>
                        )}
                        {ativo === '2' ? (
                        <li>
                            <LinkDeNavegacao style={{backgroundColor: `${colors.blueBrand}`, color: `${colors.white}`}} to={'/servicos'}>Nossos serviços</LinkDeNavegacao>
                        </li>
                        ) : (
                        <li>
                            <LinkDeNavegacao to={'/servicos'}>Nossos serviços</LinkDeNavegacao>
                        </li>
                        )}
                        {ativo === '3' ? (
                        <li>
                            <LinkDeNavegacao style={{backgroundColor: `${colors.blueBrand}`, color: `${colors.white}`}} to={''}>Entre em contato</LinkDeNavegacao>
                        </li>
                        ) : (
                        <li>
                            <LinkDeNavegacao to={''}>Entre em contato</LinkDeNavegacao>
                        </li>
                        )}
                    </ListaDeLinks>
                </nav>
            </HeaderContent>
            </div>
    )
}

export default Header