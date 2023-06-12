import { useRef, useState } from "react"
import logo from "../assets/logo.svg"
import menu from "../assets/hamburger.svg"
import close from "../assets/close.svg"


const menuList = ['Home', 'About', 'Contact', 'Blog', 'Careers']

const Header = () => {
    const menuRef = useRef(null)
    const [isActiveMenu, setIsActiveMenu] = useState(false)
    
    const handleToggleMenu = () => {
        menuRef.current.classList.toggle('hidden')
        setIsActiveMenu(!isActiveMenu)
    } 

    return (
        <header className="border-b border-slate-400 bg-white">
            <nav>
                <figure className="w-90 h-7 mx-auto flex items-center justify-between">
                    <img src={logo} alt="logo icon" />
                    <img className="cursor-pointer" src={isActiveMenu? close : menu} alt="menu icon" onClick={handleToggleMenu} />
                </figure>
                <aside className="w-full h-full min-h-screen hidden absolute top-7 bottom-0 bg-gradient-to-b from-blue/95 from-20% to-gray" ref={menuRef}>
                    <menu className="w-90 mx-auto mt-3 py-2.5 block rounded-md bg-whit bg-white">
                        <ul className="flex items-center flex-col gap-y-2 text-blue text-sm font-bold">
                            {menuList.map((item, key) => <li key={key}>{item}</li>)}
                        </ul>
                    </menu>
                </aside>
            </nav>
        </header>
    )
}

export { Header }