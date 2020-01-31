import React from 'react'
import { Field } from 'react-final-form';
import styles from './index.module.css';

const ElementForm = ({textLegend, nameInput, parse, render}) => (
  <div className={styles.field}>
    <legend className={styles.legend}>
      {textLegend}
    </legend>
    <Field 
      name={nameInput}
      parse={parse}
      render={render}
    />
  </div>
);

export default ElementForm;