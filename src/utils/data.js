import online from "../assets/online.svg"
import budgeting from "../assets/budgeting.svg"
import onboarding from "../assets/onboarding.svg"
import api from "../assets/api.svg"

import currency from "../assets/currency.jpg"
import restaurant from "../assets/restaurant.jpg"
import plane from "../assets/plane.jpg"
import confetti from "../assets/confetti.jpg"


const chooses = [
    {
        img: online,
        title: `Online Banking`,
        text: `Our modern web and mobile applications allow you to keep track of your finances 
        wherever you are in the world.`
    },
    {
        img: budgeting,
        title: `Simple Budgeting`,
        text: `See exactly where your money goes each month. Receive notifications when you’re 
        close to hitting your limits.`
    },
    {
        img: onboarding,
        title: `Fast Onboarding`,
        text: `We don’t do branches. Open your account in minutes online and start taking control 
        of your finances right away.`
    },
    {
        img: api,
        title: `Open API`,
        text: `Manage your savings, investments, pension, and much more from one account. Tracking 
        your money has never been easier.`
    }
]

const articles = [
    {
        img: currency,
        create: `By Claire Robinson`,
        title: `Receive money in any currency with no fees`,
        text: `The world is getting smaller and we’re becoming more mobile. So why should you be 
        forced to only receive money in a single ...`
    },
    {
        img: restaurant,
        create: `By Wilson Hutton`,
        title: `Treat yourself without worrying about money`,
        text: `Our simple budgeting feature allows you to separate out your spending and set 
        realistic limits each month. That means you ...`
    },
    {
        img: plane,
        create: `By Wilson Hutton`,
        title: `Take your Easybank card wherever you go`,
        text: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
        while you’re abroad. We’ll even show you ...`
    },
    {
        img: confetti,
        create: `By Claire Robinson`,
        title: `Our invite-only Beta accounts are now live!`,
        text: `After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
        It’s easy to request an invite through the site ...`
    }
]

export { chooses, articles }