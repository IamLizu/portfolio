import React from 'react'
import styles from './project.module.css'
import ProjectList from '../portfolio-data/projects.json'

export default function Projects() {
    const works = ProjectList.map(item => {
        return(
            <div key={item.name} className={styles.card}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <h3>{item.name}</h3>
                    <p>Tech: {item.usedTechs} &bull; Audience: {item.audience}</p>
                    <p>{item.description}</p>
                </a>
            </div>
        )
    })
    return(
        <div className={styles.container}>
            <h3 align="center" id={styles.header}>Notable Projects</h3>
            {works}
        </div>
    )
}