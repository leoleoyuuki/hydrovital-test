// import { NextResponse } from "next/server";

// const handleLogin = async (nome, telefone, cpf, email, dataDeNascimento) => {
//   try {
//     const response = await fetch("http://localhost:8080/hydrovital/usuario", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Erro no fetch: ${response.status} ${response.statusText}`);
//     }

//     const contentType = response.headers.get("content-type");
//     if (!contentType || !contentType.includes("application/json")) {
//       throw new Error("Resposta do servidor não está em formato JSON");
//     }

//     const dados = await response.json();

//     const user = dados.find(
//       (ObjUsuario) =>
//         ObjUsuario.nome === nome &&
//         ObjUsuario.telefone === telefone &&
//         ObjUsuario.cpf === cpf &&
//         ObjUsuario.email === email &&
//         ObjUsuario.dataDeNascimento === dataDeNascimento
//     );

//     return user;
//   } catch (error) {
//     console.error("Erro no handleLogin:", error.message);
//     throw error;
//   }
// };

// export async function POST(request, response) {
//   try {
//     const { nome, telefone, cpf, email, dataDeNascimento } = await request.json();

//     console.log("Dados recebidos:", { nome, telefone, cpf, email, dataDeNascimento });

//     const user = await handleLogin(nome, telefone, cpf, email, dataDeNascimento);

//     if (user) {
//       console.log("Usuário encontrado:", user);
//       return NextResponse.json(user);
//     } else {
//       console.log("Usuário não encontrado");
//       return NextResponse.json({ error: "Usuário não encontrado" });
//     }
//   } catch (error) {
//     console.error("Erro no POST:", error.message);
//     return NextResponse.json({ error: "Erro na solicitação do cliente" }, { status: 400 });
//   }
// }
