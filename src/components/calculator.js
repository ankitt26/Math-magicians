import React, { useState } from 'react';
import Inputrow from './inputrow';
import calculate from '../logic/calculate';
import styles from '../Styles/Calculator.module.css';
import Cartoon2 from '../Images/4905784.jpg';

const Calculator = () => {
  const [obj, setObj] = useState({ total: 0 });
  const onclick = (e) => {
    setObj({ ...obj, ...calculate(obj, e) });
  };

  return (
    <div className={styles.CPage}>
      <div>
        <h2 className={styles.h2}>Welcome to Maths Magicians</h2>
        <p className={styles.p}>
          Math Magician is a web application or software program designed to
          help users improve their math skills and enhance their mental
          calculation abilities. It provides a platform for practicing various
          mathematical operations such as addition, subtraction, multiplication,
          and division.
        </p>
        <div className={styles.image}>
          <img className={styles.cartoon2} src={Cartoon2} alt="cartoon" />
        </div>
      </div>

      <div className={styles.calculator}>
        <div id={styles.resultBox}>
          {(obj.total && obj.next) || obj.next ? obj.next : obj.total || 0}
        </div>

        <Inputrow
          item1="AC"
          item2="+/-"
          item3="%"
          item4="÷"
          onclick={onclick}
          styles={styles}
        />
        <Inputrow
          item1="7"
          item2="8"
          item3="9"
          item4="×"
          onclick={onclick}
          styles={styles}
        />
        <Inputrow
          item1="4"
          item2="5"
          item3="6"
          item4="-"
          onclick={onclick}
          styles={styles}
        />
        <Inputrow
          item1="1"
          item2="2"
          item3="3"
          item4="+"
          onclick={onclick}
          styles={styles}
        />
        <div className={`${styles.inputRow} ${styles.inputRow4}`}>
          <button
            className={styles.zeroButton}
            type="button"
            onClick={(e) => onclick(e.target.textContent)}
          >
            0
          </button>
          <button
            className={styles.inputItem}
            type="button"
            onClick={(e) => onclick(e.target.textContent)}
          >
            .
          </button>
          <button
            className={`${styles.inputItem} ${styles.item4}`}
            type="button"
            onClick={(e) => onclick(e.target.textContent)}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
