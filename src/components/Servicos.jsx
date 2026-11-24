import { servicos } from "../conteudo";
import Foto from "./Foto";

export default function Servicos() {
  return (
    <section id="servicos" className="secao fundo-cinza">
      <h2>Nossos serviços</h2>
      <div className="cards">
        {servicos.map((s) => (
          <div key={s.titulo} className="card">
            <div className="card-foto">
              <Foto src={s.imagem} alt={s.titulo} />
            </div>
            <h3>{s.titulo}</h3>
            <p>{s.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
