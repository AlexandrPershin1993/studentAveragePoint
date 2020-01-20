import React from 'react';
import styles from './index.module.css';

const Button = ({onClick, style = {}, value, ...props}) => (
  <input 
    type='button' 
    value={value} 
    className={styles.button} 
    onClick={onClick} 
    style={{...style}}
  />
)

export default Button;