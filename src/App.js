import React from "react";
import Layout from "./layouts/Layouts/Master";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Home from "./pages/Homepage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import "./App.css";
function App() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/blog" component={Blog}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route render={Notfound}></Route>
      </Switch>
    </Router>
    
    
  );
}

export default App;
