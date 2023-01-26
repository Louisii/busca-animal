import axios from "axios"
import React, { useState } from "react"
import Button from "./components/Button"
import TextInput from "./components/TextInput"
import AnimalData from "./components/AnimalData"
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

          <li className="md:inline-block pt-2">
            {(JSON.stringify(animalData) !== '{}') && (animalData.length !== 0) ?
              <>

                <div className="bg-white p-4 rounded m-3">

                  <h1 className="text-xl font-medium">{animalData[0].name}</h1>
                  {animalData[0].characteristics.slogan}
                  <br/>
                  <div className="display: block mt-4 mx-3">
                    <AnimalData title={"Locations"} data={animalData[0].locations} />
                    <AnimalData title={"Prey"} data={animalData[0].characteristics.main_prey} />
                    <AnimalData title={"Distinctive Feature"} data={animalData[0].characteristics.distinctive_feature} />
                    <AnimalData title={"Habitat"} data={animalData[0].characteristics.habitat} />
                    <AnimalData title={"Predators"} data={animalData[0].characteristics.predators} />
                    <AnimalData title={"Diet"} data={animalData[0].characteristics.diet} />
                    <AnimalData title={"Favorite Food"} data={animalData[0].characteristics.favorite_food} />
                    <AnimalData title={"Color"} data={animalData[0].characteristics.color} />
                    <AnimalData title={"Skin type"} data={animalData[0].characteristics.skin_type} />
                    <AnimalData title={"Lifespan"} data={animalData[0].characteristics.lifespan} />
                    <AnimalData title={"Weight"} data={animalData[0].characteristics.weight} />
                    <AnimalData title={"Height"} data={animalData[0].characteristics.height} />
                    <br/>
                    <b className="font-medium">Taxonomy</b>
                    <AnimalData title={"kingdom"} data={animalData[0].taxonomy.kingdom} />
                    <AnimalData title={"Phylum"} data={animalData[0].taxonomy.phylum} />
                    <AnimalData title={"Class"} data={animalData[0].taxonomy.class} />
                    <AnimalData title={"Order"} data={animalData[0].taxonomy.order} />
                    <AnimalData title={"Family"} data={animalData[0].taxonomy.family} />
                    <AnimalData title={"Genus"} data={animalData[0].taxonomy.genus} />
                    <AnimalData title={"Scientific Name"} data={animalData[0].taxonomy.scientific_name} />
                    

                  
                  </div>
                 

                </div>


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
