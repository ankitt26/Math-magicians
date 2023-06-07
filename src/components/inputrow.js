import React from 'react';
import PropTypes from 'prop-types';
import Inputitem from './inputItem';
import styles from '../Styles/Calculator.module.css';

const Inputrow = ({
  item1, item2, item3, item4, onclick,
}) => (
  <div className={styles.inputRow}>
    <Inputitem item={item1} onclick={onclick} classN={styles.inputItem} />
    <Inputitem item={item2} onclick={onclick} classN={styles.inputItem} />
    <Inputitem item={item3} onclick={onclick} classN={styles.inputItem} />
    <Inputitem item={item4} classN={`${styles.inputItem} ${styles.item4}`} onclick={onclick} />
  </div>
);

Inputrow.propTypes = {
  item1: PropTypes.string.isRequired,
  item2: PropTypes.string.isRequired,
  item3: PropTypes.string.isRequired,
  item4: PropTypes.string.isRequired,
  onclick: PropTypes.func,
};

Inputrow.defaultProps = {
  onclick: () => { },
};

export default Inputrow;
