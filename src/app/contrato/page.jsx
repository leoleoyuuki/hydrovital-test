"use client";
import { redirect } from 'next/navigation';
import { useEffect } from 'react'

export default function page() {

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
    <div>page</div>
  )
}
