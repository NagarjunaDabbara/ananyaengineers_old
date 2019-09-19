import React,{Component} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Home from './pages/home.js'
import About from './pages/about.js'
import ContactUs from './pages/contactus.js'
import Projects from './pages/projects.js'
import OurServicesContent from './components/ourservices/ourservicescontent.js'
import CurrentProject from './components/CurrentProject/currentproject.js'
import PastProject from './components/pastproject/pastproject.js'

import Error from './components/error/error.js'



class App extends Component {
  render(){
  return(
    <div>
    <Router>
     
     
     <Route path='/' exact={true} component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contactUs' component={ContactUs}/>
    <Route path='/projects' component={Projects}/>
     <Route path="/ourservicescontent" component={OurServicesContent}/>
     <Route path="/currentProject" component={CurrentProject}/>
     <Route path="/pastproject" component={PastProject}/>

     
     {/* <Route path='*' component={Error} /> */}
      </Router>
    
   


      <div className="award">
  <div className="ribbon top">
    <span><strong>site </strong>designed</span>
  </div>
  <div className="ribbon bottom">
    <span>by <strong>Arjun</strong></span>
  </div>
</div>


   <section></section>
   <section></section>
   <section></section>
   <section></section>
   <section></section>
   <section></section>


   </div>
  )}
}
  
   


export default App;
