import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "../components/Error";
import App from "../App";
import AddPerson from "../components/AddPerson";

class Routers extends Component{
    state = {
  
    };
  
    render() {
      return(
        <BrowserRouter>
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/addperson" component={AddPerson} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      );
    }
  }

  export default Routers;