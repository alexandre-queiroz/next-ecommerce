import Image from "next/image";
import { MapPin } from "../icons/map-pin";

export function CardA() {
  return (
    <div className="flex flex-col justify-start items-center absolute inset-0 bg-white/5 border-gray-600 border-[0.1px] rounded-md">
      <div className="relative min-h-36 w-full">
        <Image
          src="./img.svg"
          alt="Descrição da imagem"
          className="rounded-md object-cover"
          fill
        />
      </div>
      <div className="text-start w-full pl-4 py-3">
        <div className="flex flex-row items-baseline">
          <MapPin />
          <h4 className="text-sm ml-1"> Tatuapé, SP </h4>
        </div>
        <p className="text-sm">Combo de Sushi (30 peças)</p>
        <h4 className="mt-2 mb-0 text-sm text-muted-foreground line-through">
          R$ 200,00
        </h4>
        <h2 className="text-xl"> R$ 200,00 </h2>
      </div>
    </div>
  );
}
