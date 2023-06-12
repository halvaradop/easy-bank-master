
const Picture = ({ className, classImg, mobile, desktop, alt, breakpoint }) => {
    return (
        <picture className={className}>
            {desktop && <source srcSet={desktop} media={`(min-width: ${breakpoint})`} />}
            <img className={classImg} src={mobile} alt={alt} />
        </picture>
    )
}

Picture.defaultProps = {
    className: "",
    classImg: ""
}

export { Picture }