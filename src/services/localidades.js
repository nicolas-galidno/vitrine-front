import api from "./api";

// Cidades vêm do back-end (GET /api/v1/cidade), porque o cadastro da empresa precisa do id da cidade.
// A lista inteira é baixada uma vez e filtrada por estado aqui no front.
let todas = null;

export async function listarCidades(uf) {
  if (!todas) {
    const { data } = await api.get("/cidade");
    if (Array.isArray(data) && data.length > 0) todas = data;
    else return [];
  }
  return todas
    .filter((cidade) => cidade.estado?.sigla === uf)
    .map(({ id, nome }) => ({ id, nome }))
    .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
}
