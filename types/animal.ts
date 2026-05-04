export type CategoriaAnimal = 'Corte' | 'Leite';
export type StatusSaude = 'Saudável' | 'Em Tratamento' | 'Vacinação Pendente';


export interface Animal{
    id: string;
    numeroBrinco: string;
    nome?: string;
    pesoKg: number;
    dataNascimento: string;
    categoria: CategoriaAnimal;
    status: StatusSaude;
}