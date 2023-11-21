"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-around drop-shadow shadow-md">

        <div className="logo cursor-pointer">
            <Link href="/">
                <Image src="/img/logo.png" width={220} height={123} alt="logo" />
            </Link>
        </div>

        <nav>
            <ul className="flex justify-between w-72">
                <li><Link href="">Home</Link></li>
                <li><Link href="">Sobre</Link></li>
                <li><Link href="">Contato</Link></li>
            </ul>
        </nav>
    </div>
  )
}
