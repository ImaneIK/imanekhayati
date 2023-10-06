import Image from "next/image";
import logo from '/public/logo1.png'

export default function Navbar(){
    return(
        <div className="mx-auto md:mx-0 w-full px-4 sm:px-6 flex h-12 items-center justify-between">
        
        {/* logo */}
        <div className="flex-1 flex md:items-center justify-center md:justify-start md:gap-12 w-full ">
          <a className="block text-gray-500 " href="/">
            <Image className="rotate-90" height={45} width={45} src={logo}></Image> 
            </a>
        </div>

        {/* navbar */}
        <div className="md:flex md:items-center md:gap-12 hidden md:block">
          <nav aria-label="Global" className="">
            <ul className="flex items-center gap-6 text-sm capitalize">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  home
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/about"
                >
                  about
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/portfolio"
                >
                  portfolio
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/#contact"
                >
                  get in touch
                </a>
              </li>

            </ul>
          </nav>          
        </div>

      </div>
    );
}