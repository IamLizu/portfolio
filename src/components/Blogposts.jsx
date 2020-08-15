import React from 'react'
import styles from './blogposts.module.css'
import Posts from '../portfolio-data/blogpost.json'

export default function BlogPosts() {
    const post = Posts.map(item => {
        return(
            <div key={item.url} className={styles.item}>
                <a href={item.url}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </a>
            </div>
        )
    })
    return(
        <>
            <h1>Blog Posts</h1>
            <div className={styles.itemContainer}>
                {post}
            </div>
        </>
    )
}