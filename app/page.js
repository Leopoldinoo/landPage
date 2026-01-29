import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-200 flex flex-col items-center min-h-screen p-3">
      <h1 className="text-black font-bold text-2xl">São Thomé das Letras</h1>
      <p className="text-gray-500">
        Conhecida como a cidade mística de Minas com suas montanhas, cachoeiras
        e <br /> lendas sobre discos voadores e portais místicos.
      </p>

      {/* Linha 1 de cards */}
      <div className="fund-card min-h-100 w-250 flex justify-center items-center mt-5">
        <div className="card-1 w-auto h-auto bg-gray-100 flex flex-col  rounded-t-2xl mr-5">
          <Image
            className="rounded-t-2xl"
            src="/gruta.jpg"
            alt="Gruta"
            width={330}
            height={250}
          />
          <h1 className=" font-bold text-gray-900 mt-auto text-lg mb-3">
            Gruta
          </h1>
          <p className="text-gray-400">
            Formação rochosa mística com vista <br /> panorâmica
          </p>
        </div>
        <div className="card-2 w-auto bg-gray-100 flex flex-col  rounded-t-2xl mr-5">
          <Image
            className="rounded-t-2xl"
            src="/igreja.jpg"
            alt="Igreja"
            width={290}
            height={250}
          />
          <h1 className=" font-bold text-gray-900 mt-auto text-lg mb-5">
            Igreja
          </h1>
          <p className="text-gray-400">
            Formação rochosa mística com vista <br /> panorâmica
          </p>
        </div>
        <div className="card-3 w-auto bg-gray-100 flex flex-col  rounded-t-2xl mr-5">
          <Image
            className="rounded-t-2xl"
            src="/casadapiramide.jpg"
            alt="Cachoeira Véu de Noiva"
            width={300}
            height={250}
          />
          <h1 className=" font-bold text-gray-900 mt-auto text-lg mb-3">
            Cachoeira Véu de Noiva
          </h1>
          <p className="text-gray-400">
            Formação rochosa mística com vista <br /> panorâmica
          </p>
        </div>
      </div>

      {/* Linha 2 de cards */}
      <div className="fund-card min-h-100 w-250 flex justify-center items-center">
        <div className="card-1 h-80 w-auto bg-gray-100 flex flex-col  rounded-t-2xl mr-5">
          <Image
            className="rounded-t-2xl"
            src="/pedradabruxa.jpg"
            alt="Pedra da Bruxa"
            width={320}
            height={250}
          />
          <h1 className=" font-bold text-gray-900 mt-auto text-lg mb-3">
            Pedra da Bruxa
          </h1>
          <p className="text-gray-400">
            Formação rochosa mística com vista <br /> panorâmica
          </p>
        </div>
        <div className="card-2 h-80 w-auto bg-gray-100 flex flex-col  rounded-t-2xl mr-5">
          <Image className="rounded-t-2xl"src="/parque.jpg"alt="Parque"width={320}height={250}/>
          <h1 className=" font-bold text-gray-900 mt-auto text-lg mb-3">
            Parque
          </h1>
          <p className="text-gray-400">
            Formação rochosa mística com vista <br /> panorâmica
          </p>
        </div>
        <div className="card-3 h-80 w-auto bg-gray-100 flex flex-col  rounded-t-2xl mr-5">
          <Image className="rounded-t-2xl"src="/cachoeira.jpg"alt="Cachoeira"width={300}height={250}/>
          <h1 className=" font-bold text-gray-900 mt-auto text-lg mb-3">
            Cachoeira Véu de Noiva
          </h1>
          <p className="text-gray-400">
            Formação rochosa mística com vista <br /> panorâmica
          </p>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center my-10 text-black">
        Leopoldo Automóveis
      </h2>

      {/* Loja de Carros */}
      <div className="w-full py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
          {[
            { img: "/nissangtr35.jpg", nome: "Nissan GTR R35", descricao: "Superesportivo japonês com tração integral e motor V6 biturbo monstruoso.", preco: "R$ 1.550.000" },
            { img: "/m4.jpg", nome: "BMW M4", descricao: "Esportivo alemão com design agressivo e performance de pista.", preco: "R$ 1.480.000" },
            { img: "/lambosvj.jpg", nome: "Lamborghini SVJ", descricao: "V12 aspirado com aerodinâmica extrema e presença absurda.", preco: "R$ 6.800.000" },
            { img: "/mclaren.jpg", nome: "McLaren", descricao: "Hipercarro britânico focado em leveza, velocidade e tecnologia.", preco: "R$ 7.200.000" },
            { img: "/rx7.jpg", nome: "Mazda RX7", descricao: "Clássico japonês com motor rotativo e visual lendário.", preco: "R$ 950.000" },

            { img: "/supra.jpg", nome: "Toyota Supra", descricao: "Ícone dos esportivos japoneses com alto potencial de performance.", preco: "R$ 1.200.000" },
            { img: "/gtr34.jpg", nome: "Nissan GTR R34", descricao: "Lenda das pistas e da cultura JDM, raro e extremamente valorizado.", preco: "R$ 2.500.000" },
            { img: "/jetta.jpg", nome: "Volkswagen Jetta", descricao: "Sedan esportivo com conforto e ótimo desempenho urbano.", preco: "R$ 180.000" },
            { img: "/civictyper.jpg", nome: "Civic Type R", descricao: "Hatch esportivo com DNA de corrida e motor turbo agressivo.", preco: "R$ 420.000" },
            { img: "/320i.jpg", nome: "BMW 320i", descricao: "Sedan premium com luxo, tecnologia e excelente dirigibilidade.", preco: "R$ 350.000" },
          ]

            .map((carro, index) => (
              <div key={index} className="bg-gray-100 rounded-2xl overflow-hidden shadow-md flex flex-col">
                <Image src={carro.img} alt={carro.nome} width={300} height={200} className="object-cover w-full h-48" />

                <div className="p-4"> <h3 className="font-bold text-gray-900">{carro.nome}</h3> <p className="text-sm text-gray-600">{carro.descricao}</p><p className="text-gray-500 text-sm mt-1">{carro.preco}</p>
                </div>

              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
