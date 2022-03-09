import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Header from "./components/Header";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import "./styles.scss";

// import memories from "./images/memories.png";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])
  

  return (
    <Container maxwidth="lg">
      <Header />
      {/* <AppBar className="appBar" position="static" color="inherit"> */}
        {/* <Typography className="heading" variant="h2" align="center">Memories</Typography> */}
        {/* <img className="image" src={memories} alt="memories" height="60"/> */}
      {/* </AppBar> */}
        <main className="gap-4 pt-4 flex flex-col items-center">
          <Form
          currentId={currentId} 
          setCurrentId={setCurrentId}/>
          <Posts
          setCurrentId={setCurrentId}/>
        </main>
        {/* <Container>
          <Grid className="mainContainer" container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container> */}
    </Container>
  )
}

export default App;