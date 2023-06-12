import { useEffect, useRef, useState } from "react"
import logo from "../assets/logo.svg"
import menu from "../assets/hamburger.svg"
import close from "../assets/close.svg"
import { Button } from "./Button"


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
            <nav className="base:w-85 base:h-10 base:mx-auto base:flex base:items-center base:justify-between base:gap-x-5">
                <figure className="w-90 h-7 mx-auto flex items-center justify-between base:w-auto base:h-10 base:m-0">
                    <img className="base:h-2" src={logo} alt="logo icon" />
                    <img className="cursor-pointer base:hidden" src={isActiveMenu? close : menu} alt="menu icon" onClick={handleToggleMenu} />
                </figure>
                <aside className="w-full h-full min-h-screen hidden absolute top-7 bottom-0 z-10 bg-gradient-to-b from-blue/95 from-20% to-gray base:w-auto base:min-h-0 base:block base:relative base:inset-y-0 base:bg-none" ref={menuRef}>
                    <menu className="w-90 mx-auto mt-3 py-2.5 block rounded-md bg-whit bg-white base:w-auto base:h-full base:m-0 base:p-0 base:bg-transparent">
                        <ul className="flex items-center flex-col gap-y-2 text-blue text-sm font-bold base:h-full base:flex-row base:justify-between base:gap-x-3 base:text-blue-100 base:font-normal">
                            {menuList.map((item, key) => (
                                <li key={key} className="group/header relative base:hover:text-blue hover:cursor-pointer">
                                    {item}
                                    <span className="w-full h-[0.3rem] absolute -bottom-4 left-0 origin-left scale-x-0 transition-all duration-500 bg-gradient-to-r from-green to-cyan base:group-hover/header:scale-x-100"></span>
                                </li>
                            ))}
                        </ul>
                    </menu>
                </aside>
                <Button className="hidden base:block" text="Request Invite" color="green-cyan" size="sm2" />
            </nav>
        </header>
    )
}

export { Header }