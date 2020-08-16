import React from 'react';
import BlogPosts from './components/Blogposts';
import Projects from './components/Projects';
import { Grid } from '@material-ui/core'

function App() {
  return (
      <>
        <Grid container>

          <Grid item xs={12}>
            <BlogPosts />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Projects />
          </Grid>


        </Grid>
      </>
  );
}

export default App;
