import { quemSomos } from "../conteudo";

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="secao">
      <h2>{quemSomos.titulo}</h2>
      <p className="destaque">{quemSomos.destaque}</p>
      {quemSomos.paragrafos.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </section>
  );
}
