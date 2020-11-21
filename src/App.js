import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./sourceCode/dashboard";
import Signup from "./sourceCode/signup";
import Index from "./sourceCode/home";
import Post from "./sourceCode/postJob";
import { ParallaxProvider } from "react-scroll-parallax";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <ParallaxProvider>
            <Index />
          </ParallaxProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
