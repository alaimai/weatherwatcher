import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/index">Home</Link>
        </li>
        <li>
          <Link to="/Auckland">Auckland</Link>
        </li>
        <li>
          <Link to="/Wellington">Wellington</Link>
        </li>
        <li>
          <Link to="/Christchurch">Christchurch</Link>
        </li>
        <li>
          <Link to="/Invercargill">Invercargill</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
