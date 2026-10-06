// Cidades de cada estado, vindas da API pública do IBGE (todos os municípios do Brasil).
// Se o back-end passar a expor /estados e /cidades, basta trocar a implementação aqui.
const cache = new Map();

export async function listarCidades(uf) {
  if (cache.has(uf)) return cache.get(uf);
  const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`);
  if (!resposta.ok) throw new Error(`IBGE respondeu ${resposta.status}`);
  const nomes = (await resposta.json()).map((municipio) => municipio.nome);
  cache.set(uf, nomes);
  return nomes;
}
