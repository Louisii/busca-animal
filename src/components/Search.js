import axios from "axios"
import React, {useState} from "react"
import Button from "./Button"
import TextInput from "./TextInput"


const Search = () => {
    const [searchText, setSearchText] = useState('')
    console.log(searchText)
    const [animalData, setAnimalData] = useState({})

    const getAnimals = async (event) => {
        try{
          const response = await axios.get('https://api.api-ninjas.com/v1/animals?name=' + searchText, {
            headers:{'X-Api-Key': 'pFst2sXu//JHrh3u9eIoXA==5dWAjOvJUlwwe33Z'},
          })
          console.log(response)
        }catch(err){
          console.error(err)
        }
    }

    return (
        <ul>
            <li className="md:inline-block md:ml-10 ml-5">
                <TextInput onChange={e => setSearchText(e.target.value)} />
            </li>
            <li className="md:inline-block md:ml-10 ml-5">
                <Button text={'Buscar'} onClick={e => getAnimals(e)} />
            </li>

        </ul>
    )

    
}

export default Search
