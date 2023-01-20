
import axios from "axios"

const getAnimals = async (animal) => {
  try{
    const response = await axios.get('https://api.api-ninjas.com/v1/animals?name=' + animal, {
      headers:{'X-Api-Key': 'pFst2sXu//JHrh3u9eIoXA==5dWAjOvJUlwwe33Z'},
    })
    console.log(response)
  }catch(err){
    console.error(err)
  }
}

export default getAnimals