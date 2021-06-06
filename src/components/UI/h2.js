import React from 'react'
import styles from './h2.module.css'

const H2 = ({title}) => {
  return (
    <div className={styles.h2}>{title}</div>
  )
}

export default H2;