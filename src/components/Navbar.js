import { NavLink } from 'react-router-dom';
import styles from '../Styles/Navbar.module.css';

const Navbar = () => (
  <>
    <div className={styles.navbar}>
      <h1 className={styles.heading}>Math Magicians</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink to="/" className={styles.link}>Home</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/calculator" className={styles.link}>Calculator</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/quotes" className={styles.link}>Quotes</NavLink>
        </li>
      </ul>
    </div>
  </>
);

export default Navbar;
