import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
/*importando el navbar y lo demas de la parte superior de la pagina*/
import Header from "./Views/Header";
import Home from "./Views/Home";


class App extends Component {
  render() {
    return (
     <div className="App">
       <BrowserRouter>
       <div>
         <Header />
          <Switch>
           <Route path="/" component={Home} exact/>
          </Switch>
       </div>
       </BrowserRouter>
     </div>
    );
  }
}

export default App;
