import { Link } from 'react-router-dom'
function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/auckland">Auckland</Link>
          </li>
          <li>
            <Link to="/wellington">Wellington</Link>
          </li>
          <li>
            <Link to="/christchurch">Christchurch</Link>
          </li>
          <li>
            <Link to="/invercargill">Invercargill</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Nav
