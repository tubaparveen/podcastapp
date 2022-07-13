import Header from './components/header';
import React from 'react';
import Register from './components/register';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Login from './components/login';
import About from './components/about';
import Allpodcast from './components/allpodcast';
import Addpodcast from './components/addpodcast';
function App() {
  
  return (
    
    <Router>
      <Header></Header>
    <div className="App">
    
    <Route component={Register} path="/register"></Route>
    <Route component={Login} path="/login"></Route>
    <Route component={About} path="/about"></Route>
    <Route component={Allpodcast} path="/allpodcast"></Route>
    <Route component={Addpodcast} path="/addpodcast"></Route>

    </div>
    </Router>
  );
}

export default App;
