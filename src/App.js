import './App.css';
import Poem from "./views/poem"
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Home from "./views/home"
import Submit from "./views/submit"

const App = () => {

  return (
    <Router>
        <div className='navbar'>
          <div className='navbut'>
            <Link to="/"> <button className="bt">Home</button></Link>
          </div>
          <div className='navbut'>
          <Link to="/submit"> <button className="bt">Submit a poem</button> </Link>
          </div>
            
        </div>
        <Switch>
            <Route path="/poems/:id"> 
                  <Poem/>
            </Route>
            <Route path="/submit">
                <Submit />
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </Router>
)
}

export default App;
