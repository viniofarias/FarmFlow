import { Animal } from "@/types/animal";

interface CattleTableProps {
    animais: Animal[];
}

export default function CattleTable({ animais }: CattleTableProps) {
    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-100 text-gray-800 uppercase font-semibold">
                    <tr>
                        <th scope="col" className="px-6 py-4">Brinco</th>
                        <th scope="col" className="px-6 py-4">Nome</th>
                        <th scope="col" className="px-6 py-4">Categoria</th>
                        <th scope="col" className="px-6 py-4">Peso (kg)</th>
                        <th scope="col" className="px-6 py-4">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {animais.length === 0 && (
                        <tr>
                            <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                Nenhum animal encontrado.
                            </td>
                        </tr>
                    )}
                    {animais.map((animal) => (
                        <tr key={animal.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                {animal.numeroBrinco}
                            </td>
                            <td className="px-6 py-4">
                                {animal.nome || <span className="text-gray-400 italic">N/A</span>}
                            </td>
                            <td className="px-6 py-4">
                                {animal.categoria}
                            </td>
                            <td className="px-6 py-4">
                                {animal.pesoKg.toFixed(1)}
                            </td>
                            <td className="px-6 py-4">
                                <span className=
                                    {`   
                                        px-2 py-1 rounded-full text-xs font-medium
                                        ${animal.status === 'Saudável' ? 'bg-green-100 text-green-800' : ''}
                                        ${animal.status === 'Em Tratamento' ? 'bg-red-100 text-red-800' : ''}
                                        ${animal.status === 'Vacinação Pendente' ? 'bg-yellow-100 text-yellow-800' : ''}
                                    `}>
                                    {animal.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}