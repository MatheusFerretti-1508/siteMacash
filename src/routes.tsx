import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Servicos from "./Pages/Servicos";

const Rotas = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="servicos" element={<Servicos />} />
        </Routes>
    )
}

export default Rotas