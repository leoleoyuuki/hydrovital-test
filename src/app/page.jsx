"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Home(){

  useEffect(() => {
    // Simulando a verificação de autenticação (substitua isso pela sua lógica real)
    const isAuthenticated = sessionStorage.getItem('token') !== null;

    // Se não estiver autenticado, redirecione para a página de login
    if (!isAuthenticated) {
      redirect('/login');
    }
    // Adicione mais lógica aqui, se necessário
  }, []);

  return (
    <div className="bg-slate-50 h-auto">
      <div className="text-center bg-blue-300 p-1">
        <h1>
          Estamos aqui para ajudá-lo a encontrar a solução certa para você.{" "}
          <span className="underline font-semibold">
            <Link href="/servico">Saiba mais</Link>
          </span>
          .
        </h1>
      </div>

      <div className="banner flex justify-around items-center shadow-md">
        <div className="max-w-xl flex flex-col gap-3">
          <div className="border-4 p-3 max-w-md">
            <h1 className="text-3xl text-white font-semibold drop-shadow">
              Situação Atual em diversas regiões do planeta
            </h1>
          </div>
          <p className="text-white text-lg drop-shadow">
            No nosso planeta encontramos diversos locais onde a água desta
            maneira pode acarretar em muitos tipos de doenças às pessoas. Por
            isso nós da HydroVital estamos com o Projeto Horizonte Azul, para
            combater essas doenças e cuidar da saúde da nossa população.
          </p>
          
          <div className="w-1/5 text-center bg-white rounded-sm">
            <Link href="/servico">
              <p className="text-blue-300 font-semibold p-2 ">Saiba Mais</p>
            </Link>
          </div>
          
        </div>

        <div className="invisible">
          <Image src="" width={400} height={400} alt="." />
        </div>
      </div>

      <div className="mt-12">
        <div className="w-4/5 m-auto text-center">
          <h1 className="font-bold text-gray-800 text-3xl drop-shadow">Processos Realizados para o Tratamento da Água</h1>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="processos m-4 p-6 w-4/5 flex flex-wrap justify-center gap-6 bg-white shadow-md">
          {/* Seus processos aqui */}
        </div>
      </div>

      <div className="banner2 flex justify-around items-center shadow-md ">
        {/*  */}
      </div>
    </div>
  );
};


