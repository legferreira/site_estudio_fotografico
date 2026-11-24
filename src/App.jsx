import Cabecalho from "./components/Cabecalho";
import Carrossel from "./components/Carrossel";
import QuemSomos from "./components/QuemSomos";
import Servicos from "./components/Servicos";
import Contato from "./components/Contato";
import Rodape from "./components/Rodape";

export default function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Carrossel />
        <QuemSomos />
        <Servicos />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}
