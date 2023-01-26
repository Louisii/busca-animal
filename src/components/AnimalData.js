
const AnimalData = (props) => {
    return (
        <p>
            <b className="font-medium">{props.title}: </b>
            {props.data}
        </p>
    )

}

export default AnimalData