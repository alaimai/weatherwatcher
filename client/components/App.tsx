import Header from './Header.tsx'
import Footer from './Footer.tsx'
import NavBar from './Nav.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Header />
      <p>Click on different cities for the local temperature and brief info</p>

      <div className="mainContent">
        <NavBar />
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default App
