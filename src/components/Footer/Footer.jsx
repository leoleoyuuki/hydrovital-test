"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return (
        <footer className="bg-slate-800 text-white py-3">
          <div className="flex flex-col items-center justify-around">
            <div className="logo cursor-pointer mb-4">
              <Link href="/">
                <Image src="/img/logo.png" width={220} height={123} alt="logo" />
              </Link>
            </div>
    
            <nav className="mb-4">
              <ul className="flex justify-between gap-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
                <li><Link href="/contato">Contato</Link></li>
              </ul>
            </nav>
    
            <hr className="w-96 border-gray-600 mb-4" />
    
            <p className="text-sm">&copy; 2023 HydroVital . Todos os direitos reservados.</p>
          </div>
        </footer>
      );
};

