const TextInput = (props) => {
    return (
        <div>
            <input onChange={props.onChange} type="text" className="ml-10 h-10 rounded-md border-none p-2 w-80" />
        </div>
    )
}

export default TextInput