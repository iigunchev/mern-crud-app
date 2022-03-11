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
      <main className="gap-4 pt-4 flex flex-col items-center">
        <Form
        currentId={currentId} 
        setCurrentId={setCurrentId}/>
        <Posts
        setCurrentId={setCurrentId}/>
      </main>
    </Container>
  )
}

export default App;