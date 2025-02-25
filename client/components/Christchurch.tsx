import { useState } from 'react'
import citiesData from '../data/city'
import WeatherWidget from './WeathWidget'

function Christchurch() {
  const [selectedCity, setSelectedCity] = useState('')
  const [City, setCity] = useState('Christchurch, New Zealand')

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
    <div className="chchContainer">
      <h1>Christchurch Today</h1>
      <div>{WeatherWidget(City)}</div>
      <img
        className="chchimage"
        src="/images/christchurch-1.jpg"
        alt="christchurch"
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor="cities">Select a City: </label>
        <select
          name="city"
          id="city"
          onChange={handleChange}
          value={selectedCity}
          className="customSelect"
        >
          <option value="">--Please choose a city--</option>
          {citiesData.map((city) => (
            <option key={city.name} value={`${city.name}, ${city.country}`}>
              {`${city.name}, ${city.country}`}
            </option>
          ))}
        </select>
        <button>Check weather</button>
      </form>
    </div>
  )
}

export default Christchurch
