import React from 'react';
import ErrorMessage from '../ErrorMessage';
import styles from './index.module.css';  

const Input = ({meta:{error, touched}, placeholder, input}) =>(
  <React.Fragment>
    {error && touched ? <ErrorMessage error={error} /> : null}
    <input 
      type="text" 
      placeholder={placeholder}
      className={styles.inputText}
      {...input}
    />
  </React.Fragment>
);

export default Input;