import { CardA } from "@/components/cards/card1";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Carrosel({ category }: { category: string }) {
  return (
    <div className="mb-10">
      <h4 className="text-2xl mb-6 pb-2 ml-12 mr-8 max-w-[30rem] border-red-400 border-b-2">
        {category}
      </h4>
      <Carousel
        className="mx-8"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="gap-10 xl:gap-6 ml-4">
          <CarouselItem className="relative min-h-[17rem] backdrop-blur-lg bg-white/5 m-0 p-0 sm:basis-1/2 md:basis-2/4 lg:basis-[19.5%] rounded-md overflow-hidden shadow-lg">
            <CardA />
          </CarouselItem>
          <CarouselItem className="relative min-h-[17rem] backdrop-blur-lg bg-white/5 m-0 p-0 sm:basis-1/2 md:basis-2/4 lg:basis-[19.5%] rounded-md overflow-hidden shadow-lg">
            <CardA />
          </CarouselItem>
          <CarouselItem className="relative min-h-[17rem] backdrop-blur-lg bg-white/5 m-0 p-0 sm:basis-1/2 md:basis-2/4 lg:basis-[19.5%] rounded-md overflow-hidden shadow-lg">
            <CardA />
          </CarouselItem>
          <CarouselItem className="relative min-h-[17rem] backdrop-blur-lg bg-white/5 m-0 p-0 sm:basis-1/2 md:basis-2/4 lg:basis-[19.5%] rounded-md overflow-hidden shadow-lg">
            <CardA />
          </CarouselItem>
          <CarouselItem className="relative min-h-[17rem] backdrop-blur-lg bg-white/5 m-0 p-0 sm:basis-1/2 md:basis-2/4 lg:basis-[19.5%] rounded-md overflow-hidden shadow-lg">
            <CardA />
          </CarouselItem>
          <CarouselItem className="relative min-h-[17rem] backdrop-blur-lg bg-white/5 m-0 p-0 sm:basis-1/2 md:basis-2/4 lg:basis-[19.5%] rounded-md overflow-hidden shadow-lg">
            <CardA />
          </CarouselItem>
          <CarouselItem className="relative min-h-[17rem] backdrop-blur-lg bg-white/5 m-0 p-0 sm:basis-1/2 md:basis-2/4 lg:basis-[19.5%] rounded-md overflow-hidden shadow-lg">
            <CardA />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="text-black" />
        <CarouselNext className="text-black" />
      </Carousel>
    </div>
  );
}
