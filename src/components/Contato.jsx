import { contatos } from "../conteudo";

export default function Contato() {
  return (
    <section id="contato" className="secao">
      <h2>Contato</h2>
      <ul className="lista-contato">
        <li>
          📸 Instagram:{" "}
          <a href={contatos.instagram.link} target="_blank" rel="noreferrer">
            {contatos.instagram.texto}
          </a>
        </li>
        <li>
          💬 WhatsApp:{" "}
          <a href={contatos.whatsapp.link} target="_blank" rel="noreferrer">
            {contatos.whatsapp.texto}
          </a>
        </li>
        <li>
          ✉️ E-mail: <a href={contatos.email.link}>{contatos.email.texto}</a>
        </li>
        <li>📍 Endereço: {contatos.endereco.texto}</li>
      </ul>
    </section>
  );
}
