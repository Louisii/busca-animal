import axios from "axios"
import React, { useState } from "react"
import Button from "./components/Button"
import TextInput from "./components/TextInput"
import logo from './assets/logo.png'

const App = () => {
  const [searchText, setSearchText] = useState('')
  //console.log(searchText)
  const [animalData, setAnimalData] = useState({})

  const getAnimals = async (event) => {
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/animals?name=' + searchText, {
        headers: { 'X-Api-Key': 'pFst2sXu//JHrh3u9eIoXA==5dWAjOvJUlwwe33Z' },
      })
      console.log(response)
      setAnimalData(response.data)

    } catch (error) {
      console.error(error)
      console.log('catch do erro')
    }
  }

  

  return (
    <section className="min-h-screen bg-primary">


      <nav className='md:flex items-center justify-center pt-5'>
        <img src={logo} alt="busca animal logo" className="w-40 m-1 md:w-60 lg:w-70" />

        <ul>
          <li className="md:inline-block md:ml-10 ml-10 pt-2">
            <TextInput onChange={e => setSearchText(e.target.value)} />
          </li>
          <li className="md:inline-block md:ml-10 ml-10 pt-2">
            <Button text={'Buscar'} onClick={e => getAnimals(e)} />
          </li>

        </ul>
      </nav>


      <div className="md:flex items-center justify-center pt-5">
        <ul>

          <li className="md:inline-block md:ml-10 ml-10 pt-2">
            <h1>Animal Info</h1>
          </li>

          <li className="md:inline-block md:ml-10 ml-10 pt-2">
            {(JSON.stringify(animalData) !== '{}') && (animalData.length !== 0) ?
              <>
                <p>name: {animalData[0].name}</p>
                <p>locations: {animalData[0].locations}</p>
              </>
              :
              <><p>no animal data</p></>
            }
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>


        <div>

        </div>
      </div>


    </section>
  )
}

export default App;
