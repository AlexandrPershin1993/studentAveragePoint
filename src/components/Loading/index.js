import React from 'react';
import styles from './index.module.css';

const Loading = ({message, ...props}) => {
  return (
    <div className={styles.loadingDiv}>
      <span>
        {'Loading...'}
      </span>
      <br />
      <span>
        {message}
      </span>
    </div>
  )
}

export default Loading;