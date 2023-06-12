import { Button } from "./Button"
import { Picture } from "./Picture"
import { chooses, articles } from "../utils/data"
import mobile from "../assets/intro-mobile.svg"
import desktop from "../assets/intro-desktop.svg"
import mockups from "../assets/mockups.png"
import { Option } from "./Option"
import { LastArticles } from "./LastArticles"


const Main = () => {
    return (
        <main className="overflow-hidden">
            <section className="base:w-85 base:h-main base:mx-auto base:grid base:grid-cols-[0.6fr_1fr] base:items-center base:gap-x-3">
                <figure className="max-h-[55rem] relative overflow-hidden base:w-[150%] base:h-full base:max-h-main base:order-1 base:overflow-visible">
                    <Picture className="h-full block" classImg="w-full max-h-[65rem] base:h-full base:max-h-none" mobile={mobile} desktop={desktop} alt="background image" breakpoint="900px" />
                    <img className="max-h-[60rem] mx-auto absolute -top-[30%] inset-x-0 base:max-h-[70rem] base:-top-[15%]" src={mockups} alt="mockups of devices" />
                </figure>
                <section className="w-90 mx-auto mb-10 text-center sm:mb-[15rem] base:w-full base:m-0 base:text-start">
                    <h1 className="text-blue text-xl/tight sm:text-2xl/tight">Next generation digital banking</h1>
                    <p className="mt-2 mb-3 text-blue-100 text-sm">
                        Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.
                    </p>
                    <Button text="Request Invite" color="green-cyan" size="sm2" />
                </section>
            </section>
            <section className="w-90 mx-auto text-center base:w-85 base:text-start">
                <article className="max-w-3xl mx-auto base:ml-0">
                    <h2 className="text-blue text-lg">Why choose Easybank?</h2>
                    <p className="mt-2 mb-5 text-blue-100 text-sm base:mb-3">
                        We leverage Open Banking to turn your bank account into your financial hub. Control 
                        your finances like never before.
                    </p>
                </article>
                <section className="base:grid base:grid-cols-4 base:items-center base:gap-x-3">
                    {chooses.map((item, key) => <Option key={key} className="max-w-3xl my-3 mx-auto" img={item.img} title={item.title} text={item.text} />)}
                </section>
            </section>
            <section className="w-90 mx-auto my-[20rem] base:my-[15rem]">
                <h2 className="text-blue text-lg text-center md:mb-4 base:text-start">Latest Articles</h2>
                <section className="md:grid md:grid-cols-2 md:gap-x-3 md:gap-y-8 base:grid-cols-4">
                    {articles.map((item, key) => <LastArticles key={key} img={item.img} create={item.create} title={item.title} text={item.text} />)}
                </section>
            </section>
        </main>
    )
}

export { Main }