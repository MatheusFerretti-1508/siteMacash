import Header from "../../components/Header"
import MainLogo from "../../components/MainLogo"
import Slogan from "../../components/Slogan"
import ImgFoguete from '../../assets/images/rocket-11-svgrepo-com.svg'
import ImgLucro from '../../assets/images/profit-bar-chart-finance-svgrepo-com.svg'


const Home = () => {

    return(
        <div className="container">
            <Header />
            <MainLogo />
            <Slogan 
            posicao="esquerda"
            titulo="Sobre nós" 
            texto=" O grupo Macash é um acelerador empresarial totalmente focado
                    em escalar negócios. Nosso lema é crescer junto com o cliente,
                    seja através do marketing nas mídias sociais ou até construindo
                    seu site e auxiliando na venda dos seus produtos!" 
            imagem={ImgFoguete} 
            />
            <Slogan 
            posicao="direita"
            titulo="O que fazemos?" 
            texto=" Melhoramos a qualidade dos seus posts com um design criativo
                    e inovador, desenvolvemos seu site utilizando as melhores tecnologias
                    do mercado e introduzimos sua marca às maiores plataformas de vendas online!" 
            imagem={ImgLucro} 
            />
        </div>
    )
}

export default Home