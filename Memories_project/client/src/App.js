import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => (
  <BrowserRouter>
    <Container maxidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/auth" exact Component={Auth} />
      </Routes>
    </Container>
  </BrowserRouter>
);


export default App;