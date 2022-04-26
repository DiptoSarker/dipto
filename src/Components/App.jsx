import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import KeyFeature from './pages/KeyFeature';
import Pricing from './pages/Pricing';
import Demo from './pages/Demo';
import Testimonial from './pages/Testimonial';
import Navbar from './NavBar/NavBar';
import './App.css'

function App() {
   return (
    <div className='container'>
      <Router>
        <Navbar/>
        <Switch>
        
        <Route path="/features"exact component={KeyFeature}/>
        <Route path="/pricing" exact component={Pricing}/>
        <Route path="/testimonials" exact component={Testimonial}/>
        <Route path="/demo" exact component={Demo}/>
        <Route path="/"  component={Home}/>
        </Switch> 
      </Router>
    </div>      
  );
}

export default App
