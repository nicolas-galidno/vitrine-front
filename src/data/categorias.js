// Mesma ordem do script "4-INSERIR CATEGORIAS.sql": o id é a posição na lista (1, 2, 3...).
// Se alguém inserir/remover categorias no banco, confira se os ids continuam batendo
// (ou passe a ler de GET /api/v1/categorias quando esse endpoint estiver ligado ao service).
const nomes = [
  "Alimentação", "Restaurante", "Lanchonete", "Padaria", "Mercado",
  "Moda e Vestuário", "Beleza e Estética", "Saúde", "Educação", "Tecnologia",
  "Informática", "Construção", "Imobiliária", "Automóveis", "Oficina Mecânica",
  "Transporte", "Turismo e Viagens", "Hotelaria", "Academia e Esportes", "Pet Shop",
  "Veterinária", "Serviços Domésticos", "Contabilidade", "Advocacia",
  "Marketing e Publicidade", "Fotografia", "Eventos", "Entretenimento", "Comércio",
  "Indústria", "Agricultura", "Consultoria", "Serviços Gerais",
];

export const categorias = nomes.map((nome, i) => ({ id: i + 1, nome }));
export const nomesCategorias = nomes;
