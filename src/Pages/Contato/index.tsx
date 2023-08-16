import CardContato from "../../components/CardContato"
import Footer from "../../containers/Footer"
import Header from "../../containers/Header"
import gmailImg from '../../assets/images/gmail-old-svgrepo-com.svg'
import instaImg from '../../assets/images/instagram-1-svgrepo-com.svg'
import faceImg from '../../assets/images/facebook-svgrepo-com.svg'


const Contato = () => {

    return (
        <>
        <Header ativo="3" />
            <CardContato tipo="1"
            imagem1={instaImg}
            imagem2={gmailImg}
            imagem3={faceImg}
            />
        <Footer />
        </>
    )
}

export default Contato