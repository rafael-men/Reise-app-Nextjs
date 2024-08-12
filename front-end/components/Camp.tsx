import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const CampSite = ({ backgroundImage, title, subtitle }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-2xl 2xl:rounded-5xl`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 20%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.8) 100%), url(${backgroundImage})`,
      }}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-blue-70 p-4">
            <Image src={"/map-loc.svg"} alt="icon" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image src={url} key={url} alt="person" width={52} height={52} />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">+50 People Liked This Option</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col lg:mb-10 lg:py-5">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage="https://i0.wp.com/thehiddennorth.com/wp-content/uploads/2023/10/Rovaniemi.jpg?fit=1400%2C924&ssl=1"
          title="Meet Rovaniemi"
          subtitle="Rovaniemi - Finland"
        />
        <CampSite 
          backgroundImage="https://www.theflorentine.net/wp-content/uploads/2021/11/Florence-Italy-1024x683.jpg"
          title="Meet Firenze"
          subtitle="Florence - Italy"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-6 mb-5 mt-10 px-6">
        <div className="bg-slate-300 p-8 lg:w-1/2 xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-black">
            Need Some <strong> Special Advices </strong>Before Travel?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-slate-500">
            Before think about travel to some place, learn about the laws of the country, and don't forget the essential documents to help your entrance in another territory, like passports, exchanged money and utilitaries...
          </p>
        </div>
        <div className="bg-slate-300 p-8 lg:w-1/2 xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl mt-6 lg:mt-0">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-black">
            We Ensure Your Safety and Comfort in your <strong>Trip</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-slate-500">
            Our motivation is making you feel comfortable and safe in your travel, by the way, our system is improved to offer the cheapest prices and the best accomodations in the city, we give you a treatment that you never have in your vacations or travelling for work...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
