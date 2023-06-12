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
        <main>
            <figure className="relative overflow-hidden">
                <Picture classImg="w-full" mobile={mobile} desktop={desktop} alt="background image" breakpoint="900px" />
                <img className="absolute -top-[30%]" src={mockups} alt="mockups of devices" />
            </figure>
            <section className="w-90 mx-auto mb-10 text-center">
                <h1 className="text-blue text-xl/tight">Next generation digital banking</h1>
                <p className="mt-2 mb-3 text-blue-100 text-sm">
                    Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.
                </p>
                <Button text="Request Invite" color="green-cyan" size="sm2" />
            </section>
            <section className="w-90 mx-auto text-center">
                <article>
                    <h2 className="text-blue text-lg">Why choose Easybank?</h2>
                    <p className="mt-2 mb-5 text-blue-100 text-sm">
                        We leverage Open Banking to turn your bank account into your financial hub. Control 
                        your finances like never before.
                    </p>
                </article>
                <section>
                    {chooses.map((item, key) => <Option key={key} className="my-3" img={item.img} title={item.title} text={item.text} />)}
                </section>
            </section>
            <section className="w-90 mx-auto my-[20rem]">
                <h2 className="text-blue text-lg text-center">Latest Articles</h2>
                <section>
                    {articles.map((item, key) => <LastArticles key={key} img={item.img} create={item.create} title={item.title} text={item.text} />)}
                </section>
            </section>
        </main>
    )
}

export { Main }