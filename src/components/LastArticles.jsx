
const LastArticles = ({ className = "", create, title, text, img }) => {
    return (
        <article className={`w-full my-3 sm:my-5 md:my-0 ${className}`}>
            <img className="w-full max-h-[30rem] rounded-t-md md:h-full base:h-auto base:aspect-video" src={img} alt="image of an article" />
            <div className="py-2 px-3 text-blue-100 font-light base:py-2 base:px-1">
                <span className="text-xs">{create}</span>
                <h3 className="mt-0.5 mb-1 text-blue text-md font-bold sm:mt-1 sm:mb-1.5 base:text-sm">{title}</h3>
                <p className="text-sm line-clamp-3">{text}</p>
            </div>
        </article>
    )
}

export { LastArticles }