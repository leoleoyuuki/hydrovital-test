import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50 h-auto">
      <div className="text-center bg-blue-300 p-1">
        <h1>
          Estamos aqui para ajudá-lo a encontrar a solução certa para você.{" "}
          <span className="underline font-semibold">
            <Link href="/sobre">Saiba mais</Link>
          </span>
          .
        </h1>
      </div>

      <div className="banner flex justify-around items-center shadow-md">
        <div className="max-w-xl flex flex-col gap-3">
          <div className=" border-4 p-3 max-w-md">
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
          <Link href="/sobre">
            <div className="w-1/5 text-center bg-white p-2 rounded-sm">
              <p className="text-blue-300 font-semibold ">Saiba Mais</p>
            </div>
          </Link>
        </div>

        <div className="invisible">
          <Image src="" width={400} height={400} alt="." />
        </div>
      </div>

      <div className="mt-12">
        <div className=" w-4/5 m-auto text-center">
          <h1 className="font-bold text-gray-800 text-3xl drop-shadow">Processos Realizados para o Tratamento da Água</h1>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="processos m-4 p-6 w-4/5 flex flex-wrap justify-center gap-6 bg-white shadow-md ">
          <div className="processo">
            <Image
              src="/img/processo1.png"
              width={300}
              height={250}
              alt="Coagulação e Floculação"
            />
            <h1 className="text-xl font-bold mt-4">Coagulação e Floculação</h1>
            <p className="text-gray-600 w-96 ">
              Transforme a eficiência do seu processo de tratamento de água com
              nossa tecnologia de automação na etapa crucial de coagulação e
              floculação. Sensores de qualidade da água em tempo real garantem a
              dosagem precisa de coagulantes, como Sulfato de Alumínio e Cloreto
              Férrico, otimizando a formação de flocos para uma água mais limpa.
            </p>
          </div>

          <div className="processo">
            <Image
              src="/img/processo2.jpg"
              width={300}
              height={250}
              alt="Decantação"
            />
            <h1 className="text-xl font-bold mt-4">Decantação</h1>
            <p className="text-gray-600 w-96 ">
              Maximize a separação de flocos da água usando nossa automação
              avançada na fase de decantação. Sensores de nível e qualidade da
              água controlam o processo, garantindo uma eficiente remoção de
              impurezas. Nosso sistema automático ajusta dinamicamente o tempo
              de retenção para otimizar os resultados.
            </p>
          </div>

          <div className="processo">
            <Image
              src="/img/processo3.png"
              width={300}
              height={250}
              alt="Filtração"
            />
            <h1 className="text-xl font-bold mt-4">Filtração</h1>
            <p className="text-gray-600 w-96">
              Inove com nossa tecnologia de filtração automática. Nossos
              sistemas ajustam dinamicamente a taxa de filtração com base na
              qualidade da água, assegurando uma remoção eficaz de impurezas.
              Melhore a eficiência do seu tratamento de água com nossa solução
              de filtragem automatizada.
            </p>
          </div>

          <div className="processo">
            <Image
              src="/img/processo4.jpg"
              width={300}
              height={250}
              alt="Desinfecção"
            />
            <h1 className="text-xl font-bold mt-4">Desinfecção</h1>
            <p className="text-gray-600 w-96">
              Proteja sua comunidade contra microrganismos patogênicos com nosso
              sistema de desinfecção automatizado. Monitore em tempo real a
              qualidade da água e ajuste a dosagem de desinfetantes, como cloro,
              garantindo a eliminação efetiva de ameaças à saúde.
            </p>
          </div>

          <div className="processo">
            <Image
              src="/img/processo5.jpg"
              width={300}
              height={250}
              alt="Fluoretação"
            />
            <h1 className="text-xl font-bold mt-4">Fluoretação</h1>
            <p className="text-gray-600 w-96">
              Comprometemo-nos com a saúde bucal da sua comunidade. Nossa
              tecnologia de fluoretação automatizada dosa com precisão compostos
              fluoretantes, contribuindo para a redução da cárie dentária. Adote
              nossa solução para proporcionar água mais saudável e sorridentes
              mais felizes.
            </p>
          </div>
        </div>
      </div>

      <div className="banner2 flex justify-around items-center ">
        {/*  */}

      </div>

      
    </div>
  );
}
