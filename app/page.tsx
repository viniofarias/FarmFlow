"use client";
import { useState } from "react";
import CattleTable from "@/components/CattleTable";
import { mockAnimais } from "@/data/mock-animals";

export default function DashboardPage() {
  const [termoBusca, setTermoBusca] = useState('');

  // Ao integrar o BackEnd, só substituir a linha abaixo por uma chamada à API 
  const animaisFiltrados = mockAnimais.filter((animal) => {
    const busca = termoBusca.toLowerCase();
    const bateuBrinco = animal.numeroBrinco.toLowerCase().includes(busca);
    const bateuNome = animal.nome ? animal.nome.toLowerCase().includes(busca) : false;
    return bateuBrinco || bateuNome;
  });

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-gray-900">
            Farm Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Visão geral e gestão do seu rebanho.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="h-24 bg-gray-200 border border-dashed border-gray-400 rounded-lg flex items-center justify-center text-gray-500">
              Espaço para Card 1
           </div>
           <div className="h-24 bg-gray-200 border border-dashed border-gray-400 rounded-lg flex items-center justify-center text-gray-500">
              Espaço para Card 2
           </div>
           <div className="h-24 bg-gray-200 border border-dashed border-gray-400 rounded-lg flex items-center justify-center text-gray-500">
              Espaço para Card 3
           </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Listagem de Animais
            </h2>
            <div className="w-72">
              <input type='text' placeholder="Buscar por brinco ou por nome..." value={termoBusca} onChange={(e) => setTermoBusca(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"/>
            </div>
          </div>
          
          {/* Aqui nós invocamos o componente, passando o nosso "Model" para a Prop "animais" */}
          <CattleTable animais={animaisFiltrados} />
        </section>
      </div>
    </main>
  );
}
