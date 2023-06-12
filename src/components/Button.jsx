
const Button = ({ className, text, color, size, onClick }) => {
    const colorVariants = {
        'green-cyan': 'text-white bg-gradient-to-r from-green to-cyan bg-no-repeat hover:opacity-70'
    }
    const sizeVariants = {
        sm: 'h-4 px-1 text-sm rounded-full',
        sm2: 'h-4 px-2 text-sm font-bold rounded-full'
    }
    const classList = `${colorVariants[color]} ${sizeVariants[size]} ${className}`

    return (
        <button className={classList}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    className: '',
    text: 'Click me!',
    onClick: () => {}
}

export { Button }