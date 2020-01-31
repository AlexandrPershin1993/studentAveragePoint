import React from 'react';
import styles from './index.module.css';

const Header = ({step, lengthSteps}) => (
  <header className={styles.header}>
    <h1 className={styles.header1lvl}> 
      Получить зачет автоматом
    </h1>
    <h2 className={styles.header2lvl}>
      Шаг {step} из {lengthSteps}
    </h2>
  </header>
);

export default Header;