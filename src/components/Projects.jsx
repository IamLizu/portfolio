import React from 'react'
import styles from './project.module.css'
import ProjectList from '../portfolio-data/projects.json'

export default function Projects() {
    const works = ProjectList.map(item => {
        return(
            <div key={item.name} className={styles.card}>
                <a href={item.url}>
                    <h3>{item.name}</h3>
                    <p>Tech: {item.usedTechs} &bull; Audience: {item.audience}</p>
                    <p>{item.description}</p>
                </a>
            </div>
        )
    })
    return(
        <div className={styles.container}>
            <h1>Projects</h1>
            {works}
        </div>
    )
}