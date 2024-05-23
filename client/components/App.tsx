import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import WeatherWidget from './WeatherWidget'
import Christchurch from './Christchurch'

function App() {
  return (
    <>
      <div className="heading">
        <img src="/" alt="app icon" />
        <h1>Weather Watch</h1>
        <p>discribe the app function</p>
      </div>
      <div className="container">
        <Nav />

        <Outlet />
      </div>
    </>
  )
}

export default App
