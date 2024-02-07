import Image from "next/image";
import { MapPin } from "../icons/map-pin";

export function CardA() {
  return (
    <div className="flex flex-col justify-start items-center absolute inset-0 bg-white/5">
      <div className="relative min-h-36 rounded-md w-full">
        <Image
          src="./img.svg"
          alt="Descrição da imagem"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="text-start w-full pl-4 py-3">
        <div className="flex flex-row">
          <MapPin />
          <h4 className="text-md ml-1"> Tatuapé </h4>
        </div>
        <p className="text-sm">Itens do pedido (descrição)</p>
        <h2 className="mt-2 text-xl"> R$ 200,00 </h2>
      </div>
    </div>
  );
}
