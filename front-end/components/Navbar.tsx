import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-container bg-slate-50 p-4">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden lg:flex items-center gap-12">
        {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className="regular-16 text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
         {link.label}
        </Link>
        ))}
      </ul>

      <div className="hidden lg:flex items-center">
        <Button type="button" title="Login" variant="btn_dark_green" icon="/user.svg" />
      </div>

      <Image src="menu.svg" alt="menu" width={32}  height={32} className="inline-block cursor-pointer lg:hidden"/>
    </nav>
  );
}

export default Navbar;
