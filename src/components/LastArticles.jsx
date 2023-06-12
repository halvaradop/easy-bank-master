
const LastArticles = ({ className = "", create, title, text, img }) => {
    return (
        <article className={`w-full my-3 overflow-hidden rounded-md ${className}`}>
            <img src={img} alt="image of an article" />
            <div className="py-2 px-3 text-blue-100 font-light">
                <span className="text-xs">{create}</span>
                <h3 className="text-blue text-md font-bold">{title}</h3>
                <p className="text-sm">{text}</p>
            </div>
        </article>
    )
}

export { LastArticles }