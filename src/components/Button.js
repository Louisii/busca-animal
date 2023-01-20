
const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className="bg-secundary font-bold text-white py-2 px-4 rounded">{props.text}</button>
        </div>
    )
}

export default Button