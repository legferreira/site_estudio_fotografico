import { estudio } from "../conteudo";

export default function Rodape() {
  return (
    <footer className="rodape">
      <p>
        © 2026 {estudio.nome} {estudio.subtitulo}
      </p>
    </footer>
  );
}
