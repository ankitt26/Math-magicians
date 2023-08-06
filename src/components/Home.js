import styles from '../Styles/Home.module.css';
import cartoon1 from '../Images/Cartoon1.png';

const Home = () => (
  <main className={styles.main}>
    <div className={styles.home}>
      <h2 className={styles.h2}> Welcome to our Page!</h2>
      <p className={styles.p1}>
        Math Magician is a web application or software program designed to help
        users improve their math skills and enhance their mental calculation
        abilities. It provides a platform for practicing various mathematical
        operations such as addition, subtraction, multiplication, and division.
      </p>
      <p className={styles.p2}>
        Math Magician is a web application or software program designed to help
        users improve their math skills and enhance their mental calculation
        abilities. It provides a platform for practicing various mathematical
        operations such as addition, subtraction, multiplication, and division.
        {' '}
        <br />
        <br />
        The main objective of Math Magician is to make math learning and
        practice more engaging and interactive. It offers a user-friendly
        interface with a range of math problems presented in a visually
        appealing format. Users can input their answers directly into the
        application and receive instant feedback on their performance.
        {' '}
        <br />
        Math Magician typically offers different difficulty levels to cater to
        users of varying skill levels, from beginners to advanced learners. It
        may also include timed challenges or gamified elements to add an element
        of excitement and competition.
      </p>
    </div>
    <img className={styles.cartoon} src={cartoon1} alt="maths" />
  </main>
);

export default Home;
