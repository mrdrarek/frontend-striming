import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css'

function Header(){
  return (
    <header className={styles.header}>
      <h1 className={styles.title} >Mi primera APP con react</h1>

      <nav className={styles.navigation} role='navigation'>
        <Link to="/" className={styles.link}> Home</Link>
        <a className={styles.link} href='http://www.google.es' target='_blank'>Google</a>
      </nav>
    </header>
  )
}

export default Header;
