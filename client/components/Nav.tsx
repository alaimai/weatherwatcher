import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/Auckland">Auckland</Link></li>
        <li><Link to="/Wellington">Wellington</Link></li>
        <li><Link to="/Christcburch">Christchurch</Link></li>
        <li><Link to="/Invercargill">Invercargill</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar