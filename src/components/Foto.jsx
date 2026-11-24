import { useState } from "react";

export default function Foto({ src, alt }) {
  const [erro, setErro] = useState(false);

  if (erro) {
    return <div className="foto-vazia">Adicione a foto em public{src}</div>;
  }

  return <img src={src} alt={alt} onError={() => setErro(true)} />;
}
