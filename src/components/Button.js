
const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className="bg-secundary font-bold text-white py-2 px-4 rounded w-80 lg:w-40">{props.text}</button>
        </div>
    )
}

export default Button