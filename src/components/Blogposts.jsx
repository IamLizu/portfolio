import React from 'react'
import styles from './blogposts.module.css'
import Posts from '../portfolio-data/blogpost.json'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function BlogPosts() {
    const post = Posts.map(item => {
        return(
            <Card key={item.url} className={styles.item}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={item.title}
                height="140"
                image={item.image}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h4">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href={item.url}>Learn More</a>
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