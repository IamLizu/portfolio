import React from 'react';
import BlogPosts from './components/Blogposts';
import Projects from './components/Projects';
import { Grid } from '@material-ui/core'
import GitHub from './components/GitHub';
import Header from './components/Header'
import Certifications from './components/Certifications'

function App() {
  return (
      <>
        <header>
          <Header />
        </header>
        <Grid container>

          <Grid item xs={12}>
            <BlogPosts />
          </Grid>

          <Grid item xs={12} sm={6} style={{backgroundColor: "#212121"}}>
            <Projects />
          </Grid>

          <Grid item xs={12} sm={6} style={{backgroundColor: "red"}}>
            <GitHub />
          </Grid>

          <Grid item xs={12}>
            <Certifications />
          </Grid>

        </Grid>
      </>
  );
}

export default App;
