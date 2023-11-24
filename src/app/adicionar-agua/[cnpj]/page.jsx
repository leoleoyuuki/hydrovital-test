"use client";
import { useParams } from "next/navigation";
// Importações necessárias
import { useState } from "react";

export default function NovaAgua() {
    const cnpj = useParams();
  // Estado para armazenar os dados da nova Água
  const [novaAgua, setNovaAgua] = useState({
    qualidade: "",
    quantidadeAgua: "",
    quantidadeProd: "",
    quantidadePessoa: "",
    cnpjOng: cnpj,
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaAgua({ ...novaAgua, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleCadastro = async (e) => {
    e.preventDefault();

    try {
        const resposta = await fetch("http://localhost:8080/hydrovital/agua", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novaAgua),
        });
        console.log(resposta);

        if (resposta.ok) {
            const contentType = resposta.headers.get("content-type");
            
            if (contentType && contentType.includes("application/json")) {
                const resultado = await resposta.json();
                console.log(resultado);
                sessionStorage.setItem("token", resultado.cpf);
                window.location.href = '/';
            } else {
                console.log("Response is not in JSON format");
            }
        } else {
            console.log(`Erro no servidor: ${resposta.status}`);
        }
    } catch (error) {
        console.log("Erro ao enviar dados para o backend", error);
    }
};


  return (
    <div className="max-w-md mx-auto mt-14 p-6 bg-white rounded-md shadow-md ">
      <h2 className="text-2xl font-bold mb-6">Cadastro de Nova Água</h2>
      <form onSubmit={handleCadastro}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idQualidade"
          >
            Qualidade:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idQualidade"
            name="qualidade"
            type="text"
            value={novaAgua.qualidade}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idQuantidadeAgua"
          >
            Quantidade de Água:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idQuantidadeAgua"
            name="quantidadeAgua"
            type="text"
            value={novaAgua.quantidadeAgua}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idQuantidadeProd"
          >
            Quantidade de Produtos:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idQuantidadeProd"
            name="quantidadeProd"
            type="text"
            value={novaAgua.quantidadeProd}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idQuantidadePessoa"
          >
            Quantidade de Pessoas:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idQuantidadePessoa"
            name="quantidadePessoa"
            type="text"
            value={novaAgua.quantidadePessoa}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Cadastrar Água
          </button>
          <button className="text-sm text-blue-300">
            <a href="/">Cancelar</a>
          </button>
        </div>
      </form>
    </div>
  );
}
