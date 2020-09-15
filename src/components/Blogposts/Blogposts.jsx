import React from 'react'
import styles from './blogposts.module.css'
import Posts from '../../portfolio-data/blogpost.json'
import { Card, CardActionArea, CardActions, CardMedia, CardContent, Button, Typography } from '@material-ui/core'

export default function BlogPosts() {

    // creating post card for each item in the blogpost.json
    const post = Posts.map(item => {
        return(
            <Card key={item.url} className={styles.item}>
              <CardActionArea>
                <CardMedia component="img" alt={item.title} image={item.image} title={item.title}/>

                <CardContent>
                  <Typography gutterBottom variant="h6" component="h4"> {item.title} </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"> {item.description} </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">Learn More</a>
                </Button>
              </CardActions>
          </Card>
        )
    })

    return(
        <div className={styles.container}>
            <h3 align="center" id={styles.header}>Blog Posts</h3>
            <div className={styles.itemContainer}>
                {post}
            </div>
        </div>
    )
}