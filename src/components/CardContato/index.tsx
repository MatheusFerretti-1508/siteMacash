/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ContainerServico, BorderMark, FormularioContato } from "./styles"
import emailjs from 'emailjs-com'



type Props = {
    tipo: '1' | '2'
}

const CardContato = ({ tipo }: Props) => {

    const enviarEmail = (e:any) => {
        e.preventDefault();
        emailjs.sendForm('service_49ahv4i', 'template_haze4wa', e.target, 'XL9fCxd3mkzCpVVBJ')
            .then((_result) => {
                alert('Mensagem enviada com sucesso')
            }, (error) => {
                alert(error.message)
            });
            e.target.reset();
    };

    return (
        <>
            <div className="container">
                {tipo === '1' ? (
                    <ContainerServico>
                        <BorderMark tipo="1">
                            <h3>Entre em contato conosco por meio do nosso e-mail</h3>
                            <FormularioContato onSubmit={enviarEmail}>
                                <label htmlFor="nome">Seu nome / Seu negócio</label>
                                <input name="name" id="nome" type="text" />
                                <label htmlFor="email">Seu e-mail</label>
                                <input name="email" id="email" type="text" />
                                <label htmlFor="assunto">Assunto</label>
                                <input name="subject" id="assunto" type="text" />
                                <label htmlFor="mensagem">Sua mensagem</label>
                                <textarea name="message" id="mensagem" />
                                <button type="submit">Enviar mensagem</button>
                            </FormularioContato>
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