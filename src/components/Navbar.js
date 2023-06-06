import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div>
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
);

export default Navbar;
