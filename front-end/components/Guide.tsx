import Image from 'next/image'


const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className="border-2 border-white padding-container max-container w-full pb-24 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'linear-gradient(to right, transparent, black), url("/port.png")' }}>
        <Image src="/Reise ..png" alt='sublogo' width={50} height={50}/>
        <p className='uppercase regular-18 mt-3 -mb-3'>Destinations in South America</p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Portillo - Chile</h2>
          <Image src="chile.svg" alt='count' width={40} height={40}/>
          <p className='regular-16 text-slate-200 xl:max-w-[520px]'>a ski resort in South America, located in the Andes mountains of Chile. In the Valparaíso Region, it is 61 km (38 mi) from Los Andes, the nearest city, and 160 km (100 mi) by vehicle from Santiago. Its hotel sits at an elevation of 2,880 m (9,450 ft) above sea level, and the highest lift reaches 3,310 m (10,860 ft). The lowest lift loads at 2,548 m (8,360 ft), yielding a vertical drop of 762 m (2,500 ft). Ski Portillo has 35 named runs and 14 lifts. It is owned and operated by the Purcell family who have a chain of hotels in Chile, most noticeably the Tierra Hotels including Tierra Atacama in San Pedro de Atacama.</p>
        </div>
      </div>
    </section>
  )
}

export default Guide
