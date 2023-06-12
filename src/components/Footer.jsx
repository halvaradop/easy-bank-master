import { companies } from "../utils/data"

const footerList = ['About Us', 'Contact', 'Blog', 'Careers', 'Support', 'Privacy Policy']

const Footer = () => {
    return (
        <footer className="w-full bg-blue">
            <section className="w-90 mx-auto py-4 flex items-center flex-col gap-y-3">
                <figure className="flex items-center justify-center gap-x-2">
                    {companies.map((item, key) => <img className="w-3 h-3" key={key} src={item} />)}
                </figure>
                <ul className="flex items-center flex-col gap-y-3 text-gray text-md font-extralight">
                    {footerList.map((item, key) => <li key={key}>{item}</li>)}
                </ul>
            </section>
        </footer>
    )
}

export { Footer }