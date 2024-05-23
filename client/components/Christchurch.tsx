import { useState } from 'react'
import citiesData from '../data/city'
import WeatherWidget from './WeathWidget'

function Christchurch() {
  const [selectedCity, setSelectedCity] = useState('')
  const [City, setCity] = useState('Invercargill, New Zealand') //"" = nav clicked :id
  WeatherWidget(City)
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selectedCity === '') {
      alert(`Please select a city`)
    } else {
      setCity(selectedCity)
      setSelectedCity('')
    }
  }

  return (
    <>
      <div className="weatherWidget"></div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cities">Select a City:</label>
        <select
          name="city"
          id="city"
          onChange={handleChange}
          value={selectedCity}
        >
          <option value="">--Please choose a city--</option>
          {citiesData.map((city) => {
            console.log(`${city.name}, ${city.country}`)
            return (
              <option key={city.name} value={`${city.name}, ${city.country}`}>
                {`${city.name}, ${city.country}`}
              </option>
            )
          })}
        </select>
        <button>Check weather</button>
      </form>
    </>
  )
}
export default Christchurch
