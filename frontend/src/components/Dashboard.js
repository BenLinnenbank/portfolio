import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './Dashboard.css';
import About from './About.js';
import Gallery from './Gallery.js'
import Header from './Header.js'
import Menu from './Menu.js'
import Home from './Home.js'

function Dashboard() {

  return (
    <>
      <Menu />
      <Header />
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router >
    </>
  );
}

export default Dashboard;


// <Router>
//       <div className="about">
//         <Link to="/about">About me</Link>
//       </div>
//       <div className="gallery">
//         <Link to="/gallery">Gallery</Link>
//       </div>
//       <div className="contact">
//         <Link to="/contact">Contact</Link>
//       </div>
//       <Switch>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/gallery">
//           <Gallery />
//         </Route>
//         <Route path="/">
//           <Contact />
//         </Route>
//       </Switch>
//     </Router >