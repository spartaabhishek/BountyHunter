import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./sourceCode/dashboard";
import Signup from "./sourceCode/signup";
import Index from "./sourceCode/home";
import Post from "./sourceCode/postJob";
import Signin from "./sourceCode/signin";
import AuthContext from "./sourceCode/AuthContext";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  const [authToken, updateToken] = React.useState("")
  const value = {
    token: authToken,
    updateToken: (token)=>updateToken(token)
  }

  return (
  <AuthContext.Provider value={value}>
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
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
    </AuthContext.Provider>
  );
}

export default App;
