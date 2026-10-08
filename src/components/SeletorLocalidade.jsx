import { useEffect, useState } from "react";
import { estados } from "../data/estados";
import { listarCidades } from "../services/localidades";

// Estado + cidade. Renderiza dois <label> para encaixar direto na grade do formulário.
// `cidadeId` é o id da cidade no banco (é isso que o back-end recebe).
function SeletorLocalidade({ estado, cidadeId, aoMudar }) {
  const [cidades, setCidades] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!estado) return;
    let ativo = true;
    setCarregando(true); setErro("");
    listarCidades(estado)
      .then((lista) => {
        if (!ativo) return;
        setCidades(lista);
        if (lista.length === 0) setErro("O servidor ainda não retornou a lista de cidades.");
      })
      .catch(() => { if (ativo) { setCidades([]); setErro("Não foi possível carregar as cidades. Verifique se o back-end está rodando."); } })
      .finally(() => { if (ativo) setCarregando(false); });
    return () => { ativo = false; };
  }, [estado]);

  return <>
    <label>Estado
      <select value={estado} onChange={(e) => aoMudar({ estado: e.target.value, cidadeId: "" })} required>
        <option value="">Selecione</option>
        {estados.map((uf) => <option key={uf.sigla} value={uf.sigla}>{uf.nome} ({uf.sigla})</option>)}
      </select>
    </label>
    <label>Cidade
      <select value={cidadeId} onChange={(e) => aoMudar({ estado, cidadeId: e.target.value })} disabled={!estado || carregando || cidades.length === 0} required>
        <option value="">{!estado ? "Escolha o estado primeiro" : carregando ? "Carregando cidades..." : "Selecione"}</option>
        {cidades.map((cidade) => <option key={cidade.id} value={cidade.id}>{cidade.nome}</option>)}
      </select>
      {erro && <small className="campo-aviso">{erro}</small>}
    </label>
  </>;
}
export default SeletorLocalidade;
