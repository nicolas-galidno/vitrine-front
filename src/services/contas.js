import api from "./api";
import { soDigitos } from "../utils/formatar";

// "(11) 91234-5678" -> { ddd: "11", numero: "912345678" } (formato da entidade Telefone do back-end)
export function paraTelefone(texto) {
  const digitos = soDigitos(texto);
  return { ddd: digitos.slice(0, 2), numero: digitos.slice(2) };
}

// POST /api/v1/usuario
export const criarUsuario = ({ nome, email, senha, telefone }) =>
  api.post("/usuario", { nome, email, senha, telefones: [paraTelefone(telefone)] });

// POST /api/v1/empresas (categoria e cidade vão como objeto com id, como a entidade Empresas espera)
export const criarEmpresa = ({ nome, email, senha, cnpj, telefones, descricao, logradouro, categoriaId, cidadeId }) =>
  api.post("/empresas", {
    nome,
    cnpj: soDigitos(cnpj),
    email,
    senha,
    descricao: descricao || null,
    logradouro,
    telefones: telefones.map(paraTelefone),
    categoria: categoriaId ? { id: Number(categoriaId) } : null,
    cidade: cidadeId ? { id: Number(cidadeId) } : null,
  });

export function mensagemDeErro(error) {
  if (!error?.response) return "Não foi possível falar com o servidor. Verifique se o back-end está rodando em http://localhost:8080.";
  const dados = error.response.data;
  const texto = typeof dados === "string" ? dados : dados?.message;
  return texto || `O servidor recusou o cadastro (erro ${error.response.status}). Confira os dados e tente novamente.`;
}
