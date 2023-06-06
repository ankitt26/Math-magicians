import React, { useState } from 'react';
import Inputrow from './inputrow';
import calculate from '../logic/calculate';
import styles from '../Styles/Calculator.module.css';

const Calculator = () => {
  const [obj, setObj] = useState({ total: 0 });
  const onclick = (e) => {
    setObj({ ...obj, ...calculate(obj, e) });
  };

  return (
    <>
      <h2>Welcome to Maths Magicians</h2>
      <div className={styles.calculator}>
        <div id="result-box">
          {(obj.total && obj.next) || obj.next ? obj.next : obj.total || 0}
        </div>

        <Inputrow item1="AC" item2="+/-" item3="%" item4="÷" onclick={onclick} />
        <Inputrow item1="7" item2="8" item3="9" item4="×" onclick={onclick} />
        <Inputrow item1="4" item2="5" item3="6" item4="-" onclick={onclick} />
        <Inputrow item1="1" item2="2" item3="3" item4="+" onclick={onclick} />
        <div className="input-row input-row4">
          <button
            className="zero-button"
            type="button"
            onClick={(e) => onclick(e.target.textContent)}
          >
            0
          </button>
          <button
            className="input-item"
            type="button"
            onClick={(e) => onclick(e.target.textContent)}
          >
            .
          </button>
          <button
            className="input-item item4"
            type="button"
            onClick={(e) => onclick(e.target.textContent)}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
