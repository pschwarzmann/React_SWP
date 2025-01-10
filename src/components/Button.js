import React from 'react';
import styles from './Button.module.css'

export default function Button(props) {
    return(
        <div className={styles.main}> {props.name} is {props.age} years old</div>
    )
}