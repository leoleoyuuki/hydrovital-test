"use client";
import { redirect } from 'next/navigation';
import { useEffect } from 'react'

export default function Contrato() {

  useEffect(() => {

    if (sessionStorage.getItem("token") !== null) {
      console.log("logado");
    }else{
      redirect('/signup')
    }
  }, []);

  return (
    <div>page</div>
  )
}
