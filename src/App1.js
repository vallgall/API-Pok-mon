import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import "./App1.css";

// Pages
import Homepage from './pages/Homepage';
import PokemonPage from './pages/PokemonPage';

// Components
import Header from './components/Header';

const App1 = () => {
  return (
    <Router>
      <Header/>
      <Container>
        <Route exact path='/' component={Homepage} />
        <Route path='/pokemon/:id' component={PokemonPage}/>
      </Container>
    </Router>
  );
}

export default App1;
