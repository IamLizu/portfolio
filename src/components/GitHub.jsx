import React from 'react'
import styles from './github.module.css'
import githubData from '../portfolio-data/github.json'

export default function GitHub() {

    const repos = githubData.map(item => {
        return(
            <div key={item.url} className={styles.card}>
                <a href={item.url}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </a>
            </div>
        )
    })

    return(
        <div className={styles.container}>
            <h1>GitHub</h1>
            {repos}
        </div>
    )
}