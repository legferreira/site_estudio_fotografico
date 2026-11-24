import { useEffect, useState } from "react";
import { estudio, fotosCarrossel } from "../conteudo";
import Foto from "./Foto";

export default function Carrossel() {
  const [atual, setAtual] = useState(0);
  const total = fotosCarrossel.length;

  useEffect(() => {
    const timer = setInterval(() => setAtual((i) => (i + 1) % total), 4000);
    return () => clearInterval(timer);
  }, [total]);

  const anterior = () => setAtual((atual - 1 + total) % total);
  const proxima = () => setAtual((atual + 1) % total);

  return (
    <section id="inicio" className="carrossel">
      <Foto key={fotosCarrossel[atual]} src={fotosCarrossel[atual]} alt={`Foto ${atual + 1}`} />

      <div className="carrossel-texto">
        <h1>{estudio.boasVindas}</h1>
        <p>{estudio.chamada}</p>
      </div>

      <button className="seta esquerda" onClick={anterior}>
        &#10094;
      </button>
      <button className="seta direita" onClick={proxima}>
        &#10095;
      </button>

      <div className="bolinhas">
        {fotosCarrossel.map((_, i) => (
          <span key={i} className={i === atual ? "ativa" : ""} onClick={() => setAtual(i)} />
        ))}
      </div>
    </section>
  );
}
