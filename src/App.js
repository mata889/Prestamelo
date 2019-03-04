import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
/*importando el navbar y lo demas de la parte superior de la pagina*/
import Header from "./Views/Header";
import Home from "./Views/Home";
import Ventas from "./Views/Ventas";

class App extends Component {
  render() {
    return (
     <div>
       <BrowserRouter>
       <div>
         <Header />
         <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/Ventas" component={Ventas} exact/>
           </Switch>
       </div>
       </BrowserRouter>
     </div>
    );
  }
}

export default App;
