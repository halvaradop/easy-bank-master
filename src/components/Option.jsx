
const Option = ({ className, img, title, text }) => {
    return (
        <article className={className}>
            <img className="mx-auto base:ml-0" src={img} alt="icon of an option" />
            <h3 className="mt-1 mb-1.5 text-blue text-md font-bold">{title}</h3>
            <p className="text-blue-100 text-sm">{text}</p>
        </article>
    )
}

Option.defaultProps = {
    className: "",
}

export { Option }