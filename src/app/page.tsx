import { Carrosel } from "@/components/carrosel/carrosel";

export default function Home() {
  return (
    <div className="container max-w-[90rem] flex pt-24 flex-col text-white">
      <Carrosel category="🔥 Populares" />
      <Carrosel category="🍙 Comida Japonesa" />
      <Carrosel category="🍣 Sushi" />
    </div>
  );
}
