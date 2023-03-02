import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <ul className="items-con">
      <Link to="/" className="items">
        <li>Home</li>
      </Link>
      <Link to="/about" className="items">
        <li>About</li>
      </Link>
    </ul>
  </nav>
)

export default Header
