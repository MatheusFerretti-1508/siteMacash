import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Servicos from "./Pages/Servicos";
import Contato from "./Pages/Contato";

const Rotas = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="servicos" element={<Servicos />} />
            <Route path="contato" element={<Contato />} />
        </Routes>
    )
}

export default Rotas