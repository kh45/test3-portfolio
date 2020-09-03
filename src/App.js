import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Typed from 'react-typed'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Button from 'react-bootstrap/button'
import Projects from './projects'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home'
import Navbar from './Navbar'
import About from './about'

function App() {
  return (
    // <div className="home-container">
    //   <h1>Hello My Name Is: <Typed strings={["Khaled Hassan"]} showCursor={false} startDelay={500} typeSpeed={40} /></h1>
    //   <h1>I am a: <Typed strings={["Full Stack Web Developer"]} startDelay={1500} typeSpeed={40} /></h1>
    //   <Typed strings={["What would you like to see?"]} startDelay={3000} typeSpeed={40} />
    //   <hr></hr>
      // <Router>
      //   <Route exact path="/" component={Home} />
      //   <Route exact path="/about" component={About} />
      //   <Route exact path="/projects" component={Projects} />
      // </Router>
      <div>
        <Home />
        <Navbar />
        <About />
        <Projects />
      </div>
  );
}

export default App;
