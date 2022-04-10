export interface Livro {
  id?: number;
  titulo: string;
  urlFoto?: string;
  dtLancamento: Date;
  descricao?: string;
  nota: number;
  urlIMDb?: string;
  genero: string;
  preco?: number;
  quantidade?: number;
}
