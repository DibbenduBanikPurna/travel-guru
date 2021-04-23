import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import LogIn from './Components/LogIn/LogIn';
import Hotel from './Components/Hotel/Hotel';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

  export const userContext=createContext()
  export const signContext=createContext()
  export const nameContext=createContext()

  function App() {

  const [Coxinfo,setCoxsetInfo]=useState({}) 
  const [loggedInUser,setLoggedInUser]=useState('')
  const [name,setName]=useState('')
  
  
  return (
    
    <div className="App">
      <p className="bg-warning"><small>Email:{(loggedInUser.email || sessionStorage.getItem('email'))}</small></p>
      <Router>
    
        <Switch>
          <userContext.Provider value={[Coxinfo,setCoxsetInfo]}>
         
            <signContext.Provider value={[loggedInUser,setLoggedInUser]}>
            <nameContext.Provider value={[name,setName]}>
            <Navbar/>
         
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/booking">
            <Booking/>
          </Route>
          <Route path="/login"> <LogIn/> </Route>
          <Route path="/contact"><Contact/> </Route>
          <Route path="/about"> <About/> </Route>

          <PrivateRoute path="/hotel"> <Hotel/> </PrivateRoute>

          </nameContext.Provider>
          </signContext.Provider>
          </userContext.Provider>
        
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
