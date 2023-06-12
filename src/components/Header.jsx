import { useEffect, useRef, useState } from "react"
import logo from "../assets/logo.svg"
import menu from "../assets/hamburger.svg"
import close from "../assets/close.svg"


const menuList = ['Home', 'About', 'Contact', 'Blog', 'Careers']

const Header = () => {
    const menuRef = useRef(null)
    const [isActiveMenu, setIsActiveMenu] = useState(false)
    useEffect(() => {
        const matchBreakpoint = () => {
            menuRef.current.classList.add('hidden')
            setIsActiveMenu(false)
        }
        window.matchMedia('(min-width: 899px)').addEventListener('change', matchBreakpoint)
        return () => window.removeEventListener('change', matchBreakpoint)
    }, [])

    const handleToggleMenu = () => {
        menuRef.current.classList.toggle('hidden')
        setIsActiveMenu(!isActiveMenu)
    } 

    return (
        <header className="border-b border-slate-400 bg-white base:border-b-0">
            <nav className="base:w-85 base:h-10 base:mx-auto base:flex base:items-center">
                <figure className="w-90 h-7 mx-auto flex items-center justify-between base:h-10">
                    <img src={logo} alt="logo icon" />
                    <img className="cursor-pointer base:hidden" src={isActiveMenu? close : menu} alt="menu icon" onClick={handleToggleMenu} />
                </figure>
                <aside className="w-full h-full min-h-screen hidden absolute top-7 bottom-0 bg-gradient-to-b from-blue/95 from-20% to-gray base:min-h-0 base:block base:relative base:inset-y-0 base:bg-none" ref={menuRef}>
                    <menu className="w-90 mx-auto mt-3 py-2.5 block rounded-md bg-whit bg-white base:w-auto base:h-full base:m-0 base:p-0 base:bg-transparent">
                        <ul className="flex items-center flex-col gap-y-2 text-blue text-sm font-bold base:h-full base:flex-row base:justify-between base:gap-x-3 base:text-blue-100 base:font-normal">
                            {menuList.map((item, key) => <li key={key}>{item}</li>)}
                        </ul>
                    </menu>
                </aside>
            </nav>
        </header>
    )
}

export { Header }