import Logo from '../assets/logo.svg';
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>

        <button className="btn btn-outline-light">Sign Up</button>
      </div>
    </header>
  )
}

export default Header;
