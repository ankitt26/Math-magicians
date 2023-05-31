import React from 'react';
import Inputrow from './inputrow';

const Calculator = () => (
  <div className="calculator">
    <div className="result-box">
      <h2 className="result">0</h2>
    </div>
    <Inputrow item1="AC" item2="+/-" item3="%" item4="÷" />
    <Inputrow item1="7" item2="8" item3="9" item4="×" />
    <Inputrow item1="4" item2="5" item3="6" item4="-" />
    <Inputrow item1="1" item2="2" item3="3" item4="+" />
    <div className="input-row input-row4">
      <button className="zero-button" type="button">0</button>
      <button className="input-item" type="button">.</button>
      <button className="input-item item4" type="button">=</button>
    </div>
  </div>
);

export default Calculator;
