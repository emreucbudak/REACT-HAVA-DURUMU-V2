import { useState } from 'react'
import AddMovie from './AddMovie'
import './App.css'
import Header from './Header'
import axios from 'axios'
import ListMovie from './ListMovie'

function App() {
  const [pharmacy,setPharmacy]  = useState([])
  
  const createListe = async(title) => {
    const b = 'https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city='+title
    const response = await axios.get(b, {
      headers: {
        Authorization: 'apikey 7uSI92xRFyFqbbHrhdThxl:4B1xKvMo0LRrFLELpot7v0',
      },
    })
    setPharmacy(response.data.result)
  }
  return (
    <>
    <Header/>
    <AddMovie addM= {createListe}/>
    <ListMovie pharmacy = {pharmacy} />
    </>
  )
}

export default App
