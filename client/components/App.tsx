import Wellington from './Wellington.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'

function App() {
  return (
    <div className='headerBlock'>
      <Header />
   
      <p>Click on different cities for the local temperature and brief info</p>
      <nav>
        <ul>
          <li><Link to="/Auckland">Auckland</Link></li>
          <li><Link to="/Wellington">Wellington</Link></li>
          <li><Link to="/Christchurch">Christchurch</Link></li>
          <li><Link to="/Invercargill">Invercargill</Link></li>
        </ul>
      </nav>

      <div className='map'>
        <img src="https://www.worldatlas.com/r/w960-q80/upload/a8/1b/ff/nz-01.png"></img>
      </div>
      <Footer />
    </div>
  )
}

export default App
