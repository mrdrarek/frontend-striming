import React from 'react';
import styles from './Loading.css'

function Loading() {
  return(
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
    </div>
  );

}

export default Loading;
