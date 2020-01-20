import React from 'react';
import styles from './index.module.css';

const ErrorMessage = ({error, ...props}) => {
  return (
    <div className={styles.error}>
      {error}
    </div>
  );
};

export default ErrorMessage;