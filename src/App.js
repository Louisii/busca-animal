import Nav from './components/Nav'
import getAnimals from './api.js'
import { useState, useEffect } from 'react'

const App = () => {

  //const[animals, setAnimals] = useState([])
  
 /*  useEffect(() => {
    getAnimals('deer')
  }, []) */



  return (
    <section className="bg-primary h-screen">
      <Nav />
    </section>
  )
}

export default App;
