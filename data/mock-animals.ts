import { Animal } from "@/types/animal";

export const mockAnimais: Animal[] = [
    {
    id: 'a1b2c3d4-1234-5678-90ab-cdef12345678',
    numeroBrinco: 'BR-1001',
    nome: 'Estrela',
    categoria: 'Leite',
    pesoKg: 450.5,
    dataNascimento: '2021-03-15',
    status: 'Saudável'
  },
  {
    id: 'f9e8d7c6-4321-8765-ba09-87654321fedc',
    numeroBrinco: 'BR-2045',
    categoria: 'Corte', // Note que este não tem a propriedade 'nome' (opcional)
    pesoKg: 720.0,
    dataNascimento: '2022-08-10',
    status: 'Vacinação Pendente'
  },
  {
    id: '1a2b3c4d-5e6f-7a8b-9c0d-e1f2a3b4c5d6',
    numeroBrinco: 'BR-1022',
    nome: 'Mimosa',
    categoria: 'Leite',
    pesoKg: 430.0,
    dataNascimento: '2020-11-05',
    status: 'Em Tratamento'
  },
  {
    id: '9f8e7d6c-5b4a-3928-1706-f5e4d3c2b1a0',
    numeroBrinco: 'BR-3099',
    categoria: 'Corte',
    pesoKg: 680.5,
    dataNascimento: '2023-01-20',
    status: 'Saudável'
  }
];