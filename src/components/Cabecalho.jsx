import { estudio } from "../conteudo";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <a href="#inicio" className="logo">
        📷 {estudio.nome}
      </a>
      <nav className="menu">
        <a href="#inicio">Início</a>
        <a href="#quem-somos">Quem somos</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}
