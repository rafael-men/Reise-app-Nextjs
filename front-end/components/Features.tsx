import { FEATURES } from '@/constants'
import Image from 'next/image'


const Features = () => {

  return (
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg bg-cover py-24 border-1 mt-5 ' style={{ backgroundImage: 'linear-gradient(to left, transparent, black), url("/airport.jpg")' }}>
      <div className='maxContainer padding-container relative w-full justify-end'>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image src="/map-loc.svg" alt='ico' width={50} height={50} className=''/>
            <h2 className="bold-40 lg:bold-64">Our Services and Features</h2>
          </div>
          <ul>
            {FEATURES.map((feature) =>(
              <FeatureItem title={feature.title} key={feature.title} description={feature.description} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title:string,
  description:string
}
const FeatureItem = ({title,description}:FeatureItem) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start text-white'>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className='regular-16 mt-5'>
        {description}
      </p>
    </li>
  )
}


export default Features