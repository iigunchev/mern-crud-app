import React from 'react';
import { BrowserRouter as Browser, Routes, Route} from 'react-router-dom';
import { Container } from "@mui/material";

import Header from "./components/Header";
import Home from "./components/Home";
import "./styles.scss";
import Auth from './components/Auth';

// import memories from "./images/memories.png";

const App = () => {
  

  return (
    <Browser>
      <Routes>
        <Container maxwidth="lg">
          <Header />
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
        </Container>
      </Routes>
    </Browser>
  )
}

export default App;