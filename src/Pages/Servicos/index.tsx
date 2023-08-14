import Servico from "../../components/Servico"
import Footer from "../../containers/Footer"
import Header from "../../containers/Header"
import grafico3dImg from '../../assets/images/grafico3d.svg'
import desenvolvimento3dImg from '../../assets/images/desenvolvimento.svg'
import marketing3dImg from '../../assets/images/marketing3d.svg'


const Servicos = () => {

    return (
        <>
            <Header ativo="2" />
            <Servico tipo="1"
            titulo="Crescimento de vendas"
            texto="Com as estratégias certas impulsionamos as vendas dos nossos clientes, seja através do seu site
            prórpio ou dentro das maiores plataformas de marketplace! Análise da concorrência, estudo dos preços,
            introdução da sua marca e mentorias semanais para auxiliar no cuidado das suas métricas, tudo isso você encontra aqui!"
            imagem={grafico3dImg}
            />
            <Servico tipo="1"
            titulo="Desenvolvimento de sites"
            texto="Com experiência no desenvolvimento de sites, nossa equipe utiliza as tecnologias mais famosas do mercado, como: ReactJs, VueJs
            ou Bootstrap, fornecendo designs elegantes, fluídez, modernidade e mais destaque para o seu site!"
            imagem={desenvolvimento3dImg} />
            <Servico tipo="1"
            titulo="Marketing"
            texto="Através da análise do nicho do cliente, do estudo dos seus concorrentes e da utilização das estratégias corretas
            nos meios digitais, crescemos seu nome no mundo virtual, trazendo novos clientes e mantendo-os engajados com o conteúdo!"
            imagem={marketing3dImg} />
            <Footer />
        </>
    )
}

export default Servicos 