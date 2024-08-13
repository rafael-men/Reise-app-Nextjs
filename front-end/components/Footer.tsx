import Link from "next/link"

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col justify-center items-start gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer