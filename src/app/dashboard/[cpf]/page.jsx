"use client";
// Importações necessárias
import { useEffect, useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Dashboard() {
  // Estado para armazenar os dados das ONGs
  const [ongs, setOngs] = useState([]);
  const [finalOngs, setFinalOngs] = useState([]);
  var cpf = sessionStorage.getItem("token");
 

  useEffect(() => {
    // Verificar se o usuário está autenticado, caso contrário, redirecionar para a página de login
    if (sessionStorage.getItem("token") === null) {
      redirect("/signup");
    } else {
      console.log("logado");

      // Requisição para obter dados das ONGs
      fetch("http://localhost:8080/hydrovital/ong")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((ongsData) => {
          // Atualizar o estado com os dados das ONGs
          setOngs(ongsData);

          // Encontrar todas as ONGs correspondentes ao CPF
          const ongsEncontradas = ongsData.filter((ong) => ong.cpf === cpf);
          if (ongsEncontradas.length > 0) {
            setFinalOngs(ongsEncontradas);
          } else {
            console.log("ONGs não encontradas para o CPF:", cpf);
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar dados das ONGs:", error);
        });
        
    }
  }, []);
  var cnpjs = [];
console.log(finalOngs);
finalOngs.map((ong) => cnpjs.push(ong.cnpj));
sessionStorage.setItem("cnpjs", cnpjs);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Menu Lateral */}
      <nav className="w-64 bg-white border-r overflow-y-auto">
        {/* Links do menu */}
        <div className="p-4">
          <Link href={`/dashboard/${cpf}`}>
            <p className="text-blue-500 font-semibold text-lg">Dashboard</p>
          </Link>
        </div>
        <div className="p-4">
          <Link href={`/aguas/${cpf}`}>
            <p className={"text-gray-500 hover:text-blue-500"}>Águas</p>
          </Link>
        </div>
        <div className="p-4">
          <Link href="/nova-ong">
            <p className="text-gray-500 hover:text-blue-500">Nova ONG</p>
          </Link>
        </div>
        {/* Adicione mais links conforme necessário */}
      </nav>

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Barra Superior */}
        <header className="bg-white border-b p-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          {/* Adicione mais informações conforme necessário */}
        </header>

        {/* Conteúdo Principal */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          {/* Seção "Suas ONGs" */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Suas ONGs</h2>
            {finalOngs.map((ong) => (
              <div key={ong.cnpj} className="bg-white p-4 mb-4 shadow-md rounded-md">
                <h3 className="text-lg text-black font-semibold mb-2">{ong.nome}</h3>
                <Link href={`/ong/${ong.cnpj}`}>
                  <p className="text-blue-500 hover:underline">Ver Detalhes</p>
                </Link>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
