import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Works from './routes/Works';
import Profile from './routes/Profile';
import './App.scss';

function App() {
  return (
   <HashRouter>
     <Header />
     <Route path="/" exact={true} component={Profile} />
     <Route path="/works" component={Works} />
   </HashRouter>
  );
}

export default App;
