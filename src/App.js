import './assets/css/App.css';
import React from 'react';
import logo from './assets/image/fondo2.jpg';
import InfoNavbar from './components/InfoNavbar';
import Portfolio from './components/Portfolio';
import SkillSetComponent from './components/SkillSetComponent';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a name="home" href="/home"> </a>
      <img src={logo} className="App-logo" alt="logo" />
      <InfoNavbar></InfoNavbar>
      <Portfolio></Portfolio>
      <SkillSetComponent></SkillSetComponent>
      <Contact></Contact>
        
      </header>
      
      
    </div>
  );
}

export default App;
