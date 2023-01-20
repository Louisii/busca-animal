const TextInput = (props) => {
    return (
        <div>
            <input ref={props.ref} type="text" className="ml-10 h-10 rounded-md border-none p-2 w-80" />
        </div>
    )
}

export default TextInput