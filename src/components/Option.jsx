
const Option = ({ className, classImg, classTitle, classText, img, title, text }) => {
    return (
        <article className={className}>
            <img className={`mx-auto ${classImg}`} src={img} alt="icon of an option" />
            <h3 className={`my-2 text-blue text-md font-bold ${classTitle}`}>{title}</h3>
            <p className={`text-blue-100 text-sm ${classText}`}>{text}</p>
        </article>
    )
}

Option.defaultProps = {
    className: '',
    classImg: '',
    classTitle: '',
    classText: '',
}

export { Option }