import FooterComponent from './components/FooterComponent';
import Home from './components/Home';
import Loader from './components/Loader';
import Navbarcomponent from './components/NavbarComponent';
import './App.css';

import React,{useState} from 'react';

function App() {
  return (
    <div className="App">
    
      <Loader></Loader>
        <Navbarcomponent></Navbarcomponent>
        <Home></Home>
        <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
