// Importações necessárias
"use client";
import { useState } from "react";
import Link from "next/link";

export default function NovaOng() {
  // Estado para armazenar os dados da nova ONG
  const [novaOng, setNovaOng] = useState({
    cnpj: "",
    nome: "",
    localidade: "",
    telefone: "",
    email: "",
    cpf_usuario: "",
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaOng({ ...novaOng, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleCadastro = async (e) => {
    e.preventDefault();
  
    try {
      const resposta = await fetch("http://localhost:8080/hydrovital/ong", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaOng),
      });
  
      if (resposta.ok) {
        // Redirecionar para a página de dashboard após o cadastro
        window.location.href = '/dashboard';
      } else {
        const contentType = resposta.headers.get("content-type");
        let erroMessage;
  
        if (contentType && contentType.includes("application/json")) {
          // Tentar fazer parsing da resposta JSON
          const erroJson = await resposta.json();
          erroMessage = erroJson.message || "Erro desconhecido no servidor";
        } else {
          erroMessage = "Resposta do servidor não está no formato JSON";
        }
  
        console.error(`Erro no servidor: ${erroMessage}`);
      }
    } catch (error) {
      console.error("Erro ao enviar dados para o backend:", error);
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Cadastro de Nova ONG</h2>
      <form onSubmit={handleCadastro}>
        {/* Adicione os campos do formulário conforme necessário */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idCnpj"
          >
            CNPJ:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idCnpj"
            name="cnpj"
            type="text"
            value={novaOng.cnpj}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idNome"
          >
            Nome:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idNome"
            name="nome"
            type="text"
            value={novaOng.nome}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idLocalidade"
          >
            Localidade:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idLocalidade"
            name="localidade"
            type="text"
            value={novaOng.localidade}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idTelefone"
          >
            Telefone:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idTelefone"
            name="telefone"
            type="tel"
            value={novaOng.telefone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idEmail"
          >
            Email:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idEmail"
            name="email"
            type="text"
            value={novaOng.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idCpfUsuario"
          >
            CPF do Usuário:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idCpfUsuario"
            name="cpf_usuario"
            type="text"
            value={novaOng.cpf_usuario}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Cadastrar ONG
          </button>
          <button className="text-sm text-blue-300">
            <Link href="/dashboard">Cancelar</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
