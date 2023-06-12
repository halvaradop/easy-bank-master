import { companies } from "../utils/data"

const footerList = ['About Us', 'Contact', 'Blog', 'Careers', 'Support', 'Privacy Policy']

const Footer = () => {
    return (
        <footer className="w-full bg-blue">
            <section className="w-90 mx-auto py-4 flex items-center flex-col gap-y-3 base:w-85 base:flex-row base:justify-between base:gap-y-5">
                <figure className="flex items-center justify-center gap-x-2">
                    {companies.map((item, key) => <img className="w-3 h-3" key={key} src={item} />)}
                </figure>
                <ul className="grid gap-y-3 text-gray text-md font-extralight base:grid-cols-2 base:grid-rows-3 base:text-sm">
                    {footerList.map((item, key) => <li className="text-center base:text-start" key={key}>{item}</li>)}
                </ul>
            </section>
        </footer>
    )
}

export { Footer }