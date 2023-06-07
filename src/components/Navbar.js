import { Link } from 'react-router-dom';
import styles from '../Styles/Navbar.module.css';

const Navbar = () => (
  <>
    <div className={styles.navbar}>
      <h1 className={styles.heading}>Math Magicians</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/" className={styles.link}>Home</Link>
        </li>
        <li className={styles.li}>
          <Link to="/calculator" className={styles.link}>Calculator</Link>
        </li>
        <li className={styles.li}>
          <Link to="/quotes" className={styles.link}>Quotes</Link>
        </li>
      </ul>
    </div>
  </>
);

export default Navbar;
