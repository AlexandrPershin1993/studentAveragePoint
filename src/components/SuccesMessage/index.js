import React from 'react';
import styles from './index.module.css';

const SuccesMessage = ({succes, ...props}) => {
  return (
    <div className={styles.succes}>
      {succes}
    </div>
  );
};

export default SuccesMessage;