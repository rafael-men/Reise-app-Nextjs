import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className='relative max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>
      {/* Imagem de fundo e gradiente */}
      <div className="absolute inset-0 bg-[url('https://a0.muscache.com/im/pictures/miso/Hosting-1150556975328182088/original/437ff731-7187-4140-97a3-b4212a948682.jpeg?im_w=720')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      
      {/* Conteúdo */}
      <div className="relative z-10">
        <h1 className='bold-88 lg:bold-88 text-white'>Wroclaw - Poland</h1>
        <p className='regular-16 mt-6 text-white xl:max-w-[520px]'>
          A city on the Oder River in western Poland. It is known for the Market Square, full of elegant townhouses and a modern fountain. A great alternative to get to know Eastern Europe.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            <Image src="/pol.svg" alt="flag" width={80} height={80} />
          </div>

          <Button type="button" title="See More" variant="btn_white_text" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
