import { useState } from "react"
import NavItem from "./NavItems"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-[7px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-200 font-bold text-xl hover:text-white transition-colors">Parham</a>
          <button onClick={() => setIsOpen(prev => !prev)} className="text-neutral-200 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />
          </button>
          <nav className="sm:flex hidden">
            <NavItem />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : "max-h-0"}`}>
        <nav className="p-5">
          <NavItem />
        </nav>
      </div>
    </header>
  )
}