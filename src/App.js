import axios from "axios"
import React, { useState } from "react"
import Button from "./components/Button"
import TextInput from "./components/TextInput"
import logo from './assets/logo.png'

const App = () => {
  const [searchText, setSearchText] = useState('')
  console.log(searchText)
  const [animalData, setAnimalData] = useState({})

  const getAnimals = async (event) => {
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/animals?name=' + searchText, {
        headers: { 'X-Api-Key': 'pFst2sXu//JHrh3u9eIoXA==5dWAjOvJUlwwe33Z' },
      })
      //console.log(response)
      setAnimalData(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  console.log(animalData[0].locations)

  return (
    <section className="bg-primary h-screen">
      <nav className='flex items-center justify-center pt-5'>
        <img src={logo} alt="busca animal logo" className="w-60 m-1" />

        <ul>
          <li className="md:inline-block md:ml-10 ml-5">
            <TextInput onChange={e => setSearchText(e.target.value)} />
          </li>
          <li className="md:inline-block md:ml-10 ml-5">
            <Button text={'Buscar'} onClick={e => getAnimals(e)} />
          </li>

        </ul>
      </nav>


      <div>
        <h1>Animal Info</h1>
        <div>
          {JSON.stringify(animalData) !== '{}' ? 
          <>
          <p>name: {animalData[0].name}</p>
          <p>locations: {animalData[0].locations}</p>  
          </>
          :
          <><p>no animal data</p></>
        }
        </div>
      </div>


    </section>
  )
}

export default App;
