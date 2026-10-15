# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


## Integração com o back-end Spring Boot

- A URL da API é configurada em `src/services/api.js`; por padrão, `http://localhost:8080/api/v1`.
- Para mudar o endereço sem alterar o código, crie `.env.local` com `VITE_API_URL=http://localhost:8080/api/v1`.
- O cadastro de clientes usa `POST /usuario`; o cadastro de empresas usa `POST /empresas`.
- A tela Explorar consulta `GET /empresas`; o perfil consulta `GET /produto`.
- O painel empresarial consulta `GET /produto`, cadastra com `POST /produto`, exclui com `DELETE /produto/{id}` e salva os dados da empresa com `PUT /empresas/{id}`.
- O back-end fornecido não possui endpoint de autenticação. Por isso, a tela de login informa essa limitação em vez de simular uma sessão.
- O back-end atual não relaciona produtos a uma empresa; por isso, a lista de produtos ainda é global. Para um catálogo individual, será necessário adicionar essa relação no modelo e na API.
- `GET /categorias` e `GET /estados` no back-end fornecido retornam listas vazias (os controllers não consultam os services/repositories). O front mantém as categorias/estados locais para os formulários; a lista de cidades é consultada na API.
- Configure o CORS do Spring Boot para permitir a origem do Vite (normalmente `http://localhost:5173`).
