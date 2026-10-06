# Vitrine — primeira integração com a API

## O que foi integrado
- Criado `src/services/api.js` com Axios e URL base `http://localhost:8080/api/v1`.
- A tela **Explorar** consulta `GET /empresas`, exibe os dados recebidos do back-end e permite pesquisar por nome, descrição, categoria ou cidade.
- O perfil recebe os dados reais da empresa selecionada.
- Estados de carregamento, erro e lista vazia foram adicionados.

## Como executar
1. Abra a pasta `vitrine-front-main` no terminal.
2. Execute `npm install` (isso instalará o Axios e atualizará o `package-lock.json`).
3. Execute `npm run dev`.
4. Inicie o back-end Spring Boot e confira se o SQL Server está ativo.
5. Abra o endereço local mostrado pelo Vite e acesse **Explorar**.

O endereço da API pode ser alterado em `src/services/api.js`.

## Limitações identificadas no back-end enviado
- A listagem de empresas é o endpoint conectado à tela Explorar: `GET /api/v1/empresas`.
- O catálogo de produtos, avaliações e favoritos ainda não possui endpoints correspondentes no back-end enviado.
- Os controladores de usuário e categoria ainda devolvem listas em memória; o cadastro/login não pode ser considerado funcional até existirem endpoints próprios e validação no servidor.
- O projeto Spring está configurado para o banco `vitrine_db`, com SQL Server local. Confira `application.properties` e as credenciais da sua máquina antes de executar.

Esta é uma primeira etapa de integração, não uma declaração de que todas as funcionalidades do sistema já estão prontas.
