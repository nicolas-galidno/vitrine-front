import api from "./api";

// Os caminhos abaixo são uma suposição: confirme com quem está fazendo o back-end.
export const criarUsuario = (dados) => api.post("/usuarios", dados);
export const criarEmpresario = (dados) => api.post("/empresarios", dados);

export function mensagemDeErro(error) {
  const dados = error?.response?.data;
  return (typeof dados === "string" ? dados : dados?.message) || "Não foi possível concluir o cadastro. Verifique se o back-end está no ar e tente novamente.";
}
