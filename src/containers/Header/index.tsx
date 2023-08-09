import { HeaderContent, Link, ListaDeLinks } from "./styles"


const Header = () => {

    return (
            <HeaderContent className="container">
                <nav>
                    <ListaDeLinks>
                        <li>
                            <Link href="#">Quem somos</Link>
                        </li>
                        <li>
                            <Link href="#">Nossos serviços</Link>
                        </li>
                        <li>
                            <Link href="#">Entre em contato</Link>
                        </li>
                    </ListaDeLinks>
                </nav>
            </HeaderContent>
    )
}

export default Header